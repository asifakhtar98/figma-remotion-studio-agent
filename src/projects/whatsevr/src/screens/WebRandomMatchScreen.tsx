import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Shuffle,
  ShieldCheck,
  Video,
  Mic,
  Settings,
  Sparkles,
  Zap,
  RotateCcw,
  Globe,
  User,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

export const WebRandomMatchScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#0f172a'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-slate-100"
    >
      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="random" balance="₹1,000.00" />

      {/* ── Main Viewport Matching Hub ── */}
      <main className="relative flex-1 h-full bg-slate-950 flex flex-col items-center justify-between p-10 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between w-full max-w-[1100px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Random Video Chat
              </h1>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                2,450 Users Online Now
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium mt-1">
              Connect 1:1 with random people worldwide instantly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
              <Globe size={14} className="text-sky-400" />
              <span>Matching Region: India</span>
            </div>
            <button className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Video Preview Camera Stage Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[960px] my-auto">
          <div className="relative w-full aspect-[16/9] max-h-[520px] rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
            {/* Camera Viewport Placeholder Graphic */}
            <div className="relative w-full h-full rounded-2xl bg-slate-900/90 border border-slate-800/80 overflow-hidden flex items-center justify-center">
              {/* User Self Camera Preview Box */}
              <div className="absolute top-4 right-4 w-44 h-28 rounded-xl bg-slate-950 border border-slate-700/80 overflow-hidden shadow-lg flex flex-col items-center justify-center z-20">
                <Img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=150&fit=crop&q=80"
                  className="w-full h-full object-cover opacity-80"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  You (Rahul)
                </span>
              </div>

              {/* Central Radar Pulse Animation Graphic */}
              <div className="flex flex-col items-center justify-center z-10 text-center p-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping" />
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 border-4 border-slate-950 shadow-xl flex items-center justify-center text-white">
                    <Shuffle size={44} className="animate-spin-slow" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  Ready to Start Video Chat
                </h2>
                <p className="text-sm text-slate-400 font-medium max-w-md mt-2 leading-relaxed">
                  Sessions shorter than 30 seconds are refunded automatically.
                </p>

                {/* Free Spin Pill */}
                <div className="mt-4 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                  <Sparkles size={14} className="text-sky-400" />
                  <span>You have a free spin — this match costs you nothing.</span>
                </div>
              </div>

              {/* Bottom Camera Controls Bar */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-6 py-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 z-20">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold">
                    <Video size={15} className="text-emerald-400" />
                    <span>Camera: HD On</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold">
                    <Mic size={15} className="text-emerald-400" />
                    <span>Mic: On</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  <span>Safe & Moderated 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="mt-8 flex flex-col items-center">
            <button className="group relative bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-lg tracking-wider uppercase px-12 py-5 rounded-2xl shadow-xl hover:shadow-sky-500/25 transition-all duration-200 cursor-pointer flex items-center gap-3">
              <Zap size={22} className="fill-white" />
              <span>START MATCHING NOW</span>
              <Shuffle size={20} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <span className="text-xs text-slate-400 font-medium mt-3">
              ⚡ Instant connection • Average queue time: &lt; 2 seconds
            </span>
          </div>
        </div>

        {/* Bottom Security Footer */}
        <div className="relative z-10 flex items-center justify-between w-full max-w-[1100px] pt-4 border-t border-slate-900 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> 100% Verified Community
            </span>
            <span className="flex items-center gap-1.5">
              <RotateCcw size={14} className="text-sky-400" /> 30-Second Instant Refund Policy
            </span>
          </div>
          <span>WhatsEvr Match Engine v2.4</span>
        </div>
      </main>
    </AbsoluteFill>
  );
};
