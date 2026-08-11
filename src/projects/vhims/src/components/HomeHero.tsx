import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#f8faf9] via-white to-[#f0f4f3] overflow-hidden border-b border-gray-200">
      {/* Decorative Subtle Grid & Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ff4d15]/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2b3534]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-12 relative z-10 flex flex-col items-start">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff4d15] bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#ff4d15]" />
          <span>Next-Generation AI Applicant Tracking System</span>
        </div>

        {/* Brand Giant Title */}
        <h1 className="text-7xl lg:text-[7.5rem] font-black text-[#2b3534] tracking-tight leading-none">
          VH<span className="text-[#ff4d15]">i</span>MS
        </h1>

        {/* Subtitles */}
        <h4 className="font-semibold text-2xl lg:text-3xl text-gray-800 mt-4 tracking-tight">
          An AI-Powered Applicant Tracking System
        </h4>

        <h2 className="font-extrabold text-4xl lg:text-5xl text-[#ff4d15] mt-3 tracking-tight">
          The New Age ATS
        </h2>

        <p className="mt-6 text-xl lg:text-2xl font-bold text-gray-800 leading-snug">
          Built to make hiring faster, smarter, and more organised.
        </p>

        <p className="mt-3 text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Your all-in-one recruitment hub, designed to streamline your hiring process with intelligent automation and real-time analytics.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <button className="px-8 py-4 bg-[#ff4d15] hover:bg-[#e03e09] text-white text-sm font-extrabold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <span>START FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="px-8 py-4 bg-white hover:bg-gray-50 border-2 border-[#2b3534] text-[#2b3534] text-sm font-bold rounded-full shadow-sm transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#ff4d15]" />
            <span>BOOK FOR DEMO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
