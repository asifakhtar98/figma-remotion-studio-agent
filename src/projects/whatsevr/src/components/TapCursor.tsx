import type {FC} from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

export type TapPoint = {x: number; y: number};

type TapCursorProps = {
  /** Point the finger enters from (defaults to bottom-right off-canvas). */
  from?: TapPoint;
  /** Point being tapped. */
  to: TapPoint;
  /** Frame (relative to this screen's sequence) the tap lands on. */
  tapFrame: number;
};

const APPROACH_FRAMES = 18;
const TAP_DOWN_FRAMES = 5;
const TAP_HOLD_FRAMES = 4;
const RIPPLE_FRAMES = 16;
const EXIT_FRAMES = 14;

// Stylized finger/hand pointer, drawn to avoid depending on an external image asset.
const FingerGlyph: FC<{scale: number}> = ({scale}) => (
  <svg width={70} height={90} viewBox="0 0 70 90" style={{transform: `scale(${scale})`, transformOrigin: '20px 20px'}}>
    <defs>
      <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4c9a0" />
        <stop offset="100%" stopColor="#e0a879" />
      </linearGradient>
    </defs>
    <path
      d="M22 18 C22 9 30 9 30 18 L30 42 L34 42 L34 22 C34 14 42 14 42 22 L42 44 L45 44 C45 38 52 38 52 44 L52 58 C52 74 42 86 27 86 C15 86 6 78 4 66 L2 50 C1 44 8 41 11 47 L14 54 L14 24 C14 15 22 15 22 24 Z"
      fill="url(#skin)"
      stroke="rgba(0,0,0,0.15)"
      strokeWidth="1.5"
    />
  </svg>
);

export const TapCursor: FC<TapCursorProps> = ({from, to, tapFrame}) => {
  const frame = useCurrentFrame();
  const {width, height, fps} = useVideoConfig();
  const start = from ?? {x: width + 60, y: height + 60};

  const approachStart = tapFrame - APPROACH_FRAMES;
  const tapDownEnd = tapFrame + TAP_DOWN_FRAMES;
  const holdEnd = tapDownEnd + TAP_HOLD_FRAMES;
  const exitEnd = holdEnd + EXIT_FRAMES;

  if (frame < approachStart - 4 || frame > exitEnd + 4) return null;

  const approachProgress = interpolate(frame, [approachStart, tapFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const exitProgress = interpolate(frame, [holdEnd, exitEnd], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });

  const x = interpolate(approachProgress, [0, 1], [start.x, to.x]) + exitProgress * 40;
  const y = interpolate(approachProgress, [0, 1], [start.y, to.y]) - exitProgress * 30;

  const pressScale = interpolate(
    frame,
    [tapFrame - 4, tapFrame, tapDownEnd],
    [1, 0.82, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const opacity = interpolate(exitProgress, [0, 1], [1, 0]);

  const rippleProgress = interpolate(frame, [tapFrame, tapFrame + RIPPLE_FRAMES], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });
  const rippleActive = frame >= tapFrame && frame <= tapFrame + RIPPLE_FRAMES;

  const settle = spring({frame: frame - approachStart, fps, config: {damping: 14}});

  return (
    <AbsoluteFill style={{pointerEvents: 'none', zIndex: 999}}>
      {rippleActive ? (
        <div
          style={{
            position: 'absolute',
            left: to.x,
            top: to.y,
            width: 60,
            height: 60,
            marginLeft: -30,
            marginTop: -30,
            borderRadius: '50%',
            border: '3px solid rgba(59,130,246,0.85)',
            transform: `scale(${0.3 + rippleProgress * 1.6})`,
            opacity: interpolate(rippleProgress, [0, 1], [0.9, 0]),
          }}
        />
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          transform: `translate(-18px, -8px) scale(${Math.min(pressScale, 0.7 + settle * 0.3)})`,
          opacity,
          filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.35))',
        }}
      >
        <FingerGlyph scale={1} />
      </div>
    </AbsoluteFill>
  );
};
