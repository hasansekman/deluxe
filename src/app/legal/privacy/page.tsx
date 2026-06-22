import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung der Deluxe Shisha Bar & Lounge.",
  path: "/legal/privacy",
  locale: "de",
});

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          Datenschutz
        </h1>
        <p className="mt-4 text-text-muted">
          Datenschutzerklärung — Inhalt folgt.
        </p>
      </div>
    </div>
  );
}
