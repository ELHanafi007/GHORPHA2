// src/components/FragrancesPage.jsx - UPDATED

import React, { useState, useEffect, useMemo } from 'react';
import VipPopup from './VipPopup.jsx';
import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import AlchemicalIndexPanel from './AlchemicalIndexPanel.jsx'; // NEW: Import the panel

export default function FragrancesPage() {
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false); // NEW: State for our panel

  // NOTE: For now, this just shows all products. 
  // We will connect this to the Alchemical Index state later.
  const filteredProducts = products; 

  useEffect(() => {
    const timer = setTimeout(() => { setShowVipPopup(true); }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  // Placeholder functions for VIP popup
  const handleVipLogin = () => { /* ... */ };
  const handleNotVip = () => { /* ... */ };

  return (
    <div className="min-h-screen bg-black text-cream p-8 pt-28 font-body">
      {/* Header with improved styling */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-fancy-title text-cream mb-4 drop-shadow-[0_0_15px_rgba(178,34,34,0.5)]">
          The Fragrance Archive
        </h1>
        <p className="text-lg text-cream/60 font-body-light">An archive of scents that defy time.</p>
      </header>

      {/* REPLACED: Old buttons are gone. New Refine button is here. */}
      <div className="flex justify-center items-center mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div 
          onClick={() => setIsIndexOpen(true)}
          className="refine-button"
        >
          [ REFINE THE ARCHIVE ]
        </div>
      </div>

      {/* Product Grid - Renders filtered products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* NEW: Render the Alchemical Index Panel */}
      <AlchemicalIndexPanel 
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
      />

      {/* VIP Pop-up logic remains the same */}
      {showVipPopup && (
        <VipPopup
          onClose={() => setShowVipPopup(false)}
          onVipLogin={handleVipLogin}
          onNotVip={handleNotVip}
        />
      )}

      {/* Styles are preserved and new styles are added */}
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-fast {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            opacity: 0;
            animation: fade-in 1s ease-out forwards;
          }
          .animate-fade-in-fast {
            opacity: 0;
            animation: fade-in-fast 0.5s ease-out forwards;
          }

          /* NEW: Styling for our Refine button */
          .refine-button {
            border: 1px solid rgba(245, 245, 220, 0.2); /* cream with low opacity */
            padding: 10px 20px;
            font-family: 'Courier New', 'monospace';
            font-size: 1rem;
            letter-spacing: 0.1em;
            color: rgba(245, 245, 220, 0.6);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .refine-button:hover {
            background-color: rgba(245, 245, 220, 0.05);
            border-color: rgba(245, 245, 220, 0.8);
            color: rgba(245, 245, 220, 1);
          }
       `}</style>
    </div>
  );
}