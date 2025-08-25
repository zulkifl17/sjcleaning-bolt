import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Leaf, Settings, Phone, Sparkles } from 'lucide-react';
import WorkShowcase from '../components/WorkShowcase';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services designed to keep your living space fresh, healthy, and welcoming. We handle everything from regular maintenance to deep cleaning sessions.",
      image: "residance.png",
      features: [
        "Living rooms and bedrooms deep cleaning",
        "Kitchen appliances and surfaces sanitization", 
        "Bathroom deep scrubbing and disinfection",
        "Floor cleaning and carpet care",
        "Dusting and window cleaning",
        "Flexible scheduling options"
      ],
      pricing: "Starting from $80/visit"
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning services that create a productive and healthy work environment for your employees and clients.",
      image: "hero-3.png",
      features: [
        "Office spaces and workstations",
        "Meeting and conference rooms",
        "Reception and common areas",
        "Washroom maintenance and supplies",
        "Floor care and carpet cleaning",
        "Daily, weekly, or monthly service"
      ],
      pricing: "Custom quotes based on space size"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning solutions using environmentally safe, non-toxic products that protect your family, pets, and the planet while delivering exceptional results.",
      image: "eco.png",
      features: [
        "100% non-toxic cleaning products",
        "Safe for children and pets",
        "Biodegradable and eco-friendly solutions",
        "HEPA filtration vacuum systems",
        "Minimal environmental impact",
        "Certified green cleaning methods"
      ],
      pricing: "Same competitive rates as standard cleaning"
    },
    {
      icon: Settings,
      title: "Custom Cleaning Solutions",
      description: "Specialized cleaning services tailored to your unique needs and schedule. Perfect for one-time deep cleans, move-ins/outs, and special events.",
      image: "4.png",
      features: [
        "Move-in and move-out cleaning",
        "Post-construction cleanup",
        "Pre and post-event cleaning",
        "Seasonal deep cleaning services",
        "Emergency cleaning services",
        "Customized service packages"
      ],
      pricing: "Quoted based on specific requirements"
    }
  ];

  const handleCallNow = () => {
    window.location.href = 'tel:+14168386535';
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-ubuntu font-bold text-charcoal mb-6">
            Our <span className="text-primary">Cleaning Services</span>
          </h1>
          <p className="text-xl text-charcoal/80 font-openSans max-w-3xl mx-auto mb-8">
            Professional cleaning solutions for residential and commercial properties. 
            Experience the difference that expert care and attention to detail makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quotation')}
              className="bg-primary text-white px-8 py-4 rounded-full font-openSans font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Sparkles size={20} />
              <span>Get Free Quote</span>
            </button>
            <button
              onClick={handleCallNow}
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-openSans font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 image-overlay">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-ubuntu font-bold text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-charcoal/80 font-openSans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-ubuntu font-bold text-charcoal mb-4">What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-charcoal/70 font-openSans">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6 p-4 bg-lightBlue/10 rounded-2xl">
                    <div>
                      <p className="text-sm text-charcoal/60 font-openSans">Pricing</p>
                      <p className="font-ubuntu font-bold text-primary">{service.pricing}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => navigate('/quotation')}
                      className="flex-1 bg-primary text-white py-3 rounded-2xl font-openSans font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                    >
                      Get Free Quote
                    </button>
                    <button
                      onClick={handleCallNow}
                      className="flex-1 bg-charcoal text-white py-3 rounded-2xl font-openSans font-medium hover:bg-charcoal/90 transition-all duration-200 hover:scale-105"
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <WorkShowcase />

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-ubuntu font-bold text-white mb-6">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl text-white/80 font-openSans mb-8">
            Contact us today for a free consultation and quote. Let us show you why we're 
            Toronto's trusted cleaning service provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quotation')}
              className="bg-primary text-white px-8 py-4 rounded-full font-openSans font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get Your Free Quote
            </button>
            <button
              onClick={handleCallNow}
              className="bg-white text-charcoal px-8 py-4 rounded-full font-openSans font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Call: +1 (416) 838-6535
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;