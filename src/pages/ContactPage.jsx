import React, { useState } from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoOIEE2K0AH0PAbAfZJFpT303q_nv79SSSmq6fJIwnMKEmFGf52gQUU0sVdgjYgr8Mdw/exec';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(formData),
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMsg(error.message || 'Une erreur est survenue.');
        }
    };

    return (
        <div className="bg-white font-sans text-[#111827] antialiased transition-colors duration-200 min-h-screen flex flex-col">

            {/* Header Placeholder */}
            <div style={{ height: '80px' }}></div>

            <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 flex-grow w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Text & Info */}
                    <div className="space-y-8 pt-4">
                        <div className="space-y-4">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1e54c6] text-xs font-bold uppercase tracking-wider">
                                Contactez-nous
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                                A2S Junior Entreprise
                            </h1>
                            <p className="text-lg text-[#6b7280] leading-relaxed">
                                A2S (Actions Services et Solutions) est la Junior-Entreprise de l'INPT. Nous accompagnons les professionnels dans leurs projets informatiques, télécoms et technologiques en mettant à leur disposition l'expertise de nos élèves-ingénieurs. N'hésitez pas à nous contacter pour toute demande de devis ou de collaboration.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1e54c6]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#111827]">E-mail</h3>
                                    <p className="text-sm text-[#6b7280]">contact@a2s-inpt.ma</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1e54c6]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#111827]">Téléphone</h3>
                                    <p className="text-sm text-[#6b7280]">+212 537 777 777</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Iframe Card */}
                        <div className="relative w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 group">
                            <iframe
                                title="INPT Map Location"
                                src="https://maps.google.com/maps?q=inpt&t=m&z=15&output=embed&iwloc=near"
                                className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs border border-gray-100 z-10 w-fit">
                                <h4 className="font-bold text-sm text-[#111827] mb-2">Institut National des Postes et Télécommunications</h4>
                                <a className="text-xs text-[#1e54c6] font-medium hover:underline" href="https://maps.google.com/?q=INPT+Rabat" target="_blank" rel="noreferrer">Voir la carte en grand</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#111827]" htmlFor="name">
                                    Nom <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#e5e7eb] focus:border-[#1e54c6] focus:ring-2 focus:ring-[#1e54c6]/20 outline-none transition-all placeholder-gray-400 text-[#111827]"
                                    id="name"
                                    name="name"
                                    placeholder="Votre nom"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#111827]" htmlFor="email">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#e5e7eb] focus:border-[#1e54c6] focus:ring-2 focus:ring-[#1e54c6]/20 outline-none transition-all placeholder-gray-400 text-[#111827]"
                                    id="email"
                                    name="email"
                                    placeholder="Votre e-mail"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#111827]" htmlFor="phone">
                                    Téléphone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#e5e7eb] focus:border-[#1e54c6] focus:ring-2 focus:ring-[#1e54c6]/20 outline-none transition-all placeholder-gray-400 text-[#111827]"
                                    id="phone"
                                    name="phone"
                                    placeholder="Votre numéro de téléphone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#111827]" htmlFor="message">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#e5e7eb] focus:border-[#1e54c6] focus:ring-2 focus:ring-[#1e54c6]/20 outline-none transition-all resize-none placeholder-gray-400 text-[#111827]"
                                    id="message"
                                    name="message"
                                    placeholder="Votre message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                className="w-full py-4 px-6 bg-[#1e54c6] hover:bg-[#16419e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e54c6] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 text-sm font-medium text-center mt-2">
                                    Votre message a été envoyé avec succès !
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-sm font-medium text-center mt-2">
                                    Erreur : {errorMsg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </main>

            <footer className="border-t border-gray-200 bg-white py-8 w-full">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#6b7280]">
                    © 2024 Association Avenir d'Ingénieur en Services et Solutions (A2S) - INPT. Tous droits réservés.
                </div>
            </footer>
        </div>
    );
}