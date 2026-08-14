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
import {MarketingPosterScreen} from './projects/whatsevr/src/screens/MarketingPosterScreen';
import {StudioMinimalistPosterScreen} from './projects/whatsevr/src/screens/StudioMinimalistPosterScreen';
import {WebHomeScreen} from './projects/whatsevr/src/screens/WebHomeScreen';
import {WebOne2OneScreen} from './projects/whatsevr/src/screens/WebOne2OneScreen';
import {WebRandomMatchScreen} from './projects/whatsevr/src/screens/WebRandomMatchScreen';
import {WebCallsScreen} from './projects/whatsevr/src/screens/WebCallsScreen';
import {WebWalletScreen} from './projects/whatsevr/src/screens/WebWalletScreen';
import {WebProfileScreen} from './projects/whatsevr/src/screens/WebProfileScreen';
import {AlertsScreen} from './projects/whatsevr/src/screens/AlertsScreen';
import {AdminDashboardScreen} from './projects/vhims/src/screens/AdminDashboardScreen';
import {PlatformDashboardScreen} from './projects/vhims/src/screens/PlatformDashboardScreen';
import {PricingScreen} from './projects/vhims/src/screens/PricingScreen';
import {HomeScreen} from './projects/vhims/src/screens/HomeScreen';
import {MarketingPosterScreen as VhimsMarketingPosterScreen} from './projects/vhims/src/screens/MarketingPosterScreen';
import {CreatorDashboardScreen as DemoCreatorDashboardScreen} from './projects/demo-dont-delete/src/screens/CreatorDashboardScreen';
import {ContentUploadScreen as DemoContentUploadScreen} from './projects/demo-dont-delete/src/screens/ContentUploadScreen';
import {WebMonetizationHubScreen as DemoWebMonetizationHubScreen} from './projects/demo-dont-delete/src/screens/WebMonetizationHubScreen';
import {AudienceAnalyticsScreen as DemoAudienceAnalyticsScreen} from './projects/demo-dont-delete/src/screens/AudienceAnalyticsScreen';
import {LiveStreamStudioScreen as DemoLiveStreamStudioScreen} from './projects/demo-dont-delete/src/screens/LiveStreamStudioScreen';
import {WebBrandMarketplaceScreen as DemoWebBrandMarketplaceScreen} from './projects/demo-dont-delete/src/screens/WebBrandMarketplaceScreen';
import {WebMediaLibraryScreen as DemoWebMediaLibraryScreen} from './projects/demo-dont-delete/src/screens/WebMediaLibraryScreen';


// Each project registers its screens here as <Composition> entries.
// id="<ProjectName>-<Number>-<ScreenName>", width/height = exact measured content size per screen,
// short still duration (no animation unless requested).
// Heights are measured per-screen via scripts/audit-heights.sh — no shared constants.

// Keep in sync with FLOW_DURATION_IN_FRAMES in flow/FlowSequence.tsx, which warns on drift.
const WHATSEVR_FLOW_DURATION = 569;
// Keep in sync with FAN_FLOW_DURATION_IN_FRAMES in flow/FanFlowSequence.tsx
const WHATSEVR_FAN_FLOW_DURATION = 415;

