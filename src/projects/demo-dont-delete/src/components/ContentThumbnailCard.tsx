import type {FC} from 'react';
import {Img} from 'remotion';
import {Eye, Heart, MessageSquare, MoreVertical} from 'lucide-react';

type ContentThumbnailCardProps = {
  thumbnailUrl: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  timeAgo: string;
  status: 'Published' | 'Scheduled' | 'Draft';
  platforms: Array<'youtube' | 'instagram' | 'linkedin'>;
};

export const ContentThumbnailCard: FC<ContentThumbnailCardProps> = ({
  thumbnailUrl,
  title,
  views,
  likes,
  comments,
  timeAgo,
  status,
  platforms,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Published':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Scheduled':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Draft':
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="flex items-center gap-4 p-3.5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all">
      <div className="relative w-36 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
        <Img src={thumbnailUrl} className="w-full h-full object-cover" />
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold">
          4:12
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${getStatusColor()}`}
            >
              {status}
            </span>
            <span className="text-xs font-semibold text-slate-400">{timeAgo}</span>
          </div>

          <h4 className="text-base font-bold text-slate-900 truncate mt-1.5 leading-snug">
            {title}
          </h4>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1">
              <Eye size={14} className="text-slate-400" />
              {views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={14} className="text-slate-400" />
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare size={14} className="text-slate-400" />
              {comments}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {platforms.includes('youtube') && (
              <span className="w-2 h-2 rounded-full bg-red-500" title="YouTube" />
            )}
            {platforms.includes('instagram') && (
              <span className="w-2 h-2 rounded-full bg-pink-500" title="Instagram" />
            )}
            {platforms.includes('linkedin') && (
              <span className="w-2 h-2 rounded-full bg-blue-600" title="LinkedIn" />
            )}
          </div>
        </div>
      </div>

      <button className="p-2 text-slate-400 hover:text-slate-700 shrink-0">
        <MoreVertical size={18} />
      </button>
    </div>
  );
};
