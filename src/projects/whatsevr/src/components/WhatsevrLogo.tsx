import type {FC} from 'react';

interface WhatsevrLogoProps {
  size?: number;
  ringed?: boolean;
}

// Logo placeholder — waiting for the real logo file from the user.
// The real logo should be dropped into assets/ and imported here.
export const WhatsevrLogo: FC<WhatsevrLogoProps> = ({size = 48, ringed = false}) => {
  return (
    <div
      className={'flex items-center justify-center rounded-full bg-white' + (ringed ? ' shadow-lg' : '')}
      style={{
        width: size,
        height: size,
        border: `3px solid #29B6F6`,
      }}
    >
      <span
        className="font-bold text-sky-500 select-none"
        style={{fontSize: size * 0.35, lineHeight: 1}}
      >
        W
      </span>
    </div>
  );
};
