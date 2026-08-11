import type {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {
  ArrowLeft,
  Users,
  MoreVertical,
  Paperclip,
  Send,
  CheckCheck,
} from 'lucide-react';

const {fontFamily} = loadFont();

const ALEX_AVATAR =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80';
const SARAH_AVATAR =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80';
const ATTACHMENT_PREVIEW =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=350&fit=crop&q=80';

export const CHAT_MESSAGE_COUNT = 4;

type ChatScreenProps = {
  /**
   * How many messages of the conversation are shown, oldest first.
   * Defaults to the whole conversation, which is the still render.
   */
  visibleMessageCount?: number;
  /** Show a "typing…" bubble from this person beneath the visible messages. */
  typingIndicator?: 'alex' | 'sarah' | null;
  /** Text currently sitting in the input bar. Empty shows the placeholder. */
  draftMessage?: string;
  /** Whether the input caret is drawn this frame. */
  draftCaretVisible?: boolean;
  /** Copy of the final outgoing message. */
  finalMessageText?: string;
};

const TypingBubble: FC<{avatarUrl: string}> = ({avatarUrl}) => (
  <div className="flex items-start gap-3 max-w-[80%]">
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mt-1">
      <Img src={avatarUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
    <div className="bg-white border border-gray-200/80 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-[7px] h-[7px] rounded-full bg-gray-400" />
      ))}
    </div>
  </div>
);

export const ChatScreen: FC<ChatScreenProps> = ({
  visibleMessageCount = CHAT_MESSAGE_COUNT,
  typingIndicator = null,
  draftMessage = '',
  draftCaretVisible = false,
  finalMessageText = 'hi',
}) => {
  const shown = (index: number) => index < visibleMessageCount;

  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor: '#fafbfc'}}
      className="flex flex-col overflow-hidden relative"
    >
      {/* ── Background Subtle Wavy Pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="wavy-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 40 Q 30 10, 60 40 T 120 40"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />
            <path
              d="M 0 80 Q 30 50, 60 80 T 120 80"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
      </svg>

      {/* ── Top App Header ── */}
      <div className="relative z-10 flex items-center justify-between px-7 py-5 bg-white border-b border-gray-200/80 shadow-xs">
        <div className="flex items-center gap-4">
          <ArrowLeft size={28} className="text-gray-800 cursor-pointer" />
          <div className="w-13 h-13 rounded-full bg-gray-200/80 border border-gray-300/50 flex items-center justify-center text-gray-600 flex-shrink-0">
            <Users size={26} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight truncate max-w-[550px]">
            Hello sir I am testing
          </h1>
        </div>
        <MoreVertical size={28} className="text-gray-700 cursor-pointer" />
      </div>

      {/* ── Main Chat Conversation ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-7 py-6 gap-5 overflow-hidden">
        {/* Date Badge */}
        <div className="flex justify-center my-1">
          <span className="bg-gray-200/70 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Today, 9:25 PM
          </span>
        </div>

        {/* Incoming Message 1 */}
        {shown(0) ? (
          <div className="flex items-start gap-3 max-w-[80%]">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mt-1">
              <Img
                src={ALEX_AVATAR}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="bg-white border border-gray-200/80 rounded-2xl rounded-tl-xs p-4 shadow-xs">
              <p className="text-xs font-bold text-blue-600 mb-1">Alex River</p>
              <p className="text-base text-gray-800 leading-relaxed">
                Hey team! Welcome to the new testing environment. Let us know if you encounter any UI issues.
              </p>
              <span className="text-[11px] text-gray-400 font-medium block text-right mt-1.5">
                9:26 PM
              </span>
            </div>
          </div>
        ) : null}

        {/* Incoming Message 2 with Attachment */}
        {shown(1) ? (
          <div className="flex items-start gap-3 max-w-[82%]">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mt-1">
              <Img
                src={SARAH_AVATAR}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="bg-white border border-gray-200/80 rounded-2xl rounded-tl-xs p-3.5 shadow-xs">
              <p className="text-xs font-bold text-emerald-600 mb-1.5">Sarah Chen</p>
              <div className="rounded-xl overflow-hidden mb-2 border border-gray-100">
                <Img
                  src={ATTACHMENT_PREVIEW}
                  style={{width: '100%', height: '180px', objectFit: 'cover'}}
                />
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                Here is the updated design mockup for review.
              </p>
              <span className="text-[11px] text-gray-400 font-medium block text-right mt-1.5">
                9:30 PM
              </span>
            </div>
          </div>
        ) : null}

        {/* Outgoing Message 1 */}
        {shown(2) ? (
          <div className="flex justify-end">
            <div className="bg-[#1e2229] text-white rounded-2xl rounded-tr-xs p-4 max-w-[78%] shadow-sm">
              <p className="text-base leading-relaxed">
                Thanks Sarah! Checking out the layout right now. Looking super clean and responsive.
              </p>
              <div className="flex items-center justify-end gap-1.5 mt-1.5">
                <span className="text-[11px] text-gray-400 font-medium">9:32 PM</span>
                <CheckCheck size={15} className="text-blue-400" />
              </div>
            </div>
          </div>
        ) : null}

        {/* Typing indicator, shown while the next message is still on its way */}
        {typingIndicator ? (
          <TypingBubble avatarUrl={typingIndicator === 'alex' ? ALEX_AVATAR : SARAH_AVATAR} />
        ) : null}

        {/* Outgoing Message 2 */}
        {shown(3) ? (
          <div className="flex justify-end">
            <div className="bg-[#1c1f26] text-white rounded-2xl rounded-tr-xs px-5 py-3 shadow-sm max-w-[78%] min-w-[140px]">
              <p className="text-lg font-medium text-right mb-1">{finalMessageText}</p>
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-[11px] text-gray-400 font-medium">9:34 PM</span>
                <CheckCheck size={16} className="text-gray-300" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* ── Bottom Input Bar ── */}
      <div className="relative z-10 flex items-center gap-4 px-7 py-5 bg-white border-t border-gray-200/80 shadow-lg">
        <Paperclip size={28} className="text-blue-500 cursor-pointer flex-shrink-0" />
        <div className="flex-1 bg-white border border-gray-300/80 rounded-full px-6 py-4 flex items-center">
          {draftMessage ? (
            <span className="text-gray-900 text-lg font-normal">
              {draftMessage}
              {draftCaretVisible ? (
                <span className="inline-block w-[2px] h-[1em] ml-0.5 -mb-0.5 bg-blue-500" />
              ) : null}
            </span>
          ) : (
            <span className="text-gray-400 text-lg font-normal">Write a message...</span>
          )}
        </div>
        <button className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform active:scale-95">
          <Send size={24} className="translate-x-0.5" />
        </button>
      </div>
    </AbsoluteFill>
  );
};
