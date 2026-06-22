# SHISHA — Frontend Architecture

Production-ready homepage (§01–§13) per HF-001 + MOT-001.

## Stack

| Package | Role |
|---------|------|
| Next.js 16 | App Router, static pages |
| TypeScript | Strict typing |
| Tailwind CSS 4 | Utility + `@theme` tokens |
| GSAP + ScrollTrigger | Scroll choreography (Act I/II) |
| Framer Motion | Micro-interactions |
| Lenis | Smooth scroll |

## Folder structure

```
src/
├── app/                    # App Router + SEO routes
├── components/
│   ├── layout/             # Nav, footer, grain, sticky pill
│   ├── providers/          # Lenis, GSAP, AppProviders
│   ├── sections/
│   │   ├── act-i/          # §01–§05
│   │   └── act-ii/         # §06–§13
│   ├── seo/                # JSON-LD
│   └── ui/                 # Form, cards, rows
├── hooks/
├── lib/
│   ├── tokens/             # HF-001 design tokens
│   ├── animations/         # GSAP helpers, scroll store
│   ├── constants/          # Copy, images, site config
│   └── seo/                # Metadata factory, JSON-LD
└── types/
```

## Reveal Gate

Navigation and mobile sticky pill appear when scroll progress ≥ **20%** (`REVEAL_GATE_PROGRESS`).

## Scripts

```bash
npm run dev
npm run build
npm run start
```
