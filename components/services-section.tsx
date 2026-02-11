"use client"

import { motion } from "framer-motion"
import { Code, Search, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    badge: "Code Security",
    accentColor: "violet",
    title: "Coding Agent Security",
    description:
      "Pre-execution code review for LLM outputs. Catch injection vulnerabilities, supply chain risks, and insecure patterns before they ship.",
    differentiator: "Catches what static analysis misses — LLM-specific vulnerability patterns.",
    features: [
      "Pre-execution code review for AI-generated code",
      "Package hallucination and supply chain risk detection",
      "Insecure pattern identification across languages",
      "Runtime guardrails for code execution sandboxes",
    ],
    linkText: "How we secure coding agents",
    blogSlug: "/blog/coding-agent-security",
  },
  {
    icon: Search,
    badge: "Search Guardrails",
    accentColor: "blue",
    title: "Agent Search Security",
    description:
      "Guard the search I/O channel for AI agents. Prevent data leakage in outbound queries and detect indirect prompt injection in fetched web content.",
    differentiator: "First-of-its-kind search guardrails — securing what agents consume from the web.",
    features: [
      "Outbound query leak prevention (secrets, PII, internal context)",
      "Inbound result scanning for prompt injection",
      "Malicious URL and typosquat detection",
      "Content integrity verification for RAG pipelines",
    ],
    linkText: "Learn about search guardrails",
    blogSlug: "/blog/coding-agent-security",
  },
]

const accentClasses = {
  violet: {
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    borderColor: "border-l-violet-400",
  },
  blue: {
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-l-blue-400",
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
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
            Two Pillars
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Scan before you ship.
            <br />
            Guard at runtime.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Purpose-built security for coding agents and agent search pipelines.
            Scan AI-generated code, guard what agents consume from the web.
          </p>
        </motion.div>

        {/* Service cards - 3 column grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => {
            const colors = accentClasses[service.accentColor as keyof typeof accentClasses]
            const Icon = service.icon

            return (
              <motion.div
                key={service.badge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-gray-100/80 bg-white p-10 transition-all duration-300 hover:shadow-xl lg:p-12"
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${colors.iconBg}`}>
                  <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                </div>

                {/* Badge */}
                <span className={`mb-4 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-sm font-medium ${colors.badgeBg} ${colors.badgeText}`}>
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">
                  {service.description}
                </p>

                {/* Differentiator */}
                <div className={`mt-6 rounded-r-lg border-l-[3px] ${colors.borderColor} bg-gray-50/80 px-4 py-3`}>
                  <p className="text-sm font-medium text-gray-800">{service.differentiator}</p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gray-100/60 flex-grow" />

                {/* Features */}
                <ul className="space-y-4">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + fIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 rounded-full bg-indigo-50 p-1">
                        <Check className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-base text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more link */}
                <Link href={service.blogSlug} className="mt-10 flex items-center gap-2 text-base font-medium text-indigo-600 transition-colors">
                  <span>{service.linkText}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
