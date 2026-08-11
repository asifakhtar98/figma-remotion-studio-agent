import React from 'react';
import { loadFont } from '@remotion/google-fonts/Inter';
import { HomeHeader } from '../components/HomeHeader';
import { HomeHero } from '../components/HomeHero';
import { ThreePillars } from '../components/ThreePillars';
import { ValueCards } from '../components/ValueCards';
import { HomeFooter } from '../components/HomeFooter';

const { fontFamily } = loadFont();

export const HomeScreen: React.FC = () => {
  return (
    <div
      style={{ fontFamily }}
      className="w-[1920px] h-full bg-white antialiased text-slate-800 select-none flex flex-col justify-between"
    >
      <div>
        {/* Header Bar */}
        <HomeHeader />

        {/* Hero Banner */}
        <HomeHero />

        {/* Three Pillars Section */}
        <ThreePillars />

        {/* Value You Can Feel Section */}
        <ValueCards />
      </div>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

