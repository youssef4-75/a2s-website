import React, { useEffect, useRef } from 'react';
import { ChevronDown, FileText, Users, ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import { services } from '../data/services';
import ContactForm from '../components/ContactForm';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_ADDRESS, GOOGLE_MAPS_EMBED_URL } from '../constants';

export default function HomePage() {
  const upRef = useRef(null);
  const downRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const SPEED = 0.3;
    const upEl = upRef.current;
    const downEl = downRef.current;
    if (!upEl || !downEl) return;

    let upPos = 0;
    let downPos = 0;
    let rafId;

    // Wait for images to load before measuring heights
    const start = () => {
      const upHalf = upEl.scrollHeight / 2;
      const downHalf = downEl.scrollHeight / 2;
      downPos = downHalf;

      const animate = () => {
        if (!pausedRef.current) {
          upPos += SPEED;
          if (upPos >= upHalf) upPos -= upHalf;
          upEl.style.transform = `translateY(-${upPos}px)`;

          downPos -= SPEED;
          if (downPos <= 0) downPos += downHalf;
          downEl.style.transform = `translateY(-${downPos}px)`;
        }
        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    // Start after a brief tick to ensure DOM is painted
    const timer = setTimeout(start, 50);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };

    upEl.addEventListener('mouseenter', pause);
    upEl.addEventListener('mouseleave', resume);
    downEl.addEventListener('mouseenter', pause);
    downEl.addEventListener('mouseleave', resume);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      upEl.removeEventListener('mouseenter', pause);
      upEl.removeEventListener('mouseleave', resume);
      downEl.removeEventListener('mouseenter', pause);
      downEl.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:px-12 lg:px-16 py-12">
            <img 
              src="/assets/Logo A2S.png"
              alt="A2S Logo" 
              className="mx-auto lg:mx-0 mb-6 w-40 h-40"
            />
            <h2 className="text-2xl md:text-4xl text-blue-100 mb-8 font-light">
              Junior Entreprise
            </h2>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <strong>A2S</strong> est la Junior-Entreprise de l'INPT, une école leader en matière de développement et de technologies d'information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                Avoir un Devis
              </a>
              <a
                href="https://drive.google.com/file/d/175K5NsKZIkT6L8j9TGQApxSOL6S0_sos/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                Télécharger notre Plaquette
              </a>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="hidden lg:flex w-1/2 h-screen pt-20 items-center overflow-hidden">
            <div className="flex gap-4 h-full py-8">
              {/* Left column - scrolls up */}
              <div className="flex-1 overflow-hidden relative">
                <div ref={upRef} className="flex flex-col">
                  {[
                    { src: "/assets/carousel/1web.jpeg", alt: "A2S Event 1" },
                    { src: "/assets/carousel/IMG_7480.jpg", alt: "A2S Event 2" },
                    { src: "/assets/carousel/3web.jpeg", alt: "A2S Event 3" },
                    { src: "/assets/carousel/IMG_4436.jpg", alt: "A2S Event 4" },
                    { src: "/assets/carousel/1web.jpeg", alt: "A2S Event 1" },
                    { src: "/assets/carousel/IMG_7480.jpg", alt: "A2S Event 2" },
                    { src: "/assets/carousel/3web.jpeg", alt: "A2S Event 3" },
                    { src: "/assets/carousel/IMG_4436.jpg", alt: "A2S Event 4" },
                  ].map((img, i) => (
                    <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden mb-4">
                      <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Right column - scrolls down */}
              <div className="flex-1 overflow-hidden relative">
                <div ref={downRef} className="flex flex-col">
                  {[
                    { src: "/assets/carousel/2web.jpeg", alt: "A2S Project 1" },
                    { src: "/assets/carousel/IMG_7589.jpg", alt: "A2S Project 2" },
                    { src: "/assets/carousel/4web.jpeg", alt: "A2S Project 3" },
                    { src: "/assets/carousel/20251221_174137.jpg", alt: "A2S Project 4" },
                    { src: "/assets/carousel/2web.jpeg", alt: "A2S Project 1" },
                    { src: "/assets/carousel/IMG_7589.jpg", alt: "A2S Project 2" },
                    { src: "/assets/carousel/4web.jpeg", alt: "A2S Project 3" },
                    { src: "/assets/carousel/20251221_174137.jpg", alt: "A2S Project 4" },
                  ].map((img, i) => (
                    <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden mb-4">
                      <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#apropos">
            <ChevronDown className="text-white" size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui Sommes-nous ?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A2S est la Junior-Entreprise de l'Institut National des Postes et Télécommunications, une école leader🎖 en matière de technologies d'information. Bénéficiant ainsi d'un encadrement de professionnels et d'une importante logistique, nous offrons un service de qualité qui reflète le savoir-faire de nos intervenants dans le domaine du développement et des nouvelles technologies.
              </p>
              <p className="text-xl font-semibold text-blue-600 mb-8">
                #TrustTomorrowsEngineers 🦾
              </p>
              <Link to="/team" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                <Users size={20} />
                Découvrir notre Équipe de Bureau
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                  alt="Team collaboration" 
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Projects Section (Nouveau) */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Nos Domaines de Compétences
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Des solutions professionnelles adaptées à vos besoins
          </p>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="w-full sm:w-[48%] lg:w-[30%]
                           group relative overflow-hidden rounded-2xl
                           shadow-lg hover:shadow-2xl
                           transition-all duration-300
                           transform hover:-translate-y-2 cursor-pointer"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section intégrée à la page d'accueil */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {COMPANY_NAME}
              </h2>
              <p className="text-blue-200 mb-8 text-lg">
                Contactez-nous pour donner vie à vos projets
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-blue-200">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-blue-200">{CONTACT_EMAIL}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl h-64">
                <iframe 
                  src={GOOGLE_MAPS_EMBED_URL}
                  className="w-full h-full"
                  title="INPT Location"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}