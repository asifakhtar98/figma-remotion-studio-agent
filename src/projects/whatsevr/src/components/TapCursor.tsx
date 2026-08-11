import type {FC} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

export type TapPoint = {x: number; y: number};

type TapCursorProps = {
  /** Point the hand enters from (defaults to just off the bottom-right corner). */
  from?: TapPoint;
  /** Point being tapped, in canvas pixels. This is where the fingertip lands. */
  to: TapPoint;
  /** Frame (relative to this screen's sequence) the tap lands on. */
  tapFrame: number;
};

const APPROACH_FRAMES = 20;
const TAP_DOWN_FRAMES = 5;
const TAP_HOLD_FRAMES = 5;
const RIPPLE_FRAMES = 18;
const EXIT_FRAMES = 14;

const HAND_FONT_SIZE = 84;

/**
 * 👆 points upward with its fingertip at the top-centre of the glyph box. Offset the
 * glyph so the FINGERTIP — not the glyph centre — rests on `to`, and nudge it slightly
 * right so the hand's body sits beside the target instead of covering it.
 */
const FINGERTIP_OFFSET_X = -HAND_FONT_SIZE * 0.42;
const FINGERTIP_OFFSET_Y = -HAND_FONT_SIZE * 0.04;

export const TapCursor: FC<TapCursorProps> = ({from, to, tapFrame}) => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();

  const start = from ?? {x: width * 0.78, y: height + 140};

  const approachStart = tapFrame - APPROACH_FRAMES;
  const tapDownEnd = tapFrame + TAP_DOWN_FRAMES;
  const holdEnd = tapDownEnd + TAP_HOLD_FRAMES;
  const exitEnd = holdEnd + EXIT_FRAMES;

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

  const x = interpolate(approachProgress, [0, 1], [start.x, to.x]) + exitProgress * 30;
  const y = interpolate(approachProgress, [0, 1], [start.y, to.y]) + exitProgress * 110;

  // Press: the hand dips slightly smaller and nudges into the surface, then recovers.
  const press = interpolate(frame, [tapFrame - 5, tapFrame, tapDownEnd], [1, 0.88, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(
    frame,
    [approachStart - 6, approachStart, holdEnd, exitEnd],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const rippleProgress = interpolate(frame, [tapFrame, tapFrame + RIPPLE_FRAMES], [0, 1], {
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
          {/* Contact flash directly under the fingertip */}
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
              backgroundColor: 'rgba(59,130,246,0.22)',
              transform: `scale(${0.25 + rippleProgress * 0.7})`,
              opacity: interpolate(rippleProgress, [0, 1], [1, 0]),
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
              transform: `scale(${0.25 + rippleProgress * 1.35})`,
              opacity: interpolate(rippleProgress, [0, 1], [0.95, 0]),
            }}
          />
        </>
      ) : null}

      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          fontSize: HAND_FONT_SIZE,
          lineHeight: 1,
          opacity,
          transform: `translate(${FINGERTIP_OFFSET_X}px, ${FINGERTIP_OFFSET_Y}px) scale(${press})`,
          transformOrigin: 'top center',
          filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.4))',
        }}
      >
        👆
      </div>
    </AbsoluteFill>
  );
};
