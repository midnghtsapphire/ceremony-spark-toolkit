
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScriptGenerator from '@/components/ScriptGenerator';
import ScriptLibrary from '@/components/ScriptLibrary';
import LegalGuide from '@/components/LegalGuide';
import CeremonyChecklist from '@/components/CeremonyChecklist';
import ToolsSection from '@/components/ToolsSection';
import ReviewsSection from '@/components/ReviewsSection';
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
    console.log('Onboarding completed with data:', data);
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
    console.log('Auth state check - loading:', loading, 'user:', !!user, 'userPreferences:', !!userPreferences);
    if (!loading && user && !userPreferences) {
      console.log('Setting showOnboarding to true for user:', user.email);
      setShowOnboarding(true);
    } else {
      console.log('Not showing onboarding - conditions not met');
    }
  }, [user, userPreferences, loading]);

  // Additional debug logging for showOnboarding state
  useEffect(() => {
    console.log('showOnboarding state changed to:', showOnboarding);
  }, [showOnboarding]);

  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  console.log('Rendering Index - showOnboarding:', showOnboarding, 'user:', !!user);

  return (
    <div className="min-h-screen bg-white">
      {showOnboarding && user ? (
        <OnboardingQuiz onComplete={handleOnboardingComplete} />
      ) : (
        <>
          <Header onAuthClick={() => setShowAuthModal(true)} />
          <HeroSection onAuthClick={() => setShowAuthModal(true)} />
          
          {/* Premium Features Section */}
          {!user && <SubscriptionPlans />}
          
          <ScriptGenerator userPreferences={userPreferences} />
          <ScriptLibrary />
          <LegalGuide userState={userPreferences?.state} />
          <CeremonyChecklist />
          <ToolsSection />
          
          {/* Reviews and Social Proof */}
          <ReviewsSection />
          
          {/* Show subscription plans for authenticated users */}
          {user && <SubscriptionPlans />}
          
          <Footer />
        </>
      )}
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Index;
