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
          {/* Left: Logo and Brand */}
          <div className="flex items-center space-x-3">
            <a href="/#accueil" className="flex items-center space-x-3">
              <img src="/assets/a2s%20header.png" alt="A2S Header Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              <div className="flex flex-col">
                <h2 className={`font-bold text-xl ${showDarkText ? 'text-gray-900' : 'text-white'}`}>A2S</h2>
                <p className={`text-sm whitespace-nowrap ${showDarkText ? 'text-gray-600' : 'text-blue-100'}`}>Junior Entreprise</p>
              </div>
            </a>
          </div>
          {/* Right: Navigation Links and Buttons */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <a
              href="https://www.linkedin.com/company/a2s-junior-entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors mr-2 ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              aria-label="LinkedIn A2S"
            >
              <Linkedin size={22} />
            </a>
            <a href="/#accueil" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>Accueil</a>
            <a href="/#apropos" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>À Propos</a>
            <a href="/#services" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>Services</a>
            <Link to="/projects" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>Projets</Link>
            <Link to="/events" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>Événements</Link>
            <Link to="/contact" className={`transition-colors text-base font-semibold tracking-wide ${showDarkText ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-black'}`}>Contact</Link>
            
            {/* Buttons */}
            <Link
              to="/contact"
              className="font-semibold text-white text-base px-[18px] py-2 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 min-w-[160px] min-h-[36px] tracking-[0.01em] whitespace-nowrap bg-gradient-to-r from-blue-600 to-[#00B6FF] hover:from-blue-600 hover:to-blue-600 shadow-[0_2px_8px_0_rgba(0,182,255,0.18)] hover:shadow-[0_4px_16px_0_rgba(0,182,255,0.24)]"
            >
              Avoir un Devis
            </Link>
            {isHomePage ? (
              <Link
                to="/join-us"
                className="text-base px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-w-[160px] min-h-[36px] whitespace-nowrap bg-[#00B6FF] text-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] hover:bg-blue-600 hover:shadow-[0_4px_16px_0_rgba(0,182,255,0.24)]"
              >
                Rejoindre A2S
              </Link>
            ) : (
              <Link
                to="/join-us"
                className="text-base px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center border-2 min-w-[160px] min-h-[36px] whitespace-nowrap border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
              >
                Rejoindre A2S
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden ml-4"
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