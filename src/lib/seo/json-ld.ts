import { SITE } from "@/lib/constants";

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
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
