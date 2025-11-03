import { useTranslation } from "react-i18next"; // replace with real assets
import { motion } from "framer-motion";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 bg-white">

      <div className="bg-black text-white rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10 relative">

        {/* ✅ Left phone and floating UI */}
        <div className="relative w-full max-w-md mx-auto">

          {/* Phone Image */}
          <motion.img
            src={'./images/aboutUs.avif'}
            alt="Customer experience UI"
            className="rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* ✅ Text section */}
        <div className="max-w-lg flex flex-col lg:gap-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("about_title")}</h2>

          <p className="text-gray-300 leading-relaxed lg:text-lg">
            {t("about_text")}
          </p>
        </div>

      </div>
    </section>
  );
}
