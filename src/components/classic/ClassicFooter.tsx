"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  SITE,
  googleMapsDirectionsUrl,
  whatsappUrl,
  telUrl,
} from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="footer-column-title">{children}</p>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className = "footer-link";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ClassicFooter() {
  const year = new Date().getFullYear();
  const { dict, home, path, href } = useLocale();
  const wa = whatsappUrl();
  const tel = telUrl();
  const directionsUrl = googleMapsDirectionsUrl();

  return (
    <footer className="site-footer relative border-t border-accent/15 bg-surface" role="contentinfo">
      <div className="footer-glow" aria-hidden="true" />

      <div className="container-site relative py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={home("#startseite")}
              className="inline-flex transition-opacity hover:opacity-90"
            >
              <Logo variant="sm" />
            </Link>
            <p className="mt-4 text-sm font-medium text-text">{SITE.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {SITE.location.address}
              <br />
              {SITE.location.postalCode} {SITE.location.city}
            </p>
            <p className="mt-3 text-xs text-text-subtle">{dict.banner.hoursShort}</p>
          </div>

          <nav aria-label={dict.footer.navigation}>
            <FooterHeading>{dict.footer.navigation}</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {dict.nav.items.map((item) => (
                <li key={item.sectionId}>
                  <FooterLink href={href(`#${item.sectionId}`)}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>{dict.footer.contact}</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${SITE.email}`} className="footer-link">
                  {SITE.email}
                </a>
              </li>
              {tel && (
                <li>
                  <a href={tel} className="footer-link">
                    {dict.footer.call}
                  </a>
                </li>
              )}
              <li>
                <FooterLink href={href("#kontakt")}>
                  {dict.contact.title}
                </FooterLink>
              </li>
            </ul>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 !h-10 !px-4 !text-sm"
            >
              {dict.contact.directions}
            </a>
          </div>

          <div>
            <FooterHeading>{dict.footer.connect}</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {SITE.instagram && (
                <li>
                  <FooterLink href={SITE.instagram} external>
                    Instagram
                  </FooterLink>
                </li>
              )}
              {wa && (
                <li>
                  <FooterLink href={wa} external>
                    WhatsApp
                  </FooterLink>
                </li>
              )}
              <li>
                <FooterLink href={SITE.location.googlePlaceUrl} external>
                  {dict.contact.googleReviewsView}
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs text-text-subtle md:text-left">
            © {year} {SITE.name}. {dict.footer.rights}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-end">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <Link href={path("/legal/privacy")} className="footer-link !text-xs">
                {dict.footer.privacy}
              </Link>
              <Link href={path("/legal/terms")} className="footer-link !text-xs">
                {dict.footer.terms}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
