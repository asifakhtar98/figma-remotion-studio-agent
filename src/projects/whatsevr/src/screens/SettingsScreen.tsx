import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  ArrowLeft,
  Pencil,
  UserPlus,
  Lock,
  ArrowLeftRight,
  UserCheck,
  Wallet,
  LogIn,
  Asterisk,
  Smartphone,
  HardDrive,
  Bell,
  Briefcase,
  Star,
  FileText,
  Shield,
  Users,
  Receipt,
  Info,
  LogOut,
  UserX,
  ChevronRight,
  User,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';

const communities = [
  {
    name: 'Testing Hub',
    avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=120&fit=crop&q=80',
    color: 'border-rose-500',
  },
  {
    name: 'Yoga & Mind',
    avatar: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=120&h=120&fit=crop&q=80',
    color: 'border-sky-500',
  },
  {
    name: 'Music Lounge',
    avatar: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=120&h=120&fit=crop&q=80',
    color: 'border-amber-500',
  },
  {
    name: 'Design Talk',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&q=80',
    color: 'border-emerald-500',
  },
];

export const SettingsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Top Header ── */}
      <div className="flex items-center gap-5 px-8 pt-10 pb-5 bg-white border-b border-slate-200/90">
        <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
      </div>

      {/* ── Settings Content Body ── */}
      <div className="flex flex-col px-8 py-6 gap-6 bg-slate-50">

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-2xs">
              <Img src={USER_AVATAR_URL} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Aryan</h2>
              <p className="text-sm text-slate-500 font-semibold">@wtv.aryan675</p>
            </div>
          </div>
          <button className="p-3 text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer transition-colors">
            <Pencil size={24} />
          </button>
        </div>

        {/* Your Communities Section (Expanded) */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            YOUR ACTIVE COMMUNITIES
          </h3>
          <div className="flex items-center gap-5 overflow-x-auto pb-1">
            <div className="flex flex-col items-center gap-1.5 cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-dashed border-slate-300 text-slate-700 shadow-2xs hover:border-slate-400">
                <UserPlus size={26} />
              </div>
              <span className="text-xs font-bold text-slate-600">Create</span>
            </div>

            {communities.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 ${c.color} p-0.5 shadow-2xs`}>
                  <Img src={c.avatar} className="w-full h-full rounded-full object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-800 truncate max-w-[70px]">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            ACCOUNT & PREFERENCES
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-slate-900"><Lock size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Public Portfolio</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Grow your business and content creator journey</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-slate-900"><ArrowLeftRight size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Default Experience</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Which side of the app opens first</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700">YourOnes</span>
                <ChevronRight size={20} className="text-slate-400" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-slate-900"><UserCheck size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Switch Account</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Add another account or change the signed-in one</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-1">
            WALLET & BILLING
          </h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-slate-900"><Wallet size={22} /></div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Wallet Management</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Balance, top-up and transactions</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
