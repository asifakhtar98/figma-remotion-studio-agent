#!/bin/bash
# PreToolUse guard for Write/Edit. Reads hook JSON on stdin.
# Blocks: .md creation under src/, edits to vendored remotion-* skills,
# manual edits to the auto-generated viewer registry.
# Also injects a one-time-per-day skill reminder on first project edit.
set -u
file_path=$(jq -r '.tool_input.file_path // ""')
[ -z "$file_path" ] && exit 0

case "$file_path" in
  */src/projects/*.md|*/designnflow/src/*.md)
    echo 'BLOCKED: no markdown files under src/ — build screens in .tsx/.ts/.css only (AGENTS.md non-negotiable)' >&2
    exit 2 ;;
  *.agents/skills/remotion-*)
    echo 'BLOCKED: vendored remotion-* skills are hash-locked (skills-lock.json) — never edit them. Record overrides in AGENTS.md instead.' >&2
    exit 2 ;;
  */viewer/src/compositionRegistry.ts)
    echo 'BLOCKED: compositionRegistry.ts is auto-generated — run `npm run sync:viewer` instead of editing it.' >&2
    exit 2 ;;
esac

case "$file_path" in
  */src/projects/*)
    marker="/tmp/designnflow-skill-reminder-$(date +%Y%m%d)"
    if [ ! -f "$marker" ]; then
      touch "$marker"
      echo 'Reminder: read the relevant .agents/skills/remotion-* SKILL.md before writing Remotion code (AGENTS.md non-negotiable).'
    fi ;;
esac
exit 0
