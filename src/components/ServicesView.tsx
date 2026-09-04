import React, { useEffect, useRef, useState } from 'react';
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
 * Services opens with the two collaboration tracks. The fractional catalog is
 * expensive real estate — a full services marketplace — so it stays out of the
 * page until the visitor asks for it via the "View Services" CTA.
 */
export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenSchedule }) => {
  const [showFractionalCatalog, setShowFractionalCatalog] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showFractionalCatalog) {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showFractionalCatalog]);

  return (
    <div className="w-full">
      <CollaborationOpportunitiesSection
        onOpenSchedule={onOpenSchedule}
        onViewFractionalServices={() => setShowFractionalCatalog(true)}
      />

      {showFractionalCatalog && (
        <div ref={catalogRef}>
          <ServicesMarketplaceView onOpenSchedule={onOpenSchedule} />
        </div>
      )}

      <DeliveryModelSection />

      <WorkstreamsSection onOpenSchedule={onOpenSchedule} />

      <TeamProfilesSection />

      <CaseStudiesSection />
    </div>
  );
};
