import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-md text-center">
        <h1 className="text-2xl font-semibold text-text">Offline</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          Keine Internetverbindung. Bereits geladene Inhalte wie die Speisekarte
          sind eventuell noch verfügbar.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex !h-11">
          Zur Startseite
        </Link>
        <p className="mt-6 text-xs text-text-subtle">{SITE.name}</p>
      </div>
    </div>
  );
}
