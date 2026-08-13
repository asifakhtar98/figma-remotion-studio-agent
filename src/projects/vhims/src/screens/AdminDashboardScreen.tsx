import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { TopHeader } from '../components/TopHeader';
import { AddMemberForm } from '../components/AddMemberForm';
import { MetricsCards } from '../components/MetricsCards';
import { OrganizationDirectory } from '../components/OrganizationDirectory';

export const AdminDashboardScreen: React.FC = () => {
  return (
    <div className="flex bg-[#f4f5f6] font-sans antialiased text-gray-900 select-none overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Top Header Bar */}
        <TopHeader />

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 p-8 flex flex-col">
          {/* Main Title & Action Row */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-gray-200/70 text-gray-700 font-bold tracking-wider text-[10px] uppercase rounded-full">
                Admin Control
              </span>

              <button className="bg-[#2d3736] hover:bg-[#202827] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
                <ShieldCheck className="w-4 h-4" />
                <span>Role Permissions</span>
              </button>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mt-2">
              Organization membership and access
            </h2>
            <p className="text-xs text-gray-500 mt-1 max-w-3xl leading-relaxed">
              Quickly create new team members, manage admin licenses, and keep your account limits visible from a single clean control panel.
            </p>
          </div>

          {/* Grid Layout: Form on Left, Stats & Table on Right */}
          <div className="flex gap-6 flex-1 min-h-0">
            {/* Left Form Card */}
            <AddMemberForm />

            {/* Right Main Panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Stat Counters */}
              <MetricsCards />

              {/* Directory Table */}
              <OrganizationDirectory />
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
