"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES, IMAGE_ALT, type ImageKey } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const { dict } = useLocale();
  const galleryItems = dict.gallery.items;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, inView } = useInView<HTMLElement>();

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((current) =>
          current === null ? null : (current + 1) % galleryItems.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((current) =>
          current === null
            ? null
            : (current - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, galleryItems.length]);

  const openLightbox = (index: number) => setLightbox(index);

  const goPrev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length);
  };

  const goNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % galleryItems.length);
  };

  return (
    <section id="galerie" ref={ref} className="section-padding bg-bg">
      <div className="container-site">
        <div className={cn("reveal", inView && "in-view")}>
          <h2 className="heading-section text-text">{dict.gallery.title}</h2>
          <p className="mt-1 text-sm text-text-muted">{dict.gallery.subtitle}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galleryItems.map((item, index) => {
            const imageKey = item.imageKey as ImageKey;
            return (
              <li
                key={item.imageKey}
                className={cn(
                  "reveal",
                  inView && "in-view",
                  index === 1 && "reveal-delay-1",
                  index === 2 && "reveal-delay-2",
                  index === 3 && "reveal-delay-1",
                  index === 4 && "reveal-delay-2"
                )}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group w-full text-left transition-transform duration-300 hover:-translate-y-0.5"
                  aria-label={`${item.caption} — ${dict.gallery.open}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface sm:aspect-[5/4] lg:aspect-[4/5]">
                    <Image
                      src={IMAGES[imageKey]}
                      alt={IMAGE_ALT[imageKey]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                      priority={index < 2}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                      <span className="text-sm font-medium text-text">
                        {item.caption}
                      </span>
                      <span className="rounded-full border border-border/80 bg-bg/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-text-muted backdrop-blur-sm transition-colors group-hover:border-accent/40 group-hover:text-accent">
                        {dict.gallery.open}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[lightbox].caption}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-lg border border-border px-4 py-2 text-sm text-text transition-colors hover:border-accent/40 hover:text-accent"
            onClick={() => setLightbox(null)}
          >
            {dict.gallery.close}
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-lg text-text backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent sm:flex md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label={dict.gallery.prev}
          >
            ‹
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-lg text-text backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent sm:flex md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label={dict.gallery.next}
          >
            ›
          </button>

          <div
            className="flex w-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(75vh,720px)] w-full">
              <Image
                key={galleryItems[lightbox].imageKey}
                src={IMAGES[galleryItems[lightbox].imageKey as ImageKey]}
                alt={IMAGE_ALT[galleryItems[lightbox].imageKey as ImageKey]}
                fill
                className="rounded-xl object-contain"
                sizes="90vw"
              />
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span className="font-medium text-text">
                {galleryItems[lightbox].caption}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {String(lightbox + 1).padStart(2, "0")} /{" "}
                {String(galleryItems.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
