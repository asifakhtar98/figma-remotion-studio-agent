import type {FC, ReactNode} from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({children}) => {
  return (
    <div className="flex w-full items-center justify-center rounded-full bg-black py-4 text-lg font-medium text-white">
      {children}
    </div>
  );
};
