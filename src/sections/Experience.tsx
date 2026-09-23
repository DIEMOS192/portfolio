import { experience } from "../data";
import type { Experience } from "../types";
import { useTranslation } from "react-i18next";

export default function ExperienceSection() {
  const { t } = useTranslation("common");
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {t("experienceSection.heading")}
        </h2>
        <div className="space-y-8">
          {experience.map((item: Experience) => (
            <article
              key={item.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.position}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.duration}
                </span>
              </div>
              <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                {item.company}
              </p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-gray-700 dark:text-gray-300">
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    dir="ltr"
                    className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
