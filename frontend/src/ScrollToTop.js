// src/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 1. The utility function for your Navbar buttons
export const scrollToTop = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// 2. A component that automatically scrolls to top on route change
export const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Instant scroll so there's no weird jumping effect
    });
  }, [pathname]);

  return null;
};