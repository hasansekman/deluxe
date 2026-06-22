import type { Locale } from "./config";

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

/** Home URL with optional hash (e.g. #speisekarte). */
export function homeHref(locale: Locale, hash = ""): string {
  return `${localePrefix(locale) || "/"}${hash}`;
}

/** Prefix a path for the given locale (/legal/... → /en/legal/...). */
export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (locale === "de") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

/** Toggle locale while preserving the current path. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const isEn = pathname.startsWith("/en");
  const stripped = isEn ? pathname.slice(3) || "/" : pathname;

  if (target === "en") {
    return stripped === "/" ? "/en" : `/en${stripped}`;
  }

  return stripped === "/" ? "/" : stripped;
}

export function localeFromPathname(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "de";
}
