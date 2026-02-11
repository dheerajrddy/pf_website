import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CompatibilityBar } from "@/components/compatibility-bar"
import { TrustBar } from "@/components/trust-bar"
import { WhySection } from "@/components/why-section"
import { DemoSection } from "@/components/demo-section"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { getNpmStats, formatDownloads } from "@/lib/npm-stats"

export default async function Home() {
  const stats = await getNpmStats()
  const formattedDownloads = formatDownloads(stats.weeklyDownloads)

  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      {/* Ambient glow behind hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-indigo-400/[0.04] blur-[100px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[600px] rounded-full bg-violet-300/[0.03] blur-[80px]" />
      </div>

      <div className="relative">
        <Header stats={stats} />
        <Hero />
        <CompatibilityBar />
        <TrustBar downloads={formattedDownloads} />
        <WhySection />
        <DemoSection />
        <WhyProofLayer />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
