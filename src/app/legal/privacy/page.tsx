import { LegalDocument } from "@/components/classic/LegalDocument";
import { getPrivacyContent } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo/metadata";

const content = getPrivacyContent("de");

export const metadata = createPageMetadata({
  title: content.title,
  description: content.intro,
  path: "/legal/privacy",
  locale: "de",
});

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl">
        <LegalDocument content={content} />
      </div>
    </div>
  );
}
