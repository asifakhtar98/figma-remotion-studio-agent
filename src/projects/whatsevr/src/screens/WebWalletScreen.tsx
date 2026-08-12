import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Home,
  Shuffle,
  LayoutGrid,
  Headphones,
  Wallet,
  User,
  ChevronDown,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700'],
});

const navItems = [
  {id: 'home', label: 'Home', icon: Home, active: false},
  {id: 'random', label: 'Random', icon: Shuffle, active: false},
  {id: 'one2one', label: 'One2One', icon: LayoutGrid, active: false},
  {id: 'calls', label: 'Calls', icon: Headphones, active: false},
  {id: 'wallet', label: 'Wallet', icon: Wallet, active: true},
  {id: 'profile', label: 'Profile', icon: User, active: false},
];

const packages = [
  {amount: '₹100', extra: null, pay: 'pay ₹100'},
  {amount: '₹525', extra: '+5% extra', pay: 'pay ₹500'},
  {amount: '₹1,100', extra: '+10% extra', pay: 'pay ₹1,000'},
  {amount: '₹2,240', extra: '+12% extra', pay: 'pay ₹2,000'},
  {amount: '₹5,750', extra: '+15% extra', pay: 'pay ₹5,000'},
  {amount: '₹12,000', extra: '+20% extra', pay: 'pay ₹10,000'},
];

