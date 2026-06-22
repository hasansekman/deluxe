import { MENU_TABS } from "@/lib/constants/deluxe-menu";
import type { MenuTab } from "@/lib/constants/deluxe-menu";
import type { Locale } from "./config";

const TAB_LABELS: Record<string, string> = {
  shisha: "Shisha",
  hot: "Hot Drinks",
  cold: "Cold Drinks",
  snacks: "Snacks",
  cocktails: "Cocktails",
  longdrinks: "Long Drinks",
  wine: "Wine & Spirits",
};

const CATEGORY: Record<string, { title: string; subtitle?: string }> = {
  elmas: { title: "Shisha – Elmas", subtitle: "€14 · Head change €10" },
  mix: {
    title: "Shisha – Shisha Mix",
    subtitle: "€16 · Head change €12",
  },
  wookah: {
    title: "Shisha – Wookah",
    subtitle: "€16 · Head change €12",
  },
  "hot-drinks": { title: "Hot Drinks" },
  tea: { title: "Teas" },
  soft: { title: "Cold Drinks" },
  water: { title: "Water" },
  energy: { title: "Energy Drinks 0.25L" },
  juice: { title: "Juices 0.4L" },
  "house-ice-tea": { title: "House Ice Tea" },
  "elephant-ice-tea": { title: "Elephant Ice Tea" },
  lemonade: { title: "Homemade Lemonade" },
  baguette: { title: "Baguette" },
  "cocktails-alc": { title: "Cocktails (with alcohol)" },
  "cocktails-na": { title: "Cocktails (non-alcoholic)" },
  long: { title: "Long Drinks" },
  beer: { title: "Beer" },
  shots: { title: "Shots" },
  rocks: { title: "On the Rocks" },
  aperitivo: { title: "Aperitivo" },
  "open-wine": { title: "Wine by the Glass" },
  "bottle-wine": { title: "Wine Bottles" },
  premium: { title: "Premium Spirits" },
};

export function getLocalizedMenuTabs(locale: Locale): MenuTab[] {
  if (locale === "de") return MENU_TABS;

  return MENU_TABS.map((tab) => ({
    ...tab,
    label: TAB_LABELS[tab.id] ?? tab.label,
    categories: tab.categories.map((category) => {
      const translated = CATEGORY[category.id];
      if (!translated) return category;
      return {
        ...category,
        title: translated.title,
        subtitle: translated.subtitle ?? category.subtitle,
      };
    }),
  }));
}

export function getLocalizedTabLabel(
  locale: Locale,
  tabId: string,
  fallback: string
): string {
  if (locale === "de") return fallback;
  return TAB_LABELS[tabId] ?? fallback;
}
