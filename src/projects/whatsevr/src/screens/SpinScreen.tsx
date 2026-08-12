import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  User,
  Shuffle,
  LayoutGrid,
  Compass,
  Heart,
  Tv,
  RotateCcw,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

export const SpinScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Top Header ── */}
      <div className="flex items-center justify-between px-8 pt-10 pb-4 z-10">
        <div className="flex items-center gap-2">
          <WhatsevrLogo size={42} ringed />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            Whats<span className="text-sky-500">Evr</span>
          </span>
        </div>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-slate-600 shadow-2xs">
          <User size={24} />
        </div>
      </div>

      {/* ── Main Action Stage ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 -mt-10 relative">
        {/* Ambient light glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Headline */}
        <h1 className="text-4xl font-black text-slate-900 tracking-tight text-center relative z-10">
          Meet Someone New
        </h1>
        <p className="mt-3 text-lg text-slate-500 text-center font-medium relative z-10">
          One tap • Instant stranger video chat • 30s auto-refund
        </p>

        {/* Concentric Pulsing Spin Button */}
        <div className="mt-16 relative flex items-center justify-center z-10">
          {/* Outer ring 3 */}
          <div className="w-[460px] h-[460px] rounded-full border border-sky-200/60 flex items-center justify-center animate-pulse">
            {/* Outer ring 2 */}
            <div className="w-[390px] h-[390px] rounded-full border border-sky-300/60 flex items-center justify-center">
              {/* Outer ring 1 */}
              <div className="w-[320px] h-[320px] rounded-full border border-sky-400/40 flex items-center justify-center">
                {/* Main Blue Spin Button */}
                <button className="group w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-4 border-white">
                  <Shuffle size={58} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-3xl font-black mt-2 tracking-wider uppercase">SPIN NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator Pill */}
        <div className="mt-12 flex flex-col items-center relative z-10">
          <div className="px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-extrabold flex items-center gap-2 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>3 Free Spins Available</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-medium flex items-center gap-1">
            <RotateCcw size={13} className="text-sky-500" />
            <span>Chats under 30 seconds refund your spin automatically.</span>
          </p>
        </div>

        {/* Browse Hosts Button */}
        <div className="mt-10 flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-extrabold text-base shadow-md cursor-pointer hover:bg-slate-800 transition-colors relative z-10">
          <LayoutGrid size={22} className="text-sky-400" />
          <span>Browse 1:1 Hosts Directory</span>
        </div>
      </div>

      {/* ── Bottom Navigation Bar ── */}
      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={24} />},
          {icon: <Shuffle size={24} />, active: true},
          {icon: <Compass size={24} />},
          {icon: <WhatsevrLogo size={24} />},
          {icon: <Heart size={24} />},
          {icon: <Tv size={24} />},
        ]}
      />
    </AbsoluteFill>
  );
};
