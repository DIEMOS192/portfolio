import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    position: "Frontend Developer",
    duration: "Jan 2023 - Present",
    description: [
      "Developed and maintained React applications serving 10k+ users",
      "Implemented responsive designs using Tailwind CSS and modern CSS techniques",
      "Collaborated with design team to create pixel-perfect UI components",
      "Optimized application performance resulting in 40% faster load times",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
  },
  {
    id: "2",
    company: "Digital Agency",
    position: "Junior Web Developer",
    duration: "Jun 2022 - Dec 2022",
    description: [
      "Built responsive websites for various clients using HTML, CSS, and JavaScript",
      "Worked with WordPress and custom CMS solutions",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];
