
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScriptGenerator from '@/components/ScriptGenerator';
import LegalGuide from '@/components/LegalGuide';
import CeremonyChecklist from '@/components/CeremonyChecklist';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ScriptGenerator />
      <LegalGuide />
      <CeremonyChecklist />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
