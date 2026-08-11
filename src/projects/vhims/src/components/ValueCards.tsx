import React, { useState } from 'react';
import { Target, Zap, Network, Eye, ChevronDown, ChevronUp } from 'lucide-react';

interface ValueCardItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  expandedParagraphs: string[];
}

const valueItems: ValueCardItem[] = [
  {
    id: 'precision',
    icon: Target,
    title: 'Precision in Talent',
    shortDesc:
      "You shouldn't miss great candidates just because they wrote their CV differently. VHiMS helps you catch real talent by understanding intent, skills, and relevance, not just exact keywords. You get better matches without spending hours digging through profiles.",
    expandedParagraphs: [
      'Traditional ATS tools miss strong candidates because they depend on rigid keyword matching.',
      'VHiMS looks deeper — reading skills, intent, context, and real relevance across every profile.',
      "Instead of relying only on formatting or perfect phrasing, VHiMS interprets the meaning behind a candidate's experience, giving you a clearer picture of their true potential.",
      'This gives you sharper, more reliable shortlists, fewer false negatives, and a far stronger talent pipeline.',
      "You find the right candidates sooner and with far less effort, even when their CVs don't follow traditional patterns.",
    ],
  },
  {
    id: 'speed',
    icon: Zap,
    title: 'Speed Without Compromise',
    shortDesc:
      'Your time is too valuable to waste on repetitive screening and admin work. VHiMS clears the clutter so you can move quickly without sacrificing accuracy. You stay efficient, confident, and ahead of delays.',
    expandedParagraphs: [
      "A slow hiring process doesn't just delay your team — it also risks losing top candidates to competitors.",
      'VHiMS eliminates unnecessary back-and-forth by reducing repetitive steps, keeping data centralised, and guiding you through a smooth hiring flow.',
      'With everything organised and updated automatically, you no longer have to chase information, sift through inboxes, or juggle multiple spreadsheets.',
      'Every decision becomes faster and cleaner, without sacrificing quality. You get more time to focus on conversations, strategy, and meaningful evaluation — not paperwork or organisation.',
      'And because your workflow stays predictable, candidates experience a smoother, more professional journey as they move through each stage.',
    ],
  },
  {
    id: 'order',
    icon: Network,
    title: 'Order in Every Workflow',
    shortDesc:
      "Hiring shouldn't feel chaotic or scattered. VHiMS keeps everything in one place so you always know what's happening and what needs attention. You gain structure, clarity, and peace of mind.",
    expandedParagraphs: [
      'Hiring becomes chaotic when information is scattered across inboxes, spreadsheets, folders, and tools.',
      'VHiMS brings everything together — resumes, communication, evaluations, interview updates — into one connected, structured system.',
      'You no longer lose track of where a candidate is, what feedback was given, or who needs to take action next — everything is visible at a glance.',
      'Your entire hiring process stays aligned, predictable, and easy to manage. No more confusion, no missing candidates, no lost details. Just a workflow that feels organised from start to finish.',
      'And because your tools are integrated, you spend less time switching tabs and more time making meaningful hiring decisions.',
    ],
  },
  {
    id: 'clarity',
    icon: Eye,
    title: 'Clarity That Drives Confidence',
    shortDesc:
      'You make better decisions when you have clear information. VHiMS removes noise and highlights what actually matters so you can choose confidently — not guess. You stay in control at every stage.',
    expandedParagraphs: [
      'Hiring requires clarity — clarity about candidates, the process, the data, and the outcomes.',
      'VHiMS filters out the noise and highlights the insights that actually matter, giving you a focused, unambiguous view of your talent pipeline.',
      'With organised information and clear signals, you never feel overwhelmed or unsure about the next step.',
      "With clear information at every step, you make decisions confidently and quickly. There's no guesswork, no hesitation — only purposeful, data-backed choices that support better hires.",
      'This clarity helps you move forward faster, align your team, and communicate decisions with certainty.',
    ],
  },
];

export const ValueCards: React.FC = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className="pt-0 pb-16 bg-white text-center border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-12">
        <h2 className="text-4xl font-extrabold mb-12 text-slate-800 tracking-tight">
          Value You Can Feel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {valueItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openCard === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center justify-between"
              >
                <div>
                  <div className="text-4xl text-[#ff4d15] mb-4 flex justify-center items-center w-[50px] h-[50px]">
                    <Icon className="w-10 h-10 text-[#ff4d15]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[#3e4f47] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base leading-relaxed text-justify text-slate-700">
                    {item.shortDesc}
                  </p>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-sm leading-relaxed text-justify text-slate-700 space-y-3">
                      {item.expandedParagraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => toggleCard(item.id)}
                  className="cursor-pointer text-[#ff4d15] font-semibold mt-6 flex items-center justify-center gap-2 no-underline transition-colors hover:text-[#3e4f47]"
                >
                  <span>{isOpen ? 'Show Less' : 'Read More'}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

