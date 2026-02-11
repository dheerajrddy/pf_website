# ProofLayer Landing Page Redesign — Handoff Document

## 1. Design Philosophy

### Positioning
ProofLayer is **the Snyk for AI coding agents**. While Snyk ($8.5B valuation) protects human-written code, ProofLayer secures the 41% of code now written by AI agents. This is the only message on the landing page — no voice AI, no chat agents, no search guardrails.

### Competitor Context
- **Snyk**: Static analysis after commit. Built for human developers. No MCP integration, no real-time scanning.
- **Semgrep**: Rule-based scanning. Some AI rules, but no agent integration, no package hallucination detection.
- **ProofLayer**: Runs inside Cursor, Claude Code, Copilot via MCP. Scans in real-time as AI writes code.

### Key Decisions
| Decision | Rationale |
|----------|-----------|
| Removed typewriter effect | Rotating text ("coding agents / agent search / AI agents") dilutes the message. Static headline is stronger. |
| Removed pricing section | Pre-PMF stage. No customers yet. Open-source install is the only wedge. |
| Removed services two-pillar | "Code Security + Search Security" side-by-side creates confusion. Single focus: AI coding agent security. |
| Replaced SOC 2/HIPAA badges | Don't have these certifications yet. Replaced with real capabilities: 359 rules, 4.3M packages, 12 languages. |
| Direct competitor naming | "ProofLayer vs Snyk vs Semgrep" is far more credible than "vs Generic LLM Security vs DIY". |
| 2 CTAs everywhere | "Install Free" (primary) and "See Demo" / "Book a Demo" (secondary). Devs install, not "try". |
| Removed How It Works | Generic "Connect → Scan → Protect" replaced by live demo section showing actual vulnerability detection. |
| Removed features bento grid | 7 bloated cards replaced by focused demo + comparison table. Every capability earns its place. |

---

## 2. Section-by-Section Spec

### Page Flow (7 sections)
```
Header
  └─ Hero (headline + subtitle + badges + CTAs + terminal animation)
  └─ CompatibilityBar (AI tool logos)
  └─ WhySection / The Problem (3 stats + Snyk/Semgrep contrast)
  └─ DemoSection (3-panel: write → catch → fix)
  └─ WhyProofLayer / Comparison (ProofLayer vs Snyk vs Semgrep table)
  └─ FinalCta (npm install + Install Free)
  └─ Footer
```

---

### Section 1: Header (`components/header.tsx`)

**Layout:** Fixed top, `bg-white/80 backdrop-blur-2xl`, height 80px, max-width 7xl centered.

**Left:** Logo (40x40 rounded) + "ProofLayer" wordmark + "AI Agent Security" tagline (hidden on mobile).

**Center Nav (desktop):**
- Features → `#features` (scrolls to comparison section)
- How It Works → `#demo` (scrolls to demo section)
- Blog → `/blog`
- Docs → `https://www.npmjs.com/package/agent-security-scanner-mcp` (external)

**Right:**
- NPM badge pill: `agent-security-scanner` | `2.0.4` | `1.4k/mo` | `21 ver.`
- Primary CTA button: "Install Free" → npm package link, `bg-indigo-600 text-white rounded-full`

**Mobile:** Hamburger → slide-down menu with same links + "Install Free" button.

**Responsive:**
- `md:` breakpoint shows desktop nav
- Below `md:` shows hamburger menu

---

### Section 2: Hero (`components/hero.tsx`)

**Layout:** Centered text, `pt-44 pb-32` (desktop: `pt-56 pb-48`), max-width 7xl.

**Headline (h1):**
```
AI agents write the code.
We make sure it's safe.
```
- Font: `text-[52px] sm:text-[80px] lg:text-[96px]`, `font-extrabold`, `tracking-tighter`
- Static text. No typewriter effect.

**Subtitle (p):**
```
62% of AI-generated code has security vulnerabilities. Agent Security Scanner
is the first security layer that runs inside Cursor, Claude Code, and Copilot —
catching vulnerabilities, hallucinated packages, and prompt injection in real-time.
```
- Font: `text-xl sm:text-2xl`, `text-gray-400`, `max-w-2xl`

