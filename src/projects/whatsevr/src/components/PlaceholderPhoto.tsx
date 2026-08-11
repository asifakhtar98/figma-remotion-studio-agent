import type {FC, ReactNode} from 'react';
import {Img} from 'remotion';

interface PlaceholderPhotoProps {
  aspectClassName?: string;
  badge?: ReactNode;
  src?: string;
  className?: string;
}

export const PlaceholderPhoto: FC<PlaceholderPhotoProps> = ({
  aspectClassName = 'aspect-square',
  badge,
  src,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-200 ${aspectClassName} ${className}`}>
      {src ? (
        <Img src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400" />
      )}
      {badge && (
        <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md shadow-md border border-white/20">
          {badge}
        </span>
      )}
    </div>
  );
};

