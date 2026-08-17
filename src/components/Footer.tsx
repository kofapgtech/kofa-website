import React from 'react';
import { KofaLockup } from './KofaLogo';
import { NavScreen } from '../types';

interface FooterProps {
  variant?: 'warm' | 'green';
  onNavigate?: (screen: NavScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ variant = 'warm', onNavigate }) => {
  const isGreen = variant === 'green';

  const linkClass = isGreen
    ? 'text-left text-[#cee6d4] hover:text-white transition-colors'
    : 'text-left text-[#404942] hover:text-[#2c6748] transition-colors';

  return (
    <footer
      className={`w-full py-14 px-6 md:px-12 border-t ${
        isGreen
          ? 'bg-[#30593f] text-[#f4fbf6] border-[#295c41]'
          : 'bg-[#f6dfc3] text-[#251a08] border-[#edd7bb]'
      }`}
      id={isGreen ? 'footer-green' : 'footer-warm'}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          {/* On the warm footer the cream lockup needs a green plate to read */}
          {isGreen ? (
            <KofaLockup className="h-14 mb-5" />
          ) : (
            <span className="inline-block rounded-xl bg-[#30593f] px-4 py-3 mb-5">
              <KofaLockup className="h-12" />
            </span>
          )}

          <p className={`text-sm font-sans ${isGreen ? 'text-[#b5ccbb]' : 'text-[#404942]'}`}>
            © {new Date().getFullYear()} Kofa Policy Group. Based in Chicago.
          </p>
          <p className={`text-xs mt-3 font-medium ${isGreen ? 'text-[#97d4ae]' : 'text-[#526859]'}`}>
            Rooted in the Sankofa philosophy &amp; Seven Generation thinking.
          </p>
        </div>

        <div className="flex flex-col space-y-2.5 text-sm">
          <button onClick={() => onNavigate?.('about')} className={linkClass}>
            About
          </button>
          <button onClick={() => onNavigate?.('services')} className={linkClass}>
            Services
          </button>
          <button onClick={() => onNavigate?.('contact')} className={linkClass}>
            Contact
          </button>
        </div>

        <div className="flex flex-col space-y-2.5 text-sm">
          <a href="#privacy" className={linkClass}>
            Privacy Policy
          </a>
          <a href="#terms" className={linkClass}>
            Terms of Service
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
