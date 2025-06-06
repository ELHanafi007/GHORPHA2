// src/components/TheTransformationSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function TheTransformationSection() {
  const navigate = useNavigate();

  // Animation variants for Framer Motion
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, duration: 1.5 }
    }
  };

  return (
    <motion.section 
      className="about-transformation-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={textVariants}>
        <h2 className="text-5xl md:text-7xl font-fancy-title font-bold mb-8">
          The Vow
        </h2>
        <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-8 font-body-light leading-relaxed">
          <p>
            This is for everyone on the verge of their own transformation. For those who know they are destined for more but just need the first key to unlock the first door.
          </p>
          <p className="font-semibold text-cream">
            Ghorpha 27 is that key. It is the first step in your calculated glow-up. It is the proof that you don't have to wait to become who you were always meant to be.
          </p>
        </div>
      </motion.div>

      <motion.div variants={textVariants} transition={{delay: 0.5}}>
         <button
            onClick={() => navigate('/fragrances')}
            className="mt-16 group px-12 py-5 bg-blood-red text-white font-semibold rounded-lg shadow-xl hover:bg-red-800 transition duration-700 ease-in-out drop-shadow-lg animate-pulse tracking-wider text-lg transform hover:scale-105"
        >
            Begin Your Alchemy
        </button>
      </motion.div>
    </motion.section>
  );
}