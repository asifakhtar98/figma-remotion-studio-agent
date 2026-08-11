import type {FC, ReactNode} from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {TapCursor, type TapPoint} from './TapCursor';

import {ExploreMemoriesScreen} from '../screens/ExploreMemoriesScreen';
import {CommunityDetailScreen} from '../screens/CommunityDetailScreen';
import {CommunityUploadModalScreen} from '../screens/CommunityUploadModalScreen';
import {SpinScreen} from '../screens/SpinScreen';
import {BuyCoinsScreen} from '../screens/BuyCoinsScreen';
import {WalletRateModalScreen} from '../screens/WalletRateModalScreen';

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * STORY — "Rohan joins a creator's community & buys coins to engage"
 *
 * Rohan is a passionate fan. He wants to participate in creator communities on
 * Whatsevr, share memory posts, spin for daily rewards, and top up coins to
 * interact with creators.
 *
 *   1. ExploreMemories      Browses trending memories        → Taps creator memory card
 *   2. CommunityDetail      Visits creator's community hub  → Taps Upload/Pencil icon
 *   3. CommunityUploadModal Opens content upload sheet      → Taps "Create Memory"
 *   4. Spin                 Plays daily spin wheel for coins → Taps "Spin"
 *   5. BuyCoins             Opens Coin Store for top-up     → Taps "Pay ₹399 for 600 Coins"
 *   6. WalletRateModal      Confirms updated balance & rate → Taps "Save"
 *
 * SEPARATION OF CONCERNS: everything in this folder is additive. Screens are
 * plain UI that take plain data props and know nothing about frames or this
 * flow. Deleting `flow/` removes the journey video and leaves every screen and
 * every still Composition working untouched.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const PUSH_FRAMES = 20;
const MODAL_FRAMES = 15;

const push = linearTiming({durationInFrames: PUSH_FRAMES});
const modalUp = linearTiming({durationInFrames: MODAL_FRAMES});
const tabFade = linearTiming({durationInFrames: PUSH_FRAMES});

const pushIn = slide({direction: 'from-right'});
const riseIn = slide({direction: 'from-bottom'});

const Tapped: FC<{children: ReactNode; to: TapPoint; tapFrame: number}> = ({
  children,
  to,
  tapFrame,
}) => (
  <AbsoluteFill>
    {children}
    <TapCursor to={to} tapFrame={tapFrame} />
  </AbsoluteFill>
);

/* ── Beat Holds ───────────────────────────────────────────────────────────── */

const HOLD_EXPLORE_MEMORIES = 75;
const HOLD_COMMUNITY_DETAIL = 75;
const HOLD_UPLOAD_MODAL = 70;
const HOLD_SPIN = 80;
const HOLD_BUY_COINS = 85;
const HOLD_RATE_MODAL = 90;

const HOLDS = [
  HOLD_EXPLORE_MEMORIES,
  HOLD_COMMUNITY_DETAIL,
  HOLD_UPLOAD_MODAL,
  HOLD_SPIN,
  HOLD_BUY_COINS,
  HOLD_RATE_MODAL,
];

// Transitions overlap their neighbours, so they shorten the timeline.
const TRANSITIONS = [
  PUSH_FRAMES,
  MODAL_FRAMES,
  PUSH_FRAMES,
  PUSH_FRAMES,
  MODAL_FRAMES,
];

const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);

/** Import this into Root.tsx so the Composition duration can never drift. */
export const FAN_FLOW_DURATION_IN_FRAMES = sum(HOLDS) - sum(TRANSITIONS);

export const FanFlowSequence: FC = () => {
  const {durationInFrames} = useVideoConfig();
  if (durationInFrames !== FAN_FLOW_DURATION_IN_FRAMES) {
    console.warn(
      `[FanFlowSequence] Composition duration is ${durationInFrames} but the flow needs ` +
        `${FAN_FLOW_DURATION_IN_FRAMES}. Update WHATSEVR_FAN_FLOW_DURATION in src/Root.tsx.`,
    );
  }

  return (
    <TransitionSeries>
      {/* 1 — Rohan browses community memories and selects creator memory */}
      <TransitionSeries.Sequence durationInFrames={HOLD_EXPLORE_MEMORIES}>
        <Tapped to={{x: 101, y: 204}} tapFrame={40}>
          <ExploreMemoriesScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 2 — Creator's community hub: taps Pencil/Upload icon */}
      <TransitionSeries.Sequence durationInFrames={HOLD_COMMUNITY_DETAIL}>
        <Tapped to={{x: 354, y: 156}} tapFrame={40}>
          <CommunityDetailScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      {/* Upload modal rises from bottom */}
      <TransitionSeries.Transition presentation={riseIn} timing={modalUp} />

      {/* 3 — Content upload bottom sheet: selects "Create Memory" */}
      <TransitionSeries.Sequence durationInFrames={HOLD_UPLOAD_MODAL}>
        <Tapped to={{x: 196, y: 596}} tapFrame={40}>
          <CommunityUploadModalScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={tabFade} />

      {/* 4 — Gamification Spin wheel: taps "Spin" */}
      <TransitionSeries.Sequence durationInFrames={HOLD_SPIN}>
        <Tapped to={{x: 196, y: 450}} tapFrame={45}>
          <SpinScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 5 — Coin Store: selects package and taps "Pay ₹399 for 600 Coins" */}
      <TransitionSeries.Sequence durationInFrames={HOLD_BUY_COINS}>
        <Tapped to={{x: 196, y: 814}} tapFrame={50}>
          <BuyCoinsScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      {/* Rate confirmation sheet rises */}
      <TransitionSeries.Transition presentation={riseIn} timing={modalUp} />

      {/* 6 — Wallet & rate confirmation: taps "Save" */}
      <TransitionSeries.Sequence durationInFrames={HOLD_RATE_MODAL}>
        <Tapped to={{x: 196, y: 814}} tapFrame={50}>
          <WalletRateModalScreen />
        </Tapped>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
