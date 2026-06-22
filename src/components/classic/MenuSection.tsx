"use client";

import { useMemo, useState } from "react";
import { MagnifyHeading } from "./MagnifyHeading";
import { POPULAR_MENU_ITEMS } from "@/lib/constants/home";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getLocalizedMenuTabs } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { MenuCategory, MenuItem } from "@/lib/constants/deluxe-menu";
import { MenuCategoryIcon, MenuItemIcon, MenuTabIcon } from "./MenuItemIcon";

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
  categoryId,
  tabId,
  popularBadge,
}: {
  item: MenuItem;
  categoryId: string;
  tabId: string;
  popularBadge: string;
}) {
  const popular = POPULAR_MENU_ITEMS.has(item.name);

  return (
    <li
      id={`menu-item-${itemSlug(item.name)}`}
      className="menu-item scroll-mt-28"
    >
      <div className="menu-row">
        <MenuItemIcon categoryId={categoryId} tabId={tabId} />
        <div className="menu-row-name min-w-0">
          <span className="inline-flex flex-wrap items-center gap-2">
            <span className="menu-item-name">{item.name}</span>
            {popular && (
              <span className="menu-item-badge">{popularBadge}</span>
            )}
          </span>
          {item.note && <p className="menu-item-note">{item.note}</p>}
        </div>
        {item.price && (
          <>
            <span className="menu-row-leader" aria-hidden="true" />
            <span className="menu-row-price">{item.price}</span>
          </>
        )}
      </div>
    </li>
  );
}

function CategoryBlock({
  category,
  tabId,
  popularBadge,
}: {
  category: MenuCategory;
  tabId: string;
  popularBadge: string;
}) {
  return (
    <article className="menu-category">
      <header className="menu-category-header">
        <div className="flex items-center gap-2">
          <span className="menu-category-icon" aria-hidden="true">
            <MenuCategoryIcon categoryId={category.id} tabId={tabId} />
          </span>
          <h3 className="menu-category-title">{category.title}</h3>
        </div>
        {category.subtitle && (
          <p className="menu-category-subtitle">{category.subtitle}</p>
        )}
        <span className="menu-category-rule" aria-hidden="true" />
      </header>
      <ul className="menu-items-grid">
        {category.items.map((item) => (
          <MenuItemRow
            key={`${category.id}-${item.name}`}
            item={item}
            categoryId={category.id}
            tabId={tabId}
            popularBadge={popularBadge}
          />
        ))}
      </ul>
    </article>
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

    const hits: {
      tabId: string;
      tabLabel: string;
      category: MenuCategory;
      item: MenuItem;
    }[] = [];
    for (const t of menuTabs) {
      for (const cat of t.categories) {
        for (const item of cat.items) {
          if (
            item.name.toLowerCase().includes(q) ||
            item.note?.toLowerCase().includes(q)
          ) {
            hits.push({
              tabId: t.id,
              tabLabel: t.label,
              category: cat,
              item,
            });
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
      className="menu-section relative overflow-hidden section-padding section-surface"
    >
      <div className="welcome-glow" aria-hidden="true" />

      <div className="container-site relative">
        <header className={cn("reveal", inView && "in-view")}>
          <MagnifyHeading>{dict.menu.title}</MagnifyHeading>
          <p className="menu-lead">{dict.menu.subtitle}</p>
        </header>

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
            className="menu-search input-dark"
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
              <p className="menu-eyebrow">{dict.menu.popular}</p>
              <p className="menu-lead !mt-1 !max-w-md">{dict.menu.popularHint}</p>
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
                      <span className="menu-popular-icon" aria-hidden="true">
                        <MenuTabIcon tabId={item.tabId} className="h-4 w-4" />
                      </span>
                      <span className="mt-2 text-sm font-medium text-text">
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
                      <span className="flex items-center gap-2">
                        <span className="menu-nav-icon" aria-hidden="true">
                          <MenuTabIcon tabId={item.id} className="h-4 w-4" />
                        </span>
                        {item.label}
                      </span>
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
                          "menu-pill shrink-0 inline-flex items-center gap-1.5",
                          activeTab === item.id && "menu-pill-active"
                        )}
                        onClick={() => selectTab(item.id)}
                      >
                        <MenuTabIcon tabId={item.id} className="h-3.5 w-3.5" />
                        {item.label}
                      </button>
                  ))}
                </div>

                {tab && (
                  <div
                    key={tab.id}
                    className="menu-panel-enter menu-panel mt-6 lg:mt-0"
                    role="tabpanel"
                  >
                    {tab.categories.map((category) => (
                      <CategoryBlock
                        key={category.id}
                        category={category}
                        tabId={tab.id}
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
              <div className="menu-search-results">
                {searchResults.map(({ tabId, tabLabel, category, item }) => (
                  <div
                    key={`${category.id}-${item.name}`}
                    className="menu-search-hit"
                  >
                    <p className="menu-search-hit-label">
                      {tabLabel} · {category.title}
                    </p>
                    <ul>
                      <MenuItemRow
                        item={item}
                        categoryId={category.id}
                        tabId={tabId}
                        popularBadge={dict.menu.popularBadge}
                      />
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
