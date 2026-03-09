import React from 'react';
import { Linkedin } from 'lucide-react';
import { team } from '../data/team';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-[5vh] md:py-[7vh] px-[5%] bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-[2%]">Notre Équipe de Bureau</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Rencontrez les membres qui pilotent A2S et donnent vie à notre Junior-Entreprise.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-[5vh] md:py-[7vh] px-[5%]">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3%]">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                  </div>
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
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
