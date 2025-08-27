import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gyroPosition, setGyroPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate relative position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    // Gyroscope handler for mobile
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // Normalize gamma (-90 to 90) and beta (-180 to 180) to (-1 to 1)
        const x = Math.max(-1, Math.min(1, e.gamma / 45));
        const y = Math.max(-1, Math.min(1, e.beta / 90));
        setGyroPosition({ x, y });
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      // Request permission for iOS devices
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          });
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const currentPosition = isMobile ? gyroPosition : mousePosition;

  return (
    <section className="bg-hero-gradient min-h-screen flex items-center py-20 relative overflow-hidden z-100">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 opacity-50 pointer-events-none "
        style={{
          backgroundImage: 'url("/1.svg")',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          // Responsive transform based on screen size
          transform: (() => {
        const width = window.innerWidth;
        if (width >= 1024) {
          // Large screens (lg+)
          return 'translate(0px, -374px) scale(1.8)';
        } else if (width >= 640) {
          // Medium screens (sm/md)
          return 'translate(0px, -395px) scale(1.8)';
        } else {
          // Small screens
          return 'translate(0px, -65px) scale(1.1)';
        }
          })()
        }}
      ></div> */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'url("/cleaning-hero-cover-2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${currentPosition.x * 20}px, ${currentPosition.y * 20}px) scale(1.1)`
        }}
      ></div>
      
      {/* Floating Background Image - Top Right */}
      <div 
        className="absolute top-10 right-10 w-32 h-32 lg:w-48 lg:h-48 opacity-5 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'url("/hero-3.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${currentPosition.x * 30}px, ${currentPosition.y * 30}px) rotate(${currentPosition.x * 5}deg)`
        }}
      ></div>

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
                transform: `translate(${currentPosition.x * 10}px, ${currentPosition.y * 10}px) translateY(${Math.sin(Date.now() * 0.001) * 5}px)`
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
                transform: `translate(${currentPosition.x * -5}px, ${currentPosition.y * -5}px)`
              }}
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/20 rounded-full animate-pulse"
              style={{
                transform: `translate(${currentPosition.x * 8}px, ${currentPosition.y * 8}px)`,
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