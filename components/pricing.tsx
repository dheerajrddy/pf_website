"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animations"

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
    style: "border-gray-200 bg-white",
    ctaStyle: "bg-gray-900 text-white hover:bg-gray-800",
    popular: false,
  },
  {
    name: "Pro",
    price: "$499",
    period: "/mo",
    description: "Continuous autonomous red-teaming for production AI systems.",
    features: [
      "Everything in Community",
      "Continuous 24/7 red-teaming",
      "Self-evolving attack agents",
      "Proof-of-exploit reports",
      "Security dashboard",
      "Slack / webhook alerts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://calendly.com/divyachitimalla/intro",
    style: "border-blue-500/30 bg-white shadow-lg scale-[1.02] ring-1 ring-blue-500/20",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated red-teaming with compliance, SSO, and SLA guarantees.",
    features: [
      "Everything in Pro",
      "Compliance reporting (SOC 2, ISO 27001)",
      "SSO/SAML & SLA guarantees",
      "CISO portal & dedicated onboarding",
      "Snapshot: 5-day scoped scan",
      "Readiness Assessment: 4-week single framework",
      "Full Readiness: 12-week multi-framework",
    ],
    cta: "Book a Demo",
    ctaHref: "https://calendly.com/divyachitimalla/intro",
    style: "border-gray-200 bg-white",
    ctaStyle: "bg-gray-900 text-white hover:bg-gray-800",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80"
          >
            Pricing
          </motion.span>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${tier.style}`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">{tier.price}</span>
                {tier.period && <span className="text-base text-gray-500">{tier.period}</span>}
              </div>
              <p className="mt-3 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${tier.ctaStyle}`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
