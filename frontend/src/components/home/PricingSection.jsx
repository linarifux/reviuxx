import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Share2, Copy, Sparkles, 
  ArrowRight, Star, MessageSquare, Play, Globe,
  Phone, Check, ExternalLink, Zap, Shield, Crown, Gem
} from 'lucide-react';

// --- Highly Polished Helper Components for the App Icons ---
const AppIcon = ({ type }) => {
  const baseClass = "w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center shadow-sm text-xs font-black transition-transform hover:scale-110 hover:-translate-y-0.5 cursor-pointer";
  
  const icons = {
    google: <div className={`${baseClass} bg-white border border-gray-100 text-blue-600`} title="Google">G</div>,
    yelp: <div className={`${baseClass} bg-red-600`} title="Yelp"><Star size={14} className="fill-white text-white"/></div>,
    booking: <div className={`${baseClass} bg-blue-900 text-white text-[10px]`} title="Booking.com">B.</div>,
    tripadvisor: <div className={`${baseClass} bg-green-500 gap-0.5`} title="TripAdvisor"><div className="w-1.5 h-1.5 rounded-full bg-white"/><div className="w-1.5 h-1.5 rounded-full bg-white"/></div>,
    airbnb: <div className={`${baseClass} bg-rose-500 text-white`} title="Airbnb"><div className="w-3 h-3 border-2 border-white rounded-full"/></div>,
    trustpilot: <div className={`${baseClass} bg-[#00b67a]`} title="Trustpilot"><Star size={14} className="fill-white text-white"/></div>,
    fb: <div className={`${baseClass} bg-blue-600 text-white`} title="Facebook">f</div>,
    insta: <div className={`${baseClass} bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-500`} title="Instagram"><div className="w-3 h-3 border-2 border-white rounded-[4px]"/></div>,
    bbb: <div className={`${baseClass} bg-blue-800 text-white text-[8px] tracking-tighter`} title="BBB">BBB</div>,
    angi: <div className={`${baseClass} bg-red-500 text-white text-[9px]`} title="Angi">Angi</div>,
    
    // Abstract Channels / Features
    mail: <div className={`${baseClass} text-red-500 bg-white border border-gray-100`} title="Email">M</div>,
    sms: <div className={`${baseClass} bg-blue-500`} title="SMS"><MessageSquare size={12} className="text-white fill-white"/></div>,
    wa: <div className={`${baseClass} bg-green-500`} title="WhatsApp"><Phone size={12} className="text-white fill-white"/></div>,
    
    starBlock: <div className={`${baseClass} bg-yellow-400`} title="Reviews"><Star size={14} className="fill-white text-white"/></div>,
    shareBlock: <div className={`${baseClass} bg-red-500`} title="Share"><Share2 size={12} className="text-white"/></div>,
    gridBlock: <div className={`${baseClass} bg-purple-600`} title="Dashboard"><Globe size={12} className="text-white"/></div>,
    playBlock: <div className={`${baseClass} bg-blue-700`} title="Video"><Play size={12} className="fill-white text-white"/></div>,
    gBlock: <div className={`${baseClass} bg-green-500 text-white`} title="Growth">G</div>,
  };
  return icons[type] || null;
};

