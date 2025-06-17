
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings } from 'lucide-react';
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

  const isProductsPage = location.pathname === '/products';
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/ad067bb4-29f4-49d1-833c-2b130bafd091.png" 
                alt="Officiantbot Logo" 
                className="h-10 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-gray-900">Officiantbot</div>
                <div className="text-sm text-gray-600">EverUnity Church</div>
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
  );
};

export default Header;
