import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  // Handle scroll effect for the glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.features', 'Features'), path: '/features' },
    { name: t('nav.pricing', 'Pricing'), path: '/pricing' },
    { name: t('nav.about', 'About Us'), path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tighter text-white"
            >
              Revi<span className="text-[#D2042D]">uxx</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions (Language & CTA) */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              <Globe size={16} />
              {i18n.language === 'de' ? 'DE' : 'EN'}
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D2042D] hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-[0_0_15px_rgba(210,4,45,0.4)]"
            >
              {t('nav.getStarted', 'Get Started')}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-lg font-medium px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-2" />
              
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-gray-300 hover:text-white text-lg font-medium px-2 py-1"
              >
                <Globe size={20} />
                {i18n.language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              </button>
              
              <button className="bg-[#D2042D] text-white px-5 py-3 rounded-xl font-medium mt-4 w-full">
                {t('nav.getStarted', 'Get Started')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;