// Interactive Price Row with Copy functionality
const PriceRow = ({ label, price, delay }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(price);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0 group"
    >
      <div>
        <p className="text-[11px] text-gray-500 font-medium mb-1">{label}</p>
        <div className="flex items-start gap-0.5">
          <span className="text-sm font-bold text-gray-400 mt-1">$</span>
          <span className="text-2xl font-black text-gray-900 tracking-tighter leading-none">{price}</span>
        </div>
      </div>
      <div className="flex gap-2 text-gray-300 mb-1">
        <button className="hover:text-blue-500 transition-colors p-1" title="Open Link">
          <ExternalLink size={16} />
        </button>
        <button onClick={handleCopy} className="hover:text-green-500 transition-colors p-1 relative" title="Copy Price">
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check size={16} className="text-green-500" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

// Interactive Card Component with Mouse Glow Effect
const PricingCard = ({ plan, index, t }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Animation variants
  const listVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const itemVars = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group bg-white rounded-3xl border shadow-lg hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden ${
        plan.popular 
          ? 'border-[#D2042D]/50 shadow-[0_20px_50px_-12px_rgba(210,4,45,0.2)] xl:-mt-6' 
          : 'border-gray-200 hover:shadow-2xl hover:border-gray-300'
      }`}
    >
      {/* Mouse Follow Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, ${plan.popular ? 'rgba(210,4,45,0.06)' : 'rgba(0,0,0,0.03)'}, transparent)`
        }}
      />
      
      {/* Animated Popular Border */}
      {plan.popular && (
        <div className="absolute inset-0 bg-linear-to-b from-[#D2042D]/20 to-transparent rounded-3xl pointer-events-none z-0" />
      )}

      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#D2042D] to-[#ff4d6d] text-white px-5 py-1.5 rounded-b-xl text-[10px] font-black tracking-widest uppercase shadow-md flex items-center gap-1.5 z-20">
          <Zap size={12} className="fill-white animate-pulse" /> Most Popular
        </div>
      )}

      {/* Top Section */}
      <div className={`p-6 md:p-8 bg-gray-50/50 flex-1 relative z-10 ${plan.popular ? 'pt-10' : ''}`}>
        
        {/* Title & Date */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`w-3 h-3 rounded-full ${plan.dotColor} shadow-sm`} />
              <h3 className="text-xl font-bold tracking-tight text-gray-900">{plan.name}</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium ml-5">{plan.date}</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }} 
            transition={{ type: "spring", stiffness: 300 }} 
            className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white shadow-md cursor-pointer"
          >
            {plan.topIcon}
          </motion.div>
        </div>

        {/* Features Row */}
        <div className="mb-6">
          <p className="text-[11px] text-gray-500 font-medium mb-3 uppercase tracking-wider">Features</p>
          <motion.div variants={listVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 flex-wrap">
            {plan.activeFeatures.map((feat, i) => (
              <motion.div variants={itemVars} key={i}><AppIcon type={feat} /></motion.div>
            ))}
          </motion.div>
        </div>

        {/* Channels & Social Row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-[11px] text-gray-500 font-medium mb-3 uppercase tracking-wider">Text Channels</p>
            <motion.div variants={listVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2 items-center">
              {plan.activeChannels.map((ch, i) => <motion.div variants={itemVars} key={i}><AppIcon type={ch} /></motion.div>)}
              {plan.activeChannels.length === 2 && <span className="text-[10px] text-gray-400 font-semibold ml-1 bg-gray-100 px-2 py-1 rounded">NO WA</span>}
            </motion.div>
          </div>
          <div>
            <p className="text-[11px] text-gray-500 font-medium mb-3 uppercase tracking-wider">Social Media</p>
            <motion.div variants={listVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-2">
              {plan.activeSocial.length > 0 ? (
                plan.activeSocial.map((soc, i) => <motion.div variants={itemVars} key={i}><AppIcon type={soc} /></motion.div>)
              ) : (
                <span className="text-[10px] text-gray-400 font-semibold bg-gray-100 px-2 py-1 rounded">Disabled</span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Review Sites Row */}
        <div className="mb-8">
          <p className="text-[11px] text-gray-500 font-medium mb-3 uppercase tracking-wider">Review Sites</p>
          <motion.div variants={listVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {plan.activeSites.map((site, i) => (
              <motion.div variants={itemVars} key={i}><AppIcon type={site} /></motion.div>
            ))}
            {plan.activeSites.length > 4 && <div className="w-6 h-6 flex items-center justify-center text-xs text-gray-400 font-bold bg-white rounded-md border border-gray-100 shadow-sm">+</div>}
          </motion.div>
        </div>

        {/* Quotas Data Grid */}
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-shadow group-hover:shadow-md relative z-10">
          <div>
            <p className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Monthly Email</p>
            <p className="text-xl font-black text-gray-800 leading-none">{plan.quotas.emails}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Monthly SMS</p>
            <p className="text-xl font-black text-gray-800 leading-none">{plan.quotas.sms}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Monthly WhatsApp</p>
            <p className="text-sm font-bold text-gray-700 leading-none mt-1.5">{plan.quotas.whatsapp}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">AI Agent</p>
            <div className="flex items-center mt-1.5">
              <span className={`w-2 h-2 rounded-full mr-1.5 ${plan.quotas.ai === 'Enabled' ? 'bg-green-500' : 'bg-gray-300'}`} />
              <p className={`text-sm font-bold leading-none ${plan.quotas.ai === 'Enabled' ? 'text-gray-900' : 'text-gray-400'}`}>
                {plan.quotas.ai}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Pricing Section & Order Button */}
      <div className="p-6 md:p-8 bg-white border-t border-gray-100 mt-auto relative z-10">
        <PriceRow label={`Monthly Price for ${plan.locations}`} price={plan.monthlyPrice} delay={0.2} />
        <PriceRow label={`Yearly Price for ${plan.locations}`} price={plan.yearlyPrice} delay={0.3} />
        
        <button 
          className={`w-full mt-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn ${
            plan.popular 
              ? 'bg-[#D2042D] text-white hover:bg-red-700 shadow-[0_10px_30px_-10px_rgba(210,4,45,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(210,4,45,0.8)]' 
              : 'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl'
          }`}
        >
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
          
          <span className="relative z-10 flex items-center gap-2">
            {t('pricing.orderNow', 'Order Now')}
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </motion.div>
  );
};

