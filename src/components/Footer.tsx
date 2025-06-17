
import React from 'react';
import { Heart, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Officiantbot</h3>
                <p className="text-amber-200 text-sm">AI-Powered Wedding Officiant Assistant</p>
              </div>
            </div>
            <p className="text-amber-200 mb-6 max-w-md">
              Empowering professional officiants with AI-powered tools, comprehensive legal guidance, and 
              intelligent ceremony scripts for exceptional wedding experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Tools</h4>
            <ul className="space-y-2 text-amber-200">
              <li><a href="#scripts" className="hover:text-white transition-colors">Script Generator</a></li>
              <li><a href="#legal" className="hover:text-white transition-colors">Legal Compliance</a></li>
              <li><a href="#checklist" className="hover:text-white transition-colors">Ceremony Checklist</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Expert Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expert Resources</h4>
            <ul className="space-y-2 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">Professional Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">State Requirements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-amber-200 text-sm">
              © 2024 Officiantbot. All rights reserved.
            </p>
            <p className="text-amber-300 text-sm">
              Powered by <span className="text-amber-100 font-medium">Glowstar Labs</span>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
