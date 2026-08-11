import React from 'react';
import { Home, Info, Star, HelpCircle, Mail, Tag, LogIn } from 'lucide-react';

export const HomeHeader: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-12 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-sm">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#7c8b88] rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden">
          <div className="w-6 h-6 relative flex items-center justify-center">
            <div className="absolute w-5 h-2.5 bg-[#2b3534] -rotate-45 translate-x-0.5 -translate-y-0.5 rounded-sm" />
            <div className="absolute w-5 h-2.5 bg-[#e2e8f0] rotate-45 -translate-x-0.5 translate-y-0.5 rounded-sm opacity-90" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tight text-[#2b3534] leading-none">
            VH<span className="text-[#ff4d15]">i</span>MS
          </span>
          <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">
            AI Applicant Tracking
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-8 text-sm font-semibold text-gray-600">
        <a href="#home" className="text-[#ff4d15] font-bold flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 rounded-lg">
          <Home className="w-4 h-4 text-[#ff4d15]" />
          <span>Home</span>
        </a>
        <a href="#about" className="hover:text-gray-900 flex items-center gap-1.5 transition-colors">
          <Info className="w-4 h-4 text-gray-400" />
          <span>About</span>
        </a>
        <a href="#features" className="hover:text-gray-900 flex items-center gap-1.5 transition-colors">
          <Star className="w-4 h-4 text-gray-400" />
          <span>Features</span>
        </a>
        <a href="#faq" className="hover:text-gray-900 flex items-center gap-1.5 transition-colors">
          <HelpCircle className="w-4 h-4 text-gray-400" />
          <span>FAQ</span>
        </a>
        <a href="#contact" className="hover:text-gray-900 flex items-center gap-1.5 transition-colors">
          <Mail className="w-4 h-4 text-gray-400" />
          <span>Contact</span>
        </a>
        <a href="#pricing" className="hover:text-gray-900 flex items-center gap-1.5 transition-colors">
          <Tag className="w-4 h-4 text-gray-400" />
          <span>Pricing</span>
        </a>
      </nav>

      {/* Sign In CTA */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2.5 bg-[#2b3534] hover:bg-[#1f2827] text-white rounded-full text-xs font-bold flex items-center gap-2 transition-colors shadow-sm">
          <LogIn className="w-4 h-4 text-[#ff4d15]" />
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
};
