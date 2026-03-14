import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { WhySection } from "@/components/why-section"
import { AttackSurface } from "@/components/attack-surface"
import { Solution } from "@/components/solution"
import { DemoSection } from "@/components/demo-section"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { ProductsSection } from "@/components/products-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { getNpmStats } from "@/lib/npm-stats"

export default async function Home() {
  const stats = await getNpmStats()

  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-400/[0.04] blur-3xl" />
        <div className="absolute top-[60%] -left-40 h-[500px] w-[500px] rounded-full bg-violet-300/[0.03] blur-3xl" />
      </div>
      <div className="relative">
        <Header stats={stats} />
        <Hero stats={stats} />
        <SocialProof stats={stats} />
        <WhySection />
        <AttackSurface />
        <Solution />
        <DemoSection />
        <WhyProofLayer />
        <ProductsSection />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
