import type { MetadataRoute } from "next";
import { SITE, IMAGES } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#161618",
    theme_color: "#d4c5a8",
    lang: "de-DE",
    icons: [
      {
        src: IMAGES.logo,
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
