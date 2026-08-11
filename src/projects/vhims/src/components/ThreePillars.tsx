import React from 'react';
import { Database, Gauge, Brain } from 'lucide-react';

export const ThreePillars: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200 text-center">
      <div className="max-w-6xl mx-auto px-12">
        {/* Intro */}
        <h2 className="text-4xl font-extrabold mb-12 text-slate-800 tracking-tight">
          Intelligent Hiring Starts Here
        </h2>
        <div className="max-w-[1000px] mx-auto mb-12 mt-2 text-lg leading-relaxed text-slate-800 space-y-6">
          <p>
            VHiMS blends human-first reasoning with AI precision — giving you a recruitment platform that helps you move faster, choose better, and never lose great talent along the way.
          </p>
          <p>
            It brings clarity, structure, and confidence into every part of your hiring flow, helping you stay focused on decisions that matter — not the noise around them.
          </p>
          <p>
            Built with a human approach at its core, VHiMS supports you at each step by simplifying information, reducing friction, and strengthening the way you discover and manage talent.
          </p>
        </div>

        {/* Section Header */}
        <h2 className="text-3xl font-extrabold mb-8 text-slate-800 tracking-tight">
          The Three Pillars of VHiMS
        </h2>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="text-4xl text-[#ff4d15] mb-4 flex justify-center items-center w-[50px] h-[50px]">
              <Database className="w-10 h-10 text-[#ff4d15]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#3e4f47]">
              Organised Talent Ecosystem
            </h3>
            <p className="text-base leading-relaxed text-justify text-slate-700 space-y-3">
              <span>Scattered resumes and disconnected tools slow everything down.</span>
              <br /><br />
              <span>
                VHiMS centralises your entire hiring universe, creating a living, searchable, reusable talent database that grows smarter over time.
              </span>
              <br /><br />
              <span>
                Every profile, job posting, and interaction stays organised in one evolving talent pool.
              </span>
              <br /><br />
              <span>
                Your best candidates never get lost — they stay accessible, structured, and ready when needed.
              </span>
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="text-4xl text-[#ff4d15] mb-4 flex justify-center items-center w-[50px] h-[50px]">
              <Gauge className="w-10 h-10 text-[#ff4d15]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#3e4f47]">
              Workflow Efficiency
            </h3>
            <p className="text-base leading-relaxed text-justify text-slate-700 space-y-3">
              <span>Your time shouldn't be spent manually sorting, screening, or organising information.</span>
              <br /><br />
              <span>
                VHiMS removes repetitive tasks and streamlines every step of the hiring flow, letting you move faster with less effort.
              </span>
              <br /><br />
              <span>
                It keeps your candidate tracking and workflow automation clear and effortless.
              </span>
              <br /><br />
              <span>
                You stay focused on conversations and decisions — not admin work.
              </span>
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="text-4xl text-[#ff4d15] mb-4 flex justify-center items-center w-[50px] h-[50px]">
              <Brain className="w-10 h-10 text-[#ff4d15]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#3e4f47]">
              Talent Intelligence
            </h3>
            <p className="text-base leading-relaxed text-justify text-slate-700 space-y-3">
              <span>Traditional ATS tools filter candidates by rigid matches, often overlooking real potential.</span>
              <br /><br />
              <span>
                VHiMS understands skills, intent, and relevance the way an L1 recruiter would — ensuring strong candidates are recognised, not rejected.
              </span>
              <br /><br />
              <span>
                You get accurate shortlists and better hiring decisions without the noise — elevating your entire candidate management and resume screening process.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

