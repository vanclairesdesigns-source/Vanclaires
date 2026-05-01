import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, Heart, Share2, Ruler, Truck, RotateCcw, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return (
    <div className="pt-40 text-center pb-24">
      <h1 className="text-4xl font-serif italic mb-6">Product Not Found</h1>
      <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black">Return to Boutique</Link>
    </div>
  );

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 mb-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/40">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/collection/${product.category.toLowerCase()}`} className="hover:text-black">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 w-full md:w-20">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`aspect-[3/4] w-20 bg-luxury-beige overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-black' : 'border-transparent'}`}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 aspect-[3/4] bg-luxury-beige overflow-hidden relative">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.isNew && (
               <span className="absolute top-6 left-6 bg-white text-black text-[9px] tracking-[0.3em] font-medium px-3 py-1.5 uppercase">New Season</span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/40">{product.category}</span>
            <div className="flex gap-4">
              <button className="hover:opacity-50 transition-opacity"><Share2 size={18} strokeWidth={1.5} /></button>
              <button className="hover:opacity-50 transition-opacity"><Heart size={18} strokeWidth={1.5} /></button>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">{product.name}</h1>
          <div className="flex gap-4 items-center mb-8">
            {product.isSale ? (
              <>
                <span className="text-2xl font-light">₦{product.salePrice.toLocaleString()}</span>
                <span className="text-lg font-light text-black/30 line-through">₦{product.price.toLocaleString()}</span>
              </>
            ) : (
              <span className="text-2xl font-light">₦{product.price.toLocaleString()}</span>
            )}
          </div>

          <p className="text-sm font-light text-black/70 leading-relaxed mb-10 border-t border-black/5 pt-8">
            {product.description}
          </p>

          {/* Selection */}
          <div className="flex flex-col gap-8 mb-10">
            {/* Color */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Color: <span className="text-black/50">{selectedColor}</span></span>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                  >
                    <div className={`w-6 h-6 rounded-full border border-black/5 ${color === 'Noir' ? 'bg-black' : color === 'Bone' || color === 'Cream' ? 'bg-[#FDFCF9]' : 'bg-gray-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Size: <span className="text-black/50">{selectedSize}</span></span>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium border-b border-black md:pb-1">
                  <Ruler size={12} /> Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 text-[10px] uppercase tracking-widest font-medium transition-all border ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black/10 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col gap-4 mb-12">
            <button 
              onClick={() => addToCart(product, selectedSize, selectedColor)}
              className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-black/90 transition-colors shadow-lg"
            >
              Add to Luxury Bag
            </button>
            <p className="text-[9px] text-center text-black/40 tracking-[0.2em] font-light">LIMITED QUANTITY AVAILABLE. SHIPPING WORLDWIDE.</p>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-black/5">
             <div className="flex items-start gap-4">
               <Truck size={18} strokeWidth={1} />
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Complimentary Delivery</span>
                 <p className="text-[10px] font-light text-black/60 uppercase">Express 2-3 business days</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <RotateCcw size={18} strokeWidth={1} />
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] uppercase tracking-[0.2em] font-medium">14-Day Returns</span>
                 <p className="text-[10px] font-light text-black/60 uppercase">Hassle-free collection</p>
               </div>
             </div>
          </div>
          
          {/* Accordion (Material & Care) */}
          <div className="mt-12 flex flex-col gap-0">
             <details className="group border-y border-black/5 py-4 cursor-pointer">
               <summary className="list-none flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium">
                 Composition & Care
                 <Plus size={14} className="group-open:rotate-45 transition-transform" />
               </summary>
               <div className="pt-6 pb-2 text-[11px] font-light text-black/60 leading-relaxed uppercase tracking-widest">
                 <p className="mb-4">Primary: {product.material}</p>
                 <p>{product.care}</p>
                 <ul className="mt-4 flex flex-col gap-2">
                   {product.details.map((d, i) => <li key={i}>• {d}</li>)}
                 </ul>
               </div>
             </details>
             <details className="group border-b border-black/5 py-4 cursor-pointer">
               <summary className="list-none flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium">
                 Authenticity Guarantee
                 <Plus size={14} className="group-open:rotate-45 transition-transform" />
               </summary>
               <div className="pt-6 pb-2 text-[11px] font-light text-black/60 leading-relaxed uppercase tracking-widest">
                 Each VanClaires piece undergoes multiple quality inspections and includes a unique digital certificate of authenticity.
               </div>
             </details>
          </div>
        </div>
      </div>

      {/* Complete the Look / Related */}
      <section className="mt-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif italic mb-4">Complete the Look</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-black/40">Suggested by our stylists</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
