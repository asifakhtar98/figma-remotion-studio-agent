# designnflow — Agent Instructions

Screenshot **or plain description** in, pixel-faithful React screen out, wired as a Remotion still Composition.
Full spec: `docs/superpowers/specs/2026-08-11-screenshot-to-remotion-design.md`.

## Remotion skills (MANDATORY — read before writing any Remotion code)

This project ships with official Remotion skills at `.agents/skills/`. **Read the
relevant `SKILL.md` before doing any Remotion work.** The table below tells you which
skill to read for which task:

| When you need to… | Read this skill | Path |
|---|---|---|
| Write any Remotion component, understand best practices | **remotion-best-practices** | `.agents/skills/remotion-best-practices/SKILL.md` |
| Create a new composition or set up a new project | **remotion-create** | `.agents/skills/remotion-create/SKILL.md` |
| Write React markup, layout, text, images, effects | **remotion-markup** | `.agents/skills/remotion-markup/SKILL.md` |
| Export / render a still frame or video | **remotion-render** | `.agents/skills/remotion-render/SKILL.md` |
| Work with Remotion Studio (preview, hot-reload) | **remotion-studio** | `.agents/skills/remotion-studio/SKILL.md` |

Each skill's `SKILL.md` links to deeper reference files inside its folder. Follow
those links when you need detailed API guidance (e.g. `remotion-markup/images.md`
for image handling, `remotion-create/tailwind.md` for Tailwind setup).

**Do NOT skip this step.** Reading the skill first prevents common mistakes like
using `<img>` instead of `<Img>`, incorrect Tailwind wiring, or wrong render CLI flags.

---

## Communication style (MANDATORY — every message to the user)

- **Plain English only.** No jargon, no technical terms, no code snippets in chat.
  Say "the logo image" not "the SVG asset"; say "the background photo" not "the hero banner URL".
- **Short sentences.** One idea per sentence. No walls of text.
- **Ask, don't assume.** If anything is unclear — which screen, which photo, which colour — stop
  and ask the user in one simple question before continuing. Never silently guess on something
  the user can answer in a few words.
- **Friendly confirmations.** After each screen is built, say what was done in plain language
  and list anything that still needs a real photo or logo from the user.
- **No code in chat.** Never paste code, file paths, or terminal output into the conversation
  unless the user specifically asks to see it.

---

## Session startup (MANDATORY — run every session)

At the very start of every session, before doing any implementation work, check whether
Remotion Studio is already running. If it is not, launch it in the background so the
user can see live previews of every change:

```bash
npm start
```

