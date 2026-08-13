import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {ArrowLeft, Plus, TrendingUp, Check, PhoneCall, RotateCcw, Zap, CreditCard} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const recentActivity = [
  {
    id: '1',
    title: '1:1 Video Call with Kavya Reddy',
    type: 'Call deduction',
    time: '12 Aug, 2026 06:42 PM',
    amount: '-₹14.00',
    positive: false,
  },
  {
    id: '2',
    title: 'Random Match Refund (<30s)',
    type: 'Auto-refund',
    time: '12 Aug, 2026 03:20 PM',
    amount: '+₹5.00',
    positive: true,
  },
  {
    id: '3',
    title: 'Wallet Top-Up via UPI',
    type: 'Credit add',
    time: '11 Aug, 2026 02:08 PM',
    amount: '+₹1,000.00',
    positive: true,
  },
  {
    id: '4',
    title: 'Welcome Signup Bonus',
    type: 'Bonus credit',
    time: '19 Jul, 2026 10:14 AM',
    amount: '+₹30.00',
    positive: true,
  },
];

export const WalletScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-5 px-8 pt-10 pb-5 bg-white border-b border-slate-200/90">
        <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Wallet & Billing</h1>
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-col px-8 py-6 gap-7 bg-slate-50">
        {/* ── Balance Card ── */}
        <div className="flex flex-col p-8 bg-slate-900 rounded-[32px] text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-sky-500/20 blur-2xl pointer-events-none" />

          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider z-10">
            CURRENT BALANCE
          </span>
          <h2 className="text-5xl font-black mt-2 tracking-tight z-10">₹1,021.00</h2>
          
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between z-10">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <Zap size={14} className="fill-emerald-400" />
              3 Free Random Matches Active
            </span>
            <span className="text-xs font-bold text-slate-400">ID: WTV-882910</span>
          </div>
        </div>

        {/* ── Top Up Button ── */}
        <button className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white text-xl font-extrabold shadow-md transition-all">
          <Plus size={22} strokeWidth={3} />
          <span>Top Up Credits</span>
        </button>

        {/* ── Earnings Section ── */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            HOST EARNINGS
          </h3>
          <div className="flex flex-col p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                <TrendingUp size={26} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase">Total Earned</span>
                <h4 className="text-3xl font-black text-slate-900 leading-tight">₹450.50</h4>
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <button className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm rounded-2xl shadow-2xs transition-colors">
                Withdraw Funds
              </button>
              <button className="flex-1 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-900 font-extrabold border border-slate-200 text-sm rounded-2xl shadow-2xs transition-colors">
                History Log
              </button>
            </div>
          </div>
        </div>

        {/* ── Your Rate Section ── */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            YOUR CALL RATE SETTING
          </h3>
          <div className="relative flex flex-col p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-3xl font-black text-slate-900">₹0.50 / min</h4>
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-200 text-xs font-extrabold">
                Voice & Video
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Callers pay ₹0.25 on voice and ₹0.50 on video. You receive instant wallet payout per minute.
            </p>

            <button className="mt-2 py-3.5 w-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-extrabold border border-slate-200 text-sm rounded-2xl shadow-2xs transition-colors">
              Change Rate & Availability
            </button>
          </div>
        </div>

        {/* ── Recent Activity Section (Expanded with 4 transactions) ── */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            RECENT TRANSACTIONS & ACTIVITY
          </h3>
          <div className="flex flex-col gap-3">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-2xl shrink-0 ${
                      item.positive
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'bg-rose-50 text-rose-600 border border-rose-200'
                    }`}
                  >
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <span className="text-xs text-slate-400 font-medium">{item.time}</span>
                  </div>
                </div>
                <span
                  className={`text-base font-black ${
                    item.positive ? 'text-emerald-600' : 'text-slate-900'
                  }`}
                >
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
