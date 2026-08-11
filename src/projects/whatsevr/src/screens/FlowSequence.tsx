import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {TapCursor, type TapPoint} from '../components/TapCursor';
import {SignInScreen} from './SignInScreen';
import {CreateAccountScreen} from './CreateAccountScreen';
import {ExploreScreen} from './ExploreScreen';
import {ExploreWtvScreen} from './ExploreWtvScreen';
import {IncomingCallScreen} from './IncomingCallScreen';
import {ChatScreen, CHAT_SEND_TAP_FRAME} from './ChatScreen';
import {GoLiveScreen} from './GoLiveScreen';
import {WalletScreen} from './WalletScreen';

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * STORY — "Aryan earns his first payout"
 *
 * Aryan is a new creator. A friend told him you can make money on Whatsevr by
 * taking calls, and he wants to find out if that is true. Everything he taps in
 * this flow is a step toward one goal: seeing real money land in his wallet.
 *
 *   1. SignIn        He has no account yet, so he skips the form → "Create Account"
 *   2. CreateAccount He types his email and signs up            → "Create account"
 *   3. Explore       Lands in the app, looks for what earns     → a video post
 *   4. ExploreWtv    Watches a creator's flick to see the format → play
 *   5. IncomingCall  A fan calls him — his first real chance    → accept
 *   6. Chat          She messages after; he replies             → send
 *   7. GoLive        Now he goes live properly to earn          → "Go live"
 *   8. Wallet        The payoff: he checks earnings, cashes out → "Withdraw"
 *
 * Tap coordinates below are MEASURED from the rendered DOM, not estimated.
 * Re-measure after any layout change (see the journey-flow-video skill).
 * ─────────────────────────────────────────────────────────────────────────────
 */

const PUSH_FRAMES = 20;
const MODAL_FRAMES = 15;

const push = linearTiming({durationInFrames: PUSH_FRAMES});
const modalUp = linearTiming({durationInFrames: MODAL_FRAMES});
const tabFade = linearTiming({durationInFrames: PUSH_FRAMES});

const pushIn = slide({direction: 'from-right'});
const riseIn = slide({direction: 'from-bottom'});

// Typing screens hold longer and tap later, so the finger lands after the text lands.
const CREATE_ACCOUNT_TYPE_FROM = 4;
const CHAT_TYPE_FROM = 2;

type TappedProps<P extends object> = {
  screen: FC<P>;
  screenProps?: P;
  to: TapPoint;
  tapFrame: number;
};

const Tapped = <P extends object>({screen: Screen, screenProps, to, tapFrame}: TappedProps<P>) => (
  <AbsoluteFill>
    <Screen {...((screenProps ?? {}) as P)} />
    <TapCursor to={to} tapFrame={tapFrame} />
  </AbsoluteFill>
);

export const FlowSequence: FC = () => {
  return (
    <TransitionSeries>
      {/* 1 — No account yet, so he reaches for "Create Account" */}
      <TransitionSeries.Sequence durationInFrames={70}>
        <Tapped screen={SignInScreen} to={{x: 460, y: 809}} tapFrame={40} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 2 — Types his email, then signs up */}
      <TransitionSeries.Sequence durationInFrames={90}>
        <Tapped
          screen={CreateAccountScreen}
          screenProps={{animateFrom: CREATE_ACCOUNT_TYPE_FROM}}
          to={{x: 461, y: 617}}
          tapFrame={48}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={tabFade} />

      {/* 3 — Lands in the app and opens a video post to see what earns */}
      <TransitionSeries.Sequence durationInFrames={70}>
        <Tapped screen={ExploreScreen} to={{x: 586, y: 478}} tapFrame={40} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 4 — Plays a creator's flick */}
      <TransitionSeries.Sequence durationInFrames={70}>
        <Tapped screen={ExploreWtvScreen} to={{x: 462, y: 387}} tapFrame={40} />
      </TransitionSeries.Sequence>

      {/* A call interrupts him — rises over the screen like a real incoming call */}
      <TransitionSeries.Transition presentation={riseIn} timing={modalUp} />

      {/* 5 — His first real chance to earn: he accepts */}
      <TransitionSeries.Sequence durationInFrames={80}>
        <Tapped screen={IncomingCallScreen} to={{x: 819, y: 1663}} tapFrame={48} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 6 — She messages after the call; he types a reply and sends it */}
      <TransitionSeries.Sequence durationInFrames={175}>
        <Tapped
          screen={ChatScreen}
          screenProps={{animateFrom: CHAT_TYPE_FROM}}
          to={{x: 865, y: 1749}}
          tapFrame={CHAT_TYPE_FROM + CHAT_SEND_TAP_FRAME}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 7 — Now he goes live properly to earn */}
      <TransitionSeries.Sequence durationInFrames={80}>
        <Tapped screen={GoLiveScreen} to={{x: 460, y: 1734}} tapFrame={45} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 8 — The payoff: he checks his earnings and withdraws */}
      <TransitionSeries.Sequence durationInFrames={95}>
        <Tapped screen={WalletScreen} to={{x: 255, y: 519}} tapFrame={52} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
