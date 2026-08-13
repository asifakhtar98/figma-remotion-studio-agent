# DesignnFlow

An AI-native React + Remotion workspace designed to convert UI screenshots and plain descriptions into pixel-faithful React screens, and seamlessly animate them into engaging user journey flow videos.

## Features

- **Pixel-Faithful UI Generation**: Code pure React + Tailwind UI components based on screenshots or descriptions.
- **Animated User Journey Flows**: Animate still screens into a story—including cursor movements, typing effects, and staggered reveals.
- **AI Agent Native**: Built from the ground up to be orchestrated by AI coding agents (Claude, Cursor, Windsurf) through explicit instructions in `AGENTS.md` and custom skills.
- **Custom Embedded Viewer**: Lightweight Vite-based viewer running on port 4000 for lightning-fast composition previews, zoom, and exports.
- **Modular Architecture**: Complete isolation between projects and clients under `src/projects/`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies for both the root project and the custom viewer.

```bash
# Install root dependencies (Remotion, React, Tailwind)
npm install

# Install viewer dependencies
cd viewer
npm install
cd ..
```

## Quick Start

### 1. Launch the Custom Viewer (Recommended)
This workspace ships with a custom, lightweight composition viewer that automatically syncs with your project files.

```bash
npm run viewer
```
*The viewer will run at `http://localhost:4000`.*

### 2. Launch Default Remotion Studio (humans only)
For manual use only — AI agents must always use the custom viewer above, never default Studio:

```bash
npm start
```
*Remotion Studio will run at `http://localhost:3000`.*

### 3. Sync Viewer Registry
When you add new Compositions to `src/Root.tsx`, sync the viewer registry (this happens automatically when running `npm run viewer`):

```bash
npm run sync:viewer
```

## Project Structure

Projects are strictly isolated to prevent cross-contamination between different clients or applications.

```text
src/
  Root.tsx                          # Registers ALL Compositions across all projects
  projects/
    <project-name>/                 # Isolated workspace for one app/client
      src/
        screens/                    # Pure UI React components (no animation)
        components/                 # Shared UI pieces for this project only
        flow/                       # Optional: User journey animation sequences
        assets/                     # User-supplied files (logos, photos)
        reference/                  # Reference screenshots and mockups
viewer/                             # Custom Vite + React composition viewer
.agents/skills/                     # Official Remotion & AI Agent skills
AGENTS.md                           # Strict AI behavior instructions
```

## AI Agent Integration

DesignnFlow is optimized for AI assistance. To get the most out of your AI agent:
1. Always ensure your agent reads `AGENTS.md` at the start of a session.
2. The agent will automatically utilize the skills located in `.agents/skills/` (e.g., `remotion-markup`, `journey-flow-video`) to build standard UI and animations.
3. Simply provide the agent with a screenshot or a plain description, and it will build the UI screens and register them in `src/Root.tsx`.

## Publishing to GitHub

To make your own fork or copy public, follow these commands in your terminal:

```bash
# 1. Add your new GitHub repository remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 2. Rename the current branch to main (if needed)
git branch -M main

# 3. Add files and commit
git add .
git commit -m "Initial commit: DesignnFlow setup"

# 4. Push to GitHub
git push -u origin main
```

## License

This project is provided for open-source use. See standard MIT license terms.
