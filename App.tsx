import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Comparison />
        <Features />
        <Pricing />
        <Extras />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;