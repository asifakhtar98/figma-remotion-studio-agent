import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Phone, PhoneOff, Mic, Volume2} from 'lucide-react';

const {fontFamily} = loadFont();

const CALLER_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80';

export const IncomingCallScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#0b1220'}} className="flex flex-col overflow-hidden">
      {/* ── Blurred caller photo backdrop ── */}
      <div className="absolute inset-0">
        <Img
          src={CALLER_AVATAR}
          style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(30px) brightness(0.55)', transform: 'scale(1.15)'}}
        />
        <div
          className="absolute inset-0"
          style={{background: 'linear-gradient(180deg, rgba(11,18,32,0.75) 0%, rgba(11,18,32,0.35) 38%, rgba(11,18,32,0.55) 70%, rgba(11,18,32,0.92) 100%)'}}
        />
      </div>

      {/* ── Top status label ── */}
      <div className="relative z-10 flex flex-col items-center pt-20 gap-2">
        <span className="text-[15px] font-semibold tracking-[0.2em] uppercase text-white/60">
          Whatsevr Voice Call
        </span>
      </div>

      {/* ── Caller identity, dominant focal point ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center -mt-10 gap-6">
        <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white/15 shadow-2xl">
          <Img src={CALLER_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[40px] font-bold text-white tracking-tight leading-tight">Priya Sharma</h1>
          <p className="text-[18px] font-medium text-white/60">Incoming voice call…</p>
        </div>
      </div>

      {/* ── Secondary quick controls ── */}
      <div className="relative z-10 flex items-center justify-center gap-16 pb-10">
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-14 h-14 rounded-full bg-white/12 backdrop-blur flex items-center justify-center">
            <Mic size={22} className="text-white/85" />
          </div>
          <span className="text-[13px] font-medium text-white/60">Mute</span>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-14 h-14 rounded-full bg-white/12 backdrop-blur flex items-center justify-center">
            <Volume2 size={22} className="text-white/85" />
          </div>
          <span className="text-[13px] font-medium text-white/60">Speaker</span>
        </div>
      </div>

      {/* ── Primary accept / decline actions ── */}
      <div className="relative z-10 flex items-center justify-between px-16 pb-16">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[76px] h-[76px] rounded-full bg-[#ef4444] shadow-lg shadow-red-500/30 flex items-center justify-center cursor-pointer">
            <PhoneOff size={30} className="text-white" />
          </div>
          <span className="text-[15px] font-semibold text-white/85">Decline</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-[76px] h-[76px] rounded-full bg-[#22c55e] shadow-lg shadow-green-500/30 flex items-center justify-center cursor-pointer">
            <Phone size={30} className="text-white fill-white" />
          </div>
          <span className="text-[15px] font-semibold text-white/85">Accept</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
