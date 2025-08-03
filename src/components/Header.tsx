import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Gorda - Pogled u Budućnost</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors">
              Početna
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors">
              O Meni
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-purple-300 transition-colors">
              Usluge
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-purple-300 transition-colors">
              Svjedočanstva
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors">
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-900/95 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors text-left">
                Početna
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors text-left">
                O Meni
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-purple-300 transition-colors text-left">
                Usluge
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-purple-300 transition-colors text-left">
                Svjedočanstva
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors text-left">
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;