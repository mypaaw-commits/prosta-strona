import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        {/* Logo in Footer */}
        <div className="mb-6">
            <a href="#" className="inline-block group">
                <span className="text-2xl font-bold text-white tracking-tight">
                    prosta-<span className="text-blue-500">strona</span>.pl
                </span>
            </a>
        </div>

        <p className="text-slate-500 text-sm mb-4">
          &copy; 2026 prosta-strona.pl. Wszelkie prawa zastrzeżone.
        </p>
        <div id="polityka">
            <a href="#polityka-prywatnosci" className="text-slate-600 text-xs hover:text-blue-400 cursor-pointer transition-colors underline decoration-slate-800 hover:decoration-blue-400">
                Polityka Prywatności
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;