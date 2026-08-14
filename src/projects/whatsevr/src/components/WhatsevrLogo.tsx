import type {FC} from 'react';

interface WhatsevrLogoProps {
  size?: number;
  ringed?: boolean;
}

export const WhatsevrLogo: FC<WhatsevrLogoProps> = ({size = 48, ringed = false}) => {
  return (
    <div
      className={
        'flex items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 overflow-hidden text-white select-none' +
        (ringed ? ' shadow-lg border-2 border-sky-400/80' : '')
      }
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{width: size * 0.58, height: size * 0.58}}
      >
        <path d="M3 6l4.5 12 4.5-9 4.5 9 4.5-12" />
      </svg>
    </div>
  );
};
