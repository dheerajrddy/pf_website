"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Key, Bot, CreditCard, ShieldAlert } from "lucide-react"

const categories = [
  {
    icon: Mail,
    title: "Data Exfiltration",
    count: 6,
    color: "rose",
    examples: ["Email forwarding to external accounts", "Contact list export via API", "File upload to attacker-controlled storage"],
  },
  {
    icon: MessageCircle,
    title: "Messaging Abuse",
    count: 4,
    color: "orange",
    examples: ["Mass messaging from user accounts", "Impersonation via spoofed replies", "Phishing link distribution"],
  },
  {
    icon: Key,
    title: "Credential Theft",
    count: 5,
    color: "amber",
    examples: ["API key extraction from env files", "SSH key exfiltration", "Password harvesting from config"],
  },
  {
    icon: Bot,
    title: "Autonomous Harm",
    count: 4,
    color: "violet",
    examples: ["Unconfirmed calendar/scheduling actions", "Safety guardrail disabling", "Privilege escalation chains"],
  },
  {
    icon: CreditCard,
    title: "Service-Specific Attacks",
    count: 5,
    color: "blue",
    examples: ["Unauthorized payment transfers", "Account settings takeover", "Repository destruction"],
  },
]

const colorClasses = {
  rose: {
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    ring: "ring-rose-100",
    badge: "bg-rose-100 text-rose-700",
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    ring: "ring-orange-100",
    badge: "bg-orange-100 text-orange-700",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    ring: "ring-amber-100",
    badge: "bg-amber-100 text-amber-700",
  },
  violet: {
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    ring: "ring-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    ring: "ring-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export function ThreatCategoryGrid() {
  return (
    <div className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Autonomous Agent Threat Model</h3>
        <p className="text-sm text-gray-500">31 attack patterns across 5 categories</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {categories.map((cat, index) => {
          const Icon = cat.icon
          const colors = colorClasses[cat.color as keyof typeof colorClasses]

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-xl ${colors.bg} p-5 ring-1 ${colors.ring} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`shrink-0 h-10 w-10 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${colors.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm">{cat.title}</h4>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                  {cat.count} patterns
                </span>
              </div>
              <ul className="space-y-1.5">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${colors.iconBg}`} />
                    {ex}
                  </li>
                ))}
              </ul>

              <motion.div
                className={`absolute top-3 right-3 h-2 w-2 rounded-full ${colors.iconBg}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          )
        })}

        {/* Summary card */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-xl bg-gray-900 p-5 ring-1 ring-gray-800 text-white flex flex-col items-center justify-center text-center"
        >
          <ShieldAlert className="h-8 w-8 text-amber-400 mb-3" />
          <div className="text-3xl font-bold mb-1">31</div>
          <div className="text-sm text-gray-400">Total Attack Patterns</div>
          <div className="text-xs text-gray-500 mt-2">Across 5 categories</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          All patterns detectable by scan_agent_prompt
        </div>
      </motion.div>
    </div>
  )
}
