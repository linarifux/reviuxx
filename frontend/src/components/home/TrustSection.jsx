import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

// Reusing the highly polished AppIcon logic for the integration marquee
const MarqueeIcon = ({ type }) => {
  const baseClass = "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg text-lg font-black shrink-0 mx-3 md:mx-4 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer";
  
  const icons = {
    google: <div className={`${baseClass} bg-white border border-gray-100 text-blue-600`}>G</div>,
    yelp: <div className={`${baseClass} bg-red-600`}><Star size={24} className="fill-white text-white"/></div>,
    booking: <div className={`${baseClass} bg-blue-900 text-white text-sm`} >B.</div>,
    tripadvisor: <div className={`${baseClass} bg-green-500 gap-1`}><div className="w-2.5 h-2.5 rounded-full bg-white"/><div className="w-2.5 h-2.5 rounded-full bg-white"/></div>,
    airbnb: <div className={`${baseClass} bg-rose-500 text-white`}><div className="w-5 h-5 border-4 border-white rounded-full"/></div>,
    trustpilot: <div className={`${baseClass} bg-[#00b67a]`}><Star size={24} className="fill-white text-white"/></div>,
    fb: <div className={`${baseClass} bg-blue-600 text-white`} >f</div>,
  };
  return icons[type] || null;
};

const TrustSection = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); 

  const rawTestimonials = t('trust.testimonials', { returnObjects: true });
  const testimonials = Array.isArray(rawTestimonials) ? rawTestimonials : [];

  // Auto-advance carousel
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial(); 
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial(); 
    }
  };

  const getInitials = (name) => {
    if (!name) return "RX";
    const parts = name.split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const marqueeItems = ['google', 'yelp', 'booking', 'tripadvisor', 'airbnb', 'trustpilot', 'fb'];

  // Animation variants optimized for absolute positioning
  const sliderVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      zIndex: 0
    })
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-linear-to-b from-[#FAFAFA] to-white pointer-events-none md:rounded-bl-[100px] z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D2042D]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm mb-6"
          >
             <Sparkles size={16} className="text-[#D2042D]" />
             <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">
               {t('trust.badge', 'Trusted By')}
             </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6"
          >
            {t('trust.title', 'Loved by leading local businesses')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed px-4 md:px-0"
          >
            {t('trust.subtitle', 'Join hundreds of companies that use Reviuxx to dominate their local search rankings and automate their customer feedback.')}
          </motion.p>
        </div>

        {/* --- INFINITE MARQUEE --- */}
        <div className="mb-20 md:mb-32 relative">
          <p className="text-center text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">
            {t('trust.integrationText', 'Seamlessly connects with over 50+ platforms')}
          </p>
          
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex whitespace-nowrap pt-4 pb-8 items-center w-max"
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <MarqueeIcon key={index} type={item} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- TESTIMONIAL CAROUSEL --- */}
        {testimonials.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#111111] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl group"
          >
            {/* Animated Glow inside the dark card */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#D2042D]/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none group-hover:bg-[#D2042D]/30 transition-colors duration-700" />
            
            {/* Giant Background Quote Mark (Outline Style) */}
            <div className="absolute top-6 left-4 md:top-10 md:left-10 opacity-30 pointer-events-none">
              <Quote size={100} className="text-transparent" stroke="#D2042D" strokeWidth={1} />
            </div>

            {/* RESPONSIVE GHOST SIZER: 
                This block is completely invisible but forces the parent container to ALWAYS 
                be exactly as tall as the longest testimonial. Zero layout shifts or screen shake! */}
            <div className="relative w-full">
              <div className="grid opacity-0 pointer-events-none select-none" aria-hidden="true">
                {testimonials.map((test, idx) => (
                  <div key={idx} className="col-start-1 row-start-1 px-2 md:px-12 flex flex-col items-center justify-center pb-20 md:pb-16">
                    <div className="flex justify-center gap-1 mb-6 md:mb-8"><Star size={18} /></div>
                    <p className="text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 md:mb-10 w-full text-center">
                      "{test.quote}"
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                      <div className="w-14 h-14 md:w-16 md:h-16" />
                      <div><h4 className="text-lg">X</h4><p className="text-sm">X</p></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ACTUAL ANIMATED CONTENT */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-start md:justify-center text-center px-2 md:px-12 cursor-grab active:cursor-grabbing pb-20 md:pb-16"
                >
                  
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-6 md:mb-8 pointer-events-none shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="fill-[#D2042D] text-[#D2042D] md:w-5 md:h-5" />
                    ))}
                  </div>
                  
                  {/* Main Quote */}
                  <div className="flex-1 flex items-center justify-center w-full mb-8 md:mb-10">
                    <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white leading-relaxed select-none pointer-events-none w-full tracking-wide">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                  </div>
                  
                  {/* Premium Client Info Block */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto shrink-0">
                    {/* Dynamic Avatar */}
                    <div className="relative shrink-0 pointer-events-none">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-xl">
                        {getInitials(testimonials[currentTestimonial].name)}
                      </div>
                      <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-0.5 md:p-1 border-2 border-[#111111]">
                        <CheckCircle2 size={10} className="text-white md:w-3 md:h-3" strokeWidth={4} />
                      </div>
                    </div>
                    
                    {/* Name & Role text */}
                    <div className="text-center sm:text-left pointer-events-none">
                      <h4 className="text-base md:text-lg font-bold text-white mb-0.5 tracking-tight">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-[#D2042D] font-medium text-xs md:text-sm flex flex-col sm:flex-row sm:items-center">
                        <span>{testimonials[currentTestimonial].role}</span>
                        <span className="text-gray-600 mx-2 hidden sm:inline">•</span>
                        <span className="text-gray-400 mt-0.5 sm:mt-0">{testimonials[currentTestimonial].company}</span>
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Right Controls (Arrows) */}
            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-2 md:gap-3 z-20">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D2042D]/50"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D2042D] hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-[0_4px_15px_rgba(210,4,45,0.4)] focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Center Pagination Dots */}
            <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(idx);
                  }}
                  className={`transition-all duration-300 rounded-full h-1.5 md:h-2 focus:outline-none ${
                    currentTestimonial === idx ? 'w-5 md:w-8 bg-[#D2042D]' : 'w-1.5 md:w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
};

export default TrustSection;