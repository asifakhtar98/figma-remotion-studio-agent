import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {WalletScreen} from './WalletScreen';
import {Minus, Plus} from 'lucide-react';

const {fontFamily} = loadFont();

export const WalletRateModalScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily}} className="relative">
      {/* ── Background dimmed Wallet screen ── */}
      <WalletScreen />

      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* ── Bottom Sheet Modal ── */}
      <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[36px] px-8 pt-4 pb-8 z-20 shadow-2xl flex flex-col">
        {/* Top Handle Indicator */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-5" />

        {/* Title & Subtitle */}
        <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">What you charge</h2>
        <p className="text-[16px] text-gray-500 mt-1">
          You keep this for every minute you are on a call.
        </p>

        {/* Stepper Controls Row */}
        <div className="mt-7 flex items-center justify-between">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer">
            <Minus size={24} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900">₹0.50 / min</span>
            <span className="text-xs text-gray-400 mt-1">between ₹0.50 and ₹1.00</span>
          </div>

          <div className="w-14 h-14 rounded-full bg-[#f3e8ff] text-[#9333ea] flex items-center justify-center cursor-pointer">
            <Plus size={24} strokeWidth={2.5} />
          </div>
        </div>

        {/* Call type selection title */}
        <h3 className="mt-7 text-[17px] font-semibold text-gray-900">
          You will be available for
        </h3>

        {/* Option Pills Row */}
        <div className="mt-3 flex gap-3">
          <div className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-semibold text-sm cursor-pointer">
            Voice and video
          </div>
          <div className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm cursor-pointer">
            Voice only
          </div>
          <div className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm cursor-pointer">
            Video only
          </div>
        </div>

        {/* Subtext explanation */}
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          You earn ₹0.25 a minute on voice and ₹0.50 on video — they pick which, and either of you can switch.
        </p>

        {/* Auto Video Toggle Switch Row */}
        <div className="mt-7 flex items-start justify-between gap-5">
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold text-gray-900 leading-snug">
              Let callers turn video on without asking me
            </span>
            <span className="text-xs text-gray-400 mt-1 leading-snug">
              You earn the video rate from the moment they do. Leave this off and you get a prompt each time.
            </span>
          </div>

          {/* Toggle Switch */}
          <div className="w-14 h-8 bg-gray-200 rounded-full p-1 flex items-center justify-start flex-shrink-0 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        {/* Save CTA Button */}
        <div className="mt-8 w-full py-5 min-h-[64px] flex items-center justify-center bg-gray-900 text-white font-bold text-center text-xl rounded-2xl cursor-pointer">
          Save
        </div>
      </div>
    </AbsoluteFill>
  );
};
