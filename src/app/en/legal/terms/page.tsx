import { createPageMetadata } from "@/lib/seo/metadata";
import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.legal.termsTitle,
  description: `${dict.legal.termsTitle} — ${SITE.name}.`,
  path: "/en/legal/terms",
  locale: "en",
});

export default function EnTermsPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          {dict.legal.termsTitle}
        </h1>
        <p className="mt-4 text-text-muted">{dict.legal.termsBody}</p>
      </div>
    </div>
  );
}
