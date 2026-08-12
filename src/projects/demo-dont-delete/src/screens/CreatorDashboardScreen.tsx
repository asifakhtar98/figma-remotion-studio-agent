import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
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
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';
import {ContentThumbnailCard} from '../components/ContentThumbnailCard';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800', '900'],
});

const AVATAR_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80';

export const CreatorDashboardScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Top Header Navigation Bar ── */}
      <div className="px-8 pt-10 pb-6 bg-white border-b border-slate-200/80 flex items-center justify-between shadow-2xs">
        <DemoPlatformLogo size={44} />

        <div className="flex items-center gap-4">
          <button className="p-3.5 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors relative">
            <Bell size={24} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
          </button>
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-sm shrink-0">
            <Img src={AVATAR_URL} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── Scrollable Body Content ── */}
      <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8">
        {/* Welcome & Earnings Banner */}
        <div className="relative p-7 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-xs uppercase tracking-widest">
                <Sparkles size={16} />
                <span>Creator Pro Pass</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight mt-1">
                Good evening, Sarah! 👋
              </h2>
              <p className="text-sm font-medium text-slate-300 mt-1">
                Your channel impressions are up <span className="text-emerald-400 font-bold">+28%</span> this week.
              </p>
            </div>

            <div className="text-right">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Est. Monthly Earnings
              </div>
              <div className="text-4xl font-black text-amber-400 tracking-tight mt-1">
                $4,892.50
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1 flex items-center justify-end gap-1">
                <TrendingUp size={14} /> +$840 vs last month
              </div>
            </div>
          </div>
        </div>

        {/* 4 Grid Stats */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Eye size={22} />}
            label="Total Views"
            value="142.8K"
            trend="+14.2%"
          />
          <StatCard
            icon={<Users size={22} />}
            label="Subscribers"
            value="28.4K"
            trend="+8.9%"
          />
          <StatCard
            icon={<Zap size={22} />}
            label="Engagement"
            value="6.4%"
            trend="+1.2%"
          />
          <StatCard
            icon={<DollarSign size={22} />}
            label="RPM (Avg)"
            value="$4.85"
            trend="+3.4%"
          />
        </div>

        {/* Quick Creator Studio Toolbar */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            QUICK ACTIONS
          </span>
          <div className="grid grid-cols-4 gap-3">
            {[
              {icon: <Video size={22} className="text-indigo-600" />, label: 'Upload'},
              {icon: <Radio size={22} className="text-rose-600" />, label: 'Go Live'},
              {icon: <Palette size={22} className="text-amber-600" />, label: 'Poster'},
              {icon: <Calendar size={22} className="text-emerald-600" />, label: 'Schedule'},
            ].map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:bg-slate-50 transition-all text-slate-800"
              >
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  {action.icon}
                </div>
                <span className="text-xs font-extrabold">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Content Stream */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              RECENT CONTENT & STATUS
            </span>
            <span className="text-xs font-extrabold text-indigo-600 flex items-center gap-0.5 cursor-pointer">
              View All <ChevronRight size={14} />
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <ContentThumbnailCard
              thumbnailUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop&q=80"
              title="Building a 3D Canvas in React & Tailwind — Full Breakdown"
              views="48.2K"
              likes="3.4K"
              comments="289"
              timeAgo="2 hours ago"
              status="Published"
              platforms={['youtube', 'instagram', 'linkedin']}
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
            />
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom Navigation Bar ── */}
      <div className="h-24 bg-white border-t border-slate-200/90 px-8 flex items-center justify-around shadow-lg">
        {[
          {icon: <Home size={24} />, label: 'Home', active: true},
          {icon: <Compass size={24} />, label: 'Explore', active: false},
          {icon: <PlusCircle size={32} className="text-indigo-600" />, label: '', active: false},
          {icon: <Briefcase size={24} />, label: 'Monetize', active: false},
          {icon: <User size={24} />, label: 'Profile', active: false},
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 ${
              tab.active ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.icon}
            {tab.label && <span className="text-[11px] font-extrabold">{tab.label}</span>}
          </button>
        ))}
      </div>
    </AbsoluteFill>
  );
};
