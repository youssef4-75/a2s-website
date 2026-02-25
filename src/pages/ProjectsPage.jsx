import React from 'react';

export default function ProjectsPage() {
  const services = [
    {
      title: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
      description: "Stratégies digitales innovantes pour votre croissance"
    },
    {
      title: "Développement Web & Mobile",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
      description: "Applications modernes et performantes"
    },
    {
      title: "IT Consulting",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=350&fit=crop",
      description: "Expertise technique pour vos projets"
    },
    {
      title: "Design Graphique",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
      description: "Identité visuelle unique et impactante"
    },
    {
      title: "Étude de Marché",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
      description: "Analyses approfondies pour vos décisions"
    }
  ];

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