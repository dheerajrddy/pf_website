"use client"

import { motion } from "framer-motion"
import { Link2, Monitor, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect",
    description:
      "Drop in our SDK or API. Works with any agent framework — LangChain, CrewAI, custom builds.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Scan",
    description:
      "Automated scanning analyzes AI-generated code and search pipelines for vulnerabilities. Get a full security report.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Protect",
    description:
      "Runtime guardrails block attacks in production. Real-time alerts. Zero added latency.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Integration to protection.
            <br />
            Under 5 minutes.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="mt-24 grid gap-8 md:grid-cols-3 lg:mt-28 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl border border-gray-100/80 bg-white p-10 lg:p-12"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-100">
                    {step.number}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
