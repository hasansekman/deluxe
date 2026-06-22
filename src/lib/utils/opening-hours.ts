import type { Dictionary } from "@/lib/i18n";
import { SITE } from "@/lib/constants/site";

const WEEKDAY_TO_DAY: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/** Lounge opening hours are evaluated in Germany (Waghäusel). */
export function getBerlinTimeParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE.location.timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Sun";
  const hourRaw = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const hour = hourRaw === 24 ? 0 : hourRaw;

  return {
    day: WEEKDAY_TO_DAY[weekday] ?? 0,
    minutes: hour * 60 + minute,
  };
}

export function isOpenNow(
  banner: Dictionary["banner"],
  date = new Date()
): { open: boolean; label: string } {
  const { day, minutes } = getBerlinTimeParts(date);
  const openAt = 12 * 60;

  if (day === 0) {
    const closeAt = 1 * 60;
    const open = minutes >= openAt || minutes < closeAt;
    return {
      open,
      label: open ? banner.openSunday : banner.closedSunday,
    };
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
