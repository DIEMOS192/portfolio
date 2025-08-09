import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/project-1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with real-time collaboration.",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    image: "/images/project-2.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  // Add more projects as needed
];
