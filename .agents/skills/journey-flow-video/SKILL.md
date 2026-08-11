---
name: journey-flow-video
description: Turn a project's existing still screens into an animated end-user journey video — native mobile transitions, an animated finger/tap cursor, live typewriter text entry, and staggered chat/message reveals. Use whenever the user asks for a flow, journey, walkthrough, demo video, "show the real user experience", "animate the screens", or a Figma-prototype-style playthrough.
---

# Journey flow video

This repo has two output modes. Both are first-class.

1. **Still UI** — the default. One screenshot or description in, one pixel-faithful screen component out, registered with `durationInFrames={1}`. Nothing animates. This is what every screen build produces.
2. **Journey flow video** — this skill. Existing still screens are composed into one animated composition that plays like a real person using the app: screens push and slide, a finger taps the actual controls, text types itself into fields, chat messages arrive one at a time.

The still screens are the source of truth. A flow **never** forks or duplicates them — it imports the same components and drives them with optional animation props.

## Non-negotiable architecture rule

> A screen must render identically to its still version when it is given no animation props.

Animation is opt-in via a single optional prop, always named `animateFrom` (a frame number). When absent, the screen renders its resting state and its own `<Composition>` still stays byte-identical. This is what lets one component serve both purposes.

```tsx
type SignInScreenProps = {
  /** Frame the email field starts typing at. Omit for the static still. */
  animateFrom?: number;
};

export const SignInScreen: FC<SignInScreenProps> = ({animateFrom}) => {
  const animating = animateFrom !== undefined;
  // ...
};
```

## Hooks safety (this WILL bite you)

Remotion re-renders every frame. React demands the exact same hook count on every render. Two rules follow, and violating either produces `Rendered more hooks than during the previous render` and a blank player with an error boundary.

1. **Never call a hook after an early return.** Compute every hook at the top of the component, then branch.
2. **Never call a hook conditionally, including inside a ternary.** `animating ? useEnterStyle(x) : {...}` is a bug. Instead call the hook unconditionally and pass a sentinel frame that disables it:

```tsx
const NEVER = Number.NEGATIVE_INFINITY;   // effect never starts → resting state
const ALWAYS = Number.POSITIVE_INFINITY;  // typing never starts → empty/placeholder

const msgStyle = useEnterStyle(animating ? base + T_MSG_1 : NEVER);
const typed = useTypedText(TEXT, animating ? base + T_TYPE : ALWAYS);
```

Likewise, destructure everything you need from `useVideoConfig()` **once** at the top (`const {width, height, fps} = useVideoConfig()`), never call it a second time deeper in the function body.

## Shared animation primitives

Each project keeps its own copies under `src/projects/<project>/src/components/` — projects are never allowed to share code (see AGENTS.md). Copy and adapt these two files per project:

### `TapCursor.tsx`

A finger/hand pointer that flies in from off-canvas, presses down (scale dip) with an expanding ripple at the contact point, holds, then lifts away and fades.

```tsx
<TapCursor to={{x: 460, y: 698}} tapFrame={42} />
```

- `to` — the tap point in **canvas pixels**, top-left origin, in the composition's own coordinate space (e.g. 921×1800).
- `tapFrame` — frame **relative to that screen's sequence**, when the press lands.
- `from` — optional entry point; defaults to just off the bottom-right corner.

Aim at a real interactive-looking control: a primary button, a bottom-nav icon, a send button, a call-answer button. Never at empty background — that reads as a glitch, not a user.

### `TypeEffects.tsx`

- `useTypedText(fullText, startFrame, charsPerFrame?)` → the progressively revealed substring.
- `isTyping(fullText, startFrame, charsPerFrame?)` → whether the caret should be blinking right now.
- `<BlinkingCaret active />` — a caret bar; pair with the field currently being filled.
- `<TypingDots startFrame endFrame />` — the three-dot "someone is typing…" bubble for incoming chat messages.
- `useEnterStyle(revealFrame, distance?)` → `{opacity, transform}` for a fade-and-rise entrance, hidden entirely before its frame.

