import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { allProjects, extraProjects } from '../data/projects';
import { services } from '../data/services';

export default function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const project = [...allProjects, ...extraProjects].find(p => p.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
          <p className="text-gray-600 mb-8">Le projet que vous recherchez n'existe pas.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            <ArrowLeft size={20} />
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const service = project.serviceId ? services.find(s => s.id === project.serviceId) : null;

  // Related projects: same service, excluding current
  const related = project.serviceId
    ? allProjects.filter(p => p.serviceId === project.serviceId && p.slug !== project.slug).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        {/* Hero Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-1"></div>
          <img
            src={project.image}
            alt={project.title}
            className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {project.date}
            </span>
            {service && (
              <Link
                to={`/services/${service.id}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
              >
                <Tag size={14} />
                {service.title}
              </Link>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {project.fullDescription || project.description}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Technologies utilisées</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Un projet similaire en tête ?</h3>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Projets similaires</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
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
      </div>
    </div>
  );
}
