import React from 'react';
import { Img } from 'remotion';

export const HomeHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[750px] flex items-center justify-center bg-[#bab3a9] overflow-hidden"
      id="hero"
    >
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Img
          src="https://staging.vhims.com/static/images/home-transparent.f39339e3d49f.png"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-[90%] max-w-[1600px] mx-auto py-20 flex flex-col items-start justify-center">
        <div className="max-w-[1000px] text-left">
          <h1 className="font-bold text-[#3e4f47] leading-none text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] tracking-tight">
            VHiMS
          </h1>
          <h4 className="font-normal mt-4 text-xl sm:text-2xl lg:text-[40px] text-[#1a1a1a] tracking-tight">
            An AI-Powered Applicant Tracking System
          </h4>
          <h2 className="font-medium mt-4 text-2xl sm:text-3xl lg:text-[4.25rem] text-[#1a1a1a] tracking-tight">
            The New Age ATS
          </h2>
          <p className="mt-8 mb-4 text-lg sm:text-2xl lg:text-[28px] leading-snug text-[#1a1a1a] font-normal">
            Built to make hiring faster, smarter, and more organised.
          </p>
          <p className="text-lg sm:text-2xl lg:text-[28px] leading-snug text-slate-700 font-normal">
            Your all-in-one recruitment hub, designed to streamline
          </p>
          <p className="text-lg sm:text-2xl lg:text-[28px] leading-snug text-slate-700 font-normal">
            your hiring process with intelligent automation and real-time analytics.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            {/* Pill CTA with exact gradient: linear-gradient(45deg, #3e4f47, #ff4500) */}
            <a
              href="/start-trial/"
              className="px-8 py-4 text-white text-sm font-extrabold rounded-full shadow-[0_4px_15px_rgba(62,79,71,0.2)] hover:opacity-95 transition-all tracking-wider no-underline uppercase"
              style={{
                background: 'linear-gradient(45deg, rgb(62, 79, 71), rgb(255, 69, 0))',
              }}
            >
              START FREE TRIAL
            </a>
            <button
              type="button"
              className="px-8 py-4 bg-transparent border-2 border-[#3e4f47] text-[#3e4f47] text-sm font-extrabold rounded-full hover:bg-[#3e4f47]/10 transition-all tracking-wider uppercase"
            >
              BOOK FOR DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


