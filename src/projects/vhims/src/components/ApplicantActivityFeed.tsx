import React from 'react';
import { User, Sparkles, ChevronRight } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  appliedDate: string;
  stage: string;
  matchScore: number;
  avatarUrl?: string;
}

const recentCandidates: Candidate[] = [
  {
    id: 'c1',
    name: 'Marcus Vance',
    role: 'Senior Clinical Informatics Specialist',
    appliedDate: '2 hours ago',
    stage: 'Interview Scheduled',
    matchScore: 96,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
  },
  {
    id: 'c2',
    name: 'Dr. Priya Sharma',
    role: 'Lead Healthcare Data Engineer',
    appliedDate: '5 hours ago',
    stage: 'Technical Assessment',
    matchScore: 92,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80',
  },
  {
    id: 'c3',
    name: 'Jonathan Miller',
    role: 'HL7 / FHIR Integration Engineer',
    appliedDate: '1 day ago',
    stage: 'Initial Screening',
    matchScore: 88,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    id: 'c4',
    name: 'Sophia Reynolds',
    role: 'Medical Device Software QA',
    appliedDate: '2 days ago',
    stage: 'Offer Sent',
    matchScore: 95,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80',
  },
];

export const ApplicantActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-gray-900 tracking-tight">
            Recent Applicants & AI Match
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Latest candidate submissions ranked by requisition suitability
          </p>
        </div>
        <button className="text-xs font-semibold text-[#ff4d15] flex items-center gap-1">
          <span>View All (1,428)</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Candidate List */}
      <div className="divide-y divide-gray-100 flex-1">
        {recentCandidates.map((c) => (
          <div key={c.id} className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {c.avatarUrl ? (
                <img
                  src={c.avatarUrl}
                  alt={c.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-gray-900">{c.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{c.role}</p>
                <div className="flex items-center gap-2 mt-0.5 text-[11px] text-gray-400">
                  <span>{c.appliedDate}</span>
                  <span>•</span>
                  <span className="font-semibold text-gray-700">{c.stage}</span>
                </div>
              </div>
            </div>

            {/* AI Match Badge & Action */}
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{c.matchScore}% Match</span>
              </div>

              <button className="px-3 py-1.5 bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
