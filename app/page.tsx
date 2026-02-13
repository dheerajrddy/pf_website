import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Capabilities } from "@/components/capabilities"
import { DemoSection } from "@/components/demo-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { getNpmStats } from "@/lib/npm-stats"

export default async function Home() {
  const stats = await getNpmStats()

  return (
    <main className="relative min-h-screen">
      {/* Dark hero zone */}
      <div className="relative bg-[#0A0A0F] bg-hero-gradient">
        <Header stats={stats} />
        <Hero />
      </div>

      {/* Light content zone */}
      <div className="relative bg-white bg-dot-pattern text-gray-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-indigo-400/[0.04] blur-[100px]" />
        </div>
        <div className="relative">
          <Capabilities />
          <DemoSection />
          <FinalCta />
          <Footer />
        </div>
      </div>
    </main>
  )
}
