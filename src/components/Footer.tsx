import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const social = [
  {
    key: "github",
    svg: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.42 0 12.11c0 5.35 3.44 9.88 8.2 11.49.6.12.82-.27.82-.58v-2.25c-3.34.74-4.03-1.42-4.03-1.42-.55-1.4-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.21.09 1.84 1.25 1.84 1.25 1.07 1.86 2.81 1.32 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.35-5.48-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.24a11.3 11.3 0 0 1 3.0-.41 11.3 11.3 0 0 1 3.0.41c2.3-1.56 3.3-1.24 3.3-1.24.66 1.66.25 2.89.13 3.19.77.84 1.23 1.91 1.23 3.23 0 4.64-2.81 5.66-5.49 5.96.43.37.82 1.11.82 2.25v3.31c0 .32.21.7.82.58 4.79-1.6 8.23-6.14 8.23-11.49C24 5.42 18.63 0 12 0Z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    svg: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t("personal.name")}</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.description", {
                defaultValue:
                  "A passionate developer creating modern web experiences.",
              })}
            </p>
            <div className="flex space-x-5 rtl:space-x-reverse">
              {social.map((s) => (
                <a
                  key={s.key}
                  href={t(`contact.${s.key}`) || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.key}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks", { defaultValue: "Quick Links" })}
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/projects", label: t("nav.projects") },
                { to: "/skills", label: t("nav.skills") },
                { to: "/contact", label: t("nav.contact") },
              ].map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactHeading", { defaultValue: t("nav.contact") })}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="font-medium">Email:</span> {t("contact.email")}
              </li>
              <li>
                <span className="font-medium">
                  {t("footer.phoneLabel", { defaultValue: "Phone" })}:
                </span>{" "}
                {t("contact.phone")}
              </li>
              {t("contact.location", { defaultValue: "" }) && (
                <li>
                  <span className="font-medium">
                    {t("footer.locationLabel", { defaultValue: "Location" })}:
                  </span>{" "}
                  {t("contact.location", { defaultValue: "" })}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {year} {t("personal.name")} ·{" "}
            {t("footer.rights", { defaultValue: "All rights reserved." })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
