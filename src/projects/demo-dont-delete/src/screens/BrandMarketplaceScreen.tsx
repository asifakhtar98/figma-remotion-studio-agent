import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  Award,
  DollarSign,
  Briefcase,
  TrendingUp,
  Search,
  Filter,
  Download,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Send,
  Plus,
  FileText,
  BadgeCheck,
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const AVATAR_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80';

const brandOpportunities = [
  {
    brand: 'Figma',
    logo: '🎨',
    campaign: 'Design Systems 2026 Global Showcase',
    budget: '$4,500',
    deliverables: '1 Dedicated Video + 2 Shorts',
    deadline: 'Aug 28, 2026',
    category: 'Design & Dev Tools',
    status: 'Direct Invite',
    escrowGuaranteed: true,
  },
  {
    brand: 'Vercel',
    logo: '▲',
    campaign: 'Next.js 16 Launch Sponsorship',
    budget: '$3,200',
    deliverables: '1 Dedicated Video + Post Link',
    deadline: 'Sep 02, 2026',
    category: 'Cloud & Infrastructure',
    status: 'Proposal Review',
    escrowGuaranteed: true,
  },
  {
    brand: 'Supabase',
    logo: '⚡',
    campaign: 'Realtime Database Tutorial Series',
    budget: '$2,800',
    deliverables: '2 Sponsored Segments (60s)',
    deadline: 'Sep 15, 2026',
    category: 'Backend & DB',
    status: 'Open Application',
    escrowGuaranteed: true,
  },
  {
    brand: 'Stripe',
    logo: '💳',
    campaign: 'Creator Monetization API Campaign',
    budget: '$5,000',
    deliverables: '1 Full Video + Newsletter Banner',
    deadline: 'Sep 20, 2026',
    category: 'Fintech & Payments',
    status: 'Contracted',
    escrowGuaranteed: true,
  },
];

export const BrandMarketplaceScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#090d16', flexDirection: 'row'}}
      className="flex flex-row w-[1920px] h-[1080px] overflow-hidden select-none text-slate-100"
    >
      {/* ── Left Sidebar Navigation ── */}
      <div className="w-[300px] bg-slate-900/90 backdrop-blur-xl border-r border-slate-800 flex flex-col justify-between p-7 shrink-0 z-20 shadow-2xl">
        <div className="flex flex-col gap-9">
          <DemoPlatformLogo size={44} darkBg />

          <nav className="flex flex-col gap-2">
            {[
              {icon: <BarChart3 size={20} />, label: 'Dashboard Overview', active: false},
              {icon: <Layers size={20} />, label: 'Content Studio', active: false},
              {icon: <DollarSign size={20} />, label: 'Monetization Hub', active: false},
              {icon: <Award size={20} />, label: 'Brand Marketplace', active: true},
              {icon: <Users size={20} />, label: 'Audience & CRM', active: false},
              {icon: <Settings size={20} />, label: 'Suite Settings', active: false},
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-extrabold text-sm transition-all ${
                  item.active
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/35 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer User Badge */}
        <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-indigo-500 shrink-0 relative shadow-md">
              <Img src={AVATAR_URL} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-black text-white truncate">Sarah Jenkins</span>
              <span className="text-[10px] font-black text-amber-400 flex items-center gap-1">
                <Sparkles size={11} /> PRO CREATOR PASS
              </span>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      {/* ── Main Dashboard Body ── */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#070a12] p-10 gap-8">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
              <Award size={14} />
              <span>SPONSORSHIP & BRAND PARTNERSHIP PORTAL</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mt-1">
              Brand Deal Marketplace
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Search brands, campaigns..."
                className="w-64 py-2.5 pl-9 pr-4 rounded-2xl bg-slate-900/90 text-xs font-semibold text-slate-200 placeholder:text-slate-500 border border-slate-800 focus:outline-none"
              />
              <Search size={14} className="absolute left-3 top-3 text-slate-500" />
            </div>

            <button className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all">
              <FileText size={15} />
              <span>Create Media Kit Pitch</span>
            </button>
          </div>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-4 gap-5">
          <StatCard
            icon={<DollarSign size={24} className="stroke-[2.2]" />}
            label="Active Deal Pipeline"
            value="$24,500.00"
            trend="+32.4%"
            darkTheme
            subtext="4 open deals"
          />
          <StatCard
            icon={<Award size={24} className="stroke-[2.2]" />}
            label="Avg Deal Rate"
            value="$4,250.00"
            trend="+15.0%"
            darkTheme
            subtext="per campaign"
          />
          <StatCard
            icon={<BadgeCheck size={24} className="stroke-[2.2]" />}
            label="Pitch Win Rate"
            value="74.2%"
            trend="+8.5%"
            darkTheme
            subtext="proposal accept"
          />
          <StatCard
            icon={<ShieldCheck size={24} className="stroke-[2.2]" />}
            label="Escrow Protected"
            value="$12,400.00"
            trend="+100%"
            darkTheme
            subtext="guaranteed payouts"
          />
        </div>

        {/* Sponsorship Opportunities Grid */}
        <div className="p-7 rounded-[28px] bg-slate-900/90 border border-slate-800 flex flex-col gap-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">
                Curated Brand Sponsorship Opportunities
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                Matched automatically with your creator niche, audience RPM, and content category
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1.5">
                <ShieldCheck size={14} /> All Payouts Stripe Escrow Verified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {brandOpportunities.map((opp) => (
              <div
                key={opp.brand}
                className="p-6 rounded-[24px] bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between gap-5 relative overflow-hidden group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                      {opp.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white tracking-tight">{opp.brand}</h4>
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold border border-slate-700">
                          {opp.category}
                        </span>
                      </div>
                      <h5 className="text-sm font-extrabold text-amber-400 mt-1 tracking-tight">
                        {opp.campaign}
                      </h5>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-black text-emerald-400">{opp.budget}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Fixed Budget
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Deliverables: <strong className="text-white">{opp.deliverables}</strong></span>
                  <span>Deadline: <strong className="text-slate-400">{opp.deadline}</strong></span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                      opp.status === 'Direct Invite'
                        ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                        : opp.status === 'Contracted'
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                        : 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
                    }`}
                  >
                    {opp.status}
                  </span>

                  <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all">
                    <span>Submit Proposal</span>
                    <Send size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
