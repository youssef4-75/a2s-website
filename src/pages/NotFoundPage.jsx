import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page non trouvée</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
