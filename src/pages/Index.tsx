
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
  const { user, subscribed } = useAuth();
  const { toast } = useToast();

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

  // Load saved preferences if they exist
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('user_preferences');
      if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        setUserPreferences(preferences);
        console.log('Loaded saved preferences:', preferences);
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
      localStorage.removeItem('user_preferences');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Index;
