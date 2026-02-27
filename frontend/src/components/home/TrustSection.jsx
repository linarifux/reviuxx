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

  // Safely fetch testimonials
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

  // Handle Swipe logic
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial(); // Swiped right
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial(); // Swiped left
    }
  };

  // Extract initials for the avatar
  const getInitials = (name) => {
    if (!name) return "RX";
    const parts = name.split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // The array of icons for the infinite marquee
  const marqueeItems = ['google', 'yelp', 'booking', 'tripadvisor', 'airbnb', 'trustpilot', 'fb'];

  // Clean animation variants (NO absolute positioning hacks needed anymore)
  const sliderVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
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
          
          {/* Gradient Masks for smooth fade out on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
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
            className="max-w-5xl mx-auto bg-[#111111] rounded-[2rem] md:rounded-[2.5rem] p-6 pb-20 md:p-16 relative overflow-hidden shadow-2xl group cursor-grab active:cursor-grabbing"
          >
            {/* Animated Glow inside the dark card */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#D2042D]/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none group-hover:bg-[#D2042D]/30 transition-colors duration-700" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-10 md:opacity-20 pointer-events-none">
              <Quote size={80} className="text-[#D2042D] md:w-[120px] md:h-[120px]" />
            </div>

            {/* Swipeable Container - mode="wait" completely fixes the screen shake */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-[380px] md:min-h-[280px]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="w-full text-center px-2 md:px-12 flex flex-col items-center justify-center"
                >
                  
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-6 md:mb-8 pointer-events-none shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="fill-yellow-400 text-yellow-400 md:w-5 md:h-5" />
                    ))}
                  </div>
                  
                  {/* Main Quote */}
                  <p className="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8 md:mb-12 select-none pointer-events-none w-full">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  {/* Premium Client Info Block */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto shrink-0">
                    
                    {/* Dynamic Avatar */}
                    <div className="relative shrink-0 pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-gray-700 to-gray-900 border-2 border-white/10 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        {getInitials(testimonials[currentTestimonial].name)}
                      </div>
                      <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-[#111111]">
                        <CheckCircle2 size={12} className="text-white" strokeWidth={4} />
                      </div>
                    </div>
                    
                    {/* Name & Role text */}
                    <div className="text-center sm:text-left pointer-events-none">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-[#D2042D] font-medium text-sm md:text-base flex flex-col sm:flex-row sm:items-center">
                        <span>{testimonials[currentTestimonial].role}</span>
                        <span className="text-gray-600 mx-2 hidden sm:inline">•</span>
                        <span className="text-gray-400 mt-1 sm:mt-0">{testimonials[currentTestimonial].company}</span>
                      </p>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="hidden md:flex absolute bottom-8 right-8 gap-3 z-20">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#D2042D]/50"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#D2042D] hover:bg-red-700 border border-white/5 flex items-center justify-center text-white backdrop-blur-md transition-colors shadow-[0_0_15px_rgba(210,4,45,0.4)] focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(idx);
                  }}
                  className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${
                    currentTestimonial === idx ? 'w-8 bg-[#D2042D]' : 'w-2 bg-white/20 hover:bg-white/40'
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