import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  Search,
  LayoutGrid,
  Shuffle,
  Compass,
  Heart,
  Tv,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

const tabs = ['Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const memoriesList = [
  {
    title: 'Life begins',
    handle: 'wtv.salahakram___152',
    bgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'just random click',
    handle: 'wtv.devthakur___520',
    bgUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'bike riding is a emotion',
    handle: 'wtv.pooja___828',
    bgUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'first love',
    handle: 'wtv.kabirsinha___777',
    bgUrl: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
  },
];

export const ExploreMemoriesScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#ffffff'}} className="flex flex-col">

      {/* ── Search Header Bar ── */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 bg-white">
        <WhatsevrLogo size={42} />
        <div className="flex flex-1 items-center justify-between gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 shadow-sm">
          <span className="text-lg text-gray-400 font-normal">Explore Whatsevr...</span>
          <Search size={22} className="text-gray-400" />
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="flex items-center gap-7 border-b border-gray-200 px-6 pb-1 bg-white">
        {tabs.map((tab) => {
          const isActive = tab === 'Memories';
          return (
            <div key={tab} className="relative pb-3 cursor-pointer">
              <span
                className={
                  isActive
                    ? 'text-lg font-bold text-gray-900'
                    : 'text-lg text-gray-400 font-medium'
                }
              >
                {tab}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-[#2196F3]" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Memories 2x2 Grid Content ── */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-5 bg-white content-start overflow-hidden">
        {memoriesList.map((item) => (
          <div
            key={item.handle}
            className="relative rounded-[28px] overflow-hidden shadow-md flex flex-col justify-between p-4"
            style={{height: 600}}
          >
            {/* Background Image */}
            <AbsoluteFill>
              <Img src={item.bgUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              {/* Bottom Gradient overlay */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  height: 180,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                }}
              />
            </AbsoluteFill>

            {/* Top Left Avatar */}
            <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-2 border-[#2196F3] p-0.5 shadow-md">
              <Img
                src={item.avatarUrl}
                style={{width: '100%', height: '100%', borderRadius: '9999px', objectFit: 'cover'}}
              />
            </div>

            {/* Bottom Caption & Handle */}
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-white/80 truncate">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Navigation Bar ── */}
      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={24} />},
          {icon: <Shuffle size={24} />},
          {icon: <Compass size={24} />, active: true},
          {icon: <WhatsevrLogo size={24} />},
          {icon: <Heart size={24} />},
          {icon: <Tv size={24} />},
        ]}
      />
    </AbsoluteFill>
  );
};
