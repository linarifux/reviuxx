// src/components/ScrollToTop.jsx (or src/utils/ScrollToTop.js)

export const scrollToTop = (e) => {
  // Prevent default routing behavior if attached to an anchor tag or Link
  if (e) e.preventDefault();
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Optional: If you ever need an automatic scroll-to-top on route change wrapper
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};