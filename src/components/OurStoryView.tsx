import React, { useState } from 'react';
import { SankofaBirdIcon } from './KofaLogo';
import { Flag, Eye, GitFork, Megaphone, Handshake, BarChart3, Users, Wrench, X, ArrowRight, Sparkles, Check } from 'lucide-react';
import { NavScreen, WorkstreamItem } from '../types';

interface OurStoryViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
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

export const OurStoryView: React.FC<OurStoryViewProps> = ({
  onNavigate,
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
    <div className="w-full bg-[#fff8f3] text-[#251a08]">
      {/* 1. SANKOFA ORIGIN STORY HERO (Green Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-14">
        <div className="bg-[#2c6748] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#46805f] rounded-full blur-3xl opacity-40 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                KOFA comes from <br className="hidden sm:inline" />
                the Sankofa
              </h1>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-[#e4f5ea] font-normal leading-relaxed">
                <p>
                  <span className="font-semibold text-white">Sankofa</span>, from the Akan people of West Africa (Ghana), teaches: <em className="italic text-white">"Go back and fetch what you have forgotten."</em>
                </p>
                <p>
                  The symbol—a bird reaching back for an egg—represents learning from the past to build the future.
                </p>
                <p>
                  KOFA applies this philosophy to sustainability and the circular economy: reclaiming value, regenerating resources, and designing systems that endure across generations.
                </p>
              </div>
            </div>

            {/* Right Graphic: Sankofa Circular Emblem with concentric rings */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
                {/* Secondary inner ring */}
                <div className="absolute inset-4 rounded-full border border-white/30"></div>
                {/* Center circle */}
                <div className="w-44 h-44 rounded-full bg-[#1e4732] border border-[#97d4ae]/40 flex flex-col items-center justify-center p-4 shadow-inner relative">
                  <div className="w-20 h-20 rounded-full bg-[#cee6d4] flex items-center justify-center shadow-lg mb-2">
                    <SankofaBirdIcon
                      className="w-16 h-16"
                      color="#1e4732"
                      bgColor="#cee6d4"
                    />
                  </div>
                  <span className="font-anton text-[10px] uppercase tracking-widest text-[#b2f0c9]">
                    SANKOFA TRADITION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION (2 Warm Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#fff1e3] border border-[#edd7bb] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Flag className="w-6 h-6 text-[#2c6748]" />
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
                  Mission
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
                Kofa P/G transforms community impact into community development strategy. We blend economic analysis, digital media, and stakeholder mobilization to create revenue-generating initiatives that communities can own, grow, and sustain.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#fff1e3] border border-[#edd7bb] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#2c6748]" />
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
                  Vision
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#404942] leading-relaxed mb-6">
                Every public serving institution in the greater Chicago region adopts Sustainable2 programs.
              </p>

              {/* Inset Border Quote */}
              <div className="border-l-2 border-[#2c6748] pl-4 py-1 text-sm sm:text-base text-[#251a08] font-medium italic">
                Within two years, we will launch KOFA Global Partners to provide complimentary legal services.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCESS TO 6 WORKSTREAMS (Dark Section from Image 5) */}
      <section className="w-full bg-[#080c09] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#135134]" id="workstreams-grid">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#388e5d] tracking-tight">
              Access to 6 Workstreams
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#c9c6bf] leading-relaxed font-normal">
              Kofa P/G workstreams help us control costs and support multifaceted work as one firm. Clients benefit from a multifunctional workflow that drives measurable outcomes and transformative initiatives.
            </p>
          </div>

          {/* 6 Workstream Cards (3x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreamsData.map((ws) => (
              <div
                key={ws.id}
                onClick={() => setSelectedWorkstream(ws)}
                className="bg-[#fff8f3] text-[#251a08] rounded-2xl p-8 flex flex-col items-center text-center justify-center hover:bg-white hover:scale-[1.02] cursor-pointer transition-all duration-300 shadow-xl group border border-[#edd7bb]"
              >
                {/* Circular Mint Icon Badge */}
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

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('calculator')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2c6748] hover:bg-[#388e5d] text-white text-sm font-semibold transition-all shadow-lg"
            >
              Estimate Workstream Allocation in Calculator
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Workstream Modal Drawer */}
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
    </div>
  );
};
