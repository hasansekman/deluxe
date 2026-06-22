import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getDictionary } from "@/lib/i18n";
import { IMAGES } from "@/lib/constants";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.meta.homeTitle,
  description: dict.meta.homeDescription,
  path: "/en",
  ogImage: IMAGES.og,
  locale: "en",
});

export default function EnHomePage() {
  return <HomePage locale="en" />;
}
