import React, { useState } from 'react';
import { KofaLogo } from './KofaLogo';
import { NavScreen } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
}

const navLinks: { label: string; screen: NavScreen }[] = [
  { label: 'Our Story', screen: 'about' },
  { label: 'Services', screen: 'services' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const go = (screen: NavScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#30593f] border-b border-[#1f4b34]">
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
                    ? 'text-white font-bold after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                    : 'text-[#cee6d4] font-medium hover:text-white'
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
                  ? 'bg-[#f5f2ed] text-[#1f4b34] ring-2 ring-white/70'
                  : 'bg-white text-[#2c6748] hover:bg-[#f5f2ed]'
              }`}
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/15 bg-[#30593f] px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.screen}
              onClick={() => go(link.screen)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-[15px] transition-colors ${
                currentScreen === link.screen
                  ? 'bg-white/15 text-white font-bold'
                  : 'text-[#cee6d4] font-medium hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => go('contact')}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#2c6748] transition-colors hover:bg-[#f5f2ed]"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
