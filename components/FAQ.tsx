import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';
import ScrollReveal from './ScrollReveal';

const faqData: FAQItem[] = [
  {
    question: "Czy muszę mieć gotowe treści i zdjęcia?",
    answer: "Nie musisz mieć ich 'na już', ale strona powstanie szybciej, jeśli je dostarczysz. Możemy pracować na materiałach tymczasowych lub — jako usługa dodatkowa — stworzyć je za Ciebie."
  },
  {
    question: "Czy SEO jest w cenie strony?",
    answer: "Podstawowa optymalizacja techniczna tak (tytuły, meta opisy, szybkość). Zaawansowane pozycjonowanie, pisanie bloga i link building to osobne usługi, którymi się nie zajmujemy w ramach tego pakietu."
  },
  {
    question: "Czy strona działa na telefonie?",
    answer: "Tak, każda strona jest w pełni responsywna (RWD) i dostosowuje się do ekranów smartfonów, tabletów oraz komputerów."
  },
  {
    question: "Ile trwa realizacja?",
    answer: "Zazwyczaj od 3 do 7 dni roboczych od momentu dostarczenia kompletu materiałów (lub ustaleń co do treści)."
  },
  {
    question: "Czy muszę wykupić opiekę techniczną?",
    answer: "Nie, to usługa opcjonalna. Możesz samodzielnie dbać o aktualizacje i hosting, ale pamiętaj, że wymaga to podstawowej wiedzy technicznej."
  },
  {
    question: "Czy pomagacie w zakupie domeny?",
    answer: "Tak. Podpowiemy gdzie i jak bezpiecznie kupić domenę oraz serwer, tak aby wszystkie dostępy i własność należały formalnie w 100% do Ciebie."
  },
  {
    question: "Jak wygląda proces płatności?",
    answer: "Standardowo pobieramy zadatek przed rozpoczęciem prac, a pozostałą kwotę rozliczamy dopiero po Twojej akceptacji gotowej strony."
  },
  {
    question: "Czy wystawiacie fakturę VAT?",
    answer: "Rozliczenia realizowane są przez Useme, a klient otrzymuje fakturę VAT."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Najczęściej zadawane pytania
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <ScrollReveal key={index} delay={`delay-${Math.min(index * 100, 500)}`}>
              <details className="group bg-slate-950 rounded-lg border border-white/5 shadow-sm open:border-blue-500/30">
                <summary className="flex cursor-pointer items-center justify-between p-6 list-none font-medium text-slate-200 hover:text-blue-400 transition-colors">
                  <span>{item.question}</span>
                  <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-slate-500 group-open:text-blue-400">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-transparent group-open:border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="pt-4">{item.answer}</div>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;