import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      title: t("pricing.bronze.title"),
      icon: "🥉",
      features: [
        t("pricing.bronze.f1"),
        t("pricing.bronze.f2"),
        t("pricing.bronze.f3"),
        t("pricing.bronze.f4"),
        t("pricing.bronze.f5"),
        t("pricing.bronze.f6"),
        t("pricing.bronze.f7"),
      ],
      price: "99€ / " + t("pricing.month"),
    },
    {
      title: t("pricing.silver.title"),
      icon: "🥈",
      features: [
        t("pricing.silver.f0"),
        t("pricing.silver.f1"),
        t("pricing.silver.f2"),
        t("pricing.silver.f3"),
        t("pricing.silver.f4"),
      ],
      price: "150€ / " + t("pricing.month"),
    },
    {
      title: t("pricing.gold.title"),
      icon: "🥇",
      features: [
        t("pricing.gold.f0"),
        t("pricing.gold.f1"),
        t("pricing.gold.f2"),
        t("pricing.gold.f3"),
      ],
      price: "220€ / " + t("pricing.month"),
    },
    {
      title: t("pricing.platinum.title"),
      icon: "🏆",
      features: [
        t("pricing.platinum.f0"),
        t("pricing.platinum.f1"),
        t("pricing.platinum.f2"),
      ],
      price: "3000€ / " + t("pricing.year"),
    },
  ];

  return (
    <section id="pricing" className="px-6 md:px-12 lg:px-24 py-24 bg-white text-black text-left">
      
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {t("pricing.title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-black text-white rounded-xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                {plan.title} <span className="text-2xl">{plan.icon}</span>
              </h3>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <p className="font-semibold text-lg mb-6">{plan.price}</p>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">
              {t("pricing.order")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
