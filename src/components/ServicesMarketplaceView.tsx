import React, { useState } from 'react';
import { Compass, RefreshCw, Layers, Check, ArrowRight, Filter, Sparkles, ShoppingBag, Info } from 'lucide-react';
import { NavScreen, ServiceItem } from '../types';

interface ServicesMarketplaceViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

const marketplaceServices: ServiceItem[] = [
  {
    id: 'web-redesign',
    title: 'Sustainable Website Redesign',
    category: 'fractional',
    workstream: 'STUDIO',
    credits: 10,
    description: 'Low-carbon web architecture, accessible UI design, and fast green hosting deployment.',
    deliverables: ['Energy-efficient carbon audit', 'WCAG AAA design system', 'Responsive Vite/Tailwind build'],
    duration: '2-3 weeks',
  },
  {
    id: 'procure-audit',
    title: 'Supply Chain & Procurement Audit',
    category: 'fractional',
    workstream: 'FINOPS',
    credits: 15,
    description: 'Comprehensive analysis of current tier-1/tier-2 suppliers and identification of local restorative opportunities.',
    deliverables: ['Vendor geographic mapping', 'Restorative scorecards', 'Local spend reallocation matrix'],
    duration: '3-4 weeks',
  },
  {
    id: 'community-listening',
    title: 'Sankofa Listening Circle Facilitation',
    category: 'fractional',
    workstream: 'EXPERIENCES',
    credits: 8,
    description: 'Structured community story sessions to capture qualitative data and lived experience insights.',
    deliverables: ['3 Facilitated sessions', 'Transcribed narrative synthesis', 'Community priority report'],
    duration: '2 weeks',
  },
  {
    id: 'policy-draft',
    title: 'Restorative Procurement Policy Blueprint',
    category: 'fractional',
    workstream: 'PARTNERS, POLICY & COMMS (PPC)',
    credits: 20,
    description: 'Custom governance and procurement policy language tailored for board approval and institutional bylaws.',
    deliverables: ['Board-ready policy draft', 'Legal compliance review', 'Implementation checklist'],
    duration: '4 weeks',
  },
  {
    id: 'impact-dashboard',
    title: 'Custom Impact & Wealth Dashboard',
    category: 'fractional',
    workstream: 'TECH & TOOLS',
    credits: 25,
    description: 'Automated data visualization tool tracking vendor diversity, local multiplier effect, and ESG progress.',
    deliverables: ['Real-time BI dashboard', 'ERP connector scripts', 'Staff training walkthrough'],
    duration: '4-5 weeks',
  },
  {
    id: 'sustainable2-pilot',
    title: 'Sustainable2 Pilot Program Design',
    category: 'fractional',
    workstream: 'PROGRAMS',
    credits: 30,
    description: 'End-to-end pilot architecture for civic institutions adopting sustainable circular procurement models.',
    deliverables: ['Pilot charter & KPIs', 'Partner recruitment toolkit', 'Evaluation framework'],
    duration: '6 weeks',
  },
];

