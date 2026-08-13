import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { promises as fs } from 'fs'
import { createWriteStream } from 'fs'
import { randomUUID } from 'crypto'
import { createRequire } from 'module'
import type { IncomingMessage, ServerResponse } from 'http'

const viewerRequire = createRequire(import.meta.url);
const archiver: typeof import('archiver') = viewerRequire('archiver');

const COMPOSITION_ID_PATTERN = /^[A-Za-z0-9_-]+$/;
const SUPPORTED_FORMATS = ['png', 'jpeg', 'mp4'] as const;
type SupportedFormat = (typeof SUPPORTED_FORMATS)[number];

interface CompositionManifestEntry {
  id: string;
  width: number;
  height: number;
  durationInFrames: number;
  fps: number;
  isStill: boolean;
  projectName: string;
  screenName: string;
}

function sendJson(res: ServerResponse, statusCode: number, payload: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid request body'));
      }
    });
    req.on('error', reject);
  });
}

function remotionRenderPlugin(): Plugin {
  const projectRoot = path.resolve(__dirname, '..');
  const manifestPath = path.resolve(__dirname, 'src', 'compositionRegistry.json');
  // Resolve Remotion's Node renderer from the root project (installed via @remotion/cli).
  const rootRequire = createRequire(path.join(projectRoot, 'package.json'));

  async function loadManifest(): Promise<CompositionManifestEntry[]> {
    return JSON.parse(await fs.readFile(manifestPath, 'utf-8'));
  }

  // Bundles the Remotion project once per request batch so all stills in a
  // batch share one webpack build and one headless browser session.
  async function createRenderSession() {
    const { bundle } = rootRequire('@remotion/bundler');
    const renderer = rootRequire('@remotion/renderer');
    const serveUrl: string = await bundle({
      entryPoint: path.join(projectRoot, 'src', 'index.ts'),
      onProgress: () => {},
    });

    return {
      async renderStillTo(compositionId: string, outputPath: string, imageFormat: 'png' | 'jpeg') {
        const composition = await renderer.selectComposition({ serveUrl, id: compositionId });
        await renderer.renderStill({
          composition,
          serveUrl,
          output: outputPath,
          imageFormat,
          jpegQuality: imageFormat === 'jpeg' ? 90 : undefined,
        });
      },
      async renderVideoTo(compositionId: string, outputPath: string) {
        const composition = await renderer.selectComposition({ serveUrl, id: compositionId });
        await renderer.renderMedia({
          composition,
          serveUrl,
          codec: 'h264',
          outputLocation: outputPath,
        });
      },
    };
  }

  async function createZip(zipPath: string, files: string[]): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const output = createWriteStream(zipPath);
      const archive = archiver('zip', { zlib: { level: 9 } });
      output.on('close', () => resolve());
      archive.on('error', reject);
      archive.pipe(output);
      for (const file of files) {
        archive.file(file, { name: path.basename(file) });
      }
      archive.finalize();
    });
  }

  async function streamFileAndCleanup(
    res: ServerResponse,
    filePath: string,
    contentType: string,
    downloadName: string
  ) {
    const file = await fs.readFile(filePath);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${downloadName}"`);
    res.end(file);
    await fs.unlink(filePath).catch(() => {});
  }

  return {
    name: 'remotion-render-api',
    configureServer(server) {
      server.middlewares.use('/api/render', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        (async () => {
          const { compositionId, format } = await readJsonBody(req) as {
            compositionId: unknown;
            format: unknown;
          };

          if (typeof compositionId !== 'string' || !COMPOSITION_ID_PATTERN.test(compositionId)) {
            sendJson(res, 400, { error: 'Invalid compositionId' });
            return;
          }

          if (!SUPPORTED_FORMATS.includes(format as SupportedFormat)) {
            sendJson(res, 400, { error: 'Invalid format' });
            return;
          }

          const ext = format as SupportedFormat;
          const outputPath = path.join(projectRoot, 'out', `${randomUUID()}.${ext}`);
          await fs.mkdir(path.dirname(outputPath), { recursive: true });

          try {
            const session = await createRenderSession();
            if (ext === 'mp4') {
              await session.renderVideoTo(compositionId, outputPath);
            } else {
              await session.renderStillTo(compositionId, outputPath, ext);
            }
          } catch (e: any) {
            sendJson(res, 500, { error: e?.message || 'Render failed' });
            return;
          }

          const contentTypes: Record<SupportedFormat, string> = {
            png: 'image/png',
            jpeg: 'image/jpeg',
            mp4: 'video/mp4',
          };
          await streamFileAndCleanup(res, outputPath, contentTypes[ext], `${compositionId}.${ext}`);
        })().catch((e: any) => {
          if (!res.headersSent) {
            sendJson(res, e?.message === 'Invalid request body' ? 400 : 500, {
              error: e?.message || 'Render failed',
            });
          }
        });
      });

      server.middlewares.use('/api/render-project-zip', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        (async () => {
          const { projectName, format = 'png' } = await readJsonBody(req) as {
            projectName: unknown;
            format?: unknown;
          };

          if (typeof projectName !== 'string' || !COMPOSITION_ID_PATTERN.test(projectName)) {
            sendJson(res, 400, { error: 'Invalid projectName' });
            return;
          }

          if (format !== 'png' && format !== 'jpeg') {
            sendJson(res, 400, { error: 'Invalid format' });
            return;
          }

          const manifest = await loadManifest();
          const stillsToRender = manifest.filter(
            (entry) => entry.projectName === projectName && entry.isStill
          );

          if (stillsToRender.length === 0) {
            sendJson(res, 404, { error: 'No stills found for this project' });
            return;
          }

          const tmpId = randomUUID();
          const tempDir = path.join(projectRoot, 'out', `zip-${tmpId}`);
          const zipPath = path.join(projectRoot, 'out', `${tmpId}.zip`);
          await fs.mkdir(tempDir, { recursive: true });

          try {
            const session = await createRenderSession();
            const renderedFiles: string[] = [];
            for (const still of stillsToRender) {
              const outputPath = path.join(tempDir, `${still.id}.${format}`);
              try {
                await session.renderStillTo(still.id, outputPath, format);
                renderedFiles.push(outputPath);
              } catch (e: any) {
                sendJson(res, 500, { error: `Render failed for ${still.id}: ${e?.message}` });
                return;
              }
            }

            await createZip(zipPath, renderedFiles);
            await streamFileAndCleanup(res, zipPath, 'application/zip', `${projectName}-stills.zip`);
          } finally {
            await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
            await fs.unlink(zipPath).catch(() => {});
          }
        })().catch((e: any) => {
          if (!res.headersSent) {
            sendJson(res, e?.message === 'Invalid request body' ? 400 : 500, {
              error: e?.message || 'Batch render failed',
            });
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), remotionRenderPlugin()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    },
    dedupe: [
      'react',
      'react-dom',
      'remotion',
      '@remotion/player',
      '@remotion/google-fonts',
      'lucide-react',
    ],
  },
  server: {
    port: 4000
  }
})
