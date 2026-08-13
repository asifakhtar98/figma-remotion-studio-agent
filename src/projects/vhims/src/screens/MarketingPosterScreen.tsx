import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Inter';
import {
  Sparkles,
  TrendingUp,
  Users,
  Calendar,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  BrainCircuit,
  Clock,
  Briefcase,
  Layers,
} from 'lucide-react';

const { fontFamily } = loadFont();

export const MarketingPosterScreen: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ fontFamily }}
      className="w-[1080px] h-[1080px] bg-[#eef0f2] text-slate-800 antialiased overflow-hidden select-none relative flex flex-col justify-between p-12"
    >
      {/* ── Ambient Background Studio Lighting (VHiMS Sand & Pine Halos) ── */}
      <div className="absolute -top-[140px] -left-[100px] w-[700px] h-[700px] rounded-full bg-[#3e4f47]/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-[200px] -right-[150px] w-[650px] h-[650px] rounded-full bg-[#ff4d15]/12 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[150px] left-[150px] w-[600px] h-[600px] rounded-full bg-[#bab3a9]/40 blur-[140px] pointer-events-none" />

      {/* Subtle Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3e4f47 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── TOP SECTION: Brand Header & Headline ── */}
      <div className="relative z-10 flex flex-col space-y-3.5">
        {/* Brand Header Bar */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#3e4f47] flex items-center justify-center shadow-lg shadow-[#3e4f47]/20 border border-white/40">
              <BrainCircuit className="w-6.5 h-6.5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-[#3e4f47]">VHiMS</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#3e4f47]/10 text-[#3e4f47] border border-[#3e4f47]/20">
                  ATS 2.0
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-wide">Visionary Health & Hiring Management</p>
            </div>
          </div>

          {/* Launch Status Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff4d15] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4d15]"></span>
            </span>
            <span className="text-xs font-extrabold tracking-wider uppercase text-[#3e4f47]">
              OFFICIAL PRODUCT LAUNCH
            </span>
          </div>
        </div>

        {/* Asymmetric Headline Block */}
        <div className="pt-1 max-w-[940px]">
          <h1 className="text-5xl font-black tracking-tight leading-[1.1] text-[#1a1a1a]">
            An AI-Powered <span className="text-[#3e4f47]">Applicant Tracking System</span>
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xl font-extrabold text-[#ff4d15] tracking-tight">The New Age ATS</span>
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <p className="text-base text-slate-600 font-medium">
              Built to make hiring faster, smarter, and more organized.
            </p>
          </div>
        </div>
      </div>

      {/* ── MIDDLE SECTION: Real VHiMS Light Dashboard Showcase Frame ── */}
      <div className="relative z-10 my-2 flex-1 flex items-center justify-center">
        {/* Device Container Frame */}
        <div className="relative w-full max-w-[960px] h-[450px] rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(62,79,71,0.15)] overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500 flex flex-col">
          
          {/* Dashboard Window Bar */}
          <div className="h-10 bg-[#bab3a9]/30 border-b border-slate-200 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[11px] font-mono text-slate-600 flex items-center gap-1.5 font-medium">
                <Globe className="w-3 h-3 text-slate-400" /> vhims.com/platform-analytics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#3e4f47]/10 text-[#3e4f47] border border-[#3e4f47]/20">
                LIVE RECRUITMENT HUB
              </span>
            </div>
          </div>

          {/* Dashboard Body Content */}
          <div className="flex-1 p-5 bg-[#f4f5f6] flex flex-col gap-4 overflow-hidden">
            {/* Top Stat Strip inside UI */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">Total Applicants</span>
                  <Users className="w-3.5 h-3.5 text-[#ff4d15]" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#1a1a1a]">1,428</span>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +14.2%
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">Open Positions</span>
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#1a1a1a]">24</span>
                  <span className="text-[10px] font-semibold text-slate-500">6 Urgent</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">Time to Hire</span>
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#1a1a1a]">18.5d</span>
                  <span className="text-[10px] font-bold text-emerald-600">-2.4d Faster</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">Offer Acceptance</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-[#1a1a1a]">86.4%</span>
                  <span className="text-[10px] font-bold text-purple-600">+3.1%</span>
                </div>
              </div>
            </div>

            {/* Central Candidate Pipeline Funnel & Recommended AI Applicant */}
            <div className="grid grid-cols-12 gap-3 flex-1">
              {/* Funnel Progress Bars */}
              <div className="col-span-7 bg-white rounded-xl p-3.5 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[#3e4f47]">Candidate Conversion Funnel</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Real-Time Funnel</span>
                </div>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                      <span>Applied (1,428)</span>
                      <span className="font-bold text-slate-800">100%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#3e4f47] h-full w-full rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                      <span>AI Screened (940)</span>
                      <span className="font-bold text-[#ff4d15]">65.8%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#ff4d15] h-full w-[65.8%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                      <span>Interviewed (380)</span>
                      <span className="font-bold text-emerald-600">26.6%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[26.6%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top AI Applicant Recommendation Card */}
              <div className="col-span-5 bg-gradient-to-br from-white to-[#f8f9fa] rounded-xl p-3.5 border border-[#3e4f47]/30 flex flex-col justify-between relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#3e4f47] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff4d15]" /> Top AI Match
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-extrabold rounded-full border border-emerald-200">
                    98% Match
                  </span>
                </div>

                <div className="flex items-center gap-3 my-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3e4f47] to-[#ff4d15] flex items-center justify-center font-black text-white text-sm shadow-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1a1a1a]">Alex Kumar</h4>
                    <p className="text-[11px] text-slate-500">Senior Staff Engineer</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> Auto-Scheduled
                  </span>
                  <span className="text-slate-400">Today, 3:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FLOATING GLASSMORTIC FEATURE PILLS (VHiMS BRAND TOKENS) ── */}

        {/* Pill 1: Top-Left AI Match Pill */}
        <div className="absolute top-[230px] -left-3 z-20 flex items-center gap-3 rounded-2xl border border-[#3e4f47]/20 bg-white/95 px-5 py-3.5 backdrop-blur-xl shadow-xl shadow-[#3e4f47]/10 transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-[#3e4f47]/10 border border-[#3e4f47]/20 flex items-center justify-center text-[#3e4f47] shrink-0">
            <Sparkles className="w-5 h-5 text-[#ff4d15]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-black text-[#1a1a1a] tracking-wide">
              AI Candidate Match <span className="text-[#ff4d15]">98% Accuracy</span>
            </div>
            <p className="text-[11px] font-medium text-slate-600">Automated resume & skill alignment</p>
          </div>
        </div>

        {/* Pill 2: Middle-Right Funnel Analytics Pill */}
        <div className="absolute top-28 -right-4 z-20 flex items-center gap-3 rounded-2xl border border-[#ff4d15]/30 bg-white/95 px-5 py-3.5 backdrop-blur-xl shadow-xl shadow-[#ff4d15]/10 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-[#ff4d15]/10 border border-[#ff4d15]/20 flex items-center justify-center text-[#ff4d15] shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black text-[#1a1a1a] tracking-wide">
              Real-Time Funnel Analytics
            </div>
            <p className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
              <Zap className="w-3 h-3" /> Reduces time-to-hire by 45%
            </p>
          </div>
        </div>

        {/* Pill 3: Bottom-Left Interview Scheduler Pill */}
        <div className="absolute -bottom-4 left-6 z-20 flex items-center gap-3.5 rounded-2xl border border-[#3e4f47]/30 bg-white/95 px-5 py-3.5 backdrop-blur-xl shadow-xl shadow-[#3e4f47]/10 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-[#3e4f47]/10 border border-[#3e4f47]/20 flex items-center justify-center text-[#3e4f47] shrink-0">
            <Calendar className="w-5 h-5 text-[#3e4f47]" />
          </div>
          <div>
            <div className="text-xs font-black text-[#1a1a1a] tracking-wide">
              Automated Interview Scheduler
            </div>
            <p className="text-[11px] font-medium text-slate-600">Zero calendar conflicts, instant sync</p>
          </div>
        </div>

      </div>

      {/* ── BOTTOM SECTION: Actionable Footer & Scannable QR Code ── */}
      <div className="relative z-10 pt-4 border-t border-slate-300/80 flex items-center justify-between">
        {/* Left Side: Gradient CTA Button + Outline Demo Button + Domain Link */}
        <div className="flex items-center gap-5">
          {/* Main Pill CTA with Exact VHiMS Gradient */}
          <a
            href="https://vhims.com/start-trial/"
            className="px-8 py-4 text-white text-sm font-extrabold rounded-full shadow-[0_6px_20px_rgba(62,79,71,0.25)] flex items-center gap-2.5 tracking-wider uppercase cursor-pointer hover:opacity-95 transition-all no-underline"
            style={{
              background: 'linear-gradient(45deg, rgb(62, 79, 71), rgb(255, 69, 0))',
            }}
          >
            <span>START FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Outline Demo Button */}
          <div className="px-6 py-3.5 border-2 border-[#3e4f47] text-[#3e4f47] text-xs font-black rounded-full uppercase tracking-wider bg-white/80 hover:bg-[#3e4f47]/10 transition-all cursor-pointer">
            BOOK FOR DEMO
          </div>

          {/* Web Domain */}
          <div className="flex flex-col ml-2">
            <div className="flex items-center gap-1.5 text-[#3e4f47] font-extrabold text-base tracking-tight">
              <Globe className="w-4 h-4 text-[#ff4d15]" />
              <span>www.vhims.com</span>
            </div>
            <span className="text-[11px] font-medium text-slate-500">
              Enterprise Grade • Intelligent ATS
            </span>
          </div>
        </div>

        {/* Right Side: Real Functional Scannable QR Code Frame */}
        <div className="flex items-center gap-3.5 bg-white border border-slate-300 rounded-2xl px-4 py-2.5 shadow-sm">
          <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 shadow-inner overflow-hidden">
            <Img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://www.vhims.com/start-trial/')}`}
              className="w-full h-full object-contain"
              alt="Scan to Book Demo"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black text-[#1a1a1a] tracking-tight">SCAN TO BOOK DEMO</span>
            <span className="text-[10px] font-bold text-[#ff4d15]">Instant 15-Min Walkthrough</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
