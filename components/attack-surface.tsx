"use client"

import { motion } from "framer-motion"
import { MessageSquareWarning, Plug, Bot } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const threats = [
  {
    icon: MessageSquareWarning,
    title: "Prompt Injection",
    badge: "#1 OWASP",
    badgeColor: "bg-red-50 text-red-600 border-red-200",
    stat: "90% RAG injection success rate",
    description:
      "Attackers embed malicious instructions in documents, emails, and tool outputs. When your AI reads them, it follows the attacker's commands — exfiltrating data, modifying responses, or bypassing guardrails.",
  },
  {
    icon: Plug,
    title: "MCP / Tool Poisoning",
    badge: "85% SUCCESS",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    stat: "43% of MCP servers have injection flaws",
    description:
      "MCP servers and tool APIs are the nervous system of AI agents. Poisoned tool responses can hijack agent behavior, redirect actions, and escalate privileges — all without the user's knowledge.",
  },
  {
    icon: Bot,
    title: "AI Agent Exploits",
    badge: "21K EXPOSED",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    stat: "Shadow AI agents running without oversight",
    description:
      "Autonomous AI agents chain tools, make decisions, and execute code. Without security boundaries, a single compromised step cascades into full system takeover — agent hijacking at scale.",
  },
]

export function AttackSurface() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80"
          >
            02 — The Attack Surface
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            AI created a whole new
            <br />
            attack surface.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {threats.map((threat, i) => {
            const Icon = threat.icon
            return (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gray-100 p-2.5">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${threat.badgeColor}`}>
                    {threat.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-gray-900">{threat.title}</h3>
                <p className="mt-1 font-mono text-xs text-gray-500">{threat.stat}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{threat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
