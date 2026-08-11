import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {Pointer} from 'lucide-react';

export type TapPoint = {x: number; y: number};

type TapCursorProps = {
  /** Where the hand enters from. Defaults to just off the bottom-right corner. */
  from?: TapPoint;
  /** The point being tapped, in canvas pixels. The fingertip lands here. */
  to: TapPoint;
  /** Frame, relative to this screen's sequence, that the tap lands on. */
  tapFrame: number;
};

const APPROACH_FRAMES = 20;
const TAP_DOWN_FRAMES = 5;
const TAP_HOLD_FRAMES = 5;
const RIPPLE_FRAMES = 18;
const EXIT_FRAMES = 14;

const HAND_SIZE = 92;

// Lucide's Pointer glyph has its fingertip near the top-left of the icon box, so the
// icon is offset such that the fingertip — not the box centre — rests on the target.
const FINGERTIP_OFFSET_X = -HAND_SIZE * 0.28;
const FINGERTIP_OFFSET_Y = -HAND_SIZE * 0.08;

export const TapCursor: FC<TapCursorProps> = ({from, to, tapFrame}) => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  const start = from ?? {x: width * 0.76, y: height + 150};

  const approachStart = tapFrame - APPROACH_FRAMES;
  const tapDownEnd = tapFrame + TAP_DOWN_FRAMES;
  const holdEnd = tapDownEnd + TAP_HOLD_FRAMES;
  const exitEnd = holdEnd + EXIT_FRAMES;

  const approach = interpolate(frame, [approachStart, tapFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [holdEnd, exitEnd], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });

  const x = interpolate(approach, [0, 1], [start.x, to.x]) + exit * 26;
  const y = interpolate(approach, [0, 1], [start.y, to.y]) + exit * 110;

  const press = interpolate(frame, [tapFrame - 5, tapFrame, tapDownEnd], [1, 0.86, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(
    frame,
    [approachStart - 6, approachStart, holdEnd, exitEnd],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const ripple = interpolate(frame, [tapFrame, tapFrame + RIPPLE_FRAMES], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });
  const rippleVisible = frame >= tapFrame && frame <= tapFrame + RIPPLE_FRAMES;

  if (frame < approachStart - 8 || frame > exitEnd + 2) return null;

  return (
    <AbsoluteFill style={{pointerEvents: 'none', zIndex: 999}}>
      {rippleVisible ? (
        <>
          <div
            style={{
              position: 'absolute',
              left: to.x,
              top: to.y,
              width: 120,
              height: 120,
              marginLeft: -60,
              marginTop: -60,
              borderRadius: '50%',
              backgroundColor: 'rgba(59,130,246,0.20)',
              transform: `scale(${0.25 + ripple * 0.7})`,
              opacity: interpolate(ripple, [0, 1], [1, 0]),
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: to.x,
              top: to.y,
              width: 120,
              height: 120,
              marginLeft: -60,
              marginTop: -60,
              borderRadius: '50%',
              border: '4px solid rgba(37,99,235,0.9)',
              transform: `scale(${0.25 + ripple * 1.35})`,
              opacity: interpolate(ripple, [0, 1], [0.95, 0]),
            }}
          />
        </>
      ) : null}

      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          opacity,
          transform: `translate(${FINGERTIP_OFFSET_X}px, ${FINGERTIP_OFFSET_Y}px) rotate(-12deg) scale(${press})`,
          transformOrigin: 'top left',
          filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.45))',
        }}
      >
        <Pointer
          size={HAND_SIZE}
          strokeWidth={1.6}
          style={{color: '#111827', fill: '#ffffff'}}
        />
      </div>
    </AbsoluteFill>
  );
};
