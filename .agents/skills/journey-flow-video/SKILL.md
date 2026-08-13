---
name: journey-flow-video
description: Turn this repo's still screens into an animated user-journey video — a story, an animated hand tapping real controls, typed text entry, staggered message reveals — without the UI depending on the flow. Use whenever the user asks for a flow, journey, walkthrough, demo video, or "show the real user experience".
---

# Journey flow video

This repo has four purposes (see `AGENTS.md`); this skill owns the second:

1. **Creating UI** — still screens. Always the default, and the only output unless a flow is asked for.
2. **Creating a user journey flow** — those screens animated into a story. Only on request.

Read the official Remotion skills first; they own the mechanics and this file does not repeat them:

| For | Read |
|---|---|
| `TransitionSeries`, presentations, transition timing | `.agents/skills/remotion-markup/transitions.md` |
| `interpolate`, easing, clamping | `.agents/skills/remotion-markup/timing.md` |
| Sequences, multi-scene structure | `.agents/skills/remotion-markup/sequencing.md`, `multi-scene-video.md` |
| Measuring elements, `useCurrentScale()` | `.agents/skills/remotion-markup/measuring-dom-nodes.md` |
| Any other Remotion API | `.agents/skills/remotion-docs/SKILL.md` |

**Prefer an existing published skill over writing your own.** This repo installs skills from `remotion-dev/skills` (see `skills-lock.json`); check that catalogue before inventing an approach.

---

## 1. Separation of concerns — the load-bearing rule

> **Deleting the `flow/` folder must leave every screen and every still Composition working, untouched.**

The flow is strictly additive. UI is the product; the journey video is a view onto it.

**Match Real Product Vibe & Tokens**: All animated scenes, overlays, and flow components must inherit the project's existing design tokens (typography, color palettes, spacing rhythm, button shapes) so the video matches the exact look and feel of the real product.

```
src/projects/<project>/src/
  screens/      ← pure UI. No frames, no animation, no imports from flow/
  components/   ← pure UI pieces, presentational only
  flow/         ← the entire journey: FlowSequence, TapCursor, timing helpers
```

**Screens must be frame-agnostic.** A screen never calls `useCurrentFrame`, never imports `interpolate`/`spring`, and never imports anything from `flow/`. It takes plain data props — a string, a number, a boolean — each defaulting to the still appearance:

```tsx
type ChatScreenProps = {
  visibleMessageCount?: number;          // defaults to the whole conversation
  typingIndicator?: 'alex' | 'sarah' | null;
  draftMessage?: string;
  draftCaretVisible?: boolean;
};
```

**The flow owns all timing.** For each screen that animates, `flow/` holds a small "beat" component that computes those plain values per frame and passes them down:

```tsx
const CreateAccountBeat: FC = () => {
  const emailValue = useTypedText(CREATE_ACCOUNT_EMAIL, EMAIL_TYPE_START);
  const caretVisible = useCaretVisible(useIsTyping(CREATE_ACCOUNT_EMAIL, EMAIL_TYPE_START));
  return <CreateAccountScreen emailValue={emailValue} caretVisible={caretVisible} />;
};
```

**Verify the separation, don't assume it.** Two checks, both cheap:

```bash
grep -rn "flow/" src/projects/<project>/src/screens/ src/projects/<project>/src/components/
grep -rn "useCurrentFrame\|interpolate\|spring(" src/projects/<project>/src/screens/ src/projects/<project>/src/components/
```

Both must return nothing. Then prove it end to end: copy the project to a scratch directory, delete `flow/`, remove the Flow `<Composition>` from `Root.tsx`, and run `npx tsc --noEmit`. It must pass.

An earlier version of this flow put `animateFrom` props and typing state *inside* the screens. It worked, but deleting the flow would have left dead imports and broken UI. Data-in/props-down is what makes the boundary real.

---

## 2. Story first — mandatory

**Do not pick screens, order, or tap targets before the story exists.** A flow assembled screen-by-screen is a feature tour: aimless, and it reads as fake.

Write one short paragraph naming **who** the person is, the **one goal** they have this sitting, and **why each tap happens**. Confirm it with the user via `AskUserQuestion` before writing code. Cut screens that don't serve the story, however good they look — eight screens that tell a story beat fourteen that don't.

> **Aryan earns his first payout.** A new creator who joined because a friend said you can make money taking calls. He signs up, sees what creators post to learn what earns, takes a fan's call, replies to her after, goes live to earn properly, then checks his wallet and cashes out.

Keep the story as a comment block at the top of `FlowSequence.tsx`, each numbered beat naming its screen and what gets tapped. That comment is the spec; code and story must agree.

---

## 3. Tap targets — measure, never estimate

Reading JSX to guess a button's position lands 20–50px off, and a tap that misses reads as a glitch. Measured against a guess, the real "Sign in" button was 44px higher than estimated.

In the viewer, `.__remotion-player` is the canvas root; its rendered width over the composition width gives the scale. **Select a composition by clicking its sidebar button** — the `?comp=` URL parameter does not switch compositions, so you will otherwise measure the wrong screen.

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

---

## 4. The hand

Use a **Lucide icon, never an emoji** — emoji render inconsistently across platforms and the repo's UI rules forbid them. `Pointer` filled white with a dark stroke and a drop shadow reads clearly on both light and dark screens.

Offset the icon so the **fingertip**, not the icon box centre, rests on the target, and rotate it slightly so it looks like a hand rather than a cursor. The tap itself needs three things to read as real: an approach with easing, a scale dip on contact, and a ripple at the contact point.

---

## 5. Timing

Default hold 70–80 frames, tap around frame 40–48. **A screen that types needs a longer hold and a later tap** — the finger must land after the text finishes. Derive it, never guess:

```tsx
export const CHAT_SEND_TAP = REPLY_TYPE_START + framesToType(REPLY) + 8;
const HOLD_CHAT = CHAT_SEND_TAP + 45;
```

Transitions overlap, so `durationInFrames` = sum of holds − sum of transition frames. Derive that too, and have `FlowSequence` compare it against `useVideoConfig().durationInFrames` and warn on mismatch — otherwise the ending silently truncates.

Match transition to meaning: push-slide from right for forward navigation, slide from bottom for modals and interruptions (an incoming call), fade for tab switches and post-auth landings.

---

## 6. Runtime traps that typecheck clean

Both of these pass `tsc --noEmit` and produce a broken video:

- **Hook order must be identical every frame.** Never call a hook after an early return, and never behind a `?:` or `&&` — `revealed === 1 && useRevealedCount(x)` short-circuits and crashes with `Rendered more hooks than during the previous render`. Compute all hooks unconditionally at the top, then branch on the values. Destructure `useVideoConfig()` exactly once.
- **`interpolate` returns `NaN` on an infinite input range**, which silently blanks the element. Sentinels must be finite (`-100_000`, `100_000`).

---

## 7. Verify in the browser — mandatory

`tsc --noEmit` cannot see either trap above. A Chat still once rendered nothing but an error triangle while typechecking clean.

1. Open the flow in the viewer; check the console for `Rendered more hooks` and error-boundary messages.
2. Screenshot at several timeline points — a composition can render frame 0 fine and crash at frame 60.
3. **Open the individual stills too** and confirm they render exactly as before.

```js
() => {
  const p = document.querySelector('.__remotion-player');
  return {broken: p.textContent.includes('⚠'), text: p.textContent.slice(0, 80)};
}
```

Then run the post-task sweep and commit with the `flow` prefix.
