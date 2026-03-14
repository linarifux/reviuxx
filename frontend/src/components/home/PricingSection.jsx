import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import BusinessDE from '../pricing/de/BusinessDE';
import BusinessUS from '../pricing/us/BusinessUS';
import PlatinumUS from '../pricing/us/PlatinumUs';
import GoldUS from '../pricing/us/GoldUS';
import SilverUS from '../pricing/us/SilverUS';
import BronzeUS from '../pricing/us/BronzeUS';
import PlatinumDE from '../pricing/de/PlatinumDE';
import GoldDE from '../pricing/de/GoldDE';
import SilverDE from '../pricing/de/SilverDE';
import BronzeDE from '../pricing/de/BronzeDE';


const PricingSection = () => {
  const { t, i18n } = useTranslation();
  
  // Check if the current global language is German
  const isGerman = i18n.language === 'de';

  return (
    <section id="pricing" className="py-24 sm:py-32 px-4 bg-[#FAFAFA] relative overflow-hidden text-gray-800">
      
      {/* Soft Ambient Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header (Fully Translated) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
             <Sparkles size={16} className="text-[#D2042D]" />
             <span className="text-sm font-bold tracking-wider uppercase">Reviuxx Plans</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-6"
          >
            {t('pricing.title', 'Prices and Packages')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium px-4 md:px-0"
          >
            {t('pricing.subtitle', 'Choose the perfect plan to dominate your online reputation.')}
          </motion.p>
        </div>

        {/* Dynamic Pricing Grid with Framer Motion AnimatePresence for smooth swapping */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={isGerman ? 'german-plans' : 'us-plans'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-start justify-center"
          >
            
            {isGerman ? (
              <>
                {/* RENDER GERMAN CARDS HERE */}
                <BusinessDE />
                {/* Uncomment these as we build them! */}
                <PlatinumDE />
                <GoldDE />
                <SilverDE />
                <BronzeDE />
              </>
            ) : (
              <>
                {/* RENDER US CARDS HERE */}
                <BusinessUS />
                <PlatinumUS />
                <GoldUS />
                <SilverUS />
                <BronzeUS />
              </>
            )}

          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
};

export default PricingSection;