---
name: ui-enhancement-redesign
description: Enhance or fully redesign existing UI screens in this repo while preserving features. Applies autonomous design improvements across typography, color, spacing, component quality, content fidelity, and information architecture — grounded in competitor research and modern design system best practices. Use whenever the user asks to enhance, improve, polish, redesign, or upgrade an existing screen or project.
---

# UI Enhancement & Redesign Skill

This skill defines the mandatory workflow for enhancing or fully redesigning existing UI screens already built in this repo. The goal is always the same: take what exists, keep every feature, and make it look like it was designed by a world-class product design team.

**This is not a patch job.** Enhancement means rethinking layout, hierarchy, typography, color, and component quality from scratch — while preserving the exact feature set and user flows of the original.

---

## 1. Scope Modes

The skill operates in two modes depending on the user's request:

| Mode | Trigger | What happens |
|---|---|---|
| **Full Screen Enhancement** (default) | "Enhance the home screen" / "Redesign the dashboard" | Every element on the screen is audited and rebuilt |
| **Scoped Partial Enhancement** | "Just improve the header" / "Only fix the card layout" | Only the named section or component is touched; everything else stays identical |

When the request is ambiguous, default to full screen enhancement.

---

## 2. Mandatory Enhancement Categories

Every enhancement — full or partial — MUST evaluate and improve across these six categories. Skip a category only if it is genuinely not applicable to the target scope.

### Category A — Typography
- Font pairing: primary display + body text, loaded via `@remotion/google-fonts`.
- Hierarchy: clear size progression (headline → subheading → body → caption) with intentional scale ratios (1.25–1.5 modular scale).
- Weight distribution: bold for headlines and CTAs, medium for labels, regular for body. Never uniform weight across all text.
- Line-height: 1.1–1.2 for display text, 1.4–1.6 for body. Never default `leading-normal` everywhere.
- Letter-spacing: tight (`tracking-tight`) for large display type, normal or slightly wide for small text and labels.

### Category B — Color Palette
- Contrast: WCAG AA minimum for all text-on-background pairings.
- Harmony: curated HSL palette with intentional warm/cool balance. Never random hex values.
- Brand consistency: if the project has established brand colors, enhance within that palette — don't replace it arbitrarily.
- Theme Preservation (STRICT): Never automatically convert light mode designs to dark mode or vice-versa. Maintain and enhance within the screen's original theme baseline unless explicitly instructed by the user.
- Accent economy: one primary accent, one secondary. Two max. Not a rainbow.
- Surface hierarchy: distinct background tones for nested containers (page → card → inner element) creating visual depth without borders.

### Category C — Spacing & Layout
- Whitespace rhythm: consistent spacing scale (4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px). Never arbitrary pixel values.
- Alignment grid: elements visually aligned on a coherent grid. No "almost aligned" elements.
- Responsive proportions: components sized relative to canvas, not hardcoded to pixel values that only work at one resolution.
- Visual hierarchy through scale: one dominant focal element, not a flat grid of equal-weight blocks. Intentional asymmetry and varied element sizes.
- Section breathing room: generous separation between logical sections. Dense ≠ good.

### Category D — Component Quality
- Buttons: proper padding, clear affordance, hover/press states indicated through styling.
- Inputs/fields: visible borders or fills, adequate height, proper label placement.
- Cards: consistent corner radius, appropriate shadow depth, clear content hierarchy within.
- Badges/pills: proportional padding, readable at small sizes, intentional color coding.
- Icons: consistent size and stroke weight throughout, properly aligned with adjacent text.

### Category E — Content Quality
- Always fill content in list and grid views where possible across all screens. Expand repeating items (list rows, grid cards, messages, logs) to fill available space naturally.
- Never invent new core functionality, unmentioned UI sections, or unrequested features.
- Replace placeholder text (lorem ipsum, "Title here", "Description") with realistic, domain-appropriate copy.
- Metrics and numbers should look real (not round numbers like "100" or "1000" — use "1,247" or "3.8k").
- Usernames, dates, timestamps should look authentic.
- Headlines should be compelling and specific to the product domain — not generic SaaS fluff.

### Category F — Information Architecture
- Group related elements visually and spatially.
- Order content by user priority and task frequency (most used → least used, top → bottom / left → right).
- Eliminate redundant elements that communicate the same thing twice.
- Ensure scan-ability: a user should understand the screen's purpose in under 3 seconds.
- Apply Fitts's Law (important targets large and easy to reach), Hick's Law (fewer choices per decision point), and cognitive load reduction.

---

## 3. Strictly Forbidden Enhancement Tropes

When redesigning, **NEVER** fall into these traps:

- 🚫 **No Generic AI-Slop Layouts**: Centered hero + 3 feature cards + gradient blob. Symmetric equal-weight grids. Everything center-aligned with uniform card sizes and no focal point.
- 🚫 **No Purple-on-Dark Clichés**: Dark purple/violet glowing backgrounds with violet accent text.
- 🚫 **No Colored Border Accents**: Glowing colored outlines or neon border effects unless the brand specifically uses them.
- 🚫 **No Grid Backgrounds**: Grid line pattern backgrounds or particle mesh overlays.
- 🚫 **No Over-Nested Cards**: Rounded cards containing three or more nested rounded cards inside.
- 🚫 **No Headline Biscuit Pills**: Pulsing dot badge above the main headline.
- 🚫 **No Gradient Keywords**: CSS gradient text fills across headline keywords.
- 🚫 **No Arbitrary Style Injection**: Introducing glassmorphism, neumorphism, or brutalism unless it matches the product's established brand personality.

---

## 4. Step-by-Step Workflow

### Step 0 — Identify Target

