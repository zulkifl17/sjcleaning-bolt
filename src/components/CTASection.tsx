import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  const handleCallNow = () => {
    window.location.href = 'tel:+14168386535';
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-ubuntu font-bold text-white mb-6">
            Ready for a <span className="text-accent">Spotless</span> Home or Office?
          </h2>
          <p className="text-xl text-white/90 font-openSans mb-8 max-w-3xl mx-auto">
            Let us do the work while you relax. Get your free quote today and experience 
            the difference professional cleaning makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => navigate('/quotation')}
              className="bg-white text-primary px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>Get Free Quotation</span>
            </button>
            <button
              onClick={handleCallNow}
              className="bg-charcoal text-white px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-charcoal/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 font-openSans">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+1 (416) 838-6535</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div>Available 7 days a week</div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div>Free estimates • Eco-friendly products</div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-16 h-16 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;