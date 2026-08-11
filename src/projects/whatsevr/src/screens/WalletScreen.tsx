import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {ArrowLeft, Plus, TrendingUp, Check} from 'lucide-react';

const {fontFamily} = loadFont();

export const WalletScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#ffffff'}} className="flex flex-col overflow-y-auto">
      {/* ── Header ── */}
      <div className="flex items-center gap-5 px-8 py-6 bg-white border-b border-gray-200/80">
        <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-col px-8 py-6 gap-7">
        {/* ── Balance Card ── */}
        <div className="flex flex-col p-8 bg-[#0088ff] rounded-[30px] text-white shadow-sm">
          <span className="text-sm font-medium text-blue-100/90 tracking-wide">Balance</span>
          <h2 className="text-[54px] font-bold mt-1 tracking-tight">₹30.00</h2>
        </div>

        {/* ── Top Up Button ── */}
        <div className="flex items-center justify-center gap-2 w-full py-4.5 rounded-full bg-[#0088ff] text-white text-lg font-bold shadow-sm cursor-pointer hover:bg-blue-600 transition-colors">
          <Plus size={22} strokeWidth={2.5} />
          <span>Top up</span>
        </div>

        {/* ── Earnings Section ── */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
            EARNINGS
          </h3>
          <div className="flex flex-col p-6 bg-[#f4f5f8] rounded-[28px] border border-gray-200/70">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d1fae5] text-[#059669] flex-shrink-0">
                <TrendingUp size={22} strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Earnings</span>
                <h4 className="text-3xl font-bold text-gray-900 leading-tight">₹0.00</h4>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <div className="flex-1 py-3.5 bg-gray-900 text-white font-semibold text-center text-base rounded-2xl cursor-pointer">
                Withdraw
              </div>
              <div className="flex-1 py-3.5 bg-white text-gray-900 font-semibold border border-gray-200 text-center text-base rounded-2xl shadow-2xs cursor-pointer">
                Earnings history
              </div>
            </div>
          </div>
        </div>

        {/* ── Your Rate Section ── */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
            YOUR RATE
          </h3>
          <div className="relative flex flex-col p-6 bg-[#f4f5f8] rounded-[28px] border border-gray-200/70">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-semibold">
              Voice and video
            </div>

            <h4 className="text-3xl font-bold text-gray-900">₹0.50</h4>
            <p className="text-sm text-gray-500 mt-1">You earn this a minute</p>
            <p className="text-sm text-gray-400 mt-3">Callers pay ₹0.25 on voice, ₹0.50 on video</p>

            <div className="mt-5 py-3.5 w-full bg-white text-gray-900 font-semibold border border-gray-200 text-center text-base rounded-2xl shadow-2xs cursor-pointer">
              Change rate and call type
            </div>
          </div>
        </div>

        {/* ── Recent Activity Section ── */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
            RECENT ACTIVITY
          </h3>
          <div className="flex items-center justify-between p-5 bg-[#f4f5f8] rounded-[24px] border border-gray-200/70">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d1fae5] text-[#059669] flex-shrink-0">
                <Check size={22} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Welcome bonus</h4>
                <p className="text-xs text-gray-400 mt-0.5">19 Jul, 2026 10:14 AM</p>
              </div>
            </div>
            <span className="text-base font-bold text-[#059669]">+₹30.00</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
