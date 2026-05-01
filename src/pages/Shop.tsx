import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

export const Shop = () => {
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (filterType !== 'All') {
      result = result.filter(p => p.category === filterType);
    }
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [filterType, sortBy]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic mb-6"
          >
            All Collections
          </motion.h1>
          <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/50 max-w-md mx-auto leading-relaxed">
            Curating the finest silhouettes for the nocturnal and the notable.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-6 border-y border-black/5 mb-12">
          <div className="flex items-center gap-8 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
             {['All', 'Dresses', 'Sets', 'Evening', 'Essentials', 'Accessories'].map(cat => (
               <button 
                key={cat}
                onClick={() => setFilterType(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap transition-colors",
                  filterType === cat ? "text-black border-b border-black md:pb-1" : "text-black/40 hover:text-black"
                )}
               >
                 {cat}
               </button>
             ))}
          </div>
          
          <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest font-medium text-black/50">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[10px] uppercase tracking-widest font-bold bg-transparent outline-none cursor-pointer"
              >
                <option>Newest</option>
                <option>Trending</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="hidden md:flex items-center gap-4 border-l border-black/5 pl-8">
               <Grid size={16} className="text-black cursor-pointer" />
               <List size={16} className="text-black/30 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-sm font-light text-black/40">No pieces found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
