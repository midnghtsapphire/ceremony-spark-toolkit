
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsPage from '@/components/ProductsPage';
import AuthModal from '@/components/AuthModal';
import { useState } from 'react';

const Products = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={() => setShowAuthModal(true)} />
      <ProductsPage />
      <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Products;
