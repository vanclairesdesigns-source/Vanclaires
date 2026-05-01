import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-luxury-beige">
        <Link to={`/product/${product.id}`} className="block h-full">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            />
          )}
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white text-black text-[8px] tracking-[0.2em] font-medium px-2 py-1 uppercase scale-90 md:scale-100">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-black text-white text-[8px] tracking-[0.2em] font-medium px-2 py-1 uppercase scale-90 md:scale-100">Best Seller</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-[8px] tracking-[0.2em] font-medium px-2 py-1 uppercase scale-90 md:scale-100">Sale</span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110">
            <Heart size={16} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
            className="flex-1 mx-2 bg-white/80 backdrop-blur-sm h-10 text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-all overflow-hidden whitespace-nowrap px-2"
          >
            Quick Add
          </button>
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110">
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col items-center text-center px-1">
        <Link to={`/product/${product.id}`} className="text-[11px] uppercase tracking-[0.1em] font-semibold hover:opacity-50 transition-opacity">
          {product.name}
        </Link>
        <div className="flex gap-2 items-center mt-1">
          {product.isSale ? (
            <>
              <span className="text-xs font-semibold text-red-500">₦{(product.salePrice ?? 0).toLocaleString()}</span>
              <span className="text-[10px] font-light text-black/30 line-through">₦{product.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="text-xs font-medium text-black/50 tracking-wider">₦{product.price.toLocaleString()}</span>
          )}
        </div>
        <div className="flex gap-1.5 mt-2">
          {product.colors.map(color => (
            <div 
              key={color} 
              className={cn(
                "w-1.5 h-1.5 rounded-full border border-black/10",
                color === 'Noir' ? "bg-black" : color === 'Bone' || color === 'Cream' ? "bg-[#F5F2ED]" : "bg-gray-400"
              )} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
