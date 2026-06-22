import type { Metadata } from "next";
import { SITE, IMAGES } from "@/lib/constants";
import { getDictionary, getImageAlt, type Locale } from "@/lib/i18n";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  locale?: Locale;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage = IMAGES.og,
  noIndex = false,
  locale = "de",
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const dict = getDictionary(locale);
  const fullTitle =
    path === "" || path === "/" || path === "/en"
      ? `${SITE.name} — ${dict.hero.tagline}`
      : `${title} — ${SITE.name}`;

  const ogLocale = locale === "en" ? "en_GB" : "de_DE";
  const altLocale = locale === "en" ? "de_DE" : "en_GB";
  const dePath = locale === "de" ? path : path.replace(/^\/en/, "") || "/";
  const enPath =
    locale === "en" ? path : path === "/" ? "/en" : `/en${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: {
        de: `${SITE.url}${dePath}`,
        en: `${SITE.url}${enPath}`,
        "x-default": `${SITE.url}/`,
      },
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: ogLocale,
      alternateLocale: [altLocale],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
          alt: getImageAlt(locale, "og"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
