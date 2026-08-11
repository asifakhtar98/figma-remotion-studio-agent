import React, { useState } from 'react';
import { Target, Zap, Network, Eye, ChevronDown, ChevronUp } from 'lucide-react';

interface ValueCardItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  expandedDesc: string;
  color: string;
}

const valueItems: ValueCardItem[] = [
  {
    id: 'precision',
    icon: Target,
    title: 'Precision in Talent',
    shortDesc:
      "You shouldn't miss great candidates just because they wrote their CV differently. VHiMS helps you catch real talent by understanding intent, skills, and relevance, not just exact keywords.",
    expandedDesc:
      'Traditional ATS tools miss strong candidates because they depend on rigid keyword matching. VHiMS looks deeper — reading skills, intent, context, and real relevance across every profile. Instead of relying only on formatting or perfect phrasing, VHiMS interprets the meaning behind candidate experience, giving you a clearer picture of true potential.',
    color: 'text-[#ff4d15] bg-orange-50 border-orange-100',
  },
  {
    id: 'speed',
    icon: Zap,
    title: 'Speed Without Compromise',
    shortDesc:
      'Your time is too valuable to waste on repetitive screening and admin work. VHiMS clears the clutter so you can move quickly without sacrificing accuracy. You stay efficient and ahead of delays.',
    expandedDesc:
      'A slow hiring process risks losing top candidates to competitors. VHiMS eliminates unnecessary back-and-forth by reducing repetitive steps, keeping data centralised, and guiding you through a smooth hiring flow.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    id: 'order',
    icon: Network,
    title: 'Order in Every Workflow',
    shortDesc:
      "Hiring shouldn't feel chaotic or scattered. VHiMS keeps everything in one place so you always know what's happening and what needs attention. You gain structure, clarity, and peace of mind.",
    expandedDesc:
      'VHiMS brings everything together — resumes, communication, evaluations, interview updates — into one connected, structured system. You no longer lose track of where a candidate is or what feedback was given.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    id: 'clarity',
    icon: Eye,
    title: 'Clarity That Drives Confidence',
    shortDesc:
      'You make better decisions when you have clear information. VHiMS removes noise and highlights what actually matters so you can choose confidently — not guess. You stay in control at every stage.',
    expandedDesc:
      'VHiMS filters out noise and highlights insights that actually matter, giving you a focused, unambiguous view of your talent pipeline. Make decisions confidently with purposeful, data-backed choices.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
];

export const ValueCards: React.FC = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50/60 text-center border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-12">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-12">
          Value You Can Feel
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {valueItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openCard === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 border shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed animate-fadeIn">
                      {item.expandedDesc}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => toggleCard(item.id)}
                  className="mt-6 text-xs font-bold text-[#ff4d15] hover:underline flex items-center gap-1 w-fit"
                >
                  <span>{isOpen ? 'Show Less' : 'Read More'}</span>
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
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
