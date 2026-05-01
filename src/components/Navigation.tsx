import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Heart, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'Collections', path: '/shop' },
    { name: 'Story', path: '/about' },
  ];

  const rightNavLinks = [
    { name: 'Account', path: '/account' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 px-6 md:px-12 flex items-center",
      isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md border-b border-black/5" : "bg-transparent"
    )}>
      <nav className="w-full flex items-center justify-between">
        {/* Left Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 flex-1">
          {leftNavLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                "text-[11px] uppercase tracking-[0.1em] font-medium transition-opacity",
                pathname === link.path ? "opacity-100 border-b border-black" : "opacity-60 hover:opacity-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-none text-center">
          <Link to="/" className="text-xl md:text-2xl font-display tracking-[0.4em] font-bold uppercase transition-all duration-500">
            VANCLAIRES
          </Link>
        </div>

        {/* Right Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 flex-1 justify-end">
          {rightNavLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                "text-[11px] uppercase tracking-[0.1em] font-medium transition-opacity",
                pathname === link.path ? "opacity-100 border-b border-black" : "opacity-60 hover:opacity-100"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setIsCartOpen(true)} 
            className={cn(
              "text-[11px] uppercase tracking-[0.1em] font-medium transition-opacity",
              cartCount > 0 ? "opacity-100" : "opacity-60 hover:opacity-100"
            )}
          >
            Cart ({cartCount})
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white h-screen border-t border-black/5 p-12 flex flex-col gap-10"
          >
            {[...leftNavLinks, ...rightNavLinks].map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display font-semibold tracking-tighter uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-black/5 flex flex-col gap-6">
               <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium opacity-60">Wishlist</Link>
               <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium opacity-60">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-strip h-16 md:h-20 bg-luxury-cream border-t border-black/5 flex items-center justify-between px-6 md:px-12 text-[10px] uppercase font-medium tracking-[0.1em] opacity-50">
      <div className="hidden md:block">&copy; 2026 Vanclaires International</div>
      <div className="text-center md:text-left">Free Global Shipping on Orders Over ₦500,000</div>
      <div className="hidden lg:block">NGN (₦) / English</div>
    </footer>
  );
};
