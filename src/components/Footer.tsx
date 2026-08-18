import React from 'react';
import { KofaLockup } from './KofaLogo';
import { NavScreen } from '../types';

interface FooterProps {
  onNavigate?: (screen: NavScreen) => void;
}

const linkClass = 'text-left text-[#cee6d4] hover:text-white transition-colors';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer
    className="w-full bg-[#30593f] text-[#f4fbf6] border-t border-[#1f4b34] py-14 px-6 md:px-12"
    id="site-footer"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <KofaLockup className="h-14 mb-5" />
        <p className="text-sm font-sans text-[#b5ccbb]">
          © {new Date().getFullYear()} Kofa Policy Group. Based in Chicago.
        </p>
      </div>

      <div className="flex flex-col space-y-2.5 text-sm">
        <button onClick={() => onNavigate?.('about')} className={linkClass}>
          Our Story
        </button>
        <button onClick={() => onNavigate?.('services')} className={linkClass}>
          Services
        </button>
        <button onClick={() => onNavigate?.('contact')} className={linkClass}>
          Contact
        </button>
      </div>

      <div className="flex flex-col space-y-2.5 text-sm">
        <button onClick={() => onNavigate?.('privacy')} className={linkClass}>
          Privacy Policy
        </button>
        <button onClick={() => onNavigate?.('terms')} className={linkClass}>
          Terms of Service
        </button>
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
