// src/components/AlchemicalIndexPanel.jsx - FINAL FIX (Z-INDEX)

import React from 'react';

export default function AlchemicalIndexPanel({ isOpen, onClose }) {
  const panelClasses = isOpen 
    ? 'opacity-100' 
    : 'opacity-0 pointer-events-none';

  return (
    // FINAL UPDATE: Added zIndex: 9999 to the inline style.
    // This forces the panel to render on top of all other elements, including the site's main navigation bar.
    // This solves the core problem of element stacking order.
    <div 
      className={`fixed inset-0 transition-opacity duration-500 ease-in-out ${panelClasses}`}
      style={{ 
        backgroundColor: 'black',
        zIndex: 9999 
      }} 
    >
      
      <div className="w-full h-full p-8 text-cream font-body">
        
        <div className="flex justify-between items-center animate-fade-in-fast">
          <h2 className="text-3xl md:text-4xl font-fancy-title tracking-wider text-cream">The Alchemical Index</h2>
          <div 
            onClick={onClose}
            className="text-xl font-body-light text-cream/60 hover:text-white hover:cursor-pointer transition-colors duration-300"
          >
            [ CLOSE ]
          </div>
        </div>

        <div className="mt-16 text-center text-cream/40 animate-fade-in-fast" style={{animationDelay: '0.3s'}}>
          <p>Filtering controls will materialize here.</p>
        </div>

      </div>
    </div>
  );
}