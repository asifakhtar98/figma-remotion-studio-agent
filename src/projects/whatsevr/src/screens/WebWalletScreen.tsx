import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Wallet,
  Zap,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Tag,
  ArrowUpRight,
  Clock,
  Crown,
  CreditCard,
  Plus,
  Sliders,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const packages = [
  {amount: '₹100', extra: null, pay: 'pay ₹100', popular: false},
  {amount: '₹525', extra: '+5% BONUS', pay: 'pay ₹500', popular: false},
  {amount: '₹1,100', extra: '+10% BONUS', pay: 'pay ₹1,000', popular: true},
  {amount: '₹2,240', extra: '+12% BONUS', pay: 'pay ₹2,000', popular: false},
  {amount: '₹5,750', extra: '+15% BONUS', pay: 'pay ₹5,000', popular: false},
  {amount: '₹12,000', extra: '+20% BONUS', pay: 'pay ₹10,000', popular: false},
];

export const WebWalletScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="wallet" />

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-slate-50 flex flex-col overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Scrollable Content Container */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 overflow-y-auto h-full gap-7 max-w-[1240px]">
          {/* Header Title */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Wallet & Payment Management
            </h1>
            <p className="text-base text-slate-500 font-medium mt-1">
              Top up credits, manage active match filters, and review transaction history.
            </p>
          </div>

          {/* Section 1: Premium Profile Subscription Banner (Top Hero Position) */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 rounded-3xl p-6 px-8 shadow-md flex items-center justify-between gap-8">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                  <Crown size={14} className="text-amber-400" />
                  PREMIUM PROFILE (1 YEAR)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Active Status
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  VIP Verified Badge Everywhere
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed max-w-[720px]">
                  Displays your official VIP status badge next to your name across WhatsEvr — profile, chats, live rooms and random matching.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between gap-3 border-l border-slate-800/80 pl-8 py-1">
              <span className="text-xs font-bold text-slate-300">₹4,999 / year • Cancel anytime</span>
              <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5">
                Manage Subscription <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Section 2: Main Balance & Add Money Hero Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm flex flex-col gap-7">
            {/* Balance Header Banner */}
            <div className="flex items-center justify-between pb-7 border-b border-slate-100">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    CURRENT WALLET BALANCE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mt-1">
                  ₹10,000.00
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-700 bg-emerald-50 text-xs font-extrabold">
                    <Sparkles size={13} className="text-emerald-600" />
                    3 free random matches available
                  </span>
                </div>
              </div>

              {/* Quick Payment Assurance Tag */}
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <ShieldCheck size={28} className="text-sky-500" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    Instant & Secure Payments
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    UPI, NetBanking, Credit Cards & Wallets
                  </span>
                </div>
              </div>
            </div>

            {/* Add Money Package Grid */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={14} className="text-sky-500 fill-sky-500" />
                  SELECT TOP-UP PACKAGE
                </span>
                <span className="text-xs font-bold text-sky-600">
                  ⚡ Bonus credits added instantly
                </span>
              </div>

              <div className="grid grid-cols-6 gap-4 mt-3 pt-2">
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-150 ${
                      pkg.popular
                        ? 'border-2 border-sky-500 shadow-md bg-sky-50/20 pt-6'
                        : 'border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-sky-500 text-white text-[10px] font-black tracking-wider uppercase shadow-xs whitespace-nowrap z-10">
                        MOST POPULAR
                      </span>
                    )}

                    <div className="flex flex-col">
                      <span className="text-xl font-extrabold text-slate-900">
                        {pkg.amount}
                      </span>
                      {pkg.extra ? (
                        <span className="text-xs font-black text-emerald-600 mt-0.5">
                          {pkg.extra}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400 mt-0.5">
                          Standard
                        </span>
                      )}
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                      <span>{pkg.pay}</span>
                      <Plus size={14} className="text-sky-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Amount & Coupon Inputs Row */}
            <div className="grid grid-cols-2 gap-6 pt-3 border-t border-slate-100">
              {/* Custom Amount */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  ENTER CUSTOM AMOUNT
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-400">₹</span>
                    <input
                      type="text"
                      placeholder="Amount in ₹ (e.g. 500)"
                      className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none font-bold"
                      readOnly
                    />
                  </div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-6 py-3.5 rounded-2xl shadow-sm transition-all">
                    Add Money
                  </button>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Min ₹50 to Max ₹50,000. Top up larger amounts for up to 20% extra bonus.
                </span>
              </div>

              {/* Promo Code */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Tag size={13} className="text-sky-500" />
                  HAVE A PROMO / GIFT CODE?
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="WELCOME10"
                    className="flex-1 bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-sm text-slate-800 font-bold outline-none uppercase tracking-wider"
                    readOnly
                  />
                  <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3.5 rounded-2xl shadow-sm transition-all">
                    Apply Code
                  </button>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Discount codes apply automatically at checkout; gift vouchers credit instantly.
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Random Match Filters Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex flex-col gap-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders size={14} className="text-sky-500" />
                  RANDOM MATCH FILTERS (1 WEEK)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold">
                  Active Pass
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                Configure specific filters for random video matching. Does not affect 1:1 direct calls.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Gender filter */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    Gender Filter Pass
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    ₹500 for 7 days
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 flex items-center gap-2 cursor-pointer shadow-xs">
                    <span className="text-xs text-slate-800 font-bold">Female</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                  <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-colors">
                    Activate
                  </button>
                </div>
              </div>

              {/* Country filter */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    Country Filter Pass
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    ₹200 for 7 days
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-slate-200/90 rounded-xl px-4 py-1.5 shadow-xs">
                    <span className="text-xs text-slate-800 font-bold">India (IN)</span>
                  </div>
                  <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-colors">
                    Activate
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Transaction Ledger Table */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Clock size={15} className="text-sky-500" />
                RECENT TRANSACTIONS & BILLING LOG
              </span>
              <button className="text-xs font-bold text-sky-600 hover:text-sky-700">
                Download Statement (PDF)
              </button>
            </div>

            <div className="flex flex-col divide-y divide-slate-100">
              {/* Header */}
              <div className="flex items-center text-[11px] font-extrabold text-slate-400 uppercase tracking-wider py-2">
                <span className="w-1/4">DATE & TIME</span>
                <span className="w-1/3">DESCRIPTION</span>
                <span className="w-1/5 text-right">AMOUNT</span>
                <span className="w-1/5 text-right">BALANCE</span>
              </div>

              {/* Row 1 */}
              <div className="flex items-center text-xs py-3">
                <span className="w-1/4 text-slate-500 font-semibold">Aug 11, 2026 • 14:08</span>
                <div className="w-1/3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-900 font-bold">Admin Top-Up Credit</span>
                </div>
                <span className="w-1/5 text-right text-emerald-600 font-extrabold">+₹10,000.00</span>
                <span className="w-1/5 text-right text-slate-900 font-bold">₹10,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};

