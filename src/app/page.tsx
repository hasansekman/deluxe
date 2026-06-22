import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { IMAGES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Startseite",
  description:
    "Deluxe Shisha Bar & Lounge in Waghäusel — Premium Shisha, Cocktails und stilvolles Ambiente.",
  path: "/",
  ogImage: IMAGES.og,
  locale: "de",
});

export default function Page() {
  return <HomePage />;
}
