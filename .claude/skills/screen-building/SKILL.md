---
name: screen-building
description: Core reference for building pixel-faithful still screens in this repo — asset declaration and fallbacks, building from a description, modifying existing screens, multi-screenshot pages, per-screen build rules, UI best practices for Remotion stills, setup gotchas, and custom viewer details. Read whenever building or editing any screen (purpose 1 of this repo) — the AGENTS.md workflow references this skill at its detail steps.
---

# Screen building — detailed reference

This skill carries the detail behind the AGENTS.md *Guided Autorun* workflow. AGENTS.md owns the workflow order and non-negotiables; this file owns the how.

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

## Reference image handling

- **Save reference images per project:** whenever the user sends a reference image (screenshot, mockup, design reference), save it into `src/projects/<project-name>/src/reference/` for temporary use and per-project visual inspection.
- **Automatic content expansion for lists & grids (STRICT):** Always fill content in list and grid views where possible to populate the screen with rich, authentic domain data. Expand naturally repeating items (list rows, grid cards, chat messages, transactions) to fill available viewport space. Never invent new core functionality, unmentioned UI sections, or unrequested features.
- **Realistic text & content adaptation (STRICT):** do not blindly copy every piece of text verbatim from reference images. Adapt or generate realistic copy (headlines, item titles, descriptions, metrics, usernames) suitable for high-fidelity presentation mockups.

## Building from a description (no screenshot provided)

Example: *"I need a login page for this project. Use the existing styles."* This is a valid, fully supported input mode.

### Step 1 — Clarify requirements (STRICT Q&A)

Before writing any code for a new screen (whether from a description or an ambiguous screenshot), ask the user these clarifying questions in one `AskUserQuestion` call:

1. **Which project?**
2. **What should the screen do / what business problem does it solve?**
3. **Any specific colours, images, text, or additional elements you want on it?**
4. **Anything more you'd like to add or specify before I create the UI?**

If the user already answered any of these, skip the ones they covered, but always ask #4 before proceeding.

### Step 2 — Ground the design in real UI, never generic AI output

When no screenshot or reference image exists, before building layout, research 2–3 real, well-known products in the same category (via WebSearch/WebFetch — actual apps/sites, not imagined ones) for proven layout, spacing, and component patterns. Never default to generic "AI-slop" UI (centered hero + 3 feature cards + gradient blob, boilerplate SaaS look, symmetric equal-weight grids, everything center-aligned, uniform card sizes with no focal point). Adapt real patterns to this project's brand/tokens — don't copy verbatim.

This applies to overall layout hierarchy and composition too, not just individual components: establish a clear visual hierarchy (one dominant focal element, not a flat grid of equal-weight blocks), use asymmetry and varied element sizes where real products do, break the obvious "centered stack" default, and vary spacing/rhythm intentionally instead of uniform padding everywhere.

Always apply UX psychology for the end user's point of view: Fitts's Law, Hick's Law, Peak-End Rule, Zeigarnik Effect, Goal Gradient, Cognitive Load, Social Proof, Loss Aversion, Reciprocity, Mere Exposure, Anchoring, Primacy–Recency, Variable Ratio Reinforcement — apply deliberately to every new screen, not just ones built from a description.

## Modifying an existing screen (editing existing UI)

Example: *"I want to edit the Wallet page to add a transaction filter."*

### Step 1 — Clarify requirements (STRICT Q&A)

Before editing any existing screen, ask the user these clarifying questions in one `AskUserQuestion` call:

1. **Which specific elements or sections on the screen should be updated, added, or removed?**
2. **Any specific copy, colours, layout adjustments, or new UI components needed for this edit?**
3. **Anything more you'd like to specify before I update the UI?**

Always confirm these details with the user before mutating existing screen code.

### Step 2 — Scan the existing project for design tokens

First check `src/projects/<name>/src/designTokens.ts` — if filled in, use it as the token source of truth and skip the full scan. If it is missing or empty, read every existing screen and shared component in the project to extract the tokens below, then record them in `designTokens.ts` for future sessions:

- **Colours** — background, text, button, link, accent gradients, and border colours already in use.
- **Font** — which Google Font is loaded (from `loadFont()` calls).
- **Spacing rhythm** — padding and gap sizes used on other screens.
- **Corner radius** — `rounded-full`, `rounded-2xl`, or something else?
- **Component patterns** — does a `TextField`, `PrimaryButton`, `Avatar` etc. already exist?

