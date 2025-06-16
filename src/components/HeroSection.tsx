
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Hero image section */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-16 w-16 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600" fill="url(#heart-gradient)" />
                <defs>
                  <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Perfect Wedding
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
              {" "}Ceremonies
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert officiant toolkit with AI-powered scripts, legal compliance guides, 
            and ceremony management tools. Create magical moments with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-200">
              Generate Your First Script ✨
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
              Check Legal Requirements 📋
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mt-2" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Scripts</h3>
              <p className="text-gray-600">Customize ceremony scripts for any style or tradition</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mt-2" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-600">State-specific requirements and official forms</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Heart className="h-8 w-8 text-pink-600 mx-auto mt-2" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ceremony Management</h3>
              <p className="text-gray-600">Step-by-step guides and day-of checklists</p>
            </div>
          </div>

          {/* Decorative wedding elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-60">
            <div className="text-4xl animate-bounce">💍</div>
            <div className="text-4xl animate-bounce delay-200">💐</div>
            <div className="text-4xl animate-bounce delay-400">🎉</div>
            <div className="text-4xl animate-bounce delay-600">💕</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
