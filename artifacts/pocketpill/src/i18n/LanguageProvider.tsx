import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANGUAGES, TRANSLATIONS, type LangCode, type Translation } from "./translations";

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: Translation;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "pocketpill_lang";

function detectInitialLang(): LangCode {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch {}
  const nav = (navigator?.language || "en").toLowerCase();
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("yo")) return "yo";
  if (nav.startsWith("ig")) return "ig";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pcm" ? "en" : lang;
    }
  }, [lang]);

  const setLang = (l: LangCode) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT(): Translation {
  return useLang().t;
}

export { LANGUAGES };
export type { LangCode };
