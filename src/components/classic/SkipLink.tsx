"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function SkipLink() {
  const { dict } = useLocale();

  return (
    <a href="#main-content" className="skip-link">
      {dict.meta.skipLink}
    </a>
  );
}
