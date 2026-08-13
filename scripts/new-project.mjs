#!/usr/bin/env node

/**
 * Scaffolds a new isolated project under src/projects/<project-name>.
 *
 * Usage: npm run new:project -- <project-name>
 */

import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const projectName = process.argv[2];

if (!projectName || !/^[a-z][a-z0-9-]*$/.test(projectName)) {
  console.error('Usage: npm run new:project -- <project-name>  (kebab-case, e.g. acme-banking-app)');
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const projectDir = resolve(projectRoot, 'src/projects', projectName, 'src');

if (existsSync(resolve(projectRoot, 'src/projects', projectName))) {
  console.error(`Project "${projectName}" already exists.`);
  process.exit(1);
}

const subdirs = ['screens', 'components', 'assets', 'reference'];
for (const dir of subdirs) {
  mkdirSync(resolve(projectDir, dir), { recursive: true });
  writeFileSync(resolve(projectDir, dir, '.gitkeep'), '');
}

const tokensTemplate = `/**
 * Design tokens for the "${projectName}" project.
 * Fill in when the first screen is built; every later screen imports from here.
 * Values are Tailwind classes unless a raw value is unavoidable.
 */

export const designTokens = {
  colors: {
    background: '', // e.g. 'bg-white'
    surface: '', // e.g. 'bg-gray-50'
    textPrimary: '', // e.g. 'text-gray-900'
    textSecondary: '', // e.g. 'text-gray-500'
    accent: '', // e.g. 'bg-indigo-600'
    border: '', // e.g. 'border-gray-200'
  },
  font: {
    family: '', // Google Font name loaded via @remotion/google-fonts
    weights: [] as number[],
  },
  radius: {
    control: '', // e.g. 'rounded-xl' — inputs, buttons
    card: '', // e.g. 'rounded-2xl'
  },
  spacing: {
    screenPadding: '', // e.g. 'p-6'
    sectionGap: '', // e.g. 'gap-8'
    itemGap: '', // e.g. 'gap-3'
  },
  canvas: {
    width: 0,
    height: 0,
  },
};
`;

writeFileSync(resolve(projectDir, 'designTokens.ts'), tokensTemplate);

console.log(`Scaffolded src/projects/${projectName}/src/{${subdirs.join(',')}} + designTokens.ts`);
console.log('Next: build the first screen, fill in designTokens.ts, register the Composition in src/Root.tsx.');
