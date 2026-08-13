import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Shuffle,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  Clock,
  Star,
  PhoneCall,
  Zap,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const featuredCreators = [
  {
    id: '2',
    name: 'Kavya Reddy',
    title: 'Yoga Instructor & Wellness Coach',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80',
    rate: '₹0.35 / min',
    rating: '4.9',
    calls: '240+',
    status: 'LIVE',
  },
  {
    id: '3',
    name: 'Riya Banerjee',
    title: 'Classical Dancer & Performer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&q=80',
    rate: '₹0.25 / min',
    rating: '4.8',
    calls: '180+',
    status: 'LIVE',
  },
  {
    id: '4',
    name: 'Meera Joshi',
    title: 'Fashion & Lifestyle Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80',
    rate: '₹0.30 / min',
    rating: '5.0',
    calls: '95+',
    status: 'LIVE',
  },
];

export const WebHomeScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-row overflow-hidden select-none text-slate-900"
    >
      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="home" />

      {/* ── Main Dashboard Viewport ── */}
      <main className="relative flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Dashboard Content */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 gap-8">
          {/* Header Welcome Bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Hi Rahul Sharma
                </h1>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  1,420 Creators Live Now
                </span>
              </div>
              <p className="text-base text-slate-500 font-medium mt-1">
                What do you feel like today? Pick a match mode or discover creators.
              </p>
            </div>

            {/* Quick Balance Refill Banner */}
            <div className="flex items-center gap-4 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Available Credits
                </span>
                <span className="text-lg font-extrabold text-slate-900">₹1,000.00</span>
              </div>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5">
                <Zap size={14} className="fill-white" />
                Add Money
              </button>
            </div>
          </div>

          {/* Core Feature Action Cards (2 Columns Asymmetric) */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Card 1: Random Match (Primary Dark Gradient Banner) */}
            <div className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 shadow-xl flex flex-col justify-between min-h-[260px] group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/30 transition-all duration-300" />
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles size={13} />
                    1 Free Spin Ready
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Shuffle size={20} />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-5">
                  Random Video Match
                </h2>
                <p className="text-sm text-slate-300 font-normal mt-2 leading-relaxed max-w-md">
                  Start now — talk to someone new right away. Sessions shorter than 30 seconds are refunded automatically.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-700/50">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Verified Profiles
                  </span>
                  <span className="flex items-center gap-1">
                    <Video size={14} className="text-sky-400" />
                    HD Video & Voice
                  </span>
                </div>
                <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2">
                  <span>Start Matching</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Card 2: One2One Discovery (Clean Elevated White Tile) */}
            <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between min-h-[260px] group hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {featuredCreators.map((c) => (
                      <div
                        key={c.id}
                        className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-xs"
                      >
                        <Img src={c.avatar} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600 shadow-xs">
                      +45
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                    <Users size={20} />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-5">
                  One2One Host Directory
                </h2>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed max-w-md">
                  Browse live creators, yoga mentors, artists & influencers. Check per-minute rates and connect directly 1:1.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                    Yoga
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                    Music
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                    Advice
                  </span>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm transition-all flex items-center gap-2">
                  <span>Browse Hosts</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Live Hosts Row */}
          <div className="flex flex-col gap-4 w-full mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Featured Live Hosts
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Active
                </span>
              </div>
              <button className="text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1">
                View All <ArrowRight size={15} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {featuredCreators.map((creator) => (
                <div
                  key={creator.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
                >
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                    <Img src={creator.avatar} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-slate-900 truncate">
                        {creator.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span>{creator.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                      {creator.title}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-extrabold text-sky-600">
                        {creator.rate}
                      </span>
                      <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors flex items-center gap-1">
                        <PhoneCall size={12} />
                        Ring
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};
