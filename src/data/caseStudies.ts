import { CaseStudy, WorkstreamId } from '../types';

export const workstreamLabels: Record<WorkstreamId, string> = {
  programs: 'Programs',
  studio: 'Studio',
  ppc: 'Partners, Policy & Comms',
  finops: 'FinOps',
  experiences: 'Experiences',
  tech: 'Tech & Tools',
};

/**
 * Selected engagements. Summaries come from the approved Past Projects copy;
 * tracks and workstream tags are confirmed by the partner team.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'rise-academy',
    name: 'Rise Academy',
    partner: 'South Side Help Center',
    tracks: ['program'],
    models: ['bespoke'],
    summary:
      'Designed, built and managed a public health educational program targeting Chicago south side and underemployed students. Recruited facilitators and participants, reached 250+ participants, and lobbied for state funding.',
    workstreams: ['studio', 'programs', 'ppc', 'experiences', 'finops'],
    published: true,
  },
  {
    id: 'purchasing-with-purpose',
    name: 'Purchasing with Purpose',
    tracks: ['program'],
    models: ['bespoke', 'fractional'],
    summary:
      'Developed a self-guided training program and facilitated public interest outreach, including research and corporate support. Proposed and launched a multi-state campaign to drive social procurement, scaling the financial logic of the “3% Shift”.',
    workstreams: ['studio', 'programs', 'ppc', 'experiences', 'finops', 'tech'],
    published: true,
  },
  {
    id: 'pride-south-side',
    name: 'Pride South Side',
    tracks: ['partnership'],
    models: ['bespoke'],
    summary:
      'Organized and managed the largest South Side POC LGBTQ+ festival in the Midwest, peaking at 7,000 attendees. Raised funding, coordinated stakeholders, hired staff, managed media and marketing, and produced annual reports — now expanding into a year-round Ecosystem of Care.',
    workstreams: ['studio', 'programs', 'ppc', 'experiences', 'finops'],
    published: true,
  },
  {
    id: 'diaspora-tribe',
    name: 'Diaspora Tribe',
    tracks: ['partnership'],
    models: ['bespoke'],
    summary:
      'Acquired property and developed investor packages to launch a boutique hotel in Ghana. Managed renovations, legal engagement, staff acquisition and standardized reporting.',
    workstreams: ['studio', 'programs', 'ppc', 'finops'],
    published: true,
  },
];
