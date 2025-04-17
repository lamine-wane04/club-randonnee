import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, ChevronDown, Quote } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg animate-fadeIn">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-blue-600">
            <Mail className="w-5 h-5" />
            <span>babacar.ndiaye@cdc.sn</span>
          </div>
          <div className="flex items-center space-x-8">
            <img src="https://via.placeholder.com/80x40" alt="Logo 1" className="h-10 hover:scale-105 transition-transform" />
            <img src="https://via.placeholder.com/80x40" alt="Logo 2" className="h-10 hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <Phone className="w-5 h-5" />
            <span>+221 77 091 52 31</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            {['Accueil', 'A propos', 'Présentation', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-200 transition-colors duration-300 relative group py-2 px-4"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80"
            alt="Randonnée"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-blue-900/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl animate-slideUp">
            <h1 className="text-5xl font-bold mb-6">Découvrez la Nature Autrement</h1>
            <p className="text-xl mb-8">Rejoignez notre communauté de passionnés de randonnée et vivez des aventures inoubliables</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300 transform hover:scale-105">
              Nous Rejoindre
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 fade-in-up">À Propos de Nous</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80"
                alt="Groupe de randonneurs"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 fade-in-up delay-200">
              <div className="bg-blue-50 p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Depuis 1995, RandoNature rassemble les passionnés de randonnée et de nature.
                  Notre club propose des sorties adaptées à tous les niveaux, de la balade familiale
                  aux trekkings plus sportifs.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nous partageons notre amour de la nature et notre engagement pour sa préservation
                  à travers des expériences uniques et enrichissantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16 fade-in-up">Le Mot du Président</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up order-2 md:order-1">
              <div className="relative">
                <Quote className="absolute -left-8 -top-8 w-16 h-16 text-blue-300 opacity-50" />
                <blockquote className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white leading-relaxed text-lg">
                  "Chers amis randonneurs, notre club est avant tout une grande famille où 
                  chacun trouve sa place. Ensemble, nous partageons des moments inoubliables 
                  sur les sentiers, découvrons des paysages magnifiques et créons des liens durables. 
                  Rejoignez-nous dans cette belle aventure !"
                  <footer className="mt-4 text-blue-200 font-semibold">
                    Jean Dupont - Président de RandoNature
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="fade-in-up order-1 md:order-2">
              <div className="rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Président du club"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>contact@randonature.fr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 rue de la Nature, 75001 Paris</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2">
                <li>Lundi - Vendredi: 9h - 18h</li>
                <li>Samedi: 9h - 12h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-blue-300 transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-blue-300 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 RandoNature - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;