Determine which project and which screen(s) the user wants enhanced. If the user says "enhance everything" or names a project without specifying screens, enhance all screens in that project, processing them one at a time.

### Step 1 — Ask File Handling Strategy [CHECKPOINT]

Before any code changes, ask the user via `ask_question`:

1. **Which screens to enhance?** (list all screens in the project with concrete options, plus "All screens")
2. **Replace the existing screen file in place, or create a new "Enhanced" / "V2" version alongside it?**

Do not proceed until answered.

### Step 2 — Deep Audit of Existing Design

Read every file in the target project to build a complete picture:

- **Screens**: `src/projects/<project>/src/screens/*.tsx` — read all, not just the target. Understand the project's current visual language.
- **Components**: `src/projects/<project>/src/components/*.tsx` — catalog all shared components, their props, and their styling.
- **Assets**: `src/projects/<project>/src/assets/` — note available logos, images, and brand files.
- **Root.tsx**: Check existing composition dimensions and IDs.

Extract and document (mentally, not in a file):
- Current color values (hex, rgb, gradients)
- Current font families (`loadFont()` calls)
- Current spacing patterns (padding, gap, margin values)
- Current component patterns (button styles, card styles, input styles)
- Current layout structure (flex directions, grid usage, absolute positioning)

### Step 3 — Competitor & Best Practice Research

Research how the same problem is solved by the best products in the category:

1. **Web search** for 2–3 real, well-known products in the same category (e.g., if enhancing a banking app, look at Revolut, Monzo, Cash App).
2. Study their proven layout patterns, component treatments, typography scales, and color strategies.
3. Study relevant design system guidelines (Apple HIG, Material Design 3, Linear/Vercel-grade SaaS patterns) for the product type.

Adapt real patterns to this project's brand — don't copy verbatim. The goal is to be informed by the best, not to clone them.

### Step 4 — Enhance Shared Components First

If the target screen uses shared components from `src/projects/<project>/src/components/`, enhance those first:

- Improve their visual quality across all 6 categories.
- Ensure changes are backward-compatible with other screens that use them (check all imports across the project).
- If a component change would break another screen, create a new variant rather than modifying the original.

### Step 5 — Build the Enhanced Screen

Rebuild the screen component applying all 6 enhancement categories:

1. **Preserve every feature.** Every button, every input, every data display, every navigation element from the original must exist in the enhanced version. Features are sacred; visuals are not.
2. **Rethink the layout.** Don't just re-skin — reconsider information hierarchy, element grouping, and visual flow.
3. **Apply the research.** Use patterns learned from competitor analysis and design system best practices.
4. **Match project tokens.** If the project has established brand colors and fonts, enhance within that language. Don't replace brand identity.
5. **Realistic content.** Replace any placeholder content with realistic, domain-appropriate copy.

### Step 6 — Register & Sync

- If creating a new composition (V2/Enhanced), register it in `src/Root.tsx` with proper dimensions.
- If replacing in place, update the existing composition entry if dimensions changed.
- Run `npm run sync:viewer` to regenerate the viewer's composition registry.

### Step 7 — 2-Pass Automatic Design Review

1. **Pass 1**: Render a still frame via `npx remotion still <composition-id> <out-path>`.
2. **Pass 2**: Visually inspect the rendered output. Audit against all 6 enhancement categories. Fix any issues found — spacing misalignment, typography inconsistency, color contrast failures, component proportion issues.
3. Re-render and verify.

### Step 8 — Type Check & Sweep

1. Run `npx tsc --noEmit`. Fix errors, up to 3 attempts.
2. Run the post-task sweep (per AGENTS.md).
3. Re-run `npx tsc --noEmit` after sweep edits.

### Step 9 — Auto Git Commit

Commit with a descriptive message: `enhance(<project>): redesign <ScreenName> — <brief summary of key changes>`.

### Step 10 — Report [CHECKPOINT]

Tell the user "Done" and which screens were enhanced. Nothing more unless asked.

---

## 5. Handling a URL Reference

If the user provides a URL alongside the enhancement request (e.g., "enhance the home screen, here's the live site: https://..."):

1. Follow the `url-to-remotion-design` skill's 3-source capture workflow (screenshot + HTML + DOM computed styles) to understand the current live state.
2. Use the captured data as additional reference when applying enhancements — but do NOT just replicate the live site. The point is to enhance, not to match.

If no URL is provided, work exclusively from the existing repo screens.

---

## 6. Scoped Partial Enhancement Rules

When the user requests enhancement of a specific section only:

1. Read the full screen to understand context, but only modify the named section/component.
2. Ensure the modified section's style harmonizes with the untouched portions.
3. If improving the named section requires adjusting a shared component, check if other screens use that component before changing it.
4. Apply the same 6-category audit but scoped to the target section only.

---

## 7. Strict Rules

- **Features are sacred.** Never remove, hide, or reduce functionality. Every interactive element, data display, and navigation path from the original must survive enhancement.
- **Brand identity is respected.** Enhance within the project's existing brand language unless the user explicitly asks for a new direction.
- **No documentation files.** Do not create any `.md` files (ASSETS.md, CHANGES.md, etc.) during enhancement. Build screens, not documents.
- **No narration.** Do not narrate work in progress. Stay silent while working. Speak only at checkpoints or on completion.
- **Shared component blast radius.** Before modifying any shared component, grep for all imports across the project. If the change would break other screens, create a variant instead.
- **Composition dimensions.** If the enhanced layout is taller or wider than the original, update the `<Composition>` dimensions in `src/Root.tsx` to prevent clipping.
- **Never guess colors.** Extract exact values from the existing code. If enhancing, derive new colors from the existing palette using HSL manipulation (adjust lightness/saturation), not random new hex values.
