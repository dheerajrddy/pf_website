import type { Metadata } from "next"
import Image from "next/image"
import {
  Calendar,
  Database,
  FileCode2,
  Github,
  Network,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { Header } from "@/components/header"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { CALENDLY_URL, RULES_GITHUB_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "MCP Security for AI Agents | ProofLayer",
  description: "Scan MCP servers, red-team Model Context Protocol integrations, and protect live MCP traffic from prompt injection, tool poisoning, unsafe permissions, SSRF, and data exfiltration.",
  keywords: [
    "MCP security",
    "Model Context Protocol security",
    "MCP security scanner",
    "MCP server scanner",
    "MCP runtime security",
    "MCP prompt injection",
    "MCP tool poisoning",
    "AI agent security",
  ],
  alternates: { canonical: "/mcp-security" },
  openGraph: {
    title: "MCP Security for AI Agents | ProofLayer",
    description: "Scan MCP servers before deployment, attack them continuously, and protect MCP traffic at runtime.",
    url: "/mcp-security",
    type: "website",
    images: [{ url: "/prooflayer-og.png", width: 1200, height: 630, alt: "ProofLayer MCP security platform" }],
  },
}

const threats = [
  {
    icon: FileCode2,
    title: "Tool poisoning",
    body: "Detect malicious tool descriptions and responses that redirect an agent from the user's intended task.",
  },
  {
    icon: Network,
    title: "Prompt injection",
    body: "Test direct and indirect instructions carried through MCP resources, prompts, and tool output.",
  },
  {
    icon: ShieldCheck,
    title: "Excessive permissions",
    body: "Find MCP tools with unsafe scopes, missing authorization boundaries, or privilege escalation paths.",
  },
  {
    icon: Wrench,
    title: "Unsafe tool execution",
    body: "Probe command injection, SSRF, path traversal, arbitrary file access, and unsafe code execution.",
  },
  {
    icon: Database,
    title: "Data exfiltration",
    body: "Verify whether tool chains can expose credentials, private files, customer data, or internal context.",
  },
  {
    icon: ScanSearch,
    title: "Supply-chain risk",
    body: "Inspect MCP dependencies, packages, configurations, and server behavior before production deployment.",
  },
]

const integrations = [
  { name: "LangChain", logo: "/integration-logos/langchain.svg" },
  { name: "OpenAI Agents SDK", logo: "/integration-logos/openai-agents-sdk.svg" },
  { name: "CrewAI", logo: "/integration-logos/crewai.svg" },
  { name: "AutoGen", logo: "/integration-logos/autogen.svg" },
  { name: "Semantic Kernel", logo: "/integration-logos/semantic-kernel.svg" },
  { name: "Pydantic AI", logo: "/integration-logos/pydantic-ai.svg" },
]

function IntegrationLogo({
  integration,
  duplicate = false,
}: {
  integration: (typeof integrations)[number]
  duplicate?: boolean
}) {
  return (
    <div
      aria-hidden={duplicate}
      className="flex h-24 w-44 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200/80 bg-white px-5 shadow-sm shadow-gray-900/[0.04]"
    >
      <div className="relative h-10 w-32">
        <Image
          src={integration.logo}
          alt={duplicate ? "" : `${integration.name} logo`}
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>
      <span className="text-center text-[11px] font-semibold leading-tight text-gray-600">
        {integration.name}
      </span>
    </div>
  )
}

const mcpJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ProofLayer MCP Security",
  serviceType: "Model Context Protocol security",
  provider: { "@id": "https://www.proof-layer.com/#organization" },
  url: "https://www.proof-layer.com/mcp-security",
  description: "MCP server scanning, automated red teaming, runtime protection, and replayable security evidence for AI agents.",
  areaServed: "Worldwide",
}

export default function McpSecurityPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mcpJsonLd) }} />

      <section className="bg-dot-pattern px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-20 lg:pt-48">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">MCP security</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tighter text-gray-950 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Secure your
            <br />{" "}
            <span className="text-gradient">Agentic Runtime</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Protect live MCP traffic from prompt injection, tool poisoning, and data exfiltration.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={RULES_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-gray-800">
              <Github className="h-4 w-4" /> Download open source
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:border-blue-300 hover:text-blue-600">
              <Calendar className="h-4 w-4" /> Talk to us
            </a>
          </div>
          <div className="mt-10 sm:mt-12">
            <p className="text-sm font-semibold text-gray-700">Integrates with</p>
            <div
              aria-label="Supported agent framework integrations"
              className="mcp-marquee-mask relative left-1/2 mt-4 w-screen -translate-x-1/2 overflow-hidden pb-2"
            >
              <div className="mcp-marquee-track flex w-max">
                {[false, true].map((duplicate) => (
                  <div key={String(duplicate)} aria-hidden={duplicate} className="flex shrink-0 gap-4 pr-4">
                    {integrations.map((integration) => (
                      <IntegrationLogo
                        key={`${integration.name}-${duplicate}`}
                        integration={integration}
                        duplicate={duplicate}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">MCP attack surface</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter text-gray-950 sm:text-5xl">What MCP security must test</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">MCP connects models to tools, data, and privileged actions. Security testing must verify the full system outcome, not only the model response.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {threats.map((threat) => {
              const Icon = threat.icon
              return (
                <article key={threat.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="w-fit rounded-xl bg-blue-50 p-3"><Icon className="h-5 w-5 text-blue-600" /></div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950">{threat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{threat.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  )
}
