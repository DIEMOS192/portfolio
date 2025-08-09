import type { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Vite", level: 80, category: "tools" },
  { name: "Webpack", level: 70, category: "tools" },

  // Design
  { name: "Figma", level: 75, category: "design" },
  { name: "Adobe XD", level: 65, category: "design" },
];
