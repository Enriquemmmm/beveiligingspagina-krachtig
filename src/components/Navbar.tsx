
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl transition-all">
          <span className="text-sphinx-black">Sphinx</span>
          <span className="text-sphinx-orange">Service</span>
        </a>
        
        {/* Emergency Contact */}
        <div className="hidden md:flex items-center bg-sphinx-orange/10 px-4 py-2 rounded-full">
          <Phone className="h-4 w-4 text-sphinx-orange mr-2" />
          <span className="text-sm font-medium">Spoed? Bel direct: <a href="tel:+31123456789" className="text-sphinx-orange font-bold hover:underline">+31 123 456 789</a></span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#diensten" className="text-sphinx-black hover:text-sphinx-orange transition-colors">Diensten</a>
          <a href="#waarom-sphinx" className="text-sphinx-black hover:text-sphinx-orange transition-colors">Waarom Sphinx?</a>
          <a href="#testimonials" className="text-sphinx-black hover:text-sphinx-orange transition-colors">Referenties</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-sphinx-black focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[60px] right-0 h-screen w-full bg-white/95 backdrop-blur-md transition-transform duration-300 transform md:hidden z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 p-8">
          <a 
            href="#diensten" 
            className="text-xl font-medium text-sphinx-black hover:text-sphinx-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Diensten
          </a>
          <a 
            href="#waarom-sphinx" 
            className="text-xl font-medium text-sphinx-black hover:text-sphinx-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Waarom Sphinx?
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium text-sphinx-black hover:text-sphinx-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Referenties
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium text-sphinx-black hover:text-sphinx-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          
          <div className="mt-6 flex items-center">
            <Phone className="h-4 w-4 text-sphinx-orange mr-2" />
            <a href="tel:+31123456789" className="text-sphinx-orange font-medium hover:underline">+31 123 456 789</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
