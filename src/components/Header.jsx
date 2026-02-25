import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo (renvoie aussi en haut de la page) */}
          <a href="/#accueil" className="flex items-center space-x-3">
            <img src="/assets/a2s logo.png" alt="A2S Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>A2S</h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>Junior Entreprise</p>
            </div>
          </a>

          {/* Desktop Menu  */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#accueil" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Accueil
            </a>
            
            <a href="/#apropos" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              À Propos
            </a>
            <a href="/#services" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Services
            </a>
            
            <Link 
              to="/events" 
              className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              Événements
            </Link>

            <Link to="/contact" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Contact
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
              Avoir un Devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="/#accueil" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="/#apropos" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">À Propos</a>
            <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Services</a>
            
            <Link to="/events" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Événements</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}