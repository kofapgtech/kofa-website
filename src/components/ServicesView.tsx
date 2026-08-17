import React, { useRef } from 'react';
import { WorkstreamsSection } from './WorkstreamsSection';
import { ServicesMarketplaceView } from './ServicesMarketplaceView';
import { CalculatorView } from './CalculatorView';
import { NavScreen } from '../types';

interface ServicesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

/**
 * Services is the single commercial page: the six workstreams, the bespoke and
 * fractional catalogue, and the impact calculator kept alongside as a worked
 * example rather than as its own nav destination.
 */
export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenSchedule }) => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full">
      <ServicesMarketplaceView onNavigate={onNavigate} onOpenSchedule={onOpenSchedule} />

      <WorkstreamsSection onOpenSchedule={onOpenSchedule} onViewCalculator={scrollToCalculator} />

      <div ref={calculatorRef} id="calculator" className="scroll-mt-24">
        <div className="w-full bg-[#2c6748] text-[#e4f5ea] px-4 sm:px-6 lg:px-8 py-10 border-t border-[#1f4b34]">
          <div className="max-w-7xl mx-auto text-center space-y-3">
            <span className="font-anton text-xs uppercase tracking-widest text-[#b2f0c9]">
              From prior work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Impact Calculator
            </h2>
            <p className="text-sm sm:text-base text-[#cee6d4] max-w-2xl mx-auto leading-relaxed">
              Built for an anchor-institution engagement to model how restorative
              procurement circulates spend locally. Try it with your own numbers.
            </p>
          </div>
        </div>

        <CalculatorView onNavigate={onNavigate} onOpenSchedule={onOpenSchedule} />
      </div>
    </div>
  );
};
