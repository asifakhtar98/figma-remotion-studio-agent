import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Search, LayoutGrid, Shuffle, Compass, Heart, Tv} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

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
    title: 'bike riding is an emotion',
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
  {
    title: 'weekend getaway',
    handle: 'wtv.kavyareddy___901',
    bgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'coffee & code',
    handle: 'wtv.aryan675',
    bgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'sunset vibes',
    handle: 'wtv.riyabanerjee___402',
    bgUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&q=80',
  },
  {
    title: 'mountain trekking',
    handle: 'wtv.ananyaroy___333',
    bgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=750&fit=crop&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80',
  },
];

export const ExploreMemoriesScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-4 px-7 pt-10 pb-4 bg-white border-b border-slate-100">
        <WhatsevrLogo size={48} ringed />
        <div className="flex flex-1 items-center justify-between gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3.5 shadow-2xs">
          <span className="text-lg text-slate-400 font-medium">Search Memories...</span>
          <Search size={22} className="text-slate-400" />
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="flex items-center gap-8 border-b border-slate-200/90 px-7 pt-3 bg-white overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab === 'Memories';
          return (
            <div key={tab} className="relative pb-3.5 cursor-pointer">
              <span
                className={
                  isActive
                    ? 'text-xl font-extrabold text-slate-900'
                    : 'text-xl text-slate-400 font-semibold hover:text-slate-700'
                }
              >
                {tab}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-sky-500 shadow-xs" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Memories Grid (Expanded to 8 items) ── */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-5 bg-slate-50 content-start overflow-y-auto">
        {memoriesList.map((item) => (
          <div
            key={item.handle}
            className="relative rounded-3xl overflow-hidden shadow-md flex flex-col justify-between p-5 group min-h-[440px]"
          >
            <Img src={item.bgUrl} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400 p-0.5 shadow-lg">
              <Img src={item.avatarUrl} className="w-full h-full rounded-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="text-xl font-extrabold text-white leading-tight drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-slate-200 truncate">
                @{item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>

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