**Capability Badges (3 pills):**
- `359 Security Rules` — emerald badge with ShieldCheck icon
- `4.3M Packages Verified` — emerald badge
- `12 Languages` — emerald badge
- Layout: `flex items-center gap-4`, wrap on mobile

**CTAs:**
- Primary: "Install Free" → npm link, `bg-gray-900 text-white rounded-full px-10 py-4`
- Secondary: "See Demo" → scrolls to `#demo`, `border border-gray-200 bg-white rounded-full px-8 py-4`

**Code Pill:**
- `npx agent-security-scanner-mcp init` with copy-to-clipboard button
- `bg-indigo-50/80 border-indigo-200 rounded-full` pill style

**Hero Visual:**
- `SecurityAnimation` component (terminal visualization)
- Shows: SQL injection written → detected → auto-fixed

**Animations:**
- All elements use Framer Motion `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- Staggered delays: 0.1, 0.2, 0.25, 0.3, 0.4, 0.6

---

### Section 3: Compatibility Bar (`components/compatibility-bar.tsx`)

**Layout:** Full-width section, `py-16`, centered content.

**Headline:** "Works with every major AI coding tool" — uppercase tracking-wide, `text-sm text-gray-400`

**Logo Strip:**
```
[Claude Code] [Cursor] [Windsurf] [Copilot] [Cline] [VS Code] [Zed]
```
- 7 tool name badges in a flex row, centered
- Style: `bg-gray-50 border border-gray-100 rounded-xl px-6 py-3`
- Text: tool name in `font-medium text-gray-400`, on hover `text-gray-900`
- Responsive: wraps to 2 rows on mobile (grid-cols-3 then grid-cols-4)
- Framer Motion stagger animation on scroll into view

**Note:** Using text-based badges (not image logos) to avoid asset dependency. Can be upgraded to SVG logos later.

---

### Section 4: The Problem (`components/why-section.tsx`)

**Layout:** `py-32 lg:py-48`, max-width 7xl, centered text header + 3-column stat grid.

**Badge:** "The Problem" — `text-sm uppercase tracking-[0.2em] text-indigo-600/80`

**Headline (h2):**
```
AI is writing code faster than anyone can review it.
```
- `text-4xl sm:text-5xl lg:text-[64px]`, `font-extrabold tracking-tighter`

**Subtitle:**
```
Every AI coding agent you deploy is a new attack surface.
Without purpose-built security, vulnerable code ships to production.
```

**Stats Grid (3 columns on desktop):**

| Stat | Number | Detail | Source |
|------|--------|--------|--------|
| AI-generated code globally | 41% | of all new code is AI-generated | GitHub 2025 |
| Vulnerable AI code | 62% | of AI-generated code has security vulnerabilities | Stanford Research |
| New findings per month | 10,000+ | new security findings from AI-generated code monthly | Industry Data |

- Number: `text-6xl sm:text-7xl lg:text-8xl font-extrabold`
- Detail: `text-lg lg:text-xl text-gray-500`
- Source: `text-sm uppercase tracking-wider text-gray-300`

**Contrast Line (below stats):**
```
Snyk and Semgrep scan code after it's committed. By then, the vulnerable code has shipped.
They were built for human developers, not autonomous agents.
```
- `max-w-3xl mx-auto text-center`, `text-lg text-gray-400`, `border-t border-gray-100 pt-12 mt-16`
- "Snyk" and "Semgrep" in `font-semibold text-gray-600`

---

### Section 5: Live Demo (`components/demo-section.tsx`)

**ID:** `id="demo"` (scroll target from nav)

**Layout:** `py-32 lg:py-48`, max-width 5xl centered.

**Badge:** "See It In Action" — indigo uppercase badge

**Headline (h2):**
```
Detect. Fix. Ship secure.
```

**Three-Panel Sequence:**
Each panel is a terminal-style card with a step label.

**Panel 1 — "The Agent Writes"**
```javascript
// Claude Code generates a database query
app.get('/user/:id', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.params.id;
  db.query(query, (err, result) => res.json(result));
});
```
- Header: Step icon (Code2) + "The Agent Writes" label
- Dark terminal background (`bg-gray-950`)
- Syntax-highlighted code (manual color classes)

**Panel 2 — "The Scanner Catches"**
```
CRITICAL  SQL Injection (CWE-89)
Line 3: String concatenation in SQL query
OWASP: A03:2021 - Injection
Risk: User input directly interpolated into query
```
- Header: Step icon (AlertTriangle) + "The Scanner Catches" label
- Red/amber warning styling
- `CRITICAL` badge in red

**Panel 3 — "Auto-Fix Applied"**
```javascript
app.get('/user/:id', (req, res) => {
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [req.params.id], (err, result) => res.json(result));
});
```
- Header: Step icon (CheckCircle2) + "Auto-Fix Applied" label
- Green success indicator
- Changed lines highlighted with green left border

**Tab Interface:**
- 3 tabs at top: "The Agent Writes" | "The Scanner Catches" | "Auto-Fix Applied"
- Active tab: `bg-white border-b-2 border-indigo-600 text-gray-900`
- Auto-cycles every 4 seconds, or click to switch
- Smooth fade transition between panels

**Capability Pills (below demo):**
- `Code Vulnerability Scanning` — "359 rules, 12 languages"
- `Package Hallucination Detection` — "4.3M packages verified"
- `Prompt Injection Firewall` — "80%+ detection rate"
- Layout: 3-column grid on desktop, stack on mobile
- Style: `bg-white border border-gray-100 rounded-xl p-6`, icon + title + description

---

### Section 6: Comparison Table (`components/why-prooflayer.tsx`)

**ID:** `id="features"` (scroll target from nav)

**Layout:** `py-32 lg:py-48`, max-width 5xl centered.

**Badge:** "Why ProofLayer" — indigo uppercase badge

**Headline (h2):**
```
Built for AI agents. Not retrofitted.
```

**Subtitle:**
```
See how ProofLayer compares to traditional security tools
that were designed for human-written code.
```

**Comparison Table (4 columns):**

| Capability | ProofLayer | Snyk | Semgrep |
|-----------|-----------|------|---------|
| Scans inside AI coding agents (MCP) | YES | NO | NO |
| Real-time scanning as code is written | YES | NO | NO |
| AI-generated code-specific rules | YES | NO | Partial |
| Package hallucination detection | YES | NO | NO |
| Prompt injection firewall | YES | NO | NO |
| Auto-fix with one command | YES | Partial | Partial |
| Works with Cursor, Claude Code, Copilot | YES | NO | NO |
| Free open-source core | YES | Partial | YES |
| < 5 min setup | YES | NO | NO |
| CWE + OWASP mapped | YES | YES | YES |

- YES: Green checkmark (`text-indigo-500`)
- NO: Gray dash (`text-gray-300`)
- Partial: Amber tilde/partial indicator (`text-amber-500`)
- ProofLayer column header: `font-bold text-indigo-600`
- Alternating row backgrounds for readability
- Rounded card with border, overflow hidden

**Market Context (below table):**
```
Snyk is valued at $8.5B protecting human-written code.
We're building the security layer for the 41% that AI writes.
```
- Centered, `text-lg text-gray-400`, `mt-12`
- "Snyk" and "$8.5B" in `font-semibold text-gray-600`

---

### Section 7: Final CTA (`components/final-cta.tsx`)

**Layout:** `py-36 lg:py-52`, `bg-gray-50/50`, max-width 4xl centered.

**Headline (h2):**
```
AI is writing the code.
Make sure it's safe.
```
- `text-5xl sm:text-6xl lg:text-[72px]`, `font-extrabold tracking-tighter`

**Subtitle:**
```
One command. Every major AI coding tool. Free forever for developers.
```
- `text-xl sm:text-2xl`, `text-gray-400`

**Code Block:**
- `npx agent-security-scanner-mcp init` in a copyable code pill
- Dark background terminal style: `bg-gray-950 rounded-xl px-6 py-4 font-mono`
- Copy button on the right

**CTA Button:**
- "Install Free" → npm link, `bg-gray-900 text-white rounded-full`

---

### Section 8: Footer (`components/footer.tsx`)

**Layout:** `py-20 lg:py-28`, max-width 7xl.

**Left Column:**
- Logo + "ProofLayer" wordmark
- Tagline: "Security for AI coding agents."
- Social links: Twitter, LinkedIn, GitHub

**Right Column — Product Links:**
- Features → `#features`
- How It Works → `#demo`
- Blog → `/blog`
- GitHub → `https://github.com/prooflayer`
- npm → `https://www.npmjs.com/package/agent-security-scanner-mcp`

