import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  Search,
  Send,
  HeartHandshake,
  LayoutGrid,
  MessageCircle,
  Bell,
  Star,
  ChevronUp,
  FileText,
} from 'lucide-react';
import {Avatar} from '../components/Avatar';
import {BottomNavBar} from '../components/BottomNavBar';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const COVER_MEDIA_URL =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=921&h=480&fit=crop&q=80';
const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80';

const suggestions = [
  {
    name: 'HYPER GAMING',
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=160&h=160&fit=crop&q=80',
  },
  {
    name: 'Jafrid',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
  },
  {
    name: 'Kabir',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&q=80',
  },
];

const profileTabs = ['Wtv', 'Flicks', 'Offerings', 'Pdf', 'Tags'];

const pdfItems = [
  {
    title: 'Testing_Portfolio_2026.pdf',
    size: '4.2 MB • Updated yesterday',
  },
  {
    title: 'Content_Creation_Guide.pdf',
    size: '1.8 MB • 10 Aug 2026',
  },
  {
    title: 'Media_Kit_Aryan.pdf',
    size: '8.5 MB • 02 Aug 2026',
  },
];

export const ProfileScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900 relative"
    >
      {/* ── Top Header ── */}
      <div className="flex items-center justify-between px-7 pt-10 pb-4 bg-white border-b border-slate-100 z-10">
        <div className="flex items-center gap-2">
          <WhatsevrLogo size={42} ringed />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            Whats<span className="text-sky-500">Evr</span>
          </span>
        </div>
        <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
          <Search size={20} />
        </button>
      </div>

      {/* ── Scrollable Body Area ── */}
      <div className="flex-1 flex flex-col pb-24">
        {/* ── Cover Media Section ── */}
        <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden shrink-0">
          <Img src={COVER_MEDIA_URL} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>

        {/* ── Profile Identity Header Card ── */}
        <div className="relative z-10 -mt-16 px-7 flex flex-col gap-5">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-md flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar size={80} online src={USER_AVATAR_URL} className="ring-4 ring-white shadow-md" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-slate-900">Aryan</h2>
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-sm font-semibold text-sky-600">@wtv.aryan675</span>
                  <span className="text-xs text-slate-500 font-medium mt-1">Testing Portfolio • Content Creator</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
                  <Send size={20} />
                </button>
                <button className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900">
                  <HeartHandshake size={20} />
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
              <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-xl font-black text-slate-900">3</span>
                <span className="text-xs text-slate-500 font-bold block">Likes</span>
              </div>
              <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-xl font-black text-slate-900">2</span>
                <span className="text-xs text-slate-500 font-bold block">Followers</span>
              </div>
              <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-xl font-black text-slate-900">1</span>
                <span className="text-xs text-slate-500 font-bold block">Connections</span>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                PEOPLE YOU MIGHT KNOW
              </span>
              <ChevronUp size={18} className="text-sky-500" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {suggestions.map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-center"
                >
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs">
                    <Img src={person.avatarUrl} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 truncate max-w-full">
                    {person.name}
                  </span>
                  <button className="w-full py-1.5 rounded-xl bg-slate-900 text-white text-xs font-extrabold shadow-2xs hover:bg-slate-800 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="flex items-center justify-between border-t border-slate-200/90 pt-4 text-base font-bold text-slate-400">
            {profileTabs.map((tab, index) => (
              <div key={tab} className="relative pb-2 cursor-pointer">
                <span className={index === 3 ? 'text-slate-900 font-extrabold' : 'hover:text-slate-700'}>
                  {tab}
                </span>
                {index === 3 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-sky-500" />
                )}
              </div>
            ))}
          </div>

          {/* PDF Documents List (Populated) */}
          <div className="flex flex-col gap-3">
            {pdfItems.map((pdf) => (
              <div
                key={pdf.title}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 shrink-0">
                    <FileText size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{pdf.title}</span>
                    <span className="text-xs text-slate-400 font-medium">{pdf.size}</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={24} />},
          {icon: <HeartHandshake size={24} />},
          {icon: <LayoutGrid size={24} />},
          {icon: <MessageCircle size={24} />},
          {icon: <Bell size={24} />},
          {icon: <Avatar size={28} />, active: true},
        ]}
      />
    </AbsoluteFill>
  );
};
