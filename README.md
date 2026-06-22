# SHISHA — Production Frontend

Luxury hospitality homepage (§01–§13) built with Next.js 16, GSAP, Framer Motion, and Lenis.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploy.

## Production build

```bash
npm run build
npm run start
```

## Stack

| Package | Role |
|---------|------|
| Next.js 16 | App Router, static export-ready pages |
| GSAP + ScrollTrigger | Scroll pins, scrubs, count-up |
| Framer Motion | Micro-interactions, carousel, form |
| Lenis | Smooth scroll (disabled under `prefers-reduced-motion`) |
| Tailwind CSS 4 | HF-001 design tokens |

## Architecture

- **Act I** (`src/components/sections/act-i/`) — §01–§05 approach sequence
- **Act II** (`src/components/sections/act-ii/`) — §06–§13 commercial spine
- **Reveal Gate** — nav + sticky pill at 20% scroll progress
- **SEO** — JSON-LD, Open Graph, sitemap, robots.txt

See [ARCHITECTURE.md](./ARCHITECTURE.md) for folder map.

## Performance notes

- Act II code-split via `next/dynamic` on homepage
- Scroll progress quantized (0.2%) to limit React re-renders
- `content-visibility: hidden` on inactive Act I layers
- Images: AVIF/WebP via `next/image`, priority only on LCP hero
- Unused Three.js / R3F dependencies removed from bundle

## Accessibility

- Skip links (main content + intro)
- Nav `inert` before Reveal Gate
- Voices carousel: keyboard arrows, `aria-live` quotes
- Form: labeled fields, native validation, `aria-pressed` party pills

## Deploy checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL`
- [ ] Replace Unsplash placeholders with commissioned assets
- [ ] Run Lighthouse on `/` (desktop + mobile)
- [ ] Test `prefers-reduced-motion` path
- [ ] Verify form analytics events (`form_start`, `form_complete`)
