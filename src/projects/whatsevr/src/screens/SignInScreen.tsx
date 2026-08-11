import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Mail, Lock, EyeOff, X} from 'lucide-react';
import {WhatsevrLogo} from '../components/WhatsevrLogo';
import {TextField} from '../components/TextField';
import {PrimaryButton} from '../components/PrimaryButton';
import {TextCaret} from '../components/TextCaret';

const {fontFamily} = loadFont();

const savedAccounts = [
  {
    handle: 'wtv.aryan675',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
  },
  {
    handle: 'wtv.devak2_268',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
  },
];

// Hero image: publicly available Unsplash photo of people with tech/digital overlay theme.
// Closest free match to the screenshot's AI-generated social-platform hero.
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=921&h=560&fit=crop&q=80';

type SignInScreenProps = {
  /** Text in the email field. Empty shows the placeholder — the still render. */
  emailValue?: string;
  /** Text in the password field; rendered masked. */
  passwordValue?: string;
  /** Which field currently draws a caret, if any. */
  caretField?: 'email' | 'password' | null;
};

export const SignInScreen: FC<SignInScreenProps> = ({
  emailValue = '',
  passwordValue = '',
  caretField = null,
}) => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col">

      {/* ── Hero banner ── */}
      <div className="relative w-full" style={{height: 300}}>
        <Img
          src={HERO_IMAGE_URL}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        {/* Subtle dark vignette at bottom so logo sits cleanly */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{height: 80, background: 'linear-gradient(to bottom, transparent, rgba(242,243,245,0.7))'}}
        />
        {/* Logo centred, half-overlapping the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
          <WhatsevrLogo size={100} ringed />
        </div>
      </div>

      {/* ── Content card ── */}
      <div className="flex flex-1 flex-col items-center px-9 pt-16">

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight">Welcome back</h1>
        <p className="mt-1 text-base text-gray-500">Sign in to continue.</p>

        {/* Fields */}
        <div className="mt-8 flex w-full flex-col gap-4">
          <TextField
            icon={<Mail size={20} />}
            placeholder="Email address"
            value={emailValue || undefined}
            trailing={caretField === 'email' ? <TextCaret /> : undefined}
          />
          <TextField
            icon={<Lock size={20} />}
            placeholder="Password"
            value={passwordValue ? '•'.repeat(passwordValue.length) : undefined}
            trailing={caretField === 'password' ? <TextCaret /> : <EyeOff size={20} />}
          />
        </div>

        {/* CTA */}
        <div className="mt-5 w-full">
          <PrimaryButton>Sign in</PrimaryButton>
        </div>

        {/* Secondary actions row */}
        <div className="mt-5 flex w-full items-center justify-between text-[15px]">
          <span className="font-medium text-gray-500">Forgot password?</span>
          <span className="font-medium text-blue-500">Sign in with OTP →</span>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-gray-200" />

        {/* Register prompt */}
        <div className="mt-5 text-center text-[15px] text-gray-500">
          Don&apos;t have an account?
        </div>
        <div className="mt-1 text-[15px] font-semibold text-blue-500">Create Account</div>

        {/* Saved accounts */}
        <div className="mt-7 flex w-full flex-col gap-0 divide-y divide-gray-100 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          {savedAccounts.map((account) => (
            <div key={account.handle} className="flex items-center gap-4 px-4 py-3.5">
              {/* Avatar: square-ish rounded tile with gray background */}
              <div
                className="relative overflow-hidden rounded-xl bg-gray-100 border border-gray-200 flex-shrink-0"
                style={{width: 52, height: 52}}
              >
                <Img src={account.avatarUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-medium text-gray-900 truncate">{account.handle}</div>
                <div className="text-sm text-gray-400">Signed out</div>
              </div>

              {/* Bordered "Sign In" pill */}
              <div className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-900 flex-shrink-0">
                Sign In
              </div>

              <X size={18} className="text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Legal footer */}
        <p className="mt-5 mb-6 text-center text-[13px] text-gray-500 leading-relaxed">
          By continuing, you agree to our{' '}
          <span className="text-blue-500 underline">Terms of Use</span> and{' '}
          <span className="text-blue-500 underline">Privacy Policy</span>.
        </p>
      </div>
    </AbsoluteFill>
  );
};
