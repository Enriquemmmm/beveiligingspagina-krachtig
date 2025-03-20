
import React, { useEffect, useRef } from 'react';
import { Shield, Users, CalendarClock, Building, Lock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className="service-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 bg-sphinx-orange/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-sphinx-black">{title}</h3>
      <p className="text-sphinx-darkGray">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="diensten" className="section-padding bg-sphinx-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block bg-sphinx-orange/10 text-sphinx-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professionele beveiligingsoplossingen op maat
          </h2>
          <p className="text-sphinx-darkGray text-lg">
            Bij Sphinx Service bieden wij een compleet pakket aan beveiligingsdiensten om optimale veiligheid te garanderen voor uw bedrijf, evenement of eigendom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<CalendarClock className="h-7 w-7 text-sphinx-orange" />}
            title="Evenementenbeveiliging"
            description="Laat uw gasten zorgeloos genieten met ons discreet toezicht. Van kleine bijeenkomsten tot grote festivals, wij zorgen voor een veilige omgeving."
            delay={0.1}
          />
          
          <ServiceCard 
            icon={<Building className="h-7 w-7 text-sphinx-orange" />}
            title="Objectbeveiliging"
            description="24/7 bescherming van uw bedrijfspand, bouwterrein of andere eigendommen tegen diefstal, vandalisme en andere bedreigingen."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={<Users className="h-7 w-7 text-sphinx-orange" />}
            title="Personeel op maat"
            description="Flexibele inzet van gecertificeerde beveiligingsmedewerkers voor tijdelijke of permanente ondersteuning van uw eigen beveiligingsteam."
            delay={0.3}
          />
          
          <ServiceCard 
            icon={<Shield className="h-7 w-7 text-sphinx-orange" />}
            title="Alarmopvolging"
            description="Snelle respons bij alarmmeldingen met directe inzet van professionele beveiligers om situaties te beoordelen en passend te handelen."
            delay={0.4}
          />
          
          <ServiceCard 
            icon={<Lock className="h-7 w-7 text-sphinx-orange" />}
            title="Toegangscontrole"
            description="Professionele toegangsbeheersing voor uw locatie met moderne identificatiesystemen en getraind personeel."
            delay={0.5}
          />
          
          <div className="service-card bg-sphinx-orange text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-3">Oplossing op maat nodig?</h3>
            <p className="mb-6">Onze beveiligingsexpertise gaat verder dan standaard oplossingen. Neem contact op voor een persoonlijk advies.</p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-sphinx-orange px-5 py-2 rounded-md font-medium hover:shadow-md transition-all duration-300"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
