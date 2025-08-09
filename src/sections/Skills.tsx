import { skills } from "../data";
import type { Skill } from "../types";

// SkillsSection: Visual representation of core skills.
// TODO: Adjust skill levels / categories in src/data/skills.ts to reflect your real proficiency.
export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s: Skill) => (
            <div
              key={s.name}
              className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {s.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {s.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 rounded"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
