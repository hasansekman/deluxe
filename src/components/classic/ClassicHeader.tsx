"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function ClassicHeader() {
  const [open, setOpen] = useState(false);
  const { dict, home, href } = useLocale();
  const sectionIds = dict.nav.items.map((item) => item.sectionId);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between gap-3">
        <Link href={home("#startseite")} onClick={() => setOpen(false)}>
          <Logo priority />
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label={dict.nav.mainLabel}
        >
          {dict.nav.items.map((item) => (
            <Link
              key={item.sectionId}
              href={href(`#${item.sectionId}`)}
              className={cn(
                "text-sm transition-colors",
                activeSection === item.sectionId
                  ? "font-medium text-accent"
                  : "text-text-muted hover:text-text"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <Link
            href={href(dict.nav.cta.href.replace("/#", "#"))}
            className="btn-primary !h-10 !px-4 !text-sm"
          >
            {dict.nav.cta.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text transition-transform",
                  open && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text transition-transform",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface px-6 py-4 lg:hidden"
          aria-label={dict.nav.mobileLabel}
        >
          <ul className="space-y-1">
            {dict.nav.items.map((item) => (
              <li key={item.sectionId}>
                <Link
                  href={href(`#${item.sectionId}`)}
                  className={cn(
                    "block rounded-lg px-2 py-2.5 text-sm",
                    activeSection === item.sectionId
                      ? "bg-accent-soft font-medium text-accent"
                      : "text-text-muted hover:text-text"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={href(dict.nav.cta.href.replace("/#", "#"))}
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                {dict.nav.cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
