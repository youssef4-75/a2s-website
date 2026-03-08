import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { allProjects } from '../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <p className="text-gray-600 mb-8">Le service que vous recherchez n'existe pas.</p>
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            <ArrowLeft size={20} />
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = allProjects.filter(p => p.serviceId === serviceId);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour aux services
        </Link>

        {/* Hero Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-1"></div>
          <img 
            src={service.image} 
            alt={service.title}
            className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            {service.description}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce service</h2>
            <p className="text-gray-700 mb-6">
              {service.about || `Contenu détaillé à venir pour ${service.title.toLowerCase()}.`}
            </p>

            {/* Related Projects - moved up for visibility */}
            {relatedProjects.length > 0 && (
              <div className="mt-10 mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Projets en {service.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProjects.map(p => (
                    <Link
                      key={p.slug}
                      to={`/projects/${p.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <div className="h-40 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{p.category}</p>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{p.title}</h3>
                        <p className="text-gray-500 text-sm line-clamp-2">{p.description}</p>
                        <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-2">
                          Voir le projet <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que nous offrons</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {(service.offerings || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-700 mb-6">
              {service.whyUs || "Description des avantages et de notre expertise à venir."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intéressé par ce service ?</h3>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
