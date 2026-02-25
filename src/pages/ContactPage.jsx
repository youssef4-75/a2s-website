import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20">
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Info Column */}
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

            {/* Form Column */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Envoyer
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}