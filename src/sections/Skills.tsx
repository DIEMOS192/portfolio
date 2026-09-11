import { skills } from "../data";
import type { Skill } from "../types";
import { useTranslation } from "react-i18next";

// Font Awesome icon-based skills grid
export default function SkillsSection() {
  const { t } = useTranslation("common");
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {t("skillsSection.heading")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s: Skill) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow transition"
            >
              <i
                className={`${s.iconClass} text-4xl text-blue-600 dark:text-blue-400`}
                aria-hidden="true"
              />
              <span
                dir="ltr"
                className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center"
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
