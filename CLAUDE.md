# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ProofLayer AI Agent Security Platform landing page and blog. Built with Next.js 16 (App Router), React 19, TypeScript, and TailwindCSS 4. Originally scaffolded via v0.app and deployed on Vercel.

## Commands

- **Dev server:** `pnpm dev`
- **Production build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Start production:** `pnpm start`

Package manager is **pnpm** (pnpm-lock.yaml).

## Architecture

### Routing (Next.js App Router)

- `app/layout.tsx` — Root layout with metadata, fonts (Inter, JetBrains Mono), ThemeProvider, Vercel Analytics
- `app/page.tsx` — Landing page composed of section components (Hero, Features, Pricing, etc.)
- `app/blog/page.tsx` — Blog listing
- `app/blog/[slug]/page.tsx` — Individual blog posts (e.g., `deepfake-detection/`, `coding-agent-security/`, `voice-ai-security/`)

### Component Organization

- `components/` — Page-level section components (hero.tsx, features.tsx, pricing-section.tsx, header.tsx, footer.tsx, etc.)
- `components/ui/` — Base UI primitives following shadcn/ui "new-york" style with CVA variants
- `components/blog/` — Blog-specific components (visualizations, diagrams, author cards, table of contents)

### Styling System

- TailwindCSS 4 with CSS variables defined in `app/globals.css`
- Color palette: Indigo (primary), Violet (accent), with semantic colors (Rose, Emerald, Orange, Blue)
- `cn()` utility in `lib/utils.ts` combines clsx + tailwind-merge for conditional classes
- Custom utility classes: `.text-gradient`, `.card-hover`, `.btn-bounce`, `.blob`
- Framer Motion for animations — consistent pattern: `initial={{ opacity: 0, y: 20 }}`, `whileInView`, `viewport={{ once: true }}`, stagger children

### Data Patterns

- Blog metadata and authors centralized in `lib/blog-data.ts`
- Features, pricing tiers, and other section data defined as arrays within their respective components
- Color mappings use object lookup pattern (colorClasses)

### Key Conventions

- Most components use `"use client"` directive (interactive/animated)
- Section components follow consistent structure: decorative blobs → container (max-w-7xl) → motion header with badge/title/subtitle → content grid → staggered animations
- Responsive: mobile-first with sm/md/lg breakpoints; grid-cols-1 → md:grid-cols-2 → lg:grid-cols-3
- Hash navigation for landing page sections (`#features`, `#pricing`) with `scroll-mt-24`
- Path alias: `@/*` maps to project root

### Build Config

- `next.config.mjs`: `typescript.ignoreBuildErrors: true`, `images.unoptimized: true`
- `components.json`: shadcn/ui config with RSC enabled, lucide icons
- No test framework configured
