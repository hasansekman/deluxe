import { JsonLd } from "@/components/seo/JsonLd";
import {
  HeroSection,
  HighlightsSection,
  WelcomeSection,
  GallerySection,
  MenuSection,
  ContactSection,
} from "@/components/classic";

export function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <WelcomeSection />
      <MenuSection />
      <GallerySection />
      <HighlightsSection />
      <ContactSection />
    </>
  );
}
