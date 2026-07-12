import { Header } from "@/components/header"
import { AttackCoverage } from "@/components/attack-coverage"
import { TargetCoverage } from "@/components/target-coverage"
import { HowTheSwarmWorks } from "@/components/how-the-swarm-works"
import { Proof } from "@/components/proof"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function AIRedTeamingPage() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      <Header />
      <AttackCoverage />
      <TargetCoverage />
      <HowTheSwarmWorks />
      <Proof />
      <FinalCta />
      <Footer />
    </main>
  )
}
