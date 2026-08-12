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
        className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 flex items-center justify-center font-black text-white shadow-md shadow-indigo-500/20 shrink-0"
        style={{width: size, height: size, fontSize: size * 0.45}}
      >
        DSP
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-tight leading-none ${
              darkBg ? 'text-white' : 'text-slate-900'
            }`}
            style={{fontSize: Math.max(14, size * 0.45)}}
          >
            DemoSuperPlatform
          </span>
          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-0.5">
            Creator Suite
          </span>
        </div>
      )}
    </div>
  );
};
