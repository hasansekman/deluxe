import { MENU_TABS } from "@/lib/constants/deluxe-menu";
import type { MenuItem, MenuTab } from "@/lib/constants/deluxe-menu";
import type { Locale } from "./config";
import {
  MENU_ITEM_NAMES_EN,
  MENU_ITEM_NOTES_EN,
} from "./menu-translations-en";

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
  soft: { title: "Soft Drinks" },
  water: { title: "Water" },
  energy: { title: "Energy Drinks 0.25L" },
  juice: { title: "Juices 0.4L" },
  "house-ice-tea": { title: "Homemade Ice Tea 0.4L" },
  "elephant-ice-tea": { title: "Elephant Bay Ice Tea 0.33L" },
  lemonade: { title: "Homemade Lemonade 0.4L" },
  baguette: { title: "Baguette & Snacks" },
  "cocktails-alc": { title: "Alcoholic Cocktails" },
  "cocktails-na": { title: "Non-alcoholic Cocktails" },
  long: { title: "Long Drinks" },
  beer: { title: "Beer" },
  shots: { title: "Shots 2cl" },
  rocks: { title: "On the Rocks" },
  aperitivo: { title: "Aperitivo" },
  "open-wine": { title: "Wines by the Glass 0.35L / 0.5L" },
  "bottle-wine": { title: "Wines by the Bottle 0.75L" },
  premium: { title: "Bottles & Champagne" },
};

function localizeMenuItem(item: MenuItem): MenuItem {
  const name = MENU_ITEM_NAMES_EN[item.name] ?? item.name;
  const note = item.note
    ? (MENU_ITEM_NOTES_EN[item.note] ?? MENU_ITEM_NOTES_EN[item.name] ?? item.note)
    : undefined;

  return { ...item, name, note };
}

export function getLocalizedMenuTabs(locale: Locale): MenuTab[] {
  if (locale === "de") return MENU_TABS;

  return MENU_TABS.map((tab) => ({
    ...tab,
    label: TAB_LABELS[tab.id] ?? tab.label,
    categories: tab.categories.map((category) => {
      const translated = CATEGORY[category.id];
      return {
        ...category,
        title: translated?.title ?? category.title,
        subtitle: translated?.subtitle ?? category.subtitle,
        items: category.items.map(localizeMenuItem),
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
