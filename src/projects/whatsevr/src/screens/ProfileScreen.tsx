import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Search, Send, HeartHandshake, LayoutGrid, MessageCircle, Bell, Star, ChevronUp} from 'lucide-react';
import {Avatar} from '../components/Avatar';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

const COVER_MEDIA_URL =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=921&h=480&fit=crop&q=80';
const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';

const suggestions = [
  {
    name: 'HYPER GAMING',
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=160&h=160&fit=crop&q=80',
  },
  {
    name: 'Jafrid',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
  },
  {
    name: 'Kabir',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&q=80',
  },
];

const profileTabs = ['Wtv', 'Flicks', 'Offerings', 'Pdf', 'Tags'];

export const ProfileScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col">
      <div className="flex items-center justify-between px-6 pb-4 pt-6 bg-white border-b border-gray-100">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-[#2196F3]">WHATS</span>
          <span className="text-blue-900">EVR</span>
        </span>
        <Search size={24} className="text-gray-700 cursor-pointer" />
      </div>

      {/* Cover media */}
      <div className="relative w-full h-[240px] bg-gray-900 overflow-hidden">
        <Img src={COVER_MEDIA_URL} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="bg-white px-6 py-4 text-lg font-semibold text-gray-900 border-b border-gray-100 shadow-2xs">
        Testing Portfolio
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-3">
          <Avatar size={64} online src={USER_AVATAR_URL} />
          <div>
            <div className="flex items-center gap-1.5 text-xl font-bold text-gray-900">
              Aryan <Star size={16} className="fill-blue-500 text-blue-500" />
            </div>
            <div className="text-base text-gray-400 font-medium">@wtv.aryan675</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white cursor-pointer shadow-sm">
            <Send size={18} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white cursor-pointer shadow-sm">
            <HeartHandshake size={18} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white cursor-pointer shadow-sm">
            <LayoutGrid size={18} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around px-6 py-3 text-center bg-white border-t border-gray-100">
        <div>
          <div className="text-xl font-bold text-gray-900">3</div>
          <div className="text-sm font-medium text-gray-500">Likes</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">2</div>
          <div className="text-sm font-medium text-gray-500">Followers</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">1</div>
          <div className="text-sm font-medium text-gray-500">Connections</div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pt-5 pb-2">
        <span className="text-lg font-bold text-gray-900">People you might know</span>
        <ChevronUp size={20} className="text-[#2196F3] cursor-pointer" />
      </div>

      <div className="flex gap-4 overflow-hidden px-6 py-3">
        {suggestions.map((person) => (
          <div key={person.name} className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-3 py-4 shadow-2xs">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
              <Img src={person.avatarUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <span className="text-sm font-bold text-gray-900 truncate max-w-[90px]">{person.name}</span>
            <div className="rounded-full bg-black px-5 py-1.5 text-xs font-semibold text-white shadow-2xs cursor-pointer">Follow</div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-2 text-right text-base text-gray-900">See all</div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 pt-3 text-lg">
        {profileTabs.map((tab, index) => (
          <div key={tab} className="relative pb-2">
            <span className={index === 3 ? 'font-semibold text-gray-900' : 'text-gray-400'}>{tab}</span>
            {index === 3 && <div className="absolute -bottom-[2px] left-0 h-1 w-full rounded-full bg-blue-500" />}
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <BottomNavBar
        items={[
          {icon: <LayoutGrid size={22} />},
          {icon: <HeartHandshake size={22} />},
          {icon: <LayoutGrid size={22} />},
          {icon: <MessageCircle size={22} />},
          {icon: <Bell size={22} />},
          {icon: <Avatar size={28} />, active: true},
        ]}
      />
    </AbsoluteFill>
  );
};
