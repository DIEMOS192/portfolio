import { useEffect } from "react";
import App from "./App";
import i18n from "i18next";

// Root component handles global side-effects (direction, language changes, etc.)
export default function Root() {
  useEffect(() => {
    const applyDir = () => {
      const lng = i18n.language || "en";
      const isRTL = lng.startsWith("ar");
      const html = document.documentElement;
      html.dir = isRTL ? "rtl" : "ltr";
      html.lang = lng;
      html.classList.toggle("rtl", isRTL);
    };
    applyDir();
    i18n.on("languageChanged", applyDir);
    return () => {
      i18n.off("languageChanged", applyDir);
    };
  }, []);

  return <App />;
}
