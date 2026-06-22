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
    coordinates: {
      lat: 49.2385633,
      lng: 8.5092082,
    },
    /** Google Business Profile */
    googlePlaceUrl:
      "https://www.google.com/maps/place/Deluxe+Shisha+Bar%26Lounge/@49.2385668,8.5066333,17z/data=!4m6!3m5!1s0x4797bbe20aac79cf:0xc308c2954335b9f3!8m2!3d49.2385633!4d8.5092082!16s%2Fg%2F11t6v_47vw",
    /** Google Maps embed query */
    mapsEmbed: "Deluxe+Shisha+Bar%26Lounge@49.2385633,8.5092082",
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

export function googleMapsDirectionsUrl() {
  const { lat, lng } = SITE.location.coordinates;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function googleMapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${SITE.location.mapsEmbed}&z=16&ie=UTF8&iwloc=&output=embed`;
}
