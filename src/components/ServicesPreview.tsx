import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Leaf, Settings, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Professional home cleaning services tailored to your needs. Regular maintenance or deep cleaning.",
      image: "residance.png",
      features: ["Living rooms & bedrooms", "Kitchen deep clean", "Bathroom sanitization", "Custom scheduling"],
      pricing: "Starting from $80/visit"
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Comprehensive office and commercial space cleaning for businesses of all sizes.",
      image: "hero-3.png",
      features: ["Office spaces", "Meeting rooms", "Washroom maintenance", "Floor care"],
      pricing: "Custom quotes based on space size"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning solutions using environmentally safe products and methods.",
      image: "eco.png",
      features: ["Non-toxic products", "Safe for pets & kids", "Biodegradable cleaners", "HEPA filtration"],
      pricing: "Same competitive rates as standard cleaning"
    },
    {
      icon: Settings,
      title: "Custom Cleaning",
      description: "Specialized cleaning services designed around your specific requirements and schedule.",
      image: "4.png",
      features: ["Move-in/out cleaning", "Post-construction", "Event cleaning", "One-time service"],
      pricing: "Quoted based on specific requirements"
    }
  ];

  return (
    <section className="py-20 bg-lightBlue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-ubuntu font-bold text-charcoal mb-6">
            Our <span className="text-primary">Cleaning Services</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-openSans max-w-3xl mx-auto">
            From residential homes to commercial offices, we provide comprehensive cleaning solutions 
            that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    onClick={() => window.location.href = 'tel:+14168386535'}
                    className="flex-1 bg-charcoal text-white py-3 rounded-2xl font-openSans font-medium hover:bg-charcoal/90 transition-all duration-200 hover:scale-105"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/services')}
            className="bg-charcoal text-white px-8 py-4 rounded-full font-openSans font-semibold hover:bg-charcoal/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto group"
          >
            <span>View All Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;