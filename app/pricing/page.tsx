import { Header } from "@/components/header"
import { Pricing } from "@/components/pricing"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

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
