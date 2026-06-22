import type { ImageKey } from "@/lib/constants/images";
import type { Locale } from "./config";

const IMAGE_ALT_DE: Record<ImageKey, string> = {
  logo: "Deluxe Shisha Lounge Logo",
  hero: "Deluxe Shisha Bar & Lounge — Lounge, Gaming-Bereich und Terrasse",
  welcome: "Deluxe Shisha Bar & Lounge — Lounge, Gaming-Bereich und Terrasse",
  gallery1: "Premium Shisha mit aromatischem Rauch",
  gallery2: "Bar mit Shisha und Getränkeauswahl",
  gallery3: "Terrasse bei Sonnenuntergang",
  gallery4: "Lounge-Innenbereich bei Golden Hour",
  gallery5: "Gaming-Bereich mit Multiplayer-Tischen",
  og: "Deluxe Shisha Bar & Lounge Waghäusel",
};

const IMAGE_ALT_EN: Record<ImageKey, string> = {
  logo: "Deluxe Shisha Lounge logo",
  hero: "Deluxe Shisha Bar & Lounge — lounge, gaming area and terrace",
  welcome: "Deluxe Shisha Bar & Lounge — lounge, gaming area and terrace",
  gallery1: "Premium shisha with aromatic smoke",
  gallery2: "Bar with shisha and drinks selection",
  gallery3: "Terrace at sunset",
  gallery4: "Lounge interior at golden hour",
  gallery5: "Gaming area with multiplayer tables",
  og: "Deluxe Shisha Bar & Lounge Waghäusel",
};

export function getImageAlt(locale: Locale, key: ImageKey): string {
  return locale === "en" ? IMAGE_ALT_EN[key] : IMAGE_ALT_DE[key];
}

export function getAllImageAlts(locale: Locale): Record<ImageKey, string> {
  return locale === "en" ? IMAGE_ALT_EN : IMAGE_ALT_DE;
}
