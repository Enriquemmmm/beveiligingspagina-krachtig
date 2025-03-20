
import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-sphinx-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="font-bold text-2xl mb-6">
              <span className="text-white">Sphinx</span>
              <span className="text-sphinx-orange">Service</span>
            </h2>
            <p className="text-white/70 mb-6">
              Professionele beveiliging voor bedrijven, evenementen en particulieren. 24/7 toezicht, gecertificeerde professionals en snelle respons.
            </p>
            <div className="inline-flex items-center bg-sphinx-orange/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-sphinx-orange mr-2" />
              <span className="text-white/90 text-sm">Uw veiligheid, onze prioriteit</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              Diensten
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-sphinx-orange rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#diensten" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Evenementenbeveiliging
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Objectbeveiliging
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Personeel op maat
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Alarmopvolging
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Toegangscontrole
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              Over Ons
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-sphinx-orange rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#waarom-sphinx" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Waarom Sphinx?
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Klantbeoordelingen
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Certificeringen
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Vacatures
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-sphinx-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-sphinx-orange rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-sphinx-orange mr-3 mt-0.5" />
                <div>
                  <span className="block text-white/70 text-sm">Telefoon</span>
                  <a href="tel:+31123456789" className="text-white hover:text-sphinx-orange transition-colors">
                    +31 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-sphinx-orange mr-3 mt-0.5" />
                <div>
                  <span className="block text-white/70 text-sm">E-mail</span>
                  <a href="mailto:info@sphinxservice.nl" className="text-white hover:text-sphinx-orange transition-colors">
                    info@sphinxservice.nl
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sphinx-orange mr-3 mt-0.5" />
                <div>
                  <span className="block text-white/70 text-sm">Adres</span>
                  <address className="not-italic text-white">
                    Veiligheidsstraat 123<br />
                    1234 AB Amsterdam
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sphinx Service. Alle rechten voorbehouden.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-sphinx-orange transition-colors text-sm">
              Privacybeleid
            </a>
            <a href="#" className="text-white/50 hover:text-sphinx-orange transition-colors text-sm">
              Algemene voorwaarden
            </a>
            <a href="#" className="text-white/50 hover:text-sphinx-orange transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-sphinx-orange rounded-full flex items-center justify-center shadow-lg hover:bg-sphinx-orange/90 transition-colors z-40"
        aria-label="Scroll naar boven"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
