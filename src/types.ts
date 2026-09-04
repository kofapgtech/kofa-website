export type NavScreen = 'home' | 'about' | 'services' | 'contact' | 'privacy' | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'bespoke' | 'fractional';
  workstream: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WorkstreamCaseStudy {
  name: string;
  body: string;
}

export interface WorkstreamItem {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  caseStudies: WorkstreamCaseStudy[];
}

export interface PillarItem {
  id: string;
  title: string;
  summary: string;
  metricFocus?: {
    label: string;
    value: string;
    subtext: string;
  };
}

export interface EthosItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export type WorkstreamId = 'programs' | 'studio' | 'ppc' | 'finops' | 'experiences' | 'tech';

/** How a client engages us: a partnership, or a program we co-venture on. */
export type EngagementTrack = 'partnership' | 'program';

/** Both tracks can be delivered either way. */
export type EngagementModel = 'bespoke' | 'fractional';

export interface CaseStudy {
  id: string;
  name: string;
  /** Partner organization behind the work, where it differs from the program name. */
  partner?: string;
  /** A case study can sit in both tracks. */
  tracks: EngagementTrack[];
  models: EngagementModel[];
  summary: string;
  workstreams: WorkstreamId[];
  /** False when we do not yet have approved copy for this engagement. */
  published: boolean;
}

export type TriadRole = 'builder' | 'architect' | 'planner';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: TriadRole;
  bio: string;
}
