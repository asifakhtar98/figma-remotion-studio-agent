import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';
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
  Bold,
  Italic,
  Link,
  Hash,
  Sliders,
  CheckCircle2,
  Lock,
  Layers,
  Wand2,
} from 'lucide-react';
import {ToggleSwitch} from '../components/ToggleSwitch';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const PREVIEW_IMAGE_URL =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80';

export const ContentUploadScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Header ── */}
      <div className="px-8 pt-10 pb-5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between shadow-xs sticky top-0 z-30">
        <button className="flex items-center gap-2 text-slate-600 font-extrabold text-base">
          <ArrowLeft size={22} />
          <span>Cancel</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">New Creator Post</h2>
          <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">
            Draft Auto-Saved
          </span>
        </div>

        <button className="px-5 py-2.5 rounded-2xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-600/25 flex items-center gap-2">
          <span>Publish Post</span>
          <Send size={16} />
        </button>
      </div>

      {/* ── Scrollable Form Body ── */}
      <div className="flex-1 px-8 py-8 flex flex-col gap-8">
        {/* Media Preview Slot */}
        <div className="relative w-full h-84 rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
          <Img src={PREVIEW_IMAGE_URL} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/40" />

          {/* Top Floating Badge Row */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <div className="px-3.5 py-1.5 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs font-extrabold flex items-center gap-2 border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <Video size={15} className="text-indigo-400" />
              <span>4K Ultra HD • 16:9 • 60fps</span>
            </div>

            <div className="px-3 py-1.5 rounded-2xl bg-indigo-600/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider shadow-md">
              VIDEO READY
            </div>
          </div>

          {/* Bottom Controls Overlay */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                14:20 Duration
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                Stereo 48kHz
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="px-4 py-2.5 rounded-2xl bg-indigo-600 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/40 backdrop-blur-md flex items-center gap-2 border border-indigo-400/30">
                <Wand2 size={15} className="text-amber-300" />
                <span>AI Enhance & Upscale</span>
              </button>
              <button className="px-4 py-2.5 rounded-2xl bg-slate-900/80 text-white font-extrabold text-xs shadow-md backdrop-blur-md border border-slate-700">
                Replace Media
              </button>
            </div>
          </div>
        </div>

        {/* Caption & Copy Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              CAPTION & RICH TEXT COPY
            </span>
            <button className="text-xs font-extrabold text-indigo-600 flex items-center gap-1">
              <Sparkles size={13} /> Generate AI Caption
            </button>
          </div>

          <div className="p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-xs flex flex-col gap-4">
            <textarea
              className="w-full h-36 bg-transparent text-slate-900 text-lg font-medium placeholder:text-slate-400 resize-none leading-relaxed"
              placeholder="What's on your mind? Share your story, insights, or update with your audience..."
              defaultValue="🚀 Excited to reveal our new high-speed canvas engine! Built from the ground up for maximum visual precision and seamless 60fps Remotion rendering. Check out the link below for early access!"
            />

            {/* Rich Editor Micro Toolbar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <button className="p-2 rounded-xl bg-slate-100 text-slate-700 font-bold">
                  <Bold size={15} />
                </button>
                <button className="p-2 rounded-xl bg-slate-100 text-slate-700 font-bold">
                  <Italic size={15} />
                </button>
                <button className="p-2 rounded-xl bg-slate-100 text-slate-700 font-bold">
                  <Link size={15} />
                </button>
                <div className="h-5 w-px bg-slate-200 mx-1" />
                <div className="flex items-center gap-1.5">
                  <button className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                    #react
                  </button>
                  <button className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                    #remotion
                  </button>
                  <button className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                    #design
                  </button>
                </div>
              </div>

              <span className="text-xs font-extrabold text-slate-400">
                248 / 2,200 chars
              </span>
            </div>
          </div>
        </div>

        {/* Cross-Platform Syndication */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              CROSS-PLATFORM SYNDICATION
            </span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 size={13} /> 3 Accounts Connected
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <ToggleSwitch
              label="DemoSuperPlatform Native"
              sublabel="Publish directly to your primary creator channel & subscriber feed"
              icon={<Globe size={20} className="text-indigo-600" />}
              enabled={true}
            />
            <ToggleSwitch
              label="YouTube Studio Sync"
              sublabel="Auto-format and post to @sarah.creates channel"
              icon={<Youtube size={20} className="text-red-500" />}
              enabled={true}
            />
            <ToggleSwitch
              label="Instagram Feed & Reels"
              sublabel="Publish video reel to Instagram business profile"
              icon={<Instagram size={20} className="text-pink-500" />}
              enabled={true}
            />
            <ToggleSwitch
              label="LinkedIn Creator Network"
              sublabel="Share as professional article with thumbnail link"
              icon={<Linkedin size={20} className="text-blue-600" />}
              enabled={false}
            />
          </div>
        </div>

        {/* Post Settings & Monetization */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            MONETIZATION & AUDIENCE CONFIGURATION
          </span>

          <div className="rounded-[28px] bg-white border border-slate-200/90 shadow-xs divide-y divide-slate-100">
            <div className="p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <DollarSign size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Enable AdSense & Sponsorships</div>
                  <div className="text-xs text-slate-500 font-medium">Earn automated revenue per 1k views</div>
                </div>
              </div>
              <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                ACTIVE
              </span>
            </div>

            <div className="p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Schedule Publication</div>
                  <div className="text-xs text-slate-500 font-medium">Auto-publish at peak audience engagement time</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-100">
                <span>Tomorrow, 10:00 AM EST</span>
                <ChevronRight size={14} />
              </div>
            </div>

            <div className="p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                  <Tag size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Tag Products & Sponsors</div>
                  <div className="text-xs text-slate-500 font-medium">Link store digital goods or sponsor deals</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl">
                <span>Figma Sponsor Tag</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

