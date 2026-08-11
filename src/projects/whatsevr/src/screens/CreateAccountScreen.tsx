import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Mail, User, X, Scan} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {TextField} from '../components/TextField';
import {PrimaryButton} from '../components/PrimaryButton';

const {fontFamily} = loadFont();

const savedAccounts = [
  {
    username: 'dev_priya',
    status: 'Signed out',
  },
  {
    username: 'dev_vikram',
    status: 'Signed out',
  },
  {
    username: 'dev_arjun',
    status: 'Signed out',
  },
];

// Hero image: publicly available Unsplash photo with tech/digital network overlay matching brand theme.
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=921&h=560&fit=crop&q=80';

export const CreateAccountScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f5f6f8'}} className="flex flex-col">
      {/* ── Hero banner ── */}
      <div className="relative w-full overflow-hidden" style={{height: 310}}>
        <Img
          src={HERO_IMAGE_URL}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />

        {/* Scan QR floating action button on top right */}
        <div className="absolute top-6 right-6 z-10 flex items-center justify-center rounded-2xl bg-[#ea580c] p-3 text-white shadow-lg">
          <Scan size={22} />
        </div>

        {/* Subtle dark vignette at bottom */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: 90,
            background: 'linear-gradient(to bottom, transparent, rgba(245,246,248,0.85))',
          }}
        />

        {/* Brand logo centered, half-overlapping the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2 z-20">
          <WhatsevrLogo size={108} ringed />
        </div>
      </div>

      {/* ── Content card area ── */}
      <div className="flex flex-1 flex-col items-center px-10 pt-16">
        {/* Headline */}
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight text-center">
          Create your account
        </h1>
        <p className="mt-2 text-[17px] text-gray-500 text-center leading-snug max-w-[420px]">
          Enter your email and we will send a code to confirm it.
        </p>

        {/* Form elements */}
        <div className="mt-8 flex w-full flex-col gap-4">
          <TextField
            icon={<Mail size={22} />}
            value="asifakhtar91298.personal@gmail"
          />
        </div>

        {/* CTA button */}
        <div className="mt-5 w-full">
          <PrimaryButton className="py-4 text-[18px] font-semibold rounded-2xl bg-[#141517]">
            Create account
          </PrimaryButton>
        </div>

        {/* Secondary link */}
        <div className="mt-5 text-center">
          <span className="text-[16px] font-semibold text-blue-500 hover:underline cursor-pointer">
            Already have an account? Sign in
          </span>
        </div>

        {/* Saved account cards list */}
        <div className="mt-9 flex w-full flex-col gap-3.5">
          {savedAccounts.map((account) => (
            <div
              key={account.username}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-gray-200/90 bg-white shadow-sm"
            >
              {/* User Avatar Placeholder Box */}
              <div className="flex items-center justify-center rounded-2xl bg-gray-100 border border-gray-200 flex-shrink-0 w-[58px] h-[58px]">
                <User size={28} className="text-gray-500" />
              </div>

              {/* User details */}
              <div className="flex-1 min-w-0">
                <div className="text-[17px] font-semibold text-gray-900 truncate">
                  {account.username}
                </div>
                <div className="text-sm text-gray-400 mt-0.5">{account.status}</div>
              </div>

              {/* Sign In action pill */}
              <div className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 bg-white flex-shrink-0">
                Sign In
              </div>

              {/* Close icon */}
              <X size={20} className="text-gray-400 flex-shrink-0 ml-1 cursor-pointer" />
            </div>
          ))}
        </div>

        {/* Terms and Privacy disclaimer */}
        <div className="mt-auto mb-8 text-center text-[14px] text-gray-500 leading-relaxed max-w-[420px]">
          By continuing, you agree to our{' '}
          <span className="text-blue-500 underline cursor-pointer">Terms of Service</span> and{' '}
          <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
        </div>
      </div>
    </AbsoluteFill>
  );
};
