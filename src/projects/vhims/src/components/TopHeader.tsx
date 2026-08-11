import React from 'react';
import { LogOut, Bell } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0">
      {/* Brand logo text */}
      <div className="flex items-center">
        <span className="text-lg font-black tracking-widest text-gray-900 uppercase">
          V H I M S
        </span>
      </div>

      {/* User profile & actions */}
      <div className="flex items-center gap-6">
        <div className="text-right">
          <div className="text-xs font-semibold text-gray-900">
            Hello, <span className="font-bold">satija.rishabh@vhims.com</span>
          </div>
          <div className="text-[11px] font-medium text-gray-400">
            Superadmin
          </div>
        </div>

        <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors">
          <LogOut className="w-4 h-4 text-gray-600" />
          <span>Logout</span>
        </button>

        <button className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100">
          <Bell className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
