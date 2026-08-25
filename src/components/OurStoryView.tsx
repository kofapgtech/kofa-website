import React from 'react';
import { SankofaBirdIcon } from './KofaLogo';
import { Flag } from 'lucide-react';

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
                the word Sankofa
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#e4f5ea] font-normal leading-relaxed">
                <p>
                  from the Akan people of West Africa (Ghana). It teaches:{' '}
                  <em className="italic text-white">"Go back and fetch what you have forgotten."</em>
                </p>
                <p>
                  The symbol — a bird reaching back for an egg — represents learning from
                  the past to build the future.
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
                  <SankofaBirdIcon className="w-24 h-24 shadow-lg rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KOFA PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white border border-[#edd7bb] rounded-2xl p-8 sm:p-12 shadow-sm">
          <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
            KOFA applies this philosophy to how we support our partners. We were created
            to support an annual community festival, which required cross-functional
            expertise to execute on time, under budget, and aligned with our vision to
            drive social impact through economic development and access to wellness.
          </p>
        </div>
      </section>

      {/* 2. MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <div className="grid grid-cols-1 gap-8">
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
                Kofa P/G transforms community impact into a community development
                strategy. We blend economic analysis, digital media, and stakeholder
                mobilization to create revenue-generating initiatives for small medium
                sized enterprise, non-profits and organizations interested in social
                impact.
              </p>
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
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Kofa works with our S² Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#1e4732] border border-[#97d4ae]/30 p-8">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                S¹: Impact
              </h3>
              <p className="text-sm sm:text-base text-[#cee6d4] leading-relaxed">
                The work is aligned with at least one of the seventeen UN Sustainable
                Development Goals.
              </p>
            </div>

            <div className="rounded-2xl bg-[#1e4732] border border-[#97d4ae]/30 p-8">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                S²: Revenue
              </h3>
              <p className="text-sm sm:text-base text-[#cee6d4] leading-relaxed">
                Impact and revenue are not tradeoffs. We create revenue-generating
                initiatives that also drive impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
