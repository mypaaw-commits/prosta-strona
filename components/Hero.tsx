import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 bg-slate-950 overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-600 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="max-w-4xl mx-auto z-10 space-y-8 relative">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-4 animate-fade-in-up">
          Nowoczesne strony www
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] animate-fade-in-up">
          Prosta strona www,<br /> która działa. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Bez kombinowania.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
          Projektujemy nowoczesne, lekkie i skuteczne strony internetowe dla firm. 
          Jasna cena, faktura VAT i brak ukrytych kosztów.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-400">
          <a 
            href="#cennik" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
          >
            Sprawdź cennik
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#rozwiazania" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            Zobacz ofertę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;