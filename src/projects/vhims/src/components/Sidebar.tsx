import React from 'react';
import {
  Users,
  Activity,
  LayoutDashboard,
  Mail,
  CreditCard,
  Sliders,
  Cpu,
  MessageSquare,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: 'accounts', label: 'Accounts Management', icon: Users, active: true },
  { id: 'activity', label: 'Activity Logs', icon: Activity },
  { id: 'platform', label: 'Platform Dashboard', icon: LayoutDashboard },
  { id: 'maildrop', label: 'Maildrop Imports', icon: Mail },
  { id: 'plans', label: 'Plan Management', icon: CreditCard },
  { id: 'features', label: 'Feature Gates', icon: Sliders },
  { id: 'ai-models', label: 'AI Models', icon: Cpu },
  { id: 'contact', label: 'Contact Request Details', icon: MessageSquare },
  { id: 'demo', label: 'Demo Request Details', icon: HelpCircle },
  { id: 'upgrade', label: 'A/C Upgrade Requests', icon: TrendingUp },
];

interface SidebarProps {
  activeId?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeId = 'accounts' }) => {
  return (
    <aside className="w-64 bg-[#2b3534] text-white flex flex-col shrink-0 h-full select-none border-r border-[#3a4645]">
      {/* Brand Header */}
      <div className="p-6 flex flex-col items-center border-b border-[#374443]">
        <div className="w-16 h-16 bg-[#7c8b88] rounded-xl flex items-center justify-center mb-3 shadow-inner relative overflow-hidden">
          {/* Geometrical logo matching screenshot */}
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute w-8 h-4 bg-[#2b3534] -rotate-45 translate-x-1 -translate-y-1 rounded-sm" />
            <div className="absolute w-8 h-4 bg-[#e2e8f0] rotate-45 -translate-x-1 translate-y-1 rounded-sm opacity-90" />
          </div>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">VHIMS</h1>
        <p className="text-xs text-gray-400 font-medium mt-0.5">Applicant Tracking</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#ff4d15] text-white shadow-sm'
                  : 'text-gray-300 hover:bg-[#364241] hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

