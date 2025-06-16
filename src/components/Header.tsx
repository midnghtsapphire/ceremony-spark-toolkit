
import React from 'react';
import { Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Digital Officiant Toolkit</h1>
              <p className="text-xs text-gray-500">Expert Wedding Ceremony Guide</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#scripts" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Scripts
            </a>
            <a href="#legal" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Legal Guide
            </a>
            <a href="#checklist" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Checklist
            </a>
            <a href="#tools" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Tools
            </a>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
