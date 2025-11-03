import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SoftwareInfoSection from "./SoftwareInfoSection";

export default function Software() {
  const { t } = useTranslation();

  return (
    <section id="software" className="px-6 md:px-12 lg:px-24 py-24 bg-white text-black text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-extrabold mb-6"
      >
        {t("software_title")}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        {t("software_text")}
      </motion.p>

      {/* Software UI Area */}
      <div className="relative w-full flex justify-center">
        <motion.img
          src={'./images/software.avif'}
          alt="Software UI"
          className="max-w-5xl w-full rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <SoftwareInfoSection />
    </section>
  );
}
