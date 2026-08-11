import React from 'react';
import { Database, Gauge, Brain } from 'lucide-react';

export const ThreePillars: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-12">
        {/* Intro */}
        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-6">
          Intelligent Hiring Starts Here
        </h2>
        <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed mb-16">
          VHiMS blends human-first reasoning with AI precision — giving you a recruitment platform that helps you move faster, choose better, and never lose great talent along the way.
        </p>

        {/* Section Header */}
        <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-12">
          The Three Pillars of VHiMS
        </h3>

        {/* 3 Pillar Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Pillar 1 */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 text-[#ff4d15] flex items-center justify-center mb-6 shadow-sm">
              <Database className="w-7 h-7" />
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Organised Talent Ecosystem
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed space-y-3">
              <span>Scattered resumes and disconnected tools slow everything down.</span>
              <br /><br />
              <span>
                VHiMS centralises your entire hiring universe, creating a living, searchable, reusable talent database that grows smarter over time.
              </span>
              <br /><br />
              <span>
                Your best candidates never get lost — they stay accessible, structured, and ready when needed.
              </span>
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
              <Gauge className="w-7 h-7" />
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Workflow Efficiency
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed space-y-3">
              <span>Your time shouldn't be spent manually sorting or screening profiles.</span>
              <br /><br />
              <span>
                VHiMS removes repetitive tasks and streamlines every step of the hiring flow, letting you move faster with less effort.
              </span>
              <br /><br />
              <span>
                You stay focused on conversations and decisions — not admin work.
              </span>
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
              <Brain className="w-7 h-7" />
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Talent Intelligence
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed space-y-3">
              <span>Traditional ATS tools filter candidates by rigid keyword matches.</span>
              <br /><br />
              <span>
                VHiMS understands skills, intent, and relevance the way an L1 recruiter would — ensuring strong candidates are recognised, not rejected.
              </span>
              <br /><br />
              <span>
                You get accurate shortlists and better hiring decisions without the noise.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
