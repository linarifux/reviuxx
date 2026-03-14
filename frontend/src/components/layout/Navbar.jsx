import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronRight, Sparkles, UserCircle } from 'lucide-react';

// Import the scrollToTop function (Ensure this file exists in your project)
import { scrollToTop } from '../ScrollToTop';

import Logo from '../../assets/logo.png'; // Optional: If you have a logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activePath, setActivePath] = useState('/');
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home', 'Home'), path: '/' },
    { name: t('nav.about', 'About Us'), path: '#about' },
    { name: t('nav.software', 'The Software'), path: '#software' },
    { name: t('nav.pricing', 'Pricing'), path: '#pricing' },
    { name: t('nav.faqs', 'FAQs'), path: '#faqs' },
    { name: t('nav.contact', 'Contact'), path: '#contact' },
  ];

  // Dynamic Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar Background State
      setScrolled(window.scrollY > 20);

      // 2. Dynamic Scroll Spy
      // Automatically extract IDs from the navLinks array
      const sectionIds = navLinks
        .filter(link => link.path.startsWith('#'))
        .map(link => link.path.substring(1));
        
      let currentActive = '/';
      const scrollPosition = window.scrollY + 150; // Buffer for navbar height

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            currentActive = `#${id}`;
          }
        }
      }

      // Edge case: Snap to last section if scrolled to the absolute bottom
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        currentActive = `#${sectionIds[sectionIds.length - 1]}`;
      }

      setActivePath(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  // Smooth scroll handler
  const handleScrollToSection = (e, path) => {
    if (path === '/') {
      if (location.pathname === '/') {
        scrollToTop(e);
      }
      return;
    }

    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVars = {
    initial: { opacity: 0, y: '-100%' },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08, delayChildren: 0.1 } 
    },
    exit: { opacity: 0, y: '-20%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const mobileLinkVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      
      {/* Main Navbar Container */}
      <motion.div
        layout
        className={`pointer-events-auto relative flex items-center justify-between w-full max-w-7xl transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/80 backdrop-blur-xl rounded-full py-3 px-4 md:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/5'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        {/* Shimmer Effect when Scrolled */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#D2042D]/20 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo */}
        <Link 
          to="/" 
          onClick={(e) => {
            if (location.pathname === '/') {
              scrollToTop(e);
              setHoveredPath(null);
            }
          }}
        > 

          <div className="logo">
            <img src={Logo} alt="Reviuxx Logo" className="w-20 object-contain" />
          </div>

          {/* <div className="tracking-tighter flex items-center">
            
            
          </div> */}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHoveredPath(null)}>
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            const isHovered = hoveredPath === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleScrollToSection(e, link.path)}
                onMouseEnter={() => setHoveredPath(link.path)}
                className="relative px-4 py-2 text-sm font-bold tracking-wide transition-colors"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive || isHovered ? 'text-white' : 'text-gray-400'
                }`}>
                  {link.name}
                </span>
                
                {/* Hover Pill */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D2042D] rounded-full shadow-[0_0_8px_rgba(210,4,45,0.8)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login & Language Toggle */}
        <div className="hidden lg:flex items-center gap-4 z-10">
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="group flex items-center gap-1.5 px-3 py-2 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-bold relative overflow-hidden"
          >
            <Globe size={16} className="group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <span>{i18n.language === 'de' ? 'DE' : 'EN'}</span>
          </button>

          {/* Primary Login Button */}
          <Link to="https://my.climbo.com/#/login" onClick={() => setHoveredPath(null)}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-2 bg-[#D2042D] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(210,4,45,0.4)] hover:bg-red-700 hover:shadow-[0_0_25px_rgba(210,4,45,0.6)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center gap-1.5">
                <UserCircle size={16} />
                {t('nav.login', 'Login')}
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-full focus:outline-none bg-white/5 border border-white/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-2xl pointer-events-auto lg:hidden pt-32 px-6 flex flex-col z-40 border-b border-white/10"
          >
            
            {/* Nav Links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = activePath === link.path;
                  
                return (
                  <motion.div variants={mobileLinkVars} key={link.name}>
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleScrollToSection(e, link.path);
                      }}
                      className="group flex items-center justify-between border-b border-white/5 pb-4"
                    >
                      <span className={`text-3xl font-black tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                      }`}>
                        {link.name}
                      </span>
                      <ChevronRight size={28} className={`transition-all ${isActive ? 'text-[#D2042D] translate-x-0' : 'text-transparent -translate-x-4 group-hover:text-gray-500 group-hover:translate-x-0'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Bottom Actions */}
            <motion.div variants={mobileLinkVars} className="mt-auto mb-10 flex flex-col gap-4">
              
              <button 
                onClick={() => { toggleLanguage(); setIsOpen(false); }}
                className="flex items-center justify-center gap-2 text-gray-300 font-bold py-4 bg-white/5 rounded-2xl border border-white/10 active:bg-white/10 transition-colors w-full"
              >
                <Globe size={18} />
                Switch to {i18n.language === 'de' ? 'English' : 'Deutsch'}
              </button>

              <Link to="https://my.climbo.com/#/login" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full bg-[#D2042D] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(210,4,45,0.4)] active:scale-[0.98] transition-transform">
                  <UserCircle size={18} />
                  {t('nav.login', 'Login')}
                </button>
              </Link>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;