import React from 'react';
import { Calendar, Building2, Download } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { TopHeader } from '../components/TopHeader';
import { PlatformMetricsCards } from '../components/PlatformMetricsCards';
import { ApplicantTrendChart } from '../components/ApplicantTrendChart';
import { ConversionFunnel } from '../components/ConversionFunnel';
import { ApplicantActivityFeed } from '../components/ApplicantActivityFeed';
import { UpcomingInterviews } from '../components/UpcomingInterviews';

export const PlatformDashboardScreen: React.FC = () => {
  return (
    <div className="flex bg-[#f4f5f6] font-sans antialiased text-gray-900 select-none overflow-hidden">
      {/* Left Sidebar with Platform Dashboard Active */}
      <Sidebar activeId="platform" />

      {/* Main Right Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Top Header */}
        <TopHeader />

        {/* Scrollable Main Content */}
        <main className="flex-1 p-8 flex flex-col">
          {/* Header & Controls Bar */}
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-[#ff4d15] font-bold tracking-wider text-[10px] uppercase rounded-full">
                Recruitment & Candidate Pipeline
              </span>

              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mt-2">
                Platform Analytics & Hiring Dashboard
              </h2>
              <p className="text-xs text-gray-500 mt-1 max-w-3xl leading-relaxed">
                Real-time visibility into open job requisitions, candidate conversion funnels, monthly applicant volume trends, and upcoming interview schedules.
              </p>
            </div>

            {/* Filter Tools */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Date Filter */}
              <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-2 cursor-pointer">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Last 30 Days</span>
              </div>

              {/* Dept Filter */}
              <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-2 cursor-pointer">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>All Departments</span>
              </div>

              {/* Export Button */}
              <button className="px-4 py-2 bg-[#2d3736] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export Analytics</span>
              </button>
            </div>
          </div>

          {/* Key Metrics Row */}
          <PlatformMetricsCards />

          {/* Middle Row: Trend Chart (60%) + Conversion Funnel (40%) */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-7 flex flex-col">
              <ApplicantTrendChart />
            </div>
            <div className="col-span-5 flex flex-col">
              <ConversionFunnel />
            </div>
          </div>

          {/* Bottom Row: Applicant Feed (7 col) + Upcoming Interviews (5 col) */}
          <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
            <div className="col-span-7 flex flex-col">
              <ApplicantActivityFeed />
            </div>
            <div className="col-span-5 flex flex-col">
              <UpcomingInterviews />
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-[11px] text-gray-400 mt-6 pt-4 border-t border-gray-200/60 shrink-0">
            © 2026 VisionaryHire LLP - All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};
