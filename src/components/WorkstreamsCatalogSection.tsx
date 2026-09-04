import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { WorkstreamItem } from '../types';

interface WorkstreamsCatalogSectionProps {
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

const GENERAL_BLURB =
  'Kofa P/G workstreams help us control costs and support multifaceted work as one firm. Clients benefit from a multifunctional workflow that drives measurable outcomes and transformative initiatives.';

interface Tile {
  workstream: string;
  name: string;
  body: string;
}

export const WorkstreamsCatalogSection: React.FC<WorkstreamsCatalogSectionProps> = ({
  onOpenSchedule,
}) => {
  const [selectedId, setSelectedId] = useState<string>('ALL');

  const selected = workstreamsData.find((w) => w.id === selectedId) ?? null;

  const tiles: Tile[] = selected
    ? selected.caseStudies.map((cs) => ({ workstream: selected.name, name: cs.name, body: cs.body }))
    : workstreamsData.flatMap((w) =>
        w.caseStudies.map((cs) => ({ workstream: w.name, name: cs.name, body: cs.body }))
      );

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WORKSTREAMS CATALOG */}
        <div className="bg-white border border-[#edd7bb] rounded-3xl p-6 sm:p-10 shadow-md" id="workstreams-catalog">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
              Our Workstreams
            </h3>
            <p className="text-xs sm:text-sm text-[#707972] mt-1">
              {selected ? (
                <>
                  <strong className="text-[#251a08]">Our Capability: </strong>
                  {selected.description}
                </>
              ) : (
                GENERAL_BLURB
              )}
            </p>
          </div>

          {/* Workstream Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
            <span className="text-[#707972] font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setSelectedId('ALL')}
              className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedId === 'ALL'
                  ? 'bg-[#2c6748] text-white font-bold shadow-sm'
                  : 'bg-[#fff1e3] text-[#404942] hover:bg-[#ffebd2]'
              }`}
            >
              ALL
            </button>
            {workstreamsData.map((w) => (
              <button
                key={w.id}
                onClick={() => setSelectedId(w.id)}
                className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedId === w.id
                    ? 'bg-[#2c6748] text-white font-bold shadow-sm'
                    : 'bg-[#fff1e3] text-[#404942] hover:bg-[#ffebd2]'
                }`}
              >
                {w.name}
              </button>
            ))}
          </div>

          {/* Case Study Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((tile, i) => (
              <div
                key={`${tile.workstream}-${i}`}
                className="border border-[#edd7bb] bg-[#fff8f3] rounded-2xl p-6 transition-all hover:bg-white hover:border-[#bda98f]"
              >
                <span className="font-anton text-[10px] uppercase tracking-wider text-[#707972] block mb-3">
                  {tile.workstream}
                </span>
                <h4 className="text-lg font-bold font-display text-[#251a08] mb-2">
                  {tile.name}
                </h4>
                <p className="text-xs text-[#404942] leading-relaxed">{tile.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2c6748] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#388e5d]"
            >
              Schedule Intake
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
