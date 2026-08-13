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
  Zap,
  Star,
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

export const MarketingPosterScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#FEF08A'}}
      className="relative flex flex-col justify-between overflow-hidden p-10 text-slate-900 select-none"
    >
      {/* ── Background Neo-Brutalist Grid Pattern & Decorative Elements ── */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Decorative Neo-Brutalist Floating Shapes */}
      <div className="absolute top-6 right-8 flex items-center justify-center h-14 w-14 rounded-full bg-pink-500 border-4 border-black shadow-[4px_4px_0px_#000] rotate-12 z-0">
        <Star size={28} className="text-yellow-300 fill-yellow-300" />
      </div>
      <div className="absolute bottom-36 left-6 flex items-center justify-center h-12 w-12 bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-12 z-0">
        <Zap size={26} className="text-black fill-black" />
      </div>

      {/* ── 1. Neo-Brutalist Header Zone ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Launch Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-2xl border-4 border-black bg-black px-6 py-2 text-white shadow-[6px_6px_0px_#EC4899] transform -rotate-1">
          <Sparkles size={20} className="text-yellow-300" />
          <span className="text-sm font-black tracking-wider uppercase">
            🚀 OFFICIAL LAUNCH • CREATOR REVOLUTION
          </span>
        </div>

        {/* Brand Header & Headline Row */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-black bg-white p-2 shadow-[6px_6px_0px_#000]">
            <WhatsevrLogo size={56} ringed={false} />
          </div>
          <span className="text-5xl font-black tracking-tighter text-black uppercase">
            whatsevr
          </span>
        </div>

        {/* Headline with High-Contrast Pop Highlight Blocks */}
        <h1 className="mt-4 max-w-[960px] text-4xl font-black leading-tight tracking-tight text-black uppercase">
          Stream, Chat, Flicks &amp; Communities in{' '}
          <span className="inline-block rounded-xl border-4 border-black bg-cyan-300 px-3 py-0.5 shadow-[4px_4px_0px_#000] rotate-[-2deg] text-black">
            One App
          </span>
        </h1>
      </div>

      {/* ── 2. Central Layout (3D Smartphone Mockup + Neo-Brutalist Cards) ── */}
      <div className="relative z-10 my-3 flex flex-1 items-center justify-center gap-8">
        {/* ── 3D Rotated Smartphone Frame Mockup ── */}
        <div
          className="relative overflow-hidden rounded-[40px] border-4 border-black bg-slate-950 shadow-[12px_12px_0px_#000000] transform -rotate-3"
          style={{width: 360, height: 560}}
        >
          {/* Speaker Notch */}
          <div className="absolute top-0 inset-x-0 z-30 flex justify-center pt-2.5">
            <div className="h-3.5 w-28 rounded-full bg-slate-800" />
          </div>

          {/* Live Stream Screen Content */}
          <div className="relative h-full w-full bg-slate-950">
            {/* Streamer Photo */}
            <Img
              src={STREAMER_PHOTO}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />

            {/* Dark Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

            {/* Live Screen Header */}
            <div className="absolute top-8 inset-x-0 z-20 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                <Img
                  src={STREAMER_PHOTO}
                  style={{width: 26, height: 26, borderRadius: '50%', objectFit: 'cover'}}
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-white leading-none">Aria Chen</span>
                  <span className="text-[9px] text-cyan-300">@ariachentv</span>
                </div>
              </div>

              {/* LIVE Badge */}
              <div className="flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-0.5 text-[11px] font-black text-white shadow-md">
                <Radio size={12} />
                <span>LIVE</span>
              </div>
            </div>

            {/* Floating Coins Earning Rate Banner */}
            <div className="absolute top-20 inset-x-4 z-20 flex items-center justify-between rounded-xl border-2 border-black bg-emerald-400 p-2.5 text-black shadow-[4px_4px_0px_#000]">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-yellow-300">
                  <Coins size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase">Earning Rate</span>
                  <span className="text-xs font-black">₹0.50 / min live</span>
                </div>
              </div>
              <span className="rounded-md bg-black px-2 py-0.5 text-[10px] font-bold text-white">
                Active
              </span>
            </div>

            {/* Bottom Live Chat & Reactions */}
            <div className="absolute bottom-4 inset-x-3 z-20 flex flex-col gap-2">
              {/* Chat Bubble 1 */}
              <div className="flex items-center gap-2 rounded-xl bg-black/70 p-2 text-[11px] text-white backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_1}
                  style={{width: 22, height: 22, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-extrabold text-cyan-400">Rohan:</span>
                <span>Love the stream! 🔥</span>
              </div>

              {/* Chat Bubble 2 */}
              <div className="flex items-center gap-2 rounded-xl bg-black/70 p-2 text-[11px] text-white backdrop-blur-md border border-white/10">
                <Img
                  src={AUDIENCE_AVATAR_2}
                  style={{width: 22, height: 22, borderRadius: '50%', objectFit: 'cover'}}
                />
                <span className="font-extrabold text-pink-400">Sneha:</span>
                <span>Sent 50 coins! 🎁</span>
              </div>

              {/* Stream Action Bar */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
                <div className="flex flex-1 items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[10px] text-white/80">
                  <MessageCircle size={12} />
                  <span>Send comment...</span>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-white shadow-md">
                  <Heart size={14} className="fill-white" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-black shadow-md">
                  <Gift size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Surrounding Neo-Brutalist Feature Cards ── */}
        <div className="flex flex-col gap-3.5 max-w-[480px]">
          {/* Card 1: HD Broadcast */}
          <div className="flex items-center gap-3.5 rounded-2xl border-4 border-black bg-cyan-300 p-4 text-black shadow-[6px_6px_0px_#000] transform rotate-[-2deg]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-black bg-black text-cyan-300 shadow-[3px_3px_0px_#000]">
              <Radio size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-wider text-black/80">
                HD Broadcast
              </span>
              <span className="text-xl font-black text-black">
                Go Live Instantly
              </span>
            </div>
          </div>

          {/* Card 2: Monetize Fan Coins */}
          <div className="flex items-center gap-3.5 rounded-2xl border-4 border-black bg-pink-400 p-4 text-white shadow-[6px_6px_0px_#000] transform rotate-[2deg]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-black bg-black text-pink-400 shadow-[3px_3px_0px_#000]">
              <Coins size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-wider text-white/90">
                Monetize
              </span>
              <span className="text-xl font-black text-white">
                Earn Fan Coins &amp; Cash
              </span>
            </div>
          </div>

          {/* Card 3: Communities */}
          <div className="flex items-center gap-3.5 rounded-2xl border-4 border-black bg-white p-4 text-black shadow-[6px_6px_0px_#000] transform rotate-[-1deg]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-black bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
              <Users size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                Community
              </span>
              <span className="text-xl font-black text-black">
                Public &amp; Private Groups
              </span>
            </div>
          </div>

          {/* Card 4: Flicks & Reels */}
          <div className="flex items-center gap-3.5 rounded-2xl border-4 border-black bg-emerald-300 p-4 text-black shadow-[6px_6px_0px_#000] transform rotate-[3deg]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-black bg-black text-emerald-300 shadow-[3px_3px_0px_#000]">
              <Zap size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-wider text-black/80">
                Short Video
              </span>
              <span className="text-xl font-black text-black">
                Flicks &amp; Creator Feed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Neo-Brutalist Actionable Footer Zone ── */}
      <div className="relative z-10 flex items-center justify-between rounded-3xl border-4 border-black bg-black p-5 text-white shadow-[8px_8px_0px_#000000]">
        {/* Left Column: CTA & Store Badges */}
        <div className="flex flex-col text-left">
          <span className="text-2xl font-black uppercase tracking-tight text-yellow-300">
            JOIN WHATSEVR TODAY
          </span>
          <span className="text-sm font-medium text-slate-300 mt-0.5">
            Available on iOS &amp; Android • Start streaming in seconds
          </span>

          {/* Store Download Buttons */}
          <div className="mt-3.5 flex items-center gap-3">
            {/* App Store Button */}
            <div className="flex items-center gap-2.5 rounded-xl border-3 border-black bg-white px-4 py-2 text-black shadow-[4px_4px_0px_#000] font-bold">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 66.3 32.1 113c23.6 34.3 49.3 68.6 86 67.5 34.9-1.2 48.6-22.3 90.9-22.3 41.5 0 53.6 22.3 89.7 21.6 37.1-.7 62.4-33.1 85.5-67.4 16.4-24.1 23-47.2 23.4-48.4-1.2-.5-62.9-24.1-62.9-68.8zM250.7 101.4c17.5-21.1 29.5-50.5 26.2-79.9-25.5 1.1-56.1 17.1-74.1 38-16 18.5-29.8 48.5-26.1 77.2 28.5 2.2 56.6-14.2 74-35.3z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-bold text-slate-600 leading-none">Download on</span>
                <span className="text-sm font-black leading-tight">App Store</span>
              </div>
            </div>

            {/* Google Play Button */}
            <div className="flex items-center gap-2.5 rounded-xl border-3 border-black bg-cyan-300 px-4 py-2 text-black shadow-[4px_4px_0px_#000] font-bold">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-40.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-bold text-slate-800 leading-none">Get it on</span>
                <span className="text-sm font-black leading-tight">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scan QR Code Box & Domain */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center rounded-2xl border-3 border-black bg-yellow-400 p-2.5 shadow-[4px_4px_0px_#000] text-black">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-1 border-2 border-black overflow-hidden">
              <Img
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwww.whatsevr.com"
                className="h-full w-full object-contain"
                alt="Scan to install Whatsevr"
              />
            </div>
            <span className="mt-1 text-[10px] font-black uppercase">
              SCAN TO INSTALL
            </span>
          </div>

          {/* Web Domain Badge */}
          <div className="flex items-center justify-center rounded-xl border-3 border-black bg-pink-500 px-4 py-3 font-black text-white text-base shadow-[4px_4px_0px_#000] rotate-2">
            WWW.WHATSEVR.COM
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
