import { useTranslation } from "react-i18next";

// AboutSection
// Organized presentation of bio & education using i18n keys under common.about
// Edit translations in: src/i18n/locales/<lang>/common.json
export default function AboutSection() {
  const { t } = useTranslation("common");

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t("about.heading")}
        </h2>

        <div className="space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <p>{t("about.description")}</p>
          <p>{t("about.specialization")}</p>
          <p>{t("about.experience")}</p>
          <p>{t("about.learning")}</p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("about.heading2")}
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-medium">
                {t("about.education.Institution")}:{" "}
              </span>
              {t("about.education.Institution")}
            </li>
            <li>
              <span className="font-medium">
                {t("about.education.YearLabel", { defaultValue: "Year" })}:{" "}
              </span>
              {t("about.education.Year")}
            </li>
            <li>
              <span className="font-medium">
                {t("about.education.DeptLabel", { defaultValue: "Department" })}
                :{" "}
              </span>
              {t("about.education.dept")}
            </li>
            <li>
              <span className="font-medium">GPA: </span>
              {t("about.education.GPA")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
