import { createPageMetadata } from "@/lib/seo/metadata";
import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.legal.privacyTitle,
  description: `${dict.legal.privacyTitle} — ${SITE.name}.`,
  path: "/en/legal/privacy",
  locale: "en",
});

export default function EnPrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          {dict.legal.privacyTitle}
        </h1>
        <p className="mt-4 text-text-muted">{dict.legal.privacyBody}</p>
      </div>
    </div>
  );
}
