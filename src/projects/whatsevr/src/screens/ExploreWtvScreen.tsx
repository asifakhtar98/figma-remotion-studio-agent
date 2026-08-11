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
  Play,
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

const tabs = ['Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const VIDEO_1_THUMB =
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=921&h=550&fit=crop&q=80';
const VIDEO_1_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80';

const VIDEO_2_THUMB =
  'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=921&h=550&fit=crop&q=80';
const VIDEO_2_AVATAR =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80';

export const ExploreWtvScreen: FC = () => {
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
          const isActive = tab === 'Wtv';
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

      {/* ── Video Feed Content ── */}
      <div className="flex flex-1 flex-col gap-6 overflow-hidden bg-white py-2">

        {/* Video Card 1 */}
        <div className="flex flex-col border-b border-gray-100 pb-4">
          <div className="relative w-full flex items-center justify-center cursor-pointer" style={{height: 480}}>
            <Img src={VIDEO_1_THUMB} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            {/* Play Button Overlay */}
            <div className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-black/50 text-white backdrop-blur-sm">
              <Play size={32} fill="white" className="ml-1" />
            </div>
          </div>

          <div className="flex items-start gap-4 px-6 pt-4 pb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Img src={VIDEO_1_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">Gaurav Gogoi</h3>
              <p className="text-sm text-gray-400 mt-0.5">Nasiruddin Ahmed · 07:53 AM 20 Dec 2025</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-1">
            <div className="flex items-center gap-6 text-gray-800">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <Heart size={26} />
                <span className="text-base font-bold">5</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <MessageCircle size={26} />
                <span className="text-base font-bold">1</span>
              </div>
              <Send size={24} className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <Bookmark size={24} className="cursor-pointer" />
              <MoreVertical size={24} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="flex flex-col border-b border-gray-100 pb-4">
          <div className="relative w-full flex items-center justify-center cursor-pointer" style={{height: 480}}>
            <Img src={VIDEO_2_THUMB} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            {/* Play Button Overlay */}
            <div className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-black/50 text-white backdrop-blur-sm">
              <Play size={32} fill="white" className="ml-1" />
            </div>
          </div>

          <div className="flex items-start gap-4 px-6 pt-4 pb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Img src={VIDEO_2_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                Video Editing: 1 Minute Nature Documentary
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">Mayuresh Hendre · 01:34 PM 05 Jul 2025</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-1">
            <div className="flex items-center gap-6 text-gray-800">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <Heart size={26} />
                <span className="text-base font-bold">33</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <MessageCircle size={26} />
                <span className="text-base font-bold">6</span>
              </div>
              <Send size={24} className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <Bookmark size={24} className="cursor-pointer" />
              <MoreVertical size={24} className="cursor-pointer" />
            </div>
          </div>
        </div>

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
