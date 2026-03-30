import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('');

  // Fetch the localized sections array from i18n
  const sections = t('privacy.sections', { returnObjects: true });

  // Scroll spy logic for the sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  // Helper function to render bold text automatically from Markdown **text** syntax
  const renderContent = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white">{part.replace(/\*\*/g, '')}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 pt-32 pb-24 px-4 sm:px-6 relative selection:bg-[#D2042D] selection:text-white">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D2042D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            {t('privacy.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-medium"
          >
            {t('privacy.subtitle')}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/4 hidden lg:block"
          >
            <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Contents</h3>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={`nav-${section.id}`}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${
                      activeSection === section.id 
                        ? 'bg-[#D2042D]/10 text-[#D2042D] font-bold border-l-2 border-[#D2042D]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-3/4"
          >
            <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
              
              {sections.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-32 ${index !== sections.length - 1 ? 'mb-12' : ''}`}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  
                  {/* Split content by newlines to render proper paragraphs */}
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>
                        {renderContent(paragraph)}
                      </p>
                    ))}
                  </div>
                  
                  {index !== sections.length - 1 && (
                    <div className="h-px w-full bg-white/5 mt-12" />
                  )}
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;