"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  localeFromPathname,
  localePath,
  homeHref,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  /** Prefix nav hash links for current locale (/en#...). */
  href: (hashPath: string) => string;
  path: (path: string) => string;
  home: (hash?: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dict,
      href: (hashPath: string) => {
        const hash = hashPath.startsWith("#")
          ? hashPath
          : hashPath.startsWith("/#")
            ? hashPath.slice(1)
            : `#${hashPath}`;
        return homeHref(locale, hash);
      },
      path: (path: string) => localePath(locale, path),
      home: (hash = "") => homeHref(locale, hash),
    }),
    [locale, dict]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
