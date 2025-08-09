interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title = "Sample Project",
  description = "This is a sample project card with clean Tailwind styling. Replace this content with your actual project information.",
  image,
  className = "",
  children,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Sample Project Card
      </h2>
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

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>

          {children && <div className="mt-4">{children}</div>}

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
              Tailwind
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
              View Project
            </button>
            <button className="flex-1 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
