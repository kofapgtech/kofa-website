import React from 'react';
import { WorkstreamsSection } from './WorkstreamsSection';
import { CollaborationOpportunitiesSection } from './CollaborationOpportunitiesSection';
import { DeliveryModelSection } from './DeliveryModelSection';
import { TeamProfilesSection } from './TeamProfilesSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { ServicesMarketplaceView } from './ServicesMarketplaceView';
import { NavScreen } from '../types';

interface ServicesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

/**
 * Services is the single commercial page: engagement models, the delivery
 * triad, the six workstreams, and past work.
 */
export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenSchedule }) => (
  <div className="w-full">
    <ServicesMarketplaceView onNavigate={onNavigate} onOpenSchedule={onOpenSchedule} />

    <CollaborationOpportunitiesSection />

    <DeliveryModelSection />

    <WorkstreamsSection onOpenSchedule={onOpenSchedule} />

    <TeamProfilesSection />

    <CaseStudiesSection />
  </div>
);
