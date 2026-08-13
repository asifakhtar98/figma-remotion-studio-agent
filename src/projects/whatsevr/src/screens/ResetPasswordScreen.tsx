import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Mail, User, X, ArrowLeft, Send} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {TextField} from '../components/TextField';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const savedAccounts = [{handle: 'wtv.aryan675'}, {handle: 'wtv.devak2_268'}];

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&q=80';

export const ResetPasswordScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Hero Banner ── */}
      <div className="relative w-full overflow-hidden" style={{height: 480}}>
        <Img
          src={HERO_IMAGE_URL}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/80" />

        {/* Brand Logo Centered */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2 z-20">
          <WhatsevrLogo size={128} ringed />
        </div>
      </div>

      {/* ── Content Container ── */}
      <div className="flex flex-1 flex-col items-center px-12 pt-20 pb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight text-center">
          Reset Your Password
        </h1>
        <p className="mt-3 text-lg text-slate-500 font-medium text-center leading-relaxed max-w-[460px]">
          We will send a verification code to your email address to confirm it is you.
        </p>

        {/* Email Input Field */}
        <div className="mt-10 w-full">
          <TextField icon={<Mail size={24} className="text-sky-500" />} placeholder="Enter your registered email address" />
        </div>

        {/* Send Code CTA */}
        <div className="mt-8 w-full">
          <button className="w-full py-5 rounded-2xl bg-slate-900 text-white font-extrabold text-xl shadow-lg flex items-center justify-center gap-3">
            <Send size={22} />
            <span>Send Reset Code</span>
          </button>
        </div>

        {/* Back to Sign In */}
        <div className="mt-6 text-center">
          <span className="text-base font-bold text-slate-500 cursor-pointer flex items-center justify-center gap-2">
            <ArrowLeft size={18} />
            <span>Back to Sign In</span>
          </span>
        </div>

        {/* Saved Accounts List */}
        <div className="mt-10 flex w-full flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            SAVED PROFILES
          </span>
          <div className="flex w-full flex-col gap-3 rounded-3xl border border-slate-200/90 bg-white p-3 shadow-sm">
            {savedAccounts.map((account) => (
              <div
                key={account.handle}
                className="flex items-center gap-4 p-3.5"
              >
                <div className="flex items-center justify-center rounded-2xl bg-slate-100 text-slate-500 w-14 h-14 border border-slate-200 shrink-0">
                  <User size={28} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold text-slate-900 truncate">
                    {account.handle}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">
                    Signed out
                  </div>
                </div>

                <button className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-extrabold text-sm shadow-2xs">
                  Sign In
                </button>

                <button className="p-2 text-slate-400">
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 text-center text-xs text-slate-400 leading-relaxed max-w-md">
          By continuing, you agree to our{' '}
          <span className="text-sky-600 underline cursor-pointer">Terms of Use</span> and{' '}
          <span className="text-sky-600 underline cursor-pointer">Privacy Policy</span>.
        </div>
      </div>
    </AbsoluteFill>
  );
};
