#!/bin/bash
# Pre-commit gate, invoked by the PreToolUse hook before any `git commit`.
# Blocks (exit 2) on: type errors, render-breaking Remotion pitfalls,
# or a screen change with no recent design-review evidence.
set -u
cd "$(dirname "$0")/.." || exit 0

if ! npx tsc --noEmit >/dev/null 2>&1; then
  echo 'BLOCKED: tsc --noEmit failing — fix type errors before committing' >&2
  exit 2
fi

lint_output=$(LINT_REMOTION_QUIET=1 node scripts/lint-remotion.mjs 2>&1)
if [ $? -ne 0 ]; then
  echo 'BLOCKED: render-breaking Remotion pitfalls — fix before committing:' >&2
  echo "$lint_output" | grep ' error \[' >&2
  exit 2
fi

# Screen files changed → design review must have run within the last hour.
changed_screens=$(git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; git ls-files --others --exclude-standard 2>/dev/null)
if echo "$changed_screens" | grep -qE '^src/projects/.+/screens/.+\.tsx$'; then
  if ! find tmp/design-review -type f -mmin -60 2>/dev/null | grep -q .; then
    echo 'BLOCKED: screen files changed but no design review ran in the last hour. Run: npm run design:review -- <compositionId>' >&2
    exit 2
  fi
fi

exit 0
