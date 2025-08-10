import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// HeroSection: Top banner introducing Omar Tarek.
export default function HeroSection() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/projects");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")} {t("hero.subtitle_cont", { defaultValue: "" })}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleViewWork}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("hero.ctaWork")}
          </button>
          <button
            onClick={handleContact}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            {t("hero.ctaContact")}
          </button>
        </div>
      </div>
    </section>
  );
}
