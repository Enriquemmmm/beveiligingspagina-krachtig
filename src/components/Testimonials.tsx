
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  role: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Sphinx regelde binnen 2 uur extra beveiliging tijdens ons festival – professioneel en betrouwbaar!",
      name: "Marieke de Vries",
      company: "Zomerfestival Amsterdam",
      role: "Eventmanager"
    },
    {
      id: 2,
      quote: "De beveiligers van Sphinx Service zorgen voor een veilig gevoel bij onze medewerkers en klanten. Uiterst professioneel en altijd alert.",
      name: "Johan Bakker",
      company: "Bakker & Zonen BV",
      role: "Directeur"
    },
    {
      id: 3,
      quote: "Al jaren werken wij samen met Sphinx voor de beveiliging van onze kantoorpanden. Hun flexibiliteit en klantvriendelijkheid is voorbeeldig.",
      name: "Laura Jansen",
      company: "Tech Innovations",
      role: "Facility Manager"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-sphinx-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block bg-sphinx-orange/10 text-sphinx-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            Wat Klanten Zeggen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vertrouwd door toonaangevende bedrijven
          </h2>
          <p className="text-sphinx-darkGray text-lg">
            Ontdek waarom bedrijven en organisaties in heel Nederland kiezen voor Sphinx Service als hun beveiligingspartner.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative glass-card p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-sphinx-orange/20" />
            
            <div className="transition-all duration-500 fade-in-section">
              <p className="text-xl md:text-2xl text-sphinx-black mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sphinx-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-sphinx-orange">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sphinx-black">{testimonials[activeIndex].name}</h4>
                  <p className="text-sphinx-darkGray">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-sphinx-orange" : "bg-gray-300 hover:bg-sphinx-orange/50"
                )}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-sphinx-orange/10 transition-colors"
              aria-label="Vorige testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-sphinx-darkGray" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-sphinx-orange/10 transition-colors"
              aria-label="Volgende testimonial"
            >
              <ChevronRight className="h-6 w-6 text-sphinx-darkGray" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 fade-in-section">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-sphinx-black mb-2">Vertrouwd door</h3>
            <p className="text-sphinx-darkGray">Enkele van onze gewaardeerde klanten</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Client logos would go here - using placeholders */}
            <div className="w-32 h-16 bg-white rounded-md shadow-sm flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sphinx-darkGray font-semibold">Bedrijf A</span>
            </div>
            <div className="w-32 h-16 bg-white rounded-md shadow-sm flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sphinx-darkGray font-semibold">Bedrijf B</span>
            </div>
            <div className="w-32 h-16 bg-white rounded-md shadow-sm flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sphinx-darkGray font-semibold">Bedrijf C</span>
            </div>
            <div className="w-32 h-16 bg-white rounded-md shadow-sm flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sphinx-darkGray font-semibold">Bedrijf D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
