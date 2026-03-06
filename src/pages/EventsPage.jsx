import React from 'react';
import { events } from '../data/events';

export default function EventsPage() {
  return (
    <section id="evenements" className="pt-28 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
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