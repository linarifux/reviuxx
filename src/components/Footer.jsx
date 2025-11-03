import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-gray-300 pt-14 pb-8 px-6 md:px-12 lg:px-24 mt-20">
      
      {/* Top footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Reviuxx</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            {t("footer.tagline")}
          </p>

          {/* Social */}
          <div className="flex gap-4 text-xl mt-5">
            <a className="hover:text-blue-500 transition" href="#"><FaFacebook /></a>
            <a className="hover:text-pink-500 transition" href="#"><FaInstagram /></a>
            <a className="hover:text-blue-700 transition" href="#"><FaLinkedin /></a>
            <a className="hover:text-sky-500 transition" href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">{t("footer.links")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-red-500 transition" to="/">{t("nav.home")}</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/#about">{t("nav.about")}</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/software">{t("nav.software")}</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/contact">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white mb-3">{t("footer.legal")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-red-500 transition" to="/privacy">{t("footer.privacy")}</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/terms">{t("footer.terms")}</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/impressum">{t("nav.impressum")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">{t("footer.contact")}</h3>
          <p className="text-sm mb-2">support@reviuxx.com</p>
          <p className="text-sm">{t("footer.businessAddress")}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-6 mb-4"></div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Reviuxx — {t("footer.rights")}
      </div>
    </footer>
  );
}
