import { createLocalBusinessJsonLd } from "@/lib/seo/json-ld";
import type { Locale } from "@/lib/i18n";

type JsonLdProps = {
  locale?: Locale;
  data?: Record<string, unknown>;
};

export function JsonLd({ locale = "de", data }: JsonLdProps) {
  const payload = data ?? createLocalBusinessJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
