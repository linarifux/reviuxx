import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1"), icons: true },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="px-6 md:px-12 lg:px-24 py-24 bg-white text-black scroll-mt-24">
      
      <h2 className="text-center text-4xl font-extrabold mb-14 tracking-tight">
        {t("faq.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left Image */}
        <motion.img 
          src={'./images/faq.avif'} 
          alt="FAQ" 
          className="rounded-2xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Right FAQ */}
        <div>
          <input 
            type="text"
            placeholder={t("faq.search")}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-4 font-medium text-left text-gray-800 hover:text-blue-600 transition"
                >
                  {item.q}
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-500 text-sm" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-5 pb-4 pt-1 text-gray-700 text-sm bg-white/60 backdrop-blur"
                    >
                      <div className="leading-relaxed text-gray-700">
                        {item.a}
                      </div>

                      {/* Social icons only for Q1 */}
                      {item.icons && (
                        <div className="flex gap-4 mt-3 text-xl text-gray-600">
                          <FaFacebook className="hover:text-blue-600 cursor-pointer transition" />
                          <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                          <FaLinkedin className="hover:text-blue-700 cursor-pointer transition" />
                          <FaTwitter className="hover:text-sky-500 cursor-pointer transition" />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
