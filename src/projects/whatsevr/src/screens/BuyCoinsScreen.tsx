import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  Coins,
  Sparkles,
  Zap,
  ShieldCheck,
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
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col overflow-y-auto">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-7 py-6 bg-white border-b border-gray-200">
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
      <div className="flex flex-col px-7 py-6 gap-6">

        {/* ── Hero Balance Card ── */}
        <div className="flex flex-col p-7 bg-[#0088ff] rounded-[32px] text-white shadow-md relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-sm font-medium text-blue-100/90 tracking-wide">
              Whatsevr Coin Store
            </span>
            <Sparkles size={20} className="text-amber-300 fill-amber-300" />
          </div>

          <h2 className="text-4xl font-bold mt-1 tracking-tight z-10">
            45 Coins Available
          </h2>

          <div className="w-full h-px bg-white/25 my-4 z-10" />

          <p className="text-xs opacity-90 z-10 leading-relaxed">
            Coins are used for live video calls, virtual gifts, and instant random matching.
          </p>
        </div>

        {/* ── Select Coin Package ── */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
            SELECT COIN PACKAGE
          </h3>

          <div className="flex flex-col gap-3">
            {coinPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex items-center justify-between p-5 rounded-3xl bg-white transition-all cursor-pointer ${
                  pkg.popular
                    ? 'border-2 border-[#0088ff] shadow-md'
                    : 'border border-gray-200 shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-[#0088ff] text-white text-xs font-bold shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-500 flex-shrink-0">
                    <Coins size={28} className="fill-amber-400" />
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {pkg.totalCoins} Coins
                      </span>
                      {pkg.bonus > 0 && (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">
                          +{pkg.bonus} Free
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Price button */}
                <div
                  className={`px-5 py-2.5 rounded-full font-bold text-base flex-shrink-0 ${
                    pkg.popular
                      ? 'bg-[#0088ff] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-900 border border-gray-200'
                  }`}
                >
                  {pkg.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Payment Method Section ── */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
            PAYMENT METHOD
          </h3>

          <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-[#0088ff] flex-shrink-0">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">UPI Instant Pay</h4>
                <p className="text-xs text-gray-400">Google Pay, PhonePe, Paytm, BHIM</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full">
              DEFAULT
            </span>
          </div>
        </div>

        {/* ── Security Disclaimer ── */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>100% Encrypted & Secure Payment • Instant Coin Credit</span>
        </div>

        {/* ── Primary Action Button ── */}
        <div className="flex items-center justify-center gap-2 w-full py-5.5 min-h-[68px] rounded-full bg-[#0088ff] text-white text-xl font-bold shadow-md cursor-pointer hover:bg-blue-600 transition-colors">
          <Zap size={24} className="text-amber-300 fill-amber-300" />
          <span>Pay ₹399 for 600 Coins</span>
        </div>

      </div>
    </AbsoluteFill>
  );
};
