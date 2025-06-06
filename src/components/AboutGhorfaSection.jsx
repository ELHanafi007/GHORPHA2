// src/components/AboutGhorfaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutGhorfaSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Vignette gradient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/60 to-black z-0" />

      {/* Optional animated light glow */}
      <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 py-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Chapter I: The Struggle
        </motion.h2>

        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-zinc-200 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Ghorpha 27 was not born from success, but from defiance.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            It was forged in the quiet hours of a night shift, an idea that refused to be silenced by disappointment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            It is the answer to a relentless inner voice that demands more from a world that often closes its doors.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 z-10 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
