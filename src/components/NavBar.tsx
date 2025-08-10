import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation("common");
  const current = i18n.language || "en";
  const toggleLang = () => {
    const next = current.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(next);
  };
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              {t("personal.name")}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-900 dark:text-white hover:text-blue-600"
                  }`
                }
              >
                {t("nav.home")}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`
                }
              >
                {t("nav.about")}
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`
                }
              >
                {t("nav.projects")}
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`
                }
              >
                {t("nav.skills")}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`
                }
              >
                {t("nav.contact")}
              </NavLink>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {t("nav.resume")}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLang}
              className="px-3 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 bg-black text-white dark:text-gray-200 transition-colors"
            >
              {current.startsWith("ar") ? "EN" : "ع"}
            </button>
            <DarkModeToggle />

            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none">
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
      </div>
    </nav>
  );
};

export default Navbar;
