// src/components/ContactSection.jsx - TEST VERSION WITH ANIMATIONS REMOVED
import React from 'react';

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="w-full min-h-[70vh] flex flex-col justify-center items-center py-20 px-4 bg-black text-cream text-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* 'animate-fade-in' and style attribute removed from h2 */}
        <h2 className="text-5xl md:text-7xl font-fancy-title mb-6">
          An Inquiry
        </h2>

        {/* 'animate-fade-in' and style attribute removed from p */}
        <p className="text-xl md:text-2xl font-body-light opacity-80 mb-10">
          Whispers fade, but echoes remain. Should you need to reach into the void, use the designated channel. Discretion is advised.
        </p>

        {/* 'animate-fade-in' and style attribute removed from div */}
        <div>
          <a 
            href="mailto:contact@ghorpha27.com" // Replace with your actual contact email
            className="inline-block px-10 py-4 border border-blood-red text-blood-red font-semibold rounded-lg hover:bg-blood-red hover:text-white transition-all duration-300"
          >
            Transmit Inquiry
          </a>
        </div>
      </div>
      {/* The style block with the animation definition has also been removed to isolate the issue */}
    </section>
  );
}