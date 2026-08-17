import React from 'react';
import { SankofaBirdIcon } from './KofaLogo';
import { Flag, Eye } from 'lucide-react';

export const OurStoryView: React.FC = () => {
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
                  {/* The emblem carries its own cream disc, so no backing circle here */}
                  <SankofaBirdIcon className="w-20 h-20 mb-2 shadow-lg rounded-full" />
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
          <div id="mission" className="scroll-mt-24 bg-[#fff1e3] border border-[#edd7bb] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
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
          <div id="vision" className="scroll-mt-24 bg-[#fff1e3] border border-[#edd7bb] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#2c6748]" />
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748]">
                  Vision
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#404942] leading-relaxed mb-4">
                Every public-serving institution in the greater Chicago region runs on the
                Sustainable² framework — impact measured against the UN Sustainable
                Development Goals, funded by revenue the work generates itself.
              </p>
              <p className="text-base text-[#404942] leading-relaxed mb-6">
                A region where no mission worth doing dies in a grant cycle, and where
                community benefit is a line in the operating model rather than a line in
                the annual report.
              </p>

              {/* Inset Border Quote */}
              <div className="border-l-2 border-[#2c6748] pl-4 py-1 text-sm sm:text-base text-[#251a08] font-medium italic">
                Within two years, we will launch KOFA Global Partners to provide complimentary legal services.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SUSTAINABLE² FRAMEWORK */}
      <section
        id="framework"
        className="w-full scroll-mt-24 bg-[#2c6748] text-[#e4f5ea] px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-[#1f4b34]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="font-anton text-xs uppercase tracking-widest text-[#b2f0c9]">
              Our blueprint goes anywhere
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              The Sustainable² (S²) Framework
            </h2>
            <p className="text-base sm:text-lg text-[#cee6d4] leading-relaxed">
              Most public interest programs spend down their capital and stay trapped in
              fragile grant cycles. S² is the operational engine we use to break that
              vulnerability — two layers, applied together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#1e4732] border border-[#97d4ae]/30 p-8">
              <span className="font-anton text-[11px] uppercase tracking-widest text-[#b2f0c9]">
                Sustainable¹
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-2 mb-4">
                The Impact
              </h3>
              <p className="text-sm sm:text-base text-[#cee6d4] leading-relaxed">
                Every initiative drives clear, trackable, reportable progress aligned with
                both localized community needs and global standards, including the United
                Nations Sustainable Development Goals.
              </p>
            </div>

            <div className="rounded-2xl bg-[#1e4732] border border-[#97d4ae]/30 p-8">
              <span className="font-anton text-[11px] uppercase tracking-widest text-[#b2f0c9]">
                Sustainable²
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-2 mb-4">
                The Revenue
              </h3>
              <p className="text-sm sm:text-base text-[#cee6d4] leading-relaxed">
                We re-engineer projects to generate their own earned revenue. Injecting
                business mechanics directly into civic and community spaces breaks the
                volatile cycle of grant and donation dependency.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-[#cee6d4] leading-relaxed border-l-2 border-[#b2f0c9] pl-4">
            <strong className="text-white">Material Investing:</strong> we don't just
            advise. We build mission-aligned ventures, service lines, and joint operations
            directly alongside our clients, so their vital work funds itself long-term.
          </p>
        </div>
      </section>
    </div>
  );
};
