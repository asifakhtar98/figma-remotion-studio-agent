import type {FC} from 'react';
import {Img} from 'remotion';
import logoImg from '../assets/app_icon_transparent.png';

interface WhatsevrLogoProps {
  size?: number;
  ringed?: boolean;
}

export const WhatsevrLogo: FC<WhatsevrLogoProps> = ({size = 48, ringed = false}) => {
  return (
    <div
      className={
        'flex items-center justify-center rounded-full bg-white overflow-hidden' +
        (ringed ? ' shadow-lg border-2 border-sky-400/80' : '')
      }
      style={{
        width: size,
        height: size,
      }}
    >
      <Img
        src={logoImg}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
