import type { Project } from "../types";
import { useTranslation } from "react-i18next";

interface CardProps extends Project {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  className = "",
  children,
}) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md ${className}`}
    >
      {image ? (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* dir="auto": project copy is English-only, so keep it LTR even in the Arabic layout */}
      <div className="p-6" dir="auto">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {children && <div className="mt-4">{children}</div>}

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <i className="fas fa-external-link-alt"></i>
              {t("projectsSection.live")}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <i className="fab fa-github"></i>
              {t("projectsSection.code")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
