import React from 'react';
import { Home, Info, Star, HelpCircle, Mail, Tag, LogIn } from 'lucide-react';

export const PricingHeader: React.FC = () => {
  return (
    <header className="w-full h-20 bg-[#2b3534] border-b border-[#3a4645] px-12 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-md">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#7c8b88] rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden">
          <div className="w-6 h-6 relative flex items-center justify-center">
            <div className="absolute w-5 h-2.5 bg-[#2b3534] -rotate-45 translate-x-0.5 -translate-y-0.5 rounded-sm" />
            <div className="absolute w-5 h-2.5 bg-[#e2e8f0] rotate-45 -translate-x-0.5 translate-y-0.5 rounded-sm opacity-90" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-white leading-none">
            VH<span className="text-[#ff4d15]">i</span>MS
          </span>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
            AI Recruitment
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#home" className="flex items-center gap-1.5">
          <Home className="w-4 h-4 text-gray-400" />
          <span>Home</span>
        </a>
        <a href="#about" className="flex items-center gap-1.5">
          <Info className="w-4 h-4 text-gray-400" />
          <span>About</span>
        </a>
        <a href="#features" className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-gray-400" />
          <span>Features</span>
        </a>
        <a href="#faq" className="flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-gray-400" />
          <span>FAQ</span>
        </a>
        <a href="#contact" className="flex items-center gap-1.5">
          <Mail className="w-4 h-4 text-gray-400" />
          <span>Contact</span>
        </a>
        <a href="#pricing" className="text-white font-bold flex items-center gap-1.5 px-3 py-1.5 bg-[#ff4d15] rounded-lg shadow-sm">
          <Tag className="w-4 h-4" />
          <span>Pricing</span>
        </a>
      </nav>

      {/* Action CTA */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2.5 bg-white/10 text-white rounded-xl text-xs font-semibold flex items-center gap-2 border border-white/15">
          <LogIn className="w-4 h-4 text-[#ff4d15]" />
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
};
