import React from 'react';
import { Star, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">Nebeska Čitanja</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Vodim duše kroz mudrost zvijezda već više od 30 godina. 
                Vaše kozmičko putovanje čeka.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Brze Veze</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-purple-300 transition-colors">Početna</a></li>
                <li><a href="#about" className="hover:text-purple-300 transition-colors">O Meni</a></li>
                <li><a href="#services" className="hover:text-purple-300 transition-colors">Usluge</a></li>
                <li><a href="#testimonials" className="hover:text-purple-300 transition-colors">Svjedočanstva</a></li>
                <li><a href="#contact" className="hover:text-purple-300 transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt Informacije</h4>
              <ul className="space-y-2 text-gray-300">
                <li>magasg850@gmail.com</li>
                <li>+385 91 566 6646</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 flex items-center justify-center space-x-2">
              <span>Napravljeno's</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>© 2024 Nebeska Čitanja. Sva prava pridržana.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;