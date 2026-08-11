import React from 'react';
import { UserPlus, Eye, ChevronDown } from 'lucide-react';

export const AddMemberForm: React.FC = () => {
  return (
    <div className="w-80 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1">
        <UserPlus className="w-5 h-5 text-gray-900" />
        <h2 className="text-lg font-bold text-gray-900 tracking-tight">
          Add Member
        </h2>
      </div>
      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        Adds a member under an existing admin.
      </p>

      {/* Form Inputs */}
      <div className="space-y-4 flex-1">
        {/* Email Address */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            readOnly
            value="user@example.com"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              readOnly
              value="••••••••"
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none pr-10"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-1.5">
            Role
          </label>
          <div className="relative">
            <select
              disabled
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 font-medium appearance-none focus:outline-none pr-10 cursor-pointer"
              defaultValue="Standard Member"
            >
              <option value="Standard Member">Standard Member</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Parent Admin */}
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-1.5">
            Parent Admin
          </label>
          <input
            type="text"
            readOnly
            placeholder="Search parent admin..."
            className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <p className="text-[11px] text-gray-400 mt-2 leading-normal">
            Member inherits the selected admin's company, plan, and expiry.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full mt-6 bg-[#2d3736] hover:bg-[#202827] text-white font-medium text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors">
        <UserPlus className="w-4 h-4" />
        <span>Add Member</span>
      </button>
    </div>
  );
};
