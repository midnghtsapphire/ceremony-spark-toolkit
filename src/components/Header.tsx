
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAdmin } from '@/hooks/useAdmin';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onAuthClick: () => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  const { user, signOut, subscribed, subscriptionTier } = useAuth();
  const { isAdmin } = useAdmin();
  const location = useLocation();
  const [logoMaximized, setLogoMaximized] = useState(false);

  const isProductsPage = location.pathname === '/products';
  const isHomePage = location.pathname === '/';

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLogoMaximized(true);
  };

  const closeLogo = () => {
    setLogoMaximized(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img 
                  src="/lovable-uploads/35d2b96f-0f92-478c-9568-d5c31acb116c.png" 
                  alt="EverUnity Church Logo" 
                  className="h-10 w-auto cursor-pointer hover:scale-105 transition-transform"
                  onClick={handleLogoClick}
                />
                <div>
                  <div className="text-xl font-bold text-gray-900">WeddingOfficiantBot</div>
                  <div className="text-sm text-gray-600">Lovingly provided by EverUnity Church</div>
                </div>
              </Link>
              {subscribed && (
                <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {subscriptionTier}
                </span>
              )}
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {isProductsPage ? (
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              ) : (
                <>
                  <a href="#scripts" className="text-gray-700 hover:text-gray-900">AI Generator</a>
                  <a href="#library" className="text-gray-700 hover:text-gray-900">Script Library</a>
                  <a href="#legal" className="text-gray-700 hover:text-gray-900">Legal Guide</a>
                  <a href="#checklist" className="text-gray-700 hover:text-gray-900">Checklist</a>
                  <a href="#tools" className="text-gray-700 hover:text-gray-900">Tools</a>
                </>
              )}
              <Link 
                to="/products" 
                className={`hover:text-gray-900 ${isProductsPage ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
              >
                Products
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  {isAdmin && (
                    <Link to="/admin">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Admin
                      </Button>
                    </Link>
                  )}
                  <Button variant="outline" size="sm" onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button onClick={onAuthClick} variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Maximized Logo Modal */}
      {logoMaximized && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-2xl max-h-[90vh] p-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLogo}
              className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 rounded-full p-2"
            >
              <X className="h-4 w-4" />
            </Button>
            <img 
              src="/lovable-uploads/35d2b96f-0f92-478c-9568-d5c31acb116c.png" 
              alt="EverUnity Church Logo - Maximized" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
