import React, { useState } from 'react';
import { KofaLogo } from './KofaLogo';
import { NavScreen } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
}

const navLinks: { label: string; screen: NavScreen }[] = [
  { label: 'About', screen: 'about' },
  { label: 'Services', screen: 'services' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const go = (screen: NavScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fff8f3]/95 backdrop-blur-md border-b border-[#edd7bb]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <KofaLogo size="md" onClick={() => go('home')} />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8" id="primary-navigation">
            {navLinks.map((link) => (
              <button
                key={link.screen}
                onClick={() => go(link.screen)}
                className={`text-[15px] transition-colors relative py-1 ${
                  currentScreen === link.screen
                    ? 'text-[#251a08] font-bold after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#251a08]'
                    : 'text-[#404942] font-medium hover:text-[#251a08]'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Contact is the primary call to action */}
            <button
              onClick={() => go('contact')}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-all ${
                currentScreen === 'contact'
                  ? 'bg-[#1f4b34] text-white'
                  : 'bg-[#2c6748] text-white hover:bg-[#388e5d]'
              }`}
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-[#251a08] hover:bg-[#ffebd2] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#edd7bb]/60 bg-[#fff8f3] px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.screen}
              onClick={() => go(link.screen)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-[15px] transition-colors ${
                currentScreen === link.screen
                  ? 'bg-[#ffebd2] text-[#251a08] font-bold'
                  : 'text-[#404942] font-medium hover:bg-[#ffebd2]/60'
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => go('contact')}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c6748] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#388e5d]"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
