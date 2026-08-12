import type {FC} from 'react';
import {
  Home,
  Shuffle,
  LayoutGrid,
  Headphones,
  Wallet,
  User,
  LogOut,
  Zap,
} from 'lucide-react';
import {WhatsevrLogo} from './WhatsevrLogo';

export type WebNavTab = 'home' | 'random' | 'one2one' | 'calls' | 'wallet' | 'profile';

interface WebSidebarNavProps {
  activeTab: WebNavTab;
  balance?: string;
  variant?: 'standard' | 'minimal';
}

const standardNavItems = [
  {id: 'home' as WebNavTab, label: 'Home', icon: Home, badge: null},
  {id: 'random' as WebNavTab, label: 'Random Match', icon: Shuffle, badge: 'FREE'},
  {id: 'one2one' as WebNavTab, label: '1:1 Connect', icon: LayoutGrid, badge: 'LIVE'},
  {id: 'calls' as WebNavTab, label: 'Call History', icon: Headphones, badge: null},
  {id: 'wallet' as WebNavTab, label: 'Wallet & Top Up', icon: Wallet, badge: null},
  {id: 'profile' as WebNavTab, label: 'My Profile', icon: User, badge: null},
];

const minimalNavItems = [
  {id: 'home' as WebNavTab, label: 'Home', icon: Home, badge: null},
  {id: 'random' as WebNavTab, label: 'Random', icon: Shuffle, badge: null},
  {id: 'one2one' as WebNavTab, label: 'One2One', icon: LayoutGrid, badge: null},
  {id: 'calls' as WebNavTab, label: 'Calls', icon: Headphones, badge: null},
  {id: 'wallet' as WebNavTab, label: 'Wallet', icon: Wallet, badge: null},
  {id: 'profile' as WebNavTab, label: 'Profile', icon: User, badge: null},
];

export const WebSidebarNav: FC<WebSidebarNavProps> = ({
  activeTab,
  balance = '₹10,000.00',
  variant = 'standard',
}) => {
  const items = variant === 'minimal' ? minimalNavItems : standardNavItems;

  return (
    <aside className="w-[260px] h-full bg-white border-r border-slate-200/80 flex flex-col justify-between p-6 z-20 shrink-0 text-slate-900 shadow-2xs">
      <div className="flex flex-col gap-7">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-1 pt-1">
          <WhatsevrLogo size={38} ringed />
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Whats
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#0088ff]">
                Evr
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.16em] uppercase">
                YOURONES
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          {items.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-100/90 text-slate-900 font-extrabold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent
                    size={18}
                    className={isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                  <span className="text-xs tracking-tight">{item.label}</span>
                </div>

                {item.badge ? (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider ${
                      item.badge === 'LIVE'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'bg-sky-50 text-sky-600 border border-sky-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer */}
      {variant === 'minimal' ? (
        <div className="flex flex-col gap-3 pt-4">
          <div className="w-full py-2.5 px-4 rounded-xl border border-slate-200/90 bg-white text-slate-700 font-bold text-xs shadow-2xs flex items-center justify-start">
            <span>{balance}</span>
          </div>
          <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 text-left px-1 cursor-pointer">
            Log out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
          {/* Wallet Balance Card */}
          <div className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between shadow-2xs">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                BALANCE
              </span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5">
                {balance}
              </span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-sky-600 text-xs font-bold shadow-2xs">
              <Zap size={13} className="fill-sky-500 text-sky-500" />
              <span>Refill</span>
            </div>
          </div>

          {/* User Profile Mini Tile */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shadow-2xs">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 leading-tight">
                  Rahul Sharma
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  PRO Member
                </span>
              </div>
            </div>

            <button
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
              title="Log out"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
