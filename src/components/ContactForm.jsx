import React, { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoOIEE2K0AH0PAbAfZJFpT303q_nv79SSSmq6fJIwnMKEmFGf52gQUU0sVdgjYgr8Mdw/exec';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          sujet: formData.sujet,
          message: formData.message,
        }),
      });
      setStatus('success');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMsg(error.message || 'Une erreur est survenue.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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
            required
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
            required
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
            required
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
            required
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        {status === 'success' && (
          <p className="text-green-600 text-sm font-medium text-center">
            Votre message a été envoyé avec succès !
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm font-medium text-center">
            Erreur : {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
