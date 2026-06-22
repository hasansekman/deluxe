export const IMAGES = {
  logo: "/images/deluxe-logo.png",
  hero: "/images/hero-collage.jpg",
  welcome: "/images/hero-collage.jpg",
  gallery1: "/images/gallery/01-shisha.png",
  gallery2: "/images/gallery/02-bar.png",
  gallery3: "/images/gallery/03-terrasse.png",
  gallery4: "/images/gallery/04-lounge.png",
  gallery5: "/images/gallery/05-gaming.png",
  og: "/images/hero-collage.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;

export const IMAGE_ALT: Record<ImageKey, string> = {
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
