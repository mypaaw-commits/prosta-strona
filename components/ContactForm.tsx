import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { jsPDF } from 'jspdf';
import { Loader2, CheckCircle, AlertCircle, MailQuestion, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Jeszcze nie wiem',
    contentStatus: 'Częściowo',
    message: '',
    consent: false
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  // Funkcja usuwająca polskie znaki dla biblioteki jsPDF
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/Ł/g, "L");
  };

  const generatePDFBlob = (): Blob => {
    const doc = new jsPDF();
    
    // Konfiguracja PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Nowe Zapytanie - Prosta Strona", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Data: ${new Date().toLocaleString()}`, 20, 30);
    
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Dane kontaktowe:", 20, 50);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Imie i nazwisko: ${removeAccents(formData.name)}`, 20, 60);
    doc.text(`Email: ${formData.email}`, 20, 70);
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Szczegoly projektu:", 20, 90);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Typ strony: ${removeAccents(formData.type)}`, 20, 100);
    doc.text(`Status materialow: ${removeAccents(formData.contentStatus)}`, 20, 110);
    
    if (formData.message) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Wiadomosc od klienta:", 20, 130);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const splitText = doc.splitTextToSize(removeAccents(formData.message), 170);
      doc.text(splitText, 20, 140);
    }
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Wygenerowano automatycznie przez formularz prosta-strona.pl", 20, 280);

    return doc.output('blob');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
        // 1. Generujemy PDF
        const pdfBlob = generatePDFBlob();
        const safeName = removeAccents(formData.name).replace(/[^a-zA-Z0-9]/g, '_');
        const fileName = `zapytanie_${safeName}.pdf`;

        // 2. Tworzymy paczkę danych dla FormSubmit
        const submissionData = new FormData();
        
        // Konfiguracja FormSubmit
        const uniqueId = new Date().getTime().toString().slice(-4);
        const subjectName = removeAccents(formData.name); // Safe subject
        
        submissionData.append('_subject', `Nowe zapytanie: ${subjectName} #${uniqueId}`);
        submissionData.append('_template', 'table');
        submissionData.append('email', formData.email); // Reply-To address
        submissionData.append('_autoresponse', 'off'); // Disable auto-email to visitor
        
        // Explicitly handle honeypot (leave empty)
        submissionData.append('_honey', '');

        // Dane widoczne w treści maila
        submissionData.append('Klient', formData.name);
        submissionData.append('Email zwrotny', formData.email);
        submissionData.append('Typ strony', formData.type);
        submissionData.append('Status materiałów', formData.contentStatus);
        submissionData.append('Wiadomość', formData.message);

        // Załącznik PDF (trafi tylko do Ciebie)
        if (pdfBlob.size > 0) {
            submissionData.append('attachment', pdfBlob, fileName);
        }

        // 3. Wysyłamy do serwisu FormSubmit.co (Endpoint AJAX)
        const response = await fetch("https://formsubmit.co/ajax/mypaaw@gmail.com", {
            method: "POST",
            body: submissionData
        });

        const result = await response.json();
        console.log("Form status:", response.status);

        if (response.ok) {
            setStatus('success');
            
            // Usunięto kod pobierania PDF dla klienta

            // Reset formularza
            setFormData({
                name: '',
                email: '',
                type: 'Jeszcze nie wiem',
                contentStatus: 'Częściowo',
                message: '',
                consent: false
            });
        } else {
            console.error("Błąd wysyłania: ", result);
            throw new Error(result.message || "Błąd wysyłania");
        }
        
    } catch (error) {
        console.error("Critical submission error:", error);
        setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Skontaktuj się z nami
            </h2>
            <p className="text-lg text-slate-600">
                Wypełnij formularz poniżej. Wygenerujemy PDF z Twoim zapytaniem i prześlemy go do naszej wyceny.
            </p>
        </ScrollReveal>

        <ScrollReveal delay="delay-200">
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 relative">
            
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Formularz wysłany poprawnie!</h3>
                    <p className="text-slate-600 max-w-md mb-8">
                        Dziękujemy za kontakt. Odezwiemy się do Ciebie wkrótce z wyceną.
                    </p>
                    
                    <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl text-left max-w-lg shadow-sm">
                        <div className="flex items-start">
                             <MailQuestion className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                             <div>
                                 <h4 className="font-bold text-blue-900 mb-2 text-lg">Ważne: Pierwsza wysyłka</h4>
                                 <p className="text-sm text-blue-800 mb-3 leading-relaxed">
                                     Jeśli to Twoja pierwsza wiadomość przez ten system, sprawdź folder <strong>SPAM</strong>. System antyspamowy mógł (jednorazowo) zatrzymać wiadomość, którą wysłałeś do nas.
                                 </p>
                             </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-8 flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        Wyślij kolejne zapytanie <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                </div>
            ) : status === 'error' ? (
                 <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <AlertCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Błąd wysyłania</h3>
                    <p className="text-slate-600 max-w-md mb-6">
                        Nie udało się wysłać formularza. Może to być chwilowy problem z siecią.
                    </p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                        Spróbuj ponownie
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot for bots */}
                <input type="text" name="_honey" style={{display: 'none'}} />

                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Imię i nazwisko <span className="text-blue-600">*</span></label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 focus:bg-white"
                    placeholder="Jan Kowalski"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Adres e-mail <span className="text-blue-600">*</span></label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 focus:bg-white"
                    placeholder="jan@firma.pl"
                    />
                </div>

                {/* Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="type" className="block text-sm font-semibold text-slate-700 mb-2">Typ strony <span className="text-blue-600">*</span></label>
                        <div className="relative">
                            <select
                            id="type"
                            name="type"
                            required
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all appearance-none focus:bg-white cursor-pointer"
                            >
                            <option value="Landing page">Landing page</option>
                            <option value="Wizytówka WWW">Wizytówka WWW</option>
                            <option value="Prosta strona WWW">Prosta strona WWW</option>
                            <option value="Jeszcze nie wiem">Jeszcze nie wiem</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* Content Status */}
                    <div>
                        <label htmlFor="contentStatus" className="block text-sm font-semibold text-slate-700 mb-2">Treści i zdjęcia <span className="text-blue-600">*</span></label>
                        <div className="relative">
                            <select
                            id="contentStatus"
                            name="contentStatus"
                            required
                            value={formData.contentStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all appearance-none focus:bg-white cursor-pointer"
                            >
                            <option value="Tak">Tak, mam wszystko</option>
                            <option value="Częściowo">Częściowo</option>
                            <option value="Nie, potrzebuję pomocy">Nie, potrzebuję pomocy</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Wiadomość (opcjonalnie)</label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none placeholder:text-slate-400 focus:bg-white"
                    placeholder="Dodatkowe informacje..."
                    ></textarea>
                </div>

                {/* Consent */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={handleCheckbox}
                        className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-600"
                    />
                    </div>
                    <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-slate-600">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i obsługi zapytania, zgodnie z <a href="#polityka" className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-all">polityką prywatności</a>. <span className="text-blue-600">*</span>
                    </label>
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                    <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                    {status === 'sending' ? (
                        <>
                            <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                            Generowanie PDF i wysyłanie...
                        </>
                    ) : (
                        "Wyślij zapytanie"
                    )}
                    </button>
                    
                    {/* Microcopy */}
                    <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-500 font-medium">
                    <span className="flex items-center"><span className="text-green-500 mr-2">✔</span> jasna cena</span>
                    <span className="flex items-center"><span className="text-green-500 mr-2">✔</span> bez zobowiązań</span>
                    <span className="flex items-center"><span className="text-green-500 mr-2">✔</span> faktura VAT</span>
                    </div>
                </div>
                </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;