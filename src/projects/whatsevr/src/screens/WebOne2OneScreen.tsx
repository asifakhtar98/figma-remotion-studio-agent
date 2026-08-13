import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Search,
  Filter,
  ChevronDown,
  User as UserIcon,
  Star,
  Zap,
  PhoneCall,
  Video,
  Check,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

interface Creator {
  id: string;
  name?: string;
  title?: string;
  tag: string;
  country: string;
  age?: number;
  profession?: string;
  location?: string;
  rateFrom: string;
  callDetail: string;
  avatar?: string;
  isPlaceholder?: boolean;
  status: 'Away' | 'Live';
  gender: string;
  rating?: string;
  reviews?: number;
}

const creators: Creator[] = [
  {
    id: '1',
    name: 'Cfg Host',
    tag: 'New host',
    country: 'IN',
    rateFrom: 'from ₹0.50 / min',
    callDetail: 'voice · ₹1.00 on video',
    isPlaceholder: true,
    status: 'Away',
    gender: 'Female',
    rating: '4.7',
    reviews: 28,
  },
  {
    id: '2',
    name: 'Kavya Reddy',
    title: 'Breathe in calm, breathe out chaos',
    tag: 'Top Host',
    country: 'IN',
    age: 28,
    profession: 'Yoga Instructor',
    location: 'Hyderabad, Telangana',
    rateFrom: 'from ₹0.35 / min',
    callDetail: 'voice · ₹0.70 on video',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&q=80',
    status: 'Live',
    gender: 'Female',
    rating: '4.9',
    reviews: 142,
  },
  {
    id: '3',
    name: 'Riya Banerjee',
    title: 'Classical dancer, modern thinker',
    tag: 'Featured',
    country: 'IN',
    age: 24,
    profession: 'Dance Instructor',
    location: 'Kolkata, West Bengal',
    rateFrom: 'from ₹0.25 / min',
    callDetail: 'voice · ₹0.50 on video',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&q=80',
    status: 'Live',
    gender: 'Female',
    rating: '4.8',
    reviews: 98,
  },
  {
    id: '4',
    name: 'Meera Joshi',
    title: 'Colours, fabrics, and filter coffee',
    tag: 'New host',
    country: 'IN',
    age: 24,
    profession: 'Fashion Designer',
    location: 'Jaipur, Rajasthan',
    rateFrom: 'from ₹0.30 / min',
    callDetail: 'voice · ₹0.60 on video',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
    rating: '5.0',
    reviews: 64,
  },
  {
    id: '5',
    name: 'Ananya Roy',
    title: 'Warm conversations & evening music',
    tag: 'Trending',
    country: 'IN',
    age: 23,
    profession: 'Singer & Artist',
    location: 'Mumbai, Maharashtra',
    rateFrom: 'from ₹0.40 / min',
    callDetail: 'voice · ₹0.80 on video',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&q=80',
    status: 'Live',
    gender: 'Female',
    rating: '4.9',
    reviews: 112,
  },
  {
    id: '6',
    name: 'Sneha Kapoor',
    title: 'Books, travel & life advice',
    tag: 'Popular',
    country: 'IN',
    age: 26,
    profession: 'Content Creator',
    location: 'Delhi, India',
    rateFrom: 'from ₹0.50 / min',
    callDetail: 'voice · ₹1.00 on video',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
    rating: '4.8',
    reviews: 210,
  },
];

