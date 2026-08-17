export type NavScreen = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'bespoke' | 'fractional';
  workstream: string;
  credits?: number;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WorkstreamItem {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  coreCapabilities: string[];
  leadRole: string;
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
