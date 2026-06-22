import { createElement } from "react";
import { cn } from "@/lib/utils";
import {
  getMenuCategoryIcon,
  getMenuTabIcon,
} from "@/lib/constants/menu-visuals";

export function MenuItemIcon({
  categoryId,
  tabId,
  className,
}: {
  categoryId: string;
  tabId?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "menu-item-icon flex shrink-0 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      {createElement(getMenuCategoryIcon(categoryId, tabId), {
        className: "h-4 w-4",
        strokeWidth: 1.75,
      })}
    </span>
  );
}

export function MenuCategoryIcon({
  categoryId,
  tabId,
  className = "h-3.5 w-3.5",
}: {
  categoryId: string;
  tabId?: string;
  className?: string;
}) {
  return createElement(getMenuCategoryIcon(categoryId, tabId), {
    className,
    strokeWidth: 1.75,
  });
}

export function MenuTabIcon({
  tabId,
  className = "h-4 w-4",
}: {
  tabId: string;
  className?: string;
}) {
  return createElement(getMenuTabIcon(tabId), {
    className,
    strokeWidth: 1.75,
  });
}
