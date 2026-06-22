import type { MetadataRoute } from "next";
import { SITE, IMAGES } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#161618",
    theme_color: "#d4c5a8",
    lang: "de-DE",
    categories: ["food", "lifestyle"],
    icons: [
      {
        src: IMAGES.logo,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: IMAGES.logo,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: IMAGES.logo,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
