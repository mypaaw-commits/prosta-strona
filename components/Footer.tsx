import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm mb-4">
          &copy; 2026 prosta-strona.pl. Wszelkie prawa zastrzeżone.
        </p>
        <div id="polityka">
            <a href="#" className="text-slate-600 text-xs hover:text-blue-400 cursor-pointer transition-colors underline decoration-slate-800 hover:decoration-blue-400">
                Polityka Prywatności
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;