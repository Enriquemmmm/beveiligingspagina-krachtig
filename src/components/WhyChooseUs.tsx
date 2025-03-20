
import React from 'react';
import { CheckCircle, Clock, Users, Shield, Award } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section 
      id="waarom-sphinx" 
      className="section-padding"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <span className="inline-block bg-sphinx-orange/20 text-sphinx-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
              Waarom Kiezen voor Sphinx?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Beveiliging met bewezen expertise en toewijding
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Als toonaangevend beveiligingsbedrijf in Nederland staan wij garant voor kwaliteit, betrouwbaarheid en professionaliteit. Onze dienstverlening is gebaseerd op jarenlange ervaring en vakkundigheid.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <CheckCircle className="h-6 w-6 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">10+ jaar ervaring in de sector</h3>
                  <p className="text-white/70">Met meer dan een decennium aan ervaring begrijpen wij de unieke veiligheidsuitdagingen van diverse sectoren.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <CheckCircle className="h-6 w-6 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Gecertificeerde professionals</h3>
                  <p className="text-white/70">Al onze beveiligers zijn volledig gecertificeerd, intensief getraind en hebben een strenge screening doorstaan.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <CheckCircle className="h-6 w-6 text-sphinx-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 beschikbaarheid voor spoedacties</h3>
                  <p className="text-white/70">Onze diensten zijn dag en nacht beschikbaar, zodat u altijd op ons kunt rekenen wanneer u ons nodig heeft.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 fade-in-section">
            <div className="glass-card bg-white/5 p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sphinx-orange/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-sphinx-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/70">Betrouwbare beveiliging</p>
            </div>
            
            <div className="glass-card bg-white/5 p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sphinx-orange/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-sphinx-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/70">Tevreden klanten</p>
            </div>
            
            <div className="glass-card bg-white/5 p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sphinx-orange/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-sphinx-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/70">Beschikbaarheid</p>
            </div>
            
            <div className="glass-card bg-white/5 p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sphinx-orange/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-sphinx-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/70">Gecertificeerd personeel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
