# Screenshot-to-Remotion Design Cloning — Design Spec

Date: 2026-08-11

## Purpose

Convert a screenshot of an app screen or website into a pixel-faithful React/Tailwind
component, stripped of any device or browser chrome (status bars, nav bars, address
bars), and bind it into a Remotion Composition. Supports many independent client/domain
projects in one repo, built in a "yolo" workflow — minimal back-and-forth, agent proceeds
end-to-end and only stops on genuine blockers.

## Repo Layout (monorepo, single Remotion root)

```
designnflow/
  package.json
  remotion.config.ts
  tsconfig.json
  tailwind.config.ts
  AGENTS.md
  src/
    Root.tsx                          # registers ALL Compositions, all projects
    projects/
      <project-name>/
        src/
          screens/<ScreenName>.tsx        # one full screen = one component
          components/<ComponentName>.tsx  # shared pieces, this project only
          assets/                         # extracted/placeholder images
```

- `<project-name>` = one client or app/domain. No shared components across projects —
  each is self-contained.
- No per-project metadata file; folder name is the identifier.

## Per-Screen Rules

- Strip device/browser chrome — code only the app/website content itself.
- Canvas size inferred from screenshot aspect ratio (minus chrome), not a fixed default.
- High fidelity: match color, spacing, type scale, and layout hierarchy as closely as
  possible. Screenshot is treated as spec.
- Fonts: identify closest Google Font, load via `@remotion/google-fonts`.
- Icons: swap to closest Lucide/Heroicons equivalent.
- Photos/images: gray placeholder block unless the user supplies a real asset file.
- Styling: Tailwind utility classes only — no inline styles, no CSS modules.
- Naming: explicit, descriptive component/file names, no abbreviations.

## Remotion Binding

- Each screen becomes one `<Composition>` registered in `src/Root.tsx`.
- `id="<ProjectName>-<ScreenName>"`.
- Still frame (short fixed duration, no animation/timeline logic) unless the user
  explicitly requests animation later.
- `width`/`height` set to the detected canvas size.

## Yolo Workflow

1. User supplies a screenshot and a project name (new or existing).
2. Agent detects canvas size, strips chrome, identifies fonts/colors/icons.
3. Agent builds the screen component under `projects/<name>/src/screens/`.
4. Agent registers the Composition in `Root.tsx`.
5. No confirmation checkpoints between these steps.
6. Agent stops and asks the user ONLY when a real blocker exists — content genuinely
   unreadable, cut off, or ambiguous with no reasonable guess available. Otherwise it
   proceeds and briefly notes any assumptions made in its final summary.

## Out of Scope (for now)

- Animation/motion timelines.
- Shared cross-project design system or component library.
- Per-project metadata tracking (client, domain, date).
- Automated preview/screenshot verification step (user views via Remotion Studio
  themselves after each screen).
