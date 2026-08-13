import React, { useState } from 'react';
import { PricingHeader } from '../components/PricingHeader';
import { PricingHero } from '../components/PricingHero';
import { PricingFeatures } from '../components/PricingFeatures';
import { PricingPlansGrid } from '../components/PricingPlansGrid';
import { PlanRecommender } from '../components/PlanRecommender';
import { AddonCalculator } from '../components/AddonCalculator';

export const PricingScreen: React.FC = () => {
  const [cycle, setCycle] = useState<'monthly' | 'quarterly' | 'annual'>('annual');

  return (
    <div className="bg-[#f4f5f6] font-sans antialiased text-gray-900 select-none flex flex-col">
      {/* Navigation Header */}
      <PricingHeader />

      {/* Hero Section */}
      <PricingHero cycle={cycle} setCycle={setCycle} />

      {/* Feature Breakdown Cards */}
      <PricingFeatures />

      {/* Pricing Tiers Grid */}
      <PricingPlansGrid cycle={cycle} />

      {/* Interactive Plan Recommender */}
      <PlanRecommender />

      {/* Custom Add-on Calculator */}
      <AddonCalculator />

      {/* Footer */}
      <footer className="w-full py-8 bg-[#2b3534] border-t border-[#3a4645] text-center text-xs text-gray-400 mt-auto">
        <div className="max-w-6xl mx-auto px-12 flex items-center justify-between">
          <span className="font-bold text-white">VHIMS — VisionaryHire LLP</span>
          <span>© 2026 VisionaryHire LLP. All rights reserved.</span>
          <div className="flex items-center gap-4 text-gray-300">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
