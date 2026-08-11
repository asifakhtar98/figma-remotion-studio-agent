import React from 'react';
import { HomeHeader } from '../components/HomeHeader';
import { HomeHero } from '../components/HomeHero';
import { ThreePillars } from '../components/ThreePillars';
import { ValueCards } from '../components/ValueCards';
import { HomeFooter } from '../components/HomeFooter';

export const HomeScreen: React.FC = () => {
  return (
    <div className="w-[1920px] h-[2800px] bg-white font-sans antialiased text-gray-900 select-none overflow-y-auto flex flex-col">
      {/* Header Bar */}
      <HomeHeader />

      {/* Hero Banner */}
      <HomeHero />

      {/* Three Pillars Section */}
      <ThreePillars />

      {/* Value You Can Feel Section */}
      <ValueCards />

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};
