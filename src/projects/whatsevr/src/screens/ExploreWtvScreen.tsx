import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
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

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const tabs = ['Explore', 'Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const videoPosts = [
  {
    id: '1',
    author: 'Gaurav Gogoi',
    subtitle: 'Nasiruddin Ahmed · 07:53 AM 20 Dec 2025',
    thumb: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=921&h=550&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
    likes: 54,
    comments: 12,
  },
  {
    id: '2',
    author: 'Mayuresh Hendre',
    subtitle: 'Video Editing: 1 Minute Nature Documentary · 01:34 PM 05 Jul 2025',
    thumb: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=921&h=550&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
    likes: 128,
    comments: 24,
  },
  {
    id: '3',
    author: 'Kavya Reddy',
    subtitle: '10 Min Morning Yoga & Core Stretch · 08:00 AM 12 Aug 2026',
    thumb: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=921&h=550&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
    likes: 240,
    comments: 45,
  },
];

export const ExploreWtvScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Search Header Bar ── */}
      <div className="flex items-center gap-4 px-7 pt-8 pb-5 bg-white border-b border-slate-100 shrink-0">
        <WhatsevrLogo size={52} ringed />
        <div className="flex flex-1 items-center justify-between gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-4 shadow-2xs">
          <span className="text-lg text-slate-400 font-medium">Explore Wtv Video Content...</span>
          <Search size={22} className="text-slate-400" />
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="flex items-center gap-10 border-b border-slate-200/90 px-8 pt-4 pb-1 bg-white overflow-x-auto shrink-0 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab === 'Wtv';
          return (
            <div key={tab} className="relative pb-4 shrink-0 cursor-pointer">
              <span
                className={
                  isActive
                    ? 'text-xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap'
                    : 'text-xl text-slate-400 font-semibold tracking-tight whitespace-nowrap'
                }
              >
                {tab}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full bg-sky-500 shadow-xs" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Video Feed Container (Full Bleed Edge-to-Edge) ── */}
      <div className="flex flex-col bg-white p-0">
        {videoPosts.map((post) => (
          <div key={post.id} className="flex flex-col w-full bg-white border-b-8 border-slate-100/70">
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900 cursor-pointer group">
              <Img src={post.thumb} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-sky-500 text-white backdrop-blur-md flex items-center justify-center shadow-xl">
                  <Play size={36} fill="white" className="ml-1.5" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                <Img src={post.avatar} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{post.author}</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{post.subtitle}</p>
              </div>
              <MoreVertical size={20} className="text-slate-400" />
            </div>

            <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-6 text-slate-700">
                <div className="flex items-center gap-2 font-bold text-sm cursor-pointer">
                  <Heart size={22} className="text-rose-500" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm cursor-pointer">
                  <MessageCircle size={22} className="text-sky-500" />
                  <span>{post.comments}</span>
                </div>
                <Send size={20} className="cursor-pointer" />
              </div>
              <Bookmark size={20} className="text-slate-400 cursor-pointer" />
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
