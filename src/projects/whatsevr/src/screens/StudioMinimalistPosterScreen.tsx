import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  Radio,
  Coins,
  Sparkles,
  MessageCircle,
  Heart,
  Gift,
  QrCode,
  Users,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont();

// High quality stock photos for streamer and audience
const STREAMER_PHOTO =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop&q=80';
const AUDIENCE_AVATAR_1 =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80';
const AUDIENCE_AVATAR_2 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80';

export const StudioMinimalistPosterScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#F8FAFC'}}
      className="relative flex flex-col justify-between overflow-hidden p-12 text-slate-900 select-none"
    >
      {/* ── Studio Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft top ambient studio spotlight */}
        <div
          className="absolute -top-[200px] left-1/2 -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
          style={{width: 800, height: 600, background: '#E0F2FE'}}
        />
        {/* Subtle cyan accent glow right */}
        <div
          className="absolute top-[40%] -right-[150px] rounded-full opacity-25 blur-[140px]"
          style={{width: 550, height: 550, background: '#38BDF8'}}
        />
        {/* Fine background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ── 1. Minimalist Header Zone ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Apple-style Pill Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur-md">
          <Sparkles size={15} className="text-sky-500" />
          <span className="tracking-wide uppercase">
            Official Launch • Live Streaming Platform
          </span>
        </div>

        {/* Brand Header */}
        <div className="mt-4 flex items-center justify-center gap-3.5">
          <WhatsevrLogo size={52} ringed={false} />
          <span className="text-5xl font-black tracking-tight text-slate-900">
            whatsevr
          </span>
        </div>

        {/* Studio Headline */}
        <h1 className="mt-3.5 max-w-[900px] text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
          Broadcast HD Live to{' '}
          <span className="text-sky-600 underline decoration-sky-300 decoration-4 underline-offset-4">
            Thousands of Fans
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-2 text-lg font-medium text-slate-500 max-w-[700px]">
          Ultra-low latency streaming, live fan engagement &amp; instant coin monetization.
        </p>
      </div>

      {/* ── 2. Central Studio Showcase (Floating Bezel-Less Mockup + Clean Feature Callouts) ── */}
      <div className="relative z-10 my-2 flex flex-1 items-center justify-center gap-10">
        {/* ── Sleek Floating Smartphone Mockup ── */}
        <div
          className="relative overflow-hidden rounded-[38px] border-[6px] border-slate-800 bg-slate-950 shadow-2xl shadow-slate-900/25 transform -rotate-2"
          style={{width: 350, height: 550}}
        >
          {/* Dynamic Island Notch */}
          <div className="absolute top-0 inset-x-0 z-30 flex justify-center pt-2.5">
            <div className="h-3.5 w-24 rounded-full bg-slate-900" />
          </div>

          {/* Live Video Screen */}
          <div className="relative h-full w-full bg-slate-950">
            <Img
              src={STREAMER_PHOTO}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            {/* Header Overlay */}
            <div className="absolute top-8 inset-x-0 z-20 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md border border-white/10">
                <Img
                  src={STREAMER_PHOTO}
                  style={{width: 24, height: 24, borderRadius: '50%', objectFit: 'cover'}}
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-white leading-none">Aria Chen</span>
                  <span className="text-[9px] text-sky-300">@ariachentv</span>
                </div>
              </div>

              {/* LIVE Badge */}
              <div className="flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                <Radio size={11} />
                <span>LIVE</span>
              </div>
            </div>

            {/* Earning Banner */}
            <div className="absolute top-20 inset-x-4 z-20 flex items-center justify-between rounded-xl bg-white/90 p-2 text-slate-900 backdrop-blur-md shadow-md border border-white">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-white">
                  <Coins size={15} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase">Live Earning Rate</span>
                  <span className="text-xs font-bold text-slate-900">₹0.50 / min</span>
                </div>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-800">
                Active
              </span>
            </div>

            {/* Bottom Chat Overlay */}
            <div className="absolute bottom-4 inset-x-3 z-20 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 rounded-xl bg-black/40 p-2 text-[10px] text-white backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_1}
                  style={{width: 20, height: 20, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-bold text-sky-300">Rohan:</span>
                <span>Incredible HD quality! 🔥</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-black/40 p-2 text-[10px] text-white backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_2}
                  style={{width: 20, height: 20, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-bold text-pink-300">Sneha:</span>
                <span>Sent 100 coins! 🎁</span>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
                <div className="flex flex-1 items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[10px] text-white/80">
                  <MessageCircle size={12} />
                  <span>Send a message...</span>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-white shadow-sm">
                  <Heart size={13} className="fill-white" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm">
                  <Gift size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Studio Minimalist Feature Callouts ── */}
        <div className="flex flex-col gap-4 max-w-[460px]">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-lg shadow-slate-900/5 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <Radio size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">
                HD Live Broadcasting
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Crystal clear 1080p stream with sub-second latency.
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-lg shadow-slate-900/5 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <Coins size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">
                Instant Fan Monetization
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Earn fan coins in real-time and cash out anytime.
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-lg shadow-slate-900/5 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
              <Users size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">
                Public &amp; Private Groups
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Build exclusive fan spaces and community channels.
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-lg shadow-slate-900/5 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 border border-pink-100">
              <Zap size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">
                Flicks &amp; Short Feed
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Share viral clips and discover trending creators.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Studio Actionable Footer ── */}
      <div className="relative z-10 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-xl shadow-slate-900/5">
        {/* Left Column: CTA & Store Badges */}
        <div className="flex flex-col text-left">
          <span className="text-xl font-bold text-slate-900">
            Get Whatsevr Today
          </span>
          <span className="text-xs text-slate-500 mt-0.5">
            Available on iOS &amp; Android. Download now to start streaming.
          </span>

          {/* Store Download Buttons */}
          <div className="mt-3 flex items-center gap-3">
            {/* App Store Button */}
            <div className="flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2 text-white shadow-md cursor-pointer">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 66.3 32.1 113c23.6 34.3 49.3 68.6 86 67.5 34.9-1.2 48.6-22.3 90.9-22.3 41.5 0 53.6 22.3 89.7 21.6 37.1-.7 62.4-33.1 85.5-67.4 16.4-24.1 23-47.2 23.4-48.4-1.2-.5-62.9-24.1-62.9-68.8zM250.7 101.4c17.5-21.1 29.5-50.5 26.2-79.9-25.5 1.1-56.1 17.1-74.1 38-16 18.5-29.8 48.5-26.1 77.2 28.5 2.2 56.6-14.2 74-35.3z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase font-medium text-slate-300 leading-none">Download on</span>
                <span className="text-xs font-bold leading-tight">App Store</span>
              </div>
            </div>

            {/* Google Play Button */}
            <div className="flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2 text-white shadow-md cursor-pointer">
              <svg className="h-5 w-5 fill-current text-sky-400" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-40.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase font-medium text-slate-300 leading-none">Get it on</span>
                <span className="text-xs font-bold leading-tight">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scan QR Code Box & Web Domain */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-900">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white p-1 border border-slate-200 overflow-hidden">
              <Img
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwww.whatsevr.com"
                className="h-full w-full object-contain"
                alt="Scan to install Whatsevr"
              />
            </div>
            <span className="mt-1 text-[9px] font-bold uppercase text-slate-600">
              Scan to Install
            </span>
          </div>

          {/* Web Domain Badge */}
          <div className="flex items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 font-bold text-sky-700 text-sm shadow-sm">
            www.whatsevr.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
