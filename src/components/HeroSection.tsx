import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate relative position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="bg-hero-gradient min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-ubuntu font-bold text-charcoal mb-6 leading-tight">
              Explore{' '}
              <span className="text-primary">SJ Pro Cleaning's</span>{' '}
              Superior Services
            </h1>
            <p className="text-xl lg:text-2xl text-charcoal/80 mb-8 font-openSans leading-relaxed">
              We clean, you relax. Residential & Commercial Cleaning Services in Toronto.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/services')}
                className="bg-primary text-white px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>View Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => navigate('/quotation')}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-200" />
                <span>Get Free Quotation</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-charcoal/70">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-openSans">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-openSans">Trained Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-openSans">100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-up relative">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl hover-scale transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) translateY(${Math.sin(Date.now() * 0.001) * 5}px)`
              }}
            >
              <img
                src="hero-3.png"
                alt="Professional cleaning service"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl animate-pulse">
                <p className="text-charcoal font-ubuntu font-bold text-lg">
                  Professional Cleaning
                </p>
                <p className="text-charcoal/70 font-openSans">
                  Trusted by 500+ clients
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`
              }}
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/20 rounded-full animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                animationDelay: '1s'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;