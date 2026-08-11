import './style.css';
import type {FC} from 'react';
import {Composition} from 'remotion';
import {BuyCoinsScreen} from './projects/whatsevr/src/screens/BuyCoinsScreen';
import {CallsScreen} from './projects/whatsevr/src/screens/CallsScreen';
import {ChatScreen} from './projects/whatsevr/src/screens/ChatScreen';
import {CommunityDetailScreen} from './projects/whatsevr/src/screens/CommunityDetailScreen';
import {CommunityUploadModalScreen} from './projects/whatsevr/src/screens/CommunityUploadModalScreen';
import {CreateAccountScreen} from './projects/whatsevr/src/screens/CreateAccountScreen';
import {ExploreMemoriesScreen} from './projects/whatsevr/src/screens/ExploreMemoriesScreen';
import {ExploreOffersScreen} from './projects/whatsevr/src/screens/ExploreOffersScreen';
import {ExploreScreen} from './projects/whatsevr/src/screens/ExploreScreen';
import {ExploreWtvScreen} from './projects/whatsevr/src/screens/ExploreWtvScreen';
import {FlowSequence} from './projects/whatsevr/src/flow/FlowSequence';
import {FanFlowSequence} from './projects/whatsevr/src/flow/FanFlowSequence';
import {GoLiveScreen} from './projects/whatsevr/src/screens/GoLiveScreen';
import {IncomingCallScreen} from './projects/whatsevr/src/screens/IncomingCallScreen';
import {ProfileScreen} from './projects/whatsevr/src/screens/ProfileScreen';
import {ResetPasswordScreen} from './projects/whatsevr/src/screens/ResetPasswordScreen';
import {SettingsScreen} from './projects/whatsevr/src/screens/SettingsScreen';
import {SignInScreen} from './projects/whatsevr/src/screens/SignInScreen';
import {SpinScreen} from './projects/whatsevr/src/screens/SpinScreen';
import {UpdateProfileScreen} from './projects/whatsevr/src/screens/UpdateProfileScreen';
import {WalletRateModalScreen} from './projects/whatsevr/src/screens/WalletRateModalScreen';
import {WalletScreen} from './projects/whatsevr/src/screens/WalletScreen';

// Each project registers its screens here as <Composition> entries.
// id="<ProjectName>-<Number>-<ScreenName>", width/height = detected canvas size,
// short still duration (no animation unless requested).

const WHATSEVR_WIDTH = 393;
const WHATSEVR_HEIGHT = 852;
const WHATSEVR_SETTINGS_HEIGHT = 1136;
const WHATSEVR_UPDATE_PROFILE_HEIGHT = 1184;
// Keep in sync with FLOW_DURATION_IN_FRAMES in flow/FlowSequence.tsx, which warns on drift.
const WHATSEVR_FLOW_DURATION = 569;
// Keep in sync with FAN_FLOW_DURATION_IN_FRAMES in flow/FanFlowSequence.tsx
const WHATSEVR_FAN_FLOW_DURATION = 415;

export const RemotionRoot: FC = () => {
  return (
    <>
      <Composition
        id="whatsevr-01-SignIn"
        component={SignInScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-02-ResetPassword"
        component={ResetPasswordScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-03-Explore"
        component={ExploreScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-04-ExploreOffers"
        component={ExploreOffersScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-05-ExploreMemories"
        component={ExploreMemoriesScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-06-ExploreWtv"
        component={ExploreWtvScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-07-Spin"
        component={SpinScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-08-Calls"
        component={CallsScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-09-Chat"
        component={ChatScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-10-Profile"
        component={ProfileScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-11-UpdateProfile"
        component={UpdateProfileScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_UPDATE_PROFILE_HEIGHT}
      />
      <Composition
        id="whatsevr-12-CommunityDetail"
        component={CommunityDetailScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-13-CommunityUploadModal"
        component={CommunityUploadModalScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-14-Wallet"
        component={WalletScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-15-Settings"
        component={SettingsScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_SETTINGS_HEIGHT}
      />
      <Composition
        id="whatsevr-16-Flow"
        component={FlowSequence}
        durationInFrames={WHATSEVR_FLOW_DURATION}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-17-CreateAccount"
        component={CreateAccountScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-18-GoLive"
        component={GoLiveScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-19-WalletRateModal"
        component={WalletRateModalScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-20-BuyCoins"
        component={BuyCoinsScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-21-IncomingCall"
        component={IncomingCallScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-22-FanFlow"
        component={FanFlowSequence}
        durationInFrames={WHATSEVR_FAN_FLOW_DURATION}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
    </>
  );
};
