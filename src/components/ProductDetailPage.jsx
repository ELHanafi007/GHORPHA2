// src/components/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js'; // Import our product data

export default function ProductDetailPage() {
  // Get the 'productId' from the URL (e.g., 'ghorpha_01')
  const { productId } = useParams();

  // Find the specific product from our data array
  const product = products.find(p => p.id === productId);

  // If no product is found for the given ID, show a "not found" message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-cream text-center p-8 font-body">
        <h1 className="text-4xl font-fancy-title mb-4">Essence Not Found</h1>
        <p className="text-lg text-cream/70 mb-8">This memory has faded from the archive.</p>
        <Link to="/fragrances" className="text-blood-red hover:underline">
          Return to the Fragrance Room.
        </Link>
      </div>
    );
  }

  // If the product IS found, display it with our unique theme
  return (
    <div className="min-h-screen bg-black text-cream pt-28 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* Left Side: Product Image */}
        <div className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl shadow-black">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover"/>
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col text-left py-4">
          <h1 className="text-5xl md:text-6xl font-fancy-title text-cream mb-4">{product.name}</h1>
          <p className="text-lg text-cream/70 font-body-light italic mb-8">
            {/* The Story */}
            "{product.description}" 
          </p>

          {/* The Alchemical Notes */}
          <div className="space-y-6 border-l-2 border-blood-red/30 pl-6 mb-10">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-cream/50">The Essence</h3>
              <p className="text-lg font-body">A fleeting impression. The invitation.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-cream/50">The Heart</h3>
              <p className="text-lg font-body">The core experience. The transformation.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-cream/50">The Echo</h3>
              <p className="text-lg font-body">What lingers in memory. The haunting.</p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-4xl font-fancy-title">${product.price}</span>
            <button className="px-8 py-4 bg-blood-red text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
              Acquire Essence
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}