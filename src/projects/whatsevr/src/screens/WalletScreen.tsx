import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {ArrowLeft, Plus, ArrowDownLeft} from 'lucide-react';

const {fontFamily} = loadFont();

export const WalletScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-center gap-5 px-7 py-6 bg-white border-b border-gray-200">
        <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col px-7 py-6 gap-6">

        {/* ── Balance Card ── */}
        <div className="flex flex-col p-7 bg-[#2196F3] rounded-[32px] text-white shadow-md">
          <span className="text-sm opacity-80 font-medium">Balance</span>
          <h2 className="text-4xl font-bold mt-1 tracking-tight">₹10000.00</h2>

          <div className="w-full h-px bg-white/25 my-5" />

          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1.5 bg-white rounded-full" />
              <span className="w-6 h-1.5 bg-white rounded-full" />
              <span className="w-6 h-1.5 bg-white rounded-full" />
            </div>
            <span className="text-sm font-medium pl-1">3 free random matches</span>
          </div>
          <p className="text-xs opacity-75">Used before your balance.</p>
        </div>

        {/* ── Top Up Button ── */}
        <div className="flex items-center justify-center gap-2 w-full py-4.5 rounded-full bg-[#0088FF] text-white text-lg font-semibold shadow-sm cursor-pointer hover:bg-blue-600 transition-colors">
          <Plus size={22} strokeWidth={3} />
          <span>Top up</span>
        </div>

        {/* ── Recent Activity ── */}
        <div className="mt-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
            RECENT ACTIVITY
          </h3>

          <div className="flex items-center justify-between p-4 bg-white rounded-[28px] border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-13 h-13 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0" style={{width: 52, height: 52}}>
                <ArrowDownLeft size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Admin Adjust</h4>
                <p className="text-sm text-gray-400">7 hr ago</p>
              </div>
            </div>
            <span className="text-lg font-bold text-emerald-600">+₹10000.00</span>
          </div>
        </div>

      </div>
    </AbsoluteFill>
  );
};
