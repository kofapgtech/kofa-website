import React, { useState } from 'react';
import { GitFork, Megaphone, Handshake, BarChart3, Users, Wrench, X, Sparkles } from 'lucide-react';
import { WorkstreamItem } from '../types';

interface WorkstreamsSectionProps {
  onOpenSchedule: () => void;
}

const workstreamsData: WorkstreamItem[] = [
  {
    id: 'programs',
    name: 'PROGRAMS',
    shortName: 'Programs',
    icon: 'nodes',
    description:
      'End-to-end project management, curriculum design, and operationalizing complex cross-border initiatives.',
    caseStudies: [
      {
        name: 'South Side Help Center (SSHC)',
        body: 'Delivered end-to-end operational management for the 4-week RISE Academy cohorts. Executed rigorous weekly reporting by cleaning trainee performance and health referral data, delivering actionable insights to SSHC leadership that synthesized program outputs. Managed all stakeholder coordination, e-learning logistics, and outreach strategies.',
      },
      {
        name: 'Purchasing with Purpose',
        body: 'Designed and deployed a robust 14-module, self-paced curriculum. Innovated the delivery by utilizing AI tools and voice cloning to efficiently teach public interest leaders Total Cost of Ownership Analysis.',
      },
      {
        name: 'Diaspora Tribe',
        body: 'Served as the Launch Phase Project Manager for a complex cross-border execution between the US and Ghana. Managed strict regulatory compliance, document governance, staff upskilling, and served as the central liaison for international government and legal contacts.',
      },
    ],
  },
  {
    id: 'studio',
    name: 'STUDIO',
    shortName: 'Studio',
    icon: 'megaphone',
    description:
      'High-impact multimedia production, brand architecture, and transforming complex data into compelling visual narratives.',
    caseStudies: [
      {
        name: 'Pride South Side',
        body: 'Built the original brand architecture and successfully designed a new, distinct theme for each of the last seven years. This strategy has generated millions of organic impressions across social campaigns and consistently drives an average of 10,000 unique website visitors annually. Most recently, produced “Pride Shorts,” a cinematic docuseries elevating the 2026 “Love in Action” festival into a premium lifestyle brand.',
      },
      {
        name: 'Purchasing with Purpose',
        body: 'Led the visual identity for the “3% Shift” campaign, establishing a dual-messaging framework to shift institutional and household spending to People and Planet First Verified (PPFV) businesses. Translated complex economic frameworks into highly accessible short docuseries, interviews, UI layouts, and wireframes for the campaign’s digital tools.',
      },
      {
        name: 'Diaspora Tribe',
        body: 'Engineered the foundational brand identity and visual storytelling for Kofa’s expanding international portfolio, including the design and narrative assets for the physical Diaspora House in Ghana.',
      },
      {
        name: 'South Side Help Center (SSHC)',
        body: 'Created comprehensive program branding and produced the visual content required for high-stakes presentations, impact reports, and video features.',
      },
    ],
  },
  {
    id: 'ppc',
    name: 'PARTNERS, POLICY & COMMS (PPC)',
    shortName: 'Partners, Policy & Comms',
    icon: 'handshake',
    description:
      'Driving legislative alignment, cross-sector mobilization, and securing high-value strategic partnerships.',
    caseStudies: [
      {
        name: 'Pride South Side (7-Year Partnership)',
        body: 'Recruited the mayor of Chicago to participate in each annual event. Successfully secured the host venue, developed all external messaging, and built a strategic partner and vendor pipeline that has raised nearly $1 Million in total revenue since inception.',
      },
      {
        name: 'South Side Help Center (SSHC)',
        body: 'Developed a comprehensive legislative advocacy packet that successfully positioned the RISE Academy for state capacity and infrastructure grants. The strategy quantified the program’s success in training 236 Community Health Workers (CHWs), proving its direct impact on closing systemic healthcare gaps on the South Side.',
      },
      {
        name: 'Purchasing with Purpose',
        body: 'Directed comprehensive stakeholder outreach, successfully aligning regional non-profit organizations and elected officials to drive collaboration for the “3% Shift” campaign.',
      },
    ],
  },
  {
    id: 'finops',
    name: 'FINOPS',
    shortName: 'FinOps',
    icon: 'chart',
    description:
      'Financial modeling, cyclical reinvestment tracking, data synthesis, and maintaining strict budget discipline.',
    caseStudies: [
      {
        name: 'Pride South Side',
        body: 'Built, managed, and value-engineered the festival budget every year, maintaining a consistent track record of net-positive or breakeven budgets for seven consecutive years. Engineered a “Two-Asks” sponsorship strategy to secure high-visibility institutional funding and led a comprehensive audit of five years of historical data (attendance, vendor revenue, health outcomes) to lock in baselines for the 2026 event.',
      },
      {
        name: 'Purchasing with Purpose',
        body: 'Constructed the “Chicago Economy 3.0” revenue model—a sustainable financial strategy leveraging a freemium masterclass model, a targeted 25 small-donor pipeline, and the aggressive pursuit of mission-aligned grants from major healthcare anchor networks.',
      },
      {
        name: 'Diaspora Tribe',
        body: 'Managed end-to-end Investor Relations (IR) to ensure strict investor readiness. This included managing the data room, tracking due diligence Q&A, and ensuring the business narrative perfectly aligned with the financial models and cash-need projections.',
      },
    ],
  },
  {
    id: 'experiences',
    name: 'EXPERIENCES',
    shortName: 'Experiences',
    icon: 'users',
    description:
      'Designing, scaling, and executing large-scale, high-retention community events and activations.',
    caseStudies: [
      {
        name: 'Pride South Side',
        body: 'Curated and executed the entire festival footprint, successfully managing over 100,000 attendees since inception, with an average of 7,500 attendees annually. Operationalized bespoke high-energy pop-ups, community mixers, and VIP activations explicitly designed to drive organic retention within public health ecosystems.',
      },
    ],
  },
  {
    id: 'tech',
    name: 'TECH & TOOLS',
    shortName: 'Tech & Tools',
    icon: 'gear',
    description:
      'Rapid deployment of custom software tools, impact calculators, and automated digital ecosystems.',
    caseStudies: [
      {
        name: 'Purchasing with Purpose',
        body: 'Built the 3T Procurement Calculator (3T BIOS)—initially as a complex spreadsheet and successfully converted into a full software solution. This tool features a Side-by-Side Savings Tracker and an Executive Decision Hub, allowing procurement leaders to quantify the financial and social ROI of ethical sourcing.',
      },
      {
        name: 'Pride South Side',
        body: 'Built and deployed the festival website and ticketing workflow annually. Conceptualized the LoveWell Network digital app, a mobile-first platform designed to gamify healthcare access by unlocking local business discounts when users maintain medical appointments.',
      },
      {
        name: 'South Side Help Center (SSHC)',
        body: 'Deployed a comprehensive online e-learning platform via Mighty Networks (Mighty Pro) for the RISE Academy. This self-guided learning environment allowed participants to access core modules, complete asynchronous tests, and interact digitally, which was critical for their successful program completion and certification.',
      },
    ],
  },
];

