import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  User,
  Check,
  ArrowUpRight,
  X,
} from 'lucide-react';

const {fontFamily} = loadFont();

const BOBY_AVATAR =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80';
const USER1_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80';
const USER2_AVATAR =
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop&q=80';

export const CallsScreen: FC = () => {
  return (
    <AbsoluteFill style={{fontFamily, backgroundColor: '#f2f3f5'}} className="flex flex-col overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-center gap-5 px-7 py-6 bg-white border-b border-gray-200">
        <ArrowLeft size={28} className="text-gray-900 cursor-pointer" />
        <h1 className="text-2xl font-bold text-gray-900">Calls</h1>
      </div>

      {/* ── Call Logs List ── */}
      <div className="flex flex-1 flex-col px-7 py-4 gap-4 overflow-hidden">

        {/* ── 21 JUNE ── */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2.5 px-1 tracking-wider">
            21 JUNE
          </h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Img src={USER1_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <div className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-0.5 border border-white">
                  <X size={12} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 truncate max-w-[200px]">
                  A real time emotion...
                </h4>
                <p className="text-sm text-gray-500">Not Connected</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 font-medium">21 Jun, 2026 02:30 PM</span>
          </div>
        </div>

        {/* ── 20 JUNE ── */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2.5 px-1 tracking-wider">
            20 JUNE
          </h3>
          <div className="flex flex-col gap-3">

            {/* Boby item */}
            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Img src={BOBY_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-0.5 border border-white">
                    <Check size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Boby</h4>
                  <p className="text-sm text-gray-500">Direct call · 10s</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">20 Jun, 2026 05:08 PM</span>
            </div>

            {/* Performance mark... item */}
            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 border border-gray-200">
                  <User size={26} />
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-0.5 border border-white">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 truncate max-w-[200px]">
                    performance mark...
                  </h4>
                  <p className="text-sm text-gray-500">Direct call · 29s</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">20 Jun, 2026 05:07 PM</span>
            </div>

            {/* Want to Meet New... item */}
            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Img src={USER2_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-0.5 border border-white">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 truncate max-w-[200px]">
                    Want to Meet New ...
                  </h4>
                  <p className="text-sm text-gray-500">Direct call · 40s</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">20 Jun, 2026 05:06 PM</span>
            </div>
          </div>
        </div>

        {/* ── 19 JUNE ── */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2.5 px-1 tracking-wider">
            19 JUNE
          </h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Img src={BOBY_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-0.5 border border-white">
                  <Check size={12} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Boby</h4>
                <p className="text-sm text-gray-500">Direct call · 2m 49s</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 font-medium">19 Jun, 2026 05:39 PM</span>
          </div>
        </div>

        {/* ── 17 JUNE ── */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2.5 px-1 tracking-wider">
            17 JUNE
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Img src={BOBY_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-0.5 border border-white">
                    <X size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Boby</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">17 Jun, 2026 04:49 PM</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Img src={BOBY_AVATAR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-0.5 border border-white">
                    <X size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Boby</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">17 Jun, 2026 04:48 PM</span>
            </div>
          </div>
        </div>

        {/* ── 11 JUNE ── */}
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 px-1 tracking-wider">
            11 JUNE
          </h3>
        </div>

      </div>
    </AbsoluteFill>
  );
};
