import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { actualites } from '../data/actualites';

export default function ActualitesPage() {
  const location = useLocation();
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [location.hash]);

  const openLightbox = (images, i) => { setLightboxImages(images); setLightboxIndex(i); };
  const closeLightbox = () => { setLightboxIndex(null); setLightboxImages([]); };
  const goPrev = useCallback(() => setLightboxIndex(i => (i - 1 + lightboxImages.length) % lightboxImages.length), [lightboxImages.length]);
  const goNext = useCallback(() => setLightboxIndex(i => (i + 1) % lightboxImages.length), [lightboxImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <section className="pt-24 md:pt-28 pb-[5vh] px-[5%] bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Actualités
        </h1>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Les dernières nouvelles d'A2S
        </p>

        <div className="space-y-12">
          {actualites.map((item, idx) => {
            const images = item.media.images ?? [];
            return (
              <article key={idx} id={`actualite-${idx}`} className="bg-white rounded-3xl shadow-xl overflow-hidden scroll-mt-24">
                {/* Poster */}
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <img
                    src={`/assets/actualités/${item.media.poster}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-blue-600" />
                      <span>{item.date}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-blue-600" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{item.description}</p>

                  {/* Gallery */}
                  {images.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Photos</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => openLightbox(images, i)}
                            className="rounded-2xl overflow-hidden aspect-video cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <img
                              src={`/assets/actualités/${img}`}
                              alt={`Photo ${i + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          {lightboxImages.length > 1 && (
            <button
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Précédent"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          <img
            src={`/assets/actualités/${lightboxImages[lightboxIndex]}`}
            alt={`Photo ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {lightboxImages.length > 1 && (
            <button
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Suivant"
            >
              <ChevronRight size={36} />
            </button>
          )}

          <span className="absolute bottom-4 text-white/70 text-sm">
            {lightboxIndex + 1} / {lightboxImages.length}
          </span>
        </div>
      )}
    </section>
  );
}
