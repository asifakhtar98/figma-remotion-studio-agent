import type {FC, ReactNode} from 'react';

export interface BottomNavItem {
  icon: ReactNode;
  active?: boolean;
}

interface BottomNavBarProps {
  items: BottomNavItem[];
}

export const BottomNavBar: FC<BottomNavBarProps> = ({items}) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-8 py-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={
            'flex h-11 w-11 items-center justify-center rounded-full ' +
            (item.active ? 'bg-black text-white' : 'text-gray-800')
          }
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};
