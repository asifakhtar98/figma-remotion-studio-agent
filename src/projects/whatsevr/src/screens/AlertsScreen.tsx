import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  UserPlus,
  Heart,
  MessageSquare,
  Clock,
  User,
  HeartHandshake,
  MessageCircle,
  Bell,
  PhoneCall,
} from 'lucide-react';
import {BottomNavBar} from '../components/BottomNavBar';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {Avatar} from '../components/Avatar';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const USER_MATEUSZ_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80';
const USER_ASIF_AVATAR =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80';
const USER_AYUSH_AVATAR =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&q=80';
const USER_PRIYA_AVATAR =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80';
const USER_DEV_AVATAR =
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80';
const USER_SARAH_AVATAR =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80';

interface AlertItemData {
  id: string;
  avatarUrl?: string;
  type: 'follower' | 'reaction' | 'comment' | 'call';
  typeLabel: string;
  timeAndAction: string;
}

interface AlertGroup {
  month: string;
  items: AlertItemData[];
}

const alertGroups: AlertGroup[] = [
  {
    month: 'June 2026',
    items: [
      {
        id: '1',
        avatarUrl: USER_MATEUSZ_AVATAR,
        type: 'follower',
        typeLabel: 'New Follower',
        timeAndAction: '11:39 AM 03 Jun > Mateusz Novak started following you',
      },
    ],
  },
  {
    month: 'January 2026',
    items: [
      {
        id: '2',
        type: 'reaction',
        typeLabel: 'New Reaction',
        timeAndAction: '11:00 AM 04 Jan > soumyabrata Ghosh reacted to mathura account video',
      },
      {
        id: '3',
        type: 'reaction',
        typeLabel: 'New Reaction',
        timeAndAction: '11:00 AM 04 Jan > soumyabrata Ghosh reacted to account testing',
      },
    ],
  },
  {
    month: 'December 2025',
    items: [
      {
        id: '4',
        avatarUrl: USER_ASIF_AVATAR,
        type: 'follower',
        typeLabel: 'New Follower',
        timeAndAction: '04:08 PM 05 Dec 2025 > Asif Ak | Software Expert started following you',
      },
    ],
  },
  {
    month: 'November 2025',
    items: [
      {
        id: '5',
        avatarUrl: USER_AYUSH_AVATAR,
        type: 'comment',
        typeLabel: 'New Comment on Your photo',
        timeAndAction: '07:25 PM 28 Nov 2025 > ayush commented: nice',
      },
      {
        id: '6',
        avatarUrl: USER_AYUSH_AVATAR,
        type: 'reaction',
        typeLabel: 'New Reaction',
        timeAndAction: '07:24 PM 28 Nov 2025 > ayush reacted to hello sir I am',
      },
    ],
  },
  {
    month: 'October 2025',
    items: [
      {
        id: '7',
        avatarUrl: USER_PRIYA_AVATAR,
        type: 'follower',
        typeLabel: 'New Follower',
        timeAndAction: '02:15 PM 19 Oct 2025 > Priya Sharma started following you',
      },
      {
        id: '8',
        avatarUrl: USER_DEV_AVATAR,
        type: 'comment',
        typeLabel: 'New Comment on Your video',
        timeAndAction: '10:42 AM 14 Oct 2025 > Dev Patel commented: amazing content!',
      },
    ],
  },
  {
    month: 'September 2025',
    items: [
      {
        id: '9',
        avatarUrl: USER_SARAH_AVATAR,
        type: 'reaction',
        typeLabel: 'New Reaction',
        timeAndAction: '06:10 PM 29 Sep 2025 > Sarah Jenkins reacted to studio update vlog',
      },
    ],
  },
  {
    month: 'August 2025',
    items: [
      {
        id: '10',
        avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&q=80',
        type: 'comment',
        typeLabel: 'New Comment on Your video',
        timeAndAction: '03:45 PM 18 Aug 2025 > Karan Mehta commented: Great tips!',
      },
    ],
  },
  {
    month: 'July 2025',
    items: [
      {
        id: '11',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80',
        type: 'follower',
        typeLabel: 'New Follower',
        timeAndAction: '11:12 AM 04 Jul 2025 > Elena Rostova started following you',
      },
    ],
  },
];

export const AlertsScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col select-none text-slate-900"
    >
      {/* ── Top Header ── */}
      <div className="px-8 pt-12 pb-5 bg-white border-b border-slate-100 shrink-0">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Alerts</h1>
      </div>

      {/* ── Alerts Content Body ── */}
      <div className="flex-1 flex flex-col px-8 py-6 gap-6 bg-slate-50 overflow-hidden">
        {alertGroups.map((group) => (
          <div key={group.month} className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-slate-900 px-1">{group.month}</h2>

            <div className="flex flex-col gap-4">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  {/* Thumbnail / Avatar */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/90 shadow-2xs shrink-0 flex items-center justify-center">
                    {item.avatarUrl ? (
                      <Img src={item.avatarUrl} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={34} />
                      </div>
                    )}
                  </div>

                  {/* Details column */}
                  <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
                    {/* Badge / Type */}
                    <div className="flex items-center gap-1.5">
                      {item.type === 'follower' && (
                        <>
                          <UserPlus size={16} strokeWidth={2.5} className="text-sky-500" />
                          <span className="text-sm font-bold text-sky-500">{item.typeLabel}</span>
                        </>
                      )}
                      {item.type === 'reaction' && (
                        <>
                          <Heart size={16} className="fill-rose-500 text-rose-500" />
                          <span className="text-sm font-bold text-rose-500">{item.typeLabel}</span>
                        </>
                      )}
                      {item.type === 'comment' && (
                        <>
                          <MessageSquare size={16} className="text-emerald-500" />
                          <span className="text-sm font-bold text-emerald-500">{item.typeLabel}</span>
                        </>
                      )}
                      {item.type === 'call' && (
                        <>
                          <PhoneCall size={16} className="text-indigo-500" />
                          <span className="text-sm font-bold text-indigo-500">{item.typeLabel}</span>
                        </>
                      )}
                    </div>

                    {/* Time & Action description */}
                    <div className="flex items-start gap-1.5 text-xs text-slate-600 font-medium leading-snug">
                      <Clock size={13} className="shrink-0 mt-0.5 text-slate-400" />
                      <span className="truncate">{item.timeAndAction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Navigation Bar ── */}
      <BottomNavBar
        items={[
          {icon: <WhatsevrLogo size={24} />},
          {icon: <HeartHandshake size={24} />},
          {icon: <WhatsevrLogo size={24} ringed />},
          {icon: <MessageCircle size={24} />},
          {icon: <Bell size={24} />, active: true},
          {icon: <Avatar size={28} />},
        ]}
      />
    </AbsoluteFill>
  );
};
