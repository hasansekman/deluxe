"use client";

import Image from "next/image";
import { IMAGES, IMAGE_ALT } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function WelcomeSection() {
  const { dict } = useLocale();
  const { ref, inView } = useInView(0.12);

  return (
    <section
      id="ueber-uns"
      ref={ref}
      className="relative overflow-hidden section-padding border-b border-border bg-bg"
    >
      <div className="welcome-glow" aria-hidden="true" />

      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className={cn("welcome-title-wrap", inView && "in-view")}>
              <h2
                className={cn(
                  "welcome-title reveal",
                  inView && "in-view"
                )}
              >
                {dict.welcome.title}
              </h2>
              <span className="welcome-title-line" aria-hidden="true" />
            </div>

            <div className="mt-10 max-w-xl space-y-5">
              {dict.welcome.paragraphs.map((paragraph, i) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={cn(
                    "text-[15px] leading-[1.75] text-text-muted md:text-base reveal",
                    inView && "in-view",
                    i === 0 && "reveal-delay-1",
                    i === 1 && "reveal-delay-2"
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul
              className={cn(
                "mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border/80 pt-8 reveal reveal-delay-3",
                inView && "in-view"
              )}
            >
              {dict.welcome.stats.map((stat) => (
                <li key={stat.label}>
                  <p className="font-serif text-lg text-accent">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-text-subtle">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "lg:col-span-6 reveal reveal-delay-2",
              inView && "in-view"
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/80 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={IMAGES.welcome}
                alt={IMAGE_ALT.welcome}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
