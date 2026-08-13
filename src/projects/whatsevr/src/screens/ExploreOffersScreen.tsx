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
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const tabs = ['Explore', 'Offers', 'Posts', 'Memories', 'Flicks', 'Wtv'];

const offerPosts = [
  {
    id: '1',
    author: 'ADITYA DEY',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=921&h=900&fit=crop&q=80',
    title: 'Model and Grooming Mentor',
    caption: 'Looking for mentorship and 1:1 creative collaboration in Assam, Guwahati.',
    time: '06 Oct, 2025 • 05:01 AM',
    likes: 124,
    comments: 18,
  },
  {
    id: '2',
    author: 'KAVYA REDDY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=921&h=700&fit=crop&q=80',
    title: 'Yoga Instructor & Mindset Coach',
    caption: 'Join 1:1 morning mindfulness and posture correction sessions live.',
    time: '07 Oct, 2025 • 08:30 AM',
    likes: 256,
    comments: 42,
  },
  {
    id: '3',
    author: 'RIYA BANERJEE',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=921&h=700&fit=crop&q=80',
    title: 'Classical Dance & Performing Artist',
    caption: 'Offering direct 1:1 choreography reviews and stage performance coaching.',
    time: '08 Oct, 2025 • 06:15 PM',
    likes: 310,
    comments: 59,
  },
];

export const ExploreOffersScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Search Header Bar ── */}
      <div className="flex items-center gap-4 px-7 pt-10 pb-4 bg-white border-b border-slate-100">
        <WhatsevrLogo size={48} ringed />
        <div className="flex flex-1 items-center justify-between gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3.5 shadow-2xs">
          <span className="text-lg text-slate-400 font-medium">Explore Offers & Services...</span>
          <Search size={22} className="text-slate-400" />
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="flex items-center gap-8 border-b border-slate-200/90 px-7 pt-3 bg-white overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab === 'Offers';
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

      {/* ── Offers Feed Container (Full Bleed Edge-to-Edge) ── */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-white p-0">
        {offerPosts.map((post) => (
          <div key={post.id} className="flex flex-col w-full bg-white border-b-8 border-slate-100/70">
            {/* Post Media */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
              <Img src={post.banner} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 text-white text-xs font-extrabold shadow-md">
                <Sparkles size={14} />
                <span>{post.title}</span>
              </div>
            </div>

            {/* Author & Header */}
            <div className="flex items-start gap-4 p-5">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-sky-500 shadow-2xs">
                <Img src={post.avatar} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900">{post.author}</span>
                  <CheckCircle2 size={16} className="text-sky-500" />
                </div>
                <p className="text-sm text-slate-700 font-semibold mt-1 leading-snug">
                  {post.caption}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-1">{post.time}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-800">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-6 text-slate-700">
                <div className="flex items-center gap-2 font-bold text-sm cursor-pointer hover:text-rose-500">
                  <Heart size={22} />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm cursor-pointer hover:text-sky-500">
                  <MessageCircle size={22} />
                  <span>{post.comments}</span>
                </div>
                <Send size={20} className="cursor-pointer hover:text-sky-500" />
              </div>
              <Bookmark size={20} className="text-slate-400 cursor-pointer hover:text-slate-800" />
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
