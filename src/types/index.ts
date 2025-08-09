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
  level: number; // 1-5 or 1-100
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}
