import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const HomeFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 shrink-0">
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid md:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
          {/* Brand Info (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#7c8b88] rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <div className="absolute w-5 h-2.5 bg-[#2b3534] -rotate-45 translate-x-0.5 -translate-y-0.5 rounded-sm" />
                  <div className="absolute w-5 h-2.5 bg-[#e2e8f0] rotate-45 -translate-x-0.5 translate-y-0.5 rounded-sm opacity-90" />
                </div>
              </div>
              <span className="text-2xl font-black text-[#2b3534]">
                VH<span className="text-[#ff4d15]">i</span>MS
              </span>
            </div>

            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Visionary Hire Infera Metrix System — an intelligent ATS built to make hiring clear, structured, and confidently human.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff4d15] hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff4d15] hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff4d15] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff4d15] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a href="#features" className="hover:text-[#ff4d15] transition-colors">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff4d15] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ff4d15] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#ff4d15] transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#ff4d15] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff4d15] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a href="#privacy" className="hover:text-[#ff4d15] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#ff4d15] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          © 2026 VisionaryHire LLP — All rights reserved.
        </div>
      </div>
    </footer>
  );
};
