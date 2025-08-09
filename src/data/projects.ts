import type { Project } from "../types";

// PROJECTS DATA
// TODO: Replace the sample projects below with your real projects.
// Fields:
//  - id: unique string
//  - title: project name
//  - description: short 1-2 sentence summary
//  - technologies: array of key tech strings
//  - image: path under /public/images (add your image files there)
//  - liveUrl: production / demo link
//  - githubUrl: repository link

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
  // TODO: Add more project objects as needed
];
