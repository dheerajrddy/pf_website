import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { WhySection } from "@/components/why-section"
import { DashboardTour } from "@/components/dashboard-tour"
import { AttackCoverage } from "@/components/attack-coverage"
import { TargetCoverage } from "@/components/target-coverage"
import { HowTheSwarmWorks } from "@/components/how-the-swarm-works"
import { Proof } from "@/components/proof"
import { Compliance } from "@/components/compliance"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-blue-400/[0.04] blur-[100px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[600px] rounded-full bg-sky-300/[0.03] blur-[80px]" />
      </div>
      <div className="relative">
        <Header />
        <Hero />
        <TrustStrip />
        <WhySection />
        <DashboardTour />
        <AttackCoverage />
        <TargetCoverage />
        <HowTheSwarmWorks />
        <Proof />
        <Compliance />
        <WhyProofLayer />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
