
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  // Set up meta tags for SEO
  useEffect(() => {
    document.title = "Sphinx Service | Betrouwbare Beveiliging & Personeelsdiensten | Nederland";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professionele beveiliging voor bedrijven, evenementen en particulieren. 24/7 toezicht, gecertificeerde professionals en snelle respons. Vraag nu advies aan!");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Professionele beveiliging voor bedrijven, evenementen en particulieren. 24/7 toezicht, gecertificeerde professionals en snelle respons. Vraag nu advies aan!";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Initialize fade-in animations on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1
    });
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
