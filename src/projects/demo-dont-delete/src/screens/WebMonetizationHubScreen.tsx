import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  ShoppingBag,
  Award,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  Plus,
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';
import {RevenueChart} from '../components/RevenueChart';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const AVATAR_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80';

const sampleChartData = [
  {month: 'Jan', adRevenue: 2400, sponsored: 1200, digitalProducts: 800},
  {month: 'Feb', adRevenue: 2800, sponsored: 1500, digitalProducts: 950},
  {month: 'Mar', adRevenue: 3200, sponsored: 2100, digitalProducts: 1100},
  {month: 'Apr', adRevenue: 4100, sponsored: 2800, digitalProducts: 1400},
  {month: 'May', adRevenue: 4900, sponsored: 3400, digitalProducts: 1850},
  {month: 'Jun', adRevenue: 5800, sponsored: 4200, digitalProducts: 2400},
];

const sponsoredDeals = [
  {
    brand: 'Figma',
    logo: '🎨',
    campaign: 'Design Systems 2026 Showcase',
    amount: '$4,500',
    status: 'Active',
    dueDate: 'Aug 18, 2026',
  },
  {
    brand: 'Vercel',
    logo: '▲',
    campaign: 'Next.js 16 Launch Sponsorship',
    amount: '$3,200',
    status: 'Review',
    dueDate: 'Aug 22, 2026',
  },
  {
    brand: 'Supabase',
    logo: '⚡',
    campaign: 'Realtime Database Tutorial Series',
    amount: '$2,800',
    status: 'Negotiating',
    dueDate: 'Sep 05, 2026',
  },
  {
    brand: 'Stripe',
    logo: '💳',
    campaign: 'Creator Monetization API Campaign',
    amount: '$5,000',
    status: 'Active',
    dueDate: 'Sep 12, 2026',
  },
];

const digitalProducts = [
  {
    title: 'Ultimate Remotion UI Kit 2026',
    sales: '342 units',
    revenue: '$8,550',
    price: '$25',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop&q=80',
  },
  {
    title: 'Full-Stack Creator Masterclass',
    sales: '128 units',
    revenue: '$12,672',
    price: '$99',
    thumbnail:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop&q=80',
  },
  {
    title: 'SaaS Video Production Template Pack',
    sales: '215 units',
    revenue: '$6,235',
    price: '$29',
    thumbnail:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop&q=80',
  },
];

export const WebMonetizationHubScreen: FC = () => {
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
              {icon: <DollarSign size={20} />, label: 'Monetization Hub', active: true},
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
            <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-xs uppercase tracking-widest">
              <DollarSign size={14} className="text-amber-400" />
              <span>REVENUE & FINANCIAL CONTROL CENTER</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mt-1">
              Monetization Overview
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Search deals, payouts..."
                className="w-56 py-2.5 pl-9 pr-4 rounded-2xl bg-slate-900/90 text-xs font-semibold text-slate-200 placeholder:text-slate-500 border border-slate-800 focus:outline-none"
              />
              <Search size={14} className="absolute left-3 top-3 text-slate-500" />
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-2xl">
              {['7D', '30D', '90D', '1Y', 'ALL'].map((period, i) => (
                <button
                  key={period}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                    i === 1
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            <button className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-extrabold text-xs hover:bg-slate-800 flex items-center gap-2 transition-all">
              <Download size={15} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-4 gap-5">
          <StatCard
            icon={<DollarSign size={24} className="stroke-[2.2]" />}
            label="Total Gross Income"
            value="$34,890.00"
            trend="+24.8%"
            darkTheme
            subtext="ytd yield"
          />
          <StatCard
            icon={<CreditCard size={24} className="stroke-[2.2]" />}
            label="AdSense Revenue"
            value="$18,400.00"
            trend="+18.2%"
            darkTheme
            subtext="video ad sense"
          />
          <StatCard
            icon={<Award size={24} className="stroke-[2.2]" />}
            label="Brand Sponsorships"
            value="$10,500.00"
            trend="+42.0%"
            darkTheme
            subtext="direct deals"
          />
          <StatCard
            icon={<ShoppingBag size={24} className="stroke-[2.2]" />}
            label="Digital Store Goods"
            value="$5,990.00"
            trend="+8.4%"
            darkTheme
            subtext="dsp store"
          />
        </div>

        {/* Middle Section: Revenue Chart */}
        <RevenueChart data={sampleChartData} />

        {/* Bottom Split Section: Sponsored Deals + Digital Products */}
        <div className="grid grid-cols-2 gap-8">
          {/* Sponsored Deals Pipeline */}
          <div className="p-7 rounded-[28px] bg-slate-900/90 border border-slate-800 flex flex-col gap-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-white tracking-tight">
                  Active Brand Sponsorship Deals
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Direct brand partnerships & upcoming milestone deliverables
                </p>
              </div>
              <button className="text-xs font-extrabold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                View All Deals <ChevronRight size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {sponsoredDeals.map((deal) => (
                <div
                  key={deal.brand}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shrink-0 shadow-inner">
                      {deal.logo}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight">{deal.brand}</div>
                      <div className="text-xs text-slate-400 font-medium">{deal.campaign}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-black text-amber-400">{deal.amount}</div>
                      <div className="text-[11px] text-slate-400 font-semibold">Due {deal.dueDate}</div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                        deal.status === 'Active'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : deal.status === 'Review'
                          ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                          : 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
                      }`}
                    >
                      {deal.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Products Performance */}
          <div className="p-7 rounded-[28px] bg-slate-900/90 border border-slate-800 flex flex-col gap-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-white tracking-tight">
                  Top Digital Products & Courses
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Direct automated sales from your DSP Storefront
                </p>
              </div>
              <button className="px-3.5 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-1.5">
                <Plus size={14} /> Add Product
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {digitalProducts.map((prod) => (
                <div
                  key={prod.title}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                      <Img src={prod.thumbnail} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight">{prod.title}</div>
                      <div className="text-xs text-slate-400 font-medium">
                        Price: <strong className="text-slate-200">{prod.price}</strong> • {prod.sales}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-black text-emerald-400">{prod.revenue}</div>
                    <div className="text-[11px] text-slate-400 font-semibold">Total Revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
