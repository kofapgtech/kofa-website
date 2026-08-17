import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Leaf, ArrowRight, ShieldCheck, Download, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { NavScreen } from '../types';

interface CalculatorViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({
  onNavigate,
  onOpenSchedule,
}) => {
  const [annualBudget, setAnnualBudget] = useState<number>(5000000); // $5M
  const [restorativeTarget, setRestorativeTarget] = useState<number>(15); // 15%
  const [region, setRegion] = useState<string>('chicago');
  const [organizationType, setOrganizationType] = useState<string>('nonprofit');
  const [showReportSaved, setShowReportSaved] = useState<boolean>(false);

  // Math models based on restorative economics and local multiplier effect
  const directRestorativeSpend = (annualBudget * (restorativeTarget / 100));
  
  // Local multiplier for restorative spend (Akan circular economy & Seven Generation principle: ~$1.84 local retention vs $0.32 conventional)
  const localMultiplier = 1.84;
  const totalWealthGenerated = directRestorativeSpend * localMultiplier;
  
  // Living wage jobs supported (average $72,000 living wage package in Chicago metro)
  const jobsSupported = Math.max(1, Math.round(directRestorativeSpend / 68000));
  
  // Carbon & circular resource diverted (kg CO2e per $10k restorative procurement)
  const co2OffsetTons = Math.round((directRestorativeSpend / 10000) * 4.2);
  
  // Recommended Fractional Credits block
  const recommendedCredits = Math.round(Math.min(100, Math.max(10, directRestorativeSpend / 40000)));

  const handleDownloadReport = () => {
    setShowReportSaved(true);
    setTimeout(() => setShowReportSaved(false), 3000);
  };

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[#b2f0c9] text-[#002111] border border-[#97d4ae]">
            Quantifiable Impact Engine
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight">
            Community Wealth & Procurement Calculator
          </h1>
          <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
            Move beyond simple diverse-spend compliance. Measure true cyclical wealth retention, local job creation, and restorative impact derived from your organization's operational spending.
          </p>
        </div>

        {/* Main Grid: Controls on Left, Real-time Impact Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-white border border-[#edd7bb] rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#2c6748]">
              Your Operational Parameters
            </h2>

            {/* Parameter 1: Annual Spend */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-[#404942]">Annual Procurement / Operating Budget</label>
                <span className="text-base font-bold text-[#2c6748] font-mono">
                  ${(annualBudget).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={250000}
                max={25000000}
                step={250000}
                value={annualBudget}
                onChange={(e) => setAnnualBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#ffebd2] rounded-lg appearance-none cursor-pointer accent-[#2c6748]"
              />
              <div className="flex justify-between text-[11px] text-[#707972]">
                <span>$250K</span>
                <span>$5M</span>
                <span>$15M</span>
                <span>$25M+</span>
              </div>
            </div>

            {/* Parameter 2: Restorative Spend Target % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-[#404942]">Restorative Procurement Target</label>
                <span className="text-base font-bold text-[#2c6748] font-mono">
                  {restorativeTarget}% (${(directRestorativeSpend).toLocaleString()})
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={restorativeTarget}
                onChange={(e) => setRestorativeTarget(Number(e.target.value))}
                className="w-full h-2 bg-[#ffebd2] rounded-lg appearance-none cursor-pointer accent-[#2c6748]"
              />
              <div className="flex justify-between text-[11px] text-[#707972]">
                <span>5% (Baseline)</span>
                <span>15% (Target)</span>
                <span>25% (Leader)</span>
                <span>40% (Restorative Transform)</span>
              </div>
            </div>

            {/* Parameter 3: Region & Org Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                  Target Geography
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] font-medium focus:ring-2 focus:ring-[#2c6748]"
                >
                  <option value="chicago">Greater Chicago / Cook County</option>
                  <option value="midwest">Midwest Regional Corridor</option>
                  <option value="national">National Multi-hub</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                  Organization Archetype
                </label>
                <select
                  value={organizationType}
                  onChange={(e) => setOrganizationType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] font-medium focus:ring-2 focus:ring-[#2c6748]"
                >
                  <option value="nonprofit">Non-Profit / Foundation</option>
                  <option value="public">Public / Civic Institution</option>
                  <option value="healthcare">Hospital / Healthcare Anchor</option>
                  <option value="highered">University / Higher Ed</option>
                  <option value="enterprise">Purpose-driven Enterprise</option>
                </select>
              </div>
            </div>

            {/* Callout box */}
            <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-xl p-4 text-xs text-[#526859] leading-relaxed">
              <span className="font-bold text-[#2c6748]">Sankofa Restorative Factor:</span> Rather than tracking one-way vendor payouts, our engine models circular wealth retention—calculating how capital recirculates inside historically disinvested community ecosystems.
            </div>
          </div>

          {/* Real-Time Impact Dashboard Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#2c6748] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#46805f] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

              <div className="relative z-10">
                <span className="font-anton text-xs uppercase tracking-widest text-[#b2f0c9] block mb-2">
                  PROJECTED 3-YEAR COMMUNITY IMPACT
                </span>
                
                {/* Big Number: Total Community Wealth Created */}
                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                    ${(totalWealthGenerated).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-[#cee6d4] mt-1 font-medium">
                    Cyclical Community Wealth Retained & Generated
                  </div>
                </div>

                {/* 3 Metric Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#46805f]">
                  <div className="bg-[#1e4732] rounded-xl p-4 border border-[#97d4ae]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#b2f0c9] mb-1 font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Jobs</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      {jobsSupported}
                    </div>
                    <div className="text-[11px] text-[#cee6d4] mt-0.5">
                      Living-wage local jobs
                    </div>
                  </div>

                  <div className="bg-[#1e4732] rounded-xl p-4 border border-[#97d4ae]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#b2f0c9] mb-1 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Multiplier</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      1.84x
                    </div>
                    <div className="text-[11px] text-[#cee6d4] mt-0.5">
                      Local economic ROI
                    </div>
                  </div>

                  <div className="bg-[#1e4732] rounded-xl p-4 border border-[#97d4ae]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#b2f0c9] mb-1 font-semibold">
                      <Leaf className="w-3.5 h-3.5" />
                      <span>Carbon</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      {co2OffsetTons} t
                    </div>
                    <div className="text-[11px] text-[#cee6d4] mt-0.5">
                      CO2e averted (circular)
                    </div>
                  </div>
                </div>

                {/* Recommended Service Package recommendation */}
                <div className="mt-6 bg-[#133826] rounded-2xl p-4 border border-[#3f7353] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-anton uppercase tracking-wider text-[#97d4ae] block">
                      RECOMMENDED ENGAGEMENT
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {recommendedCredits > 40 ? 'Bespoke Institutional Overhaul' : `${recommendedCredits} Fractional Credits Block`}
                    </h4>
                  </div>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-3.5 py-2 rounded-lg bg-[#b2f0c9] hover:bg-white text-[#002111] text-xs font-bold transition-colors shrink-0"
                  >
                    View Package
                  </button>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSchedule}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#2c6748] hover:bg-[#23533a] text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                Schedule Assessment with these Parameters
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadReport}
                className="py-3.5 px-4 rounded-xl bg-white border border-[#edd7bb] hover:bg-[#fff1e3] text-[#251a08] text-xs font-semibold transition-colors flex items-center gap-1.5"
                title="Download Impact Summary"
              >
                {showReportSaved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#2c6748]" />
                    <span>Report Ready</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#2c6748]" />
                    <span>Export Summary</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
