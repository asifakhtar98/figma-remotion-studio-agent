import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Home,
  Shuffle,
  LayoutGrid,
  Headphones,
  Wallet,
  User,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700'],
});

const navItems = [
  {id: 'home', label: 'Home', icon: Home, active: false},
  {id: 'random', label: 'Random', icon: Shuffle, active: true},
  {id: 'one2one', label: 'One2One', icon: LayoutGrid, active: false},
  {id: 'calls', label: 'Calls', icon: Headphones, active: false},
  {id: 'wallet', label: 'Wallet', icon: Wallet, active: false},
  {id: 'profile', label: 'Profile', icon: User, active: false},
];

export const WebRandomMatchScreen: FC = () => {
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

        {/* Sidebar Footer: Loading Balance Pill & Logout */}
        <div className="flex flex-col gap-2 px-1">
          <div className="w-full py-2.5 px-4 rounded-xl border border-zinc-200/90 bg-white flex items-center justify-center shadow-2xs">
            <span className="text-sm font-semibold text-zinc-400">...</span>
          </div>
          <button className="text-left text-xs font-medium text-zinc-500 hover:text-zinc-800 px-1 mt-1 transition-colors">
            Log out
          </button>
        </div>
      </aside>

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Dot Grid Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Centered Action Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg px-6 -mt-12">
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Random video chat
          </h1>
          <p className="text-sm text-zinc-500 font-normal mt-2.5 leading-relaxed">
            Sessions shorter than 30 seconds are refunded automatically.
          </p>
          <p className="text-sm text-zinc-500 font-normal mt-1 leading-relaxed">
            You have a free spin — this match costs you nothing.
          </p>
          <button className="mt-7 bg-[#27272a] hover:bg-zinc-900 text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer">
            START MATCHING
          </button>
        </div>
      </main>
    </AbsoluteFill>
  );
};
