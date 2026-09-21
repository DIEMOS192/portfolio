import type { Skill } from "../types";

// Font Awesome icons via CDN - using CSS classes.
// Ordered to match the CV: frontend first, then backend, data, languages, tools.
export const skills: Skill[] = [
  { name: "React.js", iconClass: "fab fa-react" },
  { name: "TypeScript", iconClass: "fas fa-file-code" }, // File-code icon
  { name: "JavaScript", iconClass: "fab fa-js-square" },
  { name: "Vite", iconClass: "fas fa-bolt" }, // Bolt icon for Vite
  { name: "Tailwind", iconClass: "fas fa-palette" }, // Palette icon for styling framework
  { name: "HTML", iconClass: "fab fa-html5" },
  { name: "CSS", iconClass: "fab fa-css3-alt" },
  { name: "Django", iconClass: "fas fa-cubes" }, // Cubes icon for Django
  { name: "Spring Boot", iconClass: "fas fa-leaf" }, // Leaf icon for Spring
  { name: "Laravel", iconClass: "fab fa-laravel" },
  { name: "SQL", iconClass: "fas fa-database" },
  { name: "SSIS", iconClass: "fas fa-server" }, // Server icon
  { name: "C++", iconClass: "fas fa-cogs" }, // Cogs icon for C++
  { name: "Java", iconClass: "fab fa-java" },
  { name: "Python", iconClass: "fab fa-python" },
  { name: "Git", iconClass: "fab fa-git-alt" },
  { name: "Docker", iconClass: "fab fa-docker" },
  { name: "VS Code", iconClass: "fas fa-edit" }, // Editor icon
];
