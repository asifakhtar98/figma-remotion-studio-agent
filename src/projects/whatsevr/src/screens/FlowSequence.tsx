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
import {ExploreOffersScreen} from './ExploreOffersScreen';
import {ExploreMemoriesScreen} from './ExploreMemoriesScreen';
import {IncomingCallScreen} from './IncomingCallScreen';
import {ChatScreen, CHAT_SEND_TAP_FRAME} from './ChatScreen';
import {CommunityDetailScreen} from './CommunityDetailScreen';
import {GoLiveScreen} from './GoLiveScreen';
import {WalletScreen} from './WalletScreen';
import {BuyCoinsScreen} from './BuyCoinsScreen';
import {ProfileScreen} from './ProfileScreen';
import {SettingsScreen} from './SettingsScreen';

const HOLD = 75; // 2.5s at 30fps
const PUSH_TRANSITION_FRAMES = 20;
const MODAL_TRANSITION_FRAMES = 15;

const push = linearTiming({durationInFrames: PUSH_TRANSITION_FRAMES});
const modalUp = linearTiming({durationInFrames: MODAL_TRANSITION_FRAMES});
const tabFade = linearTiming({durationInFrames: PUSH_TRANSITION_FRAMES});

// Tap lands roughly mid-hold, giving the finger time to arrive and lift before the next transition.
const TAP_FRAME = 42;

// Screens with a typing/typewriter interaction get a longer hold and a later tap
// so the finger only lands once the text has actually finished appearing.
const SIGNIN_ANIMATE_FROM = 4;
const SIGNIN_TAP_FRAME = 55;
const SIGNIN_HOLD = 95;

const CREATE_ACCOUNT_ANIMATE_FROM = 4;
const CREATE_ACCOUNT_TAP_FRAME = 45;
const CREATE_ACCOUNT_HOLD = 85;

const CHAT_ANIMATE_FROM = 2;
const CHAT_TAP_FRAME = CHAT_ANIMATE_FROM + CHAT_SEND_TAP_FRAME;
const CHAT_HOLD = 170;

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

export const FlowSequence: FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SIGNIN_HOLD}>
        <Tapped
          screen={SignInScreen}
          screenProps={{animateFrom: SIGNIN_ANIMATE_FROM}}
          to={{x: 460, y: 698}}
          tapFrame={SIGNIN_TAP_FRAME}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={CREATE_ACCOUNT_HOLD}>
        <Tapped
          screen={CreateAccountScreen}
          screenProps={{animateFrom: CREATE_ACCOUNT_ANIMATE_FROM}}
          to={{x: 460, y: 700}}
          tapFrame={CREATE_ACCOUNT_TAP_FRAME}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={tabFade} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={ExploreScreen} to={{x: 460, y: 1720}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={ExploreWtvScreen} to={{x: 460, y: 337}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={ExploreOffersScreen} to={{x: 750, y: 735}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={ExploreMemoriesScreen} to={{x: 230, y: 440}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={modalUp} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={IncomingCallScreen} to={{x: 730, y: 1684}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={CHAT_HOLD}>
        <Tapped
          screen={ChatScreen}
          screenProps={{animateFrom: CHAT_ANIMATE_FROM}}
          to={{x: 855, y: 1710}}
          tapFrame={CHAT_TAP_FRAME}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={CommunityDetailScreen} to={{x: 460, y: 990}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={modalUp} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={GoLiveScreen} to={{x: 460, y: 1710}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={WalletScreen} to={{x: 460, y: 460}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={modalUp} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={BuyCoinsScreen} to={{x: 460, y: 1660}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={ProfileScreen} to={{x: 825, y: 490}} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={push} />
      <TransitionSeries.Sequence durationInFrames={HOLD}>
        <Tapped screen={SettingsScreen} to={{x: 825, y: 340}} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
