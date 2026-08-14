# designnflow — Agent Instructions

Screenshot, **URL**, or plain description in, pixel-faithful React screen out, wired as a Remotion still Composition.
Full spec: `docs/superpowers/specs/2026-08-11-screenshot-to-remotion-design.md`.

## The four purposes of this repo

1. **Creating UI** — pixel-faithful still screens, `durationInFrames={1}`. The default. Read the **screen-building** skill first.
2. **Creating user journey flows** — those same screens animated into a story. Only on request; read the **journey-flow-video** skill first.
3. **Creating marketing posters & launch graphics** — high-fidelity product launch banners and promotional graphics. Read the **marketing-poster-design** skill first.
4. **Enhancing existing UI** — redesign or polish existing screens while preserving every feature. Only on request; read the **ui-enhancement-redesign** skill first.

**Separation of concerns is non-negotiable:** deleting `src/projects/<project>/src/flow/` must leave every screen and still Composition working. Screens are pure UI — no frames, no animation, no imports from `flow/`. They take plain data props defaulting to the still appearance; the flow computes those values per frame.

---

## Non-negotiable rules

These apply throughout every session. Several are **mechanically enforced by hooks** (`.claude/settings.json`) — a blocked tool call is the enforcement working, not an error to route around.

**No markdown file creation.** *(enforced: hook blocks `.md` writes under `src/`)*
Do not create or generate any `.md` documentation files (`ASSETS.md`, `FLOW.md`, etc.) while building screens. Build purely in React (`.tsx`, `.ts`, `.css`). Exception: the user explicitly asks to edit this instructions file or the skills.

**Never default Remotion Studio.** *(enforced: hook blocks `npm start` / `npx remotion studio`)*
Always the custom viewer: `npm run viewer`, port 4000.

**Never edit vendored `remotion-*` skills.** *(enforced: hook blocks edits under `.agents/skills/remotion-*`)*
They are hash-locked via `skills-lock.json`. Record any override here instead.

**No vertical scroll view.** Never use vertical scroll containers (`overflow-y-auto`, `overflow-y-scroll`). Horizontal scrolling (`overflow-x-auto`) is allowed. Always set the composition frame height (`height` in `src/Root.tsx` and component height) to fit all screen content top-to-bottom without vertical clipping, inner scrolling, or unnecessary empty margin space at the frame edges.

**No motion or animation.** Never use CSS animations (`animate-pulse`, `animate-ping`, `animate-spin`, `animate-bounce`, `@keyframes`), CSS transitions (`transition-*`), or interaction states (`hover:`, `group-hover:`, `focus:`, `focus-visible:`, `active:`) in screen components. These are all dead code in Remotion stills — no user interaction, no animation runtime. Show the resting/default visual state only.
When an element is only visible on hover (`opacity-0 group-hover:opacity-100` tooltips, reveal-on-hover overlays), delete the element — stripping the variant alone leaves permanently invisible markup in the render.

**Remotion pitfalls are linted.** *(enforced: `npm run lint:remotion` runs on every project-file edit and in the commit gate)*
Render-breaking patterns (native `<img>`, `dark:` variant, viewport units, `position: fixed`, media tags) block the commit; still-inert patterns (`hover:`, scrolling overflow, `animate-*`, `transition-*`) warn. `overflow-x-auto` is permitted by the repo rules but still warns — read each warning before acting on it.

**Commit gate.** *(enforced: hook runs `scripts/commit-gate.sh` before every `git commit`)*
Blocks on: failing `tsc --noEmit`, render-breaking lint errors, or changed screen files with no design review run in the last hour.

**Read the relevant skill before writing any Remotion code.**

| When you need to… | Read this skill | Path |
|---|---|---|
| Build or edit any still screen (assets, Q&A, build rules, UI best practices, viewer) | **screen-building** | `.claude/skills/screen-building/SKILL.md` |
| Write any Remotion component, understand best practices | **remotion-best-practices** | `.agents/skills/remotion-best-practices/SKILL.md` |
| Create a new composition or set up a new project | **remotion-create** | `.agents/skills/remotion-create/SKILL.md` |
| Write React markup, layout, text, images, effects | **remotion-markup** | `.agents/skills/remotion-markup/SKILL.md` |
| Export / render a still frame or video | **remotion-render** | `.agents/skills/remotion-render/SKILL.md` |
| Look up any Remotion API you are unsure about | **remotion-docs** | `.agents/skills/remotion-docs/SKILL.md` |
| Animate still screens into a user-journey flow video | **journey-flow-video** | `.agents/skills/journey-flow-video/SKILL.md` |
| Build UI compositions from a website URL | **url-to-remotion-design** | `.agents/skills/url-to-remotion-design/SKILL.md` |
| Create marketing posters & launch graphics | **marketing-poster-design** | `.agents/skills/marketing-poster-design/SKILL.md` |
| Enhance or redesign existing UI screens | **ui-enhancement-redesign** | `.agents/skills/ui-enhancement-redesign/SKILL.md` |

Prefer the official skills over inventing an approach. Ignore `remotion-studio`'s launch command — this repo never uses default Studio. Each skill's `SKILL.md` links to deeper reference files inside its folder; follow those links when needed.

