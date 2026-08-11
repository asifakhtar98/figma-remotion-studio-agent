import './style.css';
import type {FC} from 'react';
import {Composition} from 'remotion';
import {CallsScreen} from './projects/whatsevr/src/screens/CallsScreen';
import {ExploreScreen} from './projects/whatsevr/src/screens/ExploreScreen';
import {ProfileScreen} from './projects/whatsevr/src/screens/ProfileScreen';
import {ResetPasswordScreen} from './projects/whatsevr/src/screens/ResetPasswordScreen';
import {SettingsScreen} from './projects/whatsevr/src/screens/SettingsScreen';
import {SignInScreen} from './projects/whatsevr/src/screens/SignInScreen';
import {WalletScreen} from './projects/whatsevr/src/screens/WalletScreen';

// Each project registers its screens here as <Composition> entries.
// id="<ProjectName>-<ScreenName>", width/height = detected canvas size,
// short still duration (no animation unless requested).

const WHATSEVR_WIDTH = 921;
const WHATSEVR_HEIGHT = 1800;
const WHATSEVR_SETTINGS_HEIGHT = 2400;

export const RemotionRoot: FC = () => {
  return (
    <>
      <Composition
        id="whatsevr-Calls"
        component={CallsScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-Explore"
        component={ExploreScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-Profile"
        component={ProfileScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-ResetPassword"
        component={ResetPasswordScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-Settings"
        component={SettingsScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_SETTINGS_HEIGHT}
      />
      <Composition
        id="whatsevr-SignIn"
        component={SignInScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
      <Composition
        id="whatsevr-Wallet"
        component={WalletScreen}
        durationInFrames={1}
        fps={30}
        width={WHATSEVR_WIDTH}
        height={WHATSEVR_HEIGHT}
      />
    </>
  );
};
