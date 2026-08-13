import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
import {
  Folder,
  HardDrive,
  Video,
  Image as ImageIcon,
  Music,
  Upload,
  Search,
  Filter,
  MoreVertical,
  Download,
  Trash2,
  Sparkles,
  Layers,
  BarChart3,
  DollarSign,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Eye,
  CheckCircle2,
  Clock,
  Plus,
} from 'lucide-react';
import {DemoPlatformLogo} from '../components/DemoPlatformLogo';
import {StatCard} from '../components/StatCard';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const AVATAR_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80';

const mediaAssets = [
  {
    title: '3D Canvas Engine Breakdown — 4K Master',
    type: 'Video',
    resolution: '4K Ultra HD',
    duration: '14:20',
    size: '4.2 GB',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=260&fit=crop&q=80',
    updatedAgo: '2 hours ago',
    aiTranscribed: true,
  },
  {
    title: '10 Designer Income Habits — Clean Cut',
    type: 'Video',
    resolution: '1080p HD',
    duration: '08:45',
    size: '1.8 GB',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=260&fit=crop&q=80',
    updatedAgo: '1 day ago',
    aiTranscribed: true,
  },
  {
    title: 'AI Workflow Tools 2026 Promo Banner',
    type: 'Remotion Render',
    resolution: '1080x1080 Still',
    duration: 'Still',
    size: '14.2 MB',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=260&fit=crop&q=80',
    updatedAgo: '3 days ago',
    aiTranscribed: false,
  },
  {
    title: 'SaaS Product Demo Walkthrough Template',
    type: 'Video',
    resolution: '4K Ultra HD',
    duration: '06:30',
    size: '2.4 GB',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=260&fit=crop&q=80',
    updatedAgo: '5 days ago',
    aiTranscribed: true,
  },
  {
    title: 'Cyberpunk Ambient Synth Background Track',
    type: 'Audio',
    resolution: '24-bit 48kHz WAV',
    duration: '03:15',
    size: '48.5 MB',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=260&fit=crop&q=80',
    updatedAgo: '1 week ago',
    aiTranscribed: false,
  },
  {
    title: 'Creator Studio Brand Logo Vector Asset Pack',
    type: 'Graphics',
    resolution: 'SVG / PNG Pack',
    duration: 'Asset Pack',
    size: '8.4 MB',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=260&fit=crop&q=80',
    updatedAgo: '2 weeks ago',
    aiTranscribed: false,
  },
];

export const WebMediaLibraryScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc', flexDirection: 'row'}}
      className="flex flex-row overflow-hidden select-none text-slate-900"
    >
      {/* ── Left Sidebar Navigation ── */}
      <div className="w-[300px] bg-white border-r border-slate-200/80 flex flex-col justify-between p-7 shrink-0 z-20 shadow-xs">
        <div className="flex flex-col gap-9">
          <DemoPlatformLogo size={44} />

          <nav className="flex flex-col gap-2">
            {[
              {icon: <BarChart3 size={20} />, label: 'Dashboard Overview', active: false},
              {icon: <Layers size={20} />, label: 'Content Studio', active: false},
              {icon: <Folder size={20} />, label: 'Media Library & Assets', active: true},
              {icon: <DollarSign size={20} />, label: 'Monetization Hub', active: false},
              {icon: <Users size={20} />, label: 'Audience & CRM', active: false},
              {icon: <Settings size={20} />, label: 'Suite Settings', active: false},
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-extrabold text-sm transition-all ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer User Badge */}
        <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-indigo-600 shrink-0 relative shadow-sm">
              <Img src={AVATAR_URL} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-black text-slate-900 truncate">Sarah Jenkins</span>
              <span className="text-[10px] font-black text-amber-600 flex items-center gap-1">
                <Sparkles size={11} /> PRO CREATOR PASS
              </span>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      {/* ── Main Dashboard Body ── */}
      <div className="flex-1 flex flex-col bg-slate-50 p-10 gap-8">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-widest">
              <Folder size={14} />
              <span>CREATOR ASSET & STORAGE HUB</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Media & Content Assets
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Search 1,420 files..."
                className="w-64 py-2.5 pl-9 pr-4 rounded-2xl bg-white text-xs font-semibold text-slate-700 placeholder:text-slate-400 border border-slate-200/80 focus:outline-none shadow-2xs"
              />
              <Search size={14} className="absolute left-3 top-3 text-slate-400" />
            </div>

            <button className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-600/25 flex items-center gap-2 transition-all">
              <Upload size={15} />
              <span>Upload New Media</span>
            </button>
          </div>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-4 gap-5">
          <StatCard
            icon={<Video size={24} className="stroke-[2.2]" />}
            label="Total Video Assets"
            value="1,420 files"
            trend="+142 files"
            subtext="this month"
          />
          <StatCard
            icon={<HardDrive size={24} className="stroke-[2.2]" />}
            label="Cloud Storage Used"
            value="142.4 GB"
            trend="14.2%"
            subtext="of 1 TB quota"
          />
          <StatCard
            icon={<Sparkles size={24} className="stroke-[2.2]" />}
            label="AI Auto-Transcribed"
            value="340 hrs"
            trend="98.4%"
            subtext="searchable text"
          />
          <StatCard
            icon={<ImageIcon size={24} className="stroke-[2.2]" />}
            label="Remotion Stills"
            value="84 compositions"
            trend="+12"
            subtext="rendered targets"
          />
        </div>

        {/* Media Asset Grid */}
        <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 flex flex-col gap-6 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {['All Assets (1,420)', '4K Video (340)', 'Remotion Stills (84)', 'Audio Tracks (42)', 'Brand Kits (12)'].map(
                (tab, idx) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                      idx === 0
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 border border-slate-200/60'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            <span className="text-xs font-semibold text-slate-500">
              Storage: <strong className="text-emerald-600">142.4 GB</strong> / 1,000 GB
            </span>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {mediaAssets.map((asset) => (
              <div
                key={asset.title}
                className="rounded-[24px] bg-slate-50 border border-slate-200/80 overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="relative w-full h-44 bg-slate-100">
                  <Img src={asset.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold border border-white/10">
                    {asset.resolution}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[10px] font-bold">
                    {asset.duration}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug tracking-tight truncate">
                    {asset.title}
                  </h4>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{asset.size}</span>
                    <span>{asset.updatedAgo}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
                    <span className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-600">
                      <CheckCircle2 size={12} /> AI Transcribed
                    </span>

                    <button className="p-2 rounded-xl bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 shadow-2xs">
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
