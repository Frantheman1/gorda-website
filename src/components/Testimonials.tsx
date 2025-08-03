import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marija K.',
      text: 'Nevjerojatno koliko je čitanje bilo točno i pronicljivo. Pomogla mi je razumjeti obrasce u mom životu koje nikad prije nisam primijetila. Vodstvo o mojoj karijernoj stazi bilo je savršeno!',
      rating: 5,
      location: 'Zagreb, Hrvatska'
    },
    {
      name: 'Petar N.',
      text: 'Isprva sam bio skeptičan, ali Gordin topli pristup i detaljno znanje osvojili su me. Njezin savjet o odnosima pomogao je spasiti moj brak. Ne mogu joj dovoljno zahvaliti.',
      rating: 5,
      location: 'Split, Hrvatska'
    },
    {
      name: 'Ana S.',
      text: 'Godišnja prognoza bila je nevjerojatna! Gorda je predvidjela nekoliko velikih životnih događaja koji su se ostvarili točno kako je opisala. Njena intuicija je izvanredna.',
      rating: 5,
      location: 'Rijeka, Hrvatska'
    },
    {
      name: 'Tomislav V.',
      text: 'Gorda je moja glavna astrologinja već 5 godina. Njena čitanja su uvijek promišljena, suosjećajna i nevjerojatno korisna za velike životne odluke.',
      rating: 5,
      location: 'Osijek, Hrvatska'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Što Kažu Klijenti
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zvijezde su vodile ove duše do jasnoće i svrhe. Evo njihovih priča.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-4xl opacity-20">
                    ✨
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;