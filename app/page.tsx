import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { AttackCoverage } from "@/components/attack-coverage"
import { HowTheSwarmWorks } from "@/components/how-the-swarm-works"
import { AgentDojoBenchmark } from "@/components/agentdojo-benchmark"
import { Compliance } from "@/components/compliance"
import { OpenSourceLadder } from "@/components/open-source-ladder"
import { Pricing } from "@/components/pricing"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden md:block">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-blue-400/[0.04] blur-[100px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[600px] rounded-full bg-sky-300/[0.03] blur-[80px]" />
      </div>
      <div className="relative">
        <Header />
        <Hero />
        <TrustStrip />
        <HowTheSwarmWorks />
        <AgentDojoBenchmark />
        <OpenSourceLadder />
        <AttackCoverage />
        <Compliance />
        <Pricing />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
