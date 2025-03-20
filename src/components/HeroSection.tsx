
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (sectionRef.current) {
        // Parallax effect
        sectionRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 pt-20 md:pt-0">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center bg-sphinx-orange/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4 text-sphinx-orange mr-2" />
            <span className="text-white font-medium text-sm">Professionele Beveiliging</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-shadow">
            Uw veiligheid, onze prioriteit – <span className="text-sphinx-orange">Professionele beveiliging</span> op maat
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Sphinx Service beschermt bedrijven, evenementen en eigendommen in heel Nederland met 24/7 toezicht, geavanceerde technologie en ervaren professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="btn-primary flex items-center justify-center group"
            >
              Vraag een gratis beveiligingsadvies aan 
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#diensten" 
              className="px-6 py-3 border border-white/30 backdrop-blur-sm text-white rounded-md hover:bg-white/10 transition-all duration-300 text-center"
            >
              Ontdek onze diensten
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#diensten" className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll naar beneden</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
