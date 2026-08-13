#!/usr/bin/env node
// Remotion pitfall linter — mechanical enforcement of the pitfalls table in AGENTS.md.
// Usage:
//   node scripts/lint-remotion.mjs                 # lint all of src/projects/
//   node scripts/lint-remotion.mjs <file> [...]    # lint specific files
// Exit 1 when findings exist.

import {readFileSync, readdirSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PROJECTS_DIR = join(ROOT, 'src', 'projects');

// severity 'error' = breaks the render (blocks commit). 'warn' = off-spec but harmless in a still.
const RULES = [
  {
    severity: 'error',
    id: 'native-img',
    pattern: /<img[\s>]/,
    message: 'Native <img> tag — silently blank in CLI renders. Use <Img> from "remotion".',
  },
  {
    severity: 'error',
    id: 'dark-variant',
    pattern: /className=(?:"[^"]*\bdark:|\{`[^`]*\bdark:)/,
    message: 'Tailwind dark: variant — Remotion has no system theme. Use explicit dark classes (bg-gray-900).',
  },
  {
    severity: 'warn',
    id: 'overflow-scroll',
    pattern: /\boverflow(?:-[xy])?-(?:auto|scroll)\b/,
    message: 'Scrolling overflow class — canvas is fixed, nothing scrolls. Make the canvas tall enough.',
  },
  {
    severity: 'error',
    id: 'position-fixed',
    pattern: /position:\s*['"]fixed['"]|className="(?:[^"]*\s)?fixed[\s"]|className=\{`(?:[^`]*\s)?fixed[\s`]/,
    message: 'position: fixed — fixes to composition frame, not viewport. Use absolute within a positioned parent.',
  },
  {
    severity: 'error',
    id: 'viewport-units',
    pattern: /\b\d+(?:\.\d+)?d?v[hw]\b|\b(?:h|w|min-h|min-w|max-h|max-w)-(?:screen|dvh|svh|lvh)\b/,
    message: 'Viewport units (vh/vw/h-screen) — viewport is the composition size. Use explicit px or Tailwind spacing.',
  },
  {
    severity: 'warn',
    id: 'interactive-state',
    pattern: /className=(?:"[^"]*\b(?:hover|focus|active):|\{`[^`]*\b(?:hover|focus|active):)/,
    message: 'hover:/focus:/active: state — no interaction in a still render. Show resting state only.',
  },
  {
    severity: 'error',
    id: 'media-tag',
    pattern: /<(?:video|audio)[\s>]/,
    message: 'Native <video>/<audio> tag — will not play in stills. Use Remotion media components in flow compositions only.',
    skipInFlow: true,
  },
  {
    severity: 'warn',
    id: 'css-animation',
    pattern: /\banimate-(?:pulse|ping|spin|bounce|spin-slow)\b/,
    message: 'CSS animation class — runs unpredictably in single-frame stills. Remove and show resting state.',
  },
  {
    severity: 'warn',
    id: 'css-transition',
    pattern: /\btransition(?:-(?:all|colors|opacity|shadow|transform|none))?\b/,
    message: 'CSS transition class — no user interaction in stills, dead code. Remove.',
  },
];

function collectFiles(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) collectFiles(full, out);
    else if (/\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}

const args = process.argv.slice(2).filter((f) => /\.tsx?$/.test(f));
const files = args.length ? args : collectFiles(PROJECTS_DIR);

let errors = 0;
let warnings = 0;
for (const file of files) {
  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  const inFlow = /\/flow\//.test(file);
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // skip comments
    for (const rule of RULES) {
      if (rule.skipInFlow && inFlow) continue;
      if (rule.pattern.test(line)) {
        if (rule.severity === 'error') errors++;
        else warnings++;
        console.error(`${relative(ROOT, file)}:${i + 1} ${rule.severity} [${rule.id}] ${rule.message}`);
      }
    }
  });
}

if (warnings && process.env.LINT_REMOTION_QUIET !== '1') {
  console.error(`\nlint-remotion: ${warnings} warning(s) — off-spec for stills, fix when touching those files.`);
}
if (errors) {
  console.error(`\nlint-remotion: ${errors} render-breaking pitfall(s). Fix before committing.`);
  process.exit(1);
}
