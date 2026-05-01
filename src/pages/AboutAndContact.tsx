import React from 'react';
import { motion } from 'motion/react';
import { Truck, RotateCcw, ShieldCheck, Mail, MapPin, Phone, Instagram } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] font-medium text-black/50 mb-4"
          >
            Since 2024
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic mb-10"
          >
            A legacy of modern <br /> <span className="not-italic">precision</span>.
          </motion.h1>
          <p className="text-sm font-light text-black/60 leading-relaxed tracking-wider uppercase">
            VanClaires was founded on a simple yet radical idea: that true luxury is not loud. It is the quiet confidence of a perfectly tailored seam, the effortless drape of weighted silk, and the power of a silhouette that commands without needing to shout.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="aspect-[4/5] bg-luxury-beige overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" alt="About" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-serif italic mb-4">Our Vision</h2>
            <p className="text-sm font-light text-black/70 leading-relaxed tracking-widest uppercase">
              We create pieces that transcend seasons. Our design philosophy is rooted in architectural minimalism—taking inspiration from structural forms and translating them into wearable art for the contemporary woman.
            </p>
            <p className="text-sm font-light text-black/70 leading-relaxed tracking-widest uppercase">
              Every garment is a result of meticulous artisanal craftsmanship. We partner with heritage mills in Italy and France to source the finest materials, ensuring that every touch of VanClaires feels like a second skin.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-black/40 underline underline-offset-4">Sustainability</h4>
                <p className="text-[10px] font-light uppercase tracking-widest">Ethically sourced. Limited production. Zero-waste commitment.</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-black/40 underline underline-offset-4">Quality</h4>
                <p className="text-[10px] font-light uppercase tracking-widest">Hand-finished details. Italian silks. French tailoring.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex flex-col gap-12">
          <h1 className="text-6xl font-serif italic tracking-tight">Speak to us.</h1>
          <p className="text-sm font-light text-black/60 uppercase tracking-widest leading-relaxed">
            Our private concierge team is available to assist with product inquiries, sizing consultations, and order assistance.
          </p>
          
          <div className="flex flex-col gap-8 mt-12">
            <div className="flex items-center gap-6">
              <Mail size={20} strokeWidth={1} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Email</span>
                <span className="text-xs font-light text-black/60">concierge@vanclaires.com</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Phone size={20} strokeWidth={1} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Phone</span>
                <span className="text-xs font-light text-black/60">+33 1 45 67 89 00</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <MapPin size={20} strokeWidth={1} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Showroom</span>
                <span className="text-xs font-light text-black/60">24 Avenue Montaigne, Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 shadow-sm border border-black/5">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-12">Inquiry Form</h2>
          <form className="flex flex-col gap-8" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-black/10 pb-4 text-[10px] tracking-widest focus:outline-none focus:border-black transition-colors" />
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-black/10 pb-4 text-[10px] tracking-widest focus:outline-none focus:border-black transition-colors" />
            <select className="w-full bg-transparent border-b border-black/10 pb-4 text-[10px] tracking-widest focus:outline-none focus:border-black transition-colors appearance-none uppercase">
              <option>General Inquiry</option>
              <option>Press & Media</option>
              <option>Wholesale</option>
              <option>Orders & Boutique</option>
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-black/10 pb-4 text-[10px] tracking-widest focus:outline-none focus:border-black transition-colors resize-none" />
            <button className="bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black/90 transition-all mt-8">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
