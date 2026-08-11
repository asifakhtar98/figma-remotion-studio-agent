import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  Pencil,
  UserPlus,
  Lock,
  ArrowLeftRight,
  UserCheck,
  Wallet,
  LogIn,
  Asterisk,
  Smartphone,
  HardDrive,
  Bell,
  Briefcase,
  Star,
  FileText,
  Shield,
  Users,
  Receipt,
  Info,
  LogOut,
  UserX,
  ChevronRight,
  User,
} from 'lucide-react';

const {fontFamily} = loadFont();

const USER_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';

// Avatar image placeholder URL for community member
const COMMUNITY_AVATAR_URL =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=120&fit=crop&q=80';

export const SettingsScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col overflow-hidden">

      {/* ── Top Header ── */}
      <div className="flex items-center gap-5 px-7 py-6 bg-white border-b border-gray-200">
        <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* ── Settings Content Body ── */}
      <div className="flex flex-col px-7 py-5 gap-5">

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-5 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 shadow-2xs">
              <Img src={USER_AVATAR_URL} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Aryan</h2>
              <p className="text-base text-gray-500 font-medium">@wtv.aryan675</p>
            </div>
          </div>
          <div className="p-3 text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer">
            <Pencil size={24} />
          </div>
        </div>

        {/* Your Communities Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Your communities</h3>
          <div className="flex items-center gap-5">
            {/* Add community button */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 text-gray-900 cursor-pointer shadow-sm">
              <UserPlus size={28} />
            </div>

            {/* Community card item */}
            <div className="flex flex-col items-center gap-1.5 cursor-pointer">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 p-0.5">
                <Img
                  src={COMMUNITY_AVATAR_URL}
                  style={{width: '100%', height: '100%', borderRadius: '9999px', objectFit: 'cover'}}
                />
                <div className="absolute bottom-0 right-0 bg-black text-white p-0.5 rounded-full border border-white">
                  <User size={10} />
                </div>
              </div>
              <span className="text-xs font-medium text-gray-800">Hello sir I</span>
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Account</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-900"><Lock size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Public Portfolio</h4>
                  <p className="text-sm text-gray-500">Grow your business and content creator journey</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-900"><ArrowLeftRight size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Default experience</h4>
                  <p className="text-sm text-gray-500">Which side of the app opens first</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-gray-600">YourOnes</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-900"><UserCheck size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Switch account</h4>
                  <p className="text-sm text-gray-500">Add another account or change the signed-in one</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Wallet</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-gray-900"><Wallet size={22} /></div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Wallet</h4>
                <p className="text-sm text-gray-500">Balance, top-up and transactions</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Privacy Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Privacy</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-center gap-4">
                <LogIn size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">Active Login Sessions</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-900"><Asterisk size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Change password</h4>
                  <p className="text-sm text-gray-500">Update the password you sign in with</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-gray-900"><Smartphone size={22} /></div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Device Permissions</h4>
                  <p className="text-sm text-gray-500">Camera and microphone, needed to make calls</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Storage / Cache Section */}
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
          <div className="flex items-center gap-4">
            <HardDrive size={22} className="text-gray-900" />
            <p className="text-sm text-gray-600 font-medium">
              Clear all app caches (images, videos, data) - &lt; 0.1 MB
            </p>
          </div>
        </div>

        {/* Activity Alerts Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Activity Alerts</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
            <div className="flex items-center gap-4">
              <Bell size={22} className="text-gray-900" />
              <h4 className="text-base font-bold text-gray-900">All Notifications</h4>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Collaboration Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Collaboration</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-gray-900"><Briefcase size={22} /></div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Promote With Us</h4>
                <p className="text-sm text-gray-500">Contact us to promote your content or business with whatsevr</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Support</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-gray-900"><Star size={22} /></div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Rate &amp; Review</h4>
                <p className="text-sm text-gray-500">Love the app? Let us know!</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Legal</h3>
          <div className="flex flex-col divide-y divide-gray-100 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <FileText size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">Terms of Use</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <Shield size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">Privacy Policy</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <Users size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">Community Guidelines</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <Receipt size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">Refund &amp; Cancellation</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <Info size={22} className="text-gray-900" />
                <h4 className="text-base font-bold text-gray-900">User Guide</h4>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Account Actions Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3 px-1">Account Actions</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer gap-4">
              <LogOut size={22} className="text-gray-900" />
              <h4 className="text-base font-bold text-gray-900">Sign out</h4>
            </div>

            <div className="flex items-start p-4 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer gap-4">
              <div className="mt-0.5 text-red-500"><UserX size={22} /></div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Delete account</h4>
                <p className="text-sm text-gray-500">Deactivates your account and signs you out</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AbsoluteFill>
  );
};
