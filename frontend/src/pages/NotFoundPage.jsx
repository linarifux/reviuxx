import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, SearchX } from 'lucide-react';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-4">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Animated subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Deep Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#D2042D]/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none" 
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <div className="absolute inset-0 bg-[#D2042D] blur-xl opacity-20 rounded-full"></div>
          <div className="relative bg-white/10 p-5 rounded-full border border-white/10 backdrop-blur-md">
            <SearchX size={48} className="text-[#D2042D]" />
          </div>
        </motion.div>

        {/* 404 Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-8xl sm:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 leading-none mb-4"
        >
          404
        </motion.h1>

        {/* Translated Title & Message */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          {t('404.title', 'Page Not Found')}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-md font-medium"
        >
          {t('404.message', "Sorry, the page you are looking for doesn't exist, has been moved, or is temporarily unavailable.")}
        </motion.p>

        {/* Return Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="group relative flex items-center justify-center gap-2 bg-[#D2042D] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(210,4,45,0.4)] hover:bg-red-700 hover:shadow-[0_0_30px_rgba(210,4,45,0.6)] transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Home size={18} className="relative z-10 group-hover:-translate-y-0.5 transition-transform" />
            <span className="relative z-10">{t('404.button', 'Go Back Home')}</span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default NotFoundPage;