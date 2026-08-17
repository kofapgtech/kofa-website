import React, { useState } from 'react';
import { KofaLogo } from './KofaLogo';
import { NavScreen } from '../types';
import { Menu, X, ArrowRight, Sparkles, Layers } from 'lucide-react';

interface NavbarProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenSchedule: () => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSchedule,
  onOpenWaitlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; screen: NavScreen; action?: () => void }[] = [
    { label: 'Transforming Communities', screen: 'home' },
    { label: 'Our Story', screen: 'story' },
    { label: 'Our Values', screen: 'values' },
    { label: 'Calculator', screen: 'calculator' },
    { label: 'Services', screen: 'services' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fff8f3]/95 backdrop-blur-md border-b border-[#edd7bb]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <KofaLogo
              size="md"
              onClick={() => onNavigate('home')}
            />

            {/* Quick Screen View Indicator pill */}
            <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-[#edd7bb]/60 text-xs text-[#526859]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2c6748] animate-pulse"></span>
              <span className="font-medium">Live Design System: Arboreal Modern</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" id="primary-navigation">
            <button
              id="nav-link-story"
              onClick={() => onNavigate('story')}
              className={`text-[15px] font-medium transition-colors relative py-1 ${
                currentScreen === 'story'
                  ? 'text-[#251a08] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#251a08]'
                  : 'text-[#404942] hover:text-[#251a08]'
              }`}
            >
              Our Story
            </button>

            <button
              id="nav-link-values"
              onClick={() => onNavigate('values')}
              className={`text-[15px] font-medium transition-colors relative py-1 ${
                currentScreen === 'values'
                  ? 'text-[#251a08] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#251a08]'
                  : 'text-[#404942] hover:text-[#251a08]'
              }`}
            >
              Our Values
            </button>

            <button
              id="nav-link-calculator"
              onClick={() => onNavigate('calculator')}
              className={`text-[15px] font-medium transition-colors relative py-1 ${
                currentScreen === 'calculator'
                  ? 'text-[#251a08] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#251a08]'
                  : 'text-[#404942] hover:text-[#251a08]'
              }`}
            >
              Calculator
            </button>

            <button
              id="nav-link-services"
              onClick={() => onNavigate('services')}
              className={`text-[15px] font-medium transition-colors relative py-1 ${
                currentScreen === 'services' || currentScreen === 'home'
                  ? 'text-[#251a08] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#251a08]'
                  : 'text-[#404942] hover:text-[#251a08]'
              }`}
            >
              Services
            </button>

            <button
              id="nav-link-waitlist"
              onClick={onOpenWaitlist}
              className="text-[15px] font-medium text-[#404942] hover:text-[#251a08] transition-colors py-1"
            >
              Waitlist
            </button>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* View Mode Toggle Button */}
            <button
              onClick={() => onNavigate(currentScreen === 'all' ? 'home' : 'all')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#fff1e3] text-[#2c6748] border border-[#edd7bb] hover:bg-[#ffebd2] transition-colors"
              title="Toggle Multi-Screen View"
            >
              <Layers className="w-3.5 h-3.5" />
              {currentScreen === 'all' ? 'Single Screen Mode' : 'View All Screens'}
            </button>

            {/* Primary Action Button */}
            <button
              id="cta-schedule-call"
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#2c6748] text-white hover:bg-[#23533a] active:scale-[0.98] transition-all shadow-sm"
            >
              Schedule Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onNavigate(currentScreen === 'all' ? 'home' : 'all')}
              className="p-2 rounded-lg text-[#2c6748] bg-[#fff1e3]"
              title="Toggle View"
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#251a08] hover:bg-[#ffebd2] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#edd7bb] bg-[#fff8f3] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.screen}
              onClick={() => {
                onNavigate(link.screen);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                currentScreen === link.screen
                  ? 'bg-[#2c6748] text-white font-semibold'
                  : 'text-[#251a08] hover:bg-[#ffebd2]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenWaitlist();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#251a08] hover:bg-[#ffebd2]"
          >
            Waitlist
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenSchedule();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold bg-[#2c6748] text-white"
            >
              Schedule Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
