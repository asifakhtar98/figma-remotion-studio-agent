import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  Bell,
  Search,
  PlusCircle,
  TrendingUp,
  Eye,
  Users,
  DollarSign,
  Zap,
  Sparkles,
  Video,
  Radio,
  FileText,
  Palette,
  Calendar,
  ChevronRight,
  Home,
  Compass,
  Briefcase,
  User,
  Flame,
  ArrowUpRight,
  Layers,
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';
import {ContentThumbnailCard} from '../components/ContentThumbnailCard';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const AVATAR_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80';

export const CreatorDashboardScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Top Header Navigation Bar ── */}
      <div className="px-8 pt-10 pb-5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between shadow-xs sticky top-0 z-30">
        <DemoPlatformLogo size={46} />

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              readOnly
              placeholder="Search analytics, posts..."
              className="w-48 py-2.5 pl-9 pr-4 rounded-xl bg-slate-100/90 text-xs font-semibold text-slate-600 placeholder:text-slate-400 border border-slate-200/60"
            />
            <Search size={14} className="absolute left-3 top-3 text-slate-400" />
          </div>

          <button className="p-3 rounded-2xl bg-slate-100 text-slate-700 relative border border-slate-200/60">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
          </button>
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-indigo-600 shadow-sm shrink-0 relative">
            <Img src={AVATAR_URL} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
          </div>
        </div>
      </div>

      {/* ── Scrollable Body Content ── */}
      <div className="flex-1 px-8 py-8 flex flex-col gap-8">
        {/* Welcome & Earnings Hero Banner */}
        <div className="relative p-8 rounded-[32px] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white shadow-2xl overflow-hidden border border-indigo-500/20">
          <div className="absolute right-0 top-0 w-[420px] h-[420px] bg-indigo-600/20 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full filter blur-3xl translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-extrabold text-[11px] uppercase tracking-wider">
                <Sparkles size={14} className="text-amber-400" />
                <span>Creator Pro Pass • VIP Member</span>
              </div>
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 bg-slate-900/60 px-3 py-1 rounded-xl border border-slate-800">
                <Calendar size={13} className="text-indigo-400" /> Aug 2026 Summary
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tight leading-tight">
                  Good evening, Sarah! 👋
                </h2>
                <p className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                  Your channel impressions are up{' '}
                  <span className="text-emerald-400 font-extrabold flex items-center gap-0.5">
                    <TrendingUp size={14} /> +28.4%
                  </span>{' '}
                  this week.
                </p>
              </div>

              <div className="text-right bg-slate-900/80 p-4 px-6 rounded-2xl border border-slate-800/90 shadow-xl backdrop-blur-md">
                <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Est. Monthly Revenue
                </div>
                <div className="text-4xl font-black text-amber-400 tracking-tight mt-1">
                  $4,892.50
                </div>
                <div className="text-xs text-emerald-400 font-bold mt-1 flex items-center justify-end gap-1">
                  <ArrowUpRight size={14} strokeWidth={2.5} /> +$840 vs last month
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Grid Stats */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Eye size={22} className="stroke-[2.2]" />}
            label="Total Views"
            value="142.8K"
            trend="+14.2%"
            subtext="this week"
          />
          <StatCard
            icon={<Users size={22} className="stroke-[2.2]" />}
            label="Active Subscribers"
            value="28.4K"
            trend="+8.9%"
            subtext="net new"
          />
          <StatCard
            icon={<Zap size={22} className="stroke-[2.2]" />}
            label="Engagement Rate"
            value="6.4%"
            trend="+1.2%"
            subtext="avg / post"
          />
          <StatCard
            icon={<DollarSign size={22} className="stroke-[2.2]" />}
            label="RPM (Yield / 1k)"
            value="$4.85"
            trend="+3.4%"
            subtext="global avg"
          />
        </div>

        {/* Quick Creator Studio Toolbar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              STUDIO QUICK ACTIONS
            </span>
            <span className="text-xs font-bold text-indigo-600">Shortcuts</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              {icon: <Video size={22} className="text-indigo-600" />, label: 'Upload Video', color: 'indigo'},
              {icon: <Radio size={22} className="text-rose-600" />, label: 'Go Live Now', color: 'rose'},
              {icon: <Palette size={22} className="text-amber-600" />, label: 'Launch Poster', color: 'amber'},
              {icon: <Calendar size={22} className="text-emerald-600" />, label: 'Content Plan', color: 'emerald'},
            ].map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center justify-center gap-2.5 p-4.5 rounded-[22px] bg-white border border-slate-200/90 shadow-xs text-slate-800 group"
              >
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  {action.icon}
                </div>
                <span className="text-xs font-extrabold tracking-tight text-center leading-tight">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Content Stream */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                RECENT CONTENT & PERFORMANCE
              </span>
              <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">
                4 Items
              </span>
            </div>
            <button className="text-xs font-extrabold text-indigo-600 flex items-center gap-0.5">
              View All Content <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-3.5">
            <ContentThumbnailCard
              thumbnailUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop&q=80"
              title="Building a 3D Canvas in React & Tailwind — Full Breakdown"
              views="48.2K"
              likes="3.4K"
              comments="289"
              timeAgo="2 hours ago"
              status="Published"
              platforms={['youtube', 'instagram', 'linkedin']}
              duration="14:20"
            />
            <ContentThumbnailCard
              thumbnailUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop&q=80"
              title="10 Designer Habits that Quadrupled My Freelance Income"
              views="12.9K"
              likes="1.1K"
              comments="94"
              timeAgo="1 day ago"
              status="Published"
              platforms={['youtube', 'linkedin']}
              duration="08:45"
            />
            <ContentThumbnailCard
              thumbnailUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&q=80"
              title="AI Workflow Tools Every Creator Needs in 2026"
              views="0"
              likes="0"
              comments="0"
              timeAgo="Tomorrow, 10:00 AM"
              status="Scheduled"
              platforms={['youtube', 'instagram']}
              duration="11:05"
            />
            <ContentThumbnailCard
              thumbnailUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop&q=80"
              title="How I Structure High-Converting SaaS Product Demos"
              views="0"
              likes="0"
              comments="0"
              timeAgo="Drafted 3 hours ago"
              status="Draft"
              platforms={['youtube']}
              duration="06:30"
            />
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom Navigation Bar ── */}
      <div className="h-24 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-8 flex items-center justify-around shadow-2xl sticky bottom-0 z-30">
        {[
          {icon: <Home size={22} />, label: 'Home', active: true},
          {icon: <Compass size={22} />, label: 'Explore', active: false},
          {icon: <PlusCircle size={32} className="text-white fill-indigo-600" />, label: '', active: false},
          {icon: <Briefcase size={22} />, label: 'Monetize', active: false},
          {icon: <User size={22} />, label: 'Profile', active: false},
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 ${
              tab.active ? 'text-indigo-600 scale-105' : 'text-slate-400'
            }`}
          >
            {tab.icon}
            {tab.label && <span className="text-[11px] font-black">{tab.label}</span>}
          </button>
        ))}
      </div>
    </AbsoluteFill>
  );
};

