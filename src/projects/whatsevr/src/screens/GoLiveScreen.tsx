import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {ArrowLeft, Video, Radio, Zap} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

export const GoLiveScreen: FC = () => {
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
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Go Live Hub</h1>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 -mt-16 relative">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Concentric Circle Graphic */}
        <div className="relative flex items-center justify-center w-[360px] h-[360px]">
          <div className="absolute inset-0 rounded-full border border-sky-200/60" />
          <div className="absolute w-[290px] h-[290px] rounded-full border border-sky-300/60 bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-xl border-4 border-white">
            <Video size={76} className="text-white fill-white" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="mt-12 text-4xl font-black text-slate-900 tracking-tight text-center">
          Go Live to Receive 1:1 Calls
        </h2>
        <p className="mt-3 text-lg text-slate-500 font-medium text-center max-w-[500px]">
          Start your broadcast stream and let users connect directly with you.
        </p>

        {/* Earnings Badge Pill */}
        <div className="mt-6 flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-lg shadow-2xs">
          <Zap size={20} className="fill-emerald-600 text-emerald-600" />
          <span>You earn ₹0.50 per minute</span>
        </div>
      </div>

      {/* ── Bottom Fixed CTA Button ── */}
      <div className="p-8 w-full bg-white border-t border-slate-200/90 shadow-lg">
        <button className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-slate-900 text-white text-2xl font-black shadow-xl cursor-pointer">
          <Radio size={28} />
          <span>GO LIVE NOW</span>
        </button>
      </div>
    </AbsoluteFill>
  );
};
