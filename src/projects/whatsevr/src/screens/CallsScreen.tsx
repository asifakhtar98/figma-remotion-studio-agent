import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  ArrowLeft,
  User,
  CheckCircle2,
  XCircle,
  PhoneCall,
  RotateCcw,
  Search,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const BOBY_AVATAR =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&q=80';
const USER1_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80';
const USER2_AVATAR =
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=160&h=160&fit=crop&q=80';
const KAVYA_AVATAR =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';

export const CallsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-8 pt-10 pb-5 bg-white border-b border-slate-200/90">
        <div className="flex items-center gap-5">
          <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
            <ArrowLeft size={24} />
          </button>
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Call Logs</h1>
            <span className="text-xs text-slate-500 font-medium mt-0.5">Random matches & 1:1 direct calls</span>
          </div>
        </div>
        <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
          <Search size={20} />
        </button>
      </div>

      {/* ── Call Logs List (Expanded with 11 items across dates) ── */}
      <div className="flex flex-1 flex-col px-8 py-6 gap-6 bg-slate-50">
        {/* ── 21 JUNE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider px-1">
            21 JUNE 2026
          </span>
          <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                <Img src={USER1_AVATAR} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-rose-500 text-white rounded-full p-1 border border-white">
                  <XCircle size={12} />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-base font-extrabold text-slate-900 truncate max-w-[240px]">
                  A Real Time Emotional Councillor
                </h4>
                <span className="text-xs text-rose-600 font-semibold mt-0.5 flex items-center gap-1">
                  <RotateCcw size={12} />
                  Not Connected (Auto-Refunded)
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-bold">02:30 PM</span>
          </div>
        </div>

        {/* ── 20 JUNE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider px-1">
            20 JUNE 2026
          </span>

          <div className="flex flex-col gap-3">
            {/* Boby Item */}
            <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                  <Img src={BOBY_AVATAR} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 border border-white">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-extrabold text-slate-900">Boby</h4>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    Direct 1:1 Call · 10 seconds
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 font-bold">05:08 PM</span>
                <button className="p-2.5 rounded-xl bg-slate-900 text-white">
                  <PhoneCall size={16} />
                </button>
              </div>
            </div>

            {/* Performance Marketer Item */}
            <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 border border-slate-200">
                  <User size={28} />
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 border border-white">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-base font-extrabold text-slate-900 truncate max-w-[240px]">
                    Performance Marketer
                  </h4>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    Direct 1:1 Call · 29 seconds
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-bold">05:07 PM</span>
            </div>

            {/* Want to Meet New Item */}
            <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                  <Img src={USER2_AVATAR} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 border border-white">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-base font-extrabold text-slate-900 truncate max-w-[240px]">
                    Want to Meet New People
                  </h4>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    Random Video Match · 40 seconds
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-bold">05:06 PM</span>
            </div>
          </div>
        </div>

        {/* ── 19 JUNE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider px-1">
            19 JUNE 2026
          </span>
          <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                <Img src={BOBY_AVATAR} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 border border-white">
                  <CheckCircle2 size={12} />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-extrabold text-slate-900">Boby</h4>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  Direct 1:1 Call · 2m 49s
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-bold">05:39 PM</span>
          </div>
        </div>

        {/* ── 17 JUNE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider px-1">
            17 JUNE 2026
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                  <Img src={BOBY_AVATAR} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 bg-rose-500 text-white rounded-full p-1 border border-white">
                    <XCircle size={12} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-extrabold text-slate-900">Boby</h4>
                  <span className="text-xs text-rose-600 font-semibold mt-0.5">
                    Not Connected (Auto-Refunded)
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-bold">04:49 PM</span>
            </div>
          </div>
        </div>

        {/* ── 11 JUNE ── */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider px-1">
            11 JUNE 2026
          </span>
          <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                <Img src={KAVYA_AVATAR} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 border border-white">
                  <CheckCircle2 size={12} />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-extrabold text-slate-900">Kavya Reddy</h4>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  1:1 Video Consultation · 4m 12s
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-bold">08:11 AM</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
