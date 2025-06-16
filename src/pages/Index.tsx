
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScriptGenerator from '@/components/ScriptGenerator';
import LegalGuide from '@/components/LegalGuide';
import CeremonyChecklist from '@/components/CeremonyChecklist';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';
import OnboardingQuiz from '@/components/OnboardingQuiz';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import AuthModal from '@/components/AuthModal';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface OnboardingData {
  ceremonyType: string;
  state: string;
  duration: string;
  experience: string;
}

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userPreferences, setUserPreferences] = useState<OnboardingData | null>(null);
  const { user, subscribed, loading } = useAuth();
  const { toast } = useToast();

  const handleOnboardingComplete = (data: OnboardingData) => {
    setUserPreferences(data);
    setShowOnboarding(false);
  };

  // Check for success/canceled parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast({
        title: "Payment successful!",
        description: "Your subscription has been activated.",
      });
      // Remove the parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('canceled') === 'true') {
      toast({
        title: "Payment canceled",
        description: "You can try again anytime.",
        variant: "destructive",
      });
      // Remove the parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [toast]);

  // Show onboarding for authenticated users who haven't completed it
  useEffect(() => {
    if (user && !userPreferences) {
      setShowOnboarding(true);
    }
  }, [user, userPreferences]);

  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {showOnboarding && user && <OnboardingQuiz onComplete={handleOnboardingComplete} />}
      <Header onAuthClick={() => setShowAuthModal(true)} />
      <HeroSection onAuthClick={() => setShowAuthModal(true)} />
      
      {/* Premium Features Section */}
      {!user && <SubscriptionPlans />}
      
      <ScriptGenerator userPreferences={userPreferences} />
      <LegalGuide userState={userPreferences?.state} />
      <CeremonyChecklist />
      <ToolsSection />
      
      {/* Show subscription plans for authenticated users */}
      {user && <SubscriptionPlans />}
      
      <Footer />
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Index;
