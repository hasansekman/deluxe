import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function EnOfflinePage() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-md text-center">
        <h1 className="text-2xl font-semibold text-text">Offline</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          No internet connection. Previously loaded content such as the menu may
          still be available.
        </p>
        <Link href="/en" className="btn-primary mt-8 inline-flex !h-11">
          Back to home
        </Link>
        <p className="mt-6 text-xs text-text-subtle">{SITE.name}</p>
      </div>
    </div>
  );
}
