import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              O Meni
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dobrodošli, drage duše. Ja sam Gorda, ezoterijom se bavim već više od 30 godina.
                Imam dosta iskustva, da bih Vam pomogla razumjeti Vašu sudbinu i Vaše probleme.
                U riješavanju Vaših životnih pitanja. Obiteljski, poslovni, financijski,
                ljubavni, zdravstveni i drugi problemi. Ako Vam ne ide u životu,
                slobodno mi se obratite. Tu sam za Vas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Kroz godine studija, prakse i tisuće čitanja, razvila sam 
                intuitivni pristup koji spaja tradicionalnu astrološku mudrost s modernim 
                psihološkim uvjetima. Moja misija je pomoći Vam, razumjeti Vaš kozmički nacrt 
                i koristiti to znanje za stvaranje ispunjenijeg života.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">30+</div>
                  <div className="text-sm text-gray-600">Godina Iskustva</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Moon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">5000+</div>
                  <div className="text-sm text-gray-600">Obavljenih Čitanja</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <Sun className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">98%</div>
                  <div className="text-sm text-gray-600">Zadovoljstvo Klijenata</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mb-6">
                  <div className="text-6xl">
                    <img src="src\images\baka.jpeg" className="rounded-full w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Gorda</h3>
                  <p className="text-purple-600 font-medium">Certificirana Astrologinja i Duhovni Vodič</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;