import { JsonLd } from "@/components/seo/JsonLd";
import {
  HeroSection,
  HighlightsSection,
  WelcomeSection,
  GallerySection,
  MenuSection,
  ContactSection,
} from "@/components/classic";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale = "de" }: { locale?: Locale }) {
  return (
    <>
      <JsonLd locale={locale} />
      <HeroSection />
      <WelcomeSection />
      <MenuSection />
      <GallerySection />
      <HighlightsSection />
      <ContactSection />
    </>
  );
}
