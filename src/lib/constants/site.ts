export const SITE = {
  name: "Deluxe Shisha Bar & Lounge",
  shortName: "Deluxe Shisha",
  tagline: "Premium Shisha · Cocktails · Lounge",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deluxe-shishalounge.de",
  email: "info@deluxeshisha.de",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM ??
    "https://www.instagram.com/deluxe_shisha_lounge?igsh=MTB2bnllamlncHE4Mw==",
  instagramHandle: "deluxe_shisha_lounge",
  location: {
    address: "Weinbrennerstraße 2B",
    postalCode: "68753",
    city: "Waghäusel",
    area: "Waghäusel",
    country: "Deutschland",
    timezone: "Europe/Berlin",
    hours: {
      weekdays: "Montag – Donnerstag: 12:00 – 01:00",
      sunday: "Sonntag: 12:00 – 01:00",
      weekend: "Freitag – Samstag: 12:00 – 03:00",
    },
    hoursShort: "Mo–Do & So 12:00–01:00 · Fr–Sa 12:00–03:00",
    /** Google Maps embed query */
    mapsEmbed:
      "Weinbrennerstraße+2B,+68753+Waghäusel,+Deutschland",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Startseite", href: "/#startseite", sectionId: "startseite" },
  { label: "Über uns", href: "/#ueber-uns", sectionId: "ueber-uns" },
  { label: "Galerie", href: "/#galerie", sectionId: "galerie" },
  { label: "Speisekarte", href: "/#speisekarte", sectionId: "speisekarte" },
  { label: "Kontakt", href: "/#kontakt", sectionId: "kontakt" },
] as const;

export const NAV_CTA = { label: "Speisekarte", href: "/#speisekarte" } as const;

export function whatsappUrl(message?: string) {
  if (!SITE.whatsapp) return null;
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}${text}`;
}

export function telUrl() {
  if (!SITE.phone) return null;
  return `tel:${SITE.phone.replace(/\s/g, "")}`;
}

/** Opens Instagram DM thread with the lounge (mobile app or web). */
export function instagramDmUrl() {
  return `https://ig.me/m/${SITE.instagramHandle}`;
}