export const RemotionRoot: FC = () => {
  return (
    <>
      <Composition
        id="vhims-00-Home"
        component={HomeScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={4020}
      />
      <Composition
        id="vhims-01-AdminDashboard"
        component={AdminDashboardScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1140}
      />
      <Composition
        id="vhims-02-PlatformDashboard"
        component={PlatformDashboardScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1280}
      />
      <Composition
        id="vhims-03-Pricing"
        component={PricingScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={2760}
      />
      <Composition
        id="vhims-04-MarketingPoster"
        component={VhimsMarketingPosterScreen}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1120}
      />
      <Composition
        id="whatsevr-01-SignIn"
        component={SignInScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-02-ResetPassword"
        component={ResetPasswordScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-03-Explore"
        component={ExploreScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1864}
      />
      <Composition
        id="whatsevr-04-ExploreOffers"
        component={ExploreOffersScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2116}
      />
      <Composition
        id="whatsevr-05-ExploreMemories"
        component={ExploreMemoriesScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2056}
      />
      <Composition
        id="whatsevr-06-ExploreWtv"
        component={ExploreWtvScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2058}
      />
      <Composition
        id="whatsevr-07-Spin"
        component={SpinScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1740}
      />
      <Composition
        id="whatsevr-08-Calls"
        component={CallsScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1140}
      />
      <Composition
        id="whatsevr-09-Chat"
        component={ChatScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1740}
      />
      <Composition
        id="whatsevr-10-Profile"
        component={ProfileScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1740}
      />
      <Composition
        id="whatsevr-11-UpdateProfile"
        component={UpdateProfileScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2160}
      />
      <Composition
        id="whatsevr-12-CommunityDetail"
        component={CommunityDetailScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1020}
      />
      <Composition
        id="whatsevr-13-CommunityUploadModal"
        component={CommunityUploadModalScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-14-Wallet"
        component={WalletScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1340}
      />
      <Composition
        id="whatsevr-15-Settings"
        component={SettingsScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1840}
      />
      <Composition
        id="whatsevr-16-Flow"
        component={FlowSequence}
        durationInFrames={WHATSEVR_FLOW_DURATION}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-17-CreateAccount"
        component={CreateAccountScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-18-GoLive"
        component={GoLiveScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-19-WalletRateModal"
        component={WalletRateModalScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-20-BuyCoins"
        component={BuyCoinsScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1260}
      />
      <Composition
        id="whatsevr-21-IncomingCall"
        component={IncomingCallScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1740}
      />
      <Composition
        id="whatsevr-22-FanFlow"
        component={FanFlowSequence}
        durationInFrames={WHATSEVR_FAN_FLOW_DURATION}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="whatsevr-23-MarketingPoster"
        component={MarketingPosterScreen}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1120}
      />
      <Composition
        id="whatsevr-24-StudioMinimalistPoster"
        component={StudioMinimalistPosterScreen}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="whatsevr-25-WebHome"
        component={WebHomeScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={700}
      />
      <Composition
        id="whatsevr-26-WebOne2One"
        component={WebOne2OneScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1660}
      />
      <Composition
        id="whatsevr-27-WebRandomMatch"
        component={WebRandomMatchScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="whatsevr-28-WebCalls"
        component={WebCallsScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={860}
      />
      <Composition
        id="whatsevr-29-WebWallet"
        component={WebWalletScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1300}
      />
      <Composition
        id="whatsevr-30-WebProfile"
        component={WebProfileScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1180}
      />
      <Composition
        id="whatsevr-31-Alerts"
        component={AlertsScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="demodontdelete-01-CreatorDashboard"
        component={DemoCreatorDashboardScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2220}
      />
      <Composition
        id="demodontdelete-02-ContentUpload"
        component={DemoContentUploadScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={1704}
      />
      <Composition
        id="demodontdelete-03-WebMonetizationHub"
        component={DemoWebMonetizationHubScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1320}
      />
      <Composition
        id="demodontdelete-04-AudienceAnalytics"
        component={DemoAudienceAnalyticsScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2220}
      />
      <Composition
        id="demodontdelete-05-LiveStreamStudio"
        component={DemoLiveStreamStudioScreen}
        durationInFrames={1}
        fps={30}
        width={786}
        height={2220}
      />
      <Composition
        id="demodontdelete-06-WebBrandMarketplace"
        component={DemoWebBrandMarketplaceScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={980}
      />
      <Composition
        id="demodontdelete-07-WebMediaLibrary"
        component={DemoWebMediaLibraryScreen}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1120}
      />
    </>
  );
};
