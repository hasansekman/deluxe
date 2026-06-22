"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES, IMAGE_ALT, SITE, instagramDmUrl } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Logo } from "./Logo";

export function HeroSection() {
  const { dict, href } = useLocale();

  return (
    <section id="startseite" className="relative flex min-h-[85vh] items-end">
      <Image
        src={IMAGES.hero}
        alt={IMAGE_ALT.hero}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/35 to-transparent"
        aria-hidden="true"
      />
      <div className="hero-smoke" aria-hidden="true">
        <div className="hero-smoke-layer hero-smoke-layer-1" />
        <div className="hero-smoke-layer hero-smoke-layer-2" />
        <div className="hero-smoke-layer hero-smoke-layer-3" />
      </div>

      <div className="container-site relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <Logo variant="lg" priority className="mb-6" />
        <h1 className="sr-only">{SITE.name}</h1>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {dict.hero.location}
        </p>
        <p className="mt-4 max-w-xl text-lg text-text-muted">
          {dict.hero.subtitle}
        </p>
        <p className="mt-2 text-sm text-accent">{SITE.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href("#speisekarte")} className="btn-primary">
            {dict.hero.menu}
          </Link>
          <a
            href={instagramDmUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {dict.hero.reserve}
          </a>
        </div>
      </div>
    </section>
  );
}
