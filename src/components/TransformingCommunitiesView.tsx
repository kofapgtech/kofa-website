import React, { useState } from 'react';
import { ArrowRight, Check, Compass, RefreshCw, Layers, CheckCircle2, ShieldCheck, Sparkles, Building2, Landmark, MonitorSmartphone, Store } from 'lucide-react';
import { NavScreen } from '../types';
import { submitContact } from '../lib/supabase';

interface TransformingCommunitiesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
}

/** The four verticals the S² framework plugs into, per the website blueprint. */
const verticals = [
  {
    title: 'Urban Planning & Development',
    icon: <Building2 className="w-6 h-6" />,
    body: 'Transforming physical spaces into thriving community corridors through collaborative benefit frameworks where master developers and local neighbors win together.',
  },
  {
    title: 'Digital Ecosystem Building',
    icon: <MonitorSmartphone className="w-6 h-6" />,
    body: 'Custom automated tech stacks, light CRM architectures, and intuitive digital environments that keep vast, decentralized networks organized at scale.',
  },
  {
    title: 'Small Business Support',
    icon: <Store className="w-6 h-6" />,
    body: 'Building localized economic resilience, helping homegrown entrepreneurs scale, and turning neighborhood operations into self-sustaining business structures.',
  },
  {
    title: 'The Public Sector',
    icon: <Landmark className="w-6 h-6" />,
    body: 'Navigating municipal policy, government relations, large-scale contractor procurement, and regulatory frameworks to bridge bureaucratic systems and real people.',
  },
];

