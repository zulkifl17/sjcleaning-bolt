import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, MessageCircle, User, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'm reaching out through your website contact form.

📝 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Service Type: ${formData.serviceType}

💬 *Message:*
${formData.message}

Please get back to me at your earliest convenience. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14168386535?text=${encodedMessage}`, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+14168386535';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sjprocleaningservices@gmail.com';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I found your website and I'm interested in your cleaning services. Could you please provide more information?");
    window.open(`https://wa.me/14168386535?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact SJ Pro Cleaning Services Toronto | Free Quote | (416) 838-6535</title>
        <meta name="description" content="Contact SJ Pro Cleaning Services in Toronto for professional residential and commercial cleaning. Call (416) 838-6535 for free quotes. Located in North York, Ontario." />
        <meta name="keywords" content="contact cleaning services Toronto, cleaning company Toronto phone number, SJ Pro Cleaning contact, Toronto cleaning services quote, North York cleaning services" />
        <link rel="canonical" href="https://sjprocleaning.ca/contact" />
        <meta property="og:title" content="Contact SJ Pro Cleaning Services Toronto | Free Quote" />
        <meta property="og:description" content="Contact SJ Pro Cleaning Services in Toronto for professional residential and commercial cleaning. Call (416) 838-6535 for free quotes." />
        <meta property="og:url" content="https://sjprocleaning.ca/contact" />
      </Helmet>
      <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-skyBlue to-lightBlue">
      {/* Hero Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-ubuntu font-bold text-charcoal mb-6 animate-fade-in">
            Get in Touch <span className="text-primary">With Us</span>
          </h1>
          <p className="text-xl text-charcoal/80 font-openSans max-w-3xl mx-auto animate-slide-up">
            Have questions or need a free cleaning quote? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-ubuntu font-bold text-charcoal mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-lightBlue/10 transition-all duration-300 cursor-pointer group animate-fade-in"
                    onClick={handleCallNow}
                    style={{ animationDelay: '0.1s' }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-ubuntu font-bold text-charcoal mb-1">Phone</h3>
                      <p className="text-primary font-openSans font-medium hover:underline">
                        +1 (416) 838-6535
                      </p>
                      <p className="text-charcoal/60 font-openSans text-sm">Click to call now</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-lightBlue/10 transition-all duration-300 cursor-pointer group animate-fade-in"
                    onClick={handleEmailClick}
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-ubuntu font-bold text-charcoal mb-1">Email</h3>
                      <a
                        href="mailto:sjprocleaningservices@gmail.com"
                        className="text-primary font-openSans font-medium hover:underline block"
                      >
                        sjprocleaningservices@gmail.com
                      </a>
                      <a
                        href="mailto:info@sjprocleaning.ca"
                        className="text-primary font-openSans font-medium hover:underline block"
                      >
                        info@sjprocleaning.ca
                      </a>
                      <p className="text-charcoal/60 font-openSans text-sm">Click to send email</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-lightBlue/10 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-ubuntu font-bold text-charcoal mb-1">Address</h3>
                      <p className="text-charcoal/80 font-openSans">
                        1809 Lawrence Ave West<br />
                        North York, Ontario, M6L 1E3
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-lightBlue/10 transition-all duration-300 cursor-pointer group animate-fade-in"
                    onClick={handleWhatsAppClick}
                    style={{ animationDelay: '0.4s' }}
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                      <MessageCircle size={24} className="text-green-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-ubuntu font-bold text-charcoal mb-1">WhatsApp</h3>
                      <p className="text-green-500 font-openSans font-medium hover:underline">
                        Chat with us instantly
                      </p>
                      <p className="text-charcoal/60 font-openSans text-sm">Quick response guaranteed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <h3 className="font-ubuntu font-bold text-charcoal mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/1Awo55YMGj/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/sj_cleaning_srvices/profilecard/?igsh=YTVnOWt0eDZqemx6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sj-cleaning-services-599a1137a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@sj.cleaning27?_t=ZS-8z4qADzJzCT&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <SiTiktok size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-ubuntu font-bold text-charcoal mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      <User size={20} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans transition-all duration-300 hover:border-primary/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      <Mail size={20} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans transition-all duration-300 hover:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      <Phone size={20} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans transition-all duration-300 hover:border-primary/50"
                      placeholder="+1 (416) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans transition-all duration-300 hover:border-primary/50"
                    >
                      <option value="">Select a service</option>
                      <option value="Residential">Residential Cleaning</option>
                      <option value="Commercial">Commercial Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans transition-all duration-300 hover:border-primary/50 resize-none"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-openSans font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>

                <div className="mt-8 p-6 bg-lightBlue/10 rounded-2xl">
                  <p className="text-charcoal/70 font-openSans text-sm text-center">
                    <MessageCircle size={16} className="inline mr-2" />
                    Your message will be sent via WhatsApp for faster response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-ubuntu font-bold text-white mb-6">
            We clean, you relax. Call us today for spotless spaces.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCallNow}
              className="bg-white text-primary px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </button>
            <button
              onClick={() => window.location.href = '/quotation'}
              className="bg-charcoal text-white px-8 py-4 rounded-full font-openSans font-semibold text-lg hover:bg-charcoal/90 transition-all duration-300 hover:scale-105"
            >
              Get Free Quotation
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;