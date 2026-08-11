import React from 'react';
import { Crown, Plus, UserCheck, Users } from 'lucide-react';

export const MetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Super Admins */}
      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Super Admins
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
              <Crown className="w-4 h-4" />
            </div>
            <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
          1
        </div>
      </div>

      {/* Admin Accounts */}
      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Admin Accounts
          </span>
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
            <UserCheck className="w-4 h-4" />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
          1
        </div>
      </div>

      {/* Regular Members */}
      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Regular Members
          </span>
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
          1
        </div>
      </div>

      {/* Active Users */}
      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
            Active Users
          </span>
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
            <UserCheck className="w-4 h-4" />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
          2
        </div>
      </div>
    </div>
  );
};
