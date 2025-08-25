import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Quotation', path: '/quotation' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleCallNow = () => {
    window.location.href = 'tel:+14168386535';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl lg:text-3xl font-ubuntu font-bold text-primary">
              SJ PRO
            </div>
            <div className="text-sm lg:text-base text-charcoal font-ubuntu">
              CLEANING
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-openSans font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleCallNow}
              className="bg-primary text-white px-6 py-2 rounded-full font-openSans font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary bg-lightBlue/20'
                      : 'text-charcoal hover:text-primary hover:bg-lightBlue/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleCallNow}
                className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-full font-openSans font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;