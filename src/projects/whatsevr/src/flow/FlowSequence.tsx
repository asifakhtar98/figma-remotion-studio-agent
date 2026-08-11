import type {FC, ReactNode} from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {TapCursor, type TapPoint} from './TapCursor';
import {useTypedText, useIsTyping, useCaretVisible, framesToType, useRevealedCount} from './timing';
import {SignInScreen} from '../screens/SignInScreen';
import {CreateAccountScreen, CREATE_ACCOUNT_EMAIL} from '../screens/CreateAccountScreen';
import {ExploreScreen} from '../screens/ExploreScreen';
import {ExploreWtvScreen} from '../screens/ExploreWtvScreen';
import {IncomingCallScreen} from '../screens/IncomingCallScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {GoLiveScreen} from '../screens/GoLiveScreen';
import {WalletScreen} from '../screens/WalletScreen';

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * STORY — "Aryan earns his first payout"
 *
 * Aryan is a new creator. A friend told him you can make money on Whatsevr by
 * taking calls, and he wants to find out if that is true. Everything he taps is
 * a step toward one goal: seeing real money land in his wallet.
 *
 *   1. SignIn        No account yet, so he skips the form   → "Create Account"
 *   2. CreateAccount Types his email and signs up           → "Create account"
 *   3. Explore       Looks for what actually earns          → a video post
 *   4. ExploreWtv    Watches a creator's flick              → play
 *   5. IncomingCall  A fan calls — his first real chance    → accept
 *   6. Chat          She messages after; he replies         → send
 *   7. GoLive        Now he goes live properly to earn      → "Go live"
 *   8. Wallet        The payoff: he cashes out              → "Withdraw"
 *
 * SEPARATION OF CONCERNS: everything in this folder is additive. Screens are
 * plain UI that take plain data props and know nothing about frames or this
 * flow. Deleting `flow/` removes the journey video and leaves every screen and
 * every still Composition working untouched.
 *
 * Tap coordinates are MEASURED from the rendered DOM, never estimated.
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

/* ── Beat 2: Aryan types his email, then signs up ─────────────────────────── */

const EMAIL_TYPE_START = 6;
export const CREATE_ACCOUNT_TAP = EMAIL_TYPE_START + framesToType(CREATE_ACCOUNT_EMAIL) + 10;

const CreateAccountBeat: FC = () => {
  const emailValue = useTypedText(CREATE_ACCOUNT_EMAIL, EMAIL_TYPE_START);
  const typing = useIsTyping(CREATE_ACCOUNT_EMAIL, EMAIL_TYPE_START);
  const caretVisible = useCaretVisible(typing);
  return <CreateAccountScreen emailValue={emailValue} caretVisible={caretVisible} />;
};

/* ── Beat 6: the conversation arrives, then Aryan types his reply ─────────── */

const CHAT_REVEALS = [8, 40, 62] as const; // Alex, Sarah, Aryan's earlier reply
const SARAH_TYPING_FROM = 20;
const REPLY = 'Looks great, thanks for the quick turnaround!';
const REPLY_TYPE_START = 80;
export const CHAT_SEND_TAP = REPLY_TYPE_START + framesToType(REPLY) + 8;
const REPLY_SENT_AT = CHAT_SEND_TAP + 8;

const ChatBeat: FC = () => {
  // Every hook runs unconditionally and in a fixed order, on every frame.
  const revealed = useRevealedCount(CHAT_REVEALS);
  const draft = useTypedText(REPLY, REPLY_TYPE_START);
  const typingReply = useIsTyping(REPLY, REPLY_TYPE_START);
  const caretVisible = useCaretVisible(typingReply);
  const sentCount = useRevealedCount([REPLY_SENT_AT]);
  const sarahStarted = useRevealedCount([SARAH_TYPING_FROM]);

  const sent = sentCount > 0;
  const alexTyping = revealed === 0;
  const sarahTyping = revealed === 1 && sarahStarted > 0;

  return (
    <ChatScreen
      visibleMessageCount={sent ? 4 : revealed}
      typingIndicator={alexTyping ? 'alex' : sarahTyping ? 'sarah' : null}
      draftMessage={sent ? '' : draft}
      draftCaretVisible={caretVisible}
      finalMessageText={REPLY}
    />
  );
};

