"use client"

import { motion } from "framer-motion"
import { ShieldAlert, Database, AlertTriangle, Mic } from "lucide-react"

const threats = [
  {
    icon: ShieldAlert,
    title: "Prompt Injection",
    description:
      "Jailbreak attacks bypass agent safety guardrails. We detect and block adversarial prompts before execution.",
    color: "indigo",
  },
  {
    icon: Database,
    title: "Data Exfiltration",
    description:
      "RAG poisoning can leak sensitive documents to attackers. We monitor retrieval patterns and block unauthorized access.",
    color: "violet",
  },
  {
    icon: AlertTriangle,
    title: "Hallucination Risk",
    description:
      "False information creates legal liability. We validate agent outputs against ground truth and flag inconsistencies.",
    color: "orange",
  },
  {
    icon: Mic,
    title: "Voice Deepfakes",
    description:
      "Synthetic voices bypass biometric verification. We analyze audio fingerprints to detect AI-generated speech.",
    color: "blue",
  },
]

const colorClasses = {
  indigo: {
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    ring: "ring-indigo-100",
  },
  violet: {
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    ring: "ring-violet-100",
  },
  orange: {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    ring: "ring-orange-100",
  },
  blue: {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    ring: "ring-blue-100",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ProblemGrid() {
  return (
    <section id="product" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-indigo absolute top-0 right-1/4 h-[300px] w-[300px]" />
        <div className="blob blob-purple absolute bottom-0 left-1/4 h-[250px] w-[250px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-600 mb-4">
            The Threat Landscape
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Every AI agent is a{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              security risk.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            AI agents face unique vulnerabilities that traditional security tools can't catch. Test before attackers exploit.
          </p>
        </motion.div>

        {/* Threat cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {threats.map((threat, index) => {
            const Icon = threat.icon
            const colors = colorClasses[threat.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className={`h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ${colors.ring} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg}`}>
                    <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {threat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
