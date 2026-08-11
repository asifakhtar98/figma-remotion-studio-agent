#!/usr/bin/env node

/**
 * Parses src/Root.tsx and regenerates viewer/src/compositionRegistry.ts
 * so the viewer always stays in sync with the main Remotion project.
 *
 * Usage: node scripts/sync-viewer-registry.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const rootTsxPath = resolve(projectRoot, 'src/Root.tsx');
const registryPath = resolve(projectRoot, 'viewer/src/compositionRegistry.ts');

const rootSource = readFileSync(rootTsxPath, 'utf-8');

// 1. Extract constant definitions (e.g. const WHATSEVR_WIDTH = 921;)
const constants = new Map();
for (const match of rootSource.matchAll(/const\s+(\w+)\s*=\s*(\d+)/g)) {
  constants.set(match[1], parseInt(match[2], 10));
}

function resolveValue(raw) {
  const num = parseInt(raw, 10);
  if (!isNaN(num)) return num;
  if (constants.has(raw)) return constants.get(raw);
  throw new Error(`Cannot resolve value: ${raw}`);
}

// 2. Extract import paths: { LocalName → { importPath, exportName } }
const importMap = new Map();
// Handles multi-name imports & alias imports, e.g. `import {MarketingPosterScreen as VhimsMarketingPosterScreen} from './x'`.
for (const match of rootSource.matchAll(/import\s*\{([^}]+)\}\s*from\s*'\.\/(.+?)'/g)) {
  const importPath = match[2];
  for (const rawName of match[1].split(',')) {
    const clean = rawName.replace(/^\s*type\s+/, '').trim();
    if (!clean) continue;
    const parts = clean.split(/\s+as\s+/);
    const exportName = parts[0].trim();
    const localName = (parts[1] || parts[0]).trim();
    importMap.set(localName, { importPath, exportName });
  }
}

// 3. Parse each <Composition ... /> block
const compositionRegex = /<Composition\s+([\s\S]*?)\/>/g;
const propRegex = /(\w+)=\{([^}]+)\}/g;
const stringPropRegex = /(\w+)="([^"]+)"/g;

const compositions = [];

for (const block of rootSource.matchAll(compositionRegex)) {
  const body = block[1];
  const props = {};

  for (const p of body.matchAll(stringPropRegex)) {
    props[p[1]] = p[2];
  }
  for (const p of body.matchAll(propRegex)) {
    props[p[1]] = p[2].trim();
  }

  const id = props.id;
  if (!id) continue;

  const componentName = props.component;
  const importInfo = importMap.get(componentName);
  if (!importInfo) {
    console.warn(`Warning: no import found for component "${componentName}", skipping`);
    continue;
  }

  // Parse the id: <project>-<NN>-<ScreenName>
  const idParts = id.match(/^(\w+)-(\d+)-(\w+)$/);
  if (!idParts) {
    console.warn(`Warning: composition id "${id}" doesn't match expected pattern, skipping`);
    continue;
  }

  const projectName = idParts[1];
  const screenName = idParts[3];

  compositions.push({
    id,
    exportName: importInfo.exportName,
    importPath: `@src/${importInfo.importPath}`,
    width: resolveValue(props.width),
    height: resolveValue(props.height),
    durationInFrames: resolveValue(props.durationInFrames),
    fps: resolveValue(props.fps),
    projectName,
    screenName,
  });
}

// 4. Generate the registry file
const entries = compositions.map((c) => {
  return `  {
    id: '${c.id}',
    component: React.lazy(() => import('${c.importPath}').then(m => ({ default: m.${c.exportName} }))),
    width: ${c.width},
    height: ${c.height},
    durationInFrames: ${c.durationInFrames},
    fps: ${c.fps},
    projectName: '${c.projectName}',
    screenName: '${c.screenName}'
  }`;
}).join(',\n');

const output = `import React from 'react';

export interface CompositionEntry {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  width: number;
  height: number;
  durationInFrames: number;
  fps: number;
  projectName: string;
  screenName: string;
}

export const compositions: CompositionEntry[] = [
${entries}
];
`;

writeFileSync(registryPath, output, 'utf-8');
console.log(`Synced ${compositions.length} compositions to ${registryPath}`);
