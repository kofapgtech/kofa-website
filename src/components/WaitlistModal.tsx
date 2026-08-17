import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { KofaLogo } from './KofaLogo';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [program, setProgram] = useState<'sustainable2' | 'global_partners'>('sustainable2');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    setOrg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-[#fff8f3] text-[#251a08] rounded-3xl max-w-lg w-full p-6 sm:p-10 shadow-2xl border border-[#edd7bb] relative">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#ffebd2] text-[#404942]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <KofaLogo size="sm" />
              <span className="font-anton text-xs uppercase tracking-widest text-[#707972]">
                Early Access Cohort
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2c6748] mb-2">
              Join the Strategic Waitlist
            </h2>

            <p className="text-xs sm:text-sm text-[#404942] mb-6 leading-relaxed">
              Gain priority access to upcoming cohort rollouts and pro-bono restorative initiatives.
            </p>

            {/* Select program */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setProgram('sustainable2')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  program === 'sustainable2'
                    ? 'border-[#2c6748] bg-[#f4fbf6] ring-2 ring-[#2c6748]/20'
                    : 'border-[#edd7bb] bg-white hover:bg-[#fff1e3]'
                }`}
              >
                <div className="text-xs font-bold font-display text-[#2c6748]">Sustainable2 Program</div>
                <div className="text-[11px] text-[#526859] mt-1">Chicago Public Institution Cohort</div>
              </button>

              <button
                type="button"
                onClick={() => setProgram('global_partners')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  program === 'global_partners'
                    ? 'border-[#2c6748] bg-[#f4fbf6] ring-2 ring-[#2c6748]/20'
                    : 'border-[#edd7bb] bg-white hover:bg-[#fff1e3]'
                }`}
              >
                <div className="text-xs font-bold font-display text-[#2c6748]">KOFA Global Partners</div>
                <div className="text-[11px] text-[#526859] mt-1">Complimentary Legal & Pro Bono</div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1">
                  Organization / Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. Cook County Health or Civic Alliance"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#404942] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.gov"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff1e3] border border-[#edd7bb] text-sm text-[#251a08] focus:ring-2 focus:ring-[#2c6748]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#2c6748] hover:bg-[#23533a] text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Join Priority Waitlist
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#b2f0c9] text-[#2c6748] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-[#2c6748]">
              You're on the Priority List!
            </h3>

            <p className="text-sm text-[#404942] leading-relaxed max-w-sm mx-auto">
              We've registered <strong className="text-[#251a08]">{email}</strong> for the <strong>{program === 'sustainable2' ? 'Sustainable2 Program' : 'KOFA Global Partners'}</strong> initiative. You'll receive rollout updates directly from our leadership.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#2c6748] text-white text-sm font-semibold hover:bg-[#23533a]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