export const WebWalletScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-zinc-900"
    >
      {/* ── Left Sidebar Navigation (240px) ── */}
      <aside className="w-[240px] h-full bg-white border-r border-zinc-200/90 flex flex-col justify-between p-6 z-20 shrink-0">
        <div className="flex flex-col gap-7">
          {/* Logo & Brand Header */}
          <div className="flex flex-col px-1">
            <div className="flex items-center gap-0">
              <span className="text-xl font-bold tracking-tight text-zinc-900">
                Whats
              </span>
              <span className="text-xl font-bold tracking-tight text-[#0088ff]">
                Evr
              </span>
            </div>
            <span className="text-[10px] font-semibold text-zinc-400 tracking-[0.18em] uppercase mt-1">
              YOURONES
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-[#f4f4f5] text-zinc-900 font-semibold'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-medium'
                  }`}
                >
                  <IconComponent
                    size={18}
                    className={item.active ? 'text-zinc-900' : 'text-zinc-500'}
                    strokeWidth={2}
                  />
                  <span className="text-sm tracking-tight">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-2 px-1">
          <div className="w-full py-2.5 px-4 rounded-xl border border-zinc-200/90 bg-white flex items-center justify-center shadow-2xs">
            <span className="text-sm font-semibold text-zinc-900">₹10,000.00</span>
          </div>
          <button className="text-left text-xs font-medium text-zinc-500 hover:text-zinc-800 px-1 mt-1 transition-colors">
            Log out
          </button>
        </div>
      </aside>

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-white flex flex-col overflow-hidden">
        {/* Dot Grid Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Scrollable Content Container */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 overflow-y-auto h-full max-w-[920px]">
          {/* Section 1: Wallet Balance & Add Money Main Card */}
          <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs flex flex-col gap-6">
            {/* Balance Header */}
            <div className="flex flex-col pb-6 border-b border-zinc-100">
              <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                WALLET BALANCE
              </span>
              <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
                ₹10,000.00
              </h1>
              <div className="mt-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-600 bg-emerald-50/50 text-xs font-semibold">
                  3 free random matches
                </span>
              </div>
            </div>

            {/* Add Money Section */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase mb-3">
                ADD MONEY
              </span>
              <div className="grid grid-cols-6 gap-3">
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 rounded-xl p-3.5 flex flex-col justify-center gap-0.5 cursor-pointer shadow-2xs hover:border-zinc-300 transition-colors"
                  >
                    <span className="text-base font-bold text-zinc-900">
                      {pkg.amount}
                    </span>
                    {pkg.extra ? (
                      <span className="text-[11px] font-semibold text-emerald-600">
                        {pkg.extra}
                      </span>
                    ) : null}
                    <span className="text-[11px] text-zinc-400 font-normal">
                      {pkg.pay}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inputs Row: Another Amount & Have a Code */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              {/* Another Amount */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                  ANOTHER AMOUNT
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Amount in ₹"
                    className="flex-1 bg-white border border-zinc-200/90 rounded-xl px-3.5 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 outline-none font-normal shadow-2xs"
                    readOnly
                  />
                  <button className="bg-[#27272a] hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs transition-colors">
                    Add
                  </button>
                </div>
                <span className="text-[11px] text-zinc-400 font-normal mt-0.5 leading-relaxed">
                  ₹50 to ₹50,000. The bigger the top-up, the more extra you get — up to 20%.
                </span>
              </div>

              {/* Have a code */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                  HAVE A CODE?
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="WELCOME10"
                    className="flex-1 bg-white border border-zinc-200/90 rounded-xl px-3.5 py-2.5 text-sm text-zinc-800 outline-none font-medium shadow-2xs"
                    readOnly
                  />
                  <button className="bg-white border border-zinc-200/90 hover:bg-zinc-50 text-zinc-800 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs transition-colors">
                    Apply
                  </button>
                </div>
                <span className="text-[11px] text-zinc-400 font-normal mt-0.5 leading-relaxed">
                  Discount codes apply at checkout; gift codes are added straight away.
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Two Side-by-Side Cards */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Card 1: Random Match Filters */}
            <div className="bg-[#f8fafc] border border-zinc-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between gap-3.5">
              <div>
                <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                  RANDOM MATCH FILTERS (1 WEEK)
                </span>
                <p className="text-xs text-zinc-500 font-normal mt-1 leading-relaxed">
                  These decide who random match shows you. They do not change anything else on WhatsEvr.
                </p>
              </div>

              {/* Gender filter */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-zinc-800">
                    Gender filter
                  </span>
                  <span className="text-[11px] text-zinc-400 font-normal">
                    ₹500 for a week
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-zinc-200/90 rounded-lg px-3 py-1.5 flex items-center gap-3 cursor-pointer">
                    <span className="text-xs text-zinc-800 font-medium">Female</span>
                    <ChevronDown size={14} className="text-zinc-400" />
                  </div>
                  <button className="bg-white border border-zinc-200/90 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors">
                    Activate
                  </button>
                </div>
              </div>

              {/* Country filter */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-zinc-800">
                    Country filter
                  </span>
                  <span className="text-[11px] text-zinc-400 font-normal">
                    ₹200 for a week
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-zinc-200/90 rounded-lg px-4 py-1.5">
                    <span className="text-xs text-zinc-400 font-medium">IN</span>
                  </div>
                  <button className="bg-white border border-zinc-200/90 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors">
                    Activate
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Premium Profile */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                  PREMIUM PROFILE (1 YEAR)
                </span>
                <div className="flex items-start justify-between mt-2">
                  <div className="flex flex-col pr-2">
                    <h3 className="text-xs font-bold text-zinc-900">
                      Your badge, everywhere on WhatsEvr
                    </h3>
                    <p className="text-xs text-zinc-500 font-normal mt-1 leading-relaxed">
                      Shows next to your name across SneekPeek and social — profile, chats, comments, live and random. ₹4999/year, cancel anytime.
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-600 bg-emerald-50/50 text-xs font-semibold shrink-0">
                    active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Recent Activity Table */}
          <div className="bg-[#f8fafc] border border-zinc-200/90 rounded-2xl p-5 shadow-2xs flex flex-col gap-3 mt-6">
            <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase mb-1">
              RECENT ACTIVITY
            </span>
            <div className="flex flex-col gap-2">
              {/* Header Row */}
              <div className="flex items-center text-[11px] font-bold text-zinc-400 uppercase tracking-wider pb-2 border-b border-zinc-200/60">
                <span className="w-1/4">WHEN</span>
                <span className="w-1/3">WHAT</span>
                <span className="w-1/5 text-right">AMOUNT</span>
                <span className="w-1/5 text-right">BALANCE</span>
              </div>
              {/* Row 1 */}
              <div className="flex items-center text-xs py-1">
                <span className="w-1/4 text-zinc-500 font-normal">Aug 11, 14:08</span>
                <span className="w-1/3 text-zinc-900 font-medium">Admin Adjust</span>
                <span className="w-1/5 text-right text-emerald-600 font-semibold">+₹10,000.00</span>
                <span className="w-1/5 text-right text-zinc-800 font-medium">₹10,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};
