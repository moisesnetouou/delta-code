"use client";

import { getCookie, setCookie } from "cookies-next";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { type Content, dictionaries } from "./dictionary";
import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale } from "./types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = getCookie(LOCALE_COOKIE);
    if (saved === "pt" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.lang = saved === "pt" ? "pt-BR" : "en";
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setCookie(LOCALE_COOKIE, next, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: window.location.protocol === "https:",
    });
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
