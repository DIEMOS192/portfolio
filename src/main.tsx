import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import i18n from "i18next";

const Root = () => {
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
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
