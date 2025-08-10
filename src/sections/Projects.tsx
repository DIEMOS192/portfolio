import { projects } from "../data";
import { Card } from "../components";
import type { Project } from "../types";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation("common");
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {t("projectsSection.heading")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
