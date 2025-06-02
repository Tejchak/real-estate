import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ImageGallerySection from './ImageGallerySection';
import ValuePropositionSection from './ValuePropositionSection';
import CallToActionSection from './CallToActionSection';
import FooterSection from './FooterSection';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ImageGallerySection />
      <ValuePropositionSection />
      <CallToActionSection />
      <FooterSection />
      {/* Other sections will go here */}
    </>
  );
};

export default LandingPage;
