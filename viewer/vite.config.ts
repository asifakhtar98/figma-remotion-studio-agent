import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { exec } from 'child_process'
import { promises as fs } from 'fs'
import { randomUUID } from 'crypto'
import type { IncomingMessage, ServerResponse } from 'http'

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
              compositionId: string;
              format: 'png' | 'jpeg' | 'mp4';
            };

            const tmpId = randomUUID();
            const ext = format === 'jpeg' ? 'jpeg' : format === 'mp4' ? 'mp4' : 'png';
            const outputPath = path.join(projectRoot, 'out', `${tmpId}.${ext}`);
            const filename = `${compositionId}.${ext}`;

            let command: string;
            if (format === 'mp4') {
              command = `npx remotion render src/index.ts "${compositionId}" "${outputPath}"`;
            } else {
              const imgFlag = format === 'jpeg' ? ' --image-format=jpeg --quality=90' : '';
              command = `npx remotion still src/index.ts "${compositionId}"${imgFlag} "${outputPath}"`;
            }

            exec(command, { cwd: projectRoot, timeout: 120_000 }, async (error) => {
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
