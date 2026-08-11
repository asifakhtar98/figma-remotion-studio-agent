import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingPlansGridProps {
  cycle: 'monthly' | 'quarterly' | 'annual';
}

export const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ cycle }) => {
  // Discount factor: 1 for monthly/quarterly, 0.85 for annual (15% off)
  const mult = cycle === 'annual' ? 0.85 : 1;

  const fmtPrice = (base: number) => {
    const p = Math.round(base * mult);
    return `₹${p.toLocaleString('en-IN')}`;
  };

  return (
    <section className="max-w-6xl mx-auto px-12 pb-16">
      {/* 14-day trial announcement banner */}
      <div className="flex items-center justify-between gap-4 bg-[#ff4d15]/10 border border-[#ff4d15]/20 rounded-2xl px-6 py-4 mb-10 shadow-sm">
        <p className="text-xs text-gray-800 font-medium">
          <strong className="text-[#ff4d15] font-bold">Start free for 14 days</strong> — 1,000 credits · 100 basic screenings a month · unlimited job postings. No credit card required.
        </p>
        <button className="px-4 py-2 bg-[#ff4d15] hover:bg-[#e03e09] text-white text-xs font-bold rounded-xl shadow transition-colors shrink-0">
          Start Free Trial →
        </button>
      </div>

      {/* Grid of 5 Tier Cards */}
      <div className="grid grid-cols-5 gap-4 items-stretch">
        {/* Seed Tier */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
              Seed
            </span>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              {fmtPrice(799)}
              <span className="text-xs text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">1 admin + 1 recruiter seat</p>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Credits:</span>
                <span className="font-bold text-gray-900">1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Screenings:</span>
                <span className="font-bold text-gray-900">1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jobs:</span>
                <span className="font-bold text-gray-900">Unlimited</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>ATS Pipeline</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Branded Career Page</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mandatory 2FA</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-6 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors">
            Select Plan
          </button>
        </div>

        {/* Starter Tier */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
              Starter
            </span>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              {fmtPrice(2499)}
              <span className="text-xs text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">1 admin + 1 recruiter seat</p>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Credits:</span>
                <span className="font-bold text-gray-900">5,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Screenings:</span>
                <span className="font-bold text-gray-900">3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jobs:</span>
                <span className="font-bold text-gray-900">Unlimited</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Everything in Seed</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mail Integration</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Basic Audit Logs</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-6 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors">
            Select Plan
          </button>
        </div>

        {/* Growth Tier (Most Popular - Highlighted) */}
        <div className="bg-[#2b3534] rounded-3xl border-2 border-[#ff4d15] p-6 flex flex-col justify-between shadow-xl relative scale-105 z-10 text-white">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff4d15] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow flex items-center gap-1 whitespace-nowrap">
            <Star className="w-3 h-3 fill-white" />
            <span>Most Popular</span>
          </div>

          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-orange-200 bg-[#ff4d15]/20 px-2.5 py-1 rounded-full mb-3 mt-1">
              Growth
            </span>
            <div className="text-3xl font-black text-white tracking-tight">
              {fmtPrice(5999)}
              <span className="text-xs text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-[11px] text-gray-300 mt-1">1 admin + 2 recruiter seats</p>

            <div className="mt-4 pt-4 border-t border-white/15 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300">Credits:</span>
                <span className="font-bold text-white">12,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Screenings:</span>
                <span className="font-bold text-white">8,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Jobs:</span>
                <span className="font-bold text-white">Unlimited</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-200">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Everything in Starter</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Advanced Report Builder</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Priority Support</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-6 py-2.5 bg-[#ff4d15] hover:bg-[#e03e09] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1.5">
            <span>Select Growth</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scale Tier */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
              Scale
            </span>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              {fmtPrice(19999)}
              <span className="text-xs text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">1 admin + 5 recruiter seats</p>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Credits:</span>
                <span className="font-bold text-gray-900">45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Screenings:</span>
                <span className="font-bold text-gray-900">25,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jobs:</span>
                <span className="font-bold text-gray-900">Unlimited</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Phone Support</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Custom Reports</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-6 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors">
            Select Plan
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
              Enterprise
            </span>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              Custom
            </div>
            <p className="text-[11px] text-gray-400 mt-1">Tailored for large orgs</p>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Credits:</span>
                <span className="font-bold text-[#ff4d15]">Custom</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Screenings:</span>
                <span className="font-bold text-[#ff4d15]">Custom</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Seats:</span>
                <span className="font-bold text-gray-900">Custom</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Enterprise SSO</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>API + Board Sync</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>SLA Guarantee</span>
              </li>
            </ul>
          </div>

          <button className="w-full mt-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold rounded-xl transition-colors">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};
