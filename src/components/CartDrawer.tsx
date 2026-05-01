import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-white z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-[11px] uppercase tracking-[0.15em] font-bold">Your Bag ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:opacity-50 transition-opacity">
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 hide-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
                  <p className="text-sm font-light text-black/50">Your luxury bag is currently empty.</p>
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/shop'); }}
                    className="text-[10px] uppercase tracking-[0.2em] font-medium border-b border-black pb-1 hover:opacity-50 transition-opacity"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-24 aspect-[3/4] bg-luxury-beige overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs tracking-wider font-medium hover:opacity-50"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-[10px] text-black/50 uppercase tracking-widest">{item.selectedColor} / {item.selectedSize}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-black/10 px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="hover:opacity-50"><Minus size={12} /></button>
                          <span className="text-[10px] font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="hover:opacity-50"><Plus size={12} /></button>
                        </div>
                        <span className="text-xs font-medium">₦{((item.salePrice || item.price) * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-luxury-cream">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Subtotal</span>
                  <span className="text-sm font-medium tracking-wider">₦{cartTotal.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}
                  className="w-full bg-black text-white py-4 text-[10px] uppercase tracking-[0.3em] font-medium flex items-center justify-between px-6 hover:bg-black/90 transition-colors"
                >
                  Proceed to Checkout
                  <ArrowRight size={14} />
                </button>
                <p className="text-[9px] text-center mt-4 text-black/40 uppercase tracking-widest font-light">
                  Free express shipping on orders over ₦500,000
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
