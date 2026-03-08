import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Linkedin } from 'lucide-react';
import { upcomingEvents } from '../data/upcomingEvents';

export default function UpcomingEventsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [location.hash]);

  return (
    <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Événements à Venir
        </h1>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Ne manquez pas nos prochains événements
        </p>

        <div className="space-y-12">
          {upcomingEvents.map((event, idx) => (
            <article key={idx} id={`event-${idx}`} className="bg-white rounded-3xl shadow-xl overflow-hidden scroll-mt-24">
              {/* Poster */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                  src={`/assets/upcomingevents/${event.media.poster}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {event.series && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-cyan-500 text-white text-sm px-4 py-1.5 rounded-full font-semibold">
                      {event.series}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {event.tags.map(tag => (
                      <span key={tag} className="bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{event.title}</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>

                {event.speaker && (
                  <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{event.speaker.name}</p>
                      <p className="text-sm text-blue-600">{event.speaker.role}</p>
                    </div>
                    {event.speaker.linkedin && (
                      <a
                        href={event.speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#004182] transition-colors flex-shrink-0"
                        aria-label={`LinkedIn de ${event.speaker.name}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                )}

                <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
