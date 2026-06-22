"use client";

import { useMemo, useState } from "react";
import { POPULAR_MENU_ITEMS } from "@/lib/constants/home";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getLocalizedMenuTabs } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { MenuCategory, MenuItem } from "@/lib/constants/deluxe-menu";

const POPULAR_ORDER = [
  "Doppelapfel",
  "Deluxe Night Mix",
  "Love 66",
  "Mojito",
  "Shisha Mix",
  "Deluxe Acai",
] as const;

const DEFAULT_TAB: string | null = null;

function itemSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function MenuItemRow({
  item,
  popularBadge,
}: {
  item: MenuItem;
  popularBadge: string;
}) {
  const popular = POPULAR_MENU_ITEMS.has(item.name);

  return (
    <li id={`menu-item-${itemSlug(item.name)}`} className="scroll-mt-28 py-3">
      <div className="menu-row">
        <div className="menu-row-name min-w-0">
          <span className="inline-flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-text">{item.name}</span>
            {popular && (
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent ring-1 ring-accent/30">
                {popularBadge}
              </span>
            )}
          </span>
          {item.note && (
            <p className="mt-0.5 text-xs italic text-text-subtle">{item.note}</p>
          )}
        </div>
        {item.price && (
          <>
            <span className="menu-row-leader" aria-hidden="true" />
            <span className="menu-row-price text-sm font-semibold">{item.price}</span>
          </>
        )}
      </div>
    </li>
  );
}

function CategoryBlock({
  category,
  popularBadge,
}: {
  category: MenuCategory;
  popularBadge: string;
}) {
  return (
    <div className="glass-card rounded-xl p-5 md:p-6">
      <div className="border-b border-border pb-3">
        <h3 className="font-serif text-lg text-text">{category.title}</h3>
        {category.subtitle && (
          <p className="mt-1 inline-block rounded-full bg-accent-soft px-3 py-0.5 text-xs font-medium text-accent">
            {category.subtitle}
          </p>
        )}
      </div>
      <ul className="mt-2 divide-y divide-border">
        {category.items.map((item) => (
          <MenuItemRow
            key={`${category.id}-${item.name}`}
            item={item}
            popularBadge={popularBadge}
          />
        ))}
      </ul>
    </div>
  );
}

