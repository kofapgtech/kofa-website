import React from 'react';
import { OurStoryView } from './OurStoryView';
import { OurValuesView } from './OurValuesView';
import { NavScreen } from '../types';

interface AboutViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

/**
 * About consolidates the story, mission, vision and values into one page.
 * Mission and vision are anchored (#mission, #vision) inside the story section,
 * values (#values) below it, so the nav can deep-link without separate screens.
 */
export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenSchedule }) => (
  <div className="w-full">
    <OurStoryView />

    <div id="values" className="scroll-mt-24">
      <OurValuesView onNavigate={onNavigate} onOpenSchedule={onOpenSchedule} />
    </div>
  </div>
);
