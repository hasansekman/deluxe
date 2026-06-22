"use client";

import Link from "next/link";
import { SITE, whatsappUrl, telUrl } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Logo } from "./Logo";

export function ClassicFooter() {
  const year = new Date().getFullYear();
  const { dict, home, path } = useLocale();
  const wa = whatsappUrl();
  const tel = telUrl();

  return (
    <footer
      className="border-t border-border bg-surface py-12"
      role="contentinfo"
    >
      <div className="container-site">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href={home("#startseite")}
              className="transition-opacity hover:opacity-90"
            >
              <Logo variant="md" />
            </Link>
            <p className="mt-4 text-sm text-text-muted">
              {SITE.location.address} · {SITE.location.postalCode}{" "}
              {SITE.location.city}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {SITE.instagram && (
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent"
              >
                Instagram
              </a>
            )}
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent"
              >
                WhatsApp
              </a>
            )}
            {tel && (
              <a href={tel} className="text-text-muted hover:text-accent">
                {dict.footer.call}
              </a>
            )}
            <Link
              href={path("/legal/privacy")}
              className="text-text-muted hover:text-accent"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={path("/legal/terms")}
              className="text-text-muted hover:text-accent"
            >
              {dict.footer.terms}
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-text-subtle md:text-left">
          © {year} {SITE.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
