import React from 'react';
import { Linkedin } from 'lucide-react';
import { team } from '../data/team';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      {/* AJOUT : pt-28 (padding-top) pour éviter que la navbar cache le titre */}
      <section className="pt-28 pb-[5vh] md:pt-36 md:pb-[7vh] px-[5%] bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-[2%]">Notre Équipe de Bureau</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Rencontrez les membres qui pilotent A2S et donnent vie à notre Junior-Entreprise.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-[5vh] md:py-[7vh] px-[5%]">
        <div className="w-full max-w-6xl mx-auto">
          {/* J'ai remplacé gap-[3%] par gap-8 pour un espacement parfait et standard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group flex flex-col"
              >
                {/* Image du membre */}
                <div className="overflow-hidden h-64 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Zone de texte */}
                <div className="p-6 flex items-start justify-between gap-4 flex-grow">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {member.name}
                    </h3>
                    {/* AJOUT : On cherche 'role', ou 'poste', ou 'title' selon ce que tu as mis dans team.js */}
                    <p className="text-blue-600 font-medium mt-1 text-sm leading-snug">
                      {member.role || member.poste || member.title || "Poste à définir"}
                    </p>
                  </div>
                  
                  {/* Bouton LinkedIn */}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0 mt-1"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}