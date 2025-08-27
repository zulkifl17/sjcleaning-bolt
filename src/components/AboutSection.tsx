import React, { useState } from 'react';
import { Shield, Users, Leaf, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Fully insured and bonded professional cleaners",
      image: "hero-2.png"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our team uses industry-leading techniques",
      image: "residance.png"
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Environmental-friendly products and methods",
      image: "eco.png"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on every service",
      image: "4.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-ubuntu font-bold text-charcoal mb-6">
            Why Choose <span className="text-primary">SJ Pro Cleaning</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <p className="text-lg text-charcoal/80 font-openSans leading-relaxed mb-8">
              At SJ Pro Cleaning, we are committed to delivering exceptional cleaning services 
              tailored to meet the unique needs of both residential and commercial clients. 
              Our team of trained professionals uses industry-leading techniques and eco-conscious 
              products to ensure every space is spotless, safe, and welcoming.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                    selectedFeature === index 
                      ? 'bg-primary/10 border-2 border-primary/20' 
                      : 'hover:bg-lightBlue/10 border-2 border-primary/10'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  {/* Desktop Layout */}
                  <div className="hidden sm:flex items-start space-x-4 w-full">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        selectedFeature === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        <feature.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-ubuntu font-bold mb-2 transition-colors duration-300 ${
                        selectedFeature === index ? 'text-primary' : 'text-charcoal'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-charcoal/70 font-openSans text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex sm:hidden flex-row items-center justify-center text-left w-[80%] h-full ">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      selectedFeature === index ? ' text-primary' : ' text-primary'
                    }`}>
                      <feature.icon size={18} />
                    </div>
                    <h3 className={`font-ubuntu font-bold mt-3 text-sm leading-tight transition-colors duration-300 pl-2 ${
                      selectedFeature === index ? 'text-primary' : 'text-charcoal'
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500">
              <img
                src={features[selectedFeature].image}
                alt={features[selectedFeature].title}
                className="w-full h-[500px] object-cover hover-scale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-charcoal font-ubuntu font-bold text-xl mb-2">
                      {features[selectedFeature].title}
                    </h3>
                    <p className="text-charcoal/70 font-openSans text-sm">
                      {features[selectedFeature].description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-charcoal font-ubuntu font-bold text-xl">
                        500+
                      </p>
                      <p className="text-charcoal/70 font-openSans text-sm">
                        Happy Clients
                      </p>
                    </div>
                    <div>
                      <p className="text-charcoal font-ubuntu font-bold text-xl">
                        5 Years
                      </p>
                      <p className="text-charcoal/70 font-openSans text-sm">
                        Experience
                      </p>
                    </div>
                    <div>
                      <p className="text-charcoal font-ubuntu font-bold text-xl">
                        24/7
                      </p>
                      <p className="text-charcoal/70 font-openSans text-sm">
                        Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;