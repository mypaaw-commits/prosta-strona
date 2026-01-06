import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Extras from './components/Extras';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#polityka-prywatnosci') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else {
        setView('home');
        // Handle scrolling to sections if hash exists and isn't just #
        if (hash && hash !== '#') {
           setTimeout(() => {
             const element = document.getElementById(hash.substring(1));
             if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
        }
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash on load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-sans bg-slate-950">
      <Header />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <Solutions />
            <Comparison />
            <Features />
            <Pricing />
            <Extras />
            <FAQ />
            <ContactForm />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;