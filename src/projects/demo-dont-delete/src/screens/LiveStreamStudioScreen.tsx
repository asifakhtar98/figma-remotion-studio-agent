import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  Radio,
  Eye,
  Heart,
  MessageSquare,
  Mic,
  MicOff,
  Video,
  RotateCw,
  Sparkles,
  DollarSign,
  Send,
  X,
  Share2,
  Settings,
  Flame,
  Crown,
  Volume2,
  Gift,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const STREAM_BACKGROUND_URL =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=1600&fit=crop&q=80';

const liveChatMessages = [
  {
    name: 'David K.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80',
    message: 'That canvas rendering speed is insane! 🔥',
    badge: 'VIP Supporter',
    isSuperChat: false,
  },
  {
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
    message: 'Sent $50.00 SuperChat! "Best Remotion tutorial yet! Keep it up Sarah! 🎉"',
    badge: 'Platinum Supporter',
    isSuperChat: true,
    amount: '$50.00',
  },
  {
    name: 'TechGeek99',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&q=80',
    message: 'Can you show how the state updates in real-time?',
    badge: 'Subscriber',
    isSuperChat: false,
  },
  {
    name: 'Sophia Williams',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80',
    message: 'Love the clean light theme controls!',
    badge: 'Gold Supporter',
    isSuperChat: false,
  },
];

export const LiveStreamStudioScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily}}
      className="flex flex-col overflow-hidden select-none text-slate-900 relative bg-slate-100"
    >
      {/* ── Background Live Video Feed ── */}
      <div className="absolute inset-0 z-0">
        <Img src={STREAM_BACKGROUND_URL} className="w-full h-full object-cover brightness-105 contrast-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 via-slate-100/30 to-white/40" />
      </div>

      {/* ── Top Floating HUD Control Bar ── */}
      <div className="relative z-20 px-8 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-rose-600/25 border border-rose-400/40">
            <Radio size={15} />
            <span>LIVE • 01:24:18</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-900 font-extrabold text-xs shadow-xs">
            <Eye size={15} className="text-amber-500" />
            <span>4,820 viewers</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-3 rounded-2xl bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200/80 shadow-xs">
            <Share2 size={20} />
          </button>
          <button className="p-3 rounded-2xl bg-rose-600 text-white border border-rose-500 shadow-md">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* ── Mid Overlay: Stream Health & SuperChat Highlight ── */}
      <div className="relative z-20 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md text-slate-700 text-xs font-extrabold border border-slate-200/80 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>4K 60fps • 8.4 Mbps • Optimal Health</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 backdrop-blur-md text-amber-800 text-xs font-black border border-amber-200 shadow-2xs">
          <Sparkles size={14} className="text-amber-500" />
          <span>$840.00 Live Tips Raised</span>
        </div>
      </div>

      {/* Spacer to push chat and toolbar to bottom */}
      <div className="flex-1" />

      {/* ── Active SuperChat Spotlight Banner ── */}
      <div className="relative z-20 px-8 mb-4">
        <div className="p-4.5 rounded-[24px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 backdrop-blur-xl border border-amber-300 shadow-lg text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-2xl bg-slate-950 text-amber-400 font-black shrink-0 border border-amber-400/40">
              <DollarSign size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-950">
                  PINNED SUPERCHAT
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-950 text-amber-400 text-[10px] font-black">
                  $50.00
                </span>
              </div>
              <p className="text-sm font-black text-slate-950 mt-0.5 leading-snug">
                Elena Rostova: "Best Remotion tutorial yet! Keep it up Sarah! 🎉"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Stream Scrolling Chat Box ── */}
      <div className="relative z-20 px-8 flex flex-col gap-3 max-h-96 mb-6">
        {liveChatMessages.map((msg, i) => (
          <div
            key={i}
            className={`p-3.5 rounded-2xl backdrop-blur-md flex items-start gap-3 border shadow-xs ${
              msg.isSuperChat
                ? 'bg-amber-50/95 border-amber-200 text-slate-900'
                : 'bg-white/90 border-slate-200/90 text-slate-900'
            }`}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
              <Img src={msg.avatar} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-slate-900 truncate">{msg.name}</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">
                  {msg.badge}
                </span>
                {msg.isSuperChat && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black">
                    {msg.amount}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-slate-700 mt-1 leading-normal">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Stream Studio Control Deck ── */}
      <div className="relative z-20 p-8 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 flex flex-col gap-4 shadow-2xl">
        {/* Chat Input Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              readOnly
              placeholder="Send message to live audience..."
              className="w-full py-3.5 pl-4 pr-12 rounded-2xl bg-slate-100/90 text-xs font-semibold text-slate-900 placeholder:text-slate-400 border border-slate-200/80"
            />
            <button className="absolute right-2 top-2 p-2 rounded-xl bg-indigo-600 text-white shadow-2xs">
              <Send size={14} />
            </button>
          </div>

          <button className="p-3.5 rounded-2xl bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/25 flex items-center gap-1">
            <Gift size={18} />
          </button>
        </div>

        {/* Live Hardware & Overlay Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button className="p-4 rounded-2xl bg-slate-100 border border-slate-200/80 text-slate-800 flex flex-col items-center gap-1">
            <Mic size={20} className="text-indigo-600" />
            <span className="text-[10px] font-extrabold">Mic On</span>
          </button>
          <button className="p-4 rounded-2xl bg-slate-100 border border-slate-200/80 text-slate-800 flex flex-col items-center gap-1">
            <Video size={20} className="text-emerald-600" />
            <span className="text-[10px] font-extrabold">4K Cam</span>
          </button>
          <button className="p-4 rounded-2xl bg-slate-100 border border-slate-200/80 text-slate-800 flex flex-col items-center gap-1">
            <RotateCw size={20} className="text-amber-600" />
            <span className="text-[10px] font-extrabold">Flip Cam</span>
          </button>
          <button className="p-4 rounded-2xl bg-slate-100 border border-slate-200/80 text-slate-800 flex flex-col items-center gap-1">
            <Sparkles size={20} className="text-rose-600" />
            <span className="text-[10px] font-extrabold">Filters</span>
          </button>
          <button className="px-6 py-4 rounded-2xl bg-rose-600 text-white font-extrabold text-xs shadow-md shadow-rose-600/30 flex items-center gap-2 border border-rose-500">
            <Radio size={16} />
            <span>End Live</span>
          </button>
        </div>
      </div>
    </AbsoluteFill>
  );
};
