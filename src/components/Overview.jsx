import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Overview() {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black px-6 md:px-12 lg:px-24 py-24">

      {/* Top part */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-16 lg:justify-center">
        
        {/* Left text */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            {t("overview_title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("overview_paragraph")}
          </p>
        </div>

        {/* Right visuals */}
        <div className="relative max-w-md">
          <motion.img 
            src={'./images/overview.avif'} 
            alt="Reply UI"
            className="rounded-lg shadow-xl relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />


        </div>

      </div>

      {/* Review platform logos */}
      <div className="flex items-center justify-center gap-8 md:gap-12 mb-10 flex-wrap">
        <img src={'./icons/google.svg'} alt="Google" className="w-14 md:w-20" />
        <img src={'./icons/tripadvisor.svg'} alt="Tripadvisor" className="w-14 md:w-20" />
        <img src={'./icons/facebook.svg'} alt="Facebook" className="w-14 md:w-20" />
        <img src={'./icons/yelp.svg'} alt="Yelp" className="w-14 md:w-20" />
      </div>

      {/* Bottom text */}
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        {t("overview_bottom")}
      </p>

    </section>
  );
}