**Mandatory Vibe & Token Harmonization vs Pixel-Faithful Ground Truth:**
- **Projects with existing designs:** When creating a new UI screen, marketing poster, or video composition for a project that already has established screens, automatically adapt and style the new UI to match the exact vibe, visual identity, typography, spacing, and brand color palette of the existing project.
- **Projects with no existing designs:** If the project is brand-new and has no prior screens/designs, build the UI 100% pixel-faithful to the provided reference input (screenshot, URL, or mockup) as exact ground truth.

### Step 3 — Reuse existing components

If a suitable shared component already exists in `src/projects/<name>/src/components/`, import and reuse it. Only create a new component if nothing close enough exists.

### Step 4 — Canvas size for description-only screens

Use the same `width`/`height` already defined for that project in `src/Root.tsx`. If the project has no compositions yet, default to `786 × 1704` (2x Retina HD mobile portrait) or `393 × 852` for mobile, and `1920 × 1080` (Full HD 16:9) for desktop.

### Step 5 — Apply the same build and asset rules

Strip chrome, resolve assets (see *Asset declaration*), run `tsc --noEmit`.

### Step 6 — Tell the user what you assumed

After building, say in plain language: what colours/font were copied from existing screens, which components were reused, what is still a placeholder.

## Multiple screenshots of the same page

When the user sends more than one screenshot that all belong to the same page (scroll segments of a long landing page, overlapping sections of one screen), treat them as **one design, not many**:

- Build a **single screen component** that stacks all sections top-to-bottom in natural document order, producing a tall long-scroll layout.
- Register it as **one `<Composition>`** in `src/Root.tsx`:
  - `width` = the single-screen width detected from the screenshots.
  - `height` = sum of the heights of all sections (after stripping chrome).
- Name the component and Composition after the page, not the scroll position (`LandingPage`, not `LandingPageHero` + `LandingPageFeatures`).
- Infer section order from visual content; if ambiguous, use the sequence the user sent the screenshots and note the assumption in the summary.
- Never create multiple Compositions for what is logically one continuous page.

## Per-screen build rules

1. **Strip browser/device chrome:** remove status bars, navigation bars, browser address bars — keep only the app content.
2. **Canvas size & clipping prevention (NO VERTICAL SCROLL):** Canvas size = screenshot aspect ratio minus chrome (not a fixed default). For mobile UI, default to `786 × 1704` (2x Retina HD) or `393 × 852` for standard 1x. For desktop web UI, default to `1920 × 1080` (Full HD 16:9). **STRICT RULE: Never use vertical scroll containers (`overflow-y-auto`, `overflow-y-scroll`). Horizontal scrolling (`overflow-x-auto`) is allowed.** For long pages, calculate the exact content height top-to-bottom and set the `<Composition>` `height` in `src/Root.tsx` to match it precisely — screen components must NOT hardcode their own dimensions (AbsoluteFill fills the frame automatically).
3. **Fidelity & Vibe Alignment:**
   - **For projects with existing designs:** Automatically adapt the new UI design to match the visual vibe, design tokens (colors, typography, spacing, corner radius), and component styles of the existing project.
   - **For new projects without existing designs:** Treat the screenshot/reference as exact ground truth and build the design 100% pixel-faithful (matching colors, spacing, type scale, and layout hierarchy closely).
4. **Fonts:** identify the closest Google Font, load via `@remotion/google-fonts`.
5. **Icons:** swap to the closest Lucide or Heroicons equivalent.
6. **Photos/images:** consult the asset declaration first, then use in priority order (real asset → Unsplash URL → gray placeholder). Never use AI-generated images unless the user explicitly requests it.
7. **Styling:** Tailwind utility classes as the primary mechanism. Inline `style={{}}` only for truly dynamic numeric values Tailwind can't express at build-time — never for colors, spacing, or typography that have Tailwind equivalents.
8. **No motion or animation:** Never use CSS animations (`animate-pulse`, `animate-ping`, `animate-spin`, `animate-bounce`, `@keyframes`), CSS transitions (`transition-*`), or hover/focus states (`hover:`, `focus:`) in screen components. These are dead code in Remotion stills. Show the resting/default visual state only.
9. **Naming & Web Desktop Naming (STRICT):** Explicit, descriptive names for files/components/props — no abbreviations (`ProfileHeader`, not `PH`). **Desktop web screens MUST ALWAYS include `Web` in their component name, filename, and composition ID** (e.g. `WebHomeScreen.tsx`, `WebMonetizationHubScreen.tsx`, composition ID `<project>-03-WebMonetizationHub`). Mobile screens do not use the `Web` prefix.
10. **Content expansion limits:** applies strictly to user-provided reference images with sparse repetitive elements. Never invent new UI sections or components not present in the reference or explicitly described.
11. **Presentation-grade copy adaptation:** polish or replace reference text with contextually appropriate copy suitable for presentation mockups and product demos.

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

