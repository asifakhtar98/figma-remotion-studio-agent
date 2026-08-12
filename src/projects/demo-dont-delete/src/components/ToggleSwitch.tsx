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
    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
      <div className="flex items-center gap-3">
        {icon && <div className="p-2.5 rounded-xl bg-white text-slate-700 shadow-2xs border border-slate-100">{icon}</div>}
        <div>
          <div className="text-sm font-bold text-slate-900">{label}</div>
          {sublabel && <div className="text-xs text-slate-500 font-medium">{sublabel}</div>}
        </div>
      </div>

      <div
        className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer flex items-center ${
          enabled ? 'bg-indigo-600 justify-end' : 'bg-slate-300 justify-start'
        }`}
      >
        <div className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform" />
      </div>
    </div>
  );
};
