import React from 'react';
import { PricingTier } from '../types';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const tiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: "499 zł",
    features: [
      "1 długa strona (One Page)",
      "Sekcje: Hero, Korzyści, Opinie, Kontakt",
      "Formularz kontaktowy",
      "Pełna responsywność (RWD)",
      "Certyfikat SSL",
      "Optymalizacja pod Google",
      "Dedykowany projekt graficzny"
    ]
  },
  {
    name: "Wizytówka WWW",
    price: "899 zł",
    features: [
      "Strona główna z nawigacją scroll",
      "Rozbudowana sekcja O firmie",
      "Prezentacja oferty i cennika",
      "Galeria realizacji",
      "Mapka dojazdu i kontakt",
      "Podpięcie domeny i hostingu",
      "Szybki czas realizacji (3-5 dni)"
    ]
  },
  {
    name: "Strona Firmowa",
    price: "1 299 zł",
    features: [
      "Do 5 podstron",
      "Osobne zakładki (Oferta, Kontakt, O nas)",
      "Możliwość prowadzenia Bloga / Aktualności",
      "System CMS (edycja treści)",
      "Zaawansowany formularz",
      "Integracja z Social Media",
      "Szkolenie z obsługi"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="cennik" className="py-24 bg-slate-950 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proste zasady. Jasny cennik.
          </h2>
          <p className="text-xl text-slate-400">
            Płatność jednorazowa. Żadnych abonamentów za "utrzymanie strony". <br/>
            Strona staje się Twoją własnością.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <ScrollReveal key={index} delay={`delay-${(index + 1) * 100}`} className="h-full">
              <div 
                className={`flex flex-col p-8 rounded-3xl transition-all duration-300 relative overflow-hidden group h-full hover:scale-105
                  ${index === 1 
                    ? 'bg-slate-900 border-2 border-blue-500/50 shadow-2xl shadow-blue-900/20 md:scale-105 md:hover:scale-110 z-10 mt-0 md:-mt-4' 
                    : 'glass-panel border-white/5 hover:border-white/10'}`}
              >
                {index === 1 && (
                  <>
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                    <div className="absolute top-0 inset-x-0 flex justify-center">
                       <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-b-lg shadow-lg tracking-wide uppercase">
                         Najczęstszy wybór
                       </span>
                    </div>
                  </>
                )}

                <div className={`mb-6 ${index === 1 ? 'mt-4' : ''}`}>
                  <h3 className={`text-xl font-bold mb-2 ${index === 1 ? 'text-blue-400' : 'text-white'}`}>{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-slate-300">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${index === 1 ? 'text-blue-500' : 'text-slate-600'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#kontakt"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all 
                    ${index === 1 
                      ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/40' 
                      : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                  Wybieram ten pakiet
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay="delay-500" className="mt-12 text-center">
            <p className="text-sm text-slate-300">
                U nas nie ma gwiazdek. Jeśli zakres się zmienia, cenę ustalamy z góry przed startem prac.
            </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;