import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

export function createLocalBusinessJsonLd(locale: Locale = "de") {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: SITE.name,
    description: dict.hero.tagline,
    url: locale === "en" ? `${SITE.url}/en` : SITE.url,
    inLanguage: locale === "en" ? "en-GB" : "de-DE",
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.location.address,
      postalCode: SITE.location.postalCode,
      addressLocality: SITE.location.city,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "12:00",
        closes: "01:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "03:00",
      },
    ],
  };
}
