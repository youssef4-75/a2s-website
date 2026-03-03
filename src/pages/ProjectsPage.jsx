import React from 'react';
import { services } from '../data/services';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20"> {/* Added pt-20 so your Layout navbar doesn't cover the title */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Nos Domaines de Compétences
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Des solutions professionnelles adaptées à vos besoins
          </p>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[30%] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}