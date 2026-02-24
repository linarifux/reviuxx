import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook, ArrowRight, Sparkles } from 'lucide-react';

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

  return (
    <footer className="relative bg-[#050505] pt-20 overflow-hidden border-t border-white/5 mt-24">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#D2042D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
          {/* Subtle hover gradient inside the CTA box */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D2042D]/0 via-[#D2042D]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite] pointer-events-none" />
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Ready to scale your reputation?
            </h3>
            <p className="text-gray-400">
              Join thousands of businesses managing their reviews flawlessly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-black/50 border border-white/10 text-white px-6 py-3.5 rounded-full focus:outline-none focus:border-[#D2042D] focus:ring-1 focus:ring-[#D2042D] transition-all w-full sm:w-64"
            />
            <button className="bg-[#D2042D] hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(210,4,45,0.4)] flex items-center justify-center gap-2 group/btn">
              Get Started
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column (Spans 2 cols on lg) */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="text-3xl font-extrabold tracking-tighter text-white flex items-center">
                Revi<span className="text-[#D2042D] transition-colors duration-300">uxx</span>
                <Sparkles size={16} className="text-[#D2042D] ml-1 opacity-80 group-hover:animate-pulse" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              {t('footer.description', 'The all-in-one software solution for effective review management, automated responses, and optimizing your online presence to drive more sales.')}
            </p>
            
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
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
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
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
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
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
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
          </div>

        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Reviuxx. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
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