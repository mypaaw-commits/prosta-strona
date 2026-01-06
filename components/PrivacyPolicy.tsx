import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-slate-300">
        <ScrollReveal>
          <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </a>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">Polityka Prywatności</h1>
          
          <div className="space-y-10 leading-relaxed text-slate-400">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Postanowienia ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego prosta-strona.pl.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Administrator Danych</h2>
              <p>
                Administratorem danych osobowych zawartych w serwisie jest właściciel serwisu prosta-strona.pl. Kontakt w sprawie ochrony danych osobowych jest możliwy za pośrednictwem formularza kontaktowego dostępnego na stronie.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. Cel i zakres zbierania danych</h2>
              <p className="mb-4">
                Dane osobowe Użytkowników są przetwarzane w celu:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy.</li>
                <li>Przedstawienia oferty handlowej w odpowiedzi na zapytanie Użytkownika.</li>
                <li>Realizacji zamówionych usług (tworzenie stron www).</li>
              </ul>
              <p className="mt-4">
                Podanie danych jest dobrowolne, jednakże niezbędne do przesłania zapytania i nawiązania kontaktu.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. Pliki Cookies</h2>
              <p>
                Strona internetowa wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia poprawnego działania serwisu, dostosowania go do preferencji użytkownika oraz w celach statystycznych. Użytkownik ma możliwość ograniczenia lub wyłączenia dostępu plików cookies do swojego urządzenia w ustawieniach przeglądarki internetowej.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. Bezpieczeństwo danych</h2>
              <p>
                Administrator dokłada wszelkich starań, aby zapewnić wszelkie środki fizycznej, technicznej i organizacyjnej ochrony danych osobowych przed ich przypadkowym czy umyślnym zniszczeniem, przypadkową utratą, zmianą, nieuprawnionym ujawnieniem, wykorzystaniem czy dostępem, zgodnie ze wszystkimi obowiązującymi przepisami.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Prawa Użytkownika</h2>
              <p>
                Użytkownikowi przysługuje prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie.
              </p>
            </div>
            
            <div className="pt-8 border-t border-slate-800">
               <p className="text-sm text-slate-500">Ostatnia aktualizacja: 21.05.2025</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PrivacyPolicy;