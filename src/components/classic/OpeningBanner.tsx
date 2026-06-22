"use client";

import { useMemo } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Dictionary } from "@/lib/i18n";

function isOpenNow(banner: Dictionary["banner"]): { open: boolean; label: string } {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openAt = 12 * 60;

  if (day === 0) {
    return { open: false, label: banner.closedSunday };
  }

  if (day >= 1 && day <= 4) {
    const closeAt = 1 * 60;
    const open = minutes >= openAt || minutes < closeAt;
    return {
      open,
      label: open ? banner.openWeekday : banner.closedWeekday,
    };
  }

  if (day === 5 || day === 6) {
    const closeAt = 3 * 60;
    const open = minutes >= openAt || minutes < closeAt;
    return {
      open,
      label: open ? banner.openWeekend : banner.closedWeekend,
    };
  }

  return { open: false, label: banner.hoursShort };
}

export function OpeningBanner() {
  const { dict } = useLocale();
  const status = useMemo(() => isOpenNow(dict.banner), [dict.banner]);

  return (
    <div
      className={`border-b px-4 py-2 text-center text-xs font-medium tracking-wide ${
        status.open
          ? "border-accent/20 bg-accent-soft text-accent"
          : "border-border bg-surface text-text-muted"
      }`}
    >
      {status.label}
    </div>
  );
}
