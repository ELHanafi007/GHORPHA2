// src/components/ChambersPage.jsx - FINAL VERSION
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChambersPage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const enterFragranceRoom = () => {
    setIsNavigating(true); // Trigger the outbound animation

    // Wait for the animation to finish before navigating
    setTimeout(() => {
      navigate('/fragrances');
    }, 1000); // This duration should match your CSS animation
  };

  return (
    <div className={`chambers-container ${isNavigating ? 'navigating' : ''}`}>
      {/* Content that questions the user's very identity */}
<div className="chambers-content">
  <h1 className="text-5xl md:text-7xl font-fancy-title mb-8">
    The First Key
  </h1>
  <p className="text-xl md:text-2xl mb-12 max-w-2xl font-body-light leading-relaxed">
    The other doors will not open for the person you are now.
    <br/><br/>
    To earn the other keys, you must first be remade.
    <br/><br/>
    Your <span className="text-blood-red font-semibold italic">alchemy</span> begins in the Room of Fragrances.
  </p>
</div>

      {/* The Portal Button stays the same */}
      <div className="portal-button-container">
        <button
          onClick={enterFragranceRoom}
          className="portal-button"
          aria-label="Enter the Room of Fragrances"
        >
          <span className="portal-peek"></span>
          <span className="portal-text">Enter</span>
        </button>
      </div>
    </div>
  );
}
