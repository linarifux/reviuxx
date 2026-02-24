import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null); // For magnetic hover effect
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  const navLinks = [
    { name: t('nav.about', 'About Us'), path: '/about' },
    { name: t('nav.software', 'The Software'), path: '/software' },
    { name: t('nav.pricing', 'Pricing'), path: '/pricing' },
    { name: t('nav.faqs', 'FAQs'), path: '/faqs' },
    { name: t('nav.contact', 'Contact'), path: '/contact' },
  ];

  // Mobile Animation Variants
  const mobileMenuVars = {
    initial: { opacity: 0, backdropFilter: 'blur(0px)' },
    animate: { 
      opacity: 1, 
      backdropFilter: 'blur(16px)',
      transition: { duration: 0.4, staggerChildren: 0.08, delayChildren: 0.1 } 
    },
    exit: { opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.3 } }
  };

  const mobileLinkVars = {
    initial: { opacity: 0, y: 20, rotateX: -15 },
    animate: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      
      {/* Dynamic Glass Pill Container */}
      <motion.div
        layout
        className={`pointer-events-auto relative flex items-center justify-between w-full max-w-7xl transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/70 backdrop-blur-2xl rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        {/* Animated Gradient Border (Only visible when scrolled) */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full border border-white/10 pointer-events-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#D2042D]/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50 group relative">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center">
            Revi<span className="text-[#D2042D] transition-colors duration-300">uxx</span>
            <Sparkles size={14} className="text-[#D2042D] opacity-0 group-hover:opacity-100 group-hover:animate-pulse ml-1 transition-opacity" />
          </div>
        </Link>

        {/* Desktop Navigation - Magnetic Tabs */}
        <nav className="hidden md:flex items-center gap-2" onMouseLeave={() => setHoveredPath(null)}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const isHovered = hoveredPath === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive || isHovered ? 'text-white' : 'text-gray-400'
                }`}>
                  {link.name}
                </span>
                
                {/* Hover Background - Fluidly moves between links */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}

                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#D2042D] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <button 
            onClick={toggleLanguage}
            className="group flex items-center gap-1.5 px-3 py-2 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors rounded-full" />
            <Globe size={16} className="group-hover:rotate-180 transition-transform duration-700 ease-in-out relative z-10" />
            <span className="relative z-10">{i18n.language === 'de' ? 'DE' : 'EN'}</span>
          </button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-[#D2042D] hover:text-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('nav.login', 'Login')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-full focus:outline-none relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 w-full h-screen bg-[#050505]/90 pointer-events-auto md:hidden pt-32 px-6 flex flex-col z-40"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div variants={mobileLinkVars} key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between"
                    >
                      <span className={`text-4xl font-extrabold tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                      }`}>
                        {link.name}
                      </span>
                      <ChevronRight size={24} className={`transition-all ${isActive ? 'text-[#D2042D] translate-x-0' : 'text-transparent -translate-x-4 group-hover:text-gray-500 group-hover:translate-x-0'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={mobileLinkVars} className="mt-auto mb-12 flex flex-col gap-4">
              <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent w-full mb-6" />
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => { toggleLanguage(); setIsOpen(false); }}
                  className="flex items-center justify-center gap-2 text-white text-sm font-medium py-4 bg-white/5 rounded-2xl border border-white/5 active:bg-white/10 transition-colors"
                >
                  <Globe size={18} />
                  {i18n.language === 'de' ? 'EN Version' : 'DE Version'}
                </button>
                
                <button className="bg-[#D2042D] text-white py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(210,4,45,0.4)]">
                  {t('nav.login', 'Login')}
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;