import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation("common");
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t("contactSection.heading")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {t("contactSection.blurb")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:omertarek131@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <i className="fas fa-envelope"></i>
            {t("contact.options.email")}
          </a>
          <a
            href="https://wa.me/201129175363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <i className="fab fa-whatsapp"></i>
            {t("contact.options.whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
}
