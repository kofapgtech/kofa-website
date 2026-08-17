import React, { useState } from 'react';
import { ArrowRight, CalendarCheck, Check, Loader2, Mail, MapPin, TriangleAlert } from 'lucide-react';
import { submitContact } from '../lib/supabase';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [wantsIntake, setWantsIntake] = useState(false);
  const [preferredTime, setPreferredTime] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const { error: submitError } = await submitContact({
      name,
      email,
      organization,
      message,
      wants_intake: wantsIntake,
      preferred_time: wantsIntake ? preferredTime : undefined,
      source: wantsIntake ? 'intake' : 'contact',
    });

    if (submitError) {
      setError(submitError);
      setStatus('idle');
      return;
    }
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div className="w-full bg-[#fff8f3] text-[#251a08]">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-[#cee6d4] text-[#2c6748] flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#2c6748] mb-4">
            Thank you — we have your details.
          </h1>
          <p className="text-base text-[#404942] leading-relaxed">
            {wantsIntake
              ? 'We will follow up to confirm an intake appointment at a time that works for you.'
              : 'A member of the Kofa P/G team will be in touch shortly.'}
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fff8f3] text-[#251a08]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Framing */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-anton text-xs uppercase tracking-widest text-[#2c6748]">
              Start the conversation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#251a08] tracking-tight leading-[1.05]">
              Let's build something communities can own.
            </h1>
            <p className="text-base sm:text-lg text-[#404942] leading-relaxed">
              Tell us about your organization and what you are trying to move. We will
              reply with a point of view, not a brochure — and if it is useful, we can
              book an intake session to go deeper.
            </p>

            <div className="pt-4 space-y-3 text-sm text-[#526859]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2c6748]" />
                <span>Every submission reaches the partner team directly.</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2c6748]" />
                <span>Based in Chicago, working nationally.</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#fff1e3] border border-[#edd7bb] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                    Name <span className="text-[#2c6748]">*</span>
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={120}
                    className="w-full rounded-lg border border-[#edd7bb] bg-white px-3.5 py-2.5 text-sm text-[#251a08] outline-none focus:border-[#2c6748] focus:ring-2 focus:ring-[#2c6748]/20"
                  />
                </label>

                <label className="block">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                    Email <span className="text-[#2c6748]">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={200}
                    className="w-full rounded-lg border border-[#edd7bb] bg-white px-3.5 py-2.5 text-sm text-[#251a08] outline-none focus:border-[#2c6748] focus:ring-2 focus:ring-[#2c6748]/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                  Organization
                </span>
                <input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  maxLength={160}
                  className="w-full rounded-lg border border-[#edd7bb] bg-white px-3.5 py-2.5 text-sm text-[#251a08] outline-none focus:border-[#2c6748] focus:ring-2 focus:ring-[#2c6748]/20"
                />
              </label>

              <label className="block">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                  What are you working on?
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  maxLength={4000}
                  className="w-full rounded-lg border border-[#edd7bb] bg-white px-3.5 py-2.5 text-sm text-[#251a08] outline-none resize-y focus:border-[#2c6748] focus:ring-2 focus:ring-[#2c6748]/20"
                />
              </label>

              {/* Optional intake booking */}
              <div className="rounded-xl border border-[#edd7bb] bg-white/70 p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantsIntake}
                    onChange={(e) => setWantsIntake(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#2c6748]"
                  />
                  <span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#251a08]">
                      <CalendarCheck className="w-4 h-4 text-[#2c6748]" />
                      Also request an intake appointment
                    </span>
                    <span className="block text-xs text-[#526859] mt-1">
                      Optional. A 45-minute session to scope workstreams and outcomes.
                    </span>
                  </span>
                </label>

                {wantsIntake && (
                  <label className="block mt-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#251a08] mb-1.5">
                      Times that usually work for you
                    </span>
                    <input
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      maxLength={120}
                      placeholder="e.g. Tuesday or Thursday mornings, CT"
                      className="w-full rounded-lg border border-[#edd7bb] bg-white px-3.5 py-2.5 text-sm text-[#251a08] outline-none focus:border-[#2c6748] focus:ring-2 focus:ring-[#2c6748]/20"
                    />
                  </label>
                )}
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-[#e5b3a4] bg-[#fdece7] p-3 text-xs text-[#7c2d12]"
                >
                  <TriangleAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    We could not save your submission ({error}). Please try again, or email
                    us directly so nothing is lost.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2c6748] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#388e5d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    {wantsIntake ? 'Send and request intake' : 'Send message'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
