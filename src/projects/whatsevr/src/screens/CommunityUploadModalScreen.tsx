import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  AlertTriangle,
  ChevronRight,
  RotateCw,
  Image as ImageIcon,
  Play,
  Film,
  Tag,
} from 'lucide-react';
import {CommunityDetailScreen} from './CommunityDetailScreen';

const {fontFamily} = loadFont();

const uploadOptions = [
  {
    label: 'Create Memory',
    icon: <RotateCw size={22} className="text-gray-800" />,
  },
  {
    label: 'Upload Photos',
    icon: <ImageIcon size={22} className="text-gray-800" />,
  },
  {
    label: 'Create Video',
    icon: <Play size={22} className="text-gray-800 fill-gray-800" />,
  },
  {
    label: 'Create Flick',
    icon: <Film size={22} className="text-gray-800" />,
  },
  {
    label: 'Create Offer',
    icon: <Tag size={22} className="text-gray-800" />,
  },
];

export const CommunityUploadModalScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily}} className="relative overflow-hidden">
      {/* ── Background Screen (Community Detail Dimmed) ── */}
      <CommunityDetailScreen />

      {/* ── Dark Backdrop Overlay ── */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-20" />

      {/* ── Bottom Sheet Modal ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 bg-white rounded-t-[36px] px-7 pt-4 pb-8 shadow-2xl flex flex-col gap-4 border-t border-gray-100">
        {/* Grab Handle */}
        <div className="w-12 h-1.5 rounded-full bg-gray-300 mx-auto mb-1" />

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 text-center tracking-tight mb-1">
          Upload Content for community
        </h2>

        {/* Permissions Warning Alert Card */}
        <div className="flex items-center justify-between p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl cursor-pointer">
          <div className="flex items-center gap-3.5 min-w-0">
            <AlertTriangle size={22} className="text-amber-600 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-amber-900 truncate">
                Permissions Required
              </span>
              <span className="text-xs text-amber-700/90 font-medium truncate mt-0.5">
                Some permissions are not granted. Tap to open settings.
              </span>
            </div>
          </div>
          <ChevronRight size={20} className="text-amber-600 flex-shrink-0 ml-2" />
        </div>

        {/* Action Options List */}
        <div className="flex flex-col gap-3 mt-1">
          {uploadOptions.map((option) => (
            <div
              key={option.label}
              className="flex items-center gap-4 p-4 min-h-[64px] bg-gray-50 border border-gray-200/80 rounded-2xl cursor-pointer hover:bg-gray-100/80 transition-colors shadow-2xs"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shadow-2xs flex-shrink-0">
                {option.icon}
              </div>
              <span className="text-lg font-bold text-gray-900">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
