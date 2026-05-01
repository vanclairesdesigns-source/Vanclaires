import React from 'react';
import { motion } from 'motion/react';
import { Heart, User, LogOut, Package, CreditCard, Bell } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export const Account = () => {
  return (
    <div className="pt-32 pb-24 bg-luxury-cream min-h-screen px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex justify-between items-end">
           <div>
              <h1 className="text-5xl font-serif italic mb-2">My Account</h1>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/40">Welcome, Vanessa</p>
           </div>
           <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-black/50 hover:text-black">
              Sign Out <LogOut size={12} />
           </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="flex flex-col gap-4">
             {[
               { icon: User, name: 'Personal Details' },
               { icon: Package, name: 'Order History' },
               { icon: CreditCard, name: 'Payment Methods' },
               { icon: Bell, name: 'Notifications' }
             ].map((item, idx) => (
               <button key={item.name} className={`flex items-center gap-4 p-4 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/5 hover:bg-white transition-all ${idx === 0 ? 'bg-white border-black/10' : 'bg-transparent'}`}>
                 <item.icon size={16} strokeWidth={1.5} />
                 {item.name}
               </button>
             ))}
          </aside>
          <main className="lg:col-span-3 bg-white p-12 shadow-sm border border-black/5">
             <h2 className="text-2xl font-serif italic mb-8">Personal Details</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] uppercase tracking-widest font-bold text-black/40">Full Name</label>
                   <p className="text-xs tracking-widest font-medium uppercase underline underline-offset-4 decoration-black/10">Vanessa Aghomovanessa</p>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] uppercase tracking-widest font-bold text-black/40">Email</label>
                   <p className="text-xs tracking-widest font-medium uppercase underline underline-offset-4 decoration-black/10">aghomovanessa@gmail.com</p>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[9px] uppercase tracking-widest font-bold text-black/40">Shipping Address</label>
                   <p className="text-xs tracking-widest font-medium uppercase underline underline-offset-4 decoration-black/10 text-black/40 italic">Add Address</p>
                </div>
             </div>
             <button className="mt-12 bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-colors">
                Update Information
             </button>
          </main>
        </div>
      </div>
    </div>
  );
};

export const Wishlist = () => {
  return (
    <div className="pt-32 pb-24 bg-luxury-cream min-h-screen px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
           <h1 className="text-5xl font-serif italic mb-4">My Wishlist</h1>
           <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/40">Your curated selection of luxury silhouettes.</p>
        </header>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {PRODUCTS.slice(0, 2).map((product, idx) => (
             <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Lookbook = () => {
  return (
    <div className="pt-32 pb-24">
      <header className="mb-24 text-center px-6">
        <p className="text-[10px] uppercase tracking-[0.5em] font-medium text-black/50 mb-4">Editorial</p>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Nocturnal Dreams</h1>
        <p className="text-sm font-light text-black/60 tracking-widest uppercase">Paris, Winter 2026. Photographed by VanClaires Editorial Studio.</p>
      </header>

      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-8 md:gap-24 px-6 md:px-12 max-w-7xl mx-auto">
           <div className="w-full aspect-video bg-luxury-beige overflow-hidden">
             <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Editorial" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="aspect-[3/4] bg-luxury-beige overflow-hidden">
               <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Editorial" />
             </div>
             <p className="text-lg md:text-3xl font-serif italic text-center md:text-left leading-relaxed">
               “The collection pieces were designed to catch the soft moonlight reflecting off Parisian limestone.”
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
