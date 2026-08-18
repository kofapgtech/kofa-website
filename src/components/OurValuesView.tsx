import React from 'react';

interface Pillar {
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    title: 'Quantifiable Impact',
    body: "We move beyond basic 'diverse spend' metrics. Our focus is on deep, lasting outcomes: community wealth retention, job quality, and cyclical reinvestment patterns that build generational wealth.",
  },
  {
    title: 'Human Touch & Storytelling',
    body: 'We leverage AI and data as powerful tools, but they never replace the human story. Qualitative community narratives drive our quantitative analysis.',
  },
  {
    title: 'Strategic Alignment',
    body: 'We act as the bridge between community impact goals and concrete development strategies, ensuring intent matches execution.',
  },
  {
    title: 'Resilience',
    body: 'Our goal is never a short-term fix. We build and advocate for systems designed to endure and support communities for generations.',
  },
];

export const OurValuesView: React.FC = () => (
  <div className="w-full bg-[#fff8f3] text-[#251a08]">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28" id="core-pillars">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight">
          Core Pillars
        </h2>
        <p className="text-base md:text-lg text-[#404942]">
          The principles that guide our approach to policy, development, and community impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-[#fff8f3] border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col hover:border-[#2c6748] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#b2f0c9] mb-6 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#2c6748]"></span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-4">
              {pillar.title}
            </h3>

            <p className="text-sm sm:text-base text-[#404942] leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
