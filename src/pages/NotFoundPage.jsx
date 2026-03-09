import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 flex items-center justify-center px-[5%]">
      <div className="text-center text-white w-full max-w-lg">
        <h1 className="text-[15vw] sm:text-9xl font-bold mb-[3%]">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-[4%]">Page non trouvée</h2>
        <p className="text-blue-200 text-base sm:text-lg mb-[6%] mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-auto">
            <Link
              to="/"
              className="w-full sm:w-auto inline-block bg-white text-blue-600 px-[8%] sm:px-8 py-[3%] sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
