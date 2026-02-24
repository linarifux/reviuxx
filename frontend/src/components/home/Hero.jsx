import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, TrendingUp, MessageSquare, Play, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  // Staggered text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-36 lg:pb-24 overflow-hidden bg-[#050505]">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Animated subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Deep Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D2042D]/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: COPY & CTAS --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* High-tech Badge */}
            <motion.div variants={itemVariants} className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D2042D] to-white/20 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl">
                <Zap size={14} className="text-[#D2042D]" />
                <span className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                  {t('hero.badge', 'Reviuxx Platform 2.0')}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              {t('hero.title_part1', 'Dominate Your')} <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#D2042D]">
                  {t('hero.title_part2', 'Online Reputation.')}
                </span>
                {/* Text underline highlight */}
                <motion.svg className="absolute w-full h-3 -bottom-1 left-0 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path d="M0 5 Q 50 10, 100 5" stroke="#D2042D" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1 }} />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              {t('hero.subtitle', 'The intelligent software to automate reviews, intercept negative feedback, and skyrocket your local search rankings instantly.')}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-10"
            >
              <Link 
                to="/register"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-100 hover:scale-105"
              >
                {t('hero.cta_primary', 'Start Free Trial')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/demo"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-md hover:border-[#D2042D]/50"
              >
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-[#D2042D] transition-colors">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
                {t('hero.cta_secondary', 'See how it works')}
              </Link>
            </motion.div>

            {/* Social Proof Avatars */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User avatar" 
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#D2042D] flex items-center justify-center text-xs font-bold text-white z-10">
                  +10k
                </div>
              </div>
              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-1 text-[#D2042D]">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} className="fill-current" />)}
                </div>
                <span className="text-gray-400 font-medium">Trusted by top brands</span>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: 3D ANIMATED UI COMPOSITE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Background Dashboard Image Context */}
            <div className="absolute inset-0 opacity-20 transform scale-95 translate-x-10 translate-y-10 rounded-2xl overflow-hidden [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none">
                
            </div>

            {/* Central Glass Widget: Performance */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-[#111111]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D2042D] to-black flex items-center justify-center shadow-lg shadow-red-900/50">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Reputation Score</h3>
                    <p className="text-sm text-gray-400">Past 30 days</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-bold">
                  <TrendingUp size={16} /> 4.9
                </span>
              </div>

              {/* Animated Live SVG Chart */}
              <div className="h-24 w-full mb-6 relative">
                <svg viewBox="0 0 100 40" className="w-full h-full drop-shadow-lg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D2042D" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#D2042D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Chart Fill */}
                  <motion.path 
                    d="M0,40 L0,30 Q10,25 20,28 T40,15 T60,20 T80,5 T100,2 L100,40 Z" 
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                  />
                  {/* Chart Line */}
                  <motion.path 
                    d="M0,30 Q10,25 20,28 T40,15 T60,20 T80,5 T100,2" 
                    fill="none" 
                    stroke="#D2042D" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  />
                  {/* Dot */}
                  <motion.circle cx="100" cy="2" r="3" fill="#fff" stroke="#D2042D" strokeWidth="2" 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5, type: 'spring' }}
                  />
                </svg>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-gray-400 text-xs mb-1">Total Reviews</p>
                  <p className="text-white font-bold text-2xl">2,405</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-gray-400 text-xs mb-1">Conversion Rate</p>
                  <p className="text-white font-bold text-2xl">+18.4%</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Top Widget: Live Review */}
            <motion.div 
              animate={{ y: [10, -20, 10], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 w-[300px] bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src="https://i.pravatar.cc/100?img=5" alt="Reviewer" className="w-10 h-10 rounded-full border border-white/20" />
                <div>
                  <h4 className="text-white text-sm font-bold">Sarah Jenkins</h4>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-[#D2042D] text-[#D2042D]" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                "Absolutely incredible service. Reviuxx transformed how we handle customer feedback. Highly recommend!"
              </p>
            </motion.div>

            {/* Floating Bottom Widget: Automated Protection */}
            <motion.div 
              animate={{ y: [-10, 15, -10], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-10 -left-10 bg-gradient-to-br from-[#111] to-[#222] border border-[#D2042D]/30 rounded-2xl p-4 flex items-center gap-4 shadow-[0_0_30px_rgba(210,4,45,0.15)] z-30"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#D2042D] blur-md opacity-50 rounded-full animate-pulse"></div>
                <div className="relative bg-[#D2042D] p-3 rounded-full text-white">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Negative Review Intercepted</p>
                <p className="text-xs text-[#D2042D] flex items-center gap-1 mt-0.5">
                  <MessageSquare size={12} /> Resolved privately
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;