"use client";

import { createContext, useContext, useState, useCallback, useEffect, useMemo, ReactNode } from "react";
import en from "./en.json";
import ko from "./ko.json";

export type Locale = "en" | "ko";

const translations = { en, ko };

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof en | typeof ko;
}

const I18nContext = createContext<I18nContextType>({
  locale: "ko",
  setLocale: () => {},
  t: ko,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  useEffect(() => {
    const saved = getCookie("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "ko")) {
      setLocaleState(saved);
    }
  }, []);

  const handleSetLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.cookie = `locale=${l};path=/;max-age=31536000`;
  }, []);

  const value = useMemo(() => ({
    locale,
    setLocale: handleSetLocale,
    t: translations[locale],
  }), [locale, handleSetLocale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
