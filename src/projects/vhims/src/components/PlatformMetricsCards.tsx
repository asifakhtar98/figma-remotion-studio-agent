import React from 'react';
import { Users, Briefcase, Clock, CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';

export const PlatformMetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Total Applicants */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Total Applicants
          </span>
          <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ff4d15]">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
            1,428
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+14.2% vs last month</span>
          </div>
        </div>
      </div>

      {/* Open Requisitions */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Open Requisitions
          </span>
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Briefcase className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
            24
          </div>
          <div className="flex items-center gap-2 mt-1 text-xs font-medium text-gray-500">
            <span className="px-1.5 py-0.2 bg-red-100 text-red-700 text-[10px] font-bold rounded">
              6 Urgent
            </span>
            <span>4 added this week</span>
          </div>
        </div>
      </div>

      {/* Avg Time to Hire */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Avg. Time-to-Hire
          </span>
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <Clock className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
            18.5 <span className="text-sm font-semibold text-gray-500">Days</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>-2.4 days faster</span>
          </div>
        </div>
      </div>

      {/* Offer Acceptance Rate */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Offer Acceptance Rate
          </span>
          <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
            86.4%
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+3.1% conversion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
