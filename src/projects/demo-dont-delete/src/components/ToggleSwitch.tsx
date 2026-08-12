import type {FC, ReactNode} from 'react';

type ToggleSwitchProps = {
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  enabled: boolean;
  onToggle?: () => void;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  label,
  sublabel,
  icon,
  enabled,
}) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-[20px] bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
      <div className="flex items-center gap-3.5 min-w-0 pr-4">
        {icon && (
          <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-700 shadow-inner border border-slate-100 shrink-0">
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <div className="text-sm font-bold text-slate-900 truncate tracking-tight">{label}</div>
          {sublabel && <div className="text-xs text-slate-500 font-medium truncate mt-0.5">{sublabel}</div>}
        </div>
      </div>

      <div
        className={`w-12 h-7 rounded-full p-1 transition-all duration-200 ease-in-out cursor-pointer flex items-center shrink-0 border ${
          enabled
            ? 'bg-indigo-600 border-indigo-600 justify-end shadow-md shadow-indigo-600/30'
            : 'bg-slate-200 border-slate-300 justify-start'
        }`}
      >
        <div className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform" />
      </div>
    </div>
  );
};

