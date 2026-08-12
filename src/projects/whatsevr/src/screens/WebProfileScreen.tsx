import type {FC} from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  User,
  MapPin,
  Star,
  ChevronDown,
} from 'lucide-react';
import {WebSidebarNav} from '../components/WebSidebarNav';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const languages = [
  'English',
  'Hindi',
  'Bengali',
  'Telugu',
  'Marathi',
  'Tamil',
  'Urdu',
  'Gujarati',
  'Kannada',
  'Malayalam',
  'Punjabi',
  'Odia',
  'Assamese',
  'Maithili',
  'Sanskrit',
  'Nepali',
  'Sinhala',
  'Spanish',
  'Portuguese',
  'French',
  'German',
  'Italian',
  'Dutch',
  'Russian',
  'Ukrainian',
  'Polish',
  'Turkish',
  'Arabic',
  'Persian',
];

export const WebProfileScreen: FC = () => {
  return (
    <AbsoluteFill
      style={{fontFamily}}
      className="flex flex-row w-[1920px] h-[1480px] overflow-hidden select-none bg-[#f4f8fb] text-slate-900"
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d3e3f0_1.2px,transparent_1.2px)] [background-size:18px_18px] pointer-events-none opacity-80" />

      {/* ── Left Sidebar Navigation (260px) ── */}
      <WebSidebarNav activeTab="profile" balance="₹10,000.00" variant="minimal" />

      {/* ── Main Viewport Area ── */}
      <main className="relative z-10 flex-1 h-full flex flex-col overflow-y-auto p-10 pl-14 pr-12">
        <div className="flex flex-col gap-6 max-w-[1020px] mx-auto w-full">
          {/* Header Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Your profile
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#eaf4ff] text-[#0284c7] border border-[#bae0ff] text-xs font-extrabold">
                <Star size={11} className="fill-[#0284c7] text-[#0284c7]" />
                Premium
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1.5">
              This is what people see before they call you, so a clear photo and a few real details go a long way.
            </p>
          </div>

          {/* Main 2-Column Content Layout */}
          <div className="flex flex-row items-start gap-6">
            {/* Left Card: Profile Photo Box */}
            <div className="w-[320px] shrink-0 bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col items-center justify-between min-h-[460px] shadow-2xs">
              <div className="w-full flex-1 flex flex-col items-center justify-center py-6">
                <div className="w-[160px] h-[160px] rounded-full bg-[#3d434d] flex items-center justify-center text-white shadow-inner">
                  <User size={88} className="text-[#3d434d] fill-[#64748b]" />
                </div>
              </div>

              <button className="w-full py-2.5 px-4 rounded-2xl border border-slate-200/90 bg-white text-slate-600 font-semibold text-xs shadow-2xs text-center cursor-pointer hover:bg-slate-50 transition-colors">
                Choose a photo...
              </button>
            </div>

            {/* Right Stack: Form Cards */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Card 1: ABOUT YOU */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col gap-5 shadow-2xs">
                {/* Section Header */}
                <div className="flex flex-col">
                  <h2 className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                    ABOUT YOU
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Only your name, photo and the details you fill in are shown to others.
                  </p>
                </div>

                {/* Display Name & Headline */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Display name
                    </label>
                    <input
                      type="text"
                      defaultValue="performance marketer"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 outline-none focus:border-sky-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Headline
                    </label>
                    <input
                      type="text"
                      placeholder="A short line people see first"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 placeholder-slate-400 outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                {/* About You Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    About you
                  </label>
                  <textarea
                    rows={3}
                    defaultValue={`🎯 Meta Ads Expert | Performance Marketer\n💬 Let's jump on a quick call — I'll show you how I bring 3-7x ROAS for clients!\n⚡️ Reach out if you have any query about your website or your business 📈`}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 outline-none resize-none leading-relaxed focus:border-sky-400"
                  />
                </div>

                {/* Bio Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell people more about you"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 placeholder-slate-400 outline-none resize-none focus:border-sky-400"
                  />
                </div>

                {/* Date of birth & Occupation */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Date of birth
                    </label>
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 placeholder-slate-400 outline-none focus:border-sky-400"
                    />
                    <span className="text-[11px] text-slate-400 font-medium">
                      You must be 18 or older.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Occupation
                    </label>
                    <input
                      type="text"
                      placeholder="What you do"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 placeholder-slate-400 outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                {/* Relationship status & Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Relationship status
                    </label>
                    <div className="relative">
                      <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 appearance-none outline-none focus:border-sky-400 pr-9">
                        <option>Prefer not to say</option>
                        <option>Single</option>
                        <option>In a relationship</option>
                        <option>Married</option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Gender
                    </label>
                    <input
                      type="text"
                      defaultValue="Male"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 outline-none focus:border-sky-400"
                    />
                    <span className="text-[11px] text-slate-400 font-medium">
                      This can't be changed. Write to us if it's wrong.
                    </span>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                    LOCATION
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-slate-500">
                        Country
                      </label>
                      <div className="relative">
                        <select className="w-full px-3.5 py-2 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-700 appearance-none outline-none pr-8">
                          <option>Choose...</option>
                          <option>India</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-slate-500">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-slate-500">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200/90 bg-white text-xs font-medium text-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200/90 bg-white text-slate-700 font-medium text-xs shadow-2xs hover:bg-slate-50 cursor-pointer transition-colors self-start mt-1">
                    <MapPin size={13} className="text-slate-500" />
                    Use my current location
                  </button>
                </div>

                {/* Communication Languages */}
                <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                    COMMUNICATION LANGUAGES
                  </h3>
                  <div className="flex flex-wrap gap-2 max-h-[170px] overflow-y-auto pr-2 py-1">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f1f5f9] text-slate-700 border border-slate-200/60"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Save Profile Button */}
                <div className="pt-2">
                  <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-2xs hover:bg-slate-800 transition-colors">
                    Save profile
                  </button>
                </div>
              </div>

              {/* Card 2: PHOTOS */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col gap-3 shadow-2xs">
                <div className="flex flex-col">
                  <h2 className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                    PHOTOS
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Drag them into the order you want. The first one is what people see first.
                  </p>
                </div>

                <p className="text-xs text-slate-500 font-medium mt-1">
                  No photos yet.
                </p>

                <button className="px-4 py-2.5 rounded-xl border border-slate-200/90 bg-white text-slate-700 font-semibold text-xs shadow-2xs self-start cursor-pointer hover:bg-slate-50 transition-colors mt-1">
                  Choose a photo...
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AbsoluteFill>
  );
};