export const WorkstreamsSection: React.FC<WorkstreamsSectionProps> = ({
  onOpenSchedule,
}) => {
  const [selectedWorkstream, setSelectedWorkstream] = useState<WorkstreamItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'nodes':
        return <GitFork className="w-6 h-6" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6" />;
      case 'handshake':
        return <Handshake className="w-6 h-6" />;
      case 'chart':
        return <BarChart3 className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'gear':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <>
      <section className="w-full bg-[#3a2415] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#5a3a22]" id="workstreams">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
              Our Workstreams
            </h2>
            <div className="max-w-3xl rounded-2xl border border-[#388e5d]/40 bg-[#122e20] p-6 sm:p-8">
              <span className="block font-anton text-xs uppercase tracking-widest text-[#97d4ae] mb-2">
                Access to 6 Workstreams
              </span>
              <p className="text-sm sm:text-base text-[#c9c6bf] leading-relaxed">
                Kofa P/G workstreams help us control costs and support multifaceted work as
                one firm. Clients benefit from a multifunctional workflow that drives
                measurable outcomes and transformative initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreamsData.map((ws) => (
              <div
                key={ws.id}
                onClick={() => setSelectedWorkstream(ws)}
                className="bg-[#fff8f3] text-[#251a08] rounded-2xl p-8 flex flex-col items-center text-center justify-center cursor-pointer transition-all duration-300 shadow-xl group border border-[#edd7bb] hover:bg-[#cee6d4] hover:border-[#2c6748] hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-[#b2f0c9] flex items-center justify-center text-[#2c6748] mb-5 group-hover:bg-[#2c6748] group-hover:text-white transition-colors shadow-sm">
                  {renderIcon(ws.icon)}
                </div>

                <h3 className="font-anton text-xs tracking-widest text-[#251a08] group-hover:text-[#1e4732] transition-colors">
                  {ws.name}
                </h3>

                <p className="text-xs text-[#707972] group-hover:text-[#2f4a3a] mt-2 line-clamp-2 transition-colors">
                  {ws.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedWorkstream && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-[#fff8f3] text-[#251a08] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#edd7bb] relative">
            <button
              onClick={() => setSelectedWorkstream(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#ffebd2] text-[#404942]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#b2f0c9] flex items-center justify-center text-[#2c6748]">
                {renderIcon(selectedWorkstream.icon)}
              </div>
              <div>
                <span className="font-anton text-xs uppercase tracking-widest text-[#707972]">Workstream</span>
                <h3 className="text-2xl font-bold font-display text-[#2c6748]">{selectedWorkstream.name}</h3>
              </div>
            </div>

            <p className="text-sm text-[#404942] leading-relaxed mb-6">
              <strong className="text-[#251a08]">Our Capability: </strong>
              {selectedWorkstream.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#251a08] mb-3">
              Case Studies
            </h4>
            <div className="space-y-4 mb-2">
              {selectedWorkstream.caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#edd7bb] bg-[#fff1e3] p-4"
                >
                  <p className="text-sm text-[#251a08]">
                    <strong>{cs.name}: </strong>
                    <span className="text-[#404942] leading-relaxed">{cs.body}</span>
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedWorkstream(null);
                onOpenSchedule();
              }}
              className="w-full mt-6 py-3 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a] transition-colors"
            >
              Engage this Workstream
            </button>
          </div>
        </div>
      )}
    </>
  );
};
