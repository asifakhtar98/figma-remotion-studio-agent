import React, { useState } from 'react';
import { Sliders, Sparkles, ArrowRight } from 'lucide-react';

export const PlanRecommender: React.FC = () => {
  const [sortV, setSortV] = useState(1200);
  const [evalV, setEvalV] = useState(80);

  // Compute recommended plan based on usage
  const getRecommendedPlan = () => {
    if (sortV <= 1000 && evalV <= 10) {
      return { name: 'Seed', price: '₹799/mo', desc: '1,500 credits · Ideal for solo recruiters starting out' };
    } else if (sortV <= 3000 && evalV <= 30) {
      return { name: 'Starter', price: '₹2,499/mo', desc: '5,000 credits · Perfect for small recruiting teams' };
    } else if (sortV <= 10000 && evalV <= 120) {
      return { name: 'Growth', price: '₹5,999/mo', desc: '12,000 credits · Recommended for growing agencies & teams' };
    } else if (sortV <= 35000 && evalV <= 400) {
      return { name: 'Scale', price: '₹19,999/mo', desc: '45,000 credits · Built for high-volume talent operations' };
    } else {
      return { name: 'Enterprise', price: 'Custom Pricing', desc: 'Tailored credits & SLA support for large organizations' };
    }
  };

  const rec = getRecommendedPlan();

  return (
    <section className="max-w-6xl mx-auto px-12 pb-16">
      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Sliders className="w-5 h-5 text-[#ff4d15]" />
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            Find Your Perfect Plan
          </h3>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Sliders Area (7 cols) */}
          <div className="col-span-7 space-y-6">
            {/* Slider 1: CV Sorting */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  CVs sorted / month
                </span>
                <span className="text-xl font-extrabold text-[#ff4d15]">
                  {sortV.toLocaleString('en-IN')}{' '}
                  <span className="text-xs text-gray-400 font-medium">CVs</span>
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="50000"
                step="200"
                value={sortV}
                onChange={(e) => setSortV(Number(e.target.value))}
                className="w-full accent-[#ff4d15] cursor-pointer"
              />
            </div>

            {/* Slider 2: CV Evaluations */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  CV evaluations / month
                </span>
                <span className="text-xl font-extrabold text-[#ff4d15]">
                  {evalV.toLocaleString('en-IN')}{' '}
                  <span className="text-xs text-gray-400 font-medium">evals</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={evalV}
                onChange={(e) => setEvalV(Number(e.target.value))}
                className="w-full accent-[#ff4d15] cursor-pointer"
              />
            </div>
          </div>

          {/* Result Card (5 cols) */}
          <div className="col-span-5 bg-[#2b3534] border border-[#3a4645] rounded-2xl p-6 text-white text-center shadow-md">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#ff4d15] bg-[#ff4d15]/10 px-2.5 py-1 rounded-full mb-3">
              <Sparkles className="w-3 h-3 text-[#ff4d15]" />
              Recommended Plan
            </span>

            <div className="text-3xl font-black text-white tracking-tight">
              {rec.name}
            </div>
            <div className="text-sm font-bold text-[#ff4d15] mt-1">
              {rec.price}
            </div>

            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              {rec.desc}
            </p>

            <button className="w-full mt-5 py-2.5 bg-[#ff4d15] text-white text-xs font-bold rounded-xl shadow flex items-center justify-center gap-1">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
