import React from 'react';
import { ArrowRight, GitMerge, Zap } from 'lucide-react';

interface Track {
  number: string;
  title: string;
  subhead: string;
  body: string;
  bestFor: string;
  howItWorks: string;
  icon: React.ReactNode;
  cta: string;
}

const tracks: Track[] = [
  {
    number: '1',
    title: 'Co-Ventures & Joint Ventures',
    subhead: 'Co-Building Sustainable, Revenue-Generating Civic Infrastructure',
    body: "We go beyond traditional advisory through Material Investing—co-building, co-owning, and co-operating high-impact social ventures alongside institutional anchors, community partners, and mission-aligned founders. Grounded in our Sustainable² (S²) Framework, every joint venture is engineered to drive measurable UN Sustainable Development Goal impact while generating its own earned revenue stream (S²). By aligning incentives, sharing risk, and embedding commercial logic directly into civic initiatives, we transform temporary community programs into permanent, self-sustaining assets that operate free from grant volatility.",
    bestFor:
      'Institutions, municipalities, and organizations looking to co-develop, fund, and scale long-term assets—such as custom digital tools, physical real estate/corridors, or regional programs.',
    howItWorks:
      'Co-development agreements, shared-risk/revenue structures, joint IP ownership, and long-term operational alignment.',
    icon: <GitMerge className="w-6 h-6" />,
    cta: 'Schedule Intake',
  },
  {
    number: '2',
    title: 'Fractional Collaboration',
    subhead: 'On-Demand, Deliverable-Driven Expertise Across 6 Workstreams',
    body: 'Access high-velocity execution and strategic leadership without the extreme overhead, slow timelines, or rigid billable hours of traditional consulting agencies. Fractional Services plug our multi-disciplinary delivery stack—Planners (policy/strategy), Architects (systems design), and Builders (rapid execution)—directly into your existing team across our six core workstreams: Partners, Policy & Comms, Studio, FinOps, Tech & Tools, Programs, and Experiences.',
    bestFor:
      'Non-profits, civic entities, and growing businesses needing targeted capacity, specialized creative/technical execution, or fractional executive leadership on an agile basis.',
    howItWorks:
      'Fixed-cost credit packages purchased upfront and redeemed against specific, pre-priced deliverables—eliminating time-and-materials friction in favor of guaranteed, shipped outcomes.',
    icon: <Zap className="w-6 h-6" />,
    cta: 'View Services',
  },
];

interface CollaborationOpportunitiesSectionProps {
  onOpenSchedule: () => void;
  onViewFractionalServices: () => void;
}

export const CollaborationOpportunitiesSection: React.FC<CollaborationOpportunitiesSectionProps> = ({
  onOpenSchedule,
  onViewFractionalServices,
}) => (
  <section
    id="collaboration-opportunities"
    className="w-full scroll-mt-24 bg-[#fff1e3] border-t border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
  >
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-14 space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
          Collaboration Opportunities
        </h2>
        <p className="text-lg sm:text-xl font-display font-bold text-[#2c6748]">
          Co/Joint Ventures or Fractional Collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tracks.map((track) => (
          <div
            key={track.number}
            className="bg-white border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center">
                {track.icon}
              </span>
              <span className="font-anton text-xs uppercase tracking-widest text-[#707972]">
                Option {track.number}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-[#251a08] mb-2">
              {track.title}
            </h3>
            <p className="text-sm font-semibold text-[#2c6748] mb-4">{track.subhead}</p>

            <p className="text-sm sm:text-base text-[#404942] leading-relaxed mb-6">
              {track.body}
            </p>

            <div className="mt-auto space-y-4 pt-4 border-t border-[#edd7bb]">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                  Best For
                </span>
                <p className="text-sm text-[#404942] leading-relaxed">{track.bestFor}</p>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                  How It Works
                </span>
                <p className="text-sm text-[#404942] leading-relaxed">{track.howItWorks}</p>
              </div>
            </div>

            <button
              onClick={track.number === '1' ? onOpenSchedule : onViewFractionalServices}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2c6748] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#388e5d]"
            >
              {track.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
