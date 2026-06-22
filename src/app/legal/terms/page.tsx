import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen der Deluxe Shisha Bar & Lounge.",
  path: "/legal/terms",
  locale: "de",
});

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">AGB</h1>
        <p className="mt-4 text-text-muted">
          Allgemeine Geschäftsbedingungen — Inhalt folgt.
        </p>
      </div>
    </div>
  );
}
