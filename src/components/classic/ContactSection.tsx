"use client";

import { SITE, whatsappUrl, telUrl } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ContactSection() {
  const { dict } = useLocale();
  const fullAddress = `${SITE.location.address}, ${SITE.location.postalCode} ${SITE.location.city}`;
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbed = `https://maps.google.com/maps?q=${SITE.location.mapsEmbed}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const mapsUrl = `https://maps.google.com/?q=${mapsQuery}`;
  const wa = whatsappUrl(dict.whatsapp.message);
  const tel = telUrl();

  return (
    <section id="kontakt" className="section-padding section-surface">
      <div className="container-site">
        <h2 className="heading-section text-text">{dict.contact.title}</h2>
        <p className="mt-2 text-sm text-text-muted">{dict.contact.subtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
              {dict.contact.address}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text">
              {SITE.location.address}
              <br />
              {SITE.location.postalCode} {SITE.location.city}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
              {dict.contact.contact}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 block text-sm text-text hover:text-accent"
            >
              {SITE.email}
            </a>
            {tel && (
              <a href={tel} className="mt-2 block text-sm text-text-muted hover:text-accent">
                {dict.contact.call}
              </a>
            )}
          </div>
          <div className="rounded-xl border border-border bg-bg p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
              {dict.contact.hours}
            </p>
            <p className="mt-3 text-sm text-text">{dict.contact.hoursWeekdays}</p>
            <p className="mt-1 text-sm text-text">{dict.contact.hoursSunday}</p>
            <p className="mt-1 text-sm text-text">{dict.contact.hoursWeekend}</p>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-accent/25">
          <div className="relative aspect-[16/10] w-full max-h-[420px] md:aspect-[21/9]">
            <iframe
              title={dict.contact.mapTitle}
              src={mapsEmbed}
              className="map-embed absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/10"
              aria-hidden="true"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="rounded-xl border border-border/80 bg-bg/90 px-4 py-3 backdrop-blur-md">
              <p className="text-sm font-medium text-text">{SITE.shortName}</p>
              <p className="text-xs text-text-muted">{fullAddress}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !h-11"
              >
                {dict.contact.directions}
              </a>
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !h-11"
                >
                  {dict.contact.whatsapp}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
