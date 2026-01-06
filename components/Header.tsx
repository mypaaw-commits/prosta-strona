import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rozwiązania', href: '#rozwiazania' },
    { name: 'Dlaczego warto', href: '#dlaczego-warto' },
    { name: 'Cennik', href: '#cennik' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 relative flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50 flex-shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-105 transition-transform duration-200">
             <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Twoje Logo</span>
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <a 
            href="#kontakt" 
            className="hidden md:inline-flex px-6 py-2.5 text-sm font-semibold text-slate-950 bg-white rounded-full hover:bg-slate-200 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Zamów wycenę
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-200 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-900/50"
          >
            Zamów stronę
          </a>
      </div>
    </header>
  );
};

export default Header;