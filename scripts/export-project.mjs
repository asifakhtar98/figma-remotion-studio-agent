#!/usr/bin/env node

/**
 * Renders every composition of one project in one shot (client handoff).
 * Stills (durationInFrames <= 1) render to PNG; flows render to MP4.
 *
 * Usage: npm run export:project -- <project-name> [png|jpeg]
 */

import { readFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const projectName = process.argv[2];
const imageFormat = process.argv[3] || 'png';

if (!projectName) {
  console.error('Usage: npm run export:project -- <project-name> [png|jpeg]');
  process.exit(1);
}
if (!['png', 'jpeg'].includes(imageFormat)) {
  console.error(`Unsupported image format "${imageFormat}" — use png or jpeg.`);
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const registrySource = readFileSync(
  resolve(projectRoot, 'viewer/src/compositionRegistry.ts'),
  'utf-8',
);

const entries = [];
for (const match of registrySource.matchAll(
  /id:\s*'([^']+)'[\s\S]*?durationInFrames:\s*(\d+)[\s\S]*?projectName:\s*'([^']+)'/g,
)) {
  entries.push({ id: match[1], durationInFrames: parseInt(match[2], 10), projectName: match[3] });
}

const targets = entries.filter((e) => e.projectName === projectName);
if (targets.length === 0) {
  const known = [...new Set(entries.map((e) => e.projectName))].join(', ');
  console.error(`No compositions found for project "${projectName}". Known projects: ${known}`);
  process.exit(1);
}

const outDir = resolve(projectRoot, 'out', projectName);
mkdirSync(outDir, { recursive: true });

let failed = 0;
for (const entry of targets) {
  const isStill = entry.durationInFrames <= 1;
  const outFile = resolve(outDir, `${entry.id}.${isStill ? imageFormat : 'mp4'}`);
  const renderArgs = isStill
    ? ['remotion', 'still', 'src/index.ts', entry.id, outFile, `--image-format=${imageFormat}`]
    : ['remotion', 'render', 'src/index.ts', entry.id, outFile];
  console.log(`Rendering ${entry.id} ...`);
  try {
    execFileSync('npx', renderArgs, { cwd: projectRoot, stdio: ['ignore', 'ignore', 'inherit'] });
  } catch {
    failed += 1;
    console.error(`FAILED: ${entry.id}`);
  }
}

console.log(`Done: ${targets.length - failed}/${targets.length} rendered to out/${projectName}/`);
if (failed > 0) process.exit(1);
