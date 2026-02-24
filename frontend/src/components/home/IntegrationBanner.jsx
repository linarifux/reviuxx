import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IntegrationBanner = () => {
  const { t } = useTranslation();

  const platforms = [
    {
      name: 'Google',
      // We use a multi-layer approach for 3D glass effect
      bgColor: 'bg-gradient-to-br from-[#DB4437]/20 to-transparent',
      glowColor: 'group-hover:shadow-[#DB4437]/50',
      iconColor: 'text-[#DB4437] group-hover:text-white',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current transition-all duration-300">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      )
    },
    {
      name: 'TripAdvisor',
      bgColor: 'bg-gradient-to-br from-[#34E0A1]/20 to-transparent',
      glowColor: 'group-hover:shadow-[#34E0A1]/50',
      iconColor: 'text-[#34E0A1] group-hover:text-white',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current transition-all duration-300">
          <path d="M23.5 11.5c0-1.7-1.3-3-3-3h-1.1c-1.3-3.6-4.7-6.1-8.4-6.1S3.9 4.9 2.6 8.5H1.5c-1.7 0-3 1.3-3 3 0 1.2.7 2.2 1.8 2.7l1.7 6.4c.2.7.9 1.1 1.6 1.1h16.8c.7 0 1.4-.4 1.6-1.1l1.7-6.4c1.1-.5 1.8-1.5 1.8-2.7zm-12.5 5.7c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.2-7.5c-.8-1.3-2.1-2.2-3.6-2.5.4-.5.6-1.1.6-1.7 0-1.5-1.2-2.8-2.8-2.8s-2.8 1.2-2.8 2.8c0 .6.2 1.2.6 1.7-1.5.3-2.8 1.2-3.6 2.5h-2.1c-.6 0-1 .4-1 1s.4 1 1 1h.4l1.3 4.9H3.6l-1.4-5.2c.4-.2.6-.6.6-1s-.4-1-1-1c-.6 0-1 .4-1 1s.4 1 1 1c.2 0 .3-.1.5-.2l1.5 5.6c.1.3.4.5.7.5h15c.3 0 .6-.2.7-.5l1.5-5.6c.1.1.3.2.5.2.6 0 1-.4 1-1s-.4-1-1-1c-.6 0-1 .4-1 1s.2.8.6 1l-1.4 5.2h-1.9l1.3-4.9h.4c.6 0 1-.4 1-1s-.4-1-1-1h-2.1z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      bgColor: 'bg-gradient-to-br from-[#1877F2]/20 to-transparent',
      glowColor: 'group-hover:shadow-[#1877F2]/50',
      iconColor: 'text-[#1877F2] group-hover:text-white',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current transition-all duration-300">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Yelp',
      bgColor: 'bg-gradient-to-br from-[#FF1A1A]/20 to-transparent',
      glowColor: 'group-hover:shadow-[#FF1A1A]/50',
      iconColor: 'text-[#FF1A1A] group-hover:text-white',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current transition-all duration-300">
          <path d="M12.19 10.14c-1.3-.61-2.9-.11-3.6 1.1l-4.5 7.8c-.7 1.2-.2 2.8 1.1 3.5 1.3.7 2.9.2 3.6-1.1l4.5-7.8c.7-1.2.2-2.8-1.1-3.5zm7.3 1.9l-8.6-2.3c-1.4-.4-2.8.5-3.2 1.9-.4 1.4.5 2.8 1.9 3.2l8.6 2.3c1.4.4 2.8-.5 3.2-1.9.3-1.4-.5-2.8-1.9-3.2zm-2.8-6.1l-6.1 6.1c-1 1-1 2.7 0 3.7s2.7 1 3.7 0l6.1-6.1c1-1 1-2.7 0-3.7s-2.7-1-3.7 0zM8.5 4.5C8.5 2 6.5 0 4 0S-.5 2-.5 4.5 1.5 9 4 9s4.5-2 4.5-4.5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* Background Subtle Grid & Connecting Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-[100px] z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 3D Glass Icon Dock */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 relative z-10"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              whileHover={{ y: -12, scale: 1.15 }}
              initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 150, damping: 15 }}
              className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl cursor-pointer transition-all duration-500 perspective-1000"
            >
              {/* Glass Container Layer */}
              <div className={`absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl ${platform.glowColor}`} />
              
              {/* Internal Colored Light Source */}
              <div className={`absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${platform.bgColor}`} />

              {/* The Icon Itself */}
              <div className={`relative z-10 ${platform.iconColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}>
                {platform.svg}
              </div>

              {/* Floating Tooltip */}
              <div className="absolute -top-12 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-black/80 backdrop-blur-md text-white text-xs font-bold py-1.5 px-4 rounded-full border border-white/10 pointer-events-none whitespace-nowrap shadow-lg">
                {platform.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Typography Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glowing backdrop behind text container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D2042D]/10 via-transparent to-[#D2042D]/5 rounded-full blur-3xl -z-10" />
          
          <div className="bg-white/5 border border-white/10 p-10 sm:p-14 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            
            {/* Subtle shimmer effect on container border */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-200 relative z-10">
              <span className="opacity-70">{t('integration.prefix', 'This means for you: ')}</span>
              <span className="relative inline-block mx-2 text-gray-500 line-through decoration-[#D2042D] decoration-[3px]">
                {t('integration.manual', 'no more tedious manual monitoring')}
              </span>
              <br className="hidden sm:block mt-4" />
              <span className="opacity-70">{t('integration.middle', ', but a ')}</span>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-white via-gray-100 to-[#D2042D] font-extrabold tracking-tight drop-shadow-sm">
                  {t('integration.central', 'central platform')}
                </span>
                {/* Subtle glow under the main keyword */}
                <span className="absolute -inset-4 bg-[#D2042D]/20 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </span> 
              <span className="opacity-70">{t('integration.suffix', ' to manage and maximize all your reviews.')}</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IntegrationBanner;