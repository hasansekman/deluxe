"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";
import { switchLocalePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const { locale, dict } = useLocale();

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label={dict.locale.current}
    >
      <Link
        href={switchLocalePath(pathname, "de")}
        className={cn(
          "rounded-md px-2.5 py-1.5 transition-colors",
          locale === "de"
            ? "bg-accent-soft text-accent"
            : "text-text-muted hover:text-text"
        )}
        aria-current={locale === "de" ? "true" : undefined}
      >
        DE
      </Link>
      <Link
        href={switchLocalePath(pathname, "en")}
        className={cn(
          "rounded-md px-2.5 py-1.5 transition-colors",
          locale === "en"
            ? "bg-accent-soft text-accent"
            : "text-text-muted hover:text-text"
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
