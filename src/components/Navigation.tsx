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
    { name: 'Contact', path: '/contact' },
  ];

  const handleCallNow = () => {
    window.location.href = 'tel:+14168386535';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20 relative">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img
                  src="/sjlogo.png"
                  alt="SJ Cleaning Logo"
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                />
              </div>
              <div className="text-xl lg:text-2xl font-ubuntu font-bold text-charcoal">
                <span className="text-primary">SJ Pro</span> Cleaning
              </div>
            </Link>

            {/* Center Logo Image - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 md:left-[38%]  hidden lg:block">
              <img
                src="/1.png"
                alt="SJ Pro Cleaning Logo"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </div>

            {/* Center Logo Image - Tablet/Mobile */}
            <div className="absolute  transform -translate-x-1/2 left-[70%] sm:left-[65%]  bottom-0 lg:hidden">
              <img
                src="/torronto-1.svg"
                alt="SJ Pro Cleaning Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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

            {/* Mobile/Tablet menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal hover:text-primary transition-colors duration-200 z-60 relative"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile/Tablet Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-full sm:w-80 bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img
                    src="/sjlogo.png"
                    alt="SJ Cleaning Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="text-lg font-ubuntu font-bold text-charcoal">
                  SJ Cleaning
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal hover:text-primary transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-xl font-openSans font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-charcoal'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Call Now Button */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  handleCallNow();
                  setIsOpen(false);
                }}
                className="w-full bg-primary text-white py-4 rounded-2xl font-openSans font-semibold text-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;