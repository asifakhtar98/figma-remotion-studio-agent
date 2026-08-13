import React from 'react';

export const HomeFooter: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 shrink-0 text-slate-800">
      <div className="max-w-6xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 flex-wrap pb-8 text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-3 basis-full md:flex-[2_1_300px]">
            <div className="flex items-center gap-2.5 text-2xl font-bold text-[#3e4f47]">
              <div className="w-[44px] h-[44px] bg-[#3e4f47] rounded-lg flex items-center justify-center font-black text-white text-xl shadow-sm">
                V
              </div>
              <span className="text-2xl font-bold text-[#3e4f47]">VHiMS</span>
            </div>
            <p className="text-sm text-slate-600 max-w-[360px] leading-relaxed mt-1">
              Visionary Hire Infera Metrix System — an intelligent ATS built to make hiring clear, structured, and confidently human.
            </p>
          </div>

          {/* Product Links */}
          <div className="basis-full md:flex-[1_1_150px]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
              Product
            </h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm text-slate-600">
              <li>
                <a href="/features/" className="no-underline">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="/faq/" className="no-underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/pricing/" className="no-underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/security-compliance/" className="no-underline">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="basis-full md:flex-[1_1_150px]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
              Company
            </h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm text-slate-600">
              <li>
                <a href="/about/" className="no-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact/" className="no-underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="basis-full md:flex-[1_1_150px]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
              Legal
            </h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm text-slate-600">
              <li>
                <a href="/privacy-policy/" className="no-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions/" className="no-underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © 2026 VisionaryHire LLP — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

