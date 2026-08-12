import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Send, Heart, Pencil, Users, ShieldCheck, Sparkles, MessageSquare} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const CREATOR_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80';

const tabs = ['About', 'Services', 'Media', 'Videos', 'Offers'];

const COMMUNITY_COVER_URL =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=921&h=500&fit=crop&q=80';

const members = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
];

export const CommunityDetailScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Community Cover Media Banner ── */}
      <div className="relative w-full h-[360px] bg-slate-900 overflow-hidden shrink-0">
        <Img src={COMMUNITY_COVER_URL} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* ── Community Header Details Card ── */}
      <div className="relative z-10 -mt-16 px-7 flex flex-col gap-5">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Hello Sir Testing Community
            </h1>
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700">
                <Send size={20} />
              </button>
              <button className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-rose-600">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-500 shadow-2xs">
                <Img src={CREATOR_AVATAR} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Devak Verma</span>
                <span className="text-xs font-semibold text-sky-600">@wtvc.hellosiriamt_254</span>
              </div>
            </div>

            {/* Members Stack */}
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-2">
                {members.map((url, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-2xs">
                    <Img src={url} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                1,240 Members
              </span>
            </div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shadow-md transition-all flex items-center justify-center gap-2">
            <MessageSquare size={20} />
            <span>Join Community Chat</span>
          </button>
        </div>

        {/* ── Tabs Navigation ── */}
        <div className="flex items-center gap-8 border-b border-slate-200/90 pt-2 pb-1 bg-transparent overflow-x-auto text-base font-bold text-slate-400">
          {tabs.map((tab, index) => (
            <div key={tab} className="relative pb-3 cursor-pointer">
              <span className={index === 0 ? 'text-slate-900 font-extrabold' : 'hover:text-slate-700'}>
                {tab}
              </span>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-sky-500" />
              )}
            </div>
          ))}
        </div>

        {/* ── About Tab Content ── */}
        <div className="flex flex-col bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm gap-5">
          <div className="flex flex-col gap-2 pb-4 border-b border-slate-100">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Status</h3>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold w-fit">
              <Sparkles size={14} className="text-emerald-600" />
              <span>Verified Creator Community</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-4 border-b border-slate-100">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Services Offered</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200">
                1:1 Career Mentorship
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200">
                Video Code Reviews
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200">
                Q&A Webinars
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Location</h3>
            <p className="text-sm font-semibold text-slate-900">Agra, Uttar Pradesh, India</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Created On</h3>
            <p className="text-sm font-semibold text-slate-900">29 Nov 2025</p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
