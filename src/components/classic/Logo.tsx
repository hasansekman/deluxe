"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getImageAlt } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const VARIANTS = {
  sm: "h-10 w-auto sm:h-11",
  md: "h-24 w-auto",
  lg: "h-36 w-auto max-w-[240px] sm:h-44 sm:max-w-[300px]",
} as const;

export function Logo({
  className = "",
  variant = "sm",
  priority = false,
}: {
  className?: string;
  variant?: keyof typeof VARIANTS;
  priority?: boolean;
}) {
  const { locale } = useLocale();

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={IMAGES.logo}
        alt={getImageAlt(locale, "logo")}
        width={1024}
        height={1024}
        className={VARIANTS[variant]}
        priority={priority}
      />
    </span>
  );
}
