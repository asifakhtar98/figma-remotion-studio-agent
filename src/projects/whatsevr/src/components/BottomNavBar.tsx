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
    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-8 py-5 pb-8 shrink-0">
      {items.map((item, index) => (
        <div
          key={index}
          className={
            'flex h-14 w-14 items-center justify-center rounded-full shrink-0 ' +
            (item.active ? 'bg-black text-white shadow-sm' : 'text-slate-700')
          }
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};
