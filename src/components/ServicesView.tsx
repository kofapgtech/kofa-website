import React, { useEffect, useRef, useState } from 'react';
import { CollaborationOpportunitiesSection } from './CollaborationOpportunitiesSection';
import { DeliveryModelSection } from './DeliveryModelSection';
import { TeamProfilesSection } from './TeamProfilesSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { WorkstreamsCatalogSection } from './WorkstreamsCatalogSection';
import { NavScreen } from '../types';

interface ServicesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

/**
 * Services opens with the two collaboration tracks. The workstreams catalog is
 * expensive real estate — a full, filterable case-study grid — so it stays out
 * of the page until the visitor asks for it via the "View Services" CTA.
 */
export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenSchedule }) => {
  const [showWorkstreamsCatalog, setShowWorkstreamsCatalog] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showWorkstreamsCatalog) {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showWorkstreamsCatalog]);

  return (
    <div className="w-full">
      <CollaborationOpportunitiesSection
        onOpenSchedule={onOpenSchedule}
        onViewFractionalServices={() => setShowWorkstreamsCatalog(true)}
      />

      {showWorkstreamsCatalog && (
        <div ref={catalogRef}>
          <WorkstreamsCatalogSection onOpenSchedule={onOpenSchedule} />
        </div>
      )}

      <DeliveryModelSection />

      <TeamProfilesSection />

      <CaseStudiesSection />
    </div>
  );
};
