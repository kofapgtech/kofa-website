import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Mail, User, Phone, Sparkles } from 'lucide-react';
import { KofaLogo } from './KofaLogo';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orgType, setOrgType] = useState('Nonprofit');
  const [interest, setInterest] = useState('Procurement Policy Overhaul');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 600);
  };

  const handleReset = () => {
    setStep('form');
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-[#fff8f3] text-[#251a08] rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-[#edd7bb] relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#ffebd2] text-[#404942] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <KofaLogo size="sm" />
              <span className="font-anton text-xs uppercase tracking-widest text-[#707972]">Intake Scheduling</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-2">
              Schedule Your Intake Call
            </h2>
            <p className="text-xs sm:text-sm text-[#404942] mb-6">
              Connect directly with a Kofa Policy Group senior advisor to explore restorative equity procurement and community development strategies.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1">
                  Primary Interest Area
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] font-medium focus:ring-2 focus:ring-[#2c6748]"
                >
                  <option>Bespoke Procurement Policy Overhaul</option>
                  <option>Fractional Services (Credit Marketplace)</option>
                  <option>Sustainable2 Program Integration</option>
                  <option>Community Wealth & Economic Impact Modeling</option>
                  <option>General Strategic Partnership</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#404942] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Maya Lin"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404942] mb-1">
                    Organization Type
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] font-medium focus:ring-2 focus:ring-[#2c6748]"
                  >
                    <option>Non-Profit Organization</option>
                    <option>Civic / Municipal Body</option>
                    <option>Healthcare / Anchor Institution</option>
                    <option>Foundation / Philanthropy</option>
                    <option>Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#404942] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@institution.org"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404942] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1">
                  Brief Context or Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any background on your procurement goals or target communities..."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2c6748] hover:bg-[#23533a] text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Reserving Intake Window...</span>
                ) : (
                  <span>Confirm & Schedule Intake Call</span>
                )}
              </button>

              <div className="text-[11px] text-[#707972] text-center flex items-center justify-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2c6748]" />
                <span>30-minute discovery session with zero obligation.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-[#b2f0c9] text-[#2c6748] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-[#2c6748]">
              Intake Request Confirmed!
            </h3>

            <p className="text-sm text-[#404942] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#251a08]">{name || 'Leader'}</strong>. A calendar invite and prep briefing for <strong className="text-[#251a08]">{interest}</strong> have been reserved.
            </p>

            <div className="bg-[#fff1e3] p-4 rounded-xl border border-[#edd7bb] text-xs text-[#526859] max-w-sm mx-auto text-left space-y-1">
              <div><strong>Client:</strong> {name} ({email})</div>
              <div><strong>Service:</strong> {interest}</div>
              <div><strong>Location:</strong> Google Meet (Link sent to {email})</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-2.5 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
