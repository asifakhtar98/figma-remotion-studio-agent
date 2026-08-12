import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Home,
  Shuffle,
  LayoutGrid,
  Headphones,
  Wallet,
  User,
  ChevronDown,
  User as UserIcon,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700'],
});

const navItems = [
  {id: 'home', label: 'Home', icon: Home, active: false},
  {id: 'random', label: 'Random', icon: Shuffle, active: false},
  {id: 'one2one', label: 'One2One', icon: LayoutGrid, active: true},
  {id: 'calls', label: 'Calls', icon: Headphones, active: false},
  {id: 'wallet', label: 'Wallet', icon: Wallet, active: false},
  {id: 'profile', label: 'Profile', icon: User, active: false},
];

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
  },
  {
    id: '2',
    name: 'Kavya Reddy',
    title: 'Breathe in calm, breathe out chaos',
    tag: 'New host',
    country: 'IN',
    age: 28,
    profession: 'Yoga Instructor',
    location: 'Hyderabad, Telangana',
    rateFrom: 'from ₹0.35 / min',
    callDetail: 'voice · ₹0.70 on video',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
  },
  {
    id: '3',
    name: 'Riya Banerjee',
    title: 'Classical dancer, modern thinker',
    tag: 'New host',
    country: 'IN',
    age: 24,
    profession: 'Dance Instructor',
    location: 'Kolkata, West Bengal',
    rateFrom: 'from ₹0.25 / min',
    callDetail: 'voice · ₹0.50 on video',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
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
  },
  {
    id: '5',
    name: 'Ananya Roy',
    title: 'Warm conversations & evening music',
    tag: 'New host',
    country: 'IN',
    age: 23,
    profession: 'Singer & Artist',
    location: 'Mumbai, Maharashtra',
    rateFrom: 'from ₹0.40 / min',
    callDetail: 'voice · ₹0.80 on video',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
  },
  {
    id: '6',
    name: 'Sneha Kapoor',
    title: 'Books, travel & life advice',
    tag: 'New host',
    country: 'IN',
    age: 26,
    profession: 'Content Creator',
    location: 'Delhi, India',
    rateFrom: 'from ₹0.50 / min',
    callDetail: 'voice · ₹1.00 on video',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&q=80',
    status: 'Away',
    gender: 'Female',
  },
];

