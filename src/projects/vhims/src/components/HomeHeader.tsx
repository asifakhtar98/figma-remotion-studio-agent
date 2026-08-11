import React from 'react';
import { Home, Info, Star, HelpCircle, Mail, Tag, LogIn } from 'lucide-react';

export const HomeHeader: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white/95 backdrop-blur border-b border-slate-200 px-12 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-sm">
      {/* Brand Logo */}
      <a href="/" className="no-underline flex items-center gap-3">
        <div className="w-[46px] h-[46px] bg-[#3e4f47] rounded-lg flex items-center justify-center font-black text-white text-xl shadow-sm">
          V
        </div>
        <span className="text-[1.75rem] font-bold text-[#3e4f47] leading-none">
          VH<span className="text-[#ff4d15]">i</span>MS
        </span>
      </a>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 list-none m-0 p-0 text-sm font-semibold text-slate-700">
        <li>
          <a href="/" className="text-[#ff4d15] font-bold flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 rounded-full transition-colors">
            <Home className="w-4 h-4 text-[#ff4d15]" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/about/" className="hover:text-[#3e4f47] flex items-center gap-1.5 transition-colors">
            <Info className="w-4 h-4 text-slate-400" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/features/" className="hover:text-[#3e4f47] flex items-center gap-1.5 transition-colors">
            <Star className="w-4 h-4 text-slate-400" />
            <span>Features</span>
          </a>
        </li>
        <li>
          <a href="/faq/" className="hover:text-[#3e4f47] flex items-center gap-1.5 transition-colors">
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>FAQ</span>
          </a>
        </li>
        <li>
          <a href="/contact/" className="hover:text-[#3e4f47] flex items-center gap-1.5 transition-colors">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="/pricing/" className="hover:text-[#3e4f47] flex items-center gap-1.5 transition-colors">
            <Tag className="w-4 h-4 text-slate-400" />
            <span>Pricing</span>
          </a>
        </li>
      </ul>

      {/* Sign In CTA */}
      <div className="flex items-center gap-4">
        <a
          href="/signin/"
          className="px-6 py-2.5 text-white rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(62,79,71,0.2)] hover:opacity-95 no-underline"
          style={{
            background: 'linear-gradient(45deg, rgb(62, 79, 71), rgb(255, 69, 0))',
          }}
        >
          <LogIn className="w-4 h-4 text-white" />
          <span>Sign In</span>
        </a>
      </div>
    </header>
  );
};