export const ServicesMarketplaceView: React.FC<ServicesMarketplaceViewProps> = ({
  onNavigate,
  onOpenSchedule,
}) => {
  const [selectedWorkstream, setSelectedWorkstream] = useState<string>('ALL');
  const [cartCredits, setCartCredits] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const workstreamFilters = ['ALL', 'PROGRAMS', 'STUDIO', 'PARTNERS, POLICY & COMMS (PPC)', 'FINOPS', 'EXPERIENCES', 'TECH & TOOLS'];

  const filteredServices = selectedWorkstream === 'ALL'
    ? marketplaceServices
    : marketplaceServices.filter((s) => s.workstream.includes(selectedWorkstream));

  const toggleItem = (service: ServiceItem) => {
    if (selectedItems.includes(service.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== service.id));
      setCartCredits((prev) => prev - (service.credits || 0));
    } else {
      setSelectedItems([...selectedItems, service.id]);
      setCartCredits((prev) => prev + (service.credits || 0));
    }
  };

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[#b2f0c9] text-[#002111] border border-[#97d4ae]">
            Tailored Engagement Models
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight">
            Our Services & Marketplace
          </h1>
          <p className="text-base sm:text-lg text-[#404942]">
            Choose between comprehensive bespoke systemic engagements or agile execution with our fractional credit blocks.
          </p>
        </div>

        {/* 1. TOP 2 ENGAGEMENT MODELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Bespoke Box */}
          <div className="bg-white border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#fbe5c8] flex items-center justify-center text-[#2c6748] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#251a08] mb-3">Bespoke Engagements</h2>
              <p className="text-sm text-[#404942] mb-6 leading-relaxed">
                Full-scope institutional overhauls for organizations committing to multi-year restorative equity and circular procurement transformations.
              </p>
              <ul className="space-y-3 text-sm text-[#251a08] font-medium mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Procurement Policy Overhaul & Board Ratification</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>End-to-End Supply Chain Impact Auditing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Seven-Generation Strategy Roadmapping</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenSchedule}
              className="w-full py-3.5 px-4 rounded-xl border border-[#707972] text-sm font-semibold hover:bg-[#fff1e3] transition-colors text-center"
            >
              Consult with Senior Policy Strategist
            </button>
          </div>

          {/* Fractional Model */}
          <div className="bg-[#2c6748] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#b2f0c9] text-[#2c6748] flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display text-white mb-3">Fractional Credit System</h2>
              <p className="text-sm text-[#e4f5ea] mb-6 leading-relaxed">
                Purchase reusable credit packages and draw down on specialized technical, creative, and financial workstreams on an as-needed agile basis.
              </p>
              <div className="bg-[#1e4732] rounded-2xl p-5 border border-[#97d4ae]/30 space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-anton uppercase tracking-wider text-[#b2f0c9]">Popular Tier</span>
                  <span className="font-bold text-white">50 Credits Block</span>
                </div>
                <p className="text-xs text-[#cee6d4]">
                  Deployable across all 6 workstreams anytime within 12 months.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('credit-marketplace-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#b2f0c9] text-[#002111] text-sm font-bold hover:bg-white transition-colors text-center shadow-sm"
            >
              Explore Catalog Below
            </button>
          </div>
        </div>

        {/* 2. FRACTIONAL CREDIT MARKETPLACE CATALOG */}
        <div className="bg-white border border-[#edd7bb] rounded-3xl p-6 sm:p-10 shadow-md" id="credit-marketplace-catalog">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
                Fractional Marketplace Catalog
              </h3>
              <p className="text-xs sm:text-sm text-[#707972] mt-1">
                Select deployable modules to calculate required credit allocation
              </p>
            </div>

            {/* Credit Basket Summary */}
            {cartCredits > 0 && (
              <div className="flex items-center gap-3 bg-[#b2f0c9] text-[#002111] px-4 py-2 rounded-xl border border-[#97d4ae] animate-in fade-in">
                <ShoppingBag className="w-4 h-4 text-[#2c6748]" />
                <span className="text-xs font-bold font-mono">{cartCredits} Credits Total ({selectedItems.length} modules)</span>
                <button
                  onClick={onOpenSchedule}
                  className="ml-2 px-3 py-1 bg-[#2c6748] text-white rounded text-xs font-bold hover:bg-[#23533a]"
                >
                  Book Package
                </button>
              </div>
            )}
          </div>

          {/* Workstream Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
            <span className="text-[#707972] font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {workstreamFilters.map((ws) => (
              <button
                key={ws}
                onClick={() => setSelectedWorkstream(ws)}
                className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedWorkstream === ws
                    ? 'bg-[#2c6748] text-white font-bold shadow-sm'
                    : 'bg-[#fff1e3] text-[#404942] hover:bg-[#ffebd2]'
                }`}
              >
                {ws}
              </button>
            ))}
          </div>

          {/* Catalog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isSelected = selectedItems.includes(service.id);
              return (
                <div
                  key={service.id}
                  className={`border rounded-2xl p-6 flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'border-[#2c6748] bg-[#f4fbf6] ring-2 ring-[#2c6748]/20 shadow-md'
                      : 'border-[#edd7bb] bg-[#fff8f3] hover:bg-white hover:border-[#bda98f]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-anton text-[10px] uppercase tracking-wider text-[#707972]">
                        {service.workstream}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#b2f0c9] text-[#002111] border border-[#97d4ae]">
                        {service.credits} Credits
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-[#251a08] mb-2">
                      {service.title}
                    </h4>

                    <p className="text-xs text-[#404942] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-[#526859]">
                      {service.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2c6748]"></span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#edd7bb]/60 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#707972]">
                      Est. {service.duration}
                    </span>

                    <button
                      onClick={() => toggleItem(service)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#ba1a1a] text-white hover:bg-[#93000a]'
                          : 'bg-[#2c6748] text-white hover:bg-[#23533a]'
                      }`}
                    >
                      {isSelected ? 'Remove' : '+ Add to Package'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
