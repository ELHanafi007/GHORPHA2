// src/components/TheSparkSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TheSparkSection() {
  // Animation variants for Framer Motion
  const sparkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, delay: 0.3 }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, delay: 0.8, duration: 1 }
    }
  };

  return (
    <motion.section 
      className="about-spark-section"
      // This triggers the animation when the section is 50% in view
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* The Spark Element */}
      <motion.div className="spark-element" variants={sparkVariants}></motion.div>

      {/* The Story Text */}
      <motion.div className="spark-content" variants={textVariants}>
        <p>
          Amidst the noise of self-doubt, scrolling through a digital haze, a single, defiant idea pierced through the static.
        </p>
        <p>
          A brand. Not just of things, but of a feeling. A key forged in a hotel's night shift, a coordinate marking a city on a map ('27') and a private room ('Ghorpha') for the mind.
        </p>
      </motion.div>
    </motion.section>
  );
}