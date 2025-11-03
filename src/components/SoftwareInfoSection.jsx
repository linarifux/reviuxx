import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function SoftwareInfoSection() {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-white">
      <div className="bg-black text-white rounded-2xl p-10 flex flex-col lg:flex-row gap-12 items-center justify-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl leading-relaxed text-gray-200 space-y-6 text-left"
        >
          <p>{t("software_section2_p1")}</p>
          <p>{t("software_section2_p2")}</p>
          <p>{t("software_section2_p3")}</p>
        </motion.div>

        {/* RIGHT UI MOCKUPS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex justify-center items-center"
        >
          {/* Reviews Card */}
          <img 
            src={'./images/softwareInfo.avif'}
            className="w-72 md:w-96 rounded-lg shadow-xl"
            alt="Reviews widget"
          />
        </motion.div>
      </div>
    </section>
  );
}
