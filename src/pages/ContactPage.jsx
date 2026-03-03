import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_ADDRESS, GOOGLE_MAPS_EMBED_URL } from '../constants';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20">
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Info Column */}
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

            {/* Form Column */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}