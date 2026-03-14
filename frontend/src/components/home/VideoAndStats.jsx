import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, PlayCircle, TrendingUp } from 'lucide-react';

const VideoAndStats = () => {
  const { t, i18n } = useTranslation();

  // Dynamically fetch the correct YouTube ID based on language
  const videoId = t('video.youtubeId');

  const stats = t('stats.items', { returnObjects: true });

  return (
    <section id='video' className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D2042D]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 backdrop-blur-md"
          >
             <PlayCircle size={16} className="text-[#D2042D]" />
             <span className="text-sm font-bold text-gray-200 tracking-wide uppercase">
               {t('video.badge')}
             </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-16"
          >
            {t('video.title')}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The Facts */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-[#D2042D]" size={24} />
              <h3 className="text-2xl font-bold text-white">{t('stats.title')}</h3>
            </div>
            
            {Array.isArray(stats) && stats.map((stat, idx) => (
              <div key={idx} className="bg-[#111111]/80 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:border-[#D2042D]/50 transition-colors">
                <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 mb-2 tracking-tighter">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                  {stat.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right: The Video */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(210,4,45,0.2)] group">
              <div className="absolute inset-0 bg-linear-to-tr from-[#D2042D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <iframe 
                className="w-full h-full relative z-0"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
                title="Reviuxx Explainer Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VideoAndStats;