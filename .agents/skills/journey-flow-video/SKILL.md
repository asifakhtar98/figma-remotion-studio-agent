---
name: journey-flow-video
description: Turn this repo's still screens into an animated user-journey video — a story, an animated finger tapping real controls, typed text entry, staggered message reveals. Use whenever the user asks for a flow, journey, walkthrough, demo video, or "show the real user experience".
---

# Journey flow video

This repo has exactly two purposes: **creating UI** (still screens) and **creating user journey flows** (this skill).

Read the official Remotion skills first — they own the mechanics, and this file does not repeat them:

| For | Read |
|---|---|
| `TransitionSeries`, presentations, transition timing | `.agents/skills/remotion-markup/transitions.md` |
| `interpolate`, easing, clamping | `.agents/skills/remotion-markup/timing.md` |
| Sequences and multi-scene structure | `.agents/skills/remotion-markup/sequencing.md`, `multi-scene-video.md` |
| Measuring elements, `useCurrentScale()` | `.agents/skills/remotion-markup/measuring-dom-nodes.md` |
| Looking up any other Remotion API | `.agents/skills/remotion-docs/SKILL.md` |

What follows is only what is specific to this repo.

## 1. Story first — mandatory

**Do not pick screens, order, or tap targets before the story exists.** A flow assembled screen-by-screen is a feature tour: aimless, and it reads as fake. A flow built from a story is something a viewer follows.

Write one short paragraph naming:

- **Who** the person is and what they want from the product.
- **One goal** for this single sitting — not three.
- **Why each tap happens** — every screen is a step toward that goal, and every tap is what that person would actually press next.

Confirm it with the user via `AskUserQuestion` before writing code. Screens that don't serve the story get cut, however good they look. Eight screens that tell a story beat fourteen that don't.

> **Aryan earns his first payout.** A new creator who joined because a friend said you can make money taking calls. He signs up, looks at what creators post to see what earns, takes a call from a fan, chats with her after, goes live to earn properly, then checks his wallet and cashes out.

Keep the story as a comment block at the top of `FlowSequence.tsx`, each numbered beat naming its screen and what gets tapped. That comment is the spec; code and story must stay in agreement.

## 2. One component, two purposes

A screen must render **identically to its still** when given no animation props. Animation is opt-in through a single optional `animateFrom` prop (a frame number). This is what lets one component serve both of the repo's purposes without forking.

```tsx
type ChatScreenProps = {
  /** Frame the conversation starts at. Omit for the static still. */
  animateFrom?: number;
};
```

Sentinel values disable an effect for the still render, and **must be finite** — `interpolate` returns `NaN` on an infinite input range, which silently blanks the element:

```tsx
export const ALREADY_REVEALED = -100_000; // reveal already happened → visible
export const NEVER_TYPED = 100_000;       // typing never starts → empty field
```

Hooks run every frame, so hook order must never vary: compute all hooks at the top before any early return, never call one inside a ternary, and destructure `useVideoConfig()` exactly once.

## 3. Tap targets — measure, never estimate

Reading JSX to guess a button's position lands 20–50px off, and a tap that misses reads as a glitch. Measure the rendered DOM instead.

In the viewer, `.__remotion-player` is the canvas root; its rendered width over the composition width gives the scale (or use `useCurrentScale()` per the official measuring doc). Select a composition by **clicking its sidebar button** — the `?comp=` URL parameter does not switch compositions, so you will otherwise measure the wrong screen.

```js
const player = document.querySelector('.__remotion-player');
const pr = player.getBoundingClientRect();
const scale = pr.width / CANVAS_WIDTH;
const toCanvas = (r) => ({
  x: Math.round((r.left + r.width / 2 - pr.left) / scale),
  y: Math.round((r.top + r.height / 2 - pr.top) / scale),
});
// walk text leaves AND `svg.lucide, button` — most tap targets are icons with no text
```

Aim at genuinely interactive controls: primary buttons, nav icons, send, accept. Never empty background. Re-measure after any layout change.

## 4. Project components

Per-project, under `src/projects/<project>/src/components/` (projects never share code):

- **`TapCursor.tsx`** — a 👆 emoji hand that flies in, presses with a ripple at the contact point, and lifts away. Offset the glyph so the **fingertip**, not the glyph centre, rests on the target.
- **`TypeEffects.tsx`** — `useTypedText`, `isTyping`, `<BlinkingCaret>`, `<TypingDots>`, `useEnterStyle`. Type at ~1.4–1.6 chars/frame; mask passwords with `'•'.repeat(typed.length)` so the mask grows live.

## 5. Timing

Default hold 75 frames (2.5s), tap at 42. **A screen that types needs a longer hold and a later tap** — the finger must land after the text finishes. Derive it, never guess:

```tsx
const T_TYPE_END = T_TYPE_START + Math.ceil(TEXT.length / CHARS_PER_FRAME);
export const CHAT_SEND_TAP_FRAME = T_TYPE_END + 6;
```

Export that constant from the screen and import it into `FlowSequence.tsx` so the two cannot drift. Transitions overlap, so `durationInFrames` = sum of holds − sum of transition frames; set it in `src/Root.tsx` or the ending truncates.

Match transition to meaning: push-slide from right for forward navigation, slide from bottom for modals and interruptions (incoming call), fade for tab switches and post-auth landings.

## 6. Verify in the browser — mandatory

`tsc --noEmit` passes on both of the failures that actually happen here: a hook-order crash, and a `NaN` blanking the render. Neither is visible without looking.

1. Open the flow in the viewer; check the console for `Rendered more hooks` or error-boundary messages.
2. Screenshot at several timeline points — a composition can render frame 0 fine and crash at frame 60.
3. **Open the individual stills too** and confirm they still render exactly as before.

```js
() => {
  const p = document.querySelector('.__remotion-player');
  return {broken: p.textContent.includes('⚠'), text: p.textContent.slice(0, 80)};
}
```

Then run the post-task sweep and commit with the `flow` prefix.