**Communication style — every message to the user.**
- Plain English only. No jargon, no code snippets in chat. Say "the logo image," not "the SVG asset."
- Short sentences. One idea per sentence.
- Ask, don't assume. If anything is unclear — which screen, which photo, which colour — stop and ask in one simple question before continuing.
- After each screen is built, say what was done in plain language and list anything still needing a real photo or logo from the user.
- No code, file paths, or terminal output in chat unless the user specifically asks to see it.
- **Do not narrate work in progress.** Speak only at a checkpoint, at a real blocker, or in the final summary.
- **Ask every checkpoint question through the `AskUserQuestion` tool**, not as plain chat text. One call per checkpoint, all its questions batched into that single call, with concrete options. Fall back to plain text only if the tool is unavailable.

---

## Workflow — Guided Autorun

Runs continuously start to finish. It stops only at the four fixed checkpoints marked below — no other pauses, no extra questions.

1. **Launch the custom viewer** (see *Session startup*) if not already running.
2. **Receive input** — a screenshot, a URL, a plain description, or an edit request on an existing screen.
   - Screenshot provided → go to step 3.
   - URL provided → follow the **url-to-remotion-design** skill (screenshot-first: full-page screenshot via Chrome DevTools MCP, HTML copy spec, DOM computed-style token spec — never build from HTML text alone), then rejoin at step 3 with the captured screenshot as the visual reference.
   - Description only → follow *Building from a description* in the **screen-building** skill, confirm if the user has anything more to add **[checkpoint]**, then rejoin at step 4 once answered.
   - Edit to an existing screen → follow *Modifying an existing screen* in the **screen-building** skill, ask its Q&A and wait **[checkpoint]**, then rejoin at step 5 once answered.
3. **Resolve assets** (see *Asset declaration* in the **screen-building** skill). First screen of a project: present the full box and wait **[checkpoint]**. Later screens: reuse everything already declared; only ask about genuinely new assets.
4. **If multiple screenshots share the same page**, treat as one long-scroll design (see the **screen-building** skill). Otherwise each is its own screen.
5. Detect (or inherit) canvas size. Strip chrome. Identify or reuse fonts, colours, icons. Existing designs in the project → adapt the new design to match its vibe and tokens; brand-new project → build pixel-perfect to the reference.
6. Build the screen component(s) under `src/projects/<name>/src/screens/`, following the *Per-screen build rules* and *UI design best practices* in the **screen-building** skill.
7. Register Composition(s) in `src/Root.tsx` (a hook re-syncs the viewer registry automatically; otherwise run `npm run sync:viewer`).
8. **2-Pass Automatic Design Review:** Run `npm run design:review -- <compositionId>` — renders the still and writes a side-by-side reference/render comparison under `tmp/design-review/`. Visually compare, then perform pass 2 precision refinements on spacing, typography, and colors. (The commit gate requires this to have run when screen files changed.)
9. Run `npx tsc --noEmit`.
10. **If step 9 reports errors:** fix and re-run, up to 3 attempts. Still failing → stop and report in plain language; never proceed to sweep or commit with failing types.
11. Run the *post-task sweep*.
12. Re-run `npx tsc --noEmit` — the sweep can reintroduce type errors. Same 3-attempt limit. Never commit with failing types.
13. *Auto git commit*.
14. **If this is the 2nd+ screen in a project**, ask about screen flow **[checkpoint]** (see *Screen flow*).
15. Report what was built, which existing styles were reused, and which slots are still placeholders.

Only stop mid-flow for a real blocker outside the four checkpoints: content genuinely unreadable, cut off, or ambiguous with no reasonable guess possible. Everything else — proceed on best judgment and note it in the summary.

---

## Session startup

At session start, if nothing listens on port 4000, run in background:

```bash
npm run viewer
```

Never `npm start` (blocked by hook). After adding a Composition, `npm run sync:viewer` (auto via hook on `src/Root.tsx` edits). Tell user: "Viewer running at http://localhost:4000." Hot-reloads on file change.

---

## Repo layout

```
src/
  index.ts                          # Remotion entry point
  style.css                         # global styles (Tailwind base)
  Root.tsx                          # registers ALL Compositions, all projects
  projects/
    <project-name>/                 # one client or app — kebab-case
      src/
        screens/<ScreenName>.tsx    # one full screen = one component (pure UI)
        components/<Component>.tsx  # shared pieces, THIS project only (pure UI)
        flow/                       # optional, fully deletable — the journey video
        assets/                     # user-supplied files (logos, photos)
        reference/                  # saved reference images per project
viewer/                             # custom lightweight composition viewer (Vite + React)
scripts/
  sync-viewer-registry.mjs          # parses Root.tsx → regenerates compositionRegistry.ts
  lint-remotion.mjs                 # Remotion pitfall linter (hook + commit gate)
  commit-gate.sh                    # pre-commit gate (tsc + lint + design-review evidence)
  guard-file-writes.sh              # blocks forbidden file writes (hook)
```

