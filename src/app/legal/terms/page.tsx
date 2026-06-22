import { LegalDocument } from "@/components/classic/LegalDocument";
import { getTermsContent } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo/metadata";

const content = getTermsContent("de");

export const metadata = createPageMetadata({
  title: content.title,
  description: content.intro,
  path: "/legal/terms",
  locale: "de",
});

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl">
        <LegalDocument content={content} />
      </div>
    </div>
  );
}
