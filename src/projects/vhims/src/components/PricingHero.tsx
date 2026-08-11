import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

interface PricingHeroProps {
  cycle: 'monthly' | 'quarterly' | 'annual';
  setCycle: (c: 'monthly' | 'quarterly' | 'annual') => void;
}

export const PricingHero: React.FC<PricingHeroProps> = ({ cycle, setCycle }) => {
  return (
    <section className="pt-16 pb-12 text-center px-12 relative overflow-hidden bg-gradient-to-b from-[#2b3534] to-[#1f2827] text-white">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ff4d15]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff4d15] bg-[#ff4d15]/10 border border-[#ff4d15]/20 px-4 py-1.5 rounded-full mb-6 shadow-sm backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Transparent Pricing · No Hidden Fees</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl font-black text-white tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
        Plans built for every team. <span className="text-[#ff4d15]">Every scale.</span>
      </h1>
      <p className="text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
        Two breakthrough AI features. Priced transparently in INR (₹). Flexible billing, cancel anytime.
      </p>

      {/* Key Guarantees Pills */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-1.5 backdrop-blur-sm">
          <span>🇮🇳</span> India Pricing (₹)
        </span>
        <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-1.5 backdrop-blur-sm">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Cancel Anytime
        </span>
        <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-1.5 backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          No Setup Fees
        </span>
        <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-1.5 backdrop-blur-sm">
          <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
          Unused Credits Roll Over
        </span>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="inline-flex bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg">
          <button
            onClick={() => setCycle('monthly')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
              cycle === 'monthly'
                ? 'bg-[#ff4d15] text-white shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setCycle('quarterly')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
              cycle === 'quarterly'
                ? 'bg-[#ff4d15] text-white shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Quarterly
          </button>
          <button
            onClick={() => setCycle('annual')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
              cycle === 'annual'
                ? 'bg-[#ff4d15] text-white shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Annual
          </button>
        </div>

        {cycle === 'annual' && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Save 15% with annual billing</span>
          </span>
        )}
      </div>
    </section>
  );
};
