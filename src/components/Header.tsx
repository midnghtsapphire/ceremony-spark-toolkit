
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
  onAuthClick: () => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  const { user, signOut, subscribed, subscriptionTier } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">CeremonyPro</h1>
            {subscribed && (
              <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {subscriptionTier}
              </span>
            )}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#scripts" className="text-gray-700 hover:text-gray-900">Scripts</a>
            <a href="#legal" className="text-gray-700 hover:text-gray-900">Legal Guide</a>
            <a href="#checklist" className="text-gray-700 hover:text-gray-900">Checklist</a>
            <a href="#tools" className="text-gray-700 hover:text-gray-900">Tools</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">{user.email}</span>
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