Default typing speed is ~1.4–1.6 characters per frame at 30fps, which reads as a fast but human typist. Password fields show `'•'.repeat(typed.length)` so the mask still grows in real time.

## Composing the flow

`FlowSequence.tsx` uses `<TransitionSeries>` from `@remotion/transitions` (install the version matching `remotion` in `package.json` exactly).

Transition vocabulary — match the transition to what the navigation actually means:

| Navigation | Presentation | Frames |
|---|---|---|
| Forward push (tap a row, open a detail) | `slide({direction: 'from-right'})` | 20 |
| Modal, sheet, incoming call, purchase overlay | `slide({direction: 'from-bottom'})` | 15 |
| Tab switch, landing after auth | `fade()` | 20 |

A small typed helper keeps each entry to one line and lets typing screens override their tap frame:

```tsx
type TappedProps<P extends object> = {
  screen: FC<P>;
  screenProps?: P;
  to: TapPoint;
  tapFrame?: number;
};

const Tapped = <P extends object>({screen: Screen, screenProps, to, tapFrame}: TappedProps<P>) => (
  <AbsoluteFill>
    <Screen {...((screenProps ?? {}) as P)} />
    <TapCursor to={to} tapFrame={tapFrame ?? TAP_FRAME} />
  </AbsoluteFill>
);
```

## Timing

- Default hold per screen: **75 frames** (2.5s at 30fps). Default tap at frame **42** — late enough for the finger to arrive, early enough to lift before the transition.
- **A screen that types needs a longer hold and a later tap.** The finger must land *after* the text finishes, never during. Derive the tap frame from the typing duration rather than guessing:

```tsx
const T_TYPE_END = T_TYPE_START + Math.ceil(TEXT.length / CHARS_PER_FRAME);
export const CHAT_SEND_TAP_FRAME = T_TYPE_END + 6;
```

  Export that constant from the screen and import it into `FlowSequence.tsx`, so the two can never drift apart.
- Transitions **overlap** their neighbours, so total duration is `sum(holds) − sum(transition frames)`. Compute it and set `durationInFrames` in `src/Root.tsx` to match; a wrong value silently truncates the ending or leaves dead frames.

## Chat screens specifically

A chat is the highest-value screen to animate, because a still chat looks like a screenshot while an animated one looks like a conversation. The sequence that reads as real:

1. Typing dots appear beside the sender's avatar.
2. Dots vanish, their message rises into place.
3. Repeat for each incoming message, staggered.
4. The user's reply types itself character by character into the input bar, caret blinking.
5. The finger taps the send button.
6. The input clears and the sent bubble appears with its delivered ticks.

Steps 4–6 must be wired to the same constant so the tap lands exactly on the finished text.

## Workflow

1. Confirm the journey with `AskUserQuestion` — which screens, what order, how long. Order should tell a story (onboard → browse → engage → transact), not just list files.
2. Locate a real tap target per screen and estimate its centre in canvas pixels by reading the layout. Delegating this to an `Explore` subagent across many screens is efficient; ask for one `x, y` line per screen.
3. Add or copy `TapCursor.tsx` and `TypeEffects.tsx` into the project's `components/`.
4. Add optional `animateFrom` props to the screens that type or reveal content. Verify their stills still render unchanged.
5. Build `FlowSequence.tsx` with `<TransitionSeries>`, per-screen holds, and tap points.
6. Update `durationInFrames` in `src/Root.tsx`, then `npm run sync:viewer`.
7. `npx tsc --noEmit`.
8. **Verify in the browser.** A clean typecheck proves nothing here — hook-order violations are runtime-only. Open the flow in the viewer, check the console for React errors, and screenshot mid-playback to confirm the finger, the typing, and the transitions actually appear.
9. Post-task sweep, then auto commit with the `flow` prefix.

## Verification checklist

- [ ] Console is free of React errors, especially hook-order warnings.
- [ ] Every individual still composition still renders exactly as before.
- [ ] The finger lands on a real control on every screen, and after typing completes where typing exists.
- [ ] No screen's content is clipped by its transition.
- [ ] `durationInFrames` matches the real end of the last screen.
