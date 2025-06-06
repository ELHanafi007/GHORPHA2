// src/components/Navbar.jsx - FINAL VERSION WITH CORRECT ACTIVE LINK LOGIC
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // 👈 Import useLocation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation(); // 👈 Get the current path and hash from the URL

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // This is the base style for all our links
  const linkBaseClass = "text-cream relative group px-2 py-1 transition-all duration-300 hover:text-blood-red hover:-translate-y-px transform";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-4 md:px-12 md:py-8 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/" /* ... */ >Ghorpha 27</NavLink>

      {/* Desktop Navigation Links with new, smarter active logic */}
      <div className="hidden md:flex items-center space-x-12 text-xl font-body relative z-[100]">

        <NavLink to="/#home" className={`${linkBaseClass} ${pathname === '/' && hash === '#home' ? 'active-link' : ''}`}>
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blood-red transition-all duration-500 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/#about" className={`${linkBaseClass} ${pathname === '/' && hash === '#about' ? 'active-link' : ''}`}>
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blood-red transition-all duration-500 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/chambers" className={`${linkBaseClass} ${pathname === '/chambers' ? 'active-link' : ''}`}>
          The Chambers
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blood-red transition-all duration-500 group-hover:w-full"></span>
        </NavLink>

        <NavLink to="/#contact" className={`${linkBaseClass} ${pathname === '/' && hash === '#contact' ? 'active-link' : ''}`}>
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blood-red transition-all duration-500 group-hover:w-full"></span>
        </NavLink>

        {/* We will add the cart icon back in here in the next step */}
      </div>

      {/* ... (Your mobile menu button and overlay JSX remain the same) ... */}
      {/* We will update the mobile menu logic as well after confirming this works */}
      <div className="md:hidden relative z-[100]">
        {/* ... Hamburger Button ... */}
      </div>
      <div className={`fixed inset-0 ... ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* ... Mobile Menu ... */}
      </div>
    </nav>
  );
}