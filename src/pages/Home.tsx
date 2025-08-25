import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesPreview from '../components/ServicesPreview';
import WorkShowcase from '../components/WorkShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <WorkShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;