- Scaffold a new project with `npm run new:project -- <name>`.
- Batch-render a project for handoff with `npm run export:project -- <name> [png|jpeg]` (outputs to `out/<name>/`; flows render as MP4).
- Projects are fully isolated under `src/projects/<project-name>/`. **Never** share components or assets across `src/projects/*/`.

---

## Remotion binding

- One screen = one `<Composition>` in `src/Root.tsx`.
- `id="<ProjectName>-<NN>-<ScreenName>"` where `<NN>` is a zero-padded two-digit serial number representing the screen's chronological flow order.
- **Dimensions are single-source-of-truth in `src/Root.tsx` ONLY.** `width`/`height` are set on the `<Composition>` element. Screen components must NEVER hardcode their own `w-[1920px]`, `h-[XXXpx]`, or similar fixed dimension classes on `<AbsoluteFill>` — `AbsoluteFill` already fills whatever frame the Composition defines. This eliminates duplication: change height in one place (`Root.tsx`), not two.
- **Screen content must be responsive to the frame.** Do not constrain main content containers with restrictive `max-w-[...]` classes. Content should stretch to fill the available width naturally using `flex-1`, `w-full`, or natural flow. The frame IS the constraint — no inner max-width needed.
- **Never let the main body of a fit-to-content screen stretch.** A `flex-1` media grid or feed list absorbs the leftover frame height, so the true content height can never be measured and the bottom navigation bar gets pushed off the canvas. Let the body size naturally (`auto-rows-max`, `content-start`) and give the composition the exact measured height instead.
- **Measure heights, do not guess.** Render the composition at a deliberately oversized height, find the last row of real content, then set `height` to that plus generous bottom breathing room (typically +60px to +80px for mobile stills to ensure bottom elements, version tags, and footers never clip). Always pair with container bottom padding (e.g. `pb-12`). `scripts/audit-heights.sh` does this across every still. Two known false positives: screens whose background runs full-bleed to the bottom edge (marketing posters) always report as clipped — confirm visually before changing them.
- `durationInFrames={1}` for every still screen. The custom viewer treats `durationInFrames <= 1` as a still (renders via `<Thumbnail>`); higher values render as video with playback controls. Only flow compositions get a longer duration.
- No `useCurrentFrame`/timeline animation unless the user explicitly asks. When they do, animation enters through an optional `animateFrom` prop that leaves the still render untouched (see the *journey-flow-video* skill).

---

## Post-task sweep (MANDATORY — run after every screen or UI change)

After every screen is built or updated, automatically run a cleanup pass before reporting done. Do NOT ask for permission.

1. **File and folder hygiene** — delete unused component/asset files, remove empty folders; inline single-use components under ~15 lines.
2. **Component refactor check** — extract duplicated JSX into shared components; split screen files over ~200 lines; verify explicit descriptive names.
3. **Style consistency check** — fix hardcoded colours off the project palette, spacing that breaks rhythm, inconsistent border radius.
4. **Cleanup check** — confirm no temporary or documentation files were created.
5. **Report** — tell the user in plain language what was cleaned up, or "Everything looks tidy."

---

## Auto git commit (MANDATORY — run after every sweep)

After the post-task sweep completes, automatically commit all changes. Do NOT ask for permission. The commit gate hook verifies types, lint, and design-review evidence.

```bash
git add -A
git commit -m "<type>(<project>): <screen> — <summary>"
```

| Type | When to use |
|---|---|
| `feat` | New screen or component added |
| `fix` | Pixel-perfect correction or bug fix on an existing screen |
| `refactor` | Sweep-only changes (rename, extract component, delete unused files) |
| `assets` | Asset file added or swapped |
| `flow` | Screen flow created or updated |

Rules: one commit per screen build or update — never batch unrelated screens. Sweep changes go in the same commit as the screen build; sweep-only changes commit as `refactor`. Tell the user: "Changes saved. You can undo this anytime."

---

## Screen flow — Figma-like hierarchy

When a project has two or more screens, the user can define a **screen flow** — the order screens connect.

After building the 2nd screen (or later) in a project, ask:

> "You now have these screens: [list them]. What order should they play in when rendered as a video? For example: SignIn → Explore → Profile. Or should they stay as separate still frames?"

Skip the question if the user already described a flow.

**Read `.agents/skills/journey-flow-video/SKILL.md`** — it carries the whole recipe. Essentials:
- Story first, confirmed with the user, before any code.
- `FlowSequence.tsx` per project, built on `<TransitionSeries>`, with a `<TapCursor>` per screen.
- Register `id="<ProjectName>-<NN>-Flow"` in `src/Root.tsx`.
- The flow is **in addition to** the still Compositions — never remove or alter them.
- Never create a flow unasked. When a new screen joins a project that has one, ask where it fits.
- Verify in the browser before reporting done — `tsc --noEmit` cannot catch the runtime failures here.

---

## Explicitly out of scope

- Motion-graphics work unrelated to demonstrating the product (title cards, logo animations, keyframed effects). Journey-flow animation — taps, typing, message reveals, screen transitions — is in scope via the *journey-flow-video* skill.
- Shared cross-project design system or component library.
- Creating markdown documentation files during screen-building sessions (see *Non-negotiable rules*).
