import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  service: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      comment: "SJ Pro Cleaning transformed our home! Their attention to detail is incredible. The team was professional, punctual, and used eco-friendly products that were safe for our kids and pets.",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300",
      service: "Residential Cleaning"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, ON",
      rating: 5,
      comment: "Outstanding commercial cleaning service! They've been cleaning our office for 6 months now, and our workplace has never looked better. Highly reliable and professional team.",
      avatar: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300",
      service: "Commercial Cleaning"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Toronto, ON",
      rating: 5,
      comment: "I'm so impressed with their eco-friendly cleaning approach. My apartment smells fresh and clean without any harsh chemical odors. The before and after difference was amazing!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      service: "Eco-Friendly Cleaning"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Toronto, ON",
      rating: 5,
      comment: "Needed a deep clean after our renovation, and SJ Pro Cleaning exceeded expectations. They handled all the dust and debris perfectly. Will definitely use them again!",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300",
      service: "Post-Construction Clean"
    },
    {
      id: 5,
      name: "Lisa Wang",
      location: "Toronto, ON",
      rating: 5,
      comment: "Fantastic service! They accommodate our busy schedule perfectly and always leave our home spotless. The team is trustworthy and goes above and beyond every time.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
      service: "Regular Cleaning"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? "text-accent fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-lightBlue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-ubuntu font-bold text-charcoal mb-6">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-charcoal/70 font-openSans max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-fade-in">
            <div className="mb-8">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
              />
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-charcoal font-openSans leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].comment}"
            </blockquote>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-ubuntu font-bold text-charcoal text-lg mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-charcoal/60 font-openSans text-sm mb-2">
                {testimonials[currentIndex].location}
              </p>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                {testimonials[currentIndex].service}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-charcoal" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} className="text-charcoal" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-charcoal/20 hover:bg-charcoal/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h5 className="font-ubuntu font-bold text-charcoal">
                    {testimonial.name}
                  </h5>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-charcoal/70 font-openSans text-sm line-clamp-3">
                "{testimonial.comment.substring(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;