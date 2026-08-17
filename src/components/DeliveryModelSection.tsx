import React from 'react';
import { Hammer, Compass, Landmark } from 'lucide-react';
import { TriadRole } from '../types';

interface Triad {
  role: TriadRole;
  label: string;
  part: string;
  icon: React.ReactNode;
  what: string;
  tree: string;
}

/**
 * Roles as defined in the capabilities overview, mapped onto the tree so the
 * metaphor tracks the work: planners hold accumulated depth, architects form the
 * structural core, builders push visible new growth.
 */
const triad: Triad[] = [
  {
    role: 'planner',
    label: 'Planners',
    part: 'Roots',
    icon: <Landmark className="w-6 h-6" />,
    what: 'Decades of institutional wisdom, legal and regulatory mastery, and municipal navigation.',
    tree: 'Deep and unseen, anchoring everything above them in ground that took years to reach.',
  },
  {
    role: 'architect',
    label: 'Architects',
    part: 'Trunk',
    icon: <Compass className="w-6 h-6" />,
    what: 'Design the systems, automated data tracking frameworks, and governance infrastructure.',
    tree: 'The structural core that carries what the roots hold up to where the work is visible.',
  },
  {
    role: 'builder',
    label: 'Builders',
    part: 'Branches',
    icon: <Hammer className="w-6 h-6" />,
    what: 'Shift concepts immediately into tangible digital or physical outputs, with high velocity.',
    tree: 'Where new growth actually happens — reaching outward, fast, in every season.',
  },
];

export const DeliveryModelSection: React.FC = () => (
  <section
    id="working-model"
    className="w-full scroll-mt-24 bg-[#fff8f3] text-[#251a08] border-t border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
  >
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-14 space-y-4">
        <span className="font-anton text-xs uppercase tracking-widest text-[#2c6748]">
          How we deploy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
          One tree, three kinds of growth.
        </h2>
        <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
          We do not staff accounts from a bench of interchangeable consultants. Every
          engagement is anchored by an intergenerational, cross-functional triad — and
          each role does something the other two cannot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {triad.map((member) => (
          <div
            key={member.role}
            className="rounded-2xl border border-[#edd7bb] bg-[#fff1e3] p-8 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="w-12 h-12 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center">
                {member.icon}
              </span>
              <span className="font-anton text-[10px] uppercase tracking-widest text-[#526859] bg-white/70 border border-[#edd7bb] rounded-full px-3 py-1">
                {member.part}
              </span>
            </div>

            <h3 className="text-xl font-bold font-display text-[#2c6748] mb-3">
              {member.label}
            </h3>
            <p className="text-sm text-[#404942] leading-relaxed mb-4">{member.what}</p>
            <p className="mt-auto border-l-2 border-[#2c6748] pl-3 text-xs italic text-[#526859] leading-relaxed">
              {member.tree}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-sm text-[#526859] leading-relaxed">
        The seed is yours. When a project needs a discipline we do not carry in-house, we
        recruit it rather than substitute — clients get a hand-picked team assembled for
        their mission, not a cookie-cutter consultant from an underutilized bench.
      </p>
    </div>
  </section>
);
