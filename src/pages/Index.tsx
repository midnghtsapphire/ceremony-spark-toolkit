
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScriptGenerator from '@/components/ScriptGenerator';
import LegalGuide from '@/components/LegalGuide';
import CeremonyChecklist from '@/components/CeremonyChecklist';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';
import OnboardingQuiz from '@/components/OnboardingQuiz';

interface OnboardingData {
  ceremonyType: string;
  state: string;
  duration: string;
  experience: string;
}

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [userPreferences, setUserPreferences] = useState<OnboardingData | null>(null);

  const handleOnboardingComplete = (data: OnboardingData) => {
    setUserPreferences(data);
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {showOnboarding && <OnboardingQuiz onComplete={handleOnboardingComplete} />}
      <Header />
      <HeroSection />
      <ScriptGenerator userPreferences={userPreferences} />
      <LegalGuide userState={userPreferences?.state} />
      <CeremonyChecklist />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
