---
name: marketing-poster-design
description: Create pixel-perfect high-fidelity marketing launch posters, hero product showcases, feature posters, or social promo graphics in Remotion for any app or project. Use whenever the user asks for a marketing poster, launch banner, product showcase poster, feature graphic, or social promo visual.
---

# Marketing Poster Design Skill

This skill guides the creation of production-grade marketing posters, launch graphics, feature showcases, and promotional visuals built as Remotion still compositions (`durationInFrames={1}`).

---

## 1. Poster Types & Canvas Aspect Ratios

Select the appropriate dimension based on target platform and user preference:

| Format / Aspect Ratio | Resolution (`width` × `height`) | Best For |
|---|---|---|
| **Full HD Vertical Poster** | `1080 × 1920` (9:16) | Mobile social stories (Instagram, TikTok), digital signage, mobile sharing |
| **Landscape Banner Poster** | `1920 × 1080` (16:9) | Desktop web headers, presentation slides, YouTube banners, digital billboards |
| **Square Social Poster** | `1080 × 1080` (1:1) | Instagram/Twitter feed posts, LinkedIn updates, product cards |

---

## 2. Universal Poster Visual Hierarchy

Every high-converting marketing poster follows a proven 5-zone visual hierarchy:

```
┌──────────────────────────────────────────────────────────┐
│  1. Launch Badge / Eyebrow (e.g. 🚀 APP LAUNCH • NOW LIVE)  │
│  2. Brand Logo + Name                                    │
│  3. Main Headline & Sub-headline                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  4. Central Focal Point:                                 │
│     - Glassmorphic 3D Smartphone / Laptop Mockup         │
│     - Live App UI Preview / Hero Photography             │
│     - Floating Feature Pill Cards around Mockup          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  5. Bottom CTA Banner:                                   │
│     - App Store & Google Play Download Badges            │
│     - QR Code Frame for Direct Mobile Installation       │
│     - Official Web Domain (e.g., www.appname.com)        │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Workflow for Creating a Poster

### Step 1 — Clarify Requirements (Q&A)
Ask the user through `ask_question`:
1. **Format/Aspect Ratio** (Vertical `1080x1920`, Landscape `1920x1080`, Square `1080x1080`).
2. **Main Headline & Tagline**.
3. **Primary Focal Point** (Device Mockup with App Screens, Hero Photography, or Minimalist Typography).
4. **CTA & Download Badges** (App Store, Play Store, QR Code, Launch Discount).

### Step 2 — Grounding in Project Design Tokens
Before coding, read the project's existing screens and components:
- Extract primary brand color (e.g. `#29B6F6` sky blue), accent colors, and background themes.
- Reuse loaded Google Font (e.g. `Poppins`, `Inter`) via `@remotion/google-fonts`.
- Reuse existing brand logo component (`<WhatsevrLogo />`) or asset images from `src/projects/<project>/src/assets/`.

### Step 3 — Build Component Structure
Create `src/projects/<project>/src/screens/<PosterNameScreen>.tsx`:
- Use `AbsoluteFill` from `remotion`.
- Structure container with deep gradient background (`bg-slate-950` to `bg-slate-900`) and radial glow light pools.
- Build floating glassmorphic phone frame with rounded corners (`rounded-[48px]`), border (`border-slate-700`), and dark drop shadow (`shadow-2xl`).
- Surround mockup with 4 floating feature pill cards using `backdrop-blur-xl` and brand accent borders.
- Include App Store & Play Store SVG badges alongside QR code mockup.

### Step 4 — Register Composition in `Root.tsx`
Add entry to `src/Root.tsx`:
```tsx
const PROJECT_POSTER_WIDTH = 1080;
const PROJECT_POSTER_HEIGHT = 1920;

<Composition
  id="<project>-poster-Launch"
  component={PosterScreen}
  durationInFrames={1}
  fps={30}
  width={PROJECT_POSTER_WIDTH}
  height={PROJECT_POSTER_HEIGHT}
/>
```

### Step 5 — Sync Viewer & Validate
1. Run `npm run sync:viewer` to update viewer registry.
2. Render still frame: `npx remotion still <composition-id> out/poster.png`.
3. Verify TypeScript: `npx tsc --noEmit`.
4. Commit changes: `git add` & `git commit`.

---

## 4. Key Design Patterns & CSS Utilities

- **Radial Lighting Pools**:
  ```tsx
  <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 rounded-full opacity-40 blur-[140px] bg-sky-500 w-[900px] h-[700px]" />
  ```
- **Glassmorphic Feature Cards**:
  ```tsx
  <div className="flex items-center gap-3.5 rounded-2xl border border-sky-400/30 bg-slate-900/90 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-sky-500/20">
  ```
- **Gradient Text Fills on Keywords**:
  ```tsx
  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
    Live
  </span>
  ```

---

## 5. Non-Negotiable Rules

1. **Images & Media**: Always use Remotion's `<Img src={...} />` component — never native `<img>`.
2. **Icons**: Use Lucide icons (`Radio`, `Coins`, `Users`, `QrCode`, `Sparkles`).
3. **Pure Presentation**: Posters are still frames (`durationInFrames={1}`). Keep them pure UI without frame-driven hooks inside the screen component itself.
