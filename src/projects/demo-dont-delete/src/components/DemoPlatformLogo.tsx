import type {FC} from 'react';

type DemoPlatformLogoProps = {
  size?: number;
  showText?: boolean;
  darkBg?: boolean;
};

export const DemoPlatformLogo: FC<DemoPlatformLogoProps> = ({
  size = 40,
  showText = true,
  darkBg = false,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-amber-400 flex items-center justify-center font-black text-white shadow-md shadow-indigo-600/25 shrink-0 border border-white/20"
        style={{width: size, height: size, fontSize: size * 0.42}}
      >
        DSP
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-tight leading-none ${
              darkBg ? 'text-white' : 'text-slate-900'
            }`}
            style={{fontSize: Math.max(15, size * 0.44)}}
          >
            DemoSuperPlatform
          </span>
          <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Creator Suite
          </span>
        </div>
      )}
    </div>
  );
};

