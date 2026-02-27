import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Sparkles, MessageCircleQuestion, Share2, Linkedin, Twitter, Facebook, ArrowRight, X } from 'lucide-react';

const FaqSection = () => {
  const { t } = useTranslation();
  
  const [activeKey, setActiveKey] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track if the FAQs have been initialized to prevent infinite re-opening bugs
  const isInitialized = useRef(false);

  // 1. Safely fetch FAQ items and ensure it's always an array
  const rawFaqItems = t('faqs.items', { returnObjects: true });
  const faqItems = Array.isArray(rawFaqItems) ? rawFaqItems : [];

  // 2. Robust filtering 
  const filteredFaqs = faqItems.filter(item => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const question = (item.q || '').toLowerCase();
    const answer = (item.a || '').toLowerCase();
    
    return question.includes(query) || answer.includes(query);
  });

  // 3. Initialize the first item as active ONLY ONCE on mount
  useEffect(() => {
    if (faqItems.length > 0 && !isInitialized.current) {
      setActiveKey(faqItems[0].q);
      isInitialized.current = true;
    }
  }, [faqItems]);

  // 4. Smart Active Indexing: Auto-open the top result when searching, or reset when cleared
  useEffect(() => {
    if (!isInitialized.current) return;

    if (searchQuery.trim() !== '' && filteredFaqs.length > 0) {
      setActiveKey(filteredFaqs[0].q); // Auto-open the first matched result
    } else if (searchQuery.trim() === '' && faqItems.length > 0) {
      setActiveKey(faqItems[0].q); // Reset to the first item when search is cleared
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]); // Only run this effect when the search query actually changes

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section id="faqs" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decor - Dark Theme */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0a0a0a] pointer-events-none rounded-bl-[120px] border-l border-b border-white/5 z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D2042D]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Sticky Header, Search & Contact CTA */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-[#D2042D]" />
              <span className="text-sm font-bold text-gray-200 tracking-wide uppercase">Support & Answers</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              {t('faqs.title', 'Frequently Asked Questions')}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              {t('faqs.subtitle', 'Everything you need to know about the Reviuxx platform and how it can help your business.')}
            </motion.p>

            {/* Premium Search Box with Clear Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-500 group-focus-within:text-[#D2042D] transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder={t('faqs.searchPlaceholder', 'Looking for something specific?')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-4 bg-[#111111] border border-white/10 rounded-2xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#D2042D]/20 focus:border-[#D2042D] transition-all shadow-inner"
              />
              {/* Clear Search Button */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Dark Theme Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-linear-to-br from-[#111111] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden mt-8 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2042D]/20 rounded-full blur-3xl group-hover:bg-[#D2042D]/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#D2042D] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#D2042D]/20">
                  <MessageCircleQuestion size={28} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">Still have questions?</h4>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Can't find the exact answer you're looking for? Chat with our friendly support team for personalized help.
                </p>
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#D2042D] text-white rounded-xl text-sm font-bold hover:bg-red-700 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(210,4,45,0.3)] hover:shadow-[0_0_25px_rgba(210,4,45,0.5)]">
                  Get in touch <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="w-full lg:w-2/3">
            
            {/* Category Tab */}
            <div className="flex border-b border-white/10 mb-8 relative">
              <div className="px-2 py-4 border-b-2 border-[#D2042D] text-[#D2042D] font-bold text-sm tracking-widest uppercase">
                {t('faqs.category', 'General FAQs')}
              </div>
            </div>

            {filteredFaqs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16 px-6 bg-[#111111] border border-dashed border-white/20 rounded-3xl"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-500" />
                </div>
                <p className="text-white font-bold text-lg mb-2">No results found</p>
                <p className="text-gray-500 text-sm">We couldn't find anything matching "{searchQuery}". Try adjusting your search term.</p>
              </motion.div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.map((faq) => {
                    const isOpen = activeKey === faq.q;

                    return (
                      <motion.div 
                        layout
                        key={faq.q}
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                          isOpen 
                            ? 'bg-[#111111] shadow-[0_20px_60px_-15px_rgba(210,4,45,0.1)] border border-[#D2042D]/30' 
                            : 'bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:bg-[#111111]'
                        }`}
                      >
                        {/* Active Left Indicator Line */}
                        {isOpen && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D2042D]" />
                        )}

                        <button
                          onClick={() => setActiveKey(isOpen ? '' : faq.q)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                        >
                          <span className={`font-bold text-lg md:text-xl pr-8 transition-colors duration-300 ${
                            isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {faq.q}
                          </span>
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen 
                              ? 'bg-[#D2042D] text-white shadow-md shadow-[#D2042D]/30 rotate-180' 
                              : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white rotate-0'
                          }`}>
                            <ChevronDown size={20} />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-6 md:px-8 pb-8 pt-0">
                                <p className="text-gray-400 text-lg leading-relaxed">
                                  {faq.a}
                                </p>
                                
                                {/* Social Share */}
                                <div className="flex items-center gap-5 mt-8 pt-6 border-t border-white/10">
                                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Share on Social</span>
                                  <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white text-gray-400 transition-colors cursor-pointer">
                                      <Facebook size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black text-gray-400 transition-colors cursor-pointer">
                                      <Twitter size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-gray-400 transition-colors cursor-pointer">
                                      <Linkedin size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#D2042D]/20 flex items-center justify-center text-[#D2042D] hover:bg-[#D2042D] hover:text-white transition-colors cursor-pointer ml-2">
                                      <Share2 size={16} />
                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FaqSection;