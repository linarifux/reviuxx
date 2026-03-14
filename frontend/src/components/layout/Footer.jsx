import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook, ArrowRight, Sparkles, Mail } from 'lucide-react';

import Logo from '../../assets/logo.png'; // Optional: If you have a logo image
const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  // Footer Link Categories
  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Integrations', path: '/integrations' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Changelog', path: '/changelog' },
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Blog', path: '/blog' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={18} />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, url: '#' },
    { name: 'Facebook', icon: <Facebook size={18} />, url: '#' },
  ];

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#D2042D]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle hover gradient inside the CTA box */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D2042D]/0 via-[#D2042D]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite] pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {t('cta.title', 'Free profile check and a 90-day plan.')}
            </h3>
            <p className="text-gray-400 text-lg">
              {t('cta.subtitle', 'Live in 14 days. Book a demo today.')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#050505] border border-white/10 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#D2042D] focus:ring-1 focus:ring-[#D2042D] transition-all w-full sm:w-64 placeholder-gray-600 shadow-inner"
            />
            <button className="bg-[#D2042D] hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(210,4,45,0.4)] hover:shadow-[0_0_30px_rgba(210,4,45,0.6)] flex items-center justify-center gap-2 group/btn active:scale-[0.98]">
              {t('cta.button', 'Book a Demo')}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16"
        >
          
          {/* Brand Column (Spans 2 cols on lg) */}
          <motion.div variants={itemVars} className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <img src={Logo} alt="Reviuxx Logo" className="w-24 object-contain" />
              {/* <div className="text-3xl font-extrabold tracking-tighter text-white flex items-center">
                Revi<span className="text-[#D2042D] transition-colors duration-300">uxx</span>
                <Sparkles size={16} className="text-[#D2042D] ml-1 opacity-80 group-hover:animate-pulse" />
              </div> */}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              {t('footer.description', 'The all-in-one software solution for effective review management, automated responses, and optimizing your online presence to drive more sales.')}
            </p>
            
            {/* Direct Contact */}
            <a href="mailto:sales@reviuxx.com" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#D2042D] transition-colors font-medium text-sm mb-8 group">
              <Mail size={16} className="text-gray-500 group-hover:text-[#D2042D] transition-colors" />
              sales@reviuxx.com
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D2042D] hover:border-[#D2042D] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(210,4,45,0.5)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={itemVars}>
            <h4 className="text-white font-bold mb-6 tracking-wide">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVars}>
            <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVars}>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2042D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Reviuxx. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All systems operational
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;