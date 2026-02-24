import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-32 lg:pb-24">
      {/* Background Glowing Orbs for Modern SaaS Look */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D2042D]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#D2042D] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">
                {t('hero.badge', 'The All-In-One Reputation Platform')}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              {t('hero.title_part1', 'Optimize Your')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#D2042D]">
                {t('hero.title_part2', 'Online Presence.')}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.subtitle', 'Reviuxx gives you the powerful software needed to manage reviews effectively, increase sales, and master customer interactions.')}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                to="/register"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D2042D] hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(210,4,45,0.3)] hover:shadow-[0_0_30px_rgba(210,4,45,0.5)]"
              >
                {t('hero.cta_primary', 'Start Free Trial')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo"
                className="w-full sm:w-auto flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-colors backdrop-blur-sm"
              >
                {t('hero.cta_secondary', 'Watch Demo')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated UI Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block h-[500px]"
          >
            {/* Main Floating Dashboard Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D2042D] to-red-900 flex items-center justify-center">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Sales Impact</h3>
                    <p className="text-xs text-green-400">+42% this month</p>
                  </div>
                </div>
              </div>

              {/* Mock Review Items */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={14} className="fill-[#D2042D] text-[#D2042D]" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">2h ago</span>
                    </div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Notification Badge */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 right-0 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4 shadow-xl"
            >
              <div className="bg-green-500/20 p-2 rounded-lg">
                <MessageSquare size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">New 5-Star Review!</p>
                <p className="text-xs text-gray-400">Google Business Profile</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;