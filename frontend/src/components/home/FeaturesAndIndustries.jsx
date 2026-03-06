import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ShoppingBag, Utensils, Building, Briefcase, Network } from 'lucide-react';

const FeaturesAndIndustries = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('retail');

  // Fetch translations safely
  const rawFeatures = t('featuresList.items', { returnObjects: true });
  const features = Array.isArray(rawFeatures) ? rawFeatures : [];

  const rawIndustries = t('industries.tabs', { returnObjects: true });
  const industries = Array.isArray(rawIndustries) ? rawIndustries : [];

  // Map icons to industries
  const getIndustryIcon = (id) => {
    switch(id) {
      case 'retail': return <ShoppingBag size={20} />;
      case 'gastro': return <Utensils size={20} />;
      case 'hotels': return <Building size={20} />;
      case 'medical': return <Briefcase size={20} />;
      case 'agency': return <Network size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: COMPREHENSIVE FEATURES GRID --- */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D2042D] font-bold tracking-wide uppercase text-sm mb-3">
              {t('featuresList.badge')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6">
              {t('featuresList.title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} className="text-[#D2042D]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{feat.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PART 2: INDUSTRY USE CASES TABS --- */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D2042D] font-bold tracking-wide uppercase text-sm mb-3">
              {t('industries.badge')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6">
              {t('industries.title')}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 bg-white p-4 md:p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
            
            {/* Tabs List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`w-full text-left px-6 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 font-bold text-lg ${
                    activeTab === ind.id 
                      ? 'bg-[#111111] text-white shadow-lg scale-105' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <span className={activeTab === ind.id ? 'text-[#D2042D]' : 'text-gray-400'}>
                    {getIndustryIcon(ind.id)}
                  </span>
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Tab Content Area */}
            <div className="w-full lg:w-2/3 bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center min-h-[300px]">
              {/* Decorative background circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D2042D]/10 rounded-full blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {industries.map((ind) => 
                  ind.id === activeTab && (
                    <motion.div
                      key={ind.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#D2042D]/10 flex items-center justify-center mb-6">
                        <span className="text-[#D2042D]">{getIndustryIcon(ind.id)}</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        {ind.name}
                      </h4>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        {ind.desc}
                      </p>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesAndIndustries;
