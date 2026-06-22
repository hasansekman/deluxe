"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function HighlightsSection() {
  const { dict, href } = useLocale();
  const { ref, inView } = useInView();
  const items = dict.highlights.items;

  return (
    <section ref={ref} className="border-y border-border bg-bg py-10 md:py-14">
      <div className="container-site">
        <div
          className={cn(
            "grid overflow-hidden rounded-2xl border border-border sm:grid-cols-3",
            "reveal",
            inView && "in-view"
          )}
        >
          {items.map((item, i) => (
            <Link
              key={item.id}
              href={href(item.href)}
              className={cn(
                "group flex flex-col border-border bg-surface p-6 transition-colors hover:bg-surface-elevated md:p-8",
                i < items.length - 1 && "border-b sm:border-b-0 sm:border-r"
              )}
            >
              <span className="font-serif text-2xl text-accent/80">{item.index}</span>
              <h2 className="mt-4 text-base font-medium tracking-tight text-text">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-60 transition-opacity group-hover:opacity-100">
                {dict.highlights.more}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
