const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
        HeadingLevel, LevelFormat, convertInchesToTwip } = require("docx");
const fs = require("fs");

const FONT = "Calibri";
// sampled from the original export: navy headings/links, near-black body, grey notes
const NAVY = "1F3864", INK = "1A1A1A", GREY = "555555";
const half = (pt) => pt * 2;                    // docx sizes are half-points
const SP = (before, after) => ({ before: before * 20, after: after * 20 });  // pt -> twips

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: half(o.size || 10),
  bold: o.bold, italics: o.italics, color: o.color || INK });

// Section heading: bold caps over a hairline rule, matching the original's 0.7pt border
const heading = (text) => new Paragraph({
  spacing: SP(10, 6),
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 2 } },
  children: [run(text, { size: 11, bold: true, color: NAVY })],
});

const bullet = (text) => new Paragraph({
  numbering: { reference: "cv-bullets", level: 0 },
  spacing: SP(0, 2),
  children: [run(text)],
});

// Entry title on the left with a lighter meta note trailing it, as in the original
const entry = (title, ...meta) => new Paragraph({
  spacing: SP(8, 2),
  children: [run(title, { size: 10.5, bold: true }),
             ...meta.map((m) => run("   " + m.text,
               { size: 9.5, italics: m.italics !== false, color: m.color || GREY }))],
});

const doc = new Document({
  creator: "Omar Tarek Mohamed",
  title: "Omar Tarek Mohamed - CV",
  numbering: {
    config: [{
      reference: "cv-bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "\u25CF", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.25) } },
                 run: { font: "Arial", size: half(10) } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },                 // US Letter
        margin: { top: 576, bottom: 504, left: 720, right: 720 }, // 0.4" top, 0.5" sides
      },
    },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: SP(0, 0),
        children: [run("Omar Tarek Mohamed", { size: 17, bold: true, color: NAVY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: SP(4, 0),
        children: [run("+20 112 917 5363   |   omertarek131@gmail.com   |   Giza, Egypt")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: SP(2, 0),
        children: [run("omartarek-portfolio.vercel.app   |   github.com/DIEMOS192   |   linkedin.com/in/omartarek192", { color: NAVY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: SP(4, 0),
        children: [run("Fresh Computer Science graduate · Front-end developer (React / TypeScript) with full-stack experience in Django and Spring Boot", { italics: true, color: GREY })] }),

      heading("EDUCATION"),
      new Paragraph({ spacing: SP(6, 0), children: [
        run("Bachelor of Computer Science and Artificial Intelligence — Information Systems", { bold: true })] }),
      new Paragraph({ spacing: SP(2, 0), children: [
        run("Faculty of Computers and Artificial Intelligence, Cairo University, Giza, Egypt")] }),
      new Paragraph({ spacing: SP(2, 0), children: [
        run("2022 – 2026 (Fresh Graduate)   |   GPA: 3.28")] }),
      new Paragraph({ spacing: SP(4, 0), children: [
        run("Relevant Courses: ", { size: 9.5, bold: true }),
        run("Data Structures, Algorithms, Object Oriented Programming, Advanced Software Engineering, Database Management, Data Warehouses, Web Design, Big Data, Data Mining", { size: 9.5 })] }),

      heading("EXPERIENCE"),
      entry("Frontend Developer (React), EgronX — Internship", { text: "Aug 2025 – Oct 2025   |   React, Vite, Tailwind CSS, i18next" }),
      bullet("Built the frontend for GamerMajlis, a gaming community platform, on a six-person team working Agile sprints in Jira."),
      bullet("Implemented clip and discussion posting, event and tournament organization, an AI chatbot guide, a marketplace, direct messaging, and Discord integration."),
      bullet("Implemented Arabic/English localization with RTL layout support (i18next) and a shared component system reused across the Events, Tournaments, Marketplace, Messages, and Profile pages."),

      heading("PROJECTS"),
      entry("LearnoLab — Bilingual Mastery-Based Learning Platform",
            { text: "learnolab.com", italics: false, color: NAVY },
            { text: "React 19, TypeScript, Django 5.2, DRF" }),
      bullet("Graduation project (5-person team): a bilingual educational platform with classrooms, spaced-repetition practice, and analytics dashboards for both educators and students, built to support B2B and B2C deployment."),
      bullet("Contributed across the full stack; owned all UI/UX design and implemented roughly 90% of the frontend."),
      entry("Banking Data Warehouse Automation", { text: "SSIS, SQL, Visual Studio" }),
      bullet("Built a full ETL pipeline with SSIS to extract, transform, and load banking data into a warehouse."),
      bullet("Scheduled and deployed SSIS packages for regular operation and automated data synchronization."),

      heading("SKILLS"),
      ...[["Frontend: ", "React, TypeScript, JavaScript, Vite, HTML, CSS"],
          ["Backend & APIs: ", "Django, Django REST Framework, REST APIs, Spring Boot, Spring Security, Laravel (basic)"],
          ["Data: ", "SQL, SSIS, Data Warehousing (ETL, dimensional modeling)"],
          ["Languages: ", "C++ (strong), Java, Python"],
          ["Tools: ", "Git, GitHub, VS Code, Docker"],
          ["Soft Skills: ", "Teamwork, Adaptability, Problem Solving"],
          ["Languages Spoken: ", "Arabic (Native), English (Fluent)"]]
        .map(([label, rest]) => new Paragraph({ spacing: SP(4, 0),
          children: [run(label, { bold: true }), run(rest)] })),
    ],
  }],
});

Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("wrote", process.argv[2], b.length, "bytes"); });
