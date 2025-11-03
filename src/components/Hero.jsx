import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="px-6 md:px-12 lg:px-20 py-32 flex flex-col lg:flex-row items-center justify-between gap-16">

      {/* Left Content */}
      <div className="max-w-xl">
        <p className="text-sm text-gray-300 mb-3">{t("welcome")}</p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {t("hero_heading")}
        </h1>

        <p className="text-gray-300 mb-8">{t("hero_subtext")}</p>

        <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold text-white transition">
          {t("try_free")}
        </button>
      </div>

      {/* Right Side Image + Popups */}
      <div className="relative w-full max-w-2xl">

        <img
          src='./images/asd.avif'
          alt="Business"
          className="rounded-xl shadow-xl"
        />

      </div>
    </section>
  );
}
