import React from 'react';
import { Shield, Users, Leaf, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Fully insured and bonded professional cleaners"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our team uses industry-leading techniques"
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Environmental-friendly products and methods"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on every service"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-lightBlue/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-ubuntu font-bold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal/70 font-openSans text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning team"
                className="w-full h-[500px] object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl">
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