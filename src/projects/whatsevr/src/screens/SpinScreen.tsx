import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  User,
  Shuffle,
  LayoutGrid,
  Compass,
  Heart,
  Tv,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

export const SpinScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f8f9fa'}} className="flex flex-col">

      {/* ── Top Header ── */}
      <div className="flex items-center justify-end px-7 pt-7 pb-4">
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-200 text-gray-500 cursor-pointer">
          <User size={22} />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-7 -mt-6">

        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight text-center">
          Meet someone new
        </h1>
        <p className="mt-2.5 text-lg text-gray-500 text-center font-normal">
          One tap, one stranger, live video.
        </p>

        {/* Concentric Pulsing Spin Button */}
        <div className="mt-16 relative flex items-center justify-center">
          {/* Outer ring 3 */}
          <div className="w-[420px] h-[420px] rounded-full border border-blue-100 flex items-center justify-center">
            {/* Outer ring 2 */}
            <div className="w-[360px] h-[360px] rounded-full border border-blue-200/60 flex items-center justify-center">
              {/* Outer ring 1 */}
              <div className="w-[300px] h-[300px] rounded-full border border-blue-300/40 flex items-center justify-center">
                {/* Main Blue Spin Button */}
                <div className="w-[240px] h-[240px] rounded-full bg-[#2196F3] text-white flex flex-col items-center justify-center shadow-xl cursor-pointer hover:bg-blue-600 transition-colors">
                  <Shuffle size={52} strokeWidth={2.5} />
                  <span className="text-3xl font-bold mt-2 tracking-wide">Spin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-base font-semibold text-emerald-600">3 free spins left</span>
          <p className="text-xs text-gray-400 mt-1 font-normal">
            Chats under 30 seconds give your spin back.
          </p>
        </div>

        {/* Browse hosts pill button */}
        <div className="mt-12 flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gray-200/70 text-gray-900 font-semibold text-base shadow-sm cursor-pointer hover:bg-gray-300 transition-colors">
          <LayoutGrid size={20} />
          <span>Browse hosts</span>
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
