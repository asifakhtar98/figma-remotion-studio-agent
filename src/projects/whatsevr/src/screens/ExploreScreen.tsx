import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Search, LayoutGrid, Shuffle, Compass, Tv, Users, Megaphone, HeartHandshake, Filter, Video, Sparkles} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';
import {PlaceholderPhoto} from '../components/PlaceholderPhoto';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const tabs = ['Explore', 'Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const tiles = [
  {
    badge: <Megaphone size={16} className="text-sky-500" />,
    src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Users size={16} className="text-emerald-500" />,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Tv size={16} className="text-rose-500" />,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Tv size={16} className="text-rose-500" />,
    src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Megaphone size={16} className="text-sky-500" />,
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Megaphone size={16} className="text-sky-500" />,
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Video size={16} className="text-indigo-500" />,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Sparkles size={16} className="text-amber-500" />,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: <Users size={16} className="text-emerald-500" />,
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=450&h=450&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=450&h=450&fit=crop&q=80',
  },
];

export const ExploreScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Search Header Bar ── */}
      <div className="flex items-center gap-4 px-7 pt-8 pb-5 bg-white border-b border-slate-100 shrink-0">
        <WhatsevrLogo size={52} ringed />
        <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-4 shadow-2xs">
          <Search size={22} className="text-slate-400" />
          <span className="flex-1 text-lg text-slate-400 font-medium">Explore WhatsEvr community...</span>
          <Filter size={18} className="text-sky-500" />
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="flex items-center gap-10 border-b border-slate-200/90 px-8 pt-4 pb-1 bg-white overflow-x-auto shrink-0 scrollbar-none">
        {tabs.map((tab, index) => (
          <div key={tab} className="relative pb-4 shrink-0 cursor-pointer">
            <span
              className={
                index === 0
                  ? 'text-xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap'
                  : 'text-xl text-slate-400 font-semibold tracking-tight whitespace-nowrap'
              }
            >
              {tab}
            </span>
            {index === 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full bg-sky-500 shadow-xs" />
            )}
          </div>
        ))}
      </div>

      {/* ── Media Grid (Full Bleed Edge-to-Edge Grid) ── */}
      <div className="grid auto-rows-max grid-cols-3 content-start gap-[2px] p-0 bg-white">
        {tiles.map((tile, index) => (
          <PlaceholderPhoto
            key={index}
            aspectClassName="aspect-square rounded-none"
            badge={tile.badge}
            src={tile.src}
          />
        ))}
      </div>

      {/* ── Bottom Navigation Bar ── */}
      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={24} />},
          {icon: <Shuffle size={24} />},
          {icon: <Compass size={24} />, active: true},
          {icon: <WhatsevrLogo size={24} />},
          {icon: <HeartHandshake size={24} />},
          {icon: <WhatsevrLogo size={24} />},
        ]}
      />
    </AbsoluteFill>
  );
};
