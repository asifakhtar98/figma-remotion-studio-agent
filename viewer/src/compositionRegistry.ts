import React from 'react';

export interface CompositionEntry {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  width: number;
  height: number;
  durationInFrames: number;
  fps: number;
  projectName: string;
  screenName: string;
}

export const compositions: CompositionEntry[] = [
  {
    id: 'vhims-01-AdminDashboard',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/AdminDashboardScreen').then(m => ({ default: m.AdminDashboardScreen }))),
    width: 1920,
    height: 1080,
    durationInFrames: 1,
    fps: 30,
    projectName: 'vhims',
    screenName: 'AdminDashboard'
  },
  {
    id: 'whatsevr-01-SignIn',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SignInScreen').then(m => ({ default: m.SignInScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'SignIn'
  },
  {
    id: 'whatsevr-02-ResetPassword',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ResetPasswordScreen').then(m => ({ default: m.ResetPasswordScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'ResetPassword'
  },
  {
    id: 'whatsevr-03-Explore',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreScreen').then(m => ({ default: m.ExploreScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Explore'
  },
  {
    id: 'whatsevr-04-ExploreOffers',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreOffersScreen').then(m => ({ default: m.ExploreOffersScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'ExploreOffers'
  },
  {
    id: 'whatsevr-05-ExploreMemories',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreMemoriesScreen').then(m => ({ default: m.ExploreMemoriesScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'ExploreMemories'
  },
  {
    id: 'whatsevr-06-ExploreWtv',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreWtvScreen').then(m => ({ default: m.ExploreWtvScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'ExploreWtv'
  },
  {
    id: 'whatsevr-07-Spin',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SpinScreen').then(m => ({ default: m.SpinScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Spin'
  },
  {
    id: 'whatsevr-08-Calls',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CallsScreen').then(m => ({ default: m.CallsScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Calls'
  },
  {
    id: 'whatsevr-09-Chat',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ChatScreen').then(m => ({ default: m.ChatScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Chat'
  },
  {
    id: 'whatsevr-10-Profile',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ProfileScreen').then(m => ({ default: m.ProfileScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Profile'
  },
  {
    id: 'whatsevr-11-UpdateProfile',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/UpdateProfileScreen').then(m => ({ default: m.UpdateProfileScreen }))),
    width: 786,
    height: 2368,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'UpdateProfile'
  },
  {
    id: 'whatsevr-12-CommunityDetail',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CommunityDetailScreen').then(m => ({ default: m.CommunityDetailScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'CommunityDetail'
  },
  {
    id: 'whatsevr-13-CommunityUploadModal',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CommunityUploadModalScreen').then(m => ({ default: m.CommunityUploadModalScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'CommunityUploadModal'
  },
  {
    id: 'whatsevr-14-Wallet',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WalletScreen').then(m => ({ default: m.WalletScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Wallet'
  },
  {
    id: 'whatsevr-15-Settings',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SettingsScreen').then(m => ({ default: m.SettingsScreen }))),
    width: 786,
    height: 2272,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Settings'
  },
  {
    id: 'whatsevr-16-Flow',
    component: React.lazy(() => import('@src/projects/whatsevr/src/flow/FlowSequence').then(m => ({ default: m.FlowSequence }))),
    width: 786,
    height: 1704,
    durationInFrames: 569,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'Flow'
  },
  {
    id: 'whatsevr-17-CreateAccount',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CreateAccountScreen').then(m => ({ default: m.CreateAccountScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'CreateAccount'
  },
  {
    id: 'whatsevr-18-GoLive',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/GoLiveScreen').then(m => ({ default: m.GoLiveScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'GoLive'
  },
  {
    id: 'whatsevr-19-WalletRateModal',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WalletRateModalScreen').then(m => ({ default: m.WalletRateModalScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'WalletRateModal'
  },
  {
    id: 'whatsevr-20-BuyCoins',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/BuyCoinsScreen').then(m => ({ default: m.BuyCoinsScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'BuyCoins'
  },
  {
    id: 'whatsevr-21-IncomingCall',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/IncomingCallScreen').then(m => ({ default: m.IncomingCallScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'IncomingCall'
  },
  {
    id: 'whatsevr-22-FanFlow',
    component: React.lazy(() => import('@src/projects/whatsevr/src/flow/FanFlowSequence').then(m => ({ default: m.FanFlowSequence }))),
    width: 786,
    height: 1704,
    durationInFrames: 415,
    fps: 30,
    projectName: 'whatsevr',
    screenName: 'FanFlow'
  }
];
