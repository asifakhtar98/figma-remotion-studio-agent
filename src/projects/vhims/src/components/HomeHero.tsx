import React from 'react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[750px] flex items-center justify-center bg-[#f0f4f3] overflow-hidden border-b border-slate-200" id="hero">
      <div className="relative z-10 w-[90%] max-w-[1600px] mx-auto py-20 flex flex-col items-start justify-center">
        <div className="max-w-[1000px] text-left">
          <h1 className="font-bold text-[#3e4f47] leading-none text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] tracking-tight">
            VHiMS
          </h1>
          <h4 className="font-normal mt-4 text-xl sm:text-2xl lg:text-[40px] text-slate-800 tracking-tight">
            An AI-Powered Applicant Tracking System
          </h4>
          <h2 className="font-medium mt-4 text-2xl sm:text-3xl lg:text-[4.25rem] text-slate-800 tracking-tight">
            The New Age ATS
          </h2>
          <p className="mt-8 mb-4 text-lg sm:text-2xl lg:text-[28px] leading-snug text-slate-800 font-normal">
            Built to make hiring faster, smarter, and more organised.
          </p>
          <p className="text-lg sm:text-2xl lg:text-[28px] leading-snug text-slate-600 font-normal">
            Your all-in-one recruitment hub, designed to streamline
          </p>
          <p className="text-lg sm:text-2xl lg:text-[28px] leading-snug text-slate-600 font-normal">
            your hiring process with intelligent automation and real-time analytics.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/start-trial/"
              className="px-8 py-4 bg-[#ff4d15] hover:bg-[#e03e09] text-white text-sm font-extrabold rounded-full shadow-md hover:shadow-lg transition-all tracking-wider no-underline uppercase"
            >
              START FREE TRIAL
            </a>
            <button
              type="button"
              className="px-8 py-4 bg-transparent hover:bg-[#3e4f47]/5 border-2 border-[#3e4f47] text-[#3e4f47] text-sm font-extrabold rounded-full transition-all tracking-wider uppercase"
            >
              BOOK FOR DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

