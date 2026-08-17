import React from 'react';
import { NavScreen } from '../types';

interface FooterProps {
  variant?: 'warm' | 'dark' | 'green';
  onNavigate?: (screen: NavScreen) => void;
  onOpenWaitlist?: () => void;
  onOpenSchedule?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'warm',
  onNavigate,
  onOpenWaitlist,
  onOpenSchedule,
}) => {
  if (variant === 'green') {
    return (
      <footer className="w-full bg-[#1b432e] text-[#f4fbf6] py-14 px-6 md:px-12 border-t border-[#295c41]" id="footer-green">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">Kofa Policy Group</h3>
            <p className="text-sm text-[#b5ccbb] font-sans">
              © {new Date().getFullYear()} Kofa Policy Group. Based in Chicago.
            </p>
            <p className="text-xs text-[#97d4ae] mt-3 font-medium">
              Rooted in the Sankofa philosophy & Seven Generation thinking.
            </p>
          </div>

          <div className="flex flex-col space-y-2.5 text-sm">
            <button
              onClick={() => onNavigate?.('story')}
              className="text-left text-[#cee6d4] hover:text-white transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => onNavigate?.('calculator')}
              className="text-left text-[#cee6d4] hover:text-white transition-colors"
            >
              Calculator
            </button>
            <button
              onClick={() => onNavigate?.('services')}
              className="text-left text-[#cee6d4] hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={onOpenWaitlist}
              className="text-left text-[#cee6d4] hover:text-white transition-colors"
            >
              Waitlist
            </button>
          </div>

          <div className="flex flex-col space-y-2.5 text-sm">
            <a href="#privacy" className="text-[#cee6d4] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#cee6d4] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#cee6d4] hover:text-white transition-colors">
              LinkedIn
            </a>
            <button onClick={onOpenSchedule} className="text-left text-[#cee6d4] hover:text-white transition-colors">
              Contact & Intake
            </button>
          </div>
        </div>
      </footer>
    );
  }

  // Warm theme (default / Image 5 & 9)
  return (
    <footer className="w-full bg-[#f6dfc3] text-[#251a08] py-14 px-6 md:px-12 border-t border-[#edd7bb]" id="footer-warm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-3xl font-extrabold font-display text-[#2c6748] mb-2">Kofa</h3>
          <p className="text-sm text-[#404942] max-w-sm">
            © {new Date().getFullYear()} Kofa Policy Group. All rights reserved.
          </p>
          <p className="text-xs text-[#526859] mt-1 font-medium">
            Social Impact & Restorative Policy Consultancy
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-14 text-sm font-medium text-[#404942]">
          <div className="flex flex-col space-y-2">
            <a href="#privacy" className="hover:text-[#2c6748] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#2c6748] transition-colors">
              Terms of Service
            </a>
            <button
              onClick={() => onNavigate?.('calculator')}
              className="text-left hover:text-[#2c6748] transition-colors"
            >
              Impact Calculator
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2c6748] transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={onOpenSchedule}
              className="text-left hover:text-[#2c6748] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onOpenWaitlist}
              className="text-left hover:text-[#2c6748] transition-colors"
            >
              Waitlist
            </button>
          </div>

          <div className="self-end md:self-center text-sm font-serif italic text-[#526859] tracking-wide">
            Stewardship. Clarity. Humanity.
          </div>
        </div>
      </div>
    </footer>
  );
};
