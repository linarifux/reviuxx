import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Star, MessageSquare, Share2, Sparkles, LayoutDashboard, 
  Globe, TrendingUp, Bot, Facebook, Instagram, ChevronRight, CheckCircle2
} from 'lucide-react';

const SoftwareSection = () => {
  const { t } = useTranslation();

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section id="software" className="relative flex flex-col bg-[#FAFAFA]">
      
      {/* --- PART 1: LIGHT DASHBOARD SECTION --- */}
      <div className="relative py-32 px-4 overflow-hidden">
        {/* Decorative Blur Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D2042D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
            >
              <Sparkles size={16} className="text-[#D2042D]" />
              <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Reviuxx Dashboard</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-8"
            >
              {t('software.title', 'The Software')}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              {t('software.description')}
            </motion.p>
          </div>

          {/* Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200/50 bg-white"
          >
            {/* Browser Bar */}
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
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-64 bg-[#0A0A0A] text-gray-400 p-6 border-r border-gray-800 shrink-0">
                <div className="text-xl font-bold text-white flex items-center mb-10">
                  Revi<span className="text-[#D2042D]">uxx</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 bg-white/10 text-white px-4 py-3 rounded-xl">
                    <LayoutDashboard size={18} />
                    <span className="font-medium text-sm">Your reviews</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl transition-colors">
                    <Globe size={18} />
                    <span className="font-medium text-sm">Website widgets</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl transition-colors">
                    <TrendingUp size={18} />
                    <span className="font-medium text-sm">Your growth</span>
                  </div>
                </div>
              </div>

              {/* Main Feed */}
              <div className="flex-1 bg-[#F8F9FA] p-4 md:p-8 overflow-hidden relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <span className="text-sm font-semibold text-gray-800">Your Business - Rome</span>
                  </div>
                  <button className="bg-[#F59E0B] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md flex items-center gap-2">
                    <Star size={16} className="fill-white" />
                    Request Reviews
                  </button>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                  {/* Card 1 */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                    <motion.div animate={floatingAnimation} className="absolute -left-4 md:-left-32 top-24 z-20 flex items-center gap-2">
                      <div className="bg-[#111111] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
                        <Bot size={14} className="text-[#10B981]" /> Reply with AI
                      </div>
                    </motion.div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                      <div>
                        <div className="flex items-center gap-1"><span className="font-bold text-sm">Google</span></div>
                        <div className="text-xs text-gray-500">Alex Rastani • 16 March 2024</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-6">The reception was great, congratulations to all your staff, I will definitely return!</p>
                    <button className="bg-[#10B981] text-white px-6 py-2 rounded-full text-sm font-bold">Reply</button>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative opacity-90">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">f</div>
                      <div>
                        <div className="flex items-center gap-1"><span className="font-bold text-sm">Facebook</span></div>
                        <div className="text-xs text-gray-500">Gianluca Simoni • 15 March 2024</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">We had a visit yesterday and the experience was very pleasant, I will recommend it.</p>
                    <div className="bg-gray-50 border-l-4 border-[#10B981] p-3 rounded-r-lg mb-6 ml-4">
                      <p className="text-sm text-gray-600 italic">"Thank you very much Gianluca for your positive review!"</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#10B981] text-xs font-bold flex items-center gap-1"><MessageSquare size={14} /> Responded</span>
                      <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                        <Share2 size={14} /> Share on Social
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#F8F9FA] to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PART 2: DARK SECTION (AI & Social Management) --- */}
      <div className="bg-[#111111] py-32 px-4 relative">
        {/* Subtle red glow in the dark section */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D2042D]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Text Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('software.feature_feedback')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Globe size={16} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('software.feature_centralized')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#D2042D]/20 flex items-center justify-center text-[#D2042D]">
                <Bot size={16} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('software.feature_ai')}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Mobile & Widget Mockup */}
          <div className="relative flex justify-center lg:justify-end h-[600px] items-center">
            
            {/* Floating Review Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={floatingAnimation}
              className="absolute -left-4 lg:-left-12 top-20 z-20 w-72 bg-white rounded-2xl p-6 shadow-2xl hidden md:block"
            >
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                <div className="flex gap-2 items-center text-lg font-bold">
                  <Facebook size={20} className="text-blue-600" /> 4.4 
                  <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                </div>
                <div className="flex gap-2 items-center text-lg font-bold">
                  <span className="text-blue-500 font-extrabold font-serif">G</span> 4.2 
                  <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                </div>
              </div>
              <div className="text-center text-sm font-semibold text-gray-500 mb-4">289 Reviews</div>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-pink-200"></div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">Angela B.</div>
                    <div className="text-xs text-gray-500">2 Days ago</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-xs text-gray-600 line-clamp-3">
                  Excellent service. Nice staff but at the same time very friendly and professional, I recommend it to everyone!
                </p>
              </div>
              
              <button className="w-full mt-4 py-2 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                See all reviews
              </button>
            </motion.div>

            {/* Mobile Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-[300px] h-[580px] bg-white rounded-[3rem] border-[12px] border-gray-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col z-10"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-30" />
              
              {/* Screen Top Bar */}
              <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-xs font-medium z-20">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-3 bg-black rounded-sm" />
                </div>
              </div>

              {/* IG App Header */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 bg-white z-20">
                <Instagram size={24} />
                <span className="font-serif font-bold text-xl tracking-tight">Instagram</span>
                <Share2 size={24} className="rotate-90" />
              </div>

              {/* Stories Ring Mockup */}
              <div className="flex gap-3 px-4 py-3 border-b border-gray-100 overflow-hidden bg-white z-20">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-[2.5px] border-[#D2042D] p-[2px] shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-200" />
                  </div>
                ))}
              </div>

              {/* Post Content */}
              <div className="flex-1 bg-gray-50 relative">
                <div className="flex items-center gap-2 p-3 bg-white">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">R</div>
                  <div className="text-sm font-bold">Your Business</div>
                </div>

                {/* Review Graphic Image inside Phone */}
                <div className="w-full aspect-square bg-linear-to-br from-white to-gray-100 flex flex-col items-center justify-center p-8 text-center border-y border-gray-100 shadow-inner">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-6">
                    "Excellent service. Nice staff but at the same time very friendly and professional, I recommend it to!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-200" />
                    <span className="text-xs font-bold text-gray-600">Angela B.</span>
                  </div>
                </div>

                {/* Phone bottom UI actions */}
                <div className="p-3 bg-white">
                  <div className="flex gap-4 mb-2">
                    <Heart size={20} className="text-gray-800" />
                    <MessageSquare size={20} className="text-gray-800" />
                    <Share2 size={20} className="text-gray-800" />
                  </div>
                  <div className="text-xs font-bold mb-1">1,534 Likes</div>
                  <div className="text-xs text-gray-500">Shared via Reviuxx Platform</div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-30" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Heart icon for the IG mockup to avoid importing too many icons
const Heart = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export default SoftwareSection;