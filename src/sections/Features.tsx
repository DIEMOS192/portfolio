// FeaturesSection: Highlights value propositions / key qualities.
// Extracted from duplicated content in previous App.tsx for clarity.
// TODO: Adjust feature titles & descriptions to match your personal brand.
const features = [
  {
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Fast & Modern",
    desc: "Built with modern tooling (React, TypeScript, Tailwind) focusing on performance.",
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
    title: "Responsive Design",
    desc: "Mobile-first layouts that adapt beautifully to any screen size.",
    svgPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Easy to Customize",
    desc: "Clean component structure makes extending the site straightforward.",
    svgPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v14a4 4 0 004 4h4a2 2 0 002-2V5z",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {/* TODO: Refine this summary to reflect your value proposition. */}A
          solid starting point you can tailor with your unique projects, skills,
          and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-left"
            >
              <div
                className={`w-12 h-12 ${f.iconBg} rounded-lg flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-6 h-6 ${f.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={f.svgPath}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
