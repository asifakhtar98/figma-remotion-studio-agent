import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Sparkles,
  Crown,
  Heart,
  Globe,
  MapPin,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  MessageSquare,
  Award,
  Zap,
  Home,
  Compass,
  PlusCircle,
  Briefcase,
  User,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const topSupporters = [
  {
    name: 'Elena Rostova',
    handle: '@elena.design',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80',
    tier: 'Platinum Tier',
    totalSpent: '$1,480.00',
    badges: ['Super Supporter', 'Top Tipper'],
    joinedAgo: 'Member since 2024',
  },
  {
    name: 'Marcus Chen',
    handle: '@marcus_builds',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    tier: 'Gold Tier',
    totalSpent: '$920.00',
    badges: ['VIP Member'],
    joinedAgo: 'Member since 2025',
  },
  {
    name: 'Sophia Williams',
    handle: '@sophia_tech',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80',
    tier: 'Gold Tier',
    totalSpent: '$740.00',
    badges: ['Early Backer'],
    joinedAgo: 'Member since 2025',
  },
];

const geoDistribution = [
  {country: 'United States', percentage: 44, count: '15.3K', flag: '🇺🇸'},
  {country: 'United Kingdom', percentage: 22, count: '7.6K', flag: '🇬🇧'},
  {country: 'Germany', percentage: 14, count: '4.8K', flag: '🇩🇪'},
  {country: 'Canada', percentage: 11, count: '3.8K', flag: '🇨🇦'},
  {country: 'Australia', percentage: 9, count: '3.1K', flag: '🇦🇺'},
];

export const AudienceAnalyticsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="px-8 pt-10 pb-5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between shadow-xs sticky top-0 z-30">
        <button className="flex items-center gap-2 text-slate-600 font-extrabold text-base hover:text-slate-900 transition-colors">
          <ArrowLeft size={22} />
          <span>Dashboard</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Audience & CRM</h2>
          <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">
            Real-Time Analytics
          </span>
        </div>

        <button className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold border border-slate-200/60">
          <Filter size={18} />
        </button>
      </div>

      {/* ── Scrollable Body Content ── */}
      <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8">
        {/* Audience Overview Hero Card */}
        <div className="relative p-8 rounded-[32px] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white shadow-2xl overflow-hidden border border-indigo-500/20">
          <div className="absolute right-0 top-0 w-[380px] h-[380px] bg-indigo-600/20 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-extrabold text-[11px] uppercase tracking-wider">
                <Users size={14} className="text-indigo-400" />
                <span>Audience Demographics & Loyalty</span>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-900/60 px-3 py-1 rounded-xl border border-slate-800">
                Last 30 Days
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  Total Active Reach
                </div>
                <div className="text-4xl font-black text-white tracking-tight mt-1">
                  34,820 <span className="text-lg font-bold text-slate-400">fans</span>
                </div>
                <p className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp size={14} /> +3,410 net new subscribers (+12.4%)
                </p>
              </div>

              <div className="text-right bg-slate-900/80 p-4 px-5 rounded-2xl border border-slate-800 shadow-lg backdrop-blur-md">
                <div className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider flex items-center justify-end gap-1">
                  <Crown size={12} /> VIP Retention
                </div>
                <div className="text-2xl font-black text-white tracking-tight mt-0.5">
                  94.2%
                </div>
                <div className="text-[10px] text-slate-400 font-bold">1,240 Paid Supporter Tiers</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Key Stat Cards */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Heart size={22} className="stroke-[2.2]" />}
            label="Super Fans"
            value="1,240"
            trend="+18.4%"
            subtext="paid supporters"
          />
          <StatCard
            icon={<ShieldCheck size={22} className="stroke-[2.2]" />}
            label="Avg Watch Loyalty"
            value="78.4%"
            trend="+4.2%"
            subtext="completion rate"
          />
        </div>

        {/* Top Supporters / VIP Fan CRM Leaderboard */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                TOP SUPPORTERS & SPONSOR CRM
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
                VIP Tier
              </span>
            </div>
            <button className="text-xs font-extrabold text-indigo-600 flex items-center gap-0.5 hover:underline">
              Manage All <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {topSupporters.map((fan) => (
              <div
                key={fan.handle}
                className="flex items-center justify-between p-4 rounded-[24px] bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 relative shadow-sm">
                    <Img src={fan.avatar} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                        {fan.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-extrabold text-[10px] border border-amber-200">
                        {fan.tier}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-semibold mt-0.5">
                      {fan.handle} • {fan.joinedAgo}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-black text-emerald-600">{fan.totalSpent}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Lifetime Support
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution Breakdown */}
        <div className="p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-xs flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                Global Geographic Reach
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Top audience countries by viewer density & session duration
              </p>
            </div>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Globe size={18} />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {geoDistribution.map((geo) => (
              <div key={geo.country} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <span className="text-base">{geo.flag}</span>
                    <span>{geo.country}</span>
                  </span>
                  <span className="text-slate-500 font-semibold">
                    {geo.count} ({geo.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    style={{width: `${geo.percentage}%`}}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Fixed Bottom Navigation Bar ── */}
      <div className="h-24 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-8 flex items-center justify-around shadow-2xl sticky bottom-0 z-30">
        {[
          {icon: <Home size={22} />, label: 'Home', active: false},
          {icon: <Compass size={22} />, label: 'Explore', active: false},
          {icon: <PlusCircle size={32} className="text-white fill-indigo-600" />, label: '', active: false},
          {icon: <Briefcase size={22} />, label: 'Monetize', active: false},
          {icon: <User size={22} />, label: 'Profile', active: true},
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 transition-all ${
              tab.active ? 'text-indigo-600 scale-105' : 'text-slate-400 hover:text-slate-600'
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
