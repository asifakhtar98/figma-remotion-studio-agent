import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Mail, User, X} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {TextField} from '../components/TextField';
import {PrimaryButton} from '../components/PrimaryButton';

const {fontFamily} = loadFont();

const savedAccounts = [
  {handle: 'wtv.aryan675'},
  {handle: 'wtv.devak2_268'},
];

// Hero image: publicly available Unsplash photo matching tech/social network banner theme.
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=921&h=560&fit=crop&q=80';

export const ResetPasswordScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col">

      {/* ── Hero banner ── */}
      <div className="relative w-full" style={{height: 300}}>
        <Img
          src={HERO_IMAGE_URL}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        {/* Subtle vignette gradient at bottom so logo sits cleanly */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{height: 80, background: 'linear-gradient(to bottom, transparent, rgba(242,243,245,0.7))'}}
        />
        {/* Logo centered, overlapping the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
          <WhatsevrLogo size={100} ringed />
        </div>
      </div>

      {/* ── Content container ── */}
      <div className="flex flex-1 flex-col items-center px-9 pt-16">

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight text-center">
          Reset your password
        </h1>
        <p className="mt-2 text-base text-gray-500 text-center max-w-[340px] leading-snug">
          We will send a code to your email to check it is you.
        </p>

        {/* Email input field */}
        <div className="mt-7 w-full">
          <TextField icon={<Mail size={20} />} placeholder="Email address" />
        </div>

        {/* Send code CTA button */}
        <div className="mt-5 w-full">
          <PrimaryButton variant="disabled">Send code</PrimaryButton>
        </div>

        {/* Back to sign in link */}
        <div className="mt-5 text-center">
          <span className="text-[15px] font-medium text-gray-600 hover:underline cursor-pointer">
            Back to sign in
          </span>
        </div>

        {/* Saved accounts list */}
        <div className="mt-7 flex w-full flex-col gap-3">
          {savedAccounts.map((account) => (
            <div
              key={account.handle}
              className="flex items-center gap-4 px-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              {/* Avatar tile */}
              <div
                className="flex items-center justify-center rounded-xl bg-gray-100 border border-gray-200 flex-shrink-0"
                style={{width: 52, height: 52}}
              >
                <User size={26} className="text-gray-400" />
              </div>

              {/* User details */}
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-medium text-gray-900 truncate">
                  {account.handle}
                </div>
                <div className="text-sm text-gray-400">Signed out</div>
              </div>

              {/* Sign In pill button */}
              <div className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-900 flex-shrink-0 bg-white">
                Sign In
              </div>

              {/* Remove account icon */}
              <X size={18} className="text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Legal footer */}
        <p className="mt-auto mb-6 text-center text-[13px] text-gray-500 leading-relaxed">
          By continuing, you agree to our{' '}
          <span className="text-blue-500 underline cursor-pointer">Terms of Use</span> and{' '}
          <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </AbsoluteFill>
  );
};
