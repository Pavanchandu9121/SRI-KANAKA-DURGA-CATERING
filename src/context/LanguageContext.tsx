import { createContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Locale, getTranslation } from "@/i18n";

type LanguageContextType = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start from the server default so the first client render matches the SSR
  // HTML, then adopt any persisted choice after hydration (avoids a mismatch).
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("skd-lang");
    if (stored === "en" || stored === "te") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Locale) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("skd-lang", newLang);
    }
  }, []);

  const t = useCallback(
    (key: string) => getTranslation(lang, key),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
