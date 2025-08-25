import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-ubuntu font-bold text-lightBlue">
                SJ PRO
              </div>
              <div className="text-lg text-white font-ubuntu">
                CLEANING
              </div>
            </div>
            <p className="text-lightBlue text-lg font-ubuntu mb-4">
              "We clean, you relax."
            </p>
            <p className="text-gray-300 font-openSans leading-relaxed">
              Professional residential and commercial cleaning services in Toronto. 
              Committed to delivering exceptional cleaning with eco-conscious products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-ubuntu font-bold text-lg mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
              >
                Services
              </Link>
              <Link
                to="/quotation"
                className="block text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
              >
                Quotation
              </Link>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-ubuntu font-bold text-lg mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-lightBlue" />
                <a
                  href="tel:+14168386535"
                  className="text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
                >
                  +1 (416) 838-6535
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-lightBlue" />
                <a
                  href="mailto:info@sjcleaning.ca"
                  className="text-gray-300 hover:text-lightBlue transition-colors duration-200 font-openSans"
                >
                  info@sjcleaning.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-lightBlue" />
                <span className="text-gray-300 font-openSans">
                  Toronto, Ontario
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-lightBlue transition-colors duration-200 hover:scale-110 transform"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-lightBlue transition-colors duration-200 hover:scale-110 transform"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-lightBlue transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-openSans">
            © 2025 SJ Pro Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;