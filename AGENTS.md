# designnflow — Agent Instructions

Screenshot **or plain description** in, pixel-faithful React screen out, wired as a Remotion still Composition.
Full spec: `docs/superpowers/specs/2026-08-11-screenshot-to-remotion-design.md`.

---

## Non-negotiable rules

These apply throughout every session, before and during the workflow below.

**No markdown file creation.**
Do not create or generate any `.md` / `.dotx`-adjacent documentation files (`ASSETS.md`, `FLOW.md`, etc.) while building screens. Build screens, components, and video compositions purely in React (`.tsx`, `.ts`, `.css`).
*Scope note: this applies to files the agent generates automatically while building screens — asset lists, flow notes, component documentation. It does not apply when the user explicitly asks the agent to edit this instructions file itself.*

**Read the relevant Remotion skill before writing any Remotion code.**
This project ships official Remotion skills at `.agents/skills/`.

| When you need to… | Read this skill | Path |
|---|---|---|
| Write any Remotion component, understand best practices | **remotion-best-practices** | `.agents/skills/remotion-best-practices/SKILL.md` |
| Create a new composition or set up a new project | **remotion-create** | `.agents/skills/remotion-create/SKILL.md` |
| Write React markup, layout, text, images, effects | **remotion-markup** | `.agents/skills/remotion-markup/SKILL.md` |
| Export / render a still frame or video | **remotion-render** | `.agents/skills/remotion-render/SKILL.md` |
| Work with Remotion Studio (preview, hot-reload) | **remotion-studio** | `.agents/skills/remotion-studio/SKILL.md` |

Each skill's `SKILL.md` links to deeper reference files inside its folder (e.g. `remotion-markup/images.md`, `remotion-create/tailwind.md`). Follow those links when needed. Skipping this step causes avoidable mistakes: `<img>` instead of `<Img>`, wrong Tailwind wiring, wrong render CLI flags.

**Communication style — every message to the user.**
- Plain English only. No jargon, no code snippets in chat. Say "the logo image," not "the SVG asset."
- Short sentences. One idea per sentence.
- Ask, don't assume. If anything is unclear — which screen, which photo, which colour — stop and ask in one simple question before continuing.
- After each screen is built, say what was done in plain language and list anything still needing a real photo or logo from the user.
- No code, file paths, or terminal output in chat unless the user specifically asks to see it.

---

## Workflow — Guided Autorun

Runs continuously start to finish. It stops only at the three fixed checkpoints marked below — no other pauses, no extra questions.

1. **Launch Remotion Studio** (see *Session startup*) if not already running.
2. **Receive input** — either a screenshot or a plain description.
   - Screenshot provided → go to step 3.
   - Description only → follow *Building from a description*, confirm if the user has anything more to add **[checkpoint]**, then rejoin at step 4 once answered.
3. **Resolve assets** (see *Asset declaration*). First screen of a project: present the full box and wait **[checkpoint]**. Later screens: reuse everything already declared; only ask about assets this screen introduces that aren't yet known.
4. **If multiple screenshots share the same page**, treat as one long-scroll design (see *Multiple screenshots of the same page*). Otherwise treat each as its own screen.
5. Detect (or inherit) canvas size. Strip chrome. Identify or reuse fonts, colours, icons.
6. Build the screen component(s) under `projects/<name>/src/screens/`.
7. Register Composition(s) in `src/Root.tsx`.
7b. Run `npm run sync:viewer` to regenerate the viewer's composition registry.
8. Run `npx tsc --noEmit`.
9. **If step 8 reports errors:** fix and re-run, up to 3 attempts. If still failing after 3 attempts, stop and report the problem in plain language — do not proceed to sweep or commit with failing types.
10. Run the *post-task sweep*.
11. *Auto git commit*.
12. **If this is the 2nd+ screen in a project**, ask about screen flow **[checkpoint]** (see *Screen flow*).
13. Report what was built, which existing styles were reused, and which slots are still placeholders the user needs to fill in.

Only stop mid-flow for a real blocker outside the three checkpoints above: content genuinely unreadable, cut off, or ambiguous with no reasonable guess possible. Everything else — proceed on best judgment and note it in the summary.

---

## Session startup

At the start of every session, before any implementation work, check whether Remotion Studio is already running. If not, launch it in the background:

```bash
npm start
```