export const TransformingCommunitiesView: React.FC<TransformingCommunitiesViewProps> = ({
  onNavigate,
  onOpenSchedule,
}) => {
  // Connect with us form state
  const [orgName, setOrgName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmitConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const { error } = await submitContact({
      name: `${firstName} ${lastName}`.trim(),
      email: workEmail,
      organization: orgName,
      source: 'contact',
    });

    setIsSubmitting(false);
    if (error) {
      setSubmitError(error);
      return;
    }
    setFormSubmitted(true);
  };

  // TODO: replace these names with partner logos, and link each to the partner's
  // site. Tracked in the repo issues.
  const partnerLogos = [
    'Purchasing with Purpose',
    'South Side Help Center',
    'Austin Lewis Cottage',
  ];

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.1] text-[#2c6748] font-display">
              Built on Relationships. <br className="hidden sm:inline" />
              Driven by Innovation.
            </h1>

            <p className="text-lg md:text-xl text-[#404942] leading-relaxed max-w-xl font-normal">
              At our core, Kofa P/G is a team of community developers. Our bread and butter
              is human relationships. Everything else we build — from physical urban
              corridors to digital ecosystems — is a direct product of our deep experience,
              relentless innovation, rigorous skill, and multi-generational creativity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-partner-with-us"
                onClick={onOpenSchedule}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#2c6748] text-white hover:bg-[#23533a] active:scale-[0.98] transition-all shadow-md"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-see-our-framework"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#ffebd2] text-[#251a08] hover:bg-[#fbe5c8] active:scale-[0.98] transition-all border border-[#edd7bb]"
              >
                See Our Framework
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-[#edd7bb]/50 aspect-[4/3] bg-[#ffebd2]">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Diverse team of social impact consultants and leaders collaborating over blueprints, tablets, and reports"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGO TICKER */}
      <section className="border-y border-[#edd7bb]/60 bg-[#fff1e3]/60 py-10 overflow-hidden">
        <p className="font-anton text-xs uppercase tracking-[0.15em] text-[#707972] mb-6 text-center px-4">
          Trusted by changemakers including
        </p>

        {/*
          Marquee: the track holds two identical copies of the list, so when the
          first copy has scrolled exactly one width the animation loops seamlessly.
          Under prefers-reduced-motion the animation is disabled and the list falls
          back to a centred, wrapping row (see .partner-marquee in index.css).
        */}
        <div className="partner-marquee group" aria-label="Partner organizations">
          <div className="partner-marquee__track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="partner-marquee__group"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {partnerLogos.map((partner) => (
                  <span
                    key={`${copy}-${partner}`}
                    className="text-lg md:text-2xl font-bold font-display text-[#8c948e] hover:text-[#2c6748] transition-colors select-none tracking-tight whitespace-nowrap"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE CORE MANIFESTO */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        id="manifesto"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight leading-[1.15]">
            “Relationships Are the Ultimate Infrastructure.”
          </h2>

          <p className="text-lg md:text-xl text-[#404942] leading-relaxed">
            Look at any failed urban master plan, struggling commercial corridor, or
            abandoned digital initiative, and you will find the exact same root cause: a
            profound lack of genuine human connection and trust.
          </p>

          <p className="text-lg md:text-xl text-[#404942] leading-relaxed">
            We do not approach development as a detached, top-down checklist. We
            reverse-engineer every project from the ground up, because we know that trust
            drives results. Once the relationships are structurally locked in, we deploy
            our multi-disciplinary skill and creative innovation to turn collective
            community vision into permanent, thriving reality.
          </p>
        </div>
      </section>

      {/* 4. COMMUNITY DEVELOPMENT IN ACTION (the four verticals) */}
      <section
        className="w-full bg-[#fff1e3] border-y border-[#edd7bb] px-4 sm:px-6 lg:px-8 py-20 md:py-28"
        id="verticals"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="font-anton text-xs uppercase tracking-widest text-[#2c6748]">
              Where the framework plugs in
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#251a08] tracking-tight">
              Community Development in Action
            </h2>
            <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
              Because we master the human element, our universal framework adapts to
              support, scale, and accelerate four critical verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.title}
                className="rounded-2xl border border-[#edd7bb] bg-[#fff8f3] p-7 shadow-sm flex flex-col"
              >
                <span className="w-12 h-12 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center mb-5">
                  {vertical.icon}
                </span>
                <h3 className="text-lg font-bold font-display text-[#2c6748] mb-3">
                  {vertical.title}
                </h3>
                <p className="text-sm text-[#404942] leading-relaxed">{vertical.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28" id="services-overview">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#2c6748] tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 2 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Co-Ventures & Joint Ventures */}
          <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-2xl p-8 lg:p-10 flex flex-col justify-between hover:shadow-xl transition-shadow bg-gradient-to-b from-[#fff8f3] to-[#fff1e3]/40">
            <div>
              {/* Compass Icon in soft beige circle */}
              <div className="w-12 h-12 rounded-full bg-[#fbe5c8] flex items-center justify-center mb-6 text-[#2c6748] border border-[#edd7bb]">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold font-display text-[#251a08] mb-4">
                Co-Ventures & Joint Ventures
              </h3>

              <p className="text-[#404942] text-sm md:text-base leading-relaxed mb-8">
                Comprehensive, fixed-cost engagements for systemic transformation. Ideal for organizations ready to overhaul their procurement strategies from the ground up, requiring deep stakeholder alignment and custom policy development.
              </p>

              {/* Checklist */}
              <ul className="space-y-3.5 mb-10 text-sm md:text-base text-[#251a08] font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] flex items-center justify-center text-[#2c6748] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Procurement Policy Overhaul</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] flex items-center justify-center text-[#2c6748] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Supply Chain Impact Auditing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#cee6d4] flex items-center justify-center text-[#2c6748] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Long-term Strategy Roadmapping</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="w-full py-3.5 px-4 rounded-lg border border-[#707972]/60 text-sm font-semibold text-[#251a08] hover:bg-[#ffebd2] hover:border-[#2c6748] transition-all text-center"
            >
              Explore Co-Ventures &amp; Joint Ventures
            </button>
          </div>

          {/* Card 2: Fractional Collaborations */}
          <div className="bg-[#fff8f3] border border-[#edd7bb] rounded-2xl p-8 lg:p-10 flex flex-col justify-between hover:shadow-xl transition-shadow bg-gradient-to-b from-[#fff8f3] to-[#f4fbf6]/50">
            <div>
              {/* Refresh / Circular Arrow Icon in mint circle */}
              <div className="w-12 h-12 rounded-full bg-[#b2f0c9] flex items-center justify-center mb-6 text-[#2c6748] border border-[#97d4ae]">
                <RefreshCw className="w-6 h-6" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold font-display text-[#251a08] mb-4">
                Fractional Collaborations
              </h3>

              <p className="text-[#404942] text-sm md:text-base leading-relaxed mb-6">
                Agile execution without the overhead of a full engagement. Draw on a specialized marketplace of fixed-price, impact-focused services as your needs evolve throughout the year.
              </p>

              {/* Example Deployment Nested Box */}
              <div className="bg-[#ffebd2]/40 border border-[#edd7bb] rounded-xl p-5 mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-anton text-[11px] uppercase tracking-wider text-[#707972]">
                    EXAMPLE DEPLOYMENT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#b2f0c9] text-[#002111] border border-[#97d4ae]">
                    2-3 Weeks
                  </span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="p-2 rounded bg-white border border-[#edd7bb] text-[#2c6748] shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-[#2c6748]">
                      Sustainable Website Redesign
                    </h4>
                    <p className="text-xs md:text-sm text-[#526859]">
                      Low-carbon architecture & accessible UI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="w-full py-3.5 px-4 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a] active:scale-[0.98] transition-all text-center shadow-sm"
            >
              Explore Fractional Collaborations
            </button>
          </div>
        </div>
      </section>

      {/* 4. CONNECT WITH US SECTION (Dark Charcoal / Forest Container matching Image 9) */}
      <section className="bg-[#4d514e] text-white py-20 px-4 sm:px-6 lg:px-8" id="connect-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Connect with us
            </h2>

            <p className="text-lg text-[#e5e2da] leading-relaxed max-w-lg">
              Ready to turn your organization's operational spending into an engine for good? Share a few details, and our intake team will reach out.
            </p>

            <div className="flex items-center gap-3 pt-4 text-xs sm:text-sm text-[#cee6d4]">
              <span className="w-6 h-6 rounded-full bg-[#135134] flex items-center justify-center text-[#b2f0c9]">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span>Seamlessly integrates with your existing workflows.</span>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#251a08] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#edd7bb]">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#b2f0c9] text-[#2c6748] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#2c6748]">
                    Assessment Request Received
                  </h3>
                  <p className="text-sm text-[#404942] max-w-md mx-auto">
                    Thank you, {firstName || 'Changemaker'}. Our senior restorative policy team at Kofa P/G will review your organization's information and connect with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitConnect} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      required
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Global Health Initiative"
                      className="w-full px-4 py-3 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] placeholder-[#a69c8e] focus:outline-none focus:ring-2 focus:ring-[#2c6748] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jane"
                        className="w-full px-4 py-3 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] placeholder-[#a69c8e] focus:outline-none focus:ring-2 focus:ring-[#2c6748] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] placeholder-[#a69c8e] focus:outline-none focus:ring-2 focus:ring-[#2c6748] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#404942] mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="jane@organization.org"
                      className="w-full px-4 py-3 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] placeholder-[#a69c8e] focus:outline-none focus:ring-2 focus:ring-[#2c6748] focus:bg-white transition-all"
                    />
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="rounded-lg border border-[#e5b3a4] bg-[#fdece7] p-3 text-xs text-[#7c2d12] leading-relaxed"
                    >
                      We could not save your request ({submitError}). Please try again, or
                      reach us from the Contact page.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-lg bg-[#465349] hover:bg-[#2c6748] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>

                  <p className="text-[11px] text-[#707972] text-center leading-normal">
                    By submitting this form, you agree to our privacy policy. Your data is handled with care.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
