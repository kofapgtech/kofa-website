import React, { useState } from 'react';
import { Handshake, Sprout } from 'lucide-react';
import { caseStudies, workstreamLabels } from '../data/caseStudies';
import { EngagementTrack } from '../types';

const tracks: { id: EngagementTrack; label: string; blurb: string; icon: React.ReactNode }[] = [
  {
    id: 'partnership',
    label: 'Partnerships',
    blurb:
      'We absorb operational weight so you stay the visible, trusted face of the work.',
    icon: <Handshake className="w-5 h-5" />,
  },
  {
    id: 'program',
    label: 'Programs',
    blurb:
      'Co-venture with us. We build the engine and the revenue model alongside you, so the work funds itself.',
    icon: <Sprout className="w-5 h-5" />,
  },
];

export const CaseStudiesSection: React.FC = () => {
  const [active, setActive] = useState<EngagementTrack>('partnership');

  const shown = caseStudies.filter((cs) => cs.published && cs.tracks.includes(active));
  const activeTrack = tracks.find((t) => t.id === active)!;

  return (
    <section
      id="case-studies"
      className="w-full scroll-mt-24 bg-[#fff8f3] text-[#251a08] border-t border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
            Our Past Work
          </h2>
        </div>

        {/* Track switch */}
        <div
          className="inline-flex rounded-xl border border-[#edd7bb] bg-white p-1 mb-6"
          role="tablist"
          aria-label="Engagement track"
        >
          {tracks.map((track) => (
            <button
              key={track.id}
              role="tab"
              aria-selected={active === track.id}
              onClick={() => setActive(track.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === track.id
                  ? 'bg-[#2c6748] text-white shadow-sm'
                  : 'text-[#404942] hover:text-[#251a08]'
              }`}
            >
              {track.icon}
              {track.label}
            </button>
          ))}
        </div>

        <p className="max-w-2xl text-sm text-[#526859] leading-relaxed mb-10">
          {activeTrack.blurb}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col rounded-2xl bg-[#2c6748] text-[#f4fbf6] p-7 shadow-lg"
            >
              <h3 className="text-lg font-bold font-display text-white">{cs.name}</h3>
              {cs.partner && (
                <span className="text-xs text-[#b2f0c9] mt-1">with {cs.partner}</span>
              )}

              <p className="text-sm text-[#cee6d4] leading-relaxed mt-4">{cs.summary}</p>

              <div className="mt-5 pt-4 border-t border-[#97d4ae]/25">
                <span className="block font-anton text-[10px] uppercase tracking-widest text-[#97d4ae] mb-2">
                  Workstreams engaged
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cs.workstreams.map((ws) => (
                    <span
                      key={ws}
                      className="rounded-md bg-[#1e4732] px-2.5 py-1 text-[11px] font-medium text-[#e4f5ea]"
                    >
                      {workstreamLabels[ws]}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
