import type { Metadata } from "next"
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { AttackCoverage } from "@/components/attack-coverage"
import { TargetCoverage } from "@/components/target-coverage"
import { HowTheSwarmWorks } from "@/components/how-the-swarm-works"
import { AgentDojoBenchmark } from "@/components/agentdojo-benchmark"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { CALENDLY_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "AI Red Teaming for LLMs & Agents | ProofLayer",
  description: "Continuously red-team LLM applications, AI agents, RAG pipelines, and MCP servers. Verify prompt injection, tool abuse, data exfiltration, and memory poisoning with replayable evidence.",
  keywords: [
    "AI red teaming",
    "LLM red teaming",
    "automated red teaming",
    "agentic AI red teaming",
    "AI penetration testing",
    "prompt injection testing",
    "AI agent security testing",
  ],
  alternates: { canonical: "/ai-red-teaming" },
  openGraph: {
    title: "AI Red Teaming for LLMs & Agents | ProofLayer",
    description: "Autonomous red-team campaigns with verified exploits, replay traces, and audit-ready evidence.",
    url: "/ai-red-teaming",
    type: "website",
    images: [{ url: "/prooflayer-og.png", width: 1200, height: 630, alt: "ProofLayer AI red teaming platform" }],
  },
}

const redTeamJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ProofLayer AI Red Teaming",
  serviceType: "AI red teaming",
  provider: { "@id": "https://www.proof-layer.com/#organization" },
  url: "https://www.proof-layer.com/ai-red-teaming",
  description: "Continuous autonomous red teaming for LLM applications, AI agents, RAG pipelines, and MCP servers.",
  areaServed: "Worldwide",
}

export default function AIRedTeamingPage() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(redTeamJsonLd) }} />
      <section className="px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-20 lg:pt-48">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">AI red teaming</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tighter text-gray-950 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Continuous AI red teaming
            <br />
            <span className="text-gradient">for LLMs and agents.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            ProofLayer runs autonomous attack campaigns against LLM applications, multi-agent systems, RAG pipelines, and MCP servers. Every verified breach includes a replay trace and audit-ready evidence.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-gray-800">
              <Calendar className="h-4 w-4" /> Talk to us
            </a>
            <a href="#attack-coverage" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:border-blue-300 hover:text-blue-600">
              See attack coverage <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {["Prompt injection", "Tool abuse", "Data exfiltration", "RAG poisoning", "Memory poisoning", "MCP attacks"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs font-medium text-blue-800">
                <CheckCircle2 className="h-3.5 w-3.5" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <AttackCoverage />
      <TargetCoverage />
      <HowTheSwarmWorks />
      <AgentDojoBenchmark />
      <FinalCta />
      <Footer />
    </main>
  )
}
