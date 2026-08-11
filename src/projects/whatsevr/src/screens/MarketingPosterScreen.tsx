import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  Radio,
  Coins,
  Sparkles,
  MessageCircle,
  Video,
  Heart,
  Share2,
  Gift,
  QrCode,
  Users,
  Zap,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont();

// High quality stock photos for mock creator and live audience
const STREAMER_PHOTO =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop&q=80';
const AUDIENCE_AVATAR_1 =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80';
const AUDIENCE_AVATAR_2 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80';
const AUDIENCE_AVATAR_3 =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80';

export const MarketingPosterScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#090d16'}}
      className="relative flex flex-col justify-between overflow-hidden p-16 text-white select-none"
    >
      {/* ── Background Glow Effects & Gradients ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky blue top glow */}
        <div
          className="absolute -top-[200px] left-1/2 -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
          style={{width: 900, height: 700, background: '#29B6F6'}}
        />
        {/* Purple accent bottom glow */}
        <div
          className="absolute -bottom-[150px] right-[-100px] rounded-full opacity-35 blur-[160px]"
          style={{width: 800, height: 800, background: '#7c3aed'}}
        />
        {/* Subtle cyan glow center left */}
        <div
          className="absolute top-[40%] -left-[200px] rounded-full opacity-25 blur-[150px]"
          style={{width: 600, height: 600, background: '#06b6d4'}}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ── Header Area ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Launch Pill Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-6 py-2.5 backdrop-blur-md shadow-lg shadow-sky-500/10">
          <Sparkles size={20} className="text-sky-400 animate-pulse" />
          <span className="text-base font-semibold tracking-wider text-sky-300 uppercase">
            Official App Launch • Download Now
          </span>
        </div>

        {/* Brand Logo & Name */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <WhatsevrLogo size={72} ringed />
          <span className="text-6xl font-black tracking-tight text-white">
            whatsevr
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-[920px] text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
          Connect, Stream &amp; Share Your World{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Live
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-5 max-w-[760px] text-2xl font-medium leading-relaxed text-slate-300">
          The all-in-one social creator platform for live streams, fan rewards, real-time chat &amp; community memories.
        </p>
      </div>

      {/* ── Central Hero Feature (Phone Mockup + Floating Cards) ── */}
      <div className="relative z-10 my-6 flex flex-1 items-center justify-center">
        {/* Outer Glow Halo behind Phone */}
        <div
          className="absolute rounded-[60px] opacity-50 blur-[60px]"
          style={{
            width: 480,
            height: 880,
            background: 'linear-gradient(135deg, #29B6F6, #7c3aed)',
          }}
        />

        {/* ── Smartphone Frame Mockup ── */}
        <div
          className="relative overflow-hidden rounded-[52px] border-[10px] border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80"
          style={{width: 440, height: 860}}
        >
          {/* Speaker Notch */}
          <div className="absolute top-0 inset-x-0 z-30 flex justify-center pt-3">
            <div className="h-4 w-32 rounded-full bg-slate-800" />
          </div>

          {/* Live Stream Screen Content */}
          <div className="relative h-full w-full bg-slate-950">
            {/* Streamer Background Video/Photo */}
            <Img
              src={STREAMER_PHOTO}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />

            {/* Dark Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            {/* Live Screen Header */}
            <div className="absolute top-10 inset-x-0 z-20 flex items-center justify-between px-6">
              <div className="flex items-center gap-3 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md border border-white/10">
                <Img
                  src={STREAMER_PHOTO}
                  style={{width: 32, height: 32, borderRadius: '50%', objectFit: 'cover'}}
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-none">Aria Chen</span>
                  <span className="text-[10px] text-sky-300">@ariachentv</span>
                </div>
              </div>

              {/* LIVE Badge & Audience count */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  <Radio size={14} className="animate-pulse" />
                  <span>LIVE</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Users size={13} className="text-sky-400" />
                  <span>14.2k</span>
                </div>
              </div>
            </div>

            {/* Floating Earnings / Coins Floating Banner */}
            <div className="absolute top-24 inset-x-6 z-20 flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-500/90 to-teal-600/90 p-3 text-white backdrop-blur-md shadow-lg border border-emerald-300/30">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
                  <Coins size={20} className="text-yellow-300" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold opacity-90">Earning Rate</span>
                  <span className="text-sm font-extrabold">₹0.50 / min live</span>
                </div>
              </div>
              <span className="rounded-lg bg-white/20 px-2.5 py-1 text-xs font-bold">
                Active
              </span>
            </div>

            {/* Bottom Live Chat Overlay */}
            <div className="absolute bottom-6 inset-x-4 z-20 flex flex-col gap-2.5">
              {/* Chat Message 1 */}
              <div className="flex items-center gap-2.5 rounded-2xl bg-black/50 p-2.5 text-xs backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_1}
                  style={{width: 28, height: 28, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-bold text-sky-400">Rohan:</span>
                <span className="text-white">Love the vibe today! 🔥</span>
              </div>

              {/* Chat Message 2 */}
              <div className="flex items-center gap-2.5 rounded-2xl bg-black/50 p-2.5 text-xs backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_2}
                  style={{width: 28, height: 28, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-bold text-pink-400">Sneha:</span>
                <span className="text-white">Just sent 50 coins! 🎁</span>
              </div>

              {/* Stream Control Bar */}
              <div className="mt-1 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                <div className="flex flex-1 items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs text-white/70">
                  <MessageCircle size={14} />
                  <span>Send comment...</span>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg">
                  <Heart size={18} className="fill-white" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg">
                  <Gift size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Surrounding Floating Feature Cards ── */}

        {/* Top Left Floating Pill Card */}
        <div className="absolute top-12 left-2 z-20 flex items-center gap-3.5 rounded-2xl border border-sky-400/30 bg-slate-900/90 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-sky-500/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
            <Radio size={26} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-sky-400 uppercase tracking-wider">
              HD Broadcast
            </span>
            <span className="text-lg font-extrabold text-white">
              Instant Live Stream
            </span>
          </div>
        </div>

        {/* Top Right Floating Pill Card */}
        <div className="absolute top-28 right-2 z-20 flex items-center gap-3.5 rounded-2xl border border-yellow-400/30 bg-slate-900/90 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-yellow-500/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400">
            <Coins size={26} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
              Monetize
            </span>
            <span className="text-lg font-extrabold text-white">
              Fan Coins &amp; Wallet
            </span>
          </div>
        </div>

        {/* Bottom Left Floating Pill Card */}
        <div className="absolute bottom-24 left-0 z-20 flex items-center gap-3.5 rounded-2xl border border-purple-400/30 bg-slate-900/90 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
            <Users size={26} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">
              Community
            </span>
            <span className="text-lg font-extrabold text-white">
              Public &amp; Private Groups
            </span>
          </div>
        </div>

        {/* Bottom Right Floating Pill Card */}
        <div className="absolute bottom-10 right-0 z-20 flex items-center gap-3.5 rounded-2xl border border-pink-400/30 bg-slate-900/90 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-pink-500/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
            <Zap size={26} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-pink-400 uppercase tracking-wider">
              Flicks &amp; Reels
            </span>
            <span className="text-lg font-extrabold text-white">
              Short Video Feed
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom Call-To-Action (CTA) & Download Links ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Banner CTA Box */}
        <div className="w-full max-w-[920px] rounded-3xl border border-slate-700/80 bg-slate-900/80 p-8 backdrop-blur-xl shadow-2xl shadow-black/60">
          <div className="flex items-center justify-between gap-8">
            {/* Left Info Column */}
            <div className="flex flex-1 flex-col text-left">
              <span className="text-3xl font-extrabold text-white">
                Get Started on Whatsevr
              </span>
              <span className="mt-2 text-xl text-slate-300">
                Available now on iOS &amp; Android. Join the creator revolution today!
              </span>

              {/* Store Download Badges */}
              <div className="mt-6 flex items-center gap-4">
                {/* App Store Mock Button */}
                <div className="flex items-center gap-3.5 rounded-2xl bg-white px-6 py-3.5 text-slate-900 shadow-xl cursor-pointer hover:bg-slate-100">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 66.3 32.1 113c23.6 34.3 49.3 68.6 86 67.5 34.9-1.2 48.6-22.3 90.9-22.3 41.5 0 53.6 22.3 89.7 21.6 37.1-.7 62.4-33.1 85.5-67.4 16.4-24.1 23-47.2 23.4-48.4-1.2-.5-62.9-24.1-62.9-68.8zM250.7 101.4c17.5-21.1 29.5-50.5 26.2-79.9-25.5 1.1-56.1 17.1-74.1 38-16 18.5-29.8 48.5-26.1 77.2 28.5 2.2 56.6-14.2 74-35.3z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs uppercase font-medium text-slate-600">Download on the</span>
                    <span className="text-lg font-bold text-slate-900 leading-tight">App Store</span>
                  </div>
                </div>

                {/* Google Play Store Mock Button */}
                <div className="flex items-center gap-3.5 rounded-2xl bg-white px-6 py-3.5 text-slate-900 shadow-xl cursor-pointer hover:bg-slate-100">
                  <svg className="h-8 w-8 fill-current text-sky-600" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-40.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs uppercase font-medium text-slate-600">Get it on</span>
                    <span className="text-lg font-bold text-slate-900 leading-tight">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/90 p-5 shadow-lg">
              <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2">
                <QrCode size={96} className="text-slate-900" />
              </div>
              <span className="mt-3 text-xs font-semibold text-slate-300">
                Scan to Install App
              </span>
            </div>
          </div>
        </div>

        {/* Footer Web URL */}
        <div className="mt-6 text-lg font-semibold text-slate-400 tracking-wider">
          www.whatsevr.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
