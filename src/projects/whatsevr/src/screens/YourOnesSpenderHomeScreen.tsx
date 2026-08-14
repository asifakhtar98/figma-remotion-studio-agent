import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Search,
  Zap,
  SlidersHorizontal,
  MessageSquare,
  MoreVertical,
  Phone,
  User,
  LayoutGrid,
  Shuffle,
  Compass,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import {BottomNavBar} from '../components/BottomNavBar';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800', '900'],
});

const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';

interface HostCardData {
  id: string;
  letter: string;
  photoUrl?: string;
  headline: string;
  name: string;
  age: number;
  profession: string;
  city: string;
  status: 'Away' | 'Online';
  badge: string;
  rate: string;
}

const hosts: HostCardData[] = [
  {
    id: '1',
    letter: 'K',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop&q=80',
    headline: 'Maybe we’re looking for each other',
    name: 'Kavya Gupta',
    age: 24,
    profession: 'Content Creator',
    city: 'Goa',
    status: 'Away',
    badge: 'New host',
    rate: 'from ₹0.25/min',
  },
  {
    id: '2',
    letter: 'R',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&h=240&fit=crop&q=80',
    headline: 'Here for something real',
    name: 'Riya Singh',
    age: 24,
    profession: 'Fashion Designer',
    city: 'Chandigarh',
    status: 'Away',
    badge: 'New host',
    rate: 'from ₹0.25/min',
  },
  {
    id: '3',
    letter: 'M',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&h=240&fit=crop&q=80',
    headline: 'Looking for my kind of person',
    name: 'Meera Kapoor',
    age: 18,
    profession: 'HR Manager',
    city: 'Maharashtra',
    status: 'Away',
    badge: 'New host',
    rate: 'from ₹0.25/min',
  },
  {
    id: '4',
    letter: 'A',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=240&h=240&fit=crop&q=80',
    headline: 'Late night music chats & friendly vibe',
    name: 'Ananya Verma',
    age: 22,
    profession: 'Vocalist & Host',
    city: 'Mumbai',
    status: 'Online',
    badge: 'Trending Host',
    rate: 'from ₹0.50/min',
  },
  {
    id: '5',
    letter: 'S',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&fit=crop&q=80',
    headline: 'Exploring deep conversations & art',
    name: 'Sneha Roy',
    age: 25,
    profession: 'Graphic Artist',
    city: 'Delhi',
    status: 'Online',
    badge: 'Top Host',
    rate: 'from ₹0.40/min',
  },
];

export const YourOnesSpenderHomeScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col select-none text-slate-900"
    >
      {/* ── Top Header ── */}
      <div className="relative flex items-center justify-between px-7 pt-12 pb-4 bg-white border-b border-slate-100 shrink-0">
        <div className="w-9" />
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">YourOnes</h1>
        <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 overflow-hidden shadow-2xs">
          <User size={20} />
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="flex flex-col px-7 pt-5 pb-3 gap-3.5 bg-slate-50 shrink-0">
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <Search size={20} className="text-slate-400 shrink-0" />
          <span className="text-sm font-medium text-slate-400 truncate">
            What do you feel like talking about?
          </span>
        </div>

        {/* Action Buttons: Quick Match & Filters */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white text-sm font-bold shadow-xs">
            <Zap size={16} className="fill-white text-white" />
            <span>Quick match</span>
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-2xs">
            <SlidersHorizontal size={16} className="text-slate-700" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* ── Host Cards List ── */}
      <div className="flex-1 flex flex-col px-7 py-3 gap-4 bg-slate-50 overflow-hidden">
        {hosts.map((host) => (
          <div
            key={host.id}
            className="flex flex-col p-5 bg-white rounded-3xl border border-slate-200/90 shadow-2xs gap-4 relative"
          >
            {/* Top row: Avatar + Profile Details */}
            <div className="flex items-start gap-4">
              {/* Thumbnail with styled fallback / letter block */}
              <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-2xs shrink-0 flex items-center justify-center overflow-hidden relative">
                <span className="text-4xl font-black text-slate-400">{host.letter}</span>
              </div>

              {/* Text Information */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {host.headline}
                </h3>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-bold text-slate-800 truncate">{host.name}</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MessageSquare size={16} />
                    <MoreVertical size={16} />
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-semibold mt-0.5">
                  {host.age} • {host.profession} • {host.city}
                </p>

                {/* Status Badges */}
                <div className="flex items-center gap-2 mt-2.5">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        host.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-400'
                      }`}
                    />
                    <span>{host.status}</span>
                  </div>

                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-100 text-xs font-bold">
                    <Sparkles size={12} className="text-sky-500 fill-sky-500" />
                    <span>{host.badge}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Rate + Call Button */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-base font-black text-sky-600">{host.rate}</span>

              <button className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 text-white shadow-md">
                <Phone size={24} className="fill-white" />
              </button>
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
          {icon: <HeartHandshake size={24} />},
          {icon: <WhatsevrLogo size={24} />},
        ]}
      />
    </AbsoluteFill>
  );
};
