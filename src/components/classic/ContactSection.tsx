"use client";

import { ExternalLink, MapPin, Star } from "lucide-react";
import { useState, type ReactNode } from "react";
import {
  SITE,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  whatsappUrl,
  telUrl,
} from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function ContactInfoCard({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-bg p-5",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ContactSection() {
  const { dict } = useLocale();
  const { ref: mapRef, inView: mapInView } = useInView<HTMLDivElement>(0.12);
  const [copied, setCopied] = useState(false);

  const fullAddress = `${SITE.location.address}, ${SITE.location.postalCode} ${SITE.location.city}`;
  const mapsEmbed = googleMapsEmbedUrl();
  const mapsUrl = googleMapsDirectionsUrl();
  const googlePlaceUrl = SITE.location.googlePlaceUrl;
  const wa = whatsappUrl(dict.whatsapp.message);
  const tel = telUrl();

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="kontakt" className="section-padding section-surface">
      <div className="container-site">
        <h2 className="heading-section text-text">{dict.contact.title}</h2>
        <p className="mt-2 text-sm text-text-muted">{dict.contact.subtitle}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-stretch">
          <div
            ref={mapRef}
            className="contact-map-shell relative order-2 overflow-hidden rounded-2xl border border-accent/25 lg:order-1 lg:min-h-[460px]"
          >
            <div className="contact-map-frame relative aspect-[4/3] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
              {mapInView ? (
                <iframe
                  title={dict.contact.mapTitle}
                  src={mapsEmbed}
                  className="map-embed absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div
                  className="contact-map-placeholder absolute inset-0"
                  aria-hidden="true"
                />
              )}

              <div className="contact-map-vignette pointer-events-none absolute inset-0" aria-hidden="true" />

              <div className="contact-map-pin pointer-events-none absolute left-1/2 top-[46%] z-10 -translate-x-1/2 -translate-y-full" aria-hidden="true">
                <span className="contact-map-pin-pulse" />
                <span className="contact-map-pin-icon">
                  <MapPin className="h-7 w-7" strokeWidth={1.75} />
                </span>
              </div>
            </div>

            <div className="contact-map-actions relative z-20 flex flex-col gap-3 border-t border-border/60 bg-bg/85 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between lg:absolute lg:inset-x-0 lg:bottom-0 lg:border-t lg:border-border/50">
              <div className="min-w-0">
                <p className="text-sm font-medium text-text">{SITE.shortName}</p>
                <p className="truncate text-xs text-text-muted">{fullAddress}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
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

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <ContactInfoCard label={dict.contact.address}>
              <p className="text-sm leading-relaxed text-text">
                {SITE.location.address}
                <br />
                {SITE.location.postalCode} {SITE.location.city}
              </p>
              <button
                type="button"
                onClick={copyAddress}
                className="mt-3 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {copied ? dict.contact.copyAddressDone : dict.contact.copyAddress}
              </button>
            </ContactInfoCard>

            <ContactInfoCard label={dict.contact.contact}>
              <a
                href={`mailto:${SITE.email}`}
                className="block text-sm text-text hover:text-accent"
              >
                {SITE.email}
              </a>
              {tel && (
                <a
                  href={tel}
                  className="mt-2 block text-sm text-text-muted hover:text-accent"
                >
                  {dict.contact.call}
                </a>
              )}
            </ContactInfoCard>

            <ContactInfoCard label={dict.contact.hours}>
              <p className="text-sm text-text">{dict.contact.hoursWeekdays}</p>
              <p className="mt-1 text-sm text-text">{dict.contact.hoursSunday}</p>
              <p className="mt-1 text-sm text-text">{dict.contact.hoursWeekend}</p>
            </ContactInfoCard>

            <div className="google-reviews-card rounded-xl border border-border bg-bg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                {dict.contact.googleReviews}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="google-reviews-mark flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-xs font-bold text-accent">
                  G
                </span>
                <div className="flex gap-0.5 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5"
                      strokeWidth={1.75}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {dict.contact.googleReviewsHint}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={googlePlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !h-10 !text-sm"
                >
                  {dict.contact.googleReviewsView}
                </a>
                <a
                  href={googlePlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {dict.contact.googleReviewsWrite}
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
