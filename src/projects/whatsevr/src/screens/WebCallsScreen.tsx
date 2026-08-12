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
  {id: 'random', label: 'Random', icon: Shuffle, active: false},
  {id: 'one2one', label: 'One2One', icon: LayoutGrid, active: false},
  {id: 'calls', label: 'Calls', icon: Headphones, active: true},
  {id: 'wallet', label: 'Wallet', icon: Wallet, active: false},
  {id: 'profile', label: 'Profile', icon: User, active: false},
];

interface CallLog {
  id: string;
  name: string;
  type: string;
  duration: string;
  date: string;
}

const callLogs: CallLog[] = [
  {
    id: '1',
    name: 'A real time emotional councillor',
    type: 'Direct call',
    duration: 'Not connected',
    date: '21 Jun, 14:30',
  },
  {
    id: '2',
    name: 'Boby',
    type: 'Direct call',
    duration: '10s',
    date: '20 Jun, 17:08',
  },
  {
    id: '3',
    name: 'performance marketer',
    type: 'Direct call',
    duration: '29s',
    date: '20 Jun, 17:07',
  },
  {
    id: '4',
    name: 'Want to Meet New People',
    type: 'Direct call',
    duration: '40s',
    date: '20 Jun, 17:06',
  },
  {
    id: '5',
    name: 'Boby',
    type: 'Direct call',
    duration: '169s',
    date: '19 Jun, 17:39',
  },
  {
    id: '6',
    name: 'Boby',
    type: 'Direct call',
    duration: 'Not connected',
    date: '17 Jun, 16:49',
  },
  {
    id: '7',
    name: 'Boby',
    type: 'Direct call',
    duration: 'Not connected',
    date: '17 Jun, 16:48',
  },
  {
    id: '8',
    name: 'Dev Tester 2',
    type: 'Direct call',
    duration: 'Not connected',
    date: '11 Jun, 08:11',
  },
  {
    id: '9',
    name: 'Dev Tester 2',
    type: 'Direct call',
    duration: 'Not connected',
    date: '11 Jun, 08:11',
  },
  {
    id: '10',
    name: 'performance marketer',
    type: 'Direct call',
    duration: '115s',
    date: '3 Jun, 11:42',
  },
  {
    id: '11',
    name: 'Performance Marketer Googleads',
    type: 'Direct call',
    duration: 'Not connected',
    date: '2 Jun, 11:20',
  },
];

export const WebCallsScreen: FC = () => {
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
            <span className="text-sm font-semibold text-zinc-900">₹10,000.00</span>
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
          {/* Header Title & Subtitle */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
              Calls
            </h1>
            <p className="text-sm text-zinc-500 font-normal mt-1">
              Every call you have taken here — random matches, live rooms and direct calls.
            </p>
          </div>

          {/* Call History Card List */}
          <div className="mt-7 w-full max-w-[840px] bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-2xs flex flex-col divide-y divide-zinc-100">
            {callLogs.map((log) => (
              <div
                key={log.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-zinc-50/60 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-zinc-900">
                    {log.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-normal mt-0.5">
                    {log.type} · {log.duration}
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-medium">
                  {log.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};
