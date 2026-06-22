"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { isOpenNow } from "@/lib/utils/opening-hours";

export function OpeningBanner() {
  const { dict } = useLocale();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const status = useMemo(
    () => isOpenNow(dict.banner, now),
    [dict.banner, now]
  );

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
