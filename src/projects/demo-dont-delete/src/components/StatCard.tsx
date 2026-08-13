import type {FC, ReactNode} from 'react';
import {ArrowUpRight, ArrowDownRight} from 'lucide-react';

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  trend: string;
  isPositive?: boolean;
  darkTheme?: boolean;
  subtext?: string;
};

export const StatCard: FC<StatCardProps> = ({
  icon,
  label,
  value,
  trend,
  isPositive = true,
  darkTheme = false,
  subtext,
}) => {
  return (
    <div
      className={`p-5 rounded-[24px] flex flex-col justify-between relative overflow-hidden ${
        darkTheme
          ? 'bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-slate-800 text-white shadow-xl shadow-black/20'
          : 'bg-white border border-slate-200/90 text-slate-900 shadow-xs'
      }`}
    >
      <div className="flex items-center justify-between z-10">
        <div
          className={`p-3 rounded-2xl ${
            darkTheme
              ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 shadow-inner'
              : 'bg-indigo-50/90 text-indigo-600 border border-indigo-100'
          }`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center gap-1 text-[11px] font-black px-3 py-1 rounded-full border shadow-2xs ${
            isPositive
              ? darkTheme
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : darkTheme
              ? 'bg-rose-500/15 text-rose-400 border-rose-500/30'
              : 'bg-rose-50 text-rose-700 border-rose-200'
          }`}
        >
          {isPositive ? <ArrowUpRight size={13} strokeWidth={2.5} /> : <ArrowDownRight size={13} strokeWidth={2.5} />}
          <span>{trend}</span>
        </div>
      </div>

      <div className="mt-5 z-10">
        <div
          className={`text-[11px] font-extrabold uppercase tracking-wider ${
            darkTheme ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {label}
        </div>
        <div className="text-2xl font-black tracking-tight mt-1 flex items-baseline gap-2">
          <span>{value}</span>
          {subtext && (
            <span className={`text-xs font-semibold ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
              {subtext}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

