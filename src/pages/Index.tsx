
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import LeanSigmaSection from '@/components/LeanSigmaSection';
import ProjectManagementSection from '@/components/ProjectManagementSection';
import PLMSection from '@/components/PLMSection';
import DemoSection from '@/components/DemoSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionSection />
      <LeanSigmaSection />
      <ProjectManagementSection />
      <PLMSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
