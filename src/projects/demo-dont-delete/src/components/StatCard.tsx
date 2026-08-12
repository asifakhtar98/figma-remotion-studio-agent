import type {FC, ReactNode} from 'react';
import {ArrowUpRight, ArrowDownRight} from 'lucide-react';

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  trend: string;
  isPositive?: boolean;
  darkTheme?: boolean;
};

export const StatCard: FC<StatCardProps> = ({
  icon,
  label,
  value,
  trend,
  isPositive = true,
  darkTheme = false,
}) => {
  return (
    <div
      className={`p-5 rounded-3xl flex flex-col justify-between transition-all border ${
        darkTheme
          ? 'bg-slate-800/80 border-slate-700/80 text-white shadow-xl shadow-black/10'
          : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`p-3 rounded-2xl ${
            darkTheme
              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
              : 'bg-indigo-50 text-indigo-600'
          }`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full ${
            isPositive
              ? darkTheme
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-emerald-50 text-emerald-600'
              : darkTheme
              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              : 'bg-rose-50 text-rose-600'
          }`}
        >
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{trend}</span>
        </div>
      </div>

      <div className="mt-4">
        <div
          className={`text-xs font-semibold uppercase tracking-wider ${
            darkTheme ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {label}
        </div>
        <div className="text-2xl font-black tracking-tight mt-1">{value}</div>
      </div>
    </div>
  );
};
