# whatsevr — Screen Flow

> The order screens appear when rendered as a video sequence.
> Each screen shows for the specified duration before transitioning to the next.

| Order | Screen | Duration (seconds) | Transition |
|---|---|---|---|
| 1 | SignInScreen | 3 | cut |
| 2 | ResetPasswordScreen | 3 | cut |
| 3 | ExploreScreen | 3 | cut |
| 4 | ExploreOffersScreen | 3 | cut |
| 5 | ExploreMemoriesScreen | 3 | cut |
| 6 | ExploreWtvScreen | 3 | cut |
| 7 | SpinScreen | 3 | cut |
| 8 | CallsScreen | 3 | cut |
| 9 | ProfileScreen | 3 | cut |
| 10 | UpdateProfileScreen | 3 | cut |
| 11 | CommunityDetailScreen | 3 | cut |
| 12 | WalletScreen | 3 | cut |
| 13 | SettingsScreen | 3 | cut |

**Total duration:** 39 seconds (1170 frames at 30fps)

**Render command:**
```bash
npx remotion render src/index.ts whatsevr-Flow --codec h264
```

## Flow rationale

The sequence follows a natural first-time user journey through the Whatsevr app:

1. **Authentication** — Sign in and password reset (what every user sees first)
2. **Discovery** — The main Explore grid, then browsing through the Offers, Memories, and Video sub-tabs
3. **Social feature** — The Spin random video match screen
4. **Communication** — The Calls history log
5. **Identity** — Viewing your own profile, then editing it
6. **Community** — A community detail page showing group features
7. **Monetisation** — The Wallet balance and top-up screen
8. **Configuration** — App settings (the last thing a user typically visits)
