import React from 'react';
import ScrollReveal from './ScrollReveal';

const Extras: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Usługi dodatkowe (opcjonalnie)
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Item 1 */}
          <ScrollReveal delay="delay-0">
            <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 text-lg">Opieka techniczna i hosting strony</h3>
                <span className="font-semibold text-blue-600 text-right text-sm md:text-base whitespace-nowrap ml-4">99 zł / 6 mies.</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Bezpieczne aktualizacje, kopie zapasowe, serwer.</p>
              <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">pierwsze 6 miesięcy gratis</span>
            </div>
          </ScrollReveal>

          {/* Item 2 */}
          <ScrollReveal delay="delay-100">
            <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
               <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 text-lg">Tworzenie treści i materiałów</h3>
                <span className="font-semibold text-blue-600 text-right text-sm md:text-base whitespace-nowrap ml-4">99 - 199 zł</span>
              </div>
              <p className="text-slate-600 text-sm">
                Proste treści marketingowe ("o nas", opisy usług) oraz dobór profesjonalnych zdjęć stockowych. Cena zależna od ilości pracy.
              </p>
            </div>
          </ScrollReveal>

          {/* Item 3 */}
          <ScrollReveal delay="delay-200">
            <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 text-lg mb-1 md:mb-0">Tworzenie treści i publikacja na blogu</h3>
                <div className="text-right">
                  <span className="block font-semibold text-blue-600 text-sm whitespace-nowrap">4 wpisy 120 zł / mies.</span>
                  <span className="block font-semibold text-blue-600 text-sm whitespace-nowrap">8 wpisów 240 zł / mies.</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-2 italic border-t border-slate-100 pt-2">
                Usługa nie obejmuje moderacji komentarzy ani odpowiadania na nie.
              </p>
            </div>
          </ScrollReveal>

          {/* Item 4 */}
          <ScrollReveal delay="delay-300">
            <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
               <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-slate-900 text-lg">Dodatkowa podstrona</h3>
                <span className="font-semibold text-blue-600 text-right whitespace-nowrap ml-4">99 zł / szt.</span>
              </div>
               <p className="text-slate-600 text-sm">
                Jeśli potrzebujesz więcej niż standardowy pakiet przewiduje.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay="delay-400" className="text-center text-slate-500">
          Strona działa poprawnie również bez usług dodatkowych.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Extras;