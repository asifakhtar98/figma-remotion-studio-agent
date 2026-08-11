import React from 'react';


interface MonthData {
  month: string;
  applied: number;
  shortlisted: number;
}

const chartData: MonthData[] = [
  { month: 'Jan', applied: 180, shortlisted: 65 },
  { month: 'Feb', applied: 240, shortlisted: 92 },
  { month: 'Mar', applied: 310, shortlisted: 135 },
  { month: 'Apr', applied: 290, shortlisted: 110 },
  { month: 'May', applied: 380, shortlisted: 165 },
  { month: 'Jun', applied: 420, shortlisted: 195 },
];

export const ApplicantTrendChart: React.FC = () => {
  const maxVal = 450;
  const chartHeight = 160;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 tracking-tight">
            Applicant Volume Trends
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Monthly applicant submissions vs shortlisted candidates
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#ff4d15] inline-block" />
            <span className="text-gray-700">Total Applied</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#2d3736] inline-block" />
            <span className="text-gray-700">Shortlisted</span>
          </div>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="relative pt-4 pb-2">
        {/* Y Axis Guide Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
          <div className="border-b border-gray-400 w-full" />
          <div className="border-b border-gray-400 w-full" />
          <div className="border-b border-gray-400 w-full" />
          <div className="border-b border-gray-400 w-full" />
        </div>

        {/* Bars Container */}
        <div className="flex items-end justify-between gap-6 px-4 h-44 relative z-10">
          {chartData.map((d) => {
            const appliedHeight = (d.applied / maxVal) * chartHeight;
            const shortlistedHeight = (d.shortlisted / maxVal) * chartHeight;

            return (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="flex items-end gap-1.5 w-full justify-center">
                  {/* Applied Bar */}
                  <div
                    style={{ height: `${appliedHeight}px` }}
                    className="w-5 bg-[#ff4d15] rounded-t-md transition-all hover:bg-[#e03e09] relative group cursor-pointer"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                      {d.applied}
                    </div>
                  </div>

                  {/* Shortlisted Bar */}
                  <div
                    style={{ height: `${shortlistedHeight}px` }}
                    className="w-5 bg-[#2d3736] rounded-t-md transition-all hover:bg-[#1f2726] relative group cursor-pointer"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                      {d.shortlisted}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-500">{d.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
