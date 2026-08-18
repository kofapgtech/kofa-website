import React from 'react';
import { OurStoryView } from './OurStoryView';
import { OurValuesView } from './OurValuesView';

/**
 * Our Story consolidates the origin story, mission, vision, the S² framework and
 * the core pillars into one page. Mission and vision are anchored (#mission,
 * #vision) inside the story section and the pillars (#values) below it, so the
 * nav can deep-link without separate screens.
 */
export const AboutView: React.FC = () => (
  <div className="w-full">
    <OurStoryView />

    <div id="values" className="scroll-mt-24">
      <OurValuesView />
    </div>
  </div>
);
