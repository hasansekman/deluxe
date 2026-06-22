import type { LucideIcon } from "lucide-react";
import {
  Beer,
  Coffee,
  CupSoda,
  Citrus,
  Droplets,
  Flame,
  GlassWater,
  Leaf,
  Sandwich,
  Sparkles,
  Wine,
  Zap,
} from "lucide-react";

const TAB_ICONS: Record<string, LucideIcon> = {
  shisha: Flame,
  hot: Coffee,
  cold: CupSoda,
  snacks: Sandwich,
  cocktails: Wine,
  longdrinks: GlassWater,
  wine: Wine,
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  elmas: Flame,
  mix: Flame,
  wookah: Flame,
  "hot-drinks": Coffee,
  tea: Leaf,
  soft: CupSoda,
  water: Droplets,
  energy: Zap,
  juice: Citrus,
  "house-ice-tea": GlassWater,
  "elephant-ice-tea": GlassWater,
  lemonade: Citrus,
  baguette: Sandwich,
  "cocktails-alc": Wine,
  "cocktails-na": Wine,
  long: GlassWater,
  beer: Beer,
  shots: Sparkles,
  rocks: Wine,
  aperitivo: Sparkles,
  "open-wine": Wine,
  "bottle-wine": Wine,
  premium: Sparkles,
};

export function getMenuTabIcon(tabId: string): LucideIcon {
  return TAB_ICONS[tabId] ?? CupSoda;
}

export function getMenuCategoryIcon(categoryId: string, tabId?: string): LucideIcon {
  return CATEGORY_ICONS[categoryId] ?? (tabId ? getMenuTabIcon(tabId) : CupSoda);
}
