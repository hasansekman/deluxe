import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getDictionary } from "@/lib/i18n";
import { IMAGES } from "@/lib/constants";

const dict = getDictionary("de");

export const metadata = createPageMetadata({
  title: dict.meta.homeTitle,
  description: dict.meta.homeDescription,
  path: "/",
  ogImage: IMAGES.og,
  locale: "de",
});

export default function Page() {
  return <HomePage locale="de" />;
}
