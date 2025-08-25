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
      features: ["Living rooms & bedrooms", "Kitchen deep clean", "Bathroom sanitization", "Custom scheduling"]
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Comprehensive office and commercial space cleaning for businesses of all sizes.",
      features: ["Office spaces", "Meeting rooms", "Washroom maintenance", "Floor care"]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning solutions using environmentally safe products and methods.",
      features: ["Non-toxic products", "Safe for pets & kids", "Biodegradable cleaners", "HEPA filtration"]
    },
    {
      icon: Settings,
      title: "Custom Cleaning",
      description: "Specialized cleaning services designed around your specific requirements and schedule.",
      features: ["Move-in/out cleaning", "Post-construction", "Event cleaning", "One-time service"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={32} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-ubuntu font-bold text-charcoal mb-4">
                {service.title}
              </h3>
              
              <p className="text-charcoal/70 font-openSans mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-charcoal/60 font-openSans">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/quotation')}
                className="w-full bg-primary text-white py-3 rounded-2xl font-openSans font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                Get Quote
              </button>
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