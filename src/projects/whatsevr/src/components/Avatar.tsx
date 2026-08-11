import type {FC} from 'react';
import {User} from 'lucide-react';

interface AvatarProps {
  size?: number;
  online?: boolean;
}

export const Avatar: FC<AvatarProps> = ({size = 72, online = false}) => {
  return (
    <div className="relative" style={{width: size, height: size}}>
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
        <User className="text-gray-400" size={size * 0.55} />
      </div>
      {online && (
        <span
          className="absolute rounded-full border-2 border-white bg-emerald-500"
          style={{width: size * 0.22, height: size * 0.22, right: 0, bottom: 0}}
        />
      )}
    </div>
  );
};