const PricingSection = () => {
  const { t } = useTranslation();

  // Dense lists to replicate the screenshot style
  const coreSites = ['google', 'yelp', 'booking', 'tripadvisor', 'airbnb', 'trustpilot', 'fb', 'bbb', 'angi'];
  
  const plans = [
    {
      id: 'bronze',
      name: 'Bronze US',
      date: 'February 12',
      monthlyPrice: '99',
      yearlyPrice: '990',
      locations: '1 location',
      dotColor: 'bg-[#CD7F32]', // Bronze
      topIcon: <Shield size={14} />,
      activeFeatures: ['starBlock', 'playBlock', 'shareBlock'],
      activeChannels: ['mail', 'sms'],
      activeSocial: ['fb'],
      activeSites: coreSites.slice(0, 4),
      quotas: { emails: '300', sms: '80', whatsapp: '0', ai: 'Disabled' },
    },
    {
      id: 'silver',
      name: 'Silver US',
      date: 'February 12',
      monthlyPrice: '150',
      yearlyPrice: '1500',
      locations: '3 locations',
      dotColor: 'bg-[#9ca3af]', // Silver
      topIcon: <Zap size={14} />,
      activeFeatures: ['starBlock', 'playBlock', 'shareBlock', 'gridBlock'],
      activeChannels: ['mail', 'sms', 'wa'],
      activeSocial: ['fb', 'insta'],
      activeSites: coreSites.slice(0, 6),
      quotas: { emails: '500', sms: '150', whatsapp: '100', ai: 'Disabled' },
    },
    {
      id: 'gold',
      name: 'Gold US',
      date: 'February 12',
      monthlyPrice: '260',
      yearlyPrice: '2600',
      locations: '10 locations',
      dotColor: 'bg-[#fbbf24]', // Gold
      topIcon: <Crown size={14} />,
      popular: true, 
      activeFeatures: ['starBlock', 'playBlock', 'shareBlock', 'gridBlock', 'gBlock'],
      activeChannels: ['mail', 'sms', 'wa'],
      activeSocial: ['fb', 'insta'],
      activeSites: coreSites, 
      quotas: { emails: '5,000', sms: '1,000', whatsapp: '1,000', ai: 'Enabled' },
    },
    {
      id: 'platinum',
      name: 'Platinum US',
      date: 'February 12',
      monthlyPrice: '590', 
      yearlyPrice: '5900',
      locations: '100 locations',
      dotColor: 'bg-[#ef4444]', // Red/Platinum
      topIcon: <Gem size={14} />,
      activeFeatures: ['starBlock', 'playBlock', 'shareBlock', 'gridBlock', 'gBlock'],
      activeChannels: ['mail', 'sms', 'wa'],
      activeSocial: ['fb', 'insta'],
      activeSites: [...coreSites, 'google', 'tripadvisor'], // Duplicates to show huge density
      quotas: { emails: '20,000', sms: '5,000', whatsapp: 'Unltd', ai: 'Enabled' },
    }
  ];

  return (
    <section id="pricing" className="py-32 px-4 bg-[#FAFAFA] relative overflow-hidden text-gray-800">
      
      {/* Soft Ambient Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D2042D]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
             <Sparkles size={16} className="text-[#D2042D]" />
             <span className="text-sm font-bold tracking-wider uppercase">Reviuxx Plans</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#111111] tracking-tight mb-6"
          >
            {t('pricing.title', 'Prices and Packages')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium"
          >
            {t('pricing.subtitle', 'Choose the perfect plan to dominate your online reputation.')}
          </motion.p>
        </div>

        {/* Dense Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;