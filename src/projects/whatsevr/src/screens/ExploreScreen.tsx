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
  {badge: <Megaphone size={12} />},
  {badge: null},
  {badge: null},
  {badge: <Users size={12} />},
  {badge: <Tv size={12} />},
  {badge: <Tv size={12} />},
  {badge: null},
  {badge: <Megaphone size={12} />},
  {badge: null},
  {badge: <Megaphone size={12} />},
  {badge: null},
  {badge: null},
];

export const ExploreScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col">
      <div className="flex items-center gap-3 px-6 pb-4 pt-6">
        <WhatsevrLogo size={40} />
        <div className="flex flex-1 items-center gap-3 rounded-full border border-gray-300 bg-white px-5 py-3">
          <span className="flex-1 text-lg text-gray-400">Explore Whatsevr...</span>
          <Search size={20} className="text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-8 border-b border-gray-200 px-6 pb-3">
        {tabs.map((tab, index) => (
          <div key={tab} className="relative pb-2">
            <span className={index === 0 ? 'text-xl font-semibold text-gray-900' : 'text-xl text-gray-400'}>
              {tab}
            </span>
            {index === 0 && <div className="absolute -bottom-[13px] left-0 h-1 w-full rounded-full bg-blue-500" />}
          </div>
        ))}
      </div>

      <div className="grid flex-1 auto-rows-max grid-cols-3 content-start gap-1 overflow-hidden p-1">
        {tiles.map((tile, index) => (
          <PlaceholderPhoto key={index} aspectClassName="aspect-square" badge={tile.badge} />
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
