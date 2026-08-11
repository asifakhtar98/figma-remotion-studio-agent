import type {FC, ReactNode} from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'disabled';
  className?: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const baseBg = variant === 'disabled' ? 'bg-gray-400 text-white' : 'bg-black text-white';
  return (
    <div
      className={`flex w-full items-center justify-center rounded-full py-4 text-lg font-medium ${baseBg} ${className}`}
    >
      {children}
    </div>
  );
};

