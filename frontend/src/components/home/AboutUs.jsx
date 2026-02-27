import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Network, Sparkles, Video, Building2, MessageSquareOff } from 'lucide-react';

const AboutUs = () => {
  const { t } = useTranslation();

  // Scroll animation triggers
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Extract branch locations from translations, default to empty array if undefined
  const branchLocations = t('about.cards.branches.locations', { returnObjects: true }) || [];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D2042D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#D2042D] font-bold tracking-wide uppercase text-sm mb-3">
            {t('about.badge', 'About Reviuxx')}
          </h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t('about.title', 'The Ultimate Hub for Your Online Reputation')}
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('about.description', 'Manage reviews in one central location, actively solicit feedback, and optimize customer interaction. Save time and boost your online presence—let us help you succeed!')}
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          
          {/* Card 1: 85+ Platforms (Spans 2 columns on desktop) */}
          <motion.div variants={cardVars} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-8 hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D2042D]/20 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#D2042D]/30 transition-colors" />
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Network size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">85+</h4>
                <h5 className="text-2xl font-bold text-white mb-2">{t('about.cards.platforms.title')}</h5>
                <p className="text-gray-400 font-medium">{t('about.cards.platforms.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI-Powered Responses */}
          <motion.div variants={cardVars} className="relative group overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 hover:border-[#D2042D]/50 transition-colors">
            {/* Animated AI scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D2042D]/10 to-transparent -translate-y-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#D2042D]/20 flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-[#D2042D]" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-2">{t('about.cards.ai.title')}</h5>
                <p className="text-gray-400 text-sm">{t('about.cards.ai.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Private Comments & Video */}
          <motion.div variants={cardVars} className="relative group overflow-hidden rounded-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-8 hover:border-white/20 transition-colors">
            <div className="h-full flex flex-col justify-between">
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Video size={24} className="text-white" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <MessageSquareOff size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-2">{t('about.cards.feedback.title')}</h5>
                <p className="text-gray-400 text-sm">{t('about.cards.feedback.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Multi-Branch Management (Spans 2 columns) */}
          <motion.div variants={cardVars} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-8 hover:border-white/20 transition-colors flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D2042D] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(210,4,45,0.4)]">
                  <Building2 size={28} className="text-white" />
                </div>
                <h5 className="text-2xl font-bold text-white mb-2">{t('about.cards.branches.title')}</h5>
                <p className="text-gray-400">{t('about.cards.branches.desc')}</p>
              </div>
              
              {/* Visual Graphic for Branches */}
              <div className="hidden md:flex flex-col gap-3 relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
                {branchLocations.map((branch, i) => (
                  <div key={branch} className="flex items-center gap-4 bg-white/5 rounded-xl p-3 border border-white/5 relative z-10 ml-8 transform transition-transform group-hover:translate-x-2" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="w-2 h-2 rounded-full bg-[#D2042D]" />
                    <span className="text-white font-medium text-sm">{branch}</span>
                    <span className="ml-auto text-green-400 text-xs font-bold">+4.9</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;