import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy of Deluxe Shisha Bar & Lounge.",
  path: "/en/legal/privacy",
  locale: "en",
});

export default function EnPrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-site">
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-text-muted">Privacy policy — content to follow.</p>
      </div>
    </div>
  );
}
