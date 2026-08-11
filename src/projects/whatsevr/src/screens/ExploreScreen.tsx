import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Search, LayoutGrid, Shuffle, Compass, Tv, Users, Megaphone, HeartHandshake} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';
import {PlaceholderPhoto} from '../components/PlaceholderPhoto';

const {fontFamily} = loadFont();

const tabs = ['Explore', 'Offers', 'Posts', 'Memories', 'Flicks'];

const tiles = [
  {
    badge: <Megaphone size={14} />,
    src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: <Users size={14} />,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: <Tv size={14} />,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: <Tv size={14} />,
    src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: <Megaphone size={14} />,
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: <Megaphone size={14} />,
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=350&h=350&fit=crop&q=80',
  },
  {
    badge: null,
    src: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=350&h=350&fit=crop&q=80',
  },
];

export const ExploreScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#ffffff'}} className="flex flex-col">
      <div className="flex items-center gap-3 px-6 pb-4 pt-6 bg-white">
        <WhatsevrLogo size={40} />
        <div className="flex flex-1 items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 shadow-2xs">
          <span className="flex-1 text-lg text-gray-400 font-normal">Explore Whatsevr...</span>
          <Search size={20} className="text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-8 border-b border-gray-200 px-6 pb-3 bg-white">
        {tabs.map((tab, index) => (
          <div key={tab} className="relative pb-2 cursor-pointer">
            <span className={index === 0 ? 'text-xl font-bold text-gray-900' : 'text-xl text-gray-400 font-medium'}>
              {tab}
            </span>
            {index === 0 && <div className="absolute -bottom-[13px] left-0 h-1 w-full rounded-full bg-[#2196F3]" />}
          </div>
        ))}
      </div>

      <div className="grid flex-1 auto-rows-max grid-cols-3 content-start gap-1.5 overflow-hidden p-1.5 bg-gray-50">
        {tiles.map((tile, index) => (
          <PlaceholderPhoto key={index} aspectClassName="aspect-square" badge={tile.badge} src={tile.src} />
        ))}
      </div>

      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={22} />},
          {icon: <Shuffle size={22} />},
          {icon: <Compass size={22} />, active: true},
          {icon: <WhatsevrLogo size={22} />},
          {icon: <HeartHandshake size={22} />},
          {icon: <WhatsevrLogo size={22} />},
        ]}
      />
    </AbsoluteFill>
  );
};
