import React from 'react';
import { Calendar, Video, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Interview {
  id: string;
  candidateName: string;
  role: string;
  date: string;
  time: string;
  interviewer: string;
  type: 'Video Call' | 'In-Person';
  status: 'Confirmed' | 'Pending';
}

const interviewsList: Interview[] = [
  {
    id: 'i1',
    candidateName: 'Marcus Vance',
    role: 'Senior Clinical Informatics Specialist',
    date: 'TODAY',
    time: '02:30 PM - 03:30 PM',
    interviewer: 'Dr. Sarah Jenkins (CMIO)',
    type: 'Video Call',
    status: 'Confirmed',
  },
  {
    id: 'i2',
    candidateName: 'Elena Rostova',
    role: 'Staff EHR Systems Architect',
    date: 'TOMORROW',
    time: '10:00 AM - 11:00 AM',
    interviewer: 'Rishabh Satija (Lead Recruiter)',
    type: 'Video Call',
    status: 'Confirmed',
  },
  {
    id: 'i3',
    candidateName: 'David K. Miller',
    role: 'Patient Portal Product Manager',
    date: 'AUG 14',
    time: '04:00 PM - 05:00 PM',
    interviewer: 'VP of Product Engineering',
    type: 'In-Person',
    status: 'Pending',
  },
  {
    id: 'i4',
    candidateName: 'Aisha Patel',
    role: 'Biomedical Data Scientist',
    date: 'AUG 15',
    time: '11:30 AM - 12:30 PM',
    interviewer: 'Head of Clinical Analytics',
    type: 'Video Call',
    status: 'Confirmed',
  },
];

export const UpcomingInterviews: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-gray-900 tracking-tight">
            Upcoming Interviews
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Scheduled evaluations and candidate panel discussions
          </p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
          <Calendar className="w-4 h-4" />
        </div>
      </div>

      {/* Interview List */}
      <div className="divide-y divide-gray-100 flex-1">
        {interviewsList.map((item) => (
          <div key={item.id} className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Date Badge */}
              <div className="w-16 py-1.5 bg-gray-100 border border-gray-200 rounded-xl flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] font-extrabold tracking-wider text-[#ff4d15] uppercase">
                  {item.date}
                </span>
                <Clock className="w-3 h-3 text-gray-400 mt-0.5" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-gray-900">
                    {item.candidateName}
                  </h4>
                  <span className="px-1.5 py-0.2 bg-gray-100 text-gray-700 text-[10px] font-semibold rounded">
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                <div className="flex items-center gap-2 mt-0.5 text-[11px] text-gray-400">
                  <span className="text-gray-600 font-medium">
                    With: {item.interviewer}
                  </span>
                </div>
              </div>
            </div>

            {/* Meeting Type & Join Button */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
                {item.type === 'Video Call' ? (
                  <Video className="w-3.5 h-3.5 text-blue-600" />
                ) : (
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                )}
                <span>{item.type}</span>
              </div>

              <button className="p-1.5 bg-[#2d3736] hover:bg-[#202827] text-white rounded-lg transition-colors flex items-center gap-1 text-xs px-2.5 font-medium">
                <span>Join</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
