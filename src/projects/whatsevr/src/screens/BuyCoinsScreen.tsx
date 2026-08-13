import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  ArrowLeft,
  Coins,
  Sparkles,
  Zap,
  ShieldCheck,
  QrCode,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

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
    id: 'ultra',
    coins: 2000,
    bonus: 500,
    totalCoins: 2500,
    price: '₹1,499',
    badge: 'ULTRA PACK',
    popular: false,
    subtitle: '+500 bonus coins included',
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
  {
    id: 'creator',
    coins: 8000,
    bonus: 2000,
    totalCoins: 10000,
    price: '₹4,999',
    badge: 'CREATOR SUPERPACK',
    popular: false,
    subtitle: '+2,000 bonus coins included',
  },
];

export const BuyCoinsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-8 pt-10 pb-5 bg-white border-b border-slate-200/90">
        <div className="flex items-center gap-5">
          <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Buy Coins</h1>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-extrabold text-sm shadow-2xs">
          <Coins size={18} className="text-amber-500 fill-amber-400" />
          <span>45 Coins</span>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex flex-col px-8 py-6 gap-6 bg-slate-50">
        {/* ── Hero Balance Card ── */}
        <div className="flex flex-col p-8 bg-slate-900 rounded-[32px] text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-sky-500/20 blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              WhatsEvr Coin Store
            </span>
            <Sparkles size={20} className="text-amber-400 fill-amber-400" />
          </div>

          <h2 className="text-4xl font-black mt-2 tracking-tight z-10">
            45 Coins Available
          </h2>

          <div className="w-full h-px bg-slate-800 my-4 z-10" />

          <p className="text-xs text-slate-400 z-10 leading-relaxed font-medium">
            Coins are used for live 1:1 video calls, virtual host gifts, and instant random matching.
          </p>
        </div>

        {/* ── Select Coin Package (Expanded to 6 packages) ── */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            SELECT COIN PACKAGE
          </h3>

          <div className="flex flex-col gap-3.5">
            {coinPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex items-center justify-between p-5 rounded-3xl bg-white transition-all cursor-pointer ${
                  pkg.popular
                    ? 'border-2 border-sky-500 shadow-md'
                    : 'border border-slate-200/90 shadow-2xs'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-sky-500 text-white text-[10px] font-black tracking-wider uppercase shadow-xs whitespace-nowrap z-10">
                    {pkg.badge}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500 shrink-0">
                    <Coins size={28} className="fill-amber-400" />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-slate-900">
                        {pkg.totalCoins} Coins
                      </span>
                      {pkg.bonus > 0 && (
                        <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          +{pkg.bonus} Free
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{pkg.subtitle}</p>
                  </div>
                </div>

                <div
                  className={`px-5 py-2.5 rounded-full font-extrabold text-sm shrink-0 ${
                    pkg.popular
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-900 border border-slate-200'
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
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            INSTANT PAYMENT METHOD
          </h3>

          <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 shrink-0">
                <QrCode size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">UPI Instant Pay</h4>
                <p className="text-xs text-slate-400 font-medium">Google Pay, PhonePe, Paytm, BHIM</p>
              </div>
            </div>
            <span className="text-xs font-extrabold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200">
              DEFAULT
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>100% Encrypted & Secure Payment • Instant Credit</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
