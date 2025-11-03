import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + id;
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navItems = [
    { name: t("nav.home"), id: 'home', path: "/", isAnchor: true },
    { name: t("nav.about"), id: 'about', path: "#about", isAnchor: true },
    { name: t("nav.software"), id: 'software', path: "#software", isAnchor: true },
    { name: t("nav.faqs"), id: 'faq', path: "#faq", isAnchor: true },
    { name: t("nav.impressum"), id: 'impressum', path: "/impressum" },
    { name: t("nav.contact"), id: 'contact', path: "/contact" },
  ];

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] bg-white shadow-md rounded-full py-3 px-6 z-50 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-black">
        Reviuxx
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.isAnchor ? (
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-red-500 transition"
              >
                {item.name}
              </button>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-red-500 transition ${
                    isActive ? "text-red-500 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          to="/login"
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          {t("nav.login")}
        </Link>

        <select
          value={i18n.language}
          onChange={changeLang}
          className="border text-sm px-2 py-1 rounded-lg bg-white cursor-pointer"
        >
          <option value="de">🇩🇪 DE</option>
          <option value="en">🇬🇧 EN</option>
        </select>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 right-4 bg-white shadow-lg rounded-xl py-4 px-6 w-56 flex flex-col gap-4 md:hidden">

          {navItems.map((item) =>
            item.isAnchor ? (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 font-medium text-left hover:text-red-500"
              >
                {item.name}
              </button>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-medium hover:text-red-500"
              >
                {item.name}
              </NavLink>
            )
          )}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            {t("nav.login")}
          </Link>

          <select
            value={i18n.language}
            onChange={changeLang}
            className="border text-sm px-2 py-1 rounded-lg bg-white cursor-pointer"
          >
            <option value="de">🇩🇪 DE</option>
            <option value="en">🇬🇧 EN</option>
          </select>
        </div>
      )}
    </nav>
  );
}
