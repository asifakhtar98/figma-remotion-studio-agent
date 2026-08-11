import type {FC, ReactNode} from 'react';

interface PlaceholderPhotoProps {
  aspectClassName: string;
  badge?: ReactNode;
}

// Real photo content from the source screenshot is replaced with a neutral
// gradient block per project convention — swap in real assets when supplied.
export const PlaceholderPhoto: FC<PlaceholderPhotoProps> = ({aspectClassName, badge}) => {
  return (
    <div className={`relative bg-gradient-to-br from-gray-300 to-gray-400 ${aspectClassName}`}>
      {badge && (
        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white">
          {badge}
        </span>
      )}
    </div>
  );
};
