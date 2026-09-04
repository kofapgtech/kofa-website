import React, { useState } from 'react';
import { Filter, ShoppingBag } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesMarketplaceViewProps {
  onOpenSchedule: () => void;
}

const marketplaceServices: ServiceItem[] = [
  {
    id: 'web-redesign',
    title: 'Sustainable Website Redesign',
    category: 'fractional',
    workstream: 'STUDIO',
    description: 'Low-carbon web architecture, accessible UI design, and fast green hosting deployment.',
    deliverables: ['Energy-efficient carbon audit', 'WCAG AAA design system', 'Responsive Vite/Tailwind build'],
    duration: '2-3 weeks',
  },
  {
    id: 'procure-audit',
    title: 'Supply Chain & Procurement Audit',
    category: 'fractional',
    workstream: 'FINOPS',
    description: 'Comprehensive analysis of current tier-1/tier-2 suppliers and identification of local restorative opportunities.',
    deliverables: ['Vendor geographic mapping', 'Restorative scorecards', 'Local spend reallocation matrix'],
    duration: '3-4 weeks',
  },
  {
    id: 'community-listening',
    title: 'Sankofa Listening Circle Facilitation',
    category: 'fractional',
    workstream: 'EXPERIENCES',
    description: 'Structured community story sessions to capture qualitative data and lived experience insights.',
    deliverables: ['3 Facilitated sessions', 'Transcribed narrative synthesis', 'Community priority report'],
    duration: '2 weeks',
  },
  {
    id: 'policy-draft',
    title: 'Restorative Procurement Policy Blueprint',
    category: 'fractional',
    workstream: 'PARTNERS, POLICY & COMMS (PPC)',
    description: 'Custom governance and procurement policy language tailored for board approval and institutional bylaws.',
    deliverables: ['Board-ready policy draft', 'Legal compliance review', 'Implementation checklist'],
    duration: '4 weeks',
  },
  {
    id: 'impact-dashboard',
    title: 'Custom Impact & Wealth Dashboard',
    category: 'fractional',
    workstream: 'TECH & TOOLS',
    description: 'Automated data visualization tool tracking vendor diversity, local multiplier effect, and ESG progress.',
    deliverables: ['Real-time BI dashboard', 'ERP connector scripts', 'Staff training walkthrough'],
    duration: '4-5 weeks',
  },
  {
    id: 'sustainable2-pilot',
    title: 'Sustainable2 Pilot Program Design',
    category: 'fractional',
    workstream: 'PROGRAMS',
    description: 'End-to-end pilot architecture for civic institutions adopting sustainable circular procurement models.',
    deliverables: ['Pilot charter & KPIs', 'Partner recruitment toolkit', 'Evaluation framework'],
    duration: '6 weeks',
  },
];

export const ServicesMarketplaceView: React.FC<ServicesMarketplaceViewProps> = ({
  onOpenSchedule,
}) => {
  const [selectedWorkstream, setSelectedWorkstream] = useState<string>('ALL');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const workstreamFilters = ['ALL', 'PROGRAMS', 'STUDIO', 'PARTNERS, POLICY & COMMS (PPC)', 'FINOPS', 'EXPERIENCES', 'TECH & TOOLS'];

  const filteredServices = selectedWorkstream === 'ALL'
    ? marketplaceServices
    : marketplaceServices.filter((s) => s.workstream.includes(selectedWorkstream));

  const toggleItem = (service: ServiceItem) => {
    if (selectedItems.includes(service.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== service.id));
    } else {
      setSelectedItems([...selectedItems, service.id]);
    }
  };

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FRACTIONAL SERVICE CATALOG */}
        <div className="bg-white border border-[#edd7bb] rounded-3xl p-6 sm:p-10 shadow-md" id="fractional-services-catalog">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
                Fractional Marketplace Catalog
              </h3>
              <p className="text-xs sm:text-sm text-[#707972] mt-1">
                Select deployable modules to build your fractional service package
              </p>
            </div>

            {/* Selection Summary */}
            {selectedItems.length > 0 && (
              <div className="flex items-center gap-3 bg-[#b2f0c9] text-[#002111] px-4 py-2 rounded-xl border border-[#97d4ae] animate-in fade-in">
                <ShoppingBag className="w-4 h-4 text-[#2c6748]" />
                <span className="text-xs font-bold font-mono">
                  {selectedItems.length} {selectedItems.length === 1 ? 'module' : 'modules'} selected
                </span>
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
