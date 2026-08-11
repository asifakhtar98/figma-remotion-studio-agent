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
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
  User,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

const tabs = ['Explore', 'Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const MODEL_IMAGE_URL =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=921&h=900&fit=crop&q=80';
const SECOND_POST_IMAGE =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=921&h=500&fit=crop&q=80';

export const ExploreOffersScreen: FC = () => {
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
          const isActive = tab === 'Offers';
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

      {/* ── Offers Feed Content ── */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white">

        {/* Post 1 */}
        <div className="flex flex-col">

          {/* Post Image Container */}
          <div className="relative w-full" style={{height: 720}}>
            <Img src={MODEL_IMAGE_URL} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            {/* Category Badge on Bottom Right */}
            <div className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-[#2196F3] text-white text-sm font-semibold shadow-md">
              <WhatsevrLogo size={18} />
              <span>Model and Grooming Mentor</span>
            </div>
          </div>

          {/* Post Caption & Author info */}
          <div className="flex items-start gap-4 px-6 pt-5 pb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 shadow-2xs">
              <Img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900 leading-snug">
                Looking for a girlfriend in Assam, Guwahati.
              </h2>
              <p className="text-sm font-semibold text-gray-700 mt-0.5">ADITYA DEY</p>
              <p className="text-xs text-gray-400 mt-0.5">06 Oct, 2025 05:01 AM</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between px-6 py-2 border-b border-gray-100">
            <div className="flex items-center gap-6 text-gray-800">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <Heart size={26} />
                <span className="text-base font-bold">2</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <MessageCircle size={26} />
                <span className="text-base font-bold">2</span>
              </div>
              <Send size={24} className="cursor-pointer" />
            </div>

            <div className="flex items-center gap-4 text-gray-800">
              <Bookmark size={24} className="cursor-pointer" />
              <MoreVertical size={24} className="cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Post 2 Snippet */}
        <div className="w-full relative mt-2" style={{height: 300}}>
          <Img src={SECOND_POST_IMAGE} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
