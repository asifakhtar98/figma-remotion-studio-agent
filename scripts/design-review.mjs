#!/usr/bin/env node

/**
 * Renders one composition and writes a side-by-side comparison page against
 * the project's saved reference images, for the 2-pass design review step.
 *
 * Usage: npm run design:review -- <compositionId>
 * Output: tmp/design-review/<compositionId>/compare.html (+ render.png)
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const compositionId = process.argv[2];

if (!compositionId) {
  console.error('Usage: npm run design:review -- <compositionId>');
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const registrySource = readFileSync(
  resolve(projectRoot, 'viewer/src/compositionRegistry.ts'),
  'utf-8',
);
const entryMatch = registrySource.match(
  new RegExp(`id:\\s*'${compositionId}'[\\s\\S]*?projectName:\\s*'([^']+)'`),
);
if (!entryMatch) {
  console.error(`Composition "${compositionId}" not found in viewer registry. Run npm run sync:viewer first.`);
  process.exit(1);
}
const projectName = entryMatch[1];

const reviewDir = resolve(projectRoot, 'tmp/design-review', compositionId);
mkdirSync(reviewDir, { recursive: true });

const renderPath = resolve(reviewDir, 'render.png');
console.log(`Rendering ${compositionId} ...`);
execFileSync('npx', ['remotion', 'still', 'src/index.ts', compositionId, renderPath], {
  cwd: projectRoot,
  stdio: ['ignore', 'ignore', 'inherit'],
});

const referenceDir = resolve(projectRoot, 'src/projects', projectName, 'src/reference');
const referenceImages = [];
if (existsSync(referenceDir)) {
  for (const file of readdirSync(referenceDir)) {
    if (/\.(png|jpe?g|webp)$/i.test(file)) {
      copyFileSync(resolve(referenceDir, file), resolve(reviewDir, `ref-${file}`));
      referenceImages.push(`ref-${file}`);
    }
  }
}

const referenceColumn = referenceImages.length
  ? referenceImages
      .map((f) => `<figure><figcaption>${f}</figcaption><img src="${f}"></figure>`)
      .join('\n')
  : '<p class="empty">No reference images found in src/reference/ for this project.</p>';

const html = `<!doctype html>
<meta charset="utf-8">
<title>Design review — ${compositionId}</title>
<style>
  body { margin: 0; font: 14px system-ui; background: #f3f4f6; color: #111827; }
  header { padding: 12px 20px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600; }
  .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px; align-items: start; }
  section h2 { font-size: 13px; text-transform: uppercase; letter-spacing: .05em; color: #6b7280; margin: 0 0 8px; }
  img { max-width: 100%; display: block; border: 1px solid #e5e7eb; background: #fff; }
  figure { margin: 0 0 16px; }
  figcaption { font-size: 12px; color: #6b7280; margin-bottom: 4px; }
  .empty { color: #9ca3af; }
</style>
<header>Design review — ${compositionId}</header>
<div class="columns">
  <section><h2>Reference</h2>${referenceColumn}</section>
  <section><h2>Render</h2><figure><img src="render.png"></figure></section>
</div>
`;

const htmlPath = resolve(reviewDir, 'compare.html');
writeFileSync(htmlPath, html);
console.log(`Comparison page: ${htmlPath}`);