/* ── Holds, and the total duration derived from them ──────────────────────── */

const HOLD_SIGN_IN = 70;
const HOLD_CREATE_ACCOUNT = CREATE_ACCOUNT_TAP + 40;
const HOLD_EXPLORE = 70;
const HOLD_EXPLORE_WTV = 70;
const HOLD_INCOMING_CALL = 80;
const HOLD_CHAT = CHAT_SEND_TAP + 45;
const HOLD_GO_LIVE = 80;
const HOLD_WALLET = 95;

const HOLDS = [
  HOLD_SIGN_IN,
  HOLD_CREATE_ACCOUNT,
  HOLD_EXPLORE,
  HOLD_EXPLORE_WTV,
  HOLD_INCOMING_CALL,
  HOLD_CHAT,
  HOLD_GO_LIVE,
  HOLD_WALLET,
];

// Transitions overlap their neighbours, so they shorten the timeline.
const TRANSITIONS = [
  PUSH_FRAMES,
  PUSH_FRAMES,
  PUSH_FRAMES,
  MODAL_FRAMES,
  PUSH_FRAMES,
  PUSH_FRAMES,
  PUSH_FRAMES,
];

const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);

/** Import this into Root.tsx so the Composition duration can never drift. */
export const FLOW_DURATION_IN_FRAMES = sum(HOLDS) - sum(TRANSITIONS);

export const FlowSequence: FC = () => {
  // Root.tsx must register this exact duration. Warn loudly rather than silently
  // truncating the ending or leaving dead frames at the end of the video.
  const {durationInFrames} = useVideoConfig();
  if (durationInFrames !== FLOW_DURATION_IN_FRAMES) {
    console.warn(
      `[FlowSequence] Composition duration is ${durationInFrames} but the flow needs ` +
        `${FLOW_DURATION_IN_FRAMES}. Update WHATSEVR_FLOW_DURATION in src/Root.tsx.`,
    );
  }

  return (
    <TransitionSeries>
      {/* 1 — No account yet, so he reaches for "Create Account" */}
      <TransitionSeries.Sequence durationInFrames={HOLD_SIGN_IN}>
        <Tapped to={{x: 392, y: 766}} tapFrame={40}>
          <SignInScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 2 — Types his email, then signs up */}
      <TransitionSeries.Sequence durationInFrames={HOLD_CREATE_ACCOUNT}>
        <Tapped to={{x: 392, y: 584}} tapFrame={CREATE_ACCOUNT_TAP}>
          <CreateAccountBeat />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={tabFade} />

      {/* 3 — Lands in the app and opens a video post to see what earns */}
      <TransitionSeries.Sequence durationInFrames={HOLD_EXPLORE}>
        <Tapped to={{x: 500, y: 452}} tapFrame={40}>
          <ExploreScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 4 — Plays a creator's flick */}
      <TransitionSeries.Sequence durationInFrames={HOLD_EXPLORE_WTV}>
        <Tapped to={{x: 394, y: 366}} tapFrame={40}>
          <ExploreWtvScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      {/* A call interrupts him — rises over the screen like a real incoming call */}
      <TransitionSeries.Transition presentation={riseIn} timing={modalUp} />

      {/* 5 — His first real chance to earn: he accepts */}
      <TransitionSeries.Sequence durationInFrames={HOLD_INCOMING_CALL}>
        <Tapped to={{x: 700, y: 1574}} tapFrame={48}>
          <IncomingCallScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 6 — She messages after the call; he types a reply and sends it */}
      <TransitionSeries.Sequence durationInFrames={HOLD_CHAT}>
        <Tapped to={{x: 738, y: 1656}} tapFrame={CHAT_SEND_TAP}>
          <ChatBeat />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 7 — Now he goes live properly to earn */}
      <TransitionSeries.Sequence durationInFrames={HOLD_GO_LIVE}>
        <Tapped to={{x: 392, y: 1642}} tapFrame={45}>
          <GoLiveScreen />
        </Tapped>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={pushIn} timing={push} />

      {/* 8 — The payoff: he checks his earnings and withdraws */}
      <TransitionSeries.Sequence durationInFrames={HOLD_WALLET}>
        <Tapped to={{x: 218, y: 492}} tapFrame={52}>
          <WalletScreen />
        </Tapped>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
