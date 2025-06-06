// src/components/ScrollToTop.jsx - UPGRADED VERSION
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, and we're on the homepage, scroll to the element
    if (hash && pathname === '/') {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Use a short timeout to ensure the element has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, or on a different page, scroll to the top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Effect runs when path or hash changes

  return null; // This component doesn't render anything
}