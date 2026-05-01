/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header, Footer } from './components/Navigation';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About, Contact } from './pages/AboutAndContact';
import { Checkout } from './pages/Checkout';
import { Account, Wishlist, Lookbook } from './pages/PersonalPages';
import { SupportPage } from './pages/SupportPage';
import { motion, AnimatePresence } from 'motion/react';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <CartDrawer />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/new-arrivals" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/best-sellers" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/sale" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/collection/:slug" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
              <Route path="/account" element={<PageWrapper><Account /></PageWrapper>} />
              <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
              <Route path="/lookbook" element={<PageWrapper><Lookbook /></PageWrapper>} />
              
              {/* Supporting Pages */}
              <Route path="/faq" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/shipping-and-returns" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/order-tracking" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/size-guide" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/reviews" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/privacy-policy" element={<PageWrapper><SupportPage /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><SupportPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}
