import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesPreview from '../components/ServicesPreview';
import WorkShowcase from '../components/WorkShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SJ Pro Cleaning Services - Professional Cleaning in Toronto | Free Quote</title>
        <meta name="description" content="Professional residential and commercial cleaning services in Toronto, Ontario. Eco-friendly cleaning solutions for homes and offices. Free quotes available. Call (416) 838-6535." />
        <meta name="keywords" content="cleaning services Toronto, residential cleaning Toronto, commercial cleaning Toronto, house cleaning Toronto, office cleaning Toronto, eco-friendly cleaning, professional cleaners Toronto, SJ Pro Cleaning" />
        <link rel="canonical" href="https://sjprocleaning.ca" />
        <meta property="og:title" content="SJ Pro Cleaning Services - Professional Cleaning in Toronto" />
        <meta property="og:description" content="Professional residential and commercial cleaning services in Toronto, Ontario. Eco-friendly cleaning solutions for homes and offices. Free quotes available." />
        <meta property="og:url" content="https://sjprocleaning.ca" />
      </Helmet>
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesPreview />
        <WorkShowcase />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;