export const WebOne2OneScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-row w-[1920px] h-[1580px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="one2one" />

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-slate-50 flex flex-col overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 h-full gap-7">
          {/* Header Row */}
          <div className="flex items-start justify-between w-full max-w-[1320px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  One2One Creator Directory
                </h1>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 border border-sky-500/20 text-xs font-bold">
                  48 Creators Available Now
                </span>
              </div>
              <p className="text-base text-slate-500 font-medium mt-1">
                Connect 1:1 with verified hosts — clear price per minute shown upfront.
              </p>
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2">
              <Zap size={16} className="fill-white" />
              Quick Match
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex items-center gap-4 w-full max-w-[1320px]">
            <div className="flex-1 bg-white border border-slate-200/90 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
              <Search size={20} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search hosts by name, topic, language or category (e.g. Yoga, Music)..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none font-medium"
                readOnly
              />
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-sm transition-all flex items-center gap-2">
              Search
            </button>
          </div>

          {/* Main Layout Grid: Filters (240px) + Creator Cards Grid */}
          <div className="flex flex-row gap-7 w-full max-w-[1320px]">
            {/* Left Filter Panel */}
            <div className="w-[240px] bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex flex-col gap-5 shrink-0 h-fit">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-1.5">
                  <SlidersHorizontal size={14} className="text-sky-500" />
                  FILTERS
                </span>
                <span className="text-[11px] font-bold text-sky-600 cursor-pointer">
                  Reset
                </span>
              </div>

              {/* Filter 1: Country */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-600 font-bold">Country</span>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:border-slate-300">
                  <span className="text-sm text-slate-800 font-semibold flex items-center gap-2">
                    <Globe size={14} className="text-slate-400" />
                    Any Country
                  </span>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              {/* Filter 2: Language */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-600 font-bold">Language</span>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:border-slate-300">
                  <span className="text-sm text-slate-800 font-semibold">English & Hindi</span>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              {/* Filter 3: State */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-400 font-bold">State</span>
                <div className="bg-slate-100/70 border border-slate-200/60 rounded-xl px-3.5 py-2.5">
                  <span className="text-sm text-slate-400 font-medium">All States</span>
                </div>
              </div>

              {/* Filter 4: Call Type */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-600 font-bold">Call Type</span>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:border-slate-300">
                  <span className="text-sm text-slate-800 font-semibold flex items-center gap-2">
                    <Video size={14} className="text-sky-500" />
                    Video & Voice
                  </span>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              {/* Filter 5: Price Range */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-600 font-bold">Price / min (₹)</span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-center">
                    <span className="text-xs text-slate-500 font-bold">₹0.20</span>
                  </div>
                  <span className="text-xs text-slate-400 font-bold">–</span>
                  <div className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-center">
                    <span className="text-xs text-slate-500 font-bold">₹2.00</span>
                  </div>
                </div>
              </div>

              {/* Filter 6: Availability */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-600 font-bold">Availability</span>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:border-slate-300">
                  <span className="text-sm text-slate-800 font-semibold">Online / Live Now</span>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              {/* Filter 7: Premium Only */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-5 h-5 rounded-md bg-slate-900 flex items-center justify-center text-white text-xs font-extrabold">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-800">
                  Verified Hosts Only
                </span>
              </div>
            </div>

            {/* Right Creators Grid (3 Columns) */}
            <div className="flex-1 grid grid-cols-3 gap-6">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/4.5] bg-slate-800 overflow-hidden flex items-center justify-center">
                    {creator.isPlaceholder ? (
                      <div className="w-24 h-24 rounded-full bg-slate-700/80 border border-slate-600 flex items-center justify-center">
                        <UserIcon size={52} className="text-slate-400" />
                      </div>
                    ) : (
                      <Img
                        src={creator.avatar ?? ''}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    {/* Top Status Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-extrabold">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          creator.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                        }`}
                      />
                      <span>{creator.status}</span>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-extrabold">
                      {creator.gender}
                    </div>

                    {/* Rating Pill */}
                    {creator.rating && (
                      <div className="absolute bottom-12 right-3 px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold flex items-center gap-1 shadow-sm">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span>{creator.rating}</span>
                      </div>
                    )}

                    {/* Bottom Rate Banner */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent pt-6 pb-2.5 px-4 text-center text-white text-xs font-extrabold tracking-wide">
                      {creator.rateFrom}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold text-slate-900 truncate">
                          {creator.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold">
                          {creator.country}
                        </span>
                      </div>

                      {creator.title && (
                        <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2 mt-1">
                          "{creator.title}"
                        </p>
                      )}

                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 text-[10px] font-extrabold">
                          {creator.tag}
                        </span>
                        {creator.age && creator.profession && (
                          <span className="text-[11px] text-slate-500 font-medium">
                            {creator.age} yrs · {creator.profession}
                          </span>
                        )}
                      </div>

                      {creator.location && (
                        <span className="text-[11px] text-slate-400 font-medium mt-1">
                          📍 {creator.location}
                        </span>
                      )}

                      <span className="text-xs text-slate-500 font-medium mt-2 pt-2 border-t border-slate-100">
                        {creator.callDetail}
                      </span>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-3 bg-slate-900 hover:bg-sky-600 text-white font-extrabold text-xs rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 mt-1">
                      <PhoneCall size={14} />
                      <span>Ring Host Now</span>
                    </button>
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
