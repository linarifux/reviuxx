import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a cookie choice
    const consent = localStorage.getItem('reviuxx_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('reviuxx_cookie_consent', 'accepted');
    // Here you would typically initialize Google Analytics, Facebook Pixel, etc.
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('reviuxx_cookie_consent', 'declined');
    // Here you ensure tracking scripts remain disabled
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto w-full max-w-4xl bg-[#111111]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6">
            
            {/* Icon & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="hidden sm:flex bg-white/10 p-3 rounded-full">
                <Cookie className="text-[#D2042D]" size={24} />
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('cookieBanner.message')}
                  {' '}
                  <Link to="/privacy" className="text-[#D2042D] hover:text-white transition-colors underline underline-offset-2">
                    {t('cookieBanner.privacyLink')}
                  </Link>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 text-sm font-semibold text-gray-400 hover:text-white bg-transparent border border-white/10 hover:bg-white/5 rounded-full transition-colors whitespace-nowrap"
              >
                {t('cookieBanner.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-bold text-white bg-[#D2042D] hover:bg-red-700 shadow-[0_0_15px_rgba(210,4,45,0.4)] rounded-full transition-all whitespace-nowrap"
              >
                {t('cookieBanner.accept')}
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;