(`npm start` maps to `npx remotion studio` via the project's `package.json`.)

Rules:
- Run it from the repo root (`/Users/asak/Documents/dev/proj/designnflow`).
- Send it to the background (async) — do NOT block implementation on it.
- Do not re-launch if a process is already listening on the Studio port (default 3000).
- After launching, tell the user: "Remotion Studio is running at http://localhost:3000 —
  open it in your browser to see live previews."
- After each file change, Studio hot-reloads automatically — no manual restart needed.

---

## Asset declaration (MANDATORY — ask at the start of every new project or screen)

Before building any screen, **always ask the user to fill in the asset box below**.
Present it verbatim in the chat as a copyable block so the user can paste it back
with their answers. Do NOT skip this step or make assumptions silently.

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

  Brand font            : [ ] Identify from screenshot (default)
                          [ ] Use this specific font: ___________

  Other assets          : ___________
────────────────────────────────────────────────────
```

### Fallback rules when the user does not provide assets

If the user skips the asset box or answers "placeholder / public stock image",
apply these rules **in priority order** for each asset type:

| Asset type | Priority 1 | Priority 2 | Priority 3 |
|---|---|---|---|
| Hero / banner | Publicly available Unsplash URL matching the subject (`?w=<W>&h=<H>&fit=crop&q=80`) | Plain solid-color `<div>` in the dominant screenshot colour | Light gray `<div>` |
| Logo / brand mark | **Ask the user to send the logo file** — never reconstruct from code | Gray rounded box with the app name as plain text | Blank white box |
| User avatars | Gray circle with a person silhouette (Lucide `<User>`) | Blank gray circle | — |
| Product photos | Publicly available Unsplash URL matching the product category | Plain `<div>` in `bg-gray-200` with correct aspect ratio | — |
| Icons | Closest Lucide equivalent | Closest Heroicons equivalent | Leave the slot blank |

**Never generate graphics, logos, or illustrations from code.**
No SVG path reconstruction, no CSS drawings, no canvas-based graphics.
If a logo or graphic is missing, show a clearly labelled gray placeholder box
and tell the user (in plain language) what file they need to send.

Always **tell the user which slots are still placeholders** after building,
so they know exactly what real files to send later.

### Using Unsplash URLs

```
https://images.unsplash.com/photo-<ID>?w=<WIDTH>&h=<HEIGHT>&fit=crop&q=80
```

- Always use Remotion's `<Img src={url} />` — never the native `<img>` tag.
- Pick a photo that is semantically close to the screenshot subject.
- Prefer landscape crops for hero banners (`&fit=crop&crop=faces,center`).
- Document the Unsplash photo ID in a comment so it is easy to replace.

### Asset registry file

Each project MUST maintain an `ASSETS.md` file at
`src/projects/<project-name>/ASSETS.md`. Create it on first build; update it on
every subsequent screen. Format:

```markdown
# <project-name> — Asset Registry

| Screen | Slot | Type | Source | Notes |
|---|---|---|---|---|
| SignIn | Hero banner | Unsplash URL | photo-1531482615713... | Replace with real brand photo |
| SignIn | Logo | Placeholder | Gray box with text "W" | Waiting for real logo file |
| SignIn | Avatars | Placeholder | lucide User icon | Replace when user photos available |
```

---

## What this repo does

User gives a screenshot (or multiple screenshots of the same page) of an app screen or
website (one client/domain per project). Agent turns it into a React + Tailwind component
and registers it as a Remotion Composition — no video/animation, just a still-frame render target.

The user may also describe a screen in plain words instead of providing a screenshot.
In that case the agent reuses the project's existing design tokens (colours, fonts,
spacing, components) to build a consistent new screen.

## Repo layout

### Template (for new projects)

```
src/
  index.ts                          # Remotion entry point
  style.css                         # global styles (Tailwind base)
  Root.tsx                          # registers ALL Compositions, all projects
  projects/
    <project-name>/                 # one client or app — kebab-case
      ASSETS.md                     # asset registry — created on first build
      src/
        screens/<ScreenName>.tsx    # one full screen = one component
        components/<Component>.tsx  # shared pieces, THIS project only
        assets/                     # user-supplied files (logos, photos)
```

### Current projects (actual file tree — keep this updated)

#### whatsevr

```
src/projects/whatsevr/
  ASSETS.md                                 # asset registry
  src/
    screens/
      CallsScreen.tsx                       # call history screen
      ExploreMemoriesScreen.tsx             # explore memories grid tab screen
      ExploreOffersScreen.tsx               # explore offers feed tab screen
      ExploreScreen.tsx                     # explore / discovery screen
      ExploreWtvScreen.tsx                  # explore video feed tab screen
      ProfileScreen.tsx                     # user profile screen
      ResetPasswordScreen.tsx               # reset password screen
      SettingsScreen.tsx                    # settings screen (combined tall scroll)
      SignInScreen.tsx                      # sign-in / welcome back screen
      SpinScreen.tsx                        # stranger video spin / random match screen
      WalletScreen.tsx                      # wallet balance and top-up screen
    components/
      Avatar.tsx                            # user avatar (circle/rounded tile)
      BottomNavBar.tsx                      # bottom tab navigation bar
      PlaceholderPhoto.tsx                  # gray placeholder for missing photos
      PrimaryButton.tsx                     # dark filled CTA button (rounded-full)
      TextField.tsx                         # input field (rounded-2xl, icon + text)
      WhatsevrLogo.tsx                      # logo placeholder (white circle, "W" text)
    assets/                                 # (empty — waiting for user-supplied files)
```

Compositions registered in `src/Root.tsx`:
- `whatsevr-Calls` → `CallsScreen` (921 × 1800)
- `whatsevr-Explore` → `ExploreScreen` (921 × 1800)
- `whatsevr-ExploreMemories` → `ExploreMemoriesScreen` (921 × 1800)
- `whatsevr-ExploreOffers` → `ExploreOffersScreen` (921 × 1800)
- `whatsevr-ExploreWtv` → `ExploreWtvScreen` (921 × 1800)
- `whatsevr-Profile` → `ProfileScreen` (921 × 1800)
- `whatsevr-ResetPassword` → `ResetPasswordScreen` (921 × 1800)
- `whatsevr-Settings` → `SettingsScreen` (921 × 2400)
- `whatsevr-SignIn` → `SignInScreen` (921 × 1800)
- `whatsevr-Spin` → `SpinScreen` (921 × 1800)
- `whatsevr-Wallet` → `WalletScreen` (921 × 1800)

### Rules

- `<project-name>` = one client or app/domain (kebab-case, e.g. `acme-banking-app`).
- Projects are fully isolated. **Never** share components or assets across `projects/*/`.
- No metadata file per project beyond `ASSETS.md` — folder name is the identifier.
- When you add a new screen or component, **update this file tree** in AGENTS.md.

## Per-screen build rules

1. **Strip chrome.** Never code status bars, home indicators, browser tab/address
   bars, OS nav — only the app/website content itself.
2. **Canvas size** = screenshot aspect ratio minus chrome (not a fixed default).
3. **Fidelity: high.** Match colors, spacing, type scale, and layout hierarchy as
   closely as possible. Treat the screenshot as the spec, not a rough guide.
4. **Fonts:** identify the closest Google Font, load via `@remotion/google-fonts`.
5. **Icons:** swap to the closest Lucide or Heroicons equivalent.
6. **Photos/images:** Always consult the asset declaration first. Use in priority order:
   - Real asset file supplied by the user → copy to `assets/` and import.
   - Publicly available image URL (Unsplash `?fit=crop&q=80`) → use Remotion's
     `<Img src={url} />` (NOT native `<img>`) so Remotion can pre-cache it for renders.
   - Gray placeholder `<div>` — only if neither of the above is viable.
   Never use AI-generated images unless the user explicitly requests it.
7. **Styling:** Tailwind utility classes as the primary styling mechanism.
   Inline `style={{}}` props are acceptable **only** for truly dynamic numeric values
   (e.g. `style={{width: size, height: size}}`) that Tailwind cannot express at
   build-time. Never use inline styles for colors, spacing, or typography that have
   Tailwind equivalents.
8. **Naming:** explicit, descriptive names for files/components/props — no
   abbreviations (`ProfileHeader`, not `PH` or `Hdr`).

## UI design best practices (for Remotion stills)

Remotion renders to a fixed-size pixel canvas — not a scrollable browser window.
This changes how certain design decisions work. Follow these rules:

### Typography hierarchy

- Establish a **type scale** per project: pick 4–5 sizes (e.g. `text-sm`, `text-base`,
  `text-lg`, `text-xl`, `text-3xl`) and use only those. Never scatter random `text-[17px]`
  values — keep the scale tight and consistent across all screens.
- Use **font weight** to create hierarchy, not just size. Headings = `font-bold` or
  `font-semibold`. Body = `font-normal`. Captions = `font-normal` + smaller size.
- Always set `leading-*` (line-height) and `tracking-*` (letter-spacing) on headings.
  Tight tracking on large headings (`tracking-tight`), normal on body text.

### Colour extraction from screenshots

When building from a screenshot, extract a **colour palette** and stick to it:

- Pick the **background colour** (usually one dominant shade).
- Pick the **primary text colour** (dark on light, light on dark).
- Pick the **secondary text colour** (muted/gray variant).
- Pick the **accent colour** (buttons, links, highlights — usually one brand colour).
- Pick the **border/divider colour** (usually a light gray).

Document these as Tailwind classes (e.g. `bg-[#f2f3f5]`, `text-gray-900`,
`text-blue-500`) and reuse the exact same values in every screen of that project.

### Contrast and readability

- **Text on images:** always add a semi-transparent overlay or gradient behind text
  that sits on top of a photo, so it remains readable regardless of the image content.
- **Light text on light backgrounds** — never. Minimum contrast: gray-500 text on
  white background, or white text on gray-700+ background.
- **Small text** (`text-xs`, `text-sm`) must be at least `text-gray-500` weight on
  light backgrounds — never lighter.

### Shadows and elevation

- Use a consistent shadow scale: `shadow-sm` for cards, `shadow-md` for modals,
  `shadow-lg` for elevated overlays. Never mix random `shadow-[...]` values.
- Floating elements (logo overlapping a section, bottom nav bars) should have
  `shadow-lg` to visually lift them.

### Text overflow in fixed canvases

Remotion stills have a fixed pixel size — there is no scroll. Text that overflows
the canvas is silently clipped. Guard against this:

- Use `truncate` on single-line text that might be long (usernames, titles).
- Use `line-clamp-*` on multi-line text (descriptions, bios).
- Always visually verify that all text fits within the canvas at the rendered size.

### Dark mode vs light mode

- Match whatever the screenshot shows. Do not switch modes unless the user asks.
- If the screenshot is dark mode, use dark Tailwind classes (`bg-gray-900`,
  `text-white`, etc.) — do not use Tailwind's `dark:` variant (Remotion has no
  system theme; everything is explicit).

### Visual hierarchy in layout

- **Top-down reading order:** most important content at the top, supporting content
  below. Follow the natural F-pattern or Z-pattern the screenshot implies.
- **Whitespace is intentional:** generous padding between sections creates breathing
  room and hierarchy. Match the screenshot's spacing exactly — don't compress it.
- **Group related elements:** use consistent gaps within a group (`gap-2` or `gap-3`)
  and larger gaps between groups (`mt-6`, `mt-8`).

### Remotion-specific UI pitfalls

These things work in browsers but **silently break or look wrong** in Remotion
`still` / `render` output:

| Pitfall | Why it breaks | What to do instead |
|---|---|---|
| `overflow-y-auto` / scrolling | Canvas is fixed — nothing scrolls | Make the canvas tall enough, or paginate into multiple compositions |
| `:hover`, `:focus`, `:active` states | No user interaction in a still render | Show the default (resting) state only |
| `vh` / `vw` / `dvh` units | Viewport is the composition size, may behave unexpectedly | Use explicit `px` values or Tailwind spacing classes |
| CSS `position: fixed` | Fixes to the composition frame, not the "viewport" | Use `absolute` within a positioned parent |
| `backdrop-blur` / `backdrop-filter` | May not render in all Remotion output formats | Test with an actual `npx remotion still` render |
| Animated GIFs via `<img>` | Shows a single frozen frame | Use Remotion's `<Gif>` component from `@remotion/gif` |
| `<video>` / `<audio>` tags | Won't play in stills | Only use for video compositions with `useCurrentFrame` |

## Setup gotchas (learned from test drive)

- **Tailwind must be wired into Remotion's webpack build explicitly** — installing
  `tailwindcss` alone does nothing for `remotion studio`/`render`/`still`. Install
  `@remotion/tailwind` (Tailwind v3) and in `remotion.config.ts`:
  ```ts
  import {enableTailwind} from '@remotion/tailwind';
  Config.overrideWebpackConfig((c) => enableTailwind(c));
  ```
  Verify with an actual `npx remotion still` render, not just `tsc --noEmit` — a
  clean typecheck says nothing about whether classes actually applied.
- **Use `<Img>` from `remotion`, not the native `<img>` tag**, for any `src` that is
  a remote URL or a statically imported asset. Remotion's `<Img>` pre-fetches and
  caches the resource before rendering, preventing blank frames in `still`/`render`.
  Native `<img>` works in Studio hot-reload but silently produces blank frames in
  CLI renders.
- **CSS grid + `flex-1` on the grid container stretches row tracks to fill leftover
  space**, leaving blank gaps between rows when content is shorter than the track.
  Add `auto-rows-max content-start` to any grid that both scales via `flex-1` and
  holds fixed-aspect tiles (e.g. photo grids).
- **Mismatched `aspect-*` classes inside the same grid row break alignment** —
  masonry-looking source layouts should be simplified to one uniform aspect ratio
  per grid unless true masonry (CSS columns) is worth the complexity. Note the
  simplification as an assumption, don't silently under-match.
- `loadFont()` from `@remotion/google-fonts` pulls every weight/subset by default
  (dozens of network requests). Pass explicit `weights`/`subsets` once a project's
  actual type scale is known, to keep Studio/render fast.

## Remotion binding

- One screen = one `<Composition>` in `src/Root.tsx`.
- `id="<ProjectName>-<ScreenName>"`.
- `width`/`height` = detected canvas size.
- Short fixed `durationInFrames` (still frame). No `useCurrentFrame`/timeline
  animation unless the user explicitly asks for it.

---

## Building from a description (no screenshot provided)

Sometimes the user will describe a screen in words instead of sending a screenshot.
Example: *"I need a login page for this project. Use the existing styles."*
This is a valid and fully supported input mode. Follow these rules:

### Step 1 — Ask three quick questions first

Before writing a single line, ask the user these three things in one short message:

1. **Which project?** (e.g. "Is this for the Whatsevr app or a different one?")
2. **What should the screen do?** (e.g. "Just a sign-in form, or also sign-up / forgot password?")
3. **Any specific colours, images, or text you want on it?**

If the user already answered these in their message, skip the ones they covered.

### Step 2 — Scan the existing project for design tokens

Before building, read every existing screen and shared component in the project to extract:

- **Colours** — background, text, button, link, border colours already in use.
- **Font** — which Google Font is loaded (from `loadFont()` calls).
- **Spacing rhythm** — padding and gap sizes used on other screens (e.g. `px-9`, `pt-16`).
- **Corner radius** — are inputs `rounded-full`, `rounded-2xl`, or something else?
- **Component patterns** — does a `TextField`, `PrimaryButton`, `Avatar` etc. already exist?

Use those exact values in the new screen. Never invent new colours or spacing that don't
already exist in the project. Consistency is the goal.

### Step 3 — Reuse existing components

If a suitable shared component already exists in `projects/<name>/src/components/`,
import and reuse it. Do NOT duplicate it. Only create a new component if nothing
close enough exists.

### Step 4 — Canvas size for description-only screens

When there is no screenshot to measure:
- Use the same `width` and `height` already defined for that project in `src/Root.tsx`.
- If the project has no compositions yet, default to `393 × 852` (standard iPhone portrait).

### Step 5 — Apply the same build and asset rules

All other rules still apply: strip chrome, ask for assets, use the asset declaration
box, run `tsc --noEmit`, and update `ASSETS.md`.

### Step 6 — Tell the user what you assumed

After building, say in plain language:
- What colours and font you copied from the existing screens.
- Which existing components you reused.
- What is still a placeholder (logo, photos, etc.).

---

## Multiple screenshots of the same page

When the user sends **more than one screenshot that all belong to the same page**
(e.g. scroll segments of a long landing page, or overlapping sections of a single
screen), treat them as **one design, not many**:

- Build a **single screen component** that stacks all sections top-to-bottom in
  natural document order, producing a tall long-scroll layout.
- Register it as **one `<Composition>`** in `src/Root.tsx` with:
  - `width` = the single-screen width detected from the screenshots.
  - `height` = sum of the heights of all sections (after stripping chrome), so the
    full design is visible in one still frame without clipping.
- Name the component and Composition after the page, not the individual scroll
  position (e.g. `LandingPage`, not `LandingPageHero` + `LandingPageFeatures`).
- Infer section order from visual content; if order is ambiguous, use the sequence
  the user sent the screenshots and note the assumption in the summary.
- Never create multiple Compositions for what is logically one continuous page.

---

## Workflow — yolo mode

Run start to finish with no confirmation checkpoints:

1. **Launch Remotion Studio** (see *Session startup* above) if not already running.
2. Receive input — either a screenshot or a plain description.
   - **Screenshot provided** → go to step 3.
   - **Description only (no screenshot)** → follow *Building from a description* above,
     then rejoin at step 4 once the three quick questions are answered.
3. **Present the asset declaration box** and wait for the user to fill it in.
   - If the user explicitly says "skip" or "use defaults", apply fallback rules
     immediately and proceed without waiting.
4. **If multiple screenshots share the same page**, treat as one long-scroll design
   (see *Multiple screenshots of the same page* above). Otherwise treat each as its
   own screen.
5. Detect (or inherit) canvas size. Strip chrome. Identify or reuse fonts, colours, icons.
6. Build the screen component(s) under `projects/<name>/src/screens/`.
7. Create or update `src/projects/<name>/ASSETS.md` with every asset used.
8. Register Composition(s) in `src/Root.tsx`.
9. Run `npx tsc --noEmit` to confirm zero type errors before reporting done.
10. **Run the post-task sweep** (see below).
11. **Auto git commit** (see below).
12. **Ask about screen flow** if this is the 2nd+ screen in a project (see below).
13. Report what was built, which existing styles were reused, and which slots are still
    placeholders the user needs to fill in.

**Only stop mid-flow for a real blocker**: content genuinely unreadable, cut off, or
ambiguous with no reasonable guess possible. Everything else — proceed on best
judgment and note it in the summary.

---

## Post-task sweep (MANDATORY — run after every screen or UI change)

After every screen is built or updated, **automatically run a cleanup pass** before
reporting done. Do NOT ask for permission — just do it. The sweep covers:

### 1. File and folder hygiene

- **Unused files** — delete any component or asset file that is no longer imported
  anywhere in the project.
- **Empty folders** — remove any empty `assets/`, `components/`, or `screens/` folder.
- **File location** — if a component is used by only one screen, keep it in
  `components/`. If a piece of JSX is used inline in only one place and is under
  ~15 lines, it does not need its own component file.

### 2. Component refactor check

- **Duplicate code** — if the same block of JSX (or near-identical block) appears in
  two or more screens, extract it into a shared component in `components/`.
- **Overgrown components** — if a screen file exceeds ~200 lines, look for logical
  sections that can be split into sub-components.
- **Naming** — verify all files, components, and props use explicit descriptive names
  (no abbreviations). Rename if not.

### 3. Style consistency check

- **Colours** — scan for any hardcoded colour value that doesn't match the project's
  existing palette. Flag or fix.
- **Spacing** — check for padding/gap values that break the project's rhythm.
- **Border radius** — ensure inputs and cards use the same radius across all screens.

### 4. AGENTS.md tree update

- **Always update the project file tree** in the "Current projects" section of this
  file to reflect any added, renamed, or deleted files.

### 5. Report

After the sweep, tell the user in plain language:
- What was cleaned up, renamed, or refactored (if anything).
- If nothing needed changing, say "Everything looks tidy."

---

## Auto git commit (MANDATORY — run after every sweep)

After the post-task sweep completes, **automatically commit all changes** so the user
can track and revert any screen individually. Do NOT ask for permission.

### Commit format

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
feat(whatsevr): SignInScreen — initial build from screenshot
fix(whatsevr): SignInScreen — match TextField border radius to screenshot
refactor(whatsevr): extract Avatar into shared component
assets(whatsevr): add real logo SVG, replace placeholder
flow(whatsevr): create SignIn → Explore → Profile sequence
```

### Rules

- One commit per screen build or update — never batch multiple unrelated screens.
- If the sweep made changes, include them in the same commit as the screen build.
- If **only** the sweep made changes (no new screen), commit with `refactor` prefix.
- Never commit broken code — `tsc --noEmit` must pass before committing.
- Tell the user in plain language: "Changes saved. You can undo this anytime."

---

## Screen flow — Figma-like hierarchy (ask after the 2nd screen)

When a project has **two or more screens**, the user can define a **screen flow** —
the order screens connect to each other, just like Figma's prototype flow.

### When to ask

After building the **2nd screen** (or later) in a project, always ask:

> "You now have these screens: [list them]. What order should they play in when
> rendered as a video? For example: SignIn → Explore → Profile. Or should they
> stay as separate still frames?"

If the user already described a flow in their message, skip the question.

### How to store the flow

Each project maintains a `FLOW.md` file at `src/projects/<project-name>/FLOW.md`.
Create it when the user defines a flow; update it when screens are added or reordered.

```markdown
# <project-name> — Screen Flow

> The order screens appear when rendered as a video sequence.
> Each screen shows for the specified duration before transitioning to the next.

| Order | Screen | Duration (seconds) | Transition |
|---|---|---|---|
| 1 | SignInScreen | 3 | cut |
| 2 | ExploreScreen | 3 | cut |
| 3 | ProfileScreen | 3 | cut |

Render command: `npx remotion render src/index.ts <project-name>-Flow --codec h264`
```

### How to wire the flow in Remotion

When the user defines a flow, create (or update) a **flow composition** that sequences
the screens:

1. Create `src/projects/<project-name>/src/screens/FlowSequence.tsx`:
   - Import all screens in flow order.
   - Use Remotion's `<Series>` component to show each screen for its duration.
   - Each `<Series.Sequence>` renders one screen as a still (no internal animation).

2. Register a new Composition in `src/Root.tsx`:
   - `id="<ProjectName>-Flow"`
   - `width`/`height` = the project's standard canvas size.
   - `durationInFrames` = sum of all screen durations × fps.
   - `fps` = 30 (default).

3. Update `FLOW.md` with the current order.

4. Update the **project file tree** in AGENTS.md.

### Rules

- The flow composition is **in addition to** the individual still Compositions —
  never remove the per-screen Compositions.
- Default duration per screen = 3 seconds (90 frames at 30fps) unless the user says
  otherwise.
- Default transition = `cut` (instant switch). If the user asks for fades or slides,
  use Remotion's `<TransitionSeries>` from `@remotion/transitions`.
- If the user hasn't defined a flow yet, do NOT create one automatically. Always ask first.
- When a new screen is added to a project that already has a flow, ask where it fits
  in the sequence.

---

## Explicitly out of scope

- Complex timeline animation within a single screen (motion graphics, keyframes).
- Shared cross-project design system or component library.
- Per-project metadata tracking beyond `ASSETS.md` and `FLOW.md`.