export const WebOne2OneScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#ffffff'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-zinc-900"
    >
      {/* ── Left Sidebar Navigation (240px) ── */}
      <aside className="w-[240px] h-full bg-white border-r border-zinc-200/90 flex flex-col justify-between p-6 z-20 shrink-0">
        <div className="flex flex-col gap-7">
          {/* Logo & Brand Header */}
          <div className="flex flex-col px-1">
            <div className="flex items-center gap-0">
              <span className="text-xl font-bold tracking-tight text-zinc-900">
                Whats
              </span>
              <span className="text-xl font-bold tracking-tight text-[#0088ff]">
                Evr
              </span>
            </div>
            <span className="text-[10px] font-semibold text-zinc-400 tracking-[0.18em] uppercase mt-1">
              YOURONES
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-[#f4f4f5] text-zinc-900 font-semibold'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-medium'
                  }`}
                >
                  <IconComponent
                    size={18}
                    className={item.active ? 'text-zinc-900' : 'text-zinc-500'}
                    strokeWidth={2}
                  />
                  <span className="text-sm tracking-tight">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-2 px-1">
          <div className="w-full py-2.5 px-4 rounded-xl border border-zinc-200/90 bg-white flex items-center justify-center shadow-2xs">
            <span className="text-sm font-semibold text-zinc-900">₹1,000.00</span>
          </div>
          <button className="text-left text-xs font-medium text-zinc-500 hover:text-zinc-800 px-1 mt-1 transition-colors">
            Log out
          </button>
        </div>
      </aside>

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-white flex flex-col overflow-hidden">
        {/* Dot Grid Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Scrollable Content Container */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 overflow-y-auto h-full">
          {/* Header Row */}
          <div className="flex items-start justify-between w-full max-w-[1240px]">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
                One2One
              </h1>
              <p className="text-sm text-zinc-500 font-normal mt-1">
                Connect 1:1 — price per minute is always shown.
              </p>
            </div>
            <button className="bg-[#27272a] hover:bg-zinc-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-2xs transition-colors">
              Quick match
            </button>
          </div>

          {/* Search Row */}
          <div className="flex items-center gap-3 mt-6 w-full max-w-[1240px]">
            <div className="flex-1 bg-white border border-zinc-200/90 rounded-xl px-4 py-3 shadow-2xs flex items-center">
              <input
                type="text"
                placeholder="What do you feel like talking about?"
                className="w-full bg-transparent text-sm text-zinc-800 placeholder-zinc-400 outline-none font-normal"
                readOnly
              />
            </div>
            <button className="bg-[#27272a] hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-2xs transition-colors">
              Search
            </button>
          </div>

          {/* Filters + Creators Layout */}
          <div className="flex flex-row gap-6 mt-6 w-full max-w-[1240px]">
            {/* Left Filter Panel (220px) */}
            <div className="w-[220px] bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-2xs flex flex-col gap-4 shrink-0 h-fit">
              <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
                FILTERS
              </span>

              {/* Filter 1: Country */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium">Country</span>
                <div className="bg-white border border-zinc-200/90 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-zinc-800 font-medium">Any</span>
                  <ChevronDown size={16} className="text-zinc-400" />
                </div>
              </div>

              {/* Filter 2: Language */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium">Language</span>
                <div className="bg-white border border-zinc-200/90 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-zinc-800 font-medium">Any</span>
                  <ChevronDown size={16} className="text-zinc-400" />
                </div>
              </div>

              {/* Filter 3: State */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-400 font-medium">State</span>
                <div className="bg-[#f4f4f5] border border-zinc-200/60 rounded-lg px-3 py-2">
                  <span className="text-sm text-zinc-400 font-medium">Any</span>
                </div>
              </div>

              {/* Filter 4: Call type */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium">Call type</span>
                <div className="bg-white border border-zinc-200/90 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-zinc-800 font-medium">Any</span>
                  <ChevronDown size={16} className="text-zinc-400" />
                </div>
              </div>

              {/* Filter 5: Price / min (₹) */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium">Price / min (₹)</span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white border border-zinc-200/90 rounded-lg px-3 py-1.5">
                    <span className="text-sm text-zinc-400">Min</span>
                  </div>
                  <span className="text-xs text-zinc-400">–</span>
                  <div className="flex-1 bg-white border border-zinc-200/90 rounded-lg px-3 py-1.5">
                    <span className="text-sm text-zinc-400">Max</span>
                  </div>
                </div>
              </div>

              {/* Filter 6: Availability */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-zinc-500 font-medium">Availability</span>
                <div className="bg-white border border-zinc-200/90 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-zinc-800 font-medium">Anyone</span>
                  <ChevronDown size={16} className="text-zinc-400" />
                </div>
              </div>

              {/* Filter 7: Premium only */}
              <div className="flex items-center gap-2.5 mt-1">
                <div className="w-4 h-4 rounded bg-[#27272a] flex items-center justify-center text-white text-[10px]">
                  ✓
                </div>
                <span className="text-xs font-semibold text-zinc-800">
                  Premium only
                </span>
              </div>
            </div>

            {/* Right Creator Cards Grid (4 columns) */}
            <div className="flex-1 grid grid-cols-4 gap-4">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-2xs flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-[4/5] bg-[#3f3f46] overflow-hidden flex items-center justify-center">
                    {creator.isPlaceholder ? (
                      <div className="w-24 h-24 rounded-full bg-zinc-600/70 flex items-center justify-center">
                        <UserIcon size={56} className="text-zinc-400" />
                      </div>
                    ) : (
                      <Img
                        src={creator.avatar ?? ''}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Top Status Badges */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-zinc-900 text-[11px] font-semibold">
                      {creator.status}
                    </div>
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold">
                      {creator.gender}
                    </div>

                    {/* Bottom Rate Banner */}
                    <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-xs py-1.5 px-3 text-center text-white text-xs font-semibold tracking-wide">
                      {creator.rateFrom}
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-4 flex flex-col justify-between flex-1 gap-2">
                    <div className="flex flex-col">
                      {creator.title ? (
                        <h3 className="text-sm font-bold text-zinc-900 leading-snug line-clamp-2">
                          {creator.title}
                        </h3>
                      ) : (
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-zinc-900">
                            {creator.name}
                          </h3>
                          <span className="text-xs text-zinc-400 font-medium">
                            {creator.country}
                          </span>
                        </div>
                      )}

                      {creator.title && creator.name && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-zinc-500 font-medium">
                            {creator.name}
                          </span>
                          <span className="text-xs text-zinc-400 font-medium">
                            {creator.country}
                          </span>
                        </div>
                      )}

                      <span className="text-xs text-[#0088ff] font-medium mt-0.5">
                        {creator.tag}
                      </span>

                      {creator.age && creator.profession && (
                        <span className="text-xs text-zinc-500 font-normal mt-1">
                          {creator.age} · {creator.profession}
                        </span>
                      )}
                      {creator.location && (
                        <span className="text-xs text-zinc-500 font-normal">
                          {creator.location}
                        </span>
                      )}

                      <span className="text-xs text-zinc-500 font-normal mt-1">
                        {creator.callDetail}
                      </span>
                    </div>

                    {/* Ring Button */}
                    <button className="w-full py-2 bg-[#27272a] hover:bg-zinc-800 text-white font-semibold text-xs rounded-xl shadow-2xs transition-colors mt-2 text-center">
                      Ring
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
