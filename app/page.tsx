import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { WhySection } from "@/components/why-section"
import { AttackSurface } from "@/components/attack-surface"
import { Solution } from "@/components/solution"
import { DemoSection } from "@/components/demo-section"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { Pricing } from "@/components/pricing"
import { ProductsSection } from "@/components/products-section"
import { Team } from "@/components/team"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { getNpmStats } from "@/lib/npm-stats"

export default async function Home() {
  const stats = await getNpmStats()

  return (
    <main className="relative min-h-screen">
      <div className="relative">
        <Header stats={stats} />
        <Hero stats={stats} />
        <SocialProof stats={stats} />
        <WhySection />
        <AttackSurface />
        <Solution />
        <DemoSection />
        <WhyProofLayer />
        <Pricing />
        <ProductsSection />
        <Team />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
