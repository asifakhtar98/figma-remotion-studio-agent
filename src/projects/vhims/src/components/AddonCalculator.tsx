import React, { useState } from 'react';
import { Calculator, Plus, Minus, ShoppingCart } from 'lucide-react';

export const AddonCalculator: React.FC = () => {
  const [credits, setCredits] = useState(2500);
  const [screenings, setScreenings] = useState(1000);

  const creditCost = credits * 0.6;
  const screeningCost = screenings * 0.4;
  const totalCost = creditCost + screeningCost;

  return (
    <section className="max-w-6xl mx-auto px-12 pb-20">
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="px-8 py-6 bg-gray-50/70 border-b border-gray-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#ff4d15]" />
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Custom Add-On Pack Calculator
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Mix and match credits for extra usage. Unused add-on credits never expire.
            </p>
          </div>
        </div>

        {/* Content Controls */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Pack 1: AI Credit Pack */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-900">
                  AI Credit Pack
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  ₹0.6 / credit
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCredits(Math.max(0, credits - 500))}
                  className="w-9 h-9 rounded-xl border border-gray-300 bg-white hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] font-bold transition-colors flex items-center justify-center text-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <input
                  type="number"
                  value={credits}
                  onChange={(e) => setCredits(Number(e.target.value))}
                  className="w-28 text-center bg-white border border-gray-200 rounded-xl py-2 font-bold text-gray-900 focus:outline-none text-sm"
                />

                <button
                  onClick={() => setCredits(credits + 500)}
                  className="w-9 h-9 rounded-xl border border-gray-300 bg-white hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] font-bold transition-colors flex items-center justify-center text-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 flex justify-between items-center text-xs">
                <span className="text-gray-400">Subtotal:</span>
                <span className="font-extrabold text-[#ff4d15]">
                  ₹{creditCost.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Pack 2: Basic Screening Pack */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-900">
                  Basic Screening Pack
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  ₹0.4 / CV
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setScreenings(Math.max(0, screenings - 500))}
                  className="w-9 h-9 rounded-xl border border-gray-300 bg-white hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] font-bold transition-colors flex items-center justify-center text-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <input
                  type="number"
                  value={screenings}
                  onChange={(e) => setScreenings(Number(e.target.value))}
                  className="w-28 text-center bg-white border border-gray-200 rounded-xl py-2 font-bold text-gray-900 focus:outline-none text-sm"
                />

                <button
                  onClick={() => setScreenings(screenings + 500)}
                  className="w-9 h-9 rounded-xl border border-gray-300 bg-white hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] font-bold transition-colors flex items-center justify-center text-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 flex justify-between items-center text-xs">
                <span className="text-gray-400">Subtotal:</span>
                <span className="font-extrabold text-[#ff4d15]">
                  ₹{screeningCost.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Bar */}
          <div className="bg-[#2b3534] border border-[#3a4645] rounded-2xl p-6 flex items-center justify-between text-white">
            <div>
              <span className="text-xs text-gray-400 font-medium">Total Add-On Cost</span>
              <div className="text-2xl font-black text-white">
                ₹{totalCost.toLocaleString('en-IN')}
              </div>
            </div>

            <button className="px-6 py-3 bg-[#ff4d15] hover:bg-[#e03e09] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Purchase Add-On Pack</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
