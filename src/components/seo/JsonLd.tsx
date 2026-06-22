import { createLocalBusinessJsonLd } from "@/lib/seo/json-ld";

type JsonLdProps = {
  data?: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = data ?? createLocalBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
