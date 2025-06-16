
import React from 'react';
import { Heart, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Digital Officiant Toolkit</h3>
                <p className="text-gray-400 text-sm">Expert Wedding Ceremony Guide</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering officiants with professional tools, legal guidance, and 
              AI-powered ceremony scripts for unforgettable weddings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#scripts" className="hover:text-white transition-colors">Script Generator</a></li>
              <li><a href="#legal" className="hover:text-white transition-colors">Legal Guide</a></li>
              <li><a href="#checklist" className="hover:text-white transition-colors">Ceremony Checklist</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Professional Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">State Requirements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Digital Officiant Toolkit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
