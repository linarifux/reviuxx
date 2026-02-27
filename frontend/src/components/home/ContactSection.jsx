import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, PhoneCall, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  
  // 1. Form & UI State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
    bot_field: '' // Honeypot field for spam prevention
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [shake, setShake] = useState(false); // For error animation

  const maxLength = 500;

  // 2. Robust Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.errors.name', 'Name is required');
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email', 'Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid', 'Please enter a valid email address');
    }
    
    if (!formData.subject.trim()) newErrors.subject = t('contact.errors.subject', 'Subject is required');
    if (!formData.message.trim()) newErrors.message = t('contact.errors.message', 'Message is required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 3. Input Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Graceful slice for max length (handles massive pastes nicely)
    if (name === 'message' && typeof newValue === 'string') {
      if (newValue.length > maxLength) {
        newValue = newValue.slice(0, maxLength);
      }
    }

    // Clear specific error immediately when user starts fixing it
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  // 4. Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check (Bots fill this, humans don't see it)
    if (formData.bot_field !== '') return;

    if (!formData.consent) return;
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate robust API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form gracefully after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '', consent: false, bot_field: '' });
          setErrors({});
        }, 5000);
      }, 2000);
    } else {
      // Trigger error shake animation
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  // Helper function to calculate input classes
  const getInputClasses = (fieldName) => {
    const hasError = !!errors[fieldName];
    const isFocused = focusedField === fieldName;
    return `w-full bg-transparent px-5 py-4 text-white focus:outline-none transition-all duration-300 ${
      hasError 
        ? 'border-red-500/50 focus:border-red-500' 
        : isFocused 
          ? 'border-[#D2042D] ring-1 ring-[#D2042D]/50' 
          : 'border-white/10 hover:border-white/20'
    }`;
  };

  const getLabelClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = typeof formData[fieldName] === 'string' && formData[fieldName].length > 0;
    const hasError = !!errors[fieldName];
    
    return `absolute left-4 transition-all duration-300 pointer-events-none px-1 rounded-sm ${
      isFocused || hasValue 
        ? `-top-2.5 text-xs bg-[#0a0a0a] ${hasError ? 'text-red-500' : 'text-[#D2042D]'}` 
        : `top-4 text-sm ${hasError ? 'text-red-500/70' : 'text-gray-500'}`
    }`;
  };

  return (
    <section id="contact" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      
      {/* Animated Ambient Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#D2042D]/10 rounded-full blur-[200px] pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0" 
      />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3 translate-x-1/3 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Text & Info */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md mb-8"
              >
                <Sparkles size={16} className="text-[#D2042D]" />
                <span className="text-sm font-bold text-gray-200 tracking-wide uppercase">
                  {t('contact.badge', 'Contact Us')}
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-transparent bg-clip-text bg-linear-to-br from-white via-white to-gray-500"
              >
                {t('contact.title')}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg"
              >
                {t('contact.subtitle')}
              </motion.p>
            </div>

            {/* Contact Information Blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              {/* Email Block */}
              <motion.a 
                whileHover={{ y: -5, scale: 1.02 }}
                href={`mailto:${t('contact.emailValue')}`}
                className="group flex items-start gap-5 p-6 rounded-3xl bg-linear-to-b from-[#111111] to-[#0a0a0a] border border-white/5 hover:border-[#D2042D]/40 transition-all flex-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-[#D2042D]/20 transition-colors flex items-center justify-center shrink-0 relative z-10">
                  <Mail className="text-gray-400 group-hover:text-[#D2042D] transition-colors" size={26} />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium text-gray-500 mb-1">{t('contact.emailLabel')}</p>
                  <p className="text-white font-bold text-lg break-all group-hover:text-[#D2042D] transition-colors">
                    {t('contact.emailValue')}
                  </p>
                </div>
              </motion.a>

              {/* Phone Block */}
              <motion.a 
                whileHover={{ y: -5, scale: 1.02 }}
                href={`tel:${t('contact.phoneValue')}`}
                className="group flex items-start gap-5 p-6 rounded-3xl bg-linear-to-b from-[#111111] to-[#0a0a0a] border border-white/5 hover:border-[#D2042D]/40 transition-all flex-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-[#D2042D]/20 transition-colors flex items-center justify-center shrink-0 relative z-10">
                  <PhoneCall className="text-gray-400 group-hover:text-[#D2042D] transition-colors" size={26} />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium text-gray-500 mb-1">{t('contact.phoneLabel')}</p>
                  <p className="text-white font-bold text-lg group-hover:text-[#D2042D] transition-colors">
                    {t('contact.phoneValue')}
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Dynamic Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', damping: 20 }}
          >
            <div className="bg-[#111111]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", damping: 12 }}
                      className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 relative"
                    >
                      <div className="absolute inset-0 border-4 border-green-500/20 rounded-full animate-ping" />
                      <CheckCircle2 size={48} className="text-green-500" />
                    </motion.div>
                    <h3 className="text-3xl font-extrabold text-white mb-4">{t('contact.successTitle')}</h3>
                    <p className="text-gray-400 max-w-xs leading-relaxed">{t('contact.successText')}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="relative z-10"
                    noValidate
                  >
                    {/* Honeypot spam prevention */}
                    <input type="text" name="bot_field" value={formData.bot_field} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      
                      {/* Name Field */}
                      <div className="relative w-full mb-8">
                        <div className={`relative rounded-2xl bg-[#0a0a0a] border ${getInputClasses('name')}`}>
                          <label htmlFor="name" className={getLabelClasses('name')}>{t('contact.name')}</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent focus:outline-none" />
                        </div>
                        <AnimatePresence>
                          {errors.name && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute -bottom-6 left-2 flex items-center gap-1 text-red-500 text-xs"><AlertCircle size={12} /> {errors.name}</motion.div>}
                        </AnimatePresence>
                      </div>

                      {/* Email Field */}
                      <div className="relative w-full mb-8">
                        <div className={`relative rounded-2xl bg-[#0a0a0a] border ${getInputClasses('email')}`}>
                          <label htmlFor="email" className={getLabelClasses('email')}>{t('contact.email')}</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent focus:outline-none" />
                        </div>
                        <AnimatePresence>
                          {errors.email && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute -bottom-6 left-2 flex items-center gap-1 text-red-500 text-xs"><AlertCircle size={12} /> {errors.email}</motion.div>}
                        </AnimatePresence>
                      </div>

                    </div>

                    {/* Subject Field */}
                    <div className="relative w-full mb-8">
                      <div className={`relative rounded-2xl bg-[#0a0a0a] border ${getInputClasses('subject')}`}>
                        <label htmlFor="subject" className={getLabelClasses('subject')}>{t('contact.subject')}</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent focus:outline-none" />
                      </div>
                      <AnimatePresence>
                        {errors.subject && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute -bottom-6 left-2 flex items-center gap-1 text-red-500 text-xs"><AlertCircle size={12} /> {errors.subject}</motion.div>}
                      </AnimatePresence>
                    </div>
                    
                    {/* Message Field */}
                    <div className="relative w-full mb-8">
                      <div className={`relative rounded-2xl bg-[#0a0a0a] border ${getInputClasses('message')}`}>
                        <label htmlFor="message" className={getLabelClasses('message')}>{t('contact.message', 'Message')}</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} className="w-full bg-transparent focus:outline-none resize-none min-h-[120px]" rows={4} />
                      </div>
                      {/* Character Counter */}
                      <div className={`absolute bottom-3 right-4 text-xs font-medium transition-colors ${formData.message.length >= maxLength ? 'text-red-500' : 'text-gray-600'}`}>
                        {formData.message.length}/{maxLength}
                      </div>
                      <AnimatePresence>
                        {errors.message && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute -bottom-6 left-2 flex items-center gap-1 text-red-500 text-xs"><AlertCircle size={12} /> {errors.message}</motion.div>}
                      </AnimatePresence>
                    </div>

                    {/* Styled Consent Checkbox */}
                    <label className="flex items-start gap-4 cursor-pointer group mt-4 mb-8 relative">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="peer appearance-none w-6 h-6 border-2 border-white/20 rounded-md bg-[#0a0a0a] checked:bg-[#D2042D] checked:border-[#D2042D] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2042D]/40 focus:ring-offset-2 focus:ring-offset-[#111111]"
                        />
                        <CheckCircle2 size={16} className="text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-400 leading-relaxed select-none group-hover:text-gray-300 transition-colors">
                        {t('contact.privacyStart')}
                        <a href="#privacy" onClick={(e) => e.stopPropagation()} className="text-[#D2042D] font-medium hover:underline underline-offset-4 mx-1 relative z-20">
                          {t('contact.privacyLink')}
                        </a>
                        {t('contact.privacyEnd')}
                      </span>
                    </label>

                    {/* Interactive Submit Button with Shake Animation */}
                    <motion.button
                      type="submit"
                      animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
                      transition={{ duration: 0.4 }}
                      disabled={isSubmitting || !formData.consent}
                      className="w-full flex items-center justify-center gap-3 bg-[#D2042D] text-white py-4.5 rounded-2xl font-bold text-lg hover:bg-red-700 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(210,4,45,0.3)] hover:shadow-[0_0_30px_rgba(210,4,45,0.5)] disabled:opacity-50 disabled:grayscale disabled:pointer-events-none overflow-hidden relative group"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('contact.submitting')}
                          </>
                        ) : (
                          <>
                            {t('contact.submit')} 
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;