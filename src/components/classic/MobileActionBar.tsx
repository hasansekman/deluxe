"use client";

import Link from "next/link";
import { SITE, telUrl } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";

export function MobileActionBar() {
  const { dict, href } = useLocale();
  const tel = telUrl();
  const mapsQuery = encodeURIComponent(
    `${SITE.location.address}, ${SITE.location.postalCode} ${SITE.location.city}`
  );

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface-elevated/95 backdrop-blur-sm md:hidden"
      aria-label={dict.mobileBar.label}
    >
      <ul className="grid grid-cols-3 divide-x divide-border">
        <li>
          <Link
            href={href("#speisekarte")}
            className="flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-text-muted"
          >
            <MenuIcon />
            {dict.mobileBar.menu}
          </Link>
        </li>
        <li>
          {tel ? (
            <a
              href={tel}
              className="flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-text-muted"
            >
              <PhoneIcon />
              {dict.mobileBar.call}
            </a>
          ) : (
            <a
              href={`mailto:${SITE.email}`}
              className="flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-text-muted"
            >
              <PhoneIcon />
              {dict.mobileBar.email}
            </a>
          )}
        </li>
        <li>
          <a
            href={`https://maps.google.com/?q=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-text-muted"
          >
            <MapIcon />
            {dict.mobileBar.route}
          </a>
        </li>
      </ul>
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
