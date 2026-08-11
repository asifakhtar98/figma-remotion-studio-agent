import {useCurrentFrame} from 'remotion';

/**
 * Frame-driven helpers for the journey flow.
 *
 * These live in `flow/` and are imported ONLY by flow code. Screens never import
 * from this file — they receive plain data (a string, a number, a boolean) and stay
 * frame-agnostic, so deleting `flow/` cannot break a screen.
 */

const DEFAULT_CHARS_PER_FRAME = 1.5;

/** The progressively revealed prefix of `fullText`, starting at `startFrame`. */
export const useTypedText = (
  fullText: string,
  startFrame: number,
  charsPerFrame = DEFAULT_CHARS_PER_FRAME,
): string => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  return fullText.slice(0, Math.min(fullText.length, Math.floor(elapsed * charsPerFrame)));
};

/** How many frames it takes to type `text` — use this to place a tap after typing ends. */
export const framesToType = (text: string, charsPerFrame = DEFAULT_CHARS_PER_FRAME): number =>
  Math.ceil(text.length / charsPerFrame);

/** True while text is still being typed, so a caret should show. */
export const useIsTyping = (
  fullText: string,
  startFrame: number,
  charsPerFrame = DEFAULT_CHARS_PER_FRAME,
): boolean => {
  const frame = useCurrentFrame();
  const elapsed = frame - startFrame;
  return elapsed >= 0 && elapsed * charsPerFrame < fullText.length;
};

/** A caret that blinks on a fixed cadence while `active`. */
export const useCaretVisible = (active: boolean, framesPerBlink = 8): boolean => {
  const frame = useCurrentFrame();
  return active && Math.floor(frame / framesPerBlink) % 2 === 0;
};

/** How many items of a staggered list have appeared by now. */
export const useRevealedCount = (revealFrames: readonly number[]): number => {
  const frame = useCurrentFrame();
  return revealFrames.filter((f) => frame >= f).length;
};

/** True while `frame` sits inside the half-open window [start, end). */
export const useIsWithin = (start: number, end: number): boolean => {
  const frame = useCurrentFrame();
  return frame >= start && frame < end;
};
