import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Search, Send, HeartHandshake, LayoutGrid, MessageCircle, Bell, Star, ChevronUp, Instagram} from 'lucide-react';
import {Avatar} from '../components/Avatar';
import {BottomNavBar} from '../components/BottomNavBar';

const {fontFamily} = loadFont();

const suggestions = [
  {name: 'HYPER GAMING', icon: <Instagram size={28} className="text-gray-500" />},
  {name: 'Jafrid', icon: null},
  {name: 'kabir', icon: null},
];

const profileTabs = ['Wtv', 'Flicks', 'Offerings', 'Pdf', 'Tags'];

export const ProfileScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col">
      <div className="flex items-center justify-between px-6 pb-4 pt-6">
        <span className="text-2xl font-semibold">
          <span className="text-sky-400">WHATS</span>
          <span className="text-blue-800">EVR</span>
        </span>
        <Search size={24} className="text-gray-700" />
      </div>

      {/* Assumption: cover photo unreadable/decorative in source — kept as the labelled placeholder block. */}
      <div className="flex h-[240px] items-center justify-center bg-gray-300">
        <span className="text-xl text-gray-500">Account Cover Media</span>
      </div>

      <div className="bg-white px-6 py-4 text-lg text-gray-900">testing portfolio</div>

      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Avatar size={64} online />
          <div>
            <div className="flex items-center gap-1 text-xl text-gray-900">
              Aryan <Star size={16} className="fill-blue-500 text-blue-500" />
            </div>
            <div className="text-base text-gray-400">@wtv.aryan675</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
            <Send size={18} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
            <HeartHandshake size={18} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
            <LayoutGrid size={18} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around px-6 py-2 text-center">
        <div>
          <div className="text-xl font-semibold text-gray-900">3</div>
          <div className="text-base text-gray-500">Likes</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-gray-900">2</div>
          <div className="text-base text-gray-500">Followers</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-gray-900">1</div>
          <div className="text-base text-gray-500">Connections</div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pt-4">
        <span className="text-lg text-gray-900">People you might know</span>
        <ChevronUp size={20} className="text-blue-600" />
      </div>

      <div className="flex gap-4 overflow-hidden px-6 py-4">
        {suggestions.map((person) => (
          <div key={person.name} className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-gray-200 px-3 py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-200">
              {person.icon ?? <div className="h-full w-full rounded-xl bg-gray-400" />}
            </div>
            <span className="text-base text-gray-900">{person.name}</span>
            <div className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">Follow</div>
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
