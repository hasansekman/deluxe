"use client";

import Link from "next/link";
import { googleMapsDirectionsUrl } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const MOBILE_BAR_SECTIONS = [
  "startseite",
  "speisekarte",
  "galerie",
  "kontakt",
] as const;

export function MobileActionBar() {
  const { dict, href } = useLocale();
  const activeSection = useActiveSection(MOBILE_BAR_SECTIONS);
  const directionsUrl = googleMapsDirectionsUrl();

  const labelBySection = Object.fromEntries(
    dict.nav.items.map((item) => [item.sectionId, item.label])
  ) as Record<string, string>;

  return (
    <nav
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface-elevated/95 backdrop-blur-md md:hidden"
      aria-label={dict.mobileBar.label}
    >
      <ul className="grid grid-cols-5 divide-x divide-border">
        {MOBILE_BAR_SECTIONS.map((sectionId) => {
          const active = activeSection === sectionId;
          const Icon =
            sectionId === "startseite"
              ? HomeIcon
              : sectionId === "speisekarte"
                ? MenuIcon
                : sectionId === "galerie"
                  ? GalleryIcon
                  : ContactIcon;

          return (
            <li key={sectionId}>
              <Link
                href={href(`#${sectionId}`)}
                className={cn(
                  "mobile-bar-link flex h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1",
                  active && "mobile-bar-link-active"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon active={active} />
                <span className="max-w-full truncate text-[9px] font-medium leading-none">
                  {labelBySection[sectionId]}
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-link flex h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1"
          >
            <RouteIcon />
            <span className="max-w-full truncate text-[9px] font-medium leading-none">
              {dict.mobileBar.route}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5", active ? "text-accent" : "text-text-muted")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function MenuIcon({ active }: { active?: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5", active ? "text-accent" : "text-text-muted")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
}

function GalleryIcon({ active }: { active?: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5", active ? "text-accent" : "text-text-muted")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function ContactIcon({ active }: { active?: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5", active ? "text-accent" : "text-text-muted")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      className="h-5 w-5 text-text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}