(`npm start` maps to `npx remotion studio` via the project's `package.json`.)

Rules:
- Run it from the repo root (`/Users/asak/Documents/dev/proj/designnflow`).
- Send it to the background (async) — do NOT block implementation on it.
- Do not re-launch if a process is already listening on the Studio port (default 3000).
- After launching, tell the user: "Remotion Studio is running at http://localhost:3000 — open it in your browser to see live previews."
- After each file change, Studio hot-reloads automatically — no manual restart needed.

---

## Asset declaration

**First screen of a new project:** present the full asset box below and wait for the user to fill it in.

**Every screen after that:** do not re-ask about assets already declared for the project — logo, brand font, established colour palette, icon set, avatar style. Reuse them automatically. Only prompt (with just the relevant rows, not the full box) when the screen introduces something genuinely new that hasn't been declared yet — a different hero photo for a new page, a product category not seen before.

If the user explicitly says "skip" or "use defaults" at any point, apply the fallback rules immediately without waiting.

```
────────────────────────────────────────────────────
  ASSET DECLARATION — fill in and send back
────────────────────────────────────────────────────
  Project  : <project-name>
  Screen   : <ScreenName>

  Hero / banner image   : [ ] I'll upload a file
                          [ ] Use this URL: ___________
                          [ ] Use a placeholder / public stock image

  Logo / brand mark     : [ ] I'll upload a file (SVG preferred)
                          [ ] Describe it: ___________
                          [ ] Approximate from screenshot

  User avatars          : [ ] I'll upload file(s)
                          [ ] Use generic placeholder silhouette
                          [ ] Use Unsplash faces (random, royalty-free)

  Product / UI photos   : [ ] I'll upload file(s)
                          [ ] Use this URL: ___________
                          [ ] Use placeholder color blocks

  Icons                 : [ ] Lucide (default)
                          [ ] Heroicons
                          [ ] I'll describe custom ones: ___________

  Brand font             : [ ] Identify from screenshot (default)
                          [ ] Use this specific font: ___________

  Other assets           : ___________
────────────────────────────────────────────────────
```

### Fallback rules when the user does not provide assets

If the user skips the asset box or answers "placeholder / public stock image," apply these rules **in priority order** for each asset type:

| Asset type | Priority 1 | Priority 2 | Priority 3 |
|---|---|---|---|
| Hero / banner | Publicly available Unsplash URL matching the subject (`?w=<W>&h=<H>&fit=crop&q=80`) | Plain solid-color `<div>` in the dominant screenshot colour | Light gray `<div>` |
| Logo / brand mark | **Ask the user to send the logo file** — never reconstruct from code | Gray rounded box with the app name as plain text | Blank white box |
| User avatars | Gray circle with a person silhouette (Lucide `<User>`) | Blank gray circle | — |
| Product photos | Publicly available Unsplash URL matching the product category | Plain `<div>` in `bg-gray-200` with correct aspect ratio | — |
| Icons | Closest Lucide equivalent | Closest Heroicons equivalent | Leave the slot blank |

**Never generate graphics, logos, or illustrations from code.** No SVG path reconstruction, no CSS drawings, no canvas-based graphics. If a logo or graphic is missing, show a clearly labelled gray placeholder box and tell the user what file they need to send.

Always **tell the user which slots are still placeholders** after building, so they know exactly what real files to send later.

### Using Unsplash URLs

```
https://images.unsplash.com/photo-<ID>?w=<WIDTH>&h=<HEIGHT>&fit=crop&q=80
```

- Always use Remotion's `<Img src={url} />` — never the native `<img>` tag.
- Pick a photo that is semantically close to the screenshot subject.
- Prefer landscape crops for hero banners (`&fit=crop&crop=faces,center`).
- Document the Unsplash photo ID in a comment so it is easy to replace.
- If the chosen photo ID fails to load, fall back automatically to Priority 2 (solid-colour placeholder) — do not try a different random Unsplash search.

---

## Reference image handling

- **Save reference images per project:** whenever the user sends a reference image (screenshot, mockup, design reference), save it into `src/projects/<project-name>/src/reference/` for temporary use and per-project visual inspection.
- **Automatic content expansion for sparse reference images (STRICT):** applies only when a user-provided reference image is present and contains sparse repetitive elements (a list or grid with only 1–2 items). In those cases, expand only naturally repeating items (list rows, grid cards) to fill available space using the reference's existing patterns. Never invent new UI sections, unmentioned components, or unrequested features when building without a reference image, or if the element is absent from the reference.
- **Realistic text & content adaptation (STRICT):** do not blindly copy every piece of text verbatim from reference images. Adapt or generate realistic copy (headlines, item titles, descriptions, metrics, usernames) suitable for high-fidelity presentation mockups.

---

## What this repo does

The user gives a screenshot (or multiple screenshots of the same page) of an app screen or website — one client/domain per project. The agent turns it into a React + Tailwind component and registers it as a Remotion Composition — no video/animation, just a still-frame render target.

The user may also describe a screen in plain words instead of providing a screenshot. In that case the agent reuses the project's existing design tokens (colours, fonts, spacing, components) to build a consistent new screen.

### Repo layout

```
src/
  index.ts                          # Remotion entry point
  style.css                         # global styles (Tailwind base)
  Root.tsx                          # registers ALL Compositions, all projects
  projects/
    <project-name>/                 # one client or app — kebab-case
      src/
        screens/<ScreenName>.tsx    # one full screen = one component
        components/<Component>.tsx  # shared pieces, THIS project only
        assets/                     # user-supplied files (logos, photos)
        reference/                  # saved reference images per project
viewer/                             # custom lightweight composition viewer (Vite + React)
  src/
    App.tsx                         # main viewer app with sidebar, preview, zoom, export
    compositionRegistry.ts          # auto-generated — DO NOT edit manually
scripts/
  sync-viewer-registry.mjs          # parses Root.tsx → regenerates compositionRegistry.ts
```

- `<project-name>` = one client or app/domain (kebab-case, e.g. `acme-banking-app`).
- Projects are fully isolated under `src/projects/<project-name>/`. **Never** share components or assets across `projects/*/`.

---

## Building from a description (no screenshot provided)

Example: *"I need a login page for this project. Use the existing styles."* This is a valid, fully supported input mode.

### Step 1 — Clarify requirements (STRICT Q&A)

Before writing any code for a new screen (whether from a description or an ambiguous screenshot), ask the user clarifying Q&A questions in one short message:

1. **Which project?**
2. **What should the screen do / what business problem does it solve?**
3. **Any specific colours, images, text, or additional elements you want on it?**
4. **Anything more you'd like to add or specify before I create the UI?**

If the user already answered any of these, skip the ones they covered, but always ask #4 before proceeding.

---

## Modifying an existing screen (editing existing UI)

Example: *"I want to edit the Wallet page to add a transaction filter."*

### Step 1 — Clarify requirements (STRICT Q&A)

Before editing any existing screen, ask the user clarifying Q&A questions in one short message:

1. **Which specific elements or sections on the screen should be updated, added, or removed?**
2. **Any specific copy, colours, layout adjustments, or new UI components needed for this edit?**
3. **Anything more you'd like to specify before I update the UI?**

Always confirm these details with the user before mutating existing screen code.

---

### Step 2 — Scan the existing project for design tokens

Before building, read every existing screen and shared component in the project to extract:

- **Colours** — background, text, button, link, border colours already in use.
- **Font** — which Google Font is loaded (from `loadFont()` calls).
- **Spacing rhythm** — padding and gap sizes used on other screens.
- **Corner radius** — `rounded-full`, `rounded-2xl`, or something else?
- **Component patterns** — does a `TextField`, `PrimaryButton`, `Avatar` etc. already exist?

Use those existing design tokens as the foundation, and invent new consistent tokens only when necessary for new elements.

### Step 3 — Reuse existing components

If a suitable shared component already exists in `projects/<name>/src/components/`, import and reuse it. Only create a new component if nothing close enough exists.

### Step 4 — Canvas size for description-only screens

Use the same `width`/`height` already defined for that project in `src/Root.tsx`. If the project has no compositions yet, default to `393 × 852` (standard iPhone portrait).

### Step 5 — Apply the same build and asset rules

Strip chrome, resolve assets (see *Asset declaration*), run `tsc --noEmit`.

### Step 6 — Tell the user what you assumed

After building, say in plain language: what colours/font were copied from existing screens, which components were reused, what is still a placeholder.

---

## Multiple screenshots of the same page

When the user sends more than one screenshot that all belong to the same page (scroll segments of a long landing page, overlapping sections of one screen), treat them as **one design, not many**:

- Build a **single screen component** that stacks all sections top-to-bottom in natural document order, producing a tall long-scroll layout.
- Register it as **one `<Composition>`** in `src/Root.tsx`:
  - `width` = the single-screen width detected from the screenshots.
  - `height` = sum of the heights of all sections (after stripping chrome).
- Name the component and Composition after the page, not the scroll position (`LandingPage`, not `LandingPageHero` + `LandingPageFeatures`).
- Infer section order from visual content; if ambiguous, use the sequence the user sent the screenshots and note the assumption in the summary.
- Never create multiple Compositions for what is logically one continuous page.

---

## Per-screen build rules

1. **Strip chrome.** Never code status bars, home indicators, browser tab/address bars, OS nav — only the app/website content itself.
2. **Canvas size** = screenshot aspect ratio minus chrome (not a fixed default).
3. **Fidelity: high.** Match colors, spacing, type scale, and layout hierarchy closely. Treat the screenshot as the spec, not a rough guide.
4. **Fonts:** identify the closest Google Font, load via `@remotion/google-fonts`.
5. **Icons:** swap to the closest Lucide or Heroicons equivalent.
6. **Photos/images:** consult the asset declaration first, then use in priority order (real asset → Unsplash URL → gray placeholder). Never use AI-generated images unless the user explicitly requests it.
7. **Styling:** Tailwind utility classes as the primary mechanism. Inline `style={{}}` only for truly dynamic numeric values Tailwind can't express at build-time — never for colors, spacing, or typography that have Tailwind equivalents.
8. **Naming:** explicit, descriptive names for files/components/props — no abbreviations (`ProfileHeader`, not `PH`).
9. **Content expansion limits:** applies strictly to user-provided reference images with sparse repetitive elements. Never invent new UI sections or components not present in the reference or explicitly described.
10. **Presentation-grade copy adaptation:** polish or replace reference text with contextually appropriate copy suitable for presentation mockups and product demos.

---

## UI design best practices (for Remotion stills)

Remotion renders to a fixed-size pixel canvas — not a scrollable browser window. This changes how certain design decisions work.

### Typography hierarchy

- Pick 4–5 sizes per project (e.g. `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-3xl`) and use only those.
- Use **font weight** for hierarchy, not just size. Headings = `font-bold`/`font-semibold`. Body = `font-normal`.
- Always set `leading-*` and `tracking-*` on headings. Tight tracking on large headings (`tracking-tight`).

### Colour extraction from screenshots

Pick and document as Tailwind classes, then reuse the exact same values in every screen of that project:
- Background colour (usually one dominant shade).
- Primary text colour (dark on light, light on dark).
- Secondary text colour (muted/gray variant).
- Accent colour (buttons, links, highlights).
- Border/divider colour (usually light gray).

### Contrast and readability

- **Text on images:** always add a semi-transparent overlay or gradient behind text on a photo.
- **Light text on light backgrounds** — never. Minimum: gray-500 on white, or white on gray-700+.
- **Small text** (`text-xs`, `text-sm`) must be at least `text-gray-500` on light backgrounds.

### Shadows and elevation

- Consistent scale: `shadow-sm` for cards, `shadow-md` for modals, `shadow-lg` for elevated overlays.
- Floating elements (logo overlapping a section, bottom nav bars) get `shadow-lg`.

### Text overflow in fixed canvases

No scroll — overflow text is silently clipped.
- `truncate` on single-line text that might be long (usernames, titles).
- `line-clamp-*` on multi-line text (descriptions, bios).
- Always visually verify all text fits within the canvas at rendered size.

### Dark mode vs light mode

Match whatever the screenshot shows. If dark, use dark Tailwind classes directly (`bg-gray-900`, `text-white`) — do not use Tailwind's `dark:` variant (Remotion has no system theme; everything is explicit).

### Visual hierarchy in layout

- Top-down reading order: most important content first, following the screenshot's F/Z-pattern.
- Whitespace is intentional — match the screenshot's spacing exactly, don't compress it.
- Group related elements with consistent gaps (`gap-2`/`gap-3`) and larger gaps between groups (`mt-6`/`mt-8`).

### Remotion-specific UI pitfalls

| Pitfall | Why it breaks | What to do instead |
|---|---|---|
| `overflow-y-auto` / scrolling | Canvas is fixed — nothing scrolls | Make the canvas tall enough, or paginate into multiple compositions |
| `:hover`, `:focus`, `:active` states | No user interaction in a still render | Show the default (resting) state only |
| `vh` / `vw` / `dvh` units | Viewport is the composition size, may behave unexpectedly | Use explicit `px` values or Tailwind spacing classes |
| CSS `position: fixed` | Fixes to the composition frame, not the "viewport" | Use `absolute` within a positioned parent |
| `backdrop-blur` / `backdrop-filter` | May not render in all Remotion output formats | Test with an actual `npx remotion still` render |
| Animated GIFs via `<img>` | Shows a single frozen frame | Use Remotion's `<Gif>` component from `@remotion/gif` |
| `<video>` / `<audio>` tags | Won't play in stills | Only use for video compositions with `useCurrentFrame` |

---

## Setup gotchas (learned from test drive)

- **Tailwind must be wired into Remotion's webpack build explicitly** — installing `tailwindcss` alone does nothing. Install `@remotion/tailwind` (Tailwind v3) and in `remotion.config.ts`:
  ```ts
  import {enableTailwind} from '@remotion/tailwind';
  Config.overrideWebpackConfig((c) => enableTailwind(c));
  ```
  Verify with an actual `npx remotion still` render, not just `tsc --noEmit` — a clean typecheck says nothing about whether classes actually applied.
- **Use `<Img>` from `remotion`, not the native `<img>` tag**, for any `src` that is a remote URL or statically imported asset. Native `<img>` works in Studio hot-reload but silently produces blank frames in CLI renders.
- **CSS grid + `flex-1` on the grid container stretches row tracks** to fill leftover space, leaving blank gaps between rows when content is shorter than the track. Add `auto-rows-max content-start` to any grid that both scales via `flex-1` and holds fixed-aspect tiles.
- **Mismatched `aspect-*` classes inside the same grid row break alignment** — simplify masonry-looking source layouts to one uniform aspect ratio per grid unless true masonry (CSS columns) is worth the complexity. Note the simplification as an assumption.
- `loadFont()` from `@remotion/google-fonts` pulls every weight/subset by default. Pass explicit `weights`/`subsets` once a project's actual type scale is known, to keep Studio/render fast.

---

## Remotion binding

- One screen = one `<Composition>` in `src/Root.tsx`.
- `id="<ProjectName>-<NN>-<ScreenName>"` where `<NN>` is a zero-padded two-digit serial number representing the screen's chronological flow order.
- `width`/`height` = detected canvas size.
- Short fixed `durationInFrames` (still frame). No `useCurrentFrame`/timeline animation unless the user explicitly asks for it.

---

## Post-task sweep (MANDATORY — run after every screen or UI change)

After every screen is built or updated, automatically run a cleanup pass before reporting done. Do NOT ask for permission — just do it.

### 1. File and folder hygiene

- **Unused files** — delete any component or asset file no longer imported anywhere in the project.
- **Empty folders** — remove any empty `assets/`, `components/`, or `screens/` folder.
- **File location** — if a component is used by only one screen and under ~15 lines of inline JSX, it does not need its own component file.

### 2. Component refactor check

- **Duplicate code** — if the same (or near-identical) JSX block appears in two or more screens, extract it into a shared component in `components/`.
- **Overgrown components** — if a screen file exceeds ~200 lines, split into sub-components.
- **Naming** — verify all files, components, and props use explicit descriptive names. Rename if not.

### 3. Style consistency check

- **Colours** — flag or fix any hardcoded colour that doesn't match the project's existing palette.
- **Spacing** — check for padding/gap values that break the project's rhythm.
- **Border radius** — ensure inputs and cards use the same radius across all screens.

### 4. Cleanup check

- Confirm no temporary files or documentation files were created (see *Non-negotiable rules*).

### 5. Report

Tell the user in plain language what was cleaned up, renamed, or refactored — or "Everything looks tidy" if nothing needed changing.

---

## Auto git commit (MANDATORY — run after every sweep)

After the post-task sweep completes, automatically commit all changes. Do NOT ask for permission.

```bash
git add -A
git commit -m "<type>(<project>): <screen> — <summary>"
```

**Type prefixes:**

| Type | When to use |
|---|---|
| `feat` | New screen or component added |
| `fix` | Pixel-perfect correction or bug fix on an existing screen |
| `refactor` | Sweep-only changes (rename, extract component, delete unused files) |
| `assets` | Asset file added or swapped |
| `flow` | Screen flow created or updated |

**Examples:**

```
feat(acme-app): SignInScreen — initial build from screenshot
fix(acme-app): SignInScreen — match TextField border radius to screenshot
refactor(acme-app): extract Avatar into shared component
assets(acme-app): add real logo SVG, replace placeholder
flow(acme-app): create SignIn → Explore → Profile sequence
```

### Rules

- One commit per screen build or update — never batch multiple unrelated screens.
- If the sweep made changes, include them in the same commit as the screen build.
- If only the sweep made changes (no new screen), commit with `refactor` prefix.
- Never commit broken code — `tsc --noEmit` must pass before committing (see Workflow step 9).
- Tell the user in plain language: "Changes saved. You can undo this anytime."

---

## Screen flow — Figma-like hierarchy

When a project has two or more screens, the user can define a **screen flow** — the order screens connect to each other.

### When to ask

After building the 2nd screen (or later) in a project, ask:

> "You now have these screens: [list them]. What order should they play in when rendered as a video? For example: SignIn → Explore → Profile. Or should they stay as separate still frames?"

Skip the question if the user already described a flow.

### How to wire the flow in Remotion

1. Create `src/projects/<project-name>/src/screens/FlowSequence.tsx`:
   - Import all screens in flow order.
   - Use Remotion's `<Series>` component to show each screen for its duration.
   - Each `<Series.Sequence>` renders one screen as a still (no internal animation).
2. Register a new Composition in `src/Root.tsx`:
   - `id="<ProjectName>-<NN>-Flow"` (next sequential serial number).
   - `width`/`height` = the project's standard canvas size.
   - `durationInFrames` = sum of all screen durations × fps.
   - `fps` = 30 (default).

### Rules

- The flow composition is **in addition to** the individual still Compositions — never remove the per-screen Compositions.
- Default duration per screen = 3 seconds (90 frames at 30fps) unless the user says otherwise.
- Default transition = `cut` (instant switch). For fades or slides, use `<TransitionSeries>` from `@remotion/transitions`.
- Do NOT create a flow automatically if the user hasn't defined one yet — always ask first.
- When a new screen is added to a project that already has a flow, ask where it fits in the sequence.

---

## Custom viewer

A separate lightweight Vite + React app at `viewer/` that previews all compositions using `@remotion/player`. It is an alternative to the default Remotion Studio, with a minimal light-mode UI.

### Architecture

- Lives at `viewer/`, fully separate from the Remotion project.
- Imports screen components from `../src/projects/` via Vite alias (`@src`).
- Uses `dedupe` in `vite.config.ts` for `react`, `react-dom`, `remotion`, `@remotion/player`, `@remotion/google-fonts`, and `lucide-react` to avoid duplicate module instances.
- **Does NOT duplicate any screen code** — it lazy-loads the same components.

### Composition registry sync

`viewer/src/compositionRegistry.ts` is **auto-generated** by `scripts/sync-viewer-registry.mjs`. **Never edit it manually.**

The sync script parses `src/Root.tsx` — extracting imports, constants, and `<Composition>` blocks — and regenerates the registry.

Run it:

```bash
npm run sync:viewer
```

**When to run:** after every change to `src/Root.tsx` (adding, removing, or modifying a Composition). The workflow step 7b covers this automatically.

### Starting the viewer

```bash
npm run viewer
```

This syncs the registry first, then starts the Vite dev server on port 4000.

### Features

- **Project-grouped sidebar** — compositions grouped by project name, collapsible sections, sticky headers.
- **Still vs video detection** — stills (`durationInFrames <= 1`) render via `<Thumbnail>`, videos render via `<Player>` with playback controls.
- **Zoom slider** — 25% to 300%, stills only. "Fit" button resets to 100%.
- **Pan / hand tool** — when zoomed past 100%, the cursor changes to a hand and click-drag pans the image.
- **Direct export** — "Export" button opens a modal with one-click PNG, JPEG, or MP4 export. The Vite server runs Remotion's CLI on the backend and returns the file as a download.

### Export API

A Vite server plugin at `viewer/vite.config.ts` exposes `POST /api/render` which accepts `{ compositionId, format }` and spawns `npx remotion still` or `npx remotion render`, returning the rendered file.

---

## Explicitly out of scope

- Complex timeline animation within a single screen (motion graphics, keyframes).
- Shared cross-project design system or component library.
- Creating markdown documentation files during screen-building sessions (see *Non-negotiable rules*).
