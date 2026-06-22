import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const ROUTES = [
  "/",
  "/en",
  "/salons",
  "/en/salons",
  "/experience",
  "/en/experience",
  "/evenings",
  "/en/evenings",
  "/the-house",
  "/en/the-house",
  "/arrive",
  "/en/arrive",
  "/legal/privacy",
  "/en/legal/privacy",
  "/legal/terms",
  "/en/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "/" || path === "/en" ? "weekly" : path.startsWith("/legal") ? "monthly" : "monthly",
    priority:
      path === "/" || path === "/en"
        ? 1
        : path.startsWith("/legal")
          ? 0.3
          : 0.8,
  }));
}
