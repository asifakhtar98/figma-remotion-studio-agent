import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  Search,
  Filter,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Video,
  User,
  ShieldCheck,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

interface CallLog {
  id: string;
  name: string;
  type: string;
  duration: string;
  date: string;
  status: 'connected' | 'missed';
}

const callLogs: CallLog[] = [
  {
    id: '1',
    name: 'A Real Time Emotional Councillor',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '21 Jun, 14:30',
    status: 'missed',
  },
  {
    id: '2',
    name: 'Boby',
    type: 'Direct 1:1 Call',
    duration: '10s',
    date: '20 Jun, 17:08',
    status: 'connected',
  },
  {
    id: '3',
    name: 'Performance Marketer',
    type: 'Direct 1:1 Call',
    duration: '29s',
    date: '20 Jun, 17:07',
    status: 'connected',
  },
  {
    id: '4',
    name: 'Want to Meet New People',
    type: 'Random Match Call',
    duration: '40s',
    date: '20 Jun, 17:06',
    status: 'connected',
  },
  {
    id: '5',
    name: 'Boby',
    type: 'Direct 1:1 Call',
    duration: '169s (2m 49s)',
    date: '19 Jun, 17:39',
    status: 'connected',
  },
  {
    id: '6',
    name: 'Boby',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '17 Jun, 16:49',
    status: 'missed',
  },
  {
    id: '7',
    name: 'Boby',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '17 Jun, 16:48',
    status: 'missed',
  },
  {
    id: '8',
    name: 'Dev Tester 2',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '11 Jun, 08:11',
    status: 'missed',
  },
  {
    id: '9',
    name: 'Dev Tester 2',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '11 Jun, 08:11',
    status: 'missed',
  },
  {
    id: '10',
    name: 'Performance Marketer',
    type: 'Direct 1:1 Call',
    duration: '115s (1m 55s)',
    date: '3 Jun, 11:42',
    status: 'connected',
  },
  {
    id: '11',
    name: 'Performance Marketer Googleads',
    type: 'Direct 1:1 Call',
    duration: 'Not connected',
    date: '2 Jun, 11:20',
    status: 'missed',
  },
];

export const WebCallsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="calls" balance="₹10,000.00" />

      {/* ── Main Viewport Area ── */}
      <main className="relative flex-1 h-full bg-slate-50 flex flex-col overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Scrollable Content Container */}
        <div className="relative z-10 flex flex-col p-10 pl-14 pr-12 overflow-y-auto h-full gap-7 max-w-[1200px]">
          {/* Header Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Call History & Log
                </h1>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 text-xs font-bold border border-sky-500/20">
                  11 Calls Recorded
                </span>
              </div>
              <p className="text-base text-slate-500 font-medium mt-1">
                Every call taken here — random matches, live room consultations, and 1:1 direct calls.
              </p>
            </div>

            {/* Quick Auto-Refund Banner */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700">
              <RotateCcw size={16} className="text-emerald-500" />
              <span>Calls &lt;30s auto-refunded to wallet</span>
            </div>
          </div>

          {/* Quick Stats Summary Strip */}
          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                <PhoneCall size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  TOTAL CALLS
                </span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5">
                  11 Calls
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  TOTAL TALK TIME
                </span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5">
                  6m 03s
                </span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <RotateCcw size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  REFUNDED / MISSED
                </span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5">
                  6 Auto-Refunded
                </span>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs">
                All Calls
              </button>
              <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors">
                Direct 1:1
              </button>
              <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors">
                Random Match
              </button>
              <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors">
                Missed / Refunded
              </button>
            </div>

            <div className="w-72 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs flex items-center gap-2">
              <Search size={16} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search call logs..."
                className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none font-medium"
                readOnly
              />
            </div>
          </div>

          {/* Call History Card List Container */}
          <div className="w-full bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm flex flex-col divide-y divide-slate-100">
            {callLogs.map((log) => {
              const isConnected = log.status === 'connected';
              return (
                <div
                  key={log.id}
                  className="px-7 py-4.5 flex items-center justify-between hover:bg-slate-50/80 transition-all duration-150"
                >
                  <div className="flex items-center gap-4">
                    {/* User Avatar Placeholder */}
                    <div className="relative w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0">
                      <User size={20} />
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center ${
                          isConnected ? 'bg-emerald-500' : 'bg-amber-400'
                        }`}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-slate-900 tracking-tight">
                          {log.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                            log.type.includes('Random')
                              ? 'bg-sky-50 text-sky-600'
                              : 'bg-indigo-50 text-indigo-600'
                          }`}
                        >
                          {log.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
                        {isConnected ? (
                          <span className="flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 size={13} />
                            Connected · {log.duration}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-amber-600 font-semibold">
                            <XCircle size={13} />
                            Not Connected (Auto-Refunded)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold text-slate-400">
                      {log.date}
                    </span>

                    <button className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5">
                      <PhoneCall size={13} />
                      <span>Re-dial</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};
