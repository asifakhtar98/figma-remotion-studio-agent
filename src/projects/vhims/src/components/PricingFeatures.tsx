import React from 'react';
import { FolderTree, Brain, Check } from 'lucide-react';

export const PricingFeatures: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-12 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Feature 1: AI CV Sorting */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ff4d15] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-4">
              <FolderTree className="w-3.5 h-3.5" />
              <span>Feature 1</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              AI CV Sorting
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Upload any pile of CVs — AI reads every file, creates folders by candidate profile, and organizes them automatically. Zero manual filing required.
            </p>

            <ol className="space-y-4">
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-[#ff4d15] font-extrabold text-xs flex items-center justify-center">
                  1
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    Recruiter uploads CVs
                  </strong>
                  <span className="text-gray-500">Bulk upload in PDF, DOCX, or ZIP formats</span>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-[#ff4d15] font-extrabold text-xs flex items-center justify-center">
                  2
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    AI reads & understands each CV
                  </strong>
                  <span className="text-gray-500">Parses role, skills, domain expertise & seniority</span>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-[#ff4d15] font-extrabold text-xs flex items-center justify-center">
                  3
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    AI creates profile folders
                  </strong>
                  <span className="text-gray-500">
                    Auto-categorizes into "React Dev", "Medical Lead", etc.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-[#ff4d15] font-extrabold text-xs flex items-center justify-center">
                  4
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    CVs filed into right folder
                  </strong>
                  <span className="text-gray-500">Instant clean, searchable talent library</span>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Feature 2: AI CV Evaluation */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4">
              <Brain className="w-3.5 h-3.5" />
              <span>Feature 2</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              AI CV Evaluation
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Match any CV against a Job Description. AI scores, ranks, and explains — delivering a complete L1 recruiter analysis in seconds.
            </p>

            <ol className="space-y-4 mb-6">
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs flex items-center justify-center">
                  1
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    Upload Job Description
                  </strong>
                  <span className="text-gray-500">Establishes exact candidate benchmarks</span>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs flex items-center justify-center">
                  2
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    AI deep-analyses CV vs JD
                  </strong>
                  <span className="text-gray-500">Evaluates experience, skills & leadership</span>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs flex items-center justify-center">
                  3
                </span>
                <div>
                  <strong className="text-gray-900 block font-bold">
                    Weighted scoring matrix
                  </strong>
                  <span className="text-gray-500">100-point aggregate score with rationale</span>
                </div>
              </li>
            </ol>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hire / Hold / Reject verdict</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Experience match %</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Deep scoring matrix</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Gap analysis & red flags</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
