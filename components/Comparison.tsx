import React from 'react';
import { Check, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Comparison: React.FC = () => {
  return (
    <section id="dlaczego-warto" className="py-24 bg-slate-950 scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
            FILOZOFIA PROSTA-STRONA.PL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Dlaczego strona ma działać,<br className="hidden md:block"/> a nie tylko wyglądać
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Niezależnie od wybranego pakietu, każda nasza realizacja musi spełniać swoją rolę biznesową.
          </p>
        </ScrollReveal>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-900/30 -translate-x-1/2"></div>

          {/* Left Column: Errors */}
          <ScrollReveal delay="delay-100" animation="slide-in-left">
            <div className="md:pr-12">
              <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-8">
                Najczęstsze błędy stron WWW:
              </h3>
              <div className="space-y-8">
                {[
                  "Brak jasnej oferty widocznej „nad linią zanurzenia”.",
                  "Nadmiar treści, który przytłacza i nudzi klienta.",
                  "Utrudniony kontakt – klient musi szukać telefonu.",
                  "Wolne ładowanie – klient ucieka, zanim strona się wczyta.",
                  "Brak wersji mobilnej – strona nieczytelna na smartfonie."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900/10 border border-red-500/20 flex items-center justify-center mr-4 mt-0.5">
                        <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-slate-400 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Standards */}
          <ScrollReveal delay="delay-300" animation="slide-in-right">
            <div className="md:pl-12">
               <h3 className="text-xl md:text-2xl font-bold text-blue-500 mb-8">
                Standardy skutecznej strony:
              </h3>
              <div className="space-y-8">
                {[
                  "Jasny przekaz: co oferujesz i jak to kupić.",
                  "Intuicyjna nawigacja, która prowadzi za rękę.",
                  "Błyskawiczny dostęp do formularza i numeru tel.",
                  "Optymalizacja techniczna zapewniająca szybkie wczytywanie.",
                  "Perfekcyjny wygląd na telefonach, tabletach i komputerach."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/20 border border-blue-500/40 flex items-center justify-center mr-4 mt-0.5">
                        <Check className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-slate-200 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Comparison;