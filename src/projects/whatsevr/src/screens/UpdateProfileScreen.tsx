import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  Camera,
  ChevronUp,
  ChevronDown,
  Pencil,
  Calendar,
  SlidersHorizontal,
  Phone,
  Mail,
  PlusCircle,
  Bot,
} from 'lucide-react';
import {PrimaryButton} from '../components/PrimaryButton';

const {fontFamily} = loadFont();

const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop&q=80';

export const UpdateProfileScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col overflow-hidden">

      {/* ── Top Header ── */}
      <div className="flex items-center justify-between px-7 py-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-5">
          <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
          <h1 className="text-2xl font-bold text-gray-900">Update Profile</h1>
        </div>
        <div className="text-gray-900 cursor-pointer">
          <Bot size={28} />
        </div>
      </div>

      {/* ── Form Container ── */}
      <div className="flex flex-col px-7 py-5 gap-5">

        {/* Profile Avatar Card */}
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-2 border-gray-900 bg-gray-100 overflow-hidden shadow-md">
            <Img src={USER_AVATAR_URL} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            <div className="absolute bottom-0 right-0 bg-black text-white p-2.5 rounded-full border-2 border-white cursor-pointer shadow-md">
              <Camera size={18} />
            </div>
          </div>
          <span className="mt-4 text-sm text-gray-500 font-medium tracking-widest">
            priy************************
          </span>
        </div>

        {/* Cover Media Section */}
        <div className="flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between cursor-pointer mb-3">
            <span className="text-base font-semibold text-gray-900">Cover Media</span>
            <ChevronUp size={20} className="text-gray-600" />
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm">
              Add Cover Image
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm">
              Add Cover Video
            </button>
          </div>
        </div>

        {/* Personal Info Group */}
        <div>
          <div className="flex items-center justify-end px-5 py-3 bg-[#18181b] text-white rounded-t-2xl gap-1 text-sm font-semibold">
            <span>Personal Info</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex flex-col gap-4 bg-white rounded-b-2xl border border-gray-200 border-t-0 p-5 shadow-sm">
            {/* Username */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Username</label>
              <div className="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-3 bg-white">
                <span className="text-base font-bold text-gray-900">wtv.aryan675</span>
                <Pencil size={18} className="text-gray-900 cursor-pointer" />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Name</label>
              <div className="rounded-xl border border-gray-300 px-4 py-3 bg-white text-base font-bold text-gray-900">
                Aryan
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Bio</label>
              <div className="rounded-xl border border-gray-300 px-4 py-3.5 bg-white text-base text-gray-400 min-h-[110px]">
                Eg; hobbies, special interests, goals, urls, emojis etc
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Location</label>
              <div className="rounded-xl border border-gray-300 px-4 py-3.5 bg-white text-base text-gray-400 min-h-[110px]">
                Eg; Home, Office, Landmark, City, Country
              </div>
            </div>

            {/* Birthday */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Birthday</label>
              <div className="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-3 bg-white text-base text-gray-400">
                <span>Select Date of Birth</span>
                <Calendar size={20} className="text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Select dropdown */}
            <div className="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-3 bg-white text-base text-gray-400">
              <span>Please select</span>
              <SlidersHorizontal size={18} className="text-gray-400 cursor-pointer" />
            </div>

            {/* Public Mobile No */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Public Mobile No</label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 bg-white">
                <Phone size={18} className="text-gray-400" />
                <span className="text-base font-medium text-gray-800">+219876543210</span>
              </div>
            </div>

            {/* Public Email Id */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Public Email Id</label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 bg-white">
                <Mail size={18} className="text-gray-400" />
                <span className="text-base text-gray-400">Eg; erik.smith@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Info Group */}
        <div>
          <div className="flex items-center justify-end px-5 py-3 bg-[#18181b] text-white rounded-t-2xl gap-1 text-sm font-semibold">
            <span>Portfolio Info</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex flex-col gap-4 bg-white rounded-b-2xl border border-gray-200 border-t-0 p-5 shadow-sm">
            {/* Portfolio Title */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Portfolio Title</label>
              <div className="rounded-xl border border-gray-300 px-4 py-3.5 bg-white text-base font-bold text-gray-900 min-h-[90px]">
                testing portfolio
              </div>
            </div>

            {/* Portfolio Status */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Portfolio Status</label>
              <div className="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-3 bg-white text-base font-bold text-gray-900">
                <span>entertainment</span>
                <SlidersHorizontal size={18} className="text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Services</label>
              <div className="flex items-center justify-between rounded-xl border border-gray-300 px-4 py-3 bg-white text-base text-gray-400">
                <span>Fill service details</span>
                <PlusCircle size={20} className="text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Portfolio Description */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-1.5">Portfolio Description</label>
              <div className="rounded-xl border border-gray-300 px-4 py-3.5 bg-white text-base font-medium text-gray-900 min-h-[160px] leading-relaxed">
                help me to fill out the following the following the link to my dear 💋 and
              </div>
            </div>
          </div>
        </div>

        {/* Update CTA Button */}
        <div className="mt-4 mb-6">
          <PrimaryButton>Update</PrimaryButton>
        </div>

      </div>
    </AbsoluteFill>
  );
};
