import React from 'react';
import { Mail, Phone, MapPin, Calendar, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Povežite Se Sa Mnom
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Spremni ste istražiti svoj kozmički nacrt? Ovdje sam da Vas vodim na vašem putovanju 
              kroz zvijezde. Javite se da zakažete svoje čitanje.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold mb-8">Stupite u Kontakt</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-pošta</h4>
                    <p className="text-gray-300">magasg850@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-gray-300">+385 91 566 6646</p>
                  </div>
                </div>                
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Rezerviraj Čitanje</h3>
              
              <form className="space-y-6">
                <h4>Za kontakt nazovite moj broj ili pošaljite poruku na email.</h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;