import React from 'react';
import { ChevronDown, QrCode, MoreVertical, ShieldCheck, Users, Crown } from 'lucide-react';

interface DirectoryRow {
  id: string;
  badgeId: string;
  name: string;
  role: 'ADMIN' | 'MEMBER' | 'SUPERADMIN';
  email: string;
  company: string;
  plan: string;
  expiry: string;
  status: 'ACTIVE' | 'EXPIRED' | 'PENDING';
  seats: string;
  seatsSubtext: string;
}

const mockDirectoryRows: DirectoryRow[] = [
  {
    id: '1',
    badgeId: 'ADM-8F84BA958D04',
    name: 'rishabsatija5@gmail.com',
    role: 'ADMIN',
    email: 'rishabsatija5@gmail.com',
    company: 'VisionaryHire LLP',
    plan: 'Growth Monthly',
    expiry: '361 Days',
    status: 'ACTIVE',
    seats: '1 / 2',
    seatsSubtext: 'recruiter 1 / 1 admin',
  },
  {
    id: '2',
    badgeId: 'ADM-4A92BC771E02',
    name: 'sarah.chen@healthcore.org',
    role: 'ADMIN',
    email: 'sarah.chen@healthcore.org',
    company: 'HealthCore Digital',
    plan: 'Enterprise Annual',
    expiry: '240 Days',
    status: 'ACTIVE',
    seats: '4 / 5',
    seatsSubtext: 'recruiter 3 / 2 admin',
  },
  {
    id: '3',
    badgeId: 'ADM-9D11FF348C55',
    name: 'alex.rivera@medpulse.io',
    role: 'ADMIN',
    email: 'alex.rivera@medpulse.io',
    company: 'MedPulse Systems',
    plan: 'Growth Monthly',
    expiry: '18 Days',
    status: 'ACTIVE',
    seats: '2 / 2',
    seatsSubtext: 'recruiter 1 / 1 admin',
  },
  {
    id: '4',
    badgeId: 'ADM-2C55AA980F12',
    name: 'david.kumar@apexcare.com',
    role: 'ADMIN',
    email: 'david.kumar@apexcare.com',
    company: 'ApexCare Health',
    plan: 'Starter Plan',
    expiry: 'Expired',
    status: 'EXPIRED',
    seats: '0 / 1',
    seatsSubtext: 'recruiter 0 / 1 admin',
  },
  {
    id: '5',
    badgeId: 'ADM-7E33DD621B44',
    name: 'elena.rostova@synapsemed.com',
    role: 'ADMIN',
    email: 'elena.rostova@synapsemed.com',
    company: 'Synapse Medical',
    plan: 'Enterprise Annual',
    expiry: '312 Days',
    status: 'ACTIVE',
    seats: '8 / 10',
    seatsSubtext: 'recruiter 6 / 2 admin',
  },
];

export const OrganizationDirectory: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
      {/* Top Header & Search Tools */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
        <h3 className="text-base font-bold text-gray-900 tracking-tight">
          Organization Directory
        </h3>

        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative w-64">
            <input
              type="text"
              readOnly
              placeholder="Search name, ID, email, company..."
              className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-500 font-medium flex items-center gap-2 cursor-pointer">
              <span>Search company...</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 font-medium flex items-center gap-2 cursor-pointer">
              <span>All statuses</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 border-b border-gray-100 flex items-center gap-6 text-xs">
        <div className="py-3 font-semibold text-gray-900 border-b-2 border-gray-900 flex items-center gap-1.5 cursor-pointer">
          <ShieldCheck className="w-4 h-4 text-gray-800" />
          <span>Admins (5)</span>
        </div>
        <div className="py-3 font-medium text-gray-500 flex items-center gap-1.5 cursor-pointer">
          <Users className="w-4 h-4 text-gray-400" />
          <span>Members (1)</span>
        </div>
        <div className="py-3 font-medium text-gray-500 flex items-center gap-1.5 cursor-pointer">
          <Crown className="w-4 h-4 text-gray-400" />
          <span>Superadmins (1)</span>
        </div>
      </div>

      {/* Sub-header Note */}
      <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100">
        <h4 className="text-xs font-bold text-gray-800">Admin Accounts</h4>
        <p className="text-[11px] text-gray-400 mt-0.5">
          Click an admin to view only their members.
        </p>
      </div>

      {/* Directory Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/40">
              <th className="py-3 px-4 w-12 text-center">QR</th>
              <th className="py-3 px-4">Identity & ID</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Expiry</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Seats</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs">
            {mockDirectoryRows.map((row) => (
              <tr key={row.id} className="">
                {/* QR Code */}
                <td className="py-3.5 px-4 text-center">
                  <div className="w-7 h-7 bg-gray-100 rounded border border-gray-200 mx-auto flex items-center justify-center text-gray-600">
                    <QrCode className="w-4 h-4" />
                  </div>
                </td>

                {/* Identity & ID */}
                <td className="py-3.5 px-4">
                  <div className="flex flex-col gap-1 items-start">
                    <span className="inline-block px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded font-mono text-[10px] text-gray-600">
                      {row.badgeId}
                    </span>
                    <span className="font-bold text-gray-900">{row.name}</span>
                    <span className="inline-block px-1.5 py-0.2 bg-red-50 text-red-600 font-bold text-[9px] rounded uppercase">
                      {row.role}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="py-3.5 px-4 text-gray-600 font-medium">
                  {row.email}
                </td>

                {/* Company */}
                <td className="py-3.5 px-4 font-bold text-gray-900">
                  {row.company}
                </td>

                {/* Plan */}
                <td className="py-3.5 px-4 text-gray-700 font-medium">
                  {row.plan}
                </td>

                {/* Expiry */}
                <td className="py-3.5 px-4 font-medium text-gray-800">
                  {row.expiry}
                </td>

                {/* Status */}
                <td className="py-3.5 px-4">
                  {row.status === 'ACTIVE' ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-800">
                      EXPIRED
                    </span>
                  )}
                </td>

                {/* Seats */}
                <td className="py-3.5 px-4">
                  <div className="font-bold text-gray-900">
                    <span className="text-emerald-600">{row.seats.split('/')[0]}</span> /{' '}
                    <span className="text-orange-600">{row.seats.split('/')[1]}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    {row.seatsSubtext}
                  </div>
                </td>

                {/* Actions */}
                <td className="py-3.5 px-4 text-right">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 ml-auto">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
