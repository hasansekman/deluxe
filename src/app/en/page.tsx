import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { IMAGES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Deluxe Shisha Bar & Lounge in Waghäusel — premium shisha, handcrafted cocktails and a stylish lounge atmosphere.",
  path: "/en",
  ogImage: IMAGES.og,
  locale: "en",
});

export default function EnHomePage() {
  return <HomePage />;
}
