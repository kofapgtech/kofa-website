import React from 'react';

interface Workstream {
  name: string;
  body: string;
}

const workstreams: Workstream[] = [
  {
    name: 'Studio',
    body: 'We tell unique stories that drive attention, engagement, and brand awareness.',
  },
  {
    name: 'Partners, Policy & Comms (PPC)',
    body: 'We mobilize organizational stakeholders to drive fundraising, earned media, and strategic partnerships.',
  },
  {
    name: 'Tech & Tools',
    body: 'We build custom tools to solve complex organizational challenges.',
  },
  {
    name: 'Programs',
    body: 'We design social and public programs that drive value through measurable outcomes.',
  },
  {
    name: 'Experiences',
    body: 'We create in-person engagement to connect your organization with the people and places that matter most.',
  },
  {
    name: 'FinOps',
    body: 'We model project revenue, costs, and budgets to ensure initiatives deliver impact without exceeding financial constraints.',
  },
];

export const OurValuesView: React.FC = () => (
  <div className="w-full bg-[#fff8f3] text-[#251a08]">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28" id="core-pillars">
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight">
          Six Cross-Functional Workstreams
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workstreams.map((ws) => (
          <div
            key={ws.name}
            className="bg-[#fff8f3] border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col hover:border-[#2c6748] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#b2f0c9] mb-6 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#2c6748]"></span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-4">
              {ws.name}
            </h3>

            <p className="text-sm sm:text-base text-[#404942] leading-relaxed">{ws.body}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
