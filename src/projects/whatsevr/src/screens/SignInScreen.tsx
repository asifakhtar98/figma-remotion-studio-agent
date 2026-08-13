import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {Mail, Lock, EyeOff, X, ArrowRight, ShieldCheck, Sparkles} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {TextField} from '../components/TextField';
import {PrimaryButton} from '../components/PrimaryButton';
import {TextCaret} from '../components/TextCaret';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const savedAccounts = [
  {
    handle: 'wtv.aryan675',
    name: 'Aryan Sharma',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80',
  },
  {
    handle: 'wtv.devak2_268',
    name: 'Devak Verma',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
  },
];

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&q=80';

type SignInScreenProps = {
  emailValue?: string;
  passwordValue?: string;
  caretField?: 'email' | 'password' | null;
};

export const SignInScreen: FC<SignInScreenProps> = ({
  emailValue = '',
  passwordValue = '',
  caretField = null,
}) => {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900"
    >
      {/* ── Top Hero Banner ── */}
      <div className="relative w-full overflow-hidden" style={{height: 480}}>
        <Img
          src={HERO_IMAGE_URL}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/80" />

        {/* Floating Top Badge */}
        <div className="absolute top-10 left-10 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold flex items-center gap-2 shadow-sm">
          <Sparkles size={14} className="text-sky-500" />
          <span>WhatsEvr Mobile</span>
        </div>

        {/* Logo centered overlapping bottom */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2 z-20">
          <WhatsevrLogo size={128} ringed />
        </div>
      </div>

      {/* ── Content Container ── */}
      <div className="flex flex-1 flex-col items-center px-12 pt-20 pb-10">
        {/* Headline */}
        <h1 className="text-4xl font-black text-slate-900 tracking-tight text-center">
          Welcome Back
        </h1>
        <p className="mt-2 text-lg text-slate-500 font-medium text-center">
          Sign in to connect 1:1 with live creators
        </p>

        {/* Form Fields */}
        <div className="mt-10 flex w-full flex-col gap-5">
          <div className="relative">
            <TextField
              icon={<Mail size={24} className="text-sky-500" />}
              placeholder="Email address or phone number"
              value={emailValue || undefined}
              trailing={caretField === 'email' ? <TextCaret /> : undefined}
            />
          </div>
          <div className="relative">
            <TextField
              icon={<Lock size={24} className="text-sky-500" />}
              placeholder="Password"
              value={passwordValue ? '•'.repeat(passwordValue.length) : undefined}
              trailing={caretField === 'password' ? <TextCaret /> : <EyeOff size={24} className="text-slate-400" />}
            />
          </div>
        </div>

        {/* Sign In Primary CTA */}
        <div className="mt-8 w-full">
          <button className="w-full py-5 rounded-2xl bg-slate-900 text-white font-extrabold text-xl shadow-lg flex items-center justify-center gap-3">
            <span>Sign In</span>
            <ArrowRight size={22} />
          </button>
        </div>

        {/* Secondary Actions Row */}
        <div className="mt-6 flex w-full items-center justify-between text-base font-bold px-1">
          <span className="text-slate-500 cursor-pointer">
            Forgot password?
          </span>
          <span className="text-sky-600 cursor-pointer flex items-center gap-1">
            Sign in with OTP →
          </span>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-slate-200" />

        {/* Register Prompt */}
        <div className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-slate-500">
          <span>Don&apos;t have an account?</span>
          <span className="font-extrabold text-sky-600 cursor-pointer">
            Create Account
          </span>
        </div>

        {/* Saved Accounts Tile Section */}
        <div className="mt-9 flex w-full flex-col gap-3">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            SAVED ACCOUNTS ON THIS DEVICE
          </span>
          <div className="flex w-full flex-col gap-3 divide-y divide-slate-100 rounded-3xl border border-slate-200/90 bg-white p-2 shadow-sm">
            {savedAccounts.map((account) => (
              <div key={account.handle} className="flex items-center gap-4 p-3.5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-2xs">
                  <Img src={account.avatarUrl} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold text-slate-900 truncate">
                    {account.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">
                    @{account.handle}
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

        {/* Legal Footer */}
        <div className="mt-auto pt-6 flex flex-col items-center gap-2 text-center text-xs text-slate-400 leading-relaxed max-w-md">
          <div className="flex items-center gap-1 text-slate-600 font-semibold mb-1">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>256-Bit Encrypted Secure Sign-In</span>
          </div>
          <p>
            By continuing, you agree to our{' '}
            <span className="text-sky-600 underline cursor-pointer">Terms of Use</span> and{' '}
            <span className="text-sky-600 underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
