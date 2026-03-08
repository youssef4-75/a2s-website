import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Only use transparent header on homepage
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const showDarkText = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${showDarkText ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo  */}
          <a href="/#accueil" className="flex items-center space-x-3">
            <img src="/assets/A2S Logo (1).png" alt="A2S Logo" className="w-20 h-20" />
            <div>
              <h2 className={`font-bold text-xl ${showDarkText ? 'text-gray-900' : 'text-white'}`}>A2S</h2>
              <p className={`text-sm ${showDarkText ? 'text-gray-600' : 'text-blue-100'}`}>Junior Entreprise</p>
            </div>
          </a>

          {/* Desktop Menu  */}
          <div className="hidden md:flex items-center space-x-8 text-base">
            <a
              href="https://www.linkedin.com/company/a2s-junior-entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              aria-label="LinkedIn A2S"
            >
              <Linkedin size={20} />
            </a>
            <a
            href="/#accueil"
            className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              Accueil
            </a>
            
            <a
            href="/#apropos"
            className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              À Propos
            </a>
            
            <a href="/#services" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              Services
            </a>
            
            <Link 
              to="/projects" 
              className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              Projets
            </Link>

            <Link 
              to="/events" 
              className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              Événements
            </Link>

            <Link to="/contact" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>
              Contact
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-5 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
              Avoir un Devis
            </Link>
            <Link to="/join-us" className={`flex items-center border-2 text-sm px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-110 ${showDarkText ? 'border-blue-600 text-blue-600' : 'border-white text-white'}`}>
              Rejoindre A2S
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X className={showDarkText ? 'text-gray-900' : 'text-white'} /> : <Menu className={showDarkText ? 'text-gray-900' : 'text-white'} />}
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
            
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Projets</Link>
            <Link to="/events" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Événements</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/join-us" onClick={() => setIsMenuOpen(false)} className="block text-blue-600 font-semibold hover:text-blue-800">Rejoindre A2S</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
