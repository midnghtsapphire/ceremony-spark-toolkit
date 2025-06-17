
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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userPreferences, setUserPreferences] = useState<OnboardingData | null>(null);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, subscribed, loading: authLoading } = useAuth();
  const { toast } = useToast();

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log('Onboarding completed with data:', data);
    setUserPreferences(data);
    setHasCompletedOnboarding(true);
    
    // Store in localStorage to persist across sessions
    localStorage.setItem('onboarding_completed', 'true');
    localStorage.setItem('user_preferences', JSON.stringify(data));
    
    toast({
      title: "Setup Complete!",
      description: "Your officiant toolkit has been customized.",
    });
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

  // Initialize onboarding state
  useEffect(() => {
    const initializeApp = () => {
      try {
        const completedOnboarding = localStorage.getItem('onboarding_completed') === 'true';
        const savedPreferences = localStorage.getItem('user_preferences');
        
        console.log('Initializing app - completedOnboarding:', completedOnboarding);
        
        if (completedOnboarding && savedPreferences) {
          const preferences = JSON.parse(savedPreferences);
          setUserPreferences(preferences);
          setHasCompletedOnboarding(true);
          console.log('Loaded saved preferences:', preferences);
        }
      } catch (error) {
        console.error('Error initializing app:', error);
        // Clear invalid data
        localStorage.removeItem('onboarding_completed');
        localStorage.removeItem('user_preferences');
      } finally {
        setLoading(false);
      }
    };

    // Wait for auth to be ready
    if (!authLoading) {
      initializeApp();
    }
  }, [authLoading]);

  if (authLoading || loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  // Determine if we should show onboarding
  const shouldShowOnboarding = user && !hasCompletedOnboarding;

  console.log('Rendering Index - shouldShowOnboarding:', shouldShowOnboarding, 'user:', !!user, 'hasCompletedOnboarding:', hasCompletedOnboarding);

  return (
    <div className="min-h-screen bg-white">
      {shouldShowOnboarding ? (
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
