import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {
  ArrowLeft,
  Users,
  MoreVertical,
  Paperclip,
  Send,
  CheckCheck,
  PhoneCall,
  Mic,
} from 'lucide-react';

const {fontFamily} = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
});

const ALEX_AVATAR =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&q=80';
const SARAH_AVATAR =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&q=80';
const ATTACHMENT_PREVIEW =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=350&fit=crop&q=80';

export const CHAT_MESSAGE_COUNT = 6;

type ChatScreenProps = {
  visibleMessageCount?: number;
  typingIndicator?: 'alex' | 'sarah' | null;
  draftMessage?: string;
  draftCaretVisible?: boolean;
  finalMessageText?: string;
};

const TypingBubble: FC<{avatarUrl: string}> = ({avatarUrl}) => (
  <div className="flex items-start gap-3 max-w-[80%]">
    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1">
      <Img src={avatarUrl} className="w-full h-full object-cover" />
    </div>
    <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-xs px-4 py-3 shadow-2xs inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-slate-400" />
      ))}
    </div>
  </div>
);

export const ChatScreen: FC<ChatScreenProps> = ({
  visibleMessageCount = CHAT_MESSAGE_COUNT,
  typingIndicator = null,
  draftMessage = '',
  draftCaretVisible = false,
  finalMessageText = 'Sounds great! I will join the live call now.',
}) => {
  const shown = (index: number) => index < visibleMessageCount;

  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#f8fafc'}}
      className="flex flex-col overflow-hidden select-none text-slate-900 relative"
    >
      {/* ── Top Header ── */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-10 pb-5 bg-white border-b border-slate-200/90 shadow-2xs">
        <div className="flex items-center gap-4">
          <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
            <ArrowLeft size={24} />
          </button>
          <div className="relative w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
            <Users size={24} />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight truncate max-w-[420px]">
              Hello Sir Testing Community
            </h1>
            <span className="text-xs text-emerald-600 font-semibold mt-0.5">
              3 Members Online
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
            <PhoneCall size={20} />
          </button>
          <button className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* ── Main Chat Area ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 py-6 gap-5 bg-slate-50">
        {/* Date Badge */}
        <div className="flex justify-center my-2">
          <span className="bg-white border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-2xs">
            Today, 9:25 PM
          </span>
        </div>

        {/* Incoming Message 1 */}
        {shown(0) ? (
          <div className="flex items-start gap-3 max-w-[82%]">
            <div className="w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
              <Img src={ALEX_AVATAR} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-3xl rounded-tl-xs p-5 shadow-sm">
              <p className="text-xs font-extrabold text-sky-600 mb-1">Alex River</p>
              <p className="text-base text-slate-800 leading-relaxed font-normal">
                Hey team! Welcome to the new testing environment. Let us know if you encounter any UI issues.
              </p>
              <span className="text-[11px] text-slate-400 font-bold block text-right mt-2">
                9:26 PM
              </span>
            </div>
          </div>
        ) : null}

        {/* Incoming Message 2 with Attachment */}
        {shown(1) ? (
          <div className="flex items-start gap-3 max-w-[84%]">
            <div className="w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
              <Img src={SARAH_AVATAR} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-3xl rounded-tl-xs p-4 shadow-sm">
              <p className="text-xs font-extrabold text-emerald-600 mb-2">Sarah Chen</p>
              <div className="rounded-2xl overflow-hidden mb-2.5 border border-slate-100">
                <Img src={ATTACHMENT_PREVIEW} className="w-full h-[200px] object-cover" />
              </div>
              <p className="text-base text-slate-800 leading-relaxed font-normal">
                Here is the updated design mockup for review.
              </p>
              <span className="text-[11px] text-slate-400 font-bold block text-right mt-2">
                9:30 PM
              </span>
            </div>
          </div>
        ) : null}

        {/* Outgoing Message 1 */}
        {shown(2) ? (
          <div className="flex justify-end">
            <div className="bg-slate-900 text-white rounded-3xl rounded-tr-xs p-5 max-w-[80%] shadow-md">
              <p className="text-base leading-relaxed font-medium">
                Thanks Sarah! Checking out the layout right now. Looking super clean and responsive.
              </p>
              <div className="flex items-center justify-end gap-1.5 mt-2">
                <span className="text-[11px] text-slate-400 font-bold">9:32 PM</span>
                <CheckCheck size={16} className="text-sky-400" />
              </div>
            </div>
          </div>
        ) : null}

        {/* Incoming Voice Note (Message 4) */}
        {shown(3) ? (
          <div className="flex items-start gap-3 max-w-[80%]">
            <div className="w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
              <Img src={ALEX_AVATAR} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-3xl rounded-tl-xs p-4 shadow-sm flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">
                <Mic size={18} />
              </button>
              <div className="flex flex-col flex-1">
                <span className="text-xs font-bold text-slate-900">Voice Note (0:24)</span>
                <div className="w-32 h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-2/3 h-full bg-sky-500 rounded-full" />
                </div>
              </div>
              <span className="text-[11px] text-slate-400 font-bold">9:33 PM</span>
            </div>
          </div>
        ) : null}

        {/* Typing indicator */}
        {typingIndicator ? (
          <TypingBubble avatarUrl={typingIndicator === 'alex' ? ALEX_AVATAR : SARAH_AVATAR} />
        ) : null}

        {/* Outgoing Message 2 */}
        {shown(4) || shown(5) ? (
          <div className="flex justify-end">
            <div className="bg-slate-900 text-white rounded-3xl rounded-tr-xs px-6 py-4 shadow-md max-w-[80%]">
              <p className="text-base font-medium leading-relaxed">{finalMessageText}</p>
              <div className="flex items-center justify-end gap-1.5 mt-2">
                <span className="text-[11px] text-slate-400 font-bold">9:34 PM</span>
                <CheckCheck size={16} className="text-sky-400" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* ── Bottom Input Bar ── */}
      <div className="relative z-10 flex items-center gap-4 px-8 py-5 bg-white border-t border-slate-200/90 shadow-lg">
        <button className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-sky-600">
          <Paperclip size={24} />
        </button>
        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex items-center">
          {draftMessage ? (
            <span className="text-slate-900 text-base font-medium">
              {draftMessage}
              {draftCaretVisible ? (
                <span className="inline-block w-[2px] h-[1em] ml-0.5 -mb-0.5 bg-sky-500" />
              ) : null}
            </span>
          ) : (
            <span className="text-slate-400 text-base font-medium">Type a message...</span>
          )}
        </div>
        <button className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-md shrink-0">
          <Send size={24} className="translate-x-0.5" />
        </button>
      </div>
    </AbsoluteFill>
  );
};
