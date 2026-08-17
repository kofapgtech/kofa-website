import React from 'react';
import { Lightbulb, Network, Trees, ArrowRight, ShieldAlert, TrendingUp } from 'lucide-react';
import { NavScreen } from '../types';

interface OurValuesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

export const OurValuesView: React.FC<OurValuesViewProps> = ({
  onNavigate,
  onOpenSchedule,
}) => {
  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08]">
      {/* 1. HERO SECTION (Dark / Black Canvas from Image 3) */}
      <section className="w-full bg-[#000000] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill badge: Our Philosophy */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[#b2f0c9] text-[#002111] border border-[#97d4ae]">
                Our Philosophy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-display leading-[1.1] text-[#449163] tracking-tight">
              Learning from the past to <br />
              build the future.
            </h1>

            <p className="text-base sm:text-lg text-[#b5ccbb] font-normal leading-relaxed max-w-xl">
              At Kofa Policy Group, our work is rooted in the Sankofa philosophy and 'Seven Generation' thinking. We believe true restorative equity demands that we acknowledge historical contexts to design resilient systems that serve communities long into the future.
            </p>
          </div>

          {/* Right Image: Macro Green Leaves with Morning Dew */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-[#2c6748]/40 aspect-[4/5] max-h-[500px] bg-[#122e20]">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80"
                alt="Vibrant green leaves with intricate veins and natural light representing growth and circular ecology"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS SECTION (Warm Cream Canvas from Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28" id="core-pillars">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight">
            Core Pillars
          </h2>
          <p className="text-base md:text-lg text-[#404942]">
            The principles that guide our approach to policy, development, and community impact.
          </p>
        </div>

        {/* Two Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Restorative Justice */}
          <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#2c6748] transition-colors">
            <div>
              {/* Soft mint circle indicator */}
              <div className="w-10 h-10 rounded-full bg-[#b2f0c9] mb-6 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#2c6748]"></span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-4">
                Restorative Justice
              </h3>

              <p className="text-sm sm:text-base text-[#404942] leading-relaxed">
                We don't ignore historical policy harms like redlining; we treat them as active data points. By understanding past systemic failures, we design modern resilience strategies that actively repair and uplift.
              </p>
            </div>
          </div>

          {/* Card 2: Quantifiable Impact */}
          <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#2c6748] transition-colors relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="sm:col-span-7">
                {/* Soft mint circle indicator */}
                <div className="w-10 h-10 rounded-full bg-[#cee6d4] mb-6 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-[#2c6748]"></span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-4">
                  Quantifiable Impact
                </h3>

                <p className="text-sm sm:text-base text-[#404942] leading-relaxed">
                  We move beyond basic 'diverse spend' metrics. Our focus is on deep, lasting outcomes: community wealth retention, job quality, and cyclical reinvestment patterns that build generational wealth.
                </p>
              </div>

              {/* Right Inset Card: METRIC FOCUS: Wealth */}
              <div className="sm:col-span-5 bg-white border border-[#edd7bb] rounded-2xl p-5 text-center shadow-sm self-center sm:self-start">
                <span className="font-anton text-[10px] uppercase tracking-wider text-[#707972] block mb-1">
                  METRIC FOCUS
                </span>
                <span className="text-3xl lg:text-4xl font-extrabold font-display text-[#2c6748] tracking-tight block">
                  Wealth
                </span>
                <span className="text-xs italic text-[#526859] block mt-1">
                  Retention & Growth
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. OUR COLLABORATION ETHOS (Full-Width Card from Image 3) */}
        <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-8">
            Our Collaboration Ethos
          </h3>

          <div className="border-t border-[#edd7bb] pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ethos 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#fbe5c8] flex items-center justify-center text-[#2c6748] shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-anton tracking-wider uppercase text-[#251a08]">
                  Human Touch & Storytelling
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#404942] leading-relaxed">
                We leverage AI and data as powerful tools, but they never replace the human story. Qualitative community narratives drive our quantitative analysis.
              </p>
            </div>

            {/* Ethos 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#cee6d4] flex items-center justify-center text-[#2c6748] shrink-0">
                  <Network className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-anton tracking-wider uppercase text-[#251a08]">
                  Strategic Alignment
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#404942] leading-relaxed">
                We act as the bridge between community impact goals and concrete development strategies, ensuring intent matches execution.
              </p>
            </div>

            {/* Ethos 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#b2f0c9] flex items-center justify-center text-[#2c6748] shrink-0">
                  <Trees className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-anton tracking-wider uppercase text-[#251a08]">
                  Restorative Resilience
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#404942] leading-relaxed">
                Our goal is never a short-term fix. We build and advocate for systems designed to endure and support communities for generations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Calculator */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => onNavigate('calculator')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a] shadow-md transition-all"
          >
            Launch Wealth & Impact Calculator
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#ffebd2] border border-[#edd7bb] text-[#251a08] text-sm font-semibold hover:bg-[#fbe5c8] transition-all"
          >
            Schedule Intake Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
