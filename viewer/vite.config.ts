import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { execFile } from 'child_process'
import { promises as fs } from 'fs'
import { randomUUID } from 'crypto'
import type { IncomingMessage, ServerResponse } from 'http'

const COMPOSITION_ID_PATTERN = /^[A-Za-z0-9_-]+$/;
const SUPPORTED_FORMATS = ['png', 'jpeg', 'mp4'] as const;
type SupportedFormat = (typeof SUPPORTED_FORMATS)[number];

function remotionRenderPlugin(): Plugin {
  const projectRoot = path.resolve(__dirname, '..');

  return {
    name: 'remotion-render-api',
    configureServer(server) {
      server.middlewares.use('/api/render', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        let body = '';
        req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
        req.on('end', () => {
          try {
            const { compositionId, format } = JSON.parse(body) as {
              compositionId: unknown;
              format: unknown;
            };

            if (typeof compositionId !== 'string' || !COMPOSITION_ID_PATTERN.test(compositionId)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid compositionId' }));
              return;
            }

            if (!SUPPORTED_FORMATS.includes(format as SupportedFormat)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid format' }));
              return;
            }

            const ext = format as SupportedFormat;
            const tmpId = randomUUID();
            const outputPath = path.join(projectRoot, 'out', `${tmpId}.${ext}`);
            const filename = `${compositionId}.${ext}`;

            const args =
              ext === 'mp4'
                ? ['remotion', 'render', 'src/index.ts', compositionId, outputPath]
                : [
                    'remotion',
                    'still',
                    'src/index.ts',
                    compositionId,
                    ...(ext === 'jpeg' ? ['--image-format=jpeg', '--quality=90'] : []),
                    outputPath,
                  ];

            execFile('npx', args, { cwd: projectRoot, timeout: 120_000 }, async (error) => {
              if (error) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: error.message }));
                return;
              }

              try {
                const file = await fs.readFile(outputPath);
                const contentTypes: Record<string, string> = {
                  png: 'image/png',
                  jpeg: 'image/jpeg',
                  mp4: 'video/mp4',
                };
                res.setHeader('Content-Type', contentTypes[ext]);
                res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
                res.end(file);
                await fs.unlink(outputPath).catch(() => {});
              } catch {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Failed to read rendered file' }));
              }
            });
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid request body' }));
          }
        });
        });

      server.middlewares.use('/api/render-project-zip', (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method not allowed');
          return;
        }

        let body = '';
        req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            const { projectName, format = 'png' } = JSON.parse(body) as {
              projectName: unknown;
              format?: unknown;
            };

            if (typeof projectName !== 'string' || !COMPOSITION_ID_PATTERN.test(projectName)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid projectName' }));
              return;
            }

            if (format !== 'png' && format !== 'jpeg') {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid format' }));
              return;
            }

            const registryPath = path.resolve(__dirname, 'src', 'compositionRegistry.ts');
            const registryContent = await fs.readFile(registryPath, 'utf-8');
            // Parse composition entries from the registry
            const entryPattern = /\{[^}]*id:\s*'([^']+)'[^}]*projectName:\s*'([^']+)'[^}]*durationInFrames:\s*(\d+)[^}]*\}/g;
            const allEntries: { id: string; projectName: string; durationInFrames: number }[] = [];
            let match;
            while ((match = entryPattern.exec(registryContent)) !== null) {
              allEntries.push({ id: match[1], projectName: match[2], durationInFrames: parseInt(match[3], 10) });
            }

            const stillsToRender = allEntries.filter(
              e => e.projectName === projectName && e.durationInFrames <= 1
            );

            if (stillsToRender.length === 0) {
              res.statusCode = 404;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'No stills found for this project' }));
              return;
            }

            const tmpId = randomUUID();
            const tempDir = path.join(projectRoot, 'out', `zip-${tmpId}`);
            await fs.mkdir(tempDir, { recursive: true });

            const renderedFiles: string[] = [];

            const execFilePromise = (cmd: string, args: string[], options: any) =>
              new Promise<void>((resolve, reject) => {
                execFile(cmd, args, options, (error) => {
                  if (error) reject(error);
                  else resolve();
                });
              });

            for (const still of stillsToRender) {
              const outputPath = path.join(tempDir, `${still.id}.${format}`);
              const args = [
                'remotion',
                'still',
                'src/index.ts',
                still.id,
                outputPath,
                ...(format === 'jpeg' ? ['--image-format=jpeg', '--quality=90'] : [])
              ];
              try {
                await execFilePromise('npx', args, { cwd: projectRoot, timeout: 120_000 });
                renderedFiles.push(outputPath);
              } catch (e: any) {
                // Cleanup temp dir
                await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: `Render failed for ${still.id}: ${e.message}` }));
                return;
              }
            }

            const zipPath = path.join(projectRoot, 'out', `${tmpId}.zip`);
            try {
              await execFilePromise('zip', ['-j', zipPath, ...renderedFiles], { cwd: tempDir });
              const file = await fs.readFile(zipPath);
              res.setHeader('Content-Type', 'application/zip');
              res.setHeader('Content-Disposition', `attachment; filename="${projectName}-stills.zip"`);
              res.end(file);
            } catch (e: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: `Zip creation failed: ${e.message}` }));
            } finally {
              await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
              await fs.unlink(zipPath).catch(() => {});
            }
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid request body' }));
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
