// TypeScript type definitions
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  iconClass: string; // Font Awesome CSS class (e.g., "fab fa-html5")
  category?: string; // optional grouping if needed later
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}
