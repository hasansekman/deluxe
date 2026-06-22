/** Homepage copy & featured content */

export const WELCOME_COPY = {
  title: "Willkommen",
  paragraphs: [
    "Die Deluxe Shisha Bar & Lounge in Waghäusel bietet Ihnen ein exklusives Erlebnis in stilvollem Ambiente. Genießen Sie erstklassige Shisha-Sorten, handgemachte Cocktails und eine vielfältige Getränkeauswahl in unserer luxuriösen Lounge.",
    "Ob entspannter Abend mit Freunden oder besonderer Anlass – bei uns finden Sie die perfekte Atmosphäre zum Genießen und Verweilen.",
  ],
} as const;

export const WELCOME_STATS = [
  { value: "50+", label: "Shisha-Sorten" },
  { value: "03:00", label: "Fr–Sa geöffnet" },
  { value: "100+", label: "Getränke & Snacks" },
] as const;

export const HIGHLIGHTS = [
  {
    id: "shisha",
    index: "01",
    title: "Premium Shisha",
    description: "Elmas, Shisha Mix & Wookah — ab 14 €",
    href: "#speisekarte",
  },
  {
    id: "cocktails",
    index: "02",
    title: "Handgemachte Cocktails",
    description: "Klassiker & alkoholfreie Signature-Drinks",
    href: "#speisekarte",
  },
  {
    id: "hours",
    index: "03",
    title: "Bis 03:00 geöffnet",
    description: "Freitag & Samstag — lange Lounge-Abende",
    href: "#kontakt",
  },
] as const;

export const GALLERY_ITEMS = [
  { imageKey: "gallery1" as const, caption: "Premium Shisha" },
  { imageKey: "gallery2" as const, caption: "Bar & Getränke" },
  { imageKey: "gallery3" as const, caption: "Terrasse" },
  { imageKey: "gallery4" as const, caption: "Lounge" },
  { imageKey: "gallery5" as const, caption: "Gaming-Bereich" },
] as const;

export const POPULAR_MENU_ITEMS = new Set([
  "Doppelapfel",
  "Deluxe Night Mix",
  "Love 66",
  "Mojito",
  "Shisha Mix",
  "Deluxe Acai",
]);
