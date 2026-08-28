import React from 'react';
import { Hammer, Compass, Landmark } from 'lucide-react';
import treeSrc from '../assets/brand/tree.png';
import { TriadRole } from '../types';

interface Triad {
  role: TriadRole;
  part: string;
  label: string;
  icon: React.ReactNode;
  what: string;
}

/** Ordered top-down to match the tree beside them: branches, trunk, roots. */
const triad: Triad[] = [
  {
    role: 'builder',
    part: 'Branches',
    label: 'Builders',
    icon: <Hammer className="w-5 h-5" />,
    what: 'Shift concepts immediately into tangible digital or physical outputs, with high velocity.',
  },
  {
    role: 'architect',
    part: 'Trunk',
    label: 'Architects',
    icon: <Compass className="w-5 h-5" />,
    what: 'Design the systems, automated data tracking frameworks, and governance infrastructure.',
  },
  {
    role: 'planner',
    part: 'Roots',
    label: 'Planners',
    icon: <Landmark className="w-5 h-5" />,
    what: 'Decades of institutional wisdom, legal and regulatory mastery, and municipal navigation.',
  },
];

export const DeliveryModelSection: React.FC = () => (
  <section
    id="working-model"
    className="w-full scroll-mt-24 bg-[#fff8f3] text-[#251a08] border-t border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
          Our Model
        </h2>
        <p className="text-xl sm:text-2xl font-display font-bold text-[#2c6748]">
          One tree, three layers.
        </p>
        <p className="text-base sm:text-lg text-[#404942] leading-relaxed max-w-2xl">
          Every engagement is anchored by our unique, intergenerational, cross-functional
          triad model.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Tree on the left, layers stacked beside it in the same order */}
        <div className="lg:col-span-5 flex justify-center">
          <span className="inline-flex items-center justify-center rounded-2xl bg-[#30593f] p-8 shadow-lg w-full max-w-[360px]">
            <img
              src={treeSrc}
              alt=""
              aria-hidden="true"
              className="w-full max-w-[280px] h-auto object-contain"
            />
          </span>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          {triad.map((member) => (
            <div
              key={member.role}
              className="rounded-2xl border border-[#edd7bb] bg-[#fff1e3] p-6 sm:p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 shrink-0 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center">
                  {member.icon}
                </span>
                <div>
                  <span className="block font-anton text-[10px] uppercase tracking-widest text-[#526859]">
                    {member.part}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#2c6748] leading-tight">
                    {member.label}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#404942] leading-relaxed">
                {member.what}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
