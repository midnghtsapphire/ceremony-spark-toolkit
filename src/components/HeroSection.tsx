
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
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Beautiful
            <span className="text-blue-600"> Wedding Ceremonies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered tools to help officiants create personalized, memorable ceremonies. 
            From scripts to legal guidance, everything you need in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {!user ? (
              <>
                <Button size="lg" onClick={onAuthClick}>
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </>
            ) : (
              <Button size="lg" onClick={() => document.getElementById('scripts')?.scrollIntoView({ behavior: 'smooth' })}>
                Create Your Script
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Personalized Scripts</h3>
              <p className="text-gray-600 text-center">AI-generated ceremony scripts tailored to each couple</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Legal Guidance</h3>
              <p className="text-gray-600 text-center">State-specific requirements and documentation</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Professional Tools</h3>
              <p className="text-gray-600 text-center">Complete toolkit for ceremony planning and execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
