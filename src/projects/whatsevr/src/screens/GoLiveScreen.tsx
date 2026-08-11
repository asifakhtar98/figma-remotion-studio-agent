import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {ArrowLeft, Video, Radio} from 'lucide-react';

const {fontFamily} = loadFont();

export const GoLiveScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f8f9fb'}} className="flex flex-col">
      {/* ── Header ── */}
      <div className="flex items-center gap-5 px-8 py-6 bg-white border-b border-gray-200/80">
        <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
        <h1 className="text-2xl font-bold text-gray-900">Go live</h1>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 -mt-16">
        {/* Concentric Circle Graphic */}
        <div className="relative flex items-center justify-center w-[300px] h-[300px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-50/80 border border-blue-100/60" />

          {/* Middle White Ring */}
          <div className="absolute w-[230px] h-[230px] rounded-full bg-white shadow-sm flex items-center justify-center" />

          {/* Inner Light Blue Circle */}
          <div className="absolute w-[160px] h-[160px] rounded-full bg-[#e0f2fe] flex items-center justify-center shadow-inner">
            <Video size={64} className="text-[#0088ff] fill-[#0088ff]" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="mt-10 text-[36px] font-bold text-gray-900 tracking-tight text-center">
          Go live to take calls
        </h2>

        {/* Earnings Badge Pill */}
        <div className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dcfce7] text-[#059669]">
          <Video size={18} className="fill-[#059669]" />
          <span className="text-[16px] font-semibold">You earn ₹0.50 a minute</span>
        </div>
      </div>

      {/* ── Bottom Fixed CTA Button ── */}
      <div className="p-8 w-full">
        <div className="flex items-center justify-center gap-3 w-full py-5 rounded-full bg-[#0088ff] text-white text-xl font-semibold shadow-lg shadow-blue-500/25 cursor-pointer">
          <Radio size={24} />
          <span>Go live</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
