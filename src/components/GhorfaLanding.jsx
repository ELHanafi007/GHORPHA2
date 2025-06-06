// src/components/GhorfaLanding.jsx - UPDATED
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // 👈 IMPORT THIS

export default function GhorfaLanding() {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate(); // 👈 GET THE NAVIGATE FUNCTION

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0a0a0a";
    document.documentElement.style.color = "#eee";
    return () => {
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.color = "";
    };
  }, []);

  // 👇 THIS FUNCTION IS NOW UPDATED
  const handleEnterClick = () => {
    setIsEntering(true); // Start the entry animation
    
    // After the animation, navigate to the chambers page
    setTimeout(() => {
      navigate('/chambers'); 
    }, 1500); // Matches the duration of the entry-overlay animation
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 overflow-hidden text-cream text-center">
      {/* ... (The rest of your JSX and style block remains the same) ... */}
      {/* Background and Overlay divs */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat animate-background-pan"
        style={{ backgroundImage: "url('/new-background.jpg')", backgroundColor: '#000' }}
      ></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0 pointer-events-none" />

      {/* Main Content */}
      <div className={`relative z-10 max-w-5xl w-full mx-auto transition-opacity transition-transform duration-700 ease-out ${
          isEntering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        {/* ... (h1 and p tags remain the same) ... */}
        <h1 
          className="text-6xl md:text-8xl font-fancy-title font-extrabold tracking-wider mb-4 drop-shadow-[0_0_20px_rgba(178,34,34,0.7)] animate-flicker animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Ghorpha 27
        </h1>
        <p className="text-xl md:text-2xl font-body italic opacity-90 mb-4 tracking-wide animate-fade-in" style={{ animationDelay: '1.2s' }}>
          The Room Has Opened.
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-80 font-body-light animate-fade-in" style={{ animationDelay: '1.5s' }}>
          Fragrance is memory encrypted in air.
        </p>
        
        {/* Button with updated text and logic */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <button
            onClick={handleEnterClick}
            className="group px-12 py-5 bg-blood-red text-white font-semibold rounded-lg shadow-xl hover:bg-red-800 transition duration-700 ease-in-out drop-shadow-lg animate-pulse tracking-wider text-lg transform hover:scale-105"
            disabled={isEntering}
          >
            <span className="relative block h-7 w-48"> 
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out group-hover:opacity-0">
                Enter The Ghorpha
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 text-lg">
                Proceed?
              </span>
            </span>
          </button>
        </div>
      </div>
      {/* ... (The rest of your JSX and style block remains the same) ... */}
      <div className={`fixed inset-0 bg-black flex items-center justify-center text-cream text-4xl font-fancy-title z-[60] transition-opacity duration-1000 ease-in-out ${isEntering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {isEntering && <span className="animate-fade-in-out-slow text-center px-4">Loading...</span>}
      </div>
      <style>{`
        /* ... All your existing animations ... */
        @keyframes fade-in { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { opacity: 0; animation: fade-in 1s ease-out forwards; }
        @keyframes fade-in-out-slow { 0% { opacity: 0; transform: translateY(20px); } 50% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
        .animate-fade-in-out-slow { animation: fade-in-out-slow 2.5s ease-in-out forwards; }
        /* ... flicker, pulse, background-pan ... */
      `}</style>
    </section>
  );
}