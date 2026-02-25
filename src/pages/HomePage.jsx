
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, MapPin, Phone, FileText, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
return (
 <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img 
          src="/assets/a2s logo.png"
          alt="A2S Logo" 
          className="mx-auto mb-6 w-40 h-40"
/>
          <h2 className="text-2xl md:text-4xl text-blue-100 mb-8 font-light">
            Junior Entreprise
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            <strong>A2S</strong> est la Junior-Entreprise de l'INPT, une école leader en matière de développement et de technologies d'information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <FileText size={20} />
              Avoir un Devis
            </a>
            <a href="#apropos" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2">
              <Users size={20} />
              Rejoindre A2S
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>
</div>
)
}

