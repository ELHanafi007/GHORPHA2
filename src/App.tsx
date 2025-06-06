// src/App.tsx - FINAL, COMPLETE, AND CORRECTED VERSION
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// --- CORE COMPONENTS ---
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// --- PAGE COMPONENTS ---
import ChambersPage from './components/ChambersPage.jsx';
import FragrancesPage from './components/FragrancesPage.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

// --- HOMEPAGE SECTION COMPONENTS ---
import GhorfaLanding from './components/GhorfaLanding.jsx';
import AboutGhorfaSection from './components/AboutGhorfaSection.jsx';
import TheSparkSection from './components/TheSparkSection.jsx';
import TheTransformationSection from './components/TheTransformationSection.jsx'; // This was the missing import
import ContactSection from './components/ContactSection.jsx';


// HELPER COMPONENT 1: This groups all the sections for your main scrolling homepage.
function HomePage() {
  return (
    <>
      <div id="home">
        <GhorfaLanding />
      </div>

      {/* The Narrative Journey */}
      <div id="about">
        <AboutGhorfaSection />          {/* Chapter 1: The Struggle */}
        <TheSparkSection />             {/* Chapter 2: The Spark */}
        <TheTransformationSection />    {/* Chapter 3: The Transformation */}
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}

// HELPER COMPONENT 2: This handles all the page routes and their animations.
function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, filter: 'blur(4px)' },
    in: { opacity: 1, filter: 'blur(0px)' },
    out: { opacity: 0, filter: 'blur(4px)' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.75,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <HomePage />
          </motion.div>
        } />
        <Route path="/chambers" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ChambersPage />
          </motion.div>
        } />
        <Route path="/fragrances" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <FragrancesPage />
          </motion.div>
        } />
         <Route path="/product/:productId" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ProductDetailPage />
          </motion.div>
        } />
        <Route path="*" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <NotFoundPage />
            </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

// MAIN APP COMPONENT: This assembles the whole application.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;