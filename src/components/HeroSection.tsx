
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Perfect Wedding
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Ceremonies
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert officiant toolkit with AI-powered scripts, legal compliance guides, 
            and ceremony management tools. Feel confident officiating any wedding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Generate Your First Script
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Check Legal Requirements
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mt-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Scripts</h3>
              <p className="text-gray-600">Customize ceremony scripts for any style or tradition</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mt-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-600">State-specific requirements and official forms</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-pink-600 mx-auto mt-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ceremony Management</h3>
              <p className="text-gray-600">Step-by-step guides and day-of checklists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
