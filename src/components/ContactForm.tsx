
import React, { useState } from 'react';
import { Send, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Aanvraag verstuurd",
        description: "Wij nemen zo spoedig mogelijk contact met u op.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <span className="inline-block bg-sphinx-orange/10 text-sphinx-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vraag een gratis beveiligingsadvies aan
            </h2>
            <p className="text-sphinx-darkGray text-lg mb-8">
              Onze beveiligingsexperts staan klaar om u te helpen met een gepersonaliseerd advies dat aansluit bij uw specifieke situatie en budget.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-sphinx-orange/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sphinx-black mb-1">Telefoon</h3>
                  <a href="tel:+31123456789" className="text-sphinx-darkGray hover:text-sphinx-orange transition-colors">
                    +31 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-sphinx-orange/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sphinx-black mb-1">E-mail</h3>
                  <a href="mailto:info@sphinxservice.nl" className="text-sphinx-darkGray hover:text-sphinx-orange transition-colors">
                    info@sphinxservice.nl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-sphinx-orange/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sphinx-black mb-1">Adres</h3>
                  <p className="text-sphinx-darkGray">
                    Veiligheidsstraat 123<br />
                    1234 AB Amsterdam
                  </p>
                </div>
              </div>
            </div>
            
            <div className="inline-flex items-center bg-sphinx-orange/10 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-sphinx-orange mr-2" />
              <span className="text-sphinx-darkGray text-sm">Directe spoedlijn: <a href="tel:+31123456789" className="font-bold text-sphinx-orange">+31 123 456 789</a></span>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 shadow-xl fade-in-section">
            <h3 className="text-2xl font-bold mb-6 text-sphinx-black">
              Stuur ons een bericht
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sphinx-darkGray mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50 focus:border-sphinx-orange/50"
                    placeholder="Uw naam"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sphinx-darkGray mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50 focus:border-sphinx-orange/50"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sphinx-darkGray mb-1">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50 focus:border-sphinx-orange/50"
                    placeholder="+31 6 12345678"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-sphinx-darkGray mb-1">
                    Dienst
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50 focus:border-sphinx-orange/50"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="evenementenbeveiliging">Evenementenbeveiliging</option>
                    <option value="objectbeveiliging">Objectbeveiliging</option>
                    <option value="personeel">Personeel op maat</option>
                    <option value="alarmopvolging">Alarmopvolging</option>
                    <option value="toegangscontrole">Toegangscontrole</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sphinx-darkGray mb-1">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50 focus:border-sphinx-orange/50"
                  placeholder="Vertel ons over uw beveiligingswensen..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verzenden...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Verstuur aanvraag
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
