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
 * Selected engagements.
 *
 * Summaries for the four published entries come from the approved Past Projects
 * copy. Workstream tags are inferred from those summaries and should be
 * confirmed by the partner team.
 *
 * Entries with `published: false` are listed but not shown: we do not have
 * approved copy for them yet. Fill in `summary` and `workstreams`, flip the
 * flag, and they appear.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'rise-academy',
    name: 'Rise Academy',
    partner: 'South Side Help Center',
    tracks: ['partnership'],
    models: ['bespoke'],
    summary:
      'Designed, built and managed a public health educational program targeting Chicago south side and underemployed students. Recruited facilitators and participants, reached 250+ participants, and lobbied for state funding.',
    workstreams: ['programs', 'experiences', 'ppc'],
    published: true,
  },
  {
    id: 'purchasing-with-purpose',
    name: 'Purchasing with Purpose',
    tracks: ['partnership'],
    models: ['bespoke', 'fractional'],
    summary:
      'Developed a self-guided training program and facilitated public interest outreach, including research and corporate support. Proposed and launched a multi-state campaign to drive social procurement, scaling the financial logic of the “3% Shift”.',
    workstreams: ['ppc', 'studio', 'finops', 'tech'],
    published: true,
  },
  {
    id: 'diaspora-tribe',
    name: 'Diaspora Tribe',
    // Listed under both tracks by the partner team.
    tracks: ['partnership', 'program'],
    models: ['bespoke'],
    summary:
      'Acquired property and developed investor packages to launch a boutique hotel in Ghana. Managed renovations, legal engagement, staff acquisition and standardized reporting.',
    workstreams: ['finops', 'ppc', 'programs'],
    published: true,
  },
  {
    id: 'pride-south-side',
    name: 'Pride South Side',
    tracks: ['program'],
    models: ['bespoke'],
    summary:
      'Organized and managed the largest South Side POC LGBTQ+ festival in the Midwest, peaking at 7,000 attendees. Raised funding, coordinated stakeholders, hired staff, managed media and marketing, and produced annual reports — now expanding into a year-round Ecosystem of Care.',
    workstreams: ['experiences', 'studio', 'programs', 'ppc'],
    published: true,
  },
  {
    id: '3t',
    name: '3T',
    tracks: ['program'],
    models: ['fractional'],
    summary: '',
    workstreams: [],
    published: false,
  },
  {
    id: 'austin-lewis-cottage',
    name: 'Austin Lewis Cottage',
    tracks: ['program'],
    models: ['bespoke'],
    summary: '',
    workstreams: [],
    published: false,
  },
  {
    id: 'lovewell',
    name: 'LoveWell',
    tracks: ['program'],
    models: ['bespoke'],
    summary: '',
    workstreams: [],
    published: false,
  },
];
