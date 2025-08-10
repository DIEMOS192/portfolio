import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "ElMawso3a-Online-Library",
    description: "A full-stack online library website built with Django.",
    technologies: ["Django", "Python", "SQLite"],
    image: "/images/ElMawso3a-Online-Library.png",
    liveUrl: undefined, // Not yet deployed
    githubUrl:
      "https://github.com/DIEMOS192/ElMawso3a-Online-Library/tree/master",
  },
  {
    id: "2",
    title: "Learning-Management-System-LMS",
    description:
      "Back End LMS Java-based, built with Spring Boot, h2 database, designed to be accessed via API requests.",
    technologies: ["Java", "Spring Boot", "H2", "REST API"],
    image: "/images/Learning-Management-System-LMS.png",
    liveUrl: undefined, // Not yet deployed
    githubUrl: "https://github.com/DIEMOS192/Learning-Management-System-LMS",
  },
  {
    id: "3",
    title: "My-Portfolio",
    description: "A personal portfolio website built with React.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/My-Portfolio.png",
    liveUrl: undefined, // This current portfolio
    githubUrl: "https://github.com/DIEMOS192/My-Portfolio",
  },
  {
    id: "4",
    title: "CLI-Custom",
    description:
      "Java-based custom command-line interface (CLI) application simulating a file system command environment.",
    technologies: ["Java", "CLI", "File System"],
    image: "/images/CLI-Custom.png",
    liveUrl: undefined, // CLI application
    githubUrl: "https://github.com/DIEMOS192/CLI-Custom",
  },
  {
    id: "5",
    title: "Multithreaded-Parking-System-Simulation",
    description: "A multithreaded parking system simulation built with Java.",
    technologies: ["Java", "Multithreading", "Simulation"],
    image: "/images/Multithreaded-Parking-System-Simulation.png",
    liveUrl: undefined, // Desktop application
    githubUrl:
      "https://github.com/DIEMOS192/Multithreaded-Parking-System-Simulation",
  },
  {
    id: "6",
    title: "University-Library-System",
    description: "A university library system built with Python.",
    technologies: ["Python", "Tkinter", "Pyodbc", "SQL Server"],
    image: "/images/University-Library-System.png",
    liveUrl: undefined, // Desktop application
    githubUrl: "https://github.com/DIEMOS192/University-Library-System",
  },

  {
    id: "7",
    title: "DWH-Project",
    description:
      "Banking Data warehouse project built from an OLTP source, featuring dimensional modeling and automated ETL with SSIS.",
    technologies: ["SSIS", "Dimensional Modeling", "ETL", "SQL Server"],
    image: "/images/DWH-Project.png",
    liveUrl: undefined, // Data warehouse project
    githubUrl: "https://github.com/DIEMOS192/DWH-Project",
  },
  {
    id: "8",
    title: "CPU-Schedulers-Simulator",
    description:
      "Project that simulates CPU scheduling algorithms built with Java, JavaFX for GUI.",
    technologies: ["Java", "JavaFX", "CPU Scheduling"],
    image: "/images/CPU-Schedulers-Simulator.png",
    liveUrl: undefined, // Desktop application
    githubUrl: "https://github.com/DIEMOS192/CPU-Schedulers-Simulator",
  },
];
