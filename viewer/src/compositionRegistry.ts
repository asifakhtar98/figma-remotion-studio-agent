import React from 'react';

export interface CompositionEntry {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  width: number;
  height: number;
  durationInFrames: number;
  fps: number;
  isStill: boolean;
  projectName: string;
  screenName: string;
}

export const compositions: CompositionEntry[] = [
  {
    id: 'vhims-00-Home',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/HomeScreen').then(m => ({ default: m.HomeScreen }))),
    width: 1920,
    height: 4020,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'vhims',
    screenName: 'Home'
  },
  {
    id: 'vhims-01-AdminDashboard',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/AdminDashboardScreen').then(m => ({ default: m.AdminDashboardScreen }))),
    width: 1920,
    height: 1140,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'vhims',
    screenName: 'AdminDashboard'
  },
  {
    id: 'vhims-02-PlatformDashboard',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/PlatformDashboardScreen').then(m => ({ default: m.PlatformDashboardScreen }))),
    width: 1920,
    height: 1280,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'vhims',
    screenName: 'PlatformDashboard'
  },
  {
    id: 'vhims-03-Pricing',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/PricingScreen').then(m => ({ default: m.PricingScreen }))),
    width: 1920,
    height: 2760,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'vhims',
    screenName: 'Pricing'
  },
  {
    id: 'vhims-04-MarketingPoster',
    component: React.lazy(() => import('@src/projects/vhims/src/screens/MarketingPosterScreen').then(m => ({ default: m.MarketingPosterScreen }))),
    width: 1080,
    height: 1120,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'vhims',
    screenName: 'MarketingPoster'
  },
  {
    id: 'whatsevr-01-SignIn',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SignInScreen').then(m => ({ default: m.SignInScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
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
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'ResetPassword'
  },
  {
    id: 'whatsevr-03-Explore',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreScreen').then(m => ({ default: m.ExploreScreen }))),
    width: 786,
    height: 1864,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Explore'
  },
  {
    id: 'whatsevr-04-ExploreOffers',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreOffersScreen').then(m => ({ default: m.ExploreOffersScreen }))),
    width: 786,
    height: 2116,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'ExploreOffers'
  },
  {
    id: 'whatsevr-05-ExploreMemories',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreMemoriesScreen').then(m => ({ default: m.ExploreMemoriesScreen }))),
    width: 786,
    height: 2056,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'ExploreMemories'
  },
  {
    id: 'whatsevr-06-ExploreWtv',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ExploreWtvScreen').then(m => ({ default: m.ExploreWtvScreen }))),
    width: 786,
    height: 2058,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'ExploreWtv'
  },
  {
    id: 'whatsevr-07-Spin',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SpinScreen').then(m => ({ default: m.SpinScreen }))),
    width: 786,
    height: 1740,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Spin'
  },
  {
    id: 'whatsevr-08-Calls',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CallsScreen').then(m => ({ default: m.CallsScreen }))),
    width: 786,
    height: 1140,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Calls'
  },
  {
    id: 'whatsevr-09-Chat',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ChatScreen').then(m => ({ default: m.ChatScreen }))),
    width: 786,
    height: 1740,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Chat'
  },
  {
    id: 'whatsevr-10-Profile',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/ProfileScreen').then(m => ({ default: m.ProfileScreen }))),
    width: 786,
    height: 1740,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Profile'
  },
  {
    id: 'whatsevr-11-UpdateProfile',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/UpdateProfileScreen').then(m => ({ default: m.UpdateProfileScreen }))),
    width: 786,
    height: 2160,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'UpdateProfile'
  },
  {
    id: 'whatsevr-12-CommunityDetail',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/CommunityDetailScreen').then(m => ({ default: m.CommunityDetailScreen }))),
    width: 786,
    height: 1020,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
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
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'CommunityUploadModal'
  },
  {
    id: 'whatsevr-14-Wallet',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WalletScreen').then(m => ({ default: m.WalletScreen }))),
    width: 786,
    height: 1340,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Wallet'
  },
  {
    id: 'whatsevr-15-Settings',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/SettingsScreen').then(m => ({ default: m.SettingsScreen }))),
    width: 786,
    height: 1840,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
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
    isStill: false,
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
    isStill: true,
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
    isStill: true,
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
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WalletRateModal'
  },
  {
    id: 'whatsevr-20-BuyCoins',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/BuyCoinsScreen').then(m => ({ default: m.BuyCoinsScreen }))),
    width: 786,
    height: 1260,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'BuyCoins'
  },
  {
    id: 'whatsevr-21-IncomingCall',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/IncomingCallScreen').then(m => ({ default: m.IncomingCallScreen }))),
    width: 786,
    height: 1740,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
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
    isStill: false,
    projectName: 'whatsevr',
    screenName: 'FanFlow'
  },
  {
    id: 'whatsevr-23-MarketingPoster',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/MarketingPosterScreen').then(m => ({ default: m.MarketingPosterScreen }))),
    width: 1080,
    height: 1120,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'MarketingPoster'
  },
  {
    id: 'whatsevr-24-StudioMinimalistPoster',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/StudioMinimalistPosterScreen').then(m => ({ default: m.StudioMinimalistPosterScreen }))),
    width: 1080,
    height: 1080,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'StudioMinimalistPoster'
  },
  {
    id: 'whatsevr-25-WebHome',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebHomeScreen').then(m => ({ default: m.WebHomeScreen }))),
    width: 1920,
    height: 700,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebHome'
  },
  {
    id: 'whatsevr-26-WebOne2One',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebOne2OneScreen').then(m => ({ default: m.WebOne2OneScreen }))),
    width: 1920,
    height: 1660,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebOne2One'
  },
  {
    id: 'whatsevr-27-WebRandomMatch',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebRandomMatchScreen').then(m => ({ default: m.WebRandomMatchScreen }))),
    width: 1920,
    height: 1080,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebRandomMatch'
  },
  {
    id: 'whatsevr-28-WebCalls',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebCallsScreen').then(m => ({ default: m.WebCallsScreen }))),
    width: 1920,
    height: 860,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebCalls'
  },
  {
    id: 'whatsevr-29-WebWallet',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebWalletScreen').then(m => ({ default: m.WebWalletScreen }))),
    width: 1920,
    height: 1300,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebWallet'
  },
  {
    id: 'whatsevr-30-WebProfile',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/WebProfileScreen').then(m => ({ default: m.WebProfileScreen }))),
    width: 1920,
    height: 1180,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'WebProfile'
  },
  {
    id: 'whatsevr-31-Alerts',
    component: React.lazy(() => import('@src/projects/whatsevr/src/screens/AlertsScreen').then(m => ({ default: m.AlertsScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'whatsevr',
    screenName: 'Alerts'
  },
  {
    id: 'demodontdelete-01-CreatorDashboard',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/CreatorDashboardScreen').then(m => ({ default: m.CreatorDashboardScreen }))),
    width: 786,
    height: 2220,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'CreatorDashboard'
  },
  {
    id: 'demodontdelete-02-ContentUpload',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/ContentUploadScreen').then(m => ({ default: m.ContentUploadScreen }))),
    width: 786,
    height: 1704,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'ContentUpload'
  },
  {
    id: 'demodontdelete-03-WebMonetizationHub',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/WebMonetizationHubScreen').then(m => ({ default: m.WebMonetizationHubScreen }))),
    width: 1920,
    height: 1320,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'WebMonetizationHub'
  },
  {
    id: 'demodontdelete-04-AudienceAnalytics',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/AudienceAnalyticsScreen').then(m => ({ default: m.AudienceAnalyticsScreen }))),
    width: 786,
    height: 2220,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'AudienceAnalytics'
  },
  {
    id: 'demodontdelete-05-LiveStreamStudio',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/LiveStreamStudioScreen').then(m => ({ default: m.LiveStreamStudioScreen }))),
    width: 786,
    height: 2220,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'LiveStreamStudio'
  },
  {
    id: 'demodontdelete-06-WebBrandMarketplace',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/WebBrandMarketplaceScreen').then(m => ({ default: m.WebBrandMarketplaceScreen }))),
    width: 1920,
    height: 980,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'WebBrandMarketplace'
  },
  {
    id: 'demodontdelete-07-WebMediaLibrary',
    component: React.lazy(() => import('@src/projects/demo-dont-delete/src/screens/WebMediaLibraryScreen').then(m => ({ default: m.WebMediaLibraryScreen }))),
    width: 1920,
    height: 1120,
    durationInFrames: 1,
    fps: 30,
    isStill: true,
    projectName: 'demodontdelete',
    screenName: 'WebMediaLibrary'
  }
];
