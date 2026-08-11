import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  Coins,
  Sparkles,
  Zap,
  ShieldCheck,
  Check,
  CreditCard,
  QrCode,
} from 'lucide-react';

const {fontFamily} = loadFont();

const coinPackages = [
  {
    id: 'starter',
    coins: 100,
    bonus: 0,
    totalCoins: 100,
    price: '₹99',
    badge: null,
    popular: false,
    subtitle: 'Quick starter pack',
  },
  {
    id: 'popular',
    coins: 500,
    bonus: 100,
    totalCoins: 600,
    price: '₹399',
    badge: 'MOST POPULAR',
    popular: true,
    subtitle: '+100 bonus coins included',
  },
  {
    id: 'pro',
    coins: 1200,
    bonus: 300,
    totalCoins: 1500,
    price: '₹899',
    badge: '30% BONUS',
    popular: false,
    subtitle: '+300 bonus coins included',
  },
  {
    id: 'vip',
    coins: 3000,
    bonus: 1000,
    totalCoins: 4000,
    price: '₹1,999',
    badge: 'VIP BEST VALUE',
    popular: false,
    subtitle: '+1,000 bonus coins included',
  },
];

export const BuyCoinsScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#ffffff'}} className="flex flex-col overflow-y-auto">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-200/80">
        <div className="flex items-center gap-5">
          <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
          <h1 className="text-2xl font-bold text-gray-900">Buy Coins</h1>
        </div>

        {/* Current Balance Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-sm">
          <Coins size={18} className="text-amber-500 fill-amber-400" />
          <span>45 Coins</span>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex flex-col px-8 py-6 gap-7">
        {/* Hero Perks Card */}
        <div className="relative flex flex-col p-7 bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 rounded-[30px] text-white shadow-md overflow-hidden">
          {/* Subtle background glow circle */}
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/20 blur-xl pointer-events-none" />

          <div className="flex items-center gap-4 z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-inner flex-shrink-0">
              <Sparkles size={32} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
                Whatsevr Store
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight">Unlock Social & Dating Perks</h2>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 z-10 text-sm font-medium opacity-95">
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={3} className="text-white" />
              <span>Send instant virtual gifts on live calls & chats</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={3} className="text-white" />
              <span>Highlight your profile in Explore & match lists</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={3} className="text-white" />
              <span>Connect instantly on random video call spins</span>
            </div>
          </div>
        </div>

        {/* Coin Packages Section */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-1">
            SELECT COIN PACKAGE
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {coinPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex items-center justify-between p-5 rounded-[26px] border transition-all cursor-pointer ${
                  pkg.popular
                    ? 'border-2 border-amber-500 bg-amber-50/40 shadow-md'
                    : 'border-gray-200/90 bg-[#f8f9fb] shadow-2xs'
                }`}
              >
                {/* Optional Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-amber-500 text-white text-xs font-bold tracking-wider shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Coin Icon Ring */}
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0 ${
                      pkg.popular
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-amber-100 text-amber-600'
                    }`}
                  >
                    <Coins size={28} className={pkg.popular ? 'fill-white' : 'fill-amber-500'} />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-gray-900">
                        {pkg.totalCoins} Coins
                      </span>
                      {pkg.bonus > 0 && (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">
                          +{pkg.bonus} Free
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Price Pill */}
                <div
                  className={`px-5 py-2.5 rounded-full font-bold text-base flex-shrink-0 ${
                    pkg.popular
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-900 shadow-2xs'
                  }`}
                >
                  {pkg.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
            PAYMENT METHOD
          </h3>

          <div className="flex items-center justify-between p-5 bg-[#f8f9fb] rounded-[24px] border border-gray-200/90">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-[#0088ff]">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">UPI Instant Pay</h4>
                <p className="text-xs text-gray-400 mt-0.5">Google Pay, PhonePe, Paytm, BHIM</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full">
              DEFAULT
            </span>
          </div>
        </div>

        {/* Security Footer */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400 mt-1">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>100% Encrypted & Secure Payment • Instant Coin Crediting</span>
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-2 w-full">
          <div className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-gray-900 text-white text-xl font-bold shadow-lg cursor-pointer">
            <Zap size={22} className="text-amber-400 fill-amber-400" />
            <span>Pay ₹399 for 600 Coins</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
