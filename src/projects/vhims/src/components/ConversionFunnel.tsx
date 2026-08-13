import React from 'react';
import { Filter } from 'lucide-react';

interface Stage {
  name: string;
  count: number;
  pct: string;
  color: string;
  widthPct: string;
}

const funnelStages: Stage[] = [
  { name: 'Applied', count: 1428, pct: '100%', color: 'bg-orange-500', widthPct: 'w-full' },
  { name: 'Screened', count: 612, pct: '42.8%', color: 'bg-blue-500', widthPct: 'w-[82%]' },
  { name: 'Interviewed', count: 184, pct: '12.9%', color: 'bg-emerald-500', widthPct: 'w-[64%]' },
  { name: 'Offered', count: 42, pct: '2.9%', color: 'bg-purple-500', widthPct: 'w-[45%]' },
  { name: 'Hired', count: 36, pct: '2.5%', color: 'bg-[#2d3736]', widthPct: 'w-[32%]' },
];

export const ConversionFunnel: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-gray-900 tracking-tight">
            Conversion Funnel
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Stage progression rate from initial application to hire
          </p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
          <Filter className="w-4 h-4" />
        </div>
      </div>

      {/* Funnel Progress Bars */}
      <div className="space-y-3.5 my-auto">
        {funnelStages.map((stage) => (
          <div key={stage.name} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-800">{stage.name}</span>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-gray-900">{stage.count}</span>
                <span className="text-gray-400 font-medium">({stage.pct})</span>
              </div>
            </div>

            {/* Bar Background & Fill */}
            <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden flex">
              <div
                className={`h-full ${stage.color} ${stage.widthPct} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
