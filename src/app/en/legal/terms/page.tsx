import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions of Deluxe Shisha Bar & Lounge.",
  path: "/en/legal/terms",
  locale: "en",
});

export default function EnTermsPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-text-muted">Terms and conditions — content to follow.</p>
      </div>
    </div>
  );
}
