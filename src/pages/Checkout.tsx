import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center pb-24 h-screen">
        <h1 className="text-4xl font-serif italic mb-6">Your Bag is Empty</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black">Start Shopping</Link>
      </div>
    );
  }

  const handleOrder = () => {
    // Simulate order
    clearCart();
    alert("Order Placed Successfully!");
    navigate('/');
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-cream min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* Progress */}
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-black/30">
            <span className={step >= 1 ? "text-black" : ""}>Shipping</span>
            <ChevronRight size={12} />
            <span className={step >= 2 ? "text-black" : ""}>Payment</span>
            <ChevronRight size={12} />
            <span className={step >= 3 ? "text-black" : ""}>Review</span>
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 bg-white p-10 shadow-sm border border-black/5"
          >
            {step === 1 && (
              <>
                <h2 className="text-2xl font-serif italic">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                  <input type="text" placeholder="Last Name" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                </div>
                <input type="text" placeholder="Address" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                  <input type="text" placeholder="Postal Code" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                  <input type="text" placeholder="Country" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                </div>
                <input type="email" placeholder="Email Address" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                <button 
                  onClick={() => setStep(2)}
                  className="mt-4 bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-colors"
                >
                  Continue to Payment
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-serif italic">Payment Details</h2>
                <div className="flex flex-col gap-4">
                   <div className="p-6 border border-black flex justify-between items-center bg-luxury-beige/30">
                     <span className="text-xs uppercase tracking-widest font-medium">Credit / Debit Card</span>
                     <Lock size={16} />
                   </div>
                   <input type="text" placeholder="Card Number" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                   <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="MM/YY" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                     <input type="text" placeholder="CVV" className="p-4 border border-black/10 focus:border-black outline-none text-xs tracking-widest" />
                   </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-black/50 hover:text-black"
                  >
                    <ArrowLeft size={12} /> Back to Shipping
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-colors"
                  >
                    Continue to Review
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-serif italic">Review Your Order</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 p-4 bg-luxury-beige/20 border border-black/5">
                    <ShieldCheck size={20} className="mt-1" strokeWidth={1} />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-medium uppercase tracking-widest">Luxury Authenticity Guarantee</p>
                      <p className="text-[10px] text-black/50 uppercase leading-relaxed tracking-widest">Your pieces are verified and insured for transit.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-xs tracking-widest text-black/70">
                    <p>Shipping to: 123 Luxury Lane, Fashion District...</p>
                    <p>Payment: **** **** **** 4242</p>
                  </div>
                  <button 
                    onClick={handleOrder}
                    className="mt-6 bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-colors shadow-xl"
                  >
                    Place Order — ₦{cartTotal.toLocaleString()}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-5">
           <div className="bg-white p-10 sticky top-32 border border-black/5">
             <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8">Order Summary</h3>
             <div className="flex flex-col gap-6 mb-10">
               {cart.map(item => (
                 <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                   <div className="w-16 h-20 bg-luxury-beige overflow-hidden">
                     <img src={item.images[0]} alt={item.id} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 flex flex-col justify-center">
                     <p className="text-[10px] uppercase tracking-widest font-bold">{item.name}</p>
                     <p className="text-[10px] text-black/50 uppercase tracking-widest">{item.selectedSize} / {item.selectedColor}</p>
                     <p className="text-[10px] font-bold mt-1">₦{((item.salePrice || item.price) * item.quantity).toLocaleString()}</p>
                   </div>
                 </div>
               ))}
             </div>
             
             <div className="flex flex-col gap-3 py-6 border-y border-black/5">
               <div className="flex justify-between text-[10px] uppercase tracking-[0.2em]">
                 <span className="text-black/40">Subtotal</span>
                 <span>₦{cartTotal.toLocaleString()}</span>
               </div>
               <div className="flex justify-between text-[10px] uppercase tracking-[0.2em]">
                 <span className="text-black/40">Shipping</span>
                 <span>Calculated at checkout</span>
               </div>
               <div className="flex justify-between text-[10px] uppercase tracking-[0.2em]">
                 <span className="text-black/40">Duties & Taxes</span>
                 <span>₦0</span>
               </div>
             </div>
             
             <div className="flex justify-between items-center pt-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Total</span>
                <span className="text-lg font-bold tracking-tighter">₦{cartTotal.toLocaleString()}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
