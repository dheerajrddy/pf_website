import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Community",
    price: "Free",
    description: "Open-source scanner for individual developers and small teams.",
    features: [
      "Security scanner (CLI + MCP)",
      "1,700+ detection rules",
      "Prompt injection probes",
      "MCP tool testing",
      "Community rule library",
      "MIT licensed",
    ],
    cta: "Install Free",
    ctaHref: "https://www.npmjs.com/package/agent-security-scanner-mcp",
    style: "border-slate-200 bg-white",
    ctaStyle: "bg-slate-900 text-white hover:bg-slate-800",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated red-teaming with compliance, SSO, and SLA guarantees.",
    features: [
      "Everything in Community",
      "Continuous autonomous red-teaming",
      "Proof-of-exploit reports",
      "Compliance reporting (SOC 2, ISO 27001)",
      "SSO / SAML integration",
      "SLA guarantees",
      "CISO executive portal",
      "Dedicated support & onboarding",
      "Custom attack scenarios",
    ],
    cta: "Book a Demo",
    ctaHref: "https://calendly.com/divyachitimalla/intro",
    style: "border-slate-200 bg-white",
    ctaStyle: "bg-slate-900 text-white hover:bg-slate-800",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">
            Pricing
          </span>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${tier.style}`}
            >
              <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">{tier.price}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${tier.ctaStyle}`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