### Dark mode vs light mode (STRICT PRESERVATION)

Match whatever the screenshot or existing design shows. **NEVER automatically switch themes from light mode to dark mode, or from dark mode to light mode**, unless explicitly requested by the user. Maintain and enhance within the screen's original theme baseline. If dark, use dark Tailwind classes directly (`bg-gray-900`, `text-white`) — do not use Tailwind's `dark:` variant (Remotion has no system theme; everything is explicit).

### Visual hierarchy in layout

- Top-down reading order: most important content first, following the screenshot's F/Z-pattern.
- Whitespace is intentional — match the screenshot's spacing exactly, don't compress it.
- Group related elements with consistent gaps (`gap-2`/`gap-3`) and larger gaps between groups (`mt-6`/`mt-8`).

### Remotion-specific UI pitfalls

These are mechanically enforced by `npm run lint:remotion` (auto-run on every edit via hook, and in the commit gate).

| Pitfall | Why it breaks | What to do instead |
|---|---|---|
| `overflow-y-auto` / scrolling | Canvas is fixed — nothing scrolls | Make the canvas tall enough, or paginate into multiple compositions |
| `animate-*` classes | CSS animations run unpredictably in single-frame stills | Remove entirely — show the resting visual state |
| `transition-*` classes | No user interaction in a still render — dead code | Remove entirely — no transitions needed |
| `:hover`, `:focus`, `:active` states | No user interaction in a still render | Show the default (resting) state only |
| `vh` / `vw` / `dvh` units | Viewport is the composition size, may behave unexpectedly | Use explicit `px` values or Tailwind spacing classes |
| CSS `position: fixed` | Fixes to the composition frame, not the "viewport" | Use `absolute` within a positioned parent |
| `backdrop-blur` / `backdrop-filter` | May not render in all Remotion output formats | Test with an actual `npx remotion still` render |
| Animated GIFs via `<img>` | Shows a single frozen frame | Use Remotion's `<Gif>` component from `@remotion/gif` |
| `<video>` / `<audio>` tags | Won't play in stills | Only use for video compositions with `useCurrentFrame` |

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

## Custom viewer details

A separate lightweight Vite + React app at `viewer/` that previews all compositions using `@remotion/player`. It is an alternative to the default Remotion Studio, with a minimal light-mode UI.

### Architecture

- Lives at `viewer/`, fully separate from the Remotion project.
- Imports screen components from `../src/projects/` via Vite alias (`@src`).
- Uses `dedupe` in `vite.config.ts` for `react`, `react-dom`, `remotion`, `@remotion/player`, `@remotion/google-fonts`, and `lucide-react` to avoid duplicate module instances.
- **Does NOT duplicate any screen code** — it lazy-loads the same components.

### Composition registry sync

`viewer/src/compositionRegistry.ts` is **auto-generated** by `scripts/sync-viewer-registry.mjs`. **Never edit it manually** (a hook blocks this). The sync script parses `src/Root.tsx` and regenerates the registry. Run `npm run sync:viewer` after every change to `src/Root.tsx` — a PostToolUse hook also does this automatically.

### Features

- **Project-grouped sidebar** — compositions grouped by project name, collapsible sections, sticky headers.
- **Still vs video detection** — stills (`durationInFrames <= 1`) render via `<Thumbnail>`, videos render via `<Player>` with playback controls.
- **Zoom slider** — 25% to 300%, stills only. "Fit" button resets to 100%.
- **Pan / hand tool** — when zoomed past 100%, the cursor changes to a hand and click-drag pans the image.
- **Copy ID** — a button on the selected composition copies its exact composition id to the clipboard, so a screen can be referenced or tagged by id in a request without retyping it.
- **Copy image** — stills only. Renders the composition to PNG through the same `POST /api/render` endpoint as Export and writes the image straight to the clipboard, ready to paste into chat, Slack, or a design tool without saving a file first. The button reports `Rendering…`, then `Copied`, or `Copy failed` with the reason in its tooltip. It must be triggered by a real click: browsers refuse a clipboard image write that has no user gesture behind it.
- **Direct export** — "Export" button opens a modal with one-click PNG, JPEG, or MP4 export. The Vite server plugin at `viewer/vite.config.ts` exposes `POST /api/render` which spawns `npx remotion still`/`render` and returns the file.
