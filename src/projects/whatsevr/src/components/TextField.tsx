import type {FC, ReactNode} from 'react';

interface TextFieldProps {
  icon: ReactNode;
  placeholder?: string;
  value?: string;
  trailing?: ReactNode;
}

// Rounded-rect (2xl) field with a light border matching the screenshot — not pill-shaped.
export const TextField: FC<TextFieldProps> = ({icon, placeholder, value, trailing}) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4.5 min-h-[64px] shadow-sm">
      <span className="text-gray-400">{icon}</span>
      <span className={`flex-1 text-lg ${value ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
        {value || placeholder}
      </span>
      {trailing && <span className="text-gray-400">{trailing}</span>}
    </div>
  );
};
