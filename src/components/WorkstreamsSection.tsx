import React, { useState } from 'react';
import { GitFork, Megaphone, Handshake, BarChart3, Users, Wrench, X, ArrowRight, Sparkles, Check } from 'lucide-react';
import { WorkstreamItem } from '../types';

interface WorkstreamsSectionProps {
  onOpenSchedule: () => void;
  onViewCalculator?: () => void;
}

const workstreamsData: WorkstreamItem[] = [
  {
    id: 'programs',
    name: 'PROGRAMS',
    shortName: 'Programs',
    icon: 'nodes',
    description: 'Direct community deployment pipelines, institutional program rollouts, and social equity initiative management.',
    coreCapabilities: [
      'Sustainable2 Program Implementation',
      'Community Ownership Structure Design',
      'Civic Stakeholder Mobilization',
      'Public Institutional Program Design'
    ],
    leadRole: 'Director of Restorative Programs'
  },
  {
    id: 'studio',
    name: 'STUDIO',
    shortName: 'Studio',
    icon: 'megaphone',
    description: 'High-impact multimedia storytelling, documentary narratives, sustainable web experiences, and visual policy synthesis.',
    coreCapabilities: [
      'Qualitative Community Narrative Capture',
      'Accessible Digital Media Campaigns',
      'Data Storytelling & Infographic Suites',
      'Low-carbon Digital Product Design'
    ],
    leadRole: 'Creative Director & Story Lead'
  },
  {
    id: 'ppc',
    name: 'PARTNERS, POLICY & COMMS (PPC)',
    shortName: 'Partners, Policy & Comms',
    icon: 'handshake',
    description: 'Legislative analysis, cross-sector coalition alignment, policy drafting, and strategic institutional communication.',
    coreCapabilities: [
      'Municipal & State Policy Drafting',
      'Anchor Institution Supplier Audits',
      'Multi-stakeholder Consensus Building',
      'Restorative Procurement Guidelines'
    ],
    leadRole: 'Policy & Coalitions Strategist'
  },
  {
    id: 'finops',
    name: 'FINOPS',
    shortName: 'FinOps',
    icon: 'chart',
    description: 'Economic impact modeling, local wealth multiplier analysis, grant architecture, and cyclical reinvestment tracking.',
    coreCapabilities: [
      'Community Wealth Retention Modeling',
      'Cyclical Reinvestment Metric Engines',
      'Social Return on Spend (SROS) Tracking',
      'Capital Stack & Grant Structuring'
    ],
    leadRole: 'Chief Financial & Economic Analyst'
  },
  {
    id: 'experiences',
    name: 'EXPERIENCES',
    shortName: 'Experiences',
    icon: 'users',
    description: 'Participatory community workshops, restorative listening circles, civic symposia, and transformative leadership labs.',
    coreCapabilities: [
      'Sankofa Restorative Circles',
      'Participatory Budgeting Sessions',
      'Executive Restorative Leadership Summits',
      'Cross-neighborhood Policy Dialogues'
    ],
    leadRole: 'Head of Community Experiences'
  },
  {
    id: 'tech',
    name: 'TECH & TOOLS',
    shortName: 'Tech & Tools',
    icon: 'gear',
    description: 'Modern software tools, procurement impact calculators, compliance dashboards, and automated ESG/DEI intelligence systems.',
    coreCapabilities: [
      'Procurement Impact Intelligence Engine',
      'Real-time Vendor Diversity & Wealth Dashboards',
      'Automated Policy Compliance Monitors',
      'API Integrations for Anchor ERPs'
    ],
    leadRole: 'Lead Systems Architect'
  },
];

export const WorkstreamsSection: React.FC<WorkstreamsSectionProps> = ({
  onOpenSchedule,
  onViewCalculator,
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
      <section className="w-full bg-[#080c09] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#135134]" id="workstreams">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#388e5d] tracking-tight">
              Access to 6 Workstreams
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#c9c6bf] leading-relaxed font-normal">
              Kofa P/G workstreams help us control costs and support multifaceted work as one firm. Clients benefit from a multifunctional workflow that drives measurable outcomes and transformative initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreamsData.map((ws) => (
              <div
                key={ws.id}
                onClick={() => setSelectedWorkstream(ws)}
                className="bg-[#fff8f3] text-[#251a08] rounded-2xl p-8 flex flex-col items-center text-center justify-center hover:bg-white hover:scale-[1.02] cursor-pointer transition-all duration-300 shadow-xl group border border-[#edd7bb]"
              >
                <div className="w-16 h-16 rounded-full bg-[#b2f0c9] flex items-center justify-center text-[#2c6748] mb-5 group-hover:bg-[#97d4ae] transition-colors shadow-sm">
                  {renderIcon(ws.icon)}
                </div>

                <h3 className="font-anton text-xs tracking-widest text-[#251a08] group-hover:text-[#2c6748] transition-colors">
                  {ws.name}
                </h3>

                <p className="text-xs text-[#707972] mt-2 line-clamp-2">
                  {ws.description}
                </p>

                <span className="mt-4 inline-flex items-center text-[11px] font-semibold text-[#2c6748] group-hover:translate-x-1 transition-transform">
                  Explore Capabilities →
                </span>
              </div>
            ))}
          </div>

          {onViewCalculator && (
            <div className="mt-14 text-center">
              <button
                onClick={onViewCalculator}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2c6748] hover:bg-[#388e5d] text-white text-sm font-semibold transition-all shadow-lg"
              >
                Estimate Workstream Allocation in the Calculator
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedWorkstream && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-[#fff8f3] text-[#251a08] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#edd7bb] relative">
            <button
              onClick={() => setSelectedWorkstream(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#ffebd2] text-[#404942]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-[#b2f0c9] flex items-center justify-center text-[#2c6748]">
                {renderIcon(selectedWorkstream.icon)}
              </div>
              <div>
                <span className="font-anton text-xs uppercase tracking-widest text-[#707972]">Workstream</span>
                <h3 className="text-2xl font-bold font-display text-[#2c6748]">{selectedWorkstream.name}</h3>
              </div>
            </div>

            <p className="text-sm text-[#404942] leading-relaxed mb-6">
              {selectedWorkstream.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#251a08] mb-3">
              Core Deliverables & Capabilities:
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedWorkstream.coreCapabilities.map((cap, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#251a08]">
                  <span className="w-4 h-4 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#fff1e3] p-3 rounded-lg border border-[#edd7bb] text-xs text-[#526859] mb-6 flex items-center justify-between">
              <span>Workstream Lead:</span>
              <strong className="text-[#251a08]">{selectedWorkstream.leadRole}</strong>
            </div>

            <button
              onClick={() => {
                setSelectedWorkstream(null);
                onOpenSchedule();
              }}
              className="w-full py-3 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a] transition-colors"
            >
              Engage this Workstream
            </button>
          </div>
        </div>
      )}
    </>
  );
};
