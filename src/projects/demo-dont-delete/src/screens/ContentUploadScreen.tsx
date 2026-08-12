import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  ArrowLeft,
  Sparkles,
  Image as ImageIcon,
  Video,
  Music,
  MapPin,
  Tag,
  Clock,
  Globe,
  Youtube,
  Instagram,
  Linkedin,
  DollarSign,
  ChevronRight,
  Send,
} from 'lucide-react';
import {ToggleSwitch} from '../components/ToggleSwitch';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800', '900'],
});

const PREVIEW_IMAGE_URL =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80';

export const ContentUploadScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col w-[786px] h-[1704px] overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="px-8 pt-10 pb-5 bg-white border-b border-slate-200/80 flex items-center justify-between shadow-2xs">
        <button className="flex items-center gap-2 text-slate-600 font-extrabold text-base">
          <ArrowLeft size={22} />
          <span>Cancel</span>
        </button>

        <h2 className="text-xl font-black text-slate-900 tracking-tight">New Post</h2>

        <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-500/20 flex items-center gap-1.5">
          <span>Publish</span>
          <Send size={16} />
        </button>
      </div>

      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8">
        {/* Media Preview Slot */}
        <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg group">
          <Img src={PREVIEW_IMAGE_URL} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2">
            <ImageIcon size={16} className="text-indigo-400" />
            <span>4K Ultra HD • 16:9</span>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow-sm hover:bg-white transition-all flex items-center gap-1.5">
              <Sparkles size={14} className="text-indigo-600" />
              <span>AI Enhance</span>
            </button>
            <button className="px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md text-white font-extrabold text-xs shadow-sm border border-slate-700">
              Replace Media
            </button>
          </div>
        </div>

        {/* Caption & Details Section */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            CAPTION & COPY
          </span>
          <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-4">
            <textarea
              className="w-full h-36 bg-transparent text-slate-900 text-lg font-medium placeholder:text-slate-400 focus:outline-none resize-none"
              placeholder="What's on your mind? Share your story, insights, or update with your audience..."
              defaultValue="🚀 Excited to reveal our new high-speed canvas engine! Built from the ground up for maximum visual precision and seamless 60fps Remotion rendering. Check out the link below for the early access demo!"
            />

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
                  #react
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
                  #remotion
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
                  #design
                </button>
              </div>
              <span>248 / 2,200</span>
            </div>
          </div>
        </div>

        {/* Cross-Platform Syndication */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            CROSS-PLATFORM SYNDICATION
          </span>

          <div className="flex flex-col gap-3">
            <ToggleSwitch
              label="DemoSuperPlatform Native"
              sublabel="Publish directly to your main subscriber feed"
              icon={<Globe size={20} className="text-indigo-600" />}
              enabled={true}
            />
            <ToggleSwitch
              label="YouTube Studio"
              sublabel="Sync video post as YouTube Short / Video"
              icon={<Youtube size={20} className="text-red-500" />}
              enabled={true}
            />
            <ToggleSwitch
              label="Instagram Feed & Reels"
              sublabel="Auto-format and post to @sarah.creates"
              icon={<Instagram size={20} className="text-pink-500" />}
              enabled={true}
            />
            <ToggleSwitch
              label="LinkedIn Creator Mode"
              sublabel="Share as professional article & updates"
              icon={<Linkedin size={20} className="text-blue-600" />}
              enabled={false}
            />
          </div>
        </div>

        {/* Post Settings & Monetization */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            POST SETTINGS & MONETIZATION
          </span>

          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm divide-y divide-slate-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                  <DollarSign size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Enable AdSense & Sponsorships</div>
                  <div className="text-xs text-slate-500 font-medium">Earn revenue on every view & click</div>
                </div>
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                ACTIVE
              </span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Schedule Publication</div>
                  <div className="text-xs text-slate-500 font-medium">Set exact release date and timezone</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
                <span>Tomorrow, 10:00 AM</span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                  <Tag size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Tag Products & Sponsors</div>
                  <div className="text-xs text-slate-500 font-medium">Link digital goods or brand partners</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                <span>None</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
