// src/components/FragrancesPage.jsx - UPDATED
import React, { useState, useEffect, useMemo } from 'react';
import VipPopup from './VipPopup.jsx';
import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function FragrancesPage() {
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // State to track the active filter

  useEffect(() => {
    const timer = setTimeout(() => { setShowVipPopup(true); }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  // Memoize the filtered products to avoid re-calculating on every render
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') {
      return products;
    }
    return products.filter(p => p.category === activeFilter);
  }, [activeFilter]); // This only re-runs when activeFilter changes

  // Placeholder functions for VIP popup
  const handleVipLogin = () => { /* ... */ };
  const handleNotVip = () => { /* ... */ };

  return (
    <div className="min-h-screen bg-black text-cream p-8 pt-28 font-body">
      {/* Header with improved styling */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-fancy-title text-cream mb-4 drop-shadow-[0_0_15px_rgba(178,34,34,0.5)]">
          The Fragrances Room
        </h1>
        <p className="text-lg text-cream/60 font-body-light">An archive of scents that defy time.</p>
      </header>

      {/* Updated Category Filters with active state styling */}
      <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <button onClick={() => setActiveFilter('all')} className={`filter-button ${activeFilter === 'all' ? 'active-filter' : ''}`}>All</button>
        <button onClick={() => setActiveFilter('men')} className={`filter-button ${activeFilter === 'men' ? 'active-filter' : ''}`}>Men</button>
        <button onClick={() => setActiveFilter('women')} className={`filter-button ${activeFilter === 'women' ? 'active-filter' : ''}`}>Women</button>
        <button onClick={() => setActiveFilter('unisex')} className={`filter-button ${activeFilter === 'unisex' ? 'active-filter' : ''}`}>Unisex</button>
      </div>

      {/* Product Grid - Renders filtered products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* VIP Pop-up logic remains the same */}
      {showVipPopup && (
        <VipPopup
          onClose={() => setShowVipPopup(false)}
          onVipLogin={handleVipLogin}
          onNotVip={handleNotVip}
        />
      )}
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            opacity: 0; /* Start hidden */
            animation: fade-in 1s ease-out forwards;
          }
       `}</style>
    </div>
  );
}