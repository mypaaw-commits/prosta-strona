import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const featuresList = [
  {
    title: "Indywidualny układ",
    description: "Brak gotowców, pełne dopasowanie."
  },
  {
    title: "Responsywność",
    description: "Działa idealnie na każdym ekranie."
  },
  {
    title: "Struktura treści",
    description: "Logiczny układ ułatwiający czytanie."
  },
  {
    title: "Kontakt i formularz",
    description: "Szybka ścieżka zapytania od klienta."
  },
  {
    title: "Szybkość ładowania",
    description: "Optymalizacja pod kątem wydajności."
  },
  {
    title: "Przygotowanie Google",
    description: "Podstawowe SEO techniczne w cenie."
  },
  {
    title: "Instalacja na serwerze",
    description: "Wdrożenie gotowej strony do sieci."
  },
  {
    title: "Bezpieczeństwo SSL",
    description: "Konfiguracja bezpiecznego połączenia."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-indigo-50 rounded-full blur-[60px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              W cenie strony otrzymujesz wszystko, co niezbędne.
            </h2>
            <p className="text-lg text-slate-600">
              Nie bawimy się w ukryte opłaty. W pakiecie startowym dostajesz solidny fundament pod swój biznes w sieci.
            </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featuresList.map((item, idx) => (
            <ScrollReveal key={idx} delay={`delay-${(idx % 4) * 100}`}>
              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                   </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="delay-500" className="mt-16 text-center">
          <span className="inline-block px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium italic relative z-10">
            To są nasze standardy, nie płatne dodatki.
          </span>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Features;