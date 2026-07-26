import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Pricing } from "@/components/pricing"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Red Teaming Pricing | ProofLayer",
  description: "Start with the open-source AI agent and MCP security scanner. Add enterprise AI red teaming, MCP runtime protection, and audit-ready evidence.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AI Red Teaming Pricing | ProofLayer",
    description: "Open-source scanning and enterprise AI red teaming with MCP runtime security and audit-ready evidence.",
    url: "/pricing",
    type: "website",
    images: [{ url: "/prooflayer-og.png", width: 1200, height: 630, alt: "ProofLayer AI security pricing" }],
  },
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      <Header />
      <Pricing />
      <WhyProofLayer />
      <FinalCta />
      <Footer />
    </main>
  )
}
