import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Blocks,
  Bug,
  CheckCircle2,
  FileCode2,
  Github,
  KeyRound,
  MessageSquare,
  Network,
  Package,
  ScanSearch,
  ShieldAlert,
} from "lucide-react"
import {
  siClaudecode,
  siCline,
  siCursor,
  siModelcontextprotocol,
  siOpencode,
  siWindsurf,
} from "simple-icons"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SCANNER_GITHUB_URL, SCANNER_NPM_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "Coding Agent Security | ProofLayer",
  description:
    "Scan Claude Code, Codex, Cursor, Windsurf, Cline, OpenCode, MCP servers, prompts, skills, and AI-suggested dependencies for agent security risks.",
  keywords: [
    "AI code scanner",
    "coding agent security",
    "Claude Code security scanner",
    "Codex security scanner",
    "Cursor security scanner",
    "MCP server scanner",
    "prompt injection scanner",
    "hallucinated package detection",
  ],
  alternates: { canonical: "/code-scanner" },
  openGraph: {
    title: "Coding Agent Security | ProofLayer",
    description:
      "Scan coding agents, MCP servers, prompts, skills, packages, and generated code before your agent trusts them.",
    url: "/code-scanner",
    type: "website",
    images: [
      {
        url: "/prooflayer-og.png",
        width: 1200,
        height: 630,
        alt: "ProofLayer coding agent security",
      },
    ],
  },
}

type Integration = {
  name: string
  detail: string
  icon?: LucideIcon
  brandIcon?: { path: string; hex: string }
}

const openAiLogo = {
  hex: "000000",
  path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
}

const integrations: Integration[] = [
  { name: "Claude Code", detail: "Coding agent", brandIcon: siClaudecode },
  { name: "Codex", detail: "OpenAI coding agent", brandIcon: openAiLogo },
  { name: "Cursor", detail: "AI editor", brandIcon: siCursor },
  { name: "Windsurf", detail: "AI editor", brandIcon: siWindsurf },
  { name: "Cline", detail: "Coding agent", brandIcon: siCline },
  { name: "OpenCode", detail: "Coding agent", brandIcon: siOpencode },
  { name: "MCP servers", detail: "Tools and resources", brandIcon: siModelcontextprotocol },
  { name: "Prompts", detail: "Instructions and context", icon: MessageSquare },
  { name: "Skills", detail: "Agent extensions", icon: Blocks },
  { name: "AI dependencies", detail: "Suggested packages", icon: Package },
]

const findings = [
  {
    icon: ShieldAlert,
    title: "Prompt injection",
    body: "Flag hidden instructions in prompts, docs, tool descriptions, and retrieved context.",
  },
  {
    icon: Package,
    title: "Hallucinated packages",
    body: "Check AI-suggested imports before an attacker can claim a fabricated package name.",
  },
  {
    icon: KeyRound,
    title: "Exposed secrets",
    body: "Find credentials, tokens, and sensitive configuration before they reach a commit.",
  },
  {
    icon: Network,
    title: "Unsafe MCP tools",
    body: "Inspect tool poisoning, spoofed names, command execution, and excessive permissions.",
  },
  {
    icon: Bug,
    title: "Vulnerable code",
    body: "Detect injection, unsafe execution, tainted data flows, and insecure generated code.",
  },
]

const scannerJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "agent-security-scanner-mcp",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Cross-platform",
  url: "https://www.proof-layer.com/code-scanner",
  downloadUrl: SCANNER_GITHUB_URL,
  description:
    "Open-source security scanner for AI coding agents, MCP servers, prompts, skills, packages, and generated code.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": "https://www.proof-layer.com/#organization" },
}

function IntegrationCard({ integration }: { integration: Integration }) {
  const Icon = integration.icon

  return (
    <div className="scanner-integration-card flex w-52 shrink-0 items-center gap-3 rounded-2xl border border-gray-200/90 bg-white px-4 py-3 shadow-sm shadow-gray-900/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
        {integration.brandIcon ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            style={{ fill: `#${integration.brandIcon.hex}` }}
          >
            <path d={integration.brandIcon.path} />
          </svg>
        ) : Icon ? (
          <Icon className="h-5 w-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
        ) : null}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-gray-950">{integration.name}</p>
        <p className="mt-0.5 truncate text-[11px] text-gray-500">{integration.detail}</p>
      </div>
    </div>
  )
}

export default function CodeScannerPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scannerJsonLd) }} />

      <section className="code-scanner-grid overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-40 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Local scanner · Coding agent security
          </p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-extrabold tracking-tighter text-gray-950 sm:mt-5 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Make your <span className="text-gradient">Coding Agents</span> secure.
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-gray-600 sm:mt-7 sm:text-xl">
            Scan Claude Code, Codex, Cursor, Windsurf, Cline, OpenCode, MCP servers, prompts, skills, and AI-suggested dependencies before your agent trusts them.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <a
              href={SCANNER_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
            >
              <Github className="h-4 w-4" /> Download open source
            </a>
            <a
              href={SCANNER_NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              View npm package <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-500 sm:mt-8 sm:text-sm">
            {[
              "Open source",
              "MIT licensed",
              "Local scan path",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="scanner-marquee-mask relative left-1/2 mt-9 w-screen -translate-x-1/2 overflow-hidden pb-5 sm:mt-14">
          <div className="scanner-marquee-track flex w-max gap-4 px-4">
            {[...integrations, ...integrations].map((integration, index) => (
              <div key={`${integration.name}-${index}`} aria-hidden={index >= integrations.length}>
                <IntegrationCard integration={integration} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">One local security gate</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-gray-950 sm:text-5xl">
              Agents and artifacts in. Prioritized findings out.
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Inputs</p>
              <div className="mt-5 space-y-3">
                {["Coding agents", "MCP servers", "Prompts and skills", "Code and packages"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800">
                    <FileCode2 className="h-4 w-4 text-blue-600" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden items-center text-blue-300 lg:flex"><ArrowRight className="h-6 w-6" /></div>

            <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50/70 p-7 shadow-lg shadow-blue-950/5">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-300/20 blur-2xl" />
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-white shadow-sm">
                  <ScanSearch className="h-8 w-8 text-blue-600" />
                </div>
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Detection engine</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-950">agent-security-scanner-mcp</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">Run from the developer workstation, CI, or as an MCP tool.</p>
                <code className="mt-5 rounded-xl border border-blue-100 bg-white px-4 py-2.5 font-mono text-xs text-gray-700 shadow-sm sm:text-sm">
                  npx agent-security-scanner-mcp scan-project .
                </code>
              </div>
            </div>

            <div className="hidden items-center text-blue-300 lg:flex"><ArrowRight className="h-6 w-6" /></div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Findings</p>
              <div className="mt-5 space-y-3">
                {["Severity", "Affected file", "Rule and evidence", "Remediation"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50/70 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">Agent-specific coverage</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-gray-950 sm:text-5xl">Catch what conventional code scanning misses.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {findings.map((finding) => {
              const Icon = finding.icon
              return (
                <article key={finding.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-900/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950">{finding.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{finding.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-200 bg-blue-50/70 px-6 py-12 text-center shadow-lg shadow-blue-950/5 sm:px-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Start on your laptop</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-gray-950 sm:text-5xl">Scan before the next agent action.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Install the open-source scanner and add a security gate to your coding-agent workflow.</p>
          <a
            href={SCANNER_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            <Github className="h-4 w-4" /> Download open source
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
