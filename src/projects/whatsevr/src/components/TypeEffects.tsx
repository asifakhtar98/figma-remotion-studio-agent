import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

/**
 * Reveals `fullText` character-by-character starting at `startFrame`.
 * Call inside a component's render (it uses useCurrentFrame internally).
 */
export const useTypedText = (fullText: string, startFrame: number, charsPerFrame = 1.4): string => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const charCount = Math.min(fullText.length, Math.floor(elapsed * charsPerFrame));
  return fullText.slice(0, charCount);
};

export const isTyping = (fullText: string, startFrame: number, charsPerFrame = 1.4): boolean => {
  const frame = useCurrentFrame();
  const elapsed = frame - startFrame;
  return elapsed >= 0 && elapsed * charsPerFrame < fullText.length;
};

/** Blinking text-caret, on for the given active window. */
export const BlinkingCaret: FC<{active: boolean}> = ({active}) => {
  const frame = useCurrentFrame();
  if (!active) return null;
  const on = Math.floor(frame / 8) % 2 === 0;
  return (
    <span
      style={{
        display: 'inline-block',
        width: 2,
        height: '1em',
        marginLeft: 2,
        verticalAlign: '-0.15em',
        backgroundColor: '#3b82f6',
        opacity: on ? 1 : 0,
      }}
    />
  );
};

/** Three-dot "someone is typing…" bubble, WhatsApp-style stagger bounce. */
export const TypingDots: FC<{startFrame: number; endFrame: number}> = ({startFrame, endFrame}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame || frame > endFrame) return null;

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 6, endFrame - 6, endFrame],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <div
      className="bg-white border border-gray-200/80 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs inline-flex items-center gap-1.5"
      style={{opacity}}
    >
      {[0, 1, 2].map((i) => {
        const localFrame = (frame - startFrame + i * 4) % 24;
        const bounce = interpolate(localFrame, [0, 8, 16], [0, -5, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#9ca3af',
              transform: `translateY(${bounce}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

/** Fade + rise entrance for a chat bubble / list item, gated on a reveal frame. */
export const useEnterStyle = (revealFrame: number, distance = 14): {opacity: number; transform: string; display?: 'none'} => {
  const frame = useCurrentFrame();
  if (frame < revealFrame - 6) return {opacity: 0, transform: 'none', display: 'none'};
  const progress = interpolate(frame, [revealFrame, revealFrame + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return {
    opacity: progress,
    transform: `translateY(${(1 - progress) * distance}px)`,
  };
};