**Bottom Bar:**
- Copyright: `© 2025 ProofLayer. All rights reserved.`
- Compliance badges: `OWASP Top 10` | `CWE Mapped` | `MITRE ATLAS`
- No SOC 2 or HIPAA badges (don't have these yet)

---

## 3. Copy Bank

### Headlines
| Section | Copy |
|---------|------|
| Hero H1 | AI agents write the code. We make sure it's safe. |
| Problem H2 | AI is writing code faster than anyone can review it. |
| Demo H2 | Detect. Fix. Ship secure. |
| Comparison H2 | Built for AI agents. Not retrofitted. |
| Final CTA H2 | AI is writing the code. Make sure it's safe. |

### Subtitles
| Section | Copy |
|---------|------|
| Hero | 62% of AI-generated code has security vulnerabilities. Agent Security Scanner is the first security layer that runs inside Cursor, Claude Code, and Copilot — catching vulnerabilities, hallucinated packages, and prompt injection in real-time. |
| Problem | Every AI coding agent you deploy is a new attack surface. Without purpose-built security, vulnerable code ships to production. |
| Comparison | See how ProofLayer compares to traditional security tools that were designed for human-written code. |
| Final CTA | One command. Every major AI coding tool. Free forever for developers. |

### CTAs
| Context | Primary | Secondary |
|---------|---------|-----------|
| Hero | Install Free → npm | See Demo → #demo |
| Final CTA | Install Free → npm | — |
| Header | Install Free → npm | — |

### Badge/Pill Text
- `359 Security Rules`
- `4.3M Packages Verified`
- `12 Languages`
- `OWASP Top 10`
- `CWE Mapped`
- `MITRE ATLAS`

### Contrast Lines
- "Snyk and Semgrep scan code after it's committed. By then, the vulnerable code has shipped. They were built for human developers, not autonomous agents."
- "Snyk is valued at $8.5B protecting human-written code. We're building the security layer for the 41% that AI writes."

---

## 4. Color & Typography

### Existing Design System (preserved)
- **Primary:** Indigo `#4F46E5` / `indigo-600`
- **Accent:** Violet `#6366F1` / `violet-500`
- **Text:** Gray-900 (headings), Gray-400/500 (body), Gray-300 (muted)
- **Backgrounds:** White, Gray-50, Gray-950 (terminal)
- **Success:** Emerald (badges)
- **Warning:** Amber (scanner warnings)
- **Danger:** Red/Rose (critical findings)

### Typography
- **Sans:** Inter — headings (extrabold/bold), body (regular/medium)
- **Mono:** JetBrains Mono — code blocks, terminal output, npm commands
- **Heading Scale:** 96px (hero) → 64px (sections) → 48px (subsections)
- **Body:** 16-20px with relaxed line-height

---

## 5. Component Architecture

### Components to CREATE
| File | Export | Props |
|------|--------|-------|
| `components/demo-section.tsx` | `DemoSection` | None (self-contained) |
| `components/compatibility-bar.tsx` | `CompatibilityBar` | None (self-contained) |

### Components to MODIFY
| File | Changes |
|------|---------|
| `components/hero.tsx` | Remove typewriter, new headline/subtitle/badges/CTAs |
| `components/why-section.tsx` | New stats, new copy, add contrast line |
| `components/why-prooflayer.tsx` | New comparison columns (Snyk, Semgrep), new data |
| `components/final-cta.tsx` | New copy, add code block with copy button |
| `components/header.tsx` | New nav links, "Install Free" CTA, update npm stats |
| `components/footer.tsx` | Remove HIPAA/SOC2, add OWASP/CWE/MITRE, add GitHub |
| `components/security-animation.tsx` | SQL injection → detect → fix terminal content |
| `app/page.tsx` | New imports, remove deleted sections, new ordering |
| `app/layout.tsx` | Updated metadata for AI coding agent security focus |

### Components REMOVED from page (imports removed)
| File | Reason |
|------|--------|
| `components/services-section.tsx` | Two-pillar confusion |
| `components/how-it-works.tsx` | Replaced by demo section |
| `components/features.tsx` | Replaced by demo + comparison |
| `components/trust-bar.tsx` | Replaced by compatibility bar |
| `components/use-cases-section.tsx` | Voice AI — off-message |
| `components/problem-section.tsx` | Voice AI — off-message |
| `components/verification-section.tsx` | Voice compliance — off-message |
| `components/pricing-section.tsx` | No pricing at this stage |

---

## 6. Asset Requirements

### AI Tool Logos (for Compatibility Bar)
Currently using text-based badges. To upgrade to logo images, source these SVGs:
- Claude Code (Anthropic)
- Cursor (cursor.sh)
- Windsurf (Codeium)
- GitHub Copilot (GitHub)
- Cline (open source)
- VS Code (Microsoft)
- Zed (Zed Industries)

Place in `public/logos/` as SVGs, render grayscale by default, colorize on hover using CSS `filter: grayscale(1)` → `filter: grayscale(0)`.

---

## 7. Responsive Notes

### Breakpoints (TailwindCSS)
- **Mobile (< 640px):** Single column, smaller text, stacked CTAs
- **Tablet (640-1024px):** 2-column grids, medium text sizes
- **Desktop (1024px+):** Full layout, 3-column grids, large headings

### Per-Section Responsive
| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Header | Hamburger menu | Hamburger menu | Full nav |
| Hero | Stacked CTAs, smaller heading | Side-by-side CTAs | Full layout |
| Compatibility Bar | 3-col grid wrap | 4-col grid | Single row flex |
| Stats | Stacked cards | 2-col grid | 3-col grid |
| Demo | Stacked panels | Stacked panels | Tab interface |
| Comparison | Horizontal scroll table | Full table | Full table |
| Final CTA | Stacked | Stacked | Centered |

---

## 8. SEO / Metadata

### Updated Metadata (`app/layout.tsx`)
```typescript
title: "ProofLayer — AI Coding Agent Security Scanner"
description: "Catch vulnerabilities, hallucinated packages, and prompt injection in AI-generated code. Works with Cursor, Claude Code, and Copilot. Free open-source scanner."
keywords: [
  "AI coding agent security",
  "AI code scanner",
  "AI-generated code vulnerabilities",
  "package hallucination detection",
  "prompt injection firewall",
  "Cursor security",
  "Claude Code security",
  "Copilot security scanner",
  "MCP security",
  "OWASP AI",
  "CWE",
  "code vulnerability scanner"
]
```

### Open Graph
- Title: "ProofLayer — AI Coding Agent Security Scanner"
- Description: "62% of AI-generated code has vulnerabilities. Catch them before they ship."
- Type: "website"

### Twitter Card
- Card: "summary_large_image"
- Same title and description as OG

---

## 9. Reference Sites

For design quality benchmarks and competitive positioning:
- **Snyk** — snyk.io (competitor, $8.5B, code security)
- **Semgrep** — semgrep.dev (competitor, static analysis)
- **Socket** — socket.dev (package security, similar vibe)
- **Linear** — linear.app (design quality benchmark)
- **Vercel** — vercel.com (design quality benchmark)
- **Wiz** — wiz.io (cloud security, IPO trajectory)

---

## 10. Deleted Content Reference

The following content was deliberately removed. Do NOT re-add:

- **Voice AI** anything (deepfake detection, waveform analysis, prosodic metrics)
- **Chat agent** security or guardrails
- **Search guardrails** (agent search security)
- **Bidirectional guardrails** feature card
- **SOC 2 Type II** badge (not certified)
- **HIPAA Compliant** badge (not certified)
- **Pricing tiers** (pre-PMF, no pricing info to share)
- **"Try Now"** CTA language (devs install, not try)
- **"Start Free"** CTA language (replaced with "Install Free")
- **"Book a Demo"** as primary CTA (secondary only)
- **Waitlist form** (replaced with direct npm install)
- **7-card features bento grid** (replaced by demo + comparison)
- **3-step How It Works** (replaced by demo section)
