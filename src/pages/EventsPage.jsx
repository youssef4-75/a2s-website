import React from 'react';

export default function EventsPage() {
  const events = [
    {
      title: "Bootcamps",
      image: "/assets/bootcamp.png",
      description: "A2S organise des bootcamps en faveur de ses membres, offrant une opportunité unique de perfectionner leurs compétences dans des domaines stratégiques tels que le développement web, la gestion de projet, et les technologies émergentes. Ces bootcamps, animés par des experts chevronnés de l'industrie, sont conçus pour fournir un apprentissage pratique, des conseils personnalisés et des occasions de collaboration au sein de la communauté A2S. En encourageant l'apprentissage continu et en favorisant le partage des connaissances, ces bootcamps renforcent la capacité des membres à exceller dans leurs domaines respectifs, contribuant ainsi à forger une communauté dynamique et compétente au sein de la Junior Entreprise."
    },
    {
      title: "Mentoring",
      image: "/assets/Mentoring.png",
      description: "L'événement Mentoring organisé par A2S est une occasion spéciale où les lauréats de chaque filière sont invités à partager leur expertise et leurs conseils avec les étudiants. Cet événement vise à créer un pont entre les anciens étudiants ayant réussi leur parcours académique et les étudiants actuels, en leur permettant de bénéficier de précieux conseils et d'obtenir des réponses à leurs questions. Cet événement contribue ainsi à renforcer la communauté académique et à favoriser l'échange de connaissances."
    },
    {
      title: "CNJEM",
      image: "/assets/CNJEM.png",
      description: "Le Congrès National des Junior-Entreprises Marocaines est l'événement phare de la Confédération des Junior-Entreprises Marocaines (CJEM), une manifestation grandiose annuelle qui met en exergue la force du mouvement des Junior-entreprises à l'échelle internationale et marocaine en particulier. Un carrefour d'entrepreneuriat qui regroupe moult spécialités, des personnes de haut calibre. Une large gamme garnie de domaines de compétences en ingénierie, automatisme, management, finance, infographie et bien d'autres. Le CNJEM est en effet la traduction effective de l'union des Junior-Entreprises membres de la CJEM, le groupement fortifié en développement d'un pôle socio-économique dans le tissu de la société marocaine."
    }
  ];

  return (
    <section id="evenements" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Nos Événements
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Des opportunités de développement et de networking
        </p>

        <div className="space-y-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}