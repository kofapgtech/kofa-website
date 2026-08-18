import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TransformingCommunitiesView } from './components/TransformingCommunitiesView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { PrivacyPolicyView, TermsOfServiceView } from './components/LegalView';
import { NavScreen } from './types';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('home');

  // Scroll to top on screen switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const navigate = (screen: NavScreen) => setCurrentScreen(screen);
  const goToContact = () => setCurrentScreen('contact');

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f3] text-[#251a08] selection:bg-[#cee6d4] selection:text-[#135134]">
      <Navbar currentScreen={currentScreen} onNavigate={navigate} />

      <main className="flex-1 flex flex-col w-full">
        {currentScreen === 'home' && (
          <TransformingCommunitiesView onNavigate={navigate} onOpenSchedule={goToContact} />
        )}

        {currentScreen === 'about' && (
          <AboutView onNavigate={navigate} onOpenSchedule={goToContact} />
        )}

        {currentScreen === 'services' && (
          <ServicesView onNavigate={navigate} onOpenSchedule={goToContact} />
        )}

        {currentScreen === 'contact' && <ContactView />}

        {currentScreen === 'privacy' && <PrivacyPolicyView />}

        {currentScreen === 'terms' && <TermsOfServiceView />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
