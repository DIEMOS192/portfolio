import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation("common");
  const current = i18n.language || "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleLang = () => {
    const next = current.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(next);
  };
  const closeMobile = () => setMobileOpen(false);
  const navLinks = [
    { to: "/", label: t("nav.home"), exact: true },
    { to: "/about", label: t("nav.about") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/skills", label: t("nav.skills") },
    { to: "/contact", label: t("nav.contact") },
  ];
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
              onClick={closeMobile}
            >
              {t("personal.name")}
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.exact}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : l.to === "/"
                        ? "text-gray-900 dark:text-white hover:text-blue-600"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="/Omar_Tarek_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {t("nav.resume")}
              </a>
            </div>
          </div>

          {/* Mobile nav toggle & controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLang}
              className="px-3 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-black text-white dark:text-gray-200 transition-colors"
            >
              {current.startsWith("ar") ? "EN" : "ع"}
            </button>
            <DarkModeToggle />

            {/* Hamburger button */}
            <div className="md:hidden">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 animate-fade-in z-50">
            <div className="flex flex-col py-4 px-6 space-y-2">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.exact}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-base font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900"
                        : "text-gray-900 dark:text-white hover:text-blue-600"
                    }`
                  }
                  onClick={closeMobile}
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="/Omar_Tarek_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                onClick={closeMobile}
              >
                {t("nav.resume")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
