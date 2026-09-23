import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
  FeaturesSection,
} from "./sections";

export default function App() {
  // i18n translation hook (currently unused here but kept if you add localized headings later)
  useTranslation("common");

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <>
              <HeroSection />
              <FeaturesSection />
            </>
          }
        />
        <Route path="about" element={<AboutSection />} />
        <Route path="experience" element={<ExperienceSection />} />
        <Route path="projects" element={<ProjectsSection />} />
        <Route path="skills" element={<SkillsSection />} />
        <Route path="contact" element={<ContactSection />} />
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-gray-700 dark:text-gray-300">
              404 - Not Found
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
