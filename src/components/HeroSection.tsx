import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface HeroSectionProps {
  onAuthClick: () => void;
}

const HeroSection = ({ onAuthClick }: HeroSectionProps) => {
  const { user } = useAuth();

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* EverUnity Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/35d2b96f-0f92-478c-9568-d5c31acb116c.png" 
              alt="EverUnity Church Logo" 
              className="h-20 w-auto mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            EverUnity Church
            <br />
            <span className="text-2xl md:text-3xl text-amber-700">Professional Wedding Officiant</span>
            <br />
            <span className="text-2xl md:text-3xl text-amber-700">AI Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The complete AI-powered marriage officiant platform with intelligent wedding ceremony scripts, 
            legal marriage requirements, officiant certification, and professional wedding tools. 
            Perfect for ministers, celebrants, and wedding officiants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {!user ? (
              <>
                <Button size="lg" onClick={onAuthClick} className="bg-amber-600 hover:bg-amber-700">
                  Start Your Officiant Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-amber-50 hover:border-amber-200">
                  View Wedding Scripts Demo
                </Button>
              </>
            ) : (
              <Button size="lg" onClick={() => document.getElementById('scripts')?.scrollIntoView({ behavior: 'smooth' })} className="bg-amber-600 hover:bg-amber-700">
                Create Wedding Ceremony Script
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Personalized Wedding Scripts</h3>
              <p className="text-gray-600 text-center">AI-generated marriage ceremony scripts tailored for every couple and officiant style</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Marriage License Guidance</h3>
              <p className="text-gray-600 text-center">State-specific marriage requirements, legal documentation, and officiant regulations</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Officiant Certification</h3>
              <p className="text-gray-600 text-center">Professional wedding officiant tools, certificates, and ceremony planning resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
