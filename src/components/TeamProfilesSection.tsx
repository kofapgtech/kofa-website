import React from 'react';
import { teamMembers } from '../data/team';
import { TriadRole } from '../types';

const rolePart: Record<TriadRole, string> = {
  planner: 'Roots',
  architect: 'Trunk',
  builder: 'Branches',
};

/**
 * Selected team profiles. Renders nothing while `teamMembers` is empty, so the
 * live site never shows an empty shell or placeholder people.
 */
export const TeamProfilesSection: React.FC = () => {
  if (teamMembers.length === 0) return null;

  return (
    <section
      id="team"
      className="w-full scroll-mt-24 bg-[#fff8f3] text-[#251a08] border-t border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-anton text-xs uppercase tracking-widest text-[#2c6748]">
            Who you work with
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
            The people on your account.
          </h2>
          <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
            Proximity is expertise. These are the practitioners closest to the work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-[#edd7bb] bg-[#fff1e3] p-7 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold font-display text-[#2c6748]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#526859] mt-0.5">{member.title}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#cee6d4] px-3 py-1 font-anton text-[10px] uppercase tracking-widest text-[#2c6748]">
                  {rolePart[member.role]}
                </span>
              </div>
              <p className="text-sm text-[#404942] leading-relaxed">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
