import React from 'react';
import { Target, PanelTop, Monitor, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Solutions: React.FC = () => {
  return (
    <section id="rozwiazania" className="py-24 bg-slate-50 scroll-mt-24 relative overflow-hidden">
      {/* Background Pattern - Subtle Dots */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>
      
      {/* Soft Gradient Overlay at bottom to blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Landing page, wizytówka WWW czy prosta strona firmowa – co wybrać?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nie każda firma potrzebuje rozbudowanej strony internetowej. Wybór zależy od celu strony i zakresu Twojej oferty.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <ScrollReveal delay="delay-100" className="h-full">
            <div className="group h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Target className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Landing page</h3>
              <p className="text-slate-600 leading-relaxed">
                Jedna strona, jeden konkretny cel sprzedażowy.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay="delay-200" className="h-full">
            <div className="group h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <PanelTop className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Wizytówka WWW</h3>
              <p className="text-slate-600 leading-relaxed">
                Krótka, profesjonalna prezentacja Twojej firmy.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay="delay-300" className="h-full">
            <div className="group h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Monitor className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Prosta strona WWW</h3>
              <p className="text-slate-600 leading-relaxed">
                Pełna oferta przedstawiona w uporządkowanej formie.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Blue Box */}
        <ScrollReveal delay="delay-400">
            <div className="w-full bg-white border border-blue-200 shadow-lg shadow-blue-100 rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
                        ZASADA PRZEJRZYSTOŚCI
                    </span>
                    <p className="text-slate-900 text-lg md:text-xl font-medium mb-6">
                        Cena u nas zależy od struktury strony, a nie od nazw zakładek.
                    </p>
                    <a href="#cennik" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group">
                        Zobacz ofertę stron WWW 
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Solutions;