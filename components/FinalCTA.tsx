import React from 'react';
import { ArrowDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      {/* Background glow for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Zamów prostą stronę, która działa
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Bez ukrytych kosztów i zbędnych formalności. Wypełnij formularz, a wrócimy z konkretami.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-200">
          <a 
            href="#kontakt" 
            className="inline-flex items-center px-10 py-5 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
          >
            Zamów prostą stronę
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;