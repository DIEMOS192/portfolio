import type { Skill } from "../types";

export const skills: Skill[] = [
  // SKILLS DATA
  // TODO: Adjust skill list & levels (0-100) to reflect your actual proficiency.
  // Categories can be any grouping you like (frontend, backend, tools, design, etc.)
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Frontend (example values)
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },

  // Backend (example values)
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Vite", level: 80, category: "tools" },
  { name: "Webpack", level: 70, category: "tools" },

  // Tools (example values)
  // Design
  { name: "Figma", level: 75, category: "design" },
  { name: "Adobe XD", level: 65, category: "design" },
  // Design (example values)
];
