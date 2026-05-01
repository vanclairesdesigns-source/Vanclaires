import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, COLLECTIONS } from '../data/products';

export const Home = () => {
  return (
    <div className="pt-0">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[90vh] flex items-stretch overflow-hidden bg-white">
        <div className="flex-1 relative bg-[#E8E4DF] flex items-end p-12 md:p-20 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000" 
              alt="VanClaires Hero" 
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
          
          <div className="relative z-10 max-w-2xl text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 block"
            >
              Spring / Summer 26
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter leading-[0.85] mb-12 uppercase"
            >
              Modern<br />Femininity
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Link to="/shop" className="inline-block px-10 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-all duration-300">
                Shop New Arrivals
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Visual Accent Text */}
        <div className="absolute top-1/2 right-[360px] transform -translate-y-1/2 rotate-90 hidden xl:block">
           <span className="text-[10px] letter-spacing-luxury font-bold opacity-30 whitespace-nowrap">
             Editorial Collection No. 04 — Paris Studio
           </span>
        </div>
      </section>

      {/* SECTION 2 — FEATURED COLLECTIONS (Professional Polish Style) */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center gap-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">
              Curated<br />Essentials
            </h2>
            <p className="text-sm font-light text-black/50 uppercase tracking-widest max-w-sm mx-auto md:mx-0">
              The foundation of a luxury wardrobe, reimagined with structural precision.
            </p>
            <Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] font-bold border-b-2 border-black w-fit pb-1 mx-auto md:mx-0">
              Explore Collection
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {PRODUCTS.slice(0, 2).map((product, idx) => (
                <div key={product.id} className="aspect-[3/4] bg-luxury-cream overflow-hidden">
                   <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BEST SELLERS */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/50 mb-4">Curated for you</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">The Best Sellers</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {PRODUCTS.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-all">
              Discover Full Boutique
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BRAND POSITIONING */}
      <section className="py-32 bg-luxury-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1200" 
                alt="Brand Vision" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute -bottom-10 -right-10 bg-white p-12 hidden md:block max-w-sm border border-black/5"
            >
              <h4 className="text-2xl font-serif mb-4 italic">“Precision in every stitch, elegance in every movement.”</h4>
              <p className="text-xs text-black/60 font-light leading-relaxed">
                VanClaires was born from the belief that modern luxury should not be demanding. It should be an extension of your inherent power.
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-black/40">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight font-serif italic">
              Empowering the modern woman through structural <span className="not-italic">finesse</span>.
            </h2>
            <p className="text-sm text-black/60 font-light leading-relaxed max-w-lg">
              We design for the woman who commands the room before she speaks. Our silhouettes are a celebration of strength, femininity, and the quiet confidence of knowing your worth. At VanClaires, we do not just sell garments; we craft armors of elegance.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {['Sustainably Sourced Silk', 'Italian Virgin Wool', 'Artisanal Tailoring', 'Limited Batch Production'].map(feat => (
                <div key={feat} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOCIAL PROOF */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 justify-center md:justify-start">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="black" />)}
              </div>
              <h3 className="text-3xl font-light italic font-serif">“The most confident I’ve ever felt in a gown.”</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-black/40">— ELENA V., VOGUE MAGAZINE</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale transition-all hover:grayscale-0">
               <span className="font-display font-bold tracking-widest">ELLE</span>
               <span className="font-display font-bold tracking-widest">VOGUE</span>
               <span className="font-display font-bold tracking-widest">BAZAAR</span>
               <span className="font-display font-bold tracking-widest">MARIE CLAIRE</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LOOKBOOK (Grid Style) */}
      <section className="py-24 px-4 bg-luxury-cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[3/4] overflow-hidden translate-y-12">
            <img src="https://images.unsplash.com/photo-1574015974293-817f0efebb1b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lookbook" />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lookbook" />
          </div>
          <div className="aspect-[3/4] overflow-hidden translate-y-24">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lookbook" />
          </div>
          <div className="aspect-[3/4] overflow-hidden translate-y-6">
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lookbook" />
          </div>
        </div>
        <div className="text-center mt-32">
          <Link to="/lookbook" className="text-[10px] uppercase tracking-[0.4em] font-medium border-b border-black pb-2">View Spring Editorial</Link>
        </div>
      </section>

      {/* SECTION 7 — NEWSLETTER */}
      <section className="py-32 bg-luxury-black text-white px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-10">
           <h2 className="text-4xl md:text-6xl font-light italic font-serif">Join the VanClaires World</h2>
           <p className="text-sm font-light text-white/60 tracking-wider">Early access to seasonal drops, private viewing events, and artisanal insights in Lagos and beyond.</p>
           <div className="flex flex-col md:flex-row gap-4 mt-6">
             <input type="email" placeholder="YOUR EMAIL ADDRESS" className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-[10px] tracking-widest focus:outline-none focus:border-white transition-colors" />
             <button className="bg-white text-black px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-luxury-beige transition-colors">Subscribe</button>
           </div>
        </div>
      </section>
    </div>
  );
};
