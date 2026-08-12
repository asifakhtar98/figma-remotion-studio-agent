import type {FC} from 'react';
import {Img} from 'remotion';
import {Eye, Heart, MessageSquare, MoreVertical, Youtube, Instagram, Linkedin} from 'lucide-react';

type ContentThumbnailCardProps = {
  thumbnailUrl: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  timeAgo: string;
  status: 'Published' | 'Scheduled' | 'Draft';
  platforms: Array<'youtube' | 'instagram' | 'linkedin'>;
  duration?: string;
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
  duration = '4:12',
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Published':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'Scheduled':
        return 'bg-amber-50 text-amber-700 border-amber-200/80';
      case 'Draft':
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-[24px] bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all">
      <div className="relative w-36 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100 shadow-inner group">
        <Img src={thumbnailUrl} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold shadow-xs">
          {duration}
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border uppercase tracking-wider ${getStatusColor()}`}
            >
              {status}
            </span>
            <span className="text-xs font-semibold text-slate-400">{timeAgo}</span>
          </div>

          <h4 className="text-base font-bold text-slate-900 truncate mt-1.5 leading-snug tracking-tight">
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

          <div className="flex items-center gap-1.5">
            {platforms.includes('youtube') && (
              <div className="p-1 rounded-md bg-red-50 text-red-600 border border-red-100" title="YouTube">
                <Youtube size={12} />
              </div>
            )}
            {platforms.includes('instagram') && (
              <div className="p-1 rounded-md bg-pink-50 text-pink-600 border border-pink-100" title="Instagram">
                <Instagram size={12} />
              </div>
            )}
            {platforms.includes('linkedin') && (
              <div className="p-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100" title="LinkedIn">
                <Linkedin size={12} />
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors shrink-0">
        <MoreVertical size={18} />
      </button>
    </div>
  );
};

