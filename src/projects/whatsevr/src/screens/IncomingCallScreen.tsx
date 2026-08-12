import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Phone, PhoneOff, Mic, Volume2, ShieldCheck, Sparkles} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const CALLER_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80';

export const IncomingCallScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#090d16'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-100 relative"
    >
      {/* ── Blurred Caller Photo Backdrop ── */}
      <div className="absolute inset-0">
        <Img
          src={CALLER_AVATAR}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(35px) brightness(0.4)',
            transform: 'scale(1.2)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,13,22,0.85) 0%, rgba(9,13,22,0.4) 40%, rgba(9,13,22,0.7) 70%, rgba(9,13,22,0.98) 100%)',
          }}
        />
      </div>

      {/* ── Top Status Label ── */}
      <div className="relative z-10 flex flex-col items-center pt-24 gap-3">
        <span className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-extrabold tracking-[0.2em] uppercase text-sky-400 flex items-center gap-2">
          <Sparkles size={14} />
          WhatsEvr Voice Call
        </span>
      </div>

      {/* ── Caller Identity ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center -mt-10 gap-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping" />
          <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border-4 border-slate-700/80 shadow-2xl">
            <Img src={CALLER_AVATAR} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-5xl font-black text-white tracking-tight leading-tight">
            Priya Sharma
          </h1>
          <p className="text-xl font-bold text-emerald-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Incoming Voice Call • ₹0.50 / min
          </p>
        </div>
      </div>

      {/* ── Secondary Quick Controls ── */}
      <div className="relative z-10 flex items-center justify-center gap-20 pb-12">
        <div className="flex flex-col items-center gap-3">
          <button className="w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white">
            <Mic size={26} />
          </button>
          <span className="text-xs font-extrabold text-slate-400">Mute</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white">
            <Volume2 size={26} />
          </button>
          <span className="text-xs font-extrabold text-slate-400">Speaker</span>
        </div>
      </div>

      {/* ── Primary Accept / Decline Actions ── */}
      <div className="relative z-10 flex items-center justify-between px-20 pb-20">
        <div className="flex flex-col items-center gap-3">
          <button className="w-[88px] h-[88px] rounded-full bg-rose-600 shadow-2xl shadow-rose-600/40 flex items-center justify-center text-white hover:bg-rose-500 transition-all cursor-pointer">
            <PhoneOff size={36} />
          </button>
          <span className="text-base font-extrabold text-slate-300">Decline</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button className="w-[88px] h-[88px] rounded-full bg-emerald-500 shadow-2xl shadow-emerald-500/40 flex items-center justify-center text-white hover:bg-emerald-400 transition-all cursor-pointer">
            <Phone size={36} className="fill-white" />
          </button>
          <span className="text-base font-extrabold text-emerald-400">Accept</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
