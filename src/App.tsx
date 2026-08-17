import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TransformingCommunitiesView } from './components/TransformingCommunitiesView';
import { OurStoryView } from './components/OurStoryView';
import { OurValuesView } from './components/OurValuesView';
import { CalculatorView } from './components/CalculatorView';
import { ServicesMarketplaceView } from './components/ServicesMarketplaceView';
import { ScheduleModal } from './components/ScheduleModal';
import { WaitlistModal } from './components/WaitlistModal';
import { NavScreen } from './types';
import { Eye, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('home');
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState<boolean>(false);

  // Scroll to top on screen switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f3] text-[#251a08] selection:bg-[#cee6d4] selection:text-[#135134]">
      {/* Top Banner with Quick Design System Screen Jumpers */}
      <div className="bg-[#2c6748] text-white py-2 px-4 text-xs font-medium border-b border-[#1f4b34]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b2f0c9] animate-pulse"></span>
            <span className="font-anton tracking-wider text-[#b2f0c9]">KOFA P/G DESIGN SYSTEM</span>
            <span className="hidden sm:inline text-[#e4f5ea] font-sans">
              — Restorative Equity, Policy Development & Community Development
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#cee6d4] text-[11px] mr-1 hidden md:inline">Jump to Screen:</span>
            <button
              onClick={() => setCurrentScreen('home')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                currentScreen === 'home'
                  ? 'bg-white text-[#2c6748] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              1. Transforming Communities
            </button>

            <button
              onClick={() => setCurrentScreen('story')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                currentScreen === 'story'
                  ? 'bg-white text-[#2c6748] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              2. Our Story
            </button>

            <button
              onClick={() => setCurrentScreen('values')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                currentScreen === 'values'
                  ? 'bg-white text-[#2c6748] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              3. Our Values
            </button>

            <button
              onClick={() => setCurrentScreen('calculator')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                currentScreen === 'calculator'
                  ? 'bg-white text-[#2c6748] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              4. Calculator
            </button>

            <button
              onClick={() => setCurrentScreen('services')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                currentScreen === 'services'
                  ? 'bg-white text-[#2c6748] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              5. Services
            </button>

            <button
              onClick={() => setCurrentScreen('all')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1 ${
                currentScreen === 'all'
                  ? 'bg-[#b2f0c9] text-[#002111] font-bold'
                  : 'bg-[#1e4732] text-[#e4f5ea] hover:bg-[#388e5d]'
              }`}
            >
              <Layers className="w-3 h-3" />
              All
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Main Screen Body */}
      <main className="flex-1 flex flex-col w-full">
        {currentScreen === 'home' && (
          <TransformingCommunitiesView
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        )}

        {currentScreen === 'story' && (
          <OurStoryView
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        )}

        {currentScreen === 'values' && (
          <OurValuesView
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        )}

        {currentScreen === 'calculator' && (
          <CalculatorView
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesMarketplaceView
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        )}

        {currentScreen === 'all' && (
          <div className="w-full space-y-0">
            {/* Screen 1 */}
            <div id="screen-transforming-communities" className="relative">
              <div className="bg-[#edd7bb]/50 py-2 px-6 border-b border-[#edd7bb] text-xs font-bold text-[#2c6748] flex items-center justify-between">
                <span>SCREEN 1: TRANSFORMING COMMUNITIES</span>
                <span className="text-[#526859] font-normal">Hero, Changemaker Partners, Services & Connect</span>
              </div>
              <TransformingCommunitiesView
                onNavigate={(screen) => setCurrentScreen(screen)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            </div>

            {/* Screen 2 */}
            <div id="screen-our-story" className="relative">
              <div className="bg-[#edd7bb]/50 py-2 px-6 border-y border-[#edd7bb] text-xs font-bold text-[#2c6748] flex items-center justify-between">
                <span>SCREEN 2: OUR STORY</span>
                <span className="text-[#526859] font-normal">Sankofa Tradition, Mission, Vision & 6 Workstreams</span>
              </div>
              <OurStoryView
                onNavigate={(screen) => setCurrentScreen(screen)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            </div>

            {/* Screen 3 */}
            <div id="screen-our-values" className="relative">
              <div className="bg-[#edd7bb]/50 py-2 px-6 border-y border-[#edd7bb] text-xs font-bold text-[#2c6748] flex items-center justify-between">
                <span>SCREEN 3: OUR VALUES</span>
                <span className="text-[#526859] font-normal">Philosophy, Core Pillars, Wealth Metric & Collaboration Ethos</span>
              </div>
              <OurValuesView
                onNavigate={(screen) => setCurrentScreen(screen)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            </div>

            {/* Screen 4 & 5 */}
            <div id="screen-calculator" className="relative">
              <div className="bg-[#edd7bb]/50 py-2 px-6 border-y border-[#edd7bb] text-xs font-bold text-[#2c6748] flex items-center justify-between">
                <span>INTERACTIVE TOOL: IMPACT CALCULATOR</span>
                <span className="text-[#526859] font-normal">Simulate Restorative Spend ROI & Local Multipliers</span>
              </div>
              <CalculatorView
                onNavigate={(screen) => setCurrentScreen(screen)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            </div>

            <div id="screen-services-marketplace" className="relative">
              <div className="bg-[#edd7bb]/50 py-2 px-6 border-y border-[#edd7bb] text-xs font-bold text-[#2c6748] flex items-center justify-between">
                <span>MARKETPLACE: FRACTIONAL & BESPOKE SERVICES</span>
                <span className="text-[#526859] font-normal">Deployable Credit Modules Across 6 Workstreams</span>
              </div>
              <ServicesMarketplaceView
                onNavigate={(screen) => setCurrentScreen(screen)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer (with context-specific variant) */}
      <Footer
        variant={currentScreen === 'values' ? 'green' : 'warm'}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Interactive Modals */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}

export default App;
