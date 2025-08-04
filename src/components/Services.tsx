import React from 'react';
import tarot from '../images/Tarot.jpg';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Astrološke Usluge
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Svako čitanje je sveti razgovor između vas, zvijezda i putovanja vaše duše. 
              Odaberite uslugu koja odzvanja s vašim trenutnim potrebama.
            </p>            
          </div>
          <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Naše astrološke usluge su dizajnirane da Vam pomognu u razumijevanju vašeg astrološkog profila, 
            pružajući uvid u vaše osobine, izazove i potencijale. Bilo da ste novi u astrologiji ili 
            tražite dublje uvide, ovdje ćete pronaći nešto za sebe.
          </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-purple-500 text-white border-2 border-purple-300">
            <h3 className="text-2xl font-semibold mb-4">Osnovna Astrološka Čitanja</h3>
            <p className="mb-4">
              Otkrijte osnovne aspekte vašeg astrološkog profila, uključujući sunčev znak, mjesec i uzlazni znak.
            </p>
            <img src="src/images/Astrology.png" alt="Basic Astrology" className="rounded-md mx-auto"/>
          </div>
          <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-purple-500 text-white border-2 border-purple-300">
            <h3 className="text-2xl font-semibold mb-4">Otvoranje Tarota</h3>
            <p className="mb-4">
              Koristite tarot karte za dublje uvide u vašu situaciju, donoseći jasnoću i smjernice kroz simboliku karata.
            </p>
            <img src={tarot} alt="Tarot Cards" className="rounded-md mx-auto"/>
          </div>
          <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-purple-500 text-white border-2 border-purple-300">
            <h3 className="text-2xl font-semibold mb-4">Analiza uz Numerologiju</h3>
            <p className="mb-4">
              Saznajte kako brojevi utječu na vaš život i osobnost kroz detaljnu analizu numerološkog profila.
            </p>
            <img src="src/images/Numerologija.png" alt="Numerology" className="rounded-md mx-auto"/>
          </div>
        </div>
        <div className="text-center mb-16"></div>
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Otklanjanje crne magije od negativnih energija i vraćanje pozitivne ravnoteže u vaš život.
            Gledanja preko kristalne kugle za dublje uvide u vašu sudbinu i životne puteve.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Svaka usluga je prilagođena vašim potrebama i ciljevima,
            osiguravajući da dobijete najrelevantnije i najkorisnije informacije
          </p>
          <div className="text-center mb-16"></div>
          <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-purple-500 text-white border-2 border-purple-300">
            <h3 className="text-2xl font-semibold mb-4">Kako otkloniti i osloboditi se od: </h3>
            <div className="flex flex-col items-center space-y-2">
              {[
                "Negativnih utjecaja",
                "Zlih misli",
                "Urokljivih očiju",
                "Vampira",
                "Sotona",
                "Demona",
                "Raznih vrački"
              ].map((item, idx) => (
                <div key={item} className="flex items-center text-lg font-medium">
                  <span className="text-purple-300 font-bold mr-2">{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            </div>
            <div className="text-center mb-16"></div>
            <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-blue-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-purple-500 text-white border-2 border-purple-300">
  <p className="text-2xl text-gray-200 mt-4">
    Zaštita od uruka, nagaza, kletvi, crne magije i drugih negativnih utjecaja. 
  </p>
  <p className="text-2xl text-gray-200 mt-4">
    Zaštita za ljubav, novac, zdravlje i sreću.
  </p>
  <p className="text-2xl text-gray-200 mt-4">
    Uklanjanje negativnih utjecaja i zaštita od budućih napada.
  </p>
</div>
</div>
      </div>
    </section>
  );
};

export default Services;