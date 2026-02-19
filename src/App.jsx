import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, MapPin, Phone, FileText, Users, ArrowRight } from 'lucide-react';
import bootcampIMG from '../public/assets/bootcamp.png'
import CNJEMIMG from '../public/assets/CNJEM.png'
import MentoringIMG from '../public/assets/Mentoring.png'


export default function A2SWebsite() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const services = [
    {
      title: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
      description: "Stratégies digitales innovantes pour votre croissance"
    },
    {
      title: "Développement Web & Mobile",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
      description: "Applications modernes et performantes"
    },
    {
      title: "IT Consulting",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=350&fit=crop",
      description: "Expertise technique pour vos projets"
    },
    {
      title: "Design Graphique",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
      description: "Identité visuelle unique et impactante"
    },
    {
      title: "Étude de Marché",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
      description: "Analyses approfondies pour vos décisions"
    }
  ];

  const events = [
    {
      title: "Bootcamps",
      image: bootcampIMG,
      description: "A2S organise des bootcamps en faveur de ses membres, offrant une opportunité unique de perfectionner leurs compétences dans des domaines stratégiques tels que le développement web, la gestion de projet, et les technologies émergentes. Ces bootcamps, animés par des experts chevronnés de l'industrie, sont conçus pour fournir un apprentissage pratique, des conseils personnalisés et des occasions de collaboration au sein de la communauté A2S. En encourageant l'apprentissage continu et en favorisant le partage des connaissances, ces bootcamps renforcent la capacité des membres à exceller dans leurs domaines respectifs, contribuant ainsi à forger une communauté dynamique et compétente au sein de la Junior Entreprise."
    },
    {
      title: "Mentoring",
      image: MentoringIMG,
      description: "L'événement Mentoring organisé par A2S est une occasion spéciale où les lauréats de chaque filière sont invités à partager leur expertise et leurs conseils avec les étudiants. Cet événement vise à créer un pont entre les anciens étudiants ayant réussi leur parcours académique et les étudiants actuels, en leur permettant de bénéficier de précieux conseils et d'obtenir des réponses à leurs questions. Cet événement contribue ainsi à renforcer la communauté académique et à favoriser l'échange de connaissances."
    },
    {
      title: "CNJEM",
      image: CNJEMIMG,
      description: "Le Congrès National des Junior-Entreprises Marocaines est l'événement phare de la Confédération des Junior-Entreprises Marocaines (CJEM), une manifestation grandiose annuelle qui met en exergue la force du mouvement des Junior-entreprises à l'échelle internationale et marocaine en particulier. Un carrefour d'entrepreneuriat qui regroupe moult spécialités, des personnes de haut calibre. Une large gamme garnie de domaines de compétences en ingénierie, automatisme, management, finance, infographie et bien d'autres. Le CNJEM est en effet la traduction effective de l'union des Junior-Entreprises membres de la CJEM, le groupement fortifié en développement d'un pôle socio-économique dans le tissu de la société marocaine."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:a2s.bureau@gmail.com?subject=${encodeURIComponent(formData.sujet)}&body=${encodeURIComponent(`Nom: ${formData.nom}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            A2S
          </h1>
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

      {/* About Section */}
      <section id="apropos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui Sommes-nous ?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A2S est la Junior-Entreprise de l'Institut National des Postes et Télécommunications, une école leader🎖 en matière de technologies d'information. Bénéficiant ainsi d'un encadrement de professionnels et d'une importante logistique, nous offrons un service de qualité qui reflète le savoir-faire de nos intervenants dans le domaine du développement et des nouvelles technologies.
              </p>
              <p className="text-xl font-semibold text-blue-600 mb-8">
                #TrustTomorrowsEngineers 🦾
              </p>
              <a href="https://drive.google.com/file/d/175K5NsKZIkT6L8j9TGQApxSOL6S0_sos/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                <FileText size={20} />
                Télécharger notre Plaquette Commerciale
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                  alt="Team collaboration" 
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Nos Domaines de Compétences
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Des solutions professionnelles adaptées à vos besoins
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-200 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Nos Événements
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Des opportunités de développement et de networking
          </p>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A2S Junior Entreprise
              </h2>
              <p className="text-blue-200 mb-8 text-lg">
                Contactez-nous pour donner vie à vos projets
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-blue-200">Institut National des Postes et Télécommunications (INPT)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-blue-200">a2s.bureau@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl h-64">
                <iframe 
                  src="https://maps.google.com/maps?q=inpt&t=m&z=14&output=embed&iwloc=near"
                  className="w-full h-full"
                  title="INPT Location"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">Sujet</label>
                  <input 
                    type="text" 
                    id="sujet" 
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}