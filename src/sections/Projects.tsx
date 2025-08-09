import { projects } from "../data";
import { Card } from "../components";
import type { Project } from "../types";

// ProjectsSection: Showcases selected work.
// TODO: Customize project data in src/data/projects.ts (replace example entries, add images under public/images/).
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p: Project) => (
            <Card key={p.id} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