type FeaturedItem = {
  name: string;
  tabId: string;
  tabLabel: string;
};

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<string | null>(DEFAULT_TAB);
  const [query, setQuery] = useState("");
  const { locale, dict } = useLocale();
  const menuTabs = useMemo(() => getLocalizedMenuTabs(locale), [locale]);
  const { ref, inView } = useInView<HTMLElement>(0.08);

  const tab = menuTabs.find((t) => t.id === activeTab);

  const featuredItems = useMemo(() => {
    const map = new Map<string, FeaturedItem>();

    for (const t of menuTabs) {
      for (const cat of t.categories) {
        for (const item of cat.items) {
          if (POPULAR_MENU_ITEMS.has(item.name)) {
            map.set(item.name, {
              name: item.name,
              tabId: t.id,
              tabLabel: t.label,
            });
          }
        }
      }
    }

    return POPULAR_ORDER.map((name) => map.get(name)).filter(
      (item): item is FeaturedItem => item !== undefined
    );
  }, [menuTabs]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const hits: { tabLabel: string; category: MenuCategory; item: MenuItem }[] =
      [];
    for (const t of menuTabs) {
      for (const cat of t.categories) {
        for (const item of cat.items) {
          if (
            item.name.toLowerCase().includes(q) ||
            item.note?.toLowerCase().includes(q)
          ) {
            hits.push({ tabLabel: t.label, category: cat, item });
          }
        }
      }
    }
    return hits;
  }, [query, menuTabs]);

  const selectTab = (tabId: string) => {
    setQuery("");
    setActiveTab((current) => (current === tabId ? null : tabId));
  };

  const jumpToItem = (item: FeaturedItem) => {
    setQuery("");
    setActiveTab(item.tabId);
    window.setTimeout(() => {
      document
        .getElementById(`menu-item-${itemSlug(item.name)}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 180);
  };

  return (
    <section
      id="speisekarte"
      ref={ref}
      className="relative overflow-hidden section-padding section-surface"
    >
      <div className="welcome-glow" aria-hidden="true" />

      <div className="container-site relative">
        <div className={cn("welcome-title-wrap", inView && "in-view")}>
          <div className={cn("reveal", inView && "in-view")}>
            <h2 className="welcome-title">{dict.menu.title}</h2>
            <span className="welcome-title-line" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-sm text-text-muted md:text-base">
              {dict.menu.subtitle}
            </p>
          </div>
        </div>

        <div className={cn("mt-10 reveal reveal-delay-1", inView && "in-view")}>
          <label htmlFor="menu-search" className="sr-only">
            {dict.menu.searchLabel}
          </label>
          <input
            id="menu-search"
            type="search"
            placeholder={dict.menu.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-dark"
          />
        </div>

        {!searchResults && (
          <>
            <div
              className={cn(
                "mt-8 reveal reveal-delay-2",
                inView && "in-view"
              )}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-subtle">
                {dict.menu.popular}
              </p>
              <p className="mt-1 text-xs text-text-muted">
                {dict.menu.popularHint}
              </p>
              <ul className="mt-8 flex gap-3 overflow-x-auto pb-2 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {featuredItems.map((item, index) => (
                  <li
                    key={item.name}
                    className={cn("shrink-0 reveal", inView && "in-view")}
                    style={
                      inView
                        ? { transitionDelay: `${0.08 + index * 0.06}s` }
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      onClick={() => jumpToItem(item)}
                      className="menu-popular-card flex min-w-[148px] flex-col rounded-xl px-4 py-3 text-left"
                    >
                      <span className="text-sm font-medium text-text">
                        {item.name}
                      </span>
                      <span className="mt-1 text-[10px] uppercase tracking-wide text-text-subtle">
                        {item.tabLabel}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "mt-10 reveal reveal-delay-3 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10",
                inView && "in-view"
              )}
            >
              <aside className="hidden lg:block">
                <nav
                  className="sticky top-24 flex flex-col gap-1"
                  role="tablist"
                  aria-label={dict.menu.categoriesLabel}
                >
                  {menuTabs.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === item.id}
                      className={cn(
                        "menu-nav-item reveal",
                        inView && "in-view",
                        activeTab === item.id && "menu-nav-item-active"
                      )}
                      style={
                        inView
                          ? { transitionDelay: `${0.12 + index * 0.04}s` }
                          : undefined
                      }
                      onClick={() => selectTab(item.id)}
                    >
                      <span>{item.label}</span>
                      <span
                        className="menu-nav-arrow text-[10px]"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  ))}
                </nav>
              </aside>

              <div className="min-w-0">
                <div
                  className="flex gap-2 overflow-x-auto pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  role="tablist"
                  aria-label={dict.menu.categoriesLabel}
                >
                  {menuTabs.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === item.id}
                      className={cn(
                        "menu-pill shrink-0",
                        activeTab === item.id && "menu-pill-active"
                      )}
                      onClick={() => selectTab(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {tab && (
                  <div
                    key={tab.id}
                    className="menu-panel-enter mt-6 space-y-6 lg:mt-0"
                    role="tabpanel"
                  >
                    {tab.categories.map((category) => (
                      <CategoryBlock
                        key={category.id}
                        category={category}
                        popularBadge={dict.menu.popularBadge}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {searchResults && (
          <div className="mt-8">
            {searchResults.length === 0 ? (
              <p className="text-sm text-text-muted">
                {dict.menu.noResults} „{query.trim()}“.
              </p>
            ) : (
              <ul className="glass-card divide-y divide-border overflow-hidden rounded-xl">
                {searchResults.map(({ tabLabel, category, item }) => (
                  <li key={`${category.id}-${item.name}`} className="px-5">
                    <p className="pt-3 text-[10px] font-semibold uppercase tracking-wide text-text-subtle">
                      {tabLabel} · {category.title}
                    </p>
                    <MenuItemRow
                      item={item}
                      popularBadge={dict.menu.popularBadge}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
