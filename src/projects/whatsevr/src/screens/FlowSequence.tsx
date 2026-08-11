import type {FC} from 'react';
import {Series} from 'remotion';
import {SignInScreen} from './SignInScreen';
import {ResetPasswordScreen} from './ResetPasswordScreen';
import {ExploreScreen} from './ExploreScreen';
import {ExploreOffersScreen} from './ExploreOffersScreen';
import {ExploreMemoriesScreen} from './ExploreMemoriesScreen';
import {ExploreWtvScreen} from './ExploreWtvScreen';
import {SpinScreen} from './SpinScreen';
import {CallsScreen} from './CallsScreen';
import {ProfileScreen} from './ProfileScreen';
import {UpdateProfileScreen} from './UpdateProfileScreen';
import {CommunityDetailScreen} from './CommunityDetailScreen';
import {WalletScreen} from './WalletScreen';
import {SettingsScreen} from './SettingsScreen';

const FRAMES_PER_SCREEN = 90; // 3 seconds at 30fps

export const FlowSequence: FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <SignInScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ResetPasswordScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ExploreScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ExploreOffersScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ExploreMemoriesScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ExploreWtvScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <SpinScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <CallsScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <ProfileScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <UpdateProfileScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <CommunityDetailScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <WalletScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={FRAMES_PER_SCREEN}>
        <SettingsScreen />
      </Series.Sequence>
    </Series>
  );
};
