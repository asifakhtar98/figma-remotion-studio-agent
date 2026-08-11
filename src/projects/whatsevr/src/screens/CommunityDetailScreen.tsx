import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Send, Heart, Pencil} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';

const {fontFamily} = loadFont();

const CREATOR_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80';

const tabs = ['About', 'Services', 'Media', 'Videos', 'Offers'];

const COMMUNITY_COVER_URL =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=921&h=500&fit=crop&q=80';

export const CommunityDetailScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f8f9fa'}} className="flex flex-col overflow-hidden">

      {/* ── Community Cover Media Banner ── */}
      <div className="relative w-full h-56 bg-gray-900 overflow-hidden">
        <Img src={COMMUNITY_COVER_URL} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Community Title Card ── */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Hello sir I am testing</h1>
      </div>

      {/* ── Creator Profile Bar ── */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 p-0.5 shadow-sm">
            <Img src={CREATOR_AVATAR} style={{width: '100%', height: '100%', borderRadius: '9999px', objectFit: 'cover'}} />
          </div>
          <span className="text-sm font-semibold text-gray-500">@wtvc.hellosiriamt_254</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-4 text-gray-800">
          <Send size={24} className="cursor-pointer" />
          <Heart size={24} className="cursor-pointer" />
          <Pencil size={22} className="cursor-pointer" />
        </div>
      </div>

      {/* ── Members Count ── */}
      <div className="flex flex-col items-center mt-6">
        <h2 className="text-3xl font-bold text-gray-900">2 Members</h2>

        {/* Chat Pill Button */}
        <div className="mt-5 w-[88%] py-3.5 rounded-full border border-gray-300 bg-white text-center text-base font-semibold text-gray-900 shadow-sm cursor-pointer hover:bg-gray-50">
          Chat
        </div>
      </div>

      {/* ── Tabs Navigation ── */}
      <div className="flex items-center gap-8 border-b border-gray-200 px-7 pt-6 pb-1 bg-transparent">
        {tabs.map((tab) => {
          const isActive = tab === 'About';
          return (
            <div key={tab} className="relative pb-3 cursor-pointer">
              <span
                className={
                  isActive
                    ? 'text-lg font-bold text-gray-900'
                    : 'text-lg text-gray-400 font-medium'
                }
              >
                {tab}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-[#2196F3]" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── About Tab Content ── */}
      <div className="flex flex-col px-7 py-6 gap-6">

        {/* Status */}
        <div className="flex flex-col gap-2 pb-5 border-b border-gray-200">
          <h3 className="text-base font-bold text-gray-900">Status</h3>
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-900 w-fit shadow-sm">
            <WhatsevrLogo size={18} />
            <span>testing</span>
          </div>
        </div>

        {/* Serve */}
        <div className="flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">Serve</h3>
            <span className="text-xs font-semibold text-gray-600 cursor-pointer">View all &gt;&gt;</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-900 w-fit shadow-sm">
            education
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1 pb-5 border-b border-gray-200">
          <h3 className="text-base font-bold text-gray-900">Location</h3>
          <p className="text-sm font-medium text-gray-700">Agra Uttar Pradesh and</p>
        </div>

        {/* Created On */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold text-gray-900">Created On</h3>
          <p className="text-sm font-medium text-gray-700">29 Nov 2025</p>
        </div>

      </div>
    </AbsoluteFill>
  );
};
