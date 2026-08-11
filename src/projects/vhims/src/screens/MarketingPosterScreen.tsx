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
  QrCode,
  Globe,
  BrainCircuit,
  Clock,
  Briefcase,
} from 'lucide-react';

const { fontFamily } = loadFont();

export const MarketingPosterScreen: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ fontFamily }}
      className="w-[1080px] h-[1080px] bg-[#090d16] text-white antialiased overflow-hidden select-none relative flex flex-col justify-between p-12"
    >
      {/* ── Ambient Lighting Halos ── */}
      <div className="absolute -top-[120px] -left-[80px] w-[600px] h-[600px] rounded-full bg-sky-500/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-[180px] -right-[120px] w-[650px] h-[650px] rounded-full bg-orange-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[120px] left-[180px] w-[550px] h-[550px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── TOP SECTION: Header, Eyebrow & Asymmetric Headline ── */}
      <div className="relative z-10 flex flex-col space-y-4">
        {/* Brand Header Bar */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#3e4f47] via-[#2a3932] to-[#ff4500] flex items-center justify-center shadow-lg shadow-orange-500/25 border border-white/20">
              <BrainCircuit className="w-6.5 h-6.5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">VHiMS</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  ATS 2.0
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide">Visionary Health & Hiring Management</p>
            </div>
          </div>

          {/* Launch Status Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
              Official Launch 2026
            </span>
          </div>
        </div>

        {/* Headline Block */}
        <div className="pt-1 max-w-[940px]">
          <h1 className="text-5xl font-black tracking-tight leading-[1.1] text-white">
            Intelligent Hiring Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">AI Innovation</span>
          </h1>
          <p className="text-base text-slate-300 mt-2.5 font-normal leading-relaxed max-w-[860px]">
            Streamline your candidate pipeline with 98% matching precision, real-time conversion analytics, and automated interview workflows.
          </p>
        </div>
      </div>

      {/* ── MIDDLE SECTION: 3D Angled UI Dashboard Frame ── */}
      <div className="relative z-10 my-2 flex-1 flex items-center justify-center">
        {/* Main UI Device Card */}
        <div className="relative w-full max-w-[960px] h-[450px] rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500 flex flex-col">
          
          {/* Dashboard Window Header Bar */}
          <div className="h-10 bg-slate-950/95 border-b border-slate-800/90 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-slate-500" /> app.vhims.com/platform-analytics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                LIVE DEMO STAGE
              </span>
            </div>
          </div>

          {/* Dashboard Body Content */}
          <div className="flex-1 p-5 bg-[#0f172a]/95 flex flex-col gap-4 overflow-hidden">
            {/* Top Stat Row inside UI */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-slate-800/70 rounded-xl p-3 border border-slate-700/60 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Total Applicants</span>
                  <Users className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-white">1,428</span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +14%
                  </span>
                </div>
              </div>

              <div className="bg-slate-800/70 rounded-xl p-3 border border-slate-700/60 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Open Positions</span>
                  <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-white">24</span>
                  <span className="text-[10px] font-semibold text-slate-400">6 Urgent</span>
                </div>
              </div>

              <div className="bg-slate-800/70 rounded-xl p-3 border border-slate-700/60 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Time to Hire</span>
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-white">18.5d</span>
                  <span className="text-[10px] font-bold text-emerald-400">-45% Faster</span>
                </div>
              </div>

              <div className="bg-slate-800/70 rounded-xl p-3 border border-slate-700/60 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Match Accuracy</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-black text-white">98.4%</span>
                  <span className="text-[10px] font-bold text-amber-400">AI Score</span>
                </div>
              </div>
            </div>

            {/* Central Funnel & AI Recommendation Grid */}
            <div className="grid grid-cols-12 gap-3 flex-1">
              {/* Funnel Progress Bars */}
              <div className="col-span-7 bg-slate-800/50 rounded-xl p-3.5 border border-slate-700/60 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-200">Candidate Pipeline Stages</span>
                  <span className="text-[10px] text-slate-400">Real-Time Funnel</span>
                </div>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>Applied (1,428)</span>
                      <span className="font-bold">100%</span>
                    </div>
                    <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-full w-full rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>AI Screened (940)</span>
                      <span className="font-bold text-sky-400">65.8%</span>
                    </div>
                    <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full w-[65.8%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                      <span>Interviewed (380)</span>
                      <span className="font-bold text-emerald-400">26.6%</span>
                    </div>
                    <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full w-[26.6%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top AI Candidate Recommendation Card */}
              <div className="col-span-5 bg-gradient-to-br from-slate-800/90 to-slate-900/95 rounded-xl p-3.5 border border-orange-500/30 flex flex-col justify-between relative overflow-hidden shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-orange-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Top AI Match
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black rounded-full">
                    98% Match
                  </span>
                </div>

                <div className="flex items-center gap-3 my-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-sm shadow-md">
                    AK
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Alex Kumar</h4>
                    <p className="text-[11px] text-slate-400">Senior Staff Engineer</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 pt-2 border-t border-slate-700/60">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Auto-Scheduled
                  </span>
                  <span className="text-slate-400">Today, 3:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ASYMMETRIC FLOATING GLASS PILLS (Z-INDEX LAYERED) ── */}

        {/* Pill 1: Top-Left AI Match Pill */}
        <div className="absolute -top-3 -left-4 z-20 flex items-center gap-3 rounded-2xl border border-sky-400/40 bg-slate-900/95 px-5 py-3.5 backdrop-blur-xl shadow-2xl shadow-sky-500/25 transform -rotate-3 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-black text-white tracking-wide">
              AI Candidate Match <span className="text-sky-400">98% Accuracy</span>
            </div>
            <p className="text-[11px] font-medium text-slate-300">Automated resume & skill alignment</p>
          </div>
        </div>

        {/* Pill 2: Middle-Right Funnel Analytics Pill */}
        <div className="absolute top-28 -right-4 z-20 flex items-center gap-3 rounded-2xl border border-orange-500/40 bg-slate-900/95 px-5 py-3.5 backdrop-blur-xl shadow-2xl shadow-orange-500/25 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-wide">
              Real-Time Funnel Analytics
            </div>
            <p className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1">
              <Zap className="w-3 h-3" /> Reduces time-to-hire by 45%
            </p>
          </div>
        </div>

        {/* Pill 3: Bottom-Left Interview Scheduler Pill */}
        <div className="absolute -bottom-4 left-6 z-20 flex items-center gap-3.5 rounded-2xl border border-emerald-500/40 bg-slate-900/95 px-5 py-3.5 backdrop-blur-xl shadow-2xl shadow-emerald-500/25 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-wide">
              Automated Interview Scheduler
            </div>
            <p className="text-[11px] font-medium text-slate-300">Zero calendar conflicts, instant sync</p>
          </div>
        </div>

      </div>

      {/* ── BOTTOM SECTION: Actionable Footer & Call To Action ── */}
      <div className="relative z-10 pt-4 border-t border-slate-800/90 flex items-center justify-between">
        {/* Left Side: CTA Button + Domain Link */}
        <div className="flex items-center gap-6">
          {/* Main Gradient CTA Button */}
          <div
            className="px-8 py-4 text-white text-sm font-black rounded-full shadow-[0_10px_25px_rgba(255,69,0,0.4)] flex items-center gap-3 tracking-wider uppercase cursor-pointer hover:opacity-95 transition-all border border-white/20"
            style={{
              background: 'linear-gradient(45deg, rgb(62, 79, 71), rgb(255, 69, 0))',
            }}
          >
            <span>START FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Web Domain & Security Trust Badge */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-slate-200 font-extrabold text-base tracking-tight">
              <Globe className="w-4 h-4 text-orange-400" />
              <span>www.vhims.com</span>
            </div>
            <span className="text-[11px] font-medium text-slate-400">
              Enterprise Grade • ISO 27001 Certified
            </span>
          </div>
        </div>

        {/* Right Side: Real Functional QR Code Demo Scan Container */}
        <div className="flex items-center gap-3.5 bg-slate-900/95 border border-slate-700/80 rounded-2xl px-4.5 py-3 backdrop-blur-md shadow-lg">
          <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <Img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://www.vhims.com/start-trial/')}`}
              className="w-full h-full object-contain"
              alt="Scan to Book Demo"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black text-white tracking-tight">SCAN TO BOOK DEMO</span>
            <span className="text-[10px] font-semibold text-orange-400">Instant 15-Min Walkthrough</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
