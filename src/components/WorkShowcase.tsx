import React, { useState, useEffect } from 'react';

interface ShowcaseItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const WorkShowcase: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<{ [key: number]: 'before' | 'after' }>({});
  
  const showcaseItems: ShowcaseItem[] = [
    {
  id: 1,
  title: "Kitchen Deep Clean",
  beforeImage: "images/sink2-before.webp",
  afterImage: "images/sink2-after.webp",
  description: "Complete kitchen transformation with deep cleaning and sanitization"
},
{
  id: 2,
  title: "Bathtub Cleaning",
  beforeImage: "images/tub-before.webp",
  afterImage: "images/tub-after.webp",
  description: "Deep cleaning and restoration of bathtub surfaces"
},
{
  id: 3,
  title: "Comet Makeover",
  beforeImage: "images/comet2-before.webp",
  afterImage: "images/comet2-after.webp",
  description: "Complete comet cleaning and shine restoration"
},
{
  id: 4,
  title: "Bathroom with Shower Makeover",
  beforeImage: "images/bath-before.webp",
  afterImage: "images/bath-after.webp",
  description: "Full bathroom deep clean including shower and tiles"
},
{
  id: 5,
  title: "Sink Cleaning",
  beforeImage: "images/sink-before.webp",
  afterImage: "images/sink-after.webp",
  description: "Detailed sink cleaning with shine and sanitization"
},
{
  id: 6,
  title: "Shower Cleaning",
  beforeImage: "images/shower-before.webp",
  afterImage: "images/shower-after.webp",
  description: "Thorough shower deep clean including tiles, glass, and fixtures"
},
{
  id: 7,
  title: "Commed Cleaning",
  beforeImage: "images/comet-before.webp",
  afterImage: "images/comet-after.webp",
  description: "Intensive Commed surface cleaning for a spotless and refreshed look"
}

  ];

  // Initialize all items to show 'before' images
  useEffect(() => {
    const initialState: { [key: number]: 'before' | 'after' } = {};
    showcaseItems.forEach(item => {
      initialState[item.id] = 'before';
    });
    setCurrentImages(initialState);
  }, []);

  // Auto-toggle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newState = { ...prev };
        showcaseItems.forEach(item => {
          newState[item.id] = newState[item.id] === 'before' ? 'after' : 'before';
        });
        return newState;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleImage = (id: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-ubuntu font-bold text-charcoal mb-6">
            Our <span className="text-primary">Work</span> in Action
          </h2>
          <p className="text-xl text-charcoal/70 font-openSans max-w-3xl mx-auto mb-8">
            See the dramatic transformation our professional cleaning services can achieve. 
            Click any image to toggle between before and after views.
          </p>
          <div className="flex justify-center space-x-4 text-sm font-openSans">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-charcoal/60">Before</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-charcoal/60">After</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Large featured item */}
          <div 
            className="md:col-span-2 lg:col-span-2 md:row-span-2 cursor-pointer group"
            onClick={() => toggleImage(showcaseItems[0].id)}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <img
                src={currentImages[showcaseItems[0].id] === 'before' 
                  ? showcaseItems[0].beforeImage 
                  : showcaseItems[0].afterImage}
                alt={showcaseItems[0].title}
                className="w-full h-full object-cover fade-transition transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentImages[showcaseItems[0].id] === 'before' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  {currentImages[showcaseItems[0].id] === 'before' ? 'BEFORE' : 'AFTER'}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-ubuntu font-bold text-xl mb-2">
                  {showcaseItems[0].title}
                </h3>
                <p className="text-white/90 font-openSans text-sm">
                  {showcaseItems[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Medium items */}
          {showcaseItems.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer group"
              onClick={() => toggleImage(item.id)}
            >
              <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={currentImages[item.id] === 'before' ? item.beforeImage : item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover fade-transition transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-3 right-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentImages[item.id] === 'before' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {currentImages[item.id] === 'before' ? 'BEFORE' : 'AFTER'}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-ubuntu font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-openSans text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Small items */}
          {showcaseItems.slice(3).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer group"
              onClick={() => toggleImage(item.id)}
            >
              <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={currentImages[item.id] === 'before' ? item.beforeImage : item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover fade-transition transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-3 right-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentImages[item.id] === 'before' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {currentImages[item.id] === 'before' ? 'BEFORE' : 'AFTER'}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-ubuntu font-bold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-openSans text-xs">
                    Click to toggle
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal/60 font-openSans">
            Images automatically switch every 4 seconds, or click to toggle manually
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;