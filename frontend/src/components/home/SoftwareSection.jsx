import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Star, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  LayoutDashboard, 
  Globe, 
  TrendingUp,
  Bot
} from 'lucide-react';

const SoftwareSection = () => {
  const { t } = useTranslation();

  // Floating annotation animation
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section id="software" className="relative py-32 px-4 overflow-hidden bg-[#FAFAFA]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D2042D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Animated Heading Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <Sparkles size={16} className="text-[#D2042D]" />
            <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Reviuxx Dashboard</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-8"
          >
            {t('software.title', 'The Software')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            {t('software.description', 'With our software, local businesses can not only monitor reviews on various platforms but also actively request feedback from customers. You have the option to send personalised review requests and encourage your customers to share their experiences online.')}
          </motion.p>
        </div>

        {/* CSS/React Mockup of the Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200/50 bg-white"
        >
          {/* Top Browser Bar */}
          <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 flex items-center gap-2 w-1/3 min-w-[200px] justify-center shadow-inner">
              <Globe size={12} /> app.reviuxx.com
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[600px] md:h-[700px]">
            {/* Sidebar (Dark Theme) */}
            <div className="hidden md:flex flex-col w-64 bg-[#0A0A0A] text-gray-400 p-6 border-r border-gray-800 shrink-0">
              <div className="text-xl font-bold text-white flex items-center mb-10">
                Revi<span className="text-[#D2042D]">uxx</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 bg-white/10 text-white px-4 py-3 rounded-xl cursor-pointer">
                  <LayoutDashboard size={18} />
                  <span className="font-medium text-sm">Your reviews</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl cursor-pointer transition-colors">
                  <Globe size={18} />
                  <span className="font-medium text-sm">Website widgets</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl cursor-pointer transition-colors">
                  <TrendingUp size={18} />
                  <span className="font-medium text-sm">Your growth</span>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <div className="h-10 w-full bg-[#10B981] rounded-xl flex items-center justify-center text-white/90 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                </div>
                <div className="h-10 w-full bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-white/20" />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#F8F9FA] p-4 md:p-8 overflow-hidden relative">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-gray-800">Your Business - Rome</span>
                  <div className="w-5 h-5 rounded-full bg-[#D2042D] text-white flex items-center justify-center text-[10px] font-bold">R</div>
                </div>
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-colors flex items-center gap-2">
                  <Star size={16} className="fill-white" />
                  Request Reviews
                </button>
              </div>

              {/* Review Cards Stream */}
              <div className="max-w-3xl mx-auto space-y-6">
                
                {/* Review Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                  
                  {/* Floating Annotation 1 */}
                  <motion.div 
                    animate={floatingAnimation}
                    className="absolute -left-4 md:-left-32 top-24 z-20 flex items-center gap-2 pointer-events-none"
                  >
                    <div className="bg-[#111111] text-white text-xs font-bold ml-20 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap">
                      <Bot size={14} className="text-[#10B981]" />
                      Reply custom or with AI
                    </div>
                    <svg width="40" height="20" viewBox="0 0 40 20" className="text-[#111111] hidden md:block">
                      <path d="M0,10 Q20,10 35,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                      <polygon points="35,5 40,10 35,15" fill="currentColor"/>
                    </svg>
                  </motion.div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">G</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-bold text-gray-900 text-sm">Google</span>
                          <div className="flex text-[#F59E0B] ml-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#F59E0B]" />)}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Alex Rastani • 16 March 2024</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    The reception was great, congratulations to all your staff, I will definitely return!
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-[#10B981] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md shadow-[#10B981]/20 hover:bg-[#059669] transition-colors">
                      Reply
                    </button>
                    <button className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 transition-colors">
                      Remove from widget
                    </button>
                  </div>
                </div>

                {/* Review Card 2 (Replied) */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative opacity-90">
                  
                  {/* Floating Annotation 2 */}
                  <motion.div 
                    animate={floatingAnimation}
                    className="absolute -right-4 md:-right-24 bottom-6 z-20 flex items-center gap-2 pointer-events-none"
                  >
                    <svg width="40" height="20" viewBox="0 0 40 20" className="text-[#D2042D] hidden md:block rotate-180">
                      <path d="M0,10 Q20,10 35,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                      <polygon points="35,5 40,10 35,15" fill="currentColor"/>
                    </svg>
                    <div className="bg-[#D2042D] text-white text-xs font-bold mr-12 mb-10 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap">
                      <Share2 size={14} />
                      Share on Social Media
                    </div>
                  </motion.div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">f</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-bold text-gray-900 text-sm">Facebook</span>
                          <div className="flex text-[#F59E0B] ml-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#F59E0B]" />)}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Gianluca Simoni • 15 March 2024</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    We had a visit yesterday and the experience was very pleasant, I will recommend it.
                  </p>

                  {/* Reply Block */}
                  <div className="bg-gray-50 border-l-4 border-[#10B981] p-3 rounded-r-lg mb-6 ml-4">
                    <p className="text-sm text-gray-600 italic">"Thank you very much Gianluca for your positive review!"</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#10B981] text-xs font-bold flex items-center gap-1">
                      <MessageSquare size={14} /> You have already responded
                    </span>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 transition-colors bg-white">
                      <Share2 size={14} /> Share on Social
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Fade out gradient at bottom of scroll area */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#F8F9FA] to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SoftwareSection;