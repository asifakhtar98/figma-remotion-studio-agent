import type {FC} from 'react';
import {Img} from 'remotion';
import {User} from 'lucide-react';

interface AvatarProps {
  size?: number;
  online?: boolean;
  src?: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({size = 72, online = false, src, className = ''}) => {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{width: size, height: size}}>
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 overflow-hidden border border-gray-100 shadow-2xs">
        {src ? (
          <Img src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        ) : (
          <User className="text-gray-400" size={size * 0.55} />
        )}
      </div>
      {online && (
        <span
          className="absolute rounded-full border-2 border-white bg-emerald-500 shadow-2xs"
          style={{width: size * 0.24, height: size * 0.24, right: 0, bottom: 0}}
        />
      )}
    </div>
  );
};

