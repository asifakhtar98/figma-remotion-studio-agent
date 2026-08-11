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
      className={`flex w-full items-center justify-center rounded-full py-3.5 min-h-[52px] text-base font-semibold ${baseBg} ${className}`}
    >
      {children}
    </div>
  );
};

