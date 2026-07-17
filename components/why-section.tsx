"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import { Syringe, Wrench, Bot, Brain } from "lucide-react"

const threats = [
  {
    icon: Syringe,
    title: "Prompt Injection",
    badge: "OWASP LLM01",
    description: "Attackers manipulate LLM inputs — directly or through retrieved documents — to bypass system instructions, exfiltrate data, and take control of your AI system's behavior.",
  },
  {
    icon: Wrench,
    title: "MCP / Tool Poisoning",
    badge: "OWASP LLM08",
    description: "Malicious tool responses and poisoned tool descriptions hijack agent behavior. Most MCP deployments ship without any testing against this class at all.",
  },
  {
    icon: Bot,
    title: "Agent Chain Exploits",
    badge: "OWASP LLM06",
    description: "Autonomous agents are coaxed into chaining tools to run harmful code, leak secrets, or pivot into adjacent systems — often through inputs your code would reject.",
  },
  {
    icon: Brain,
    title: "Memory & Context Poisoning",
    badge: "OWASP LLM04",
    description: "The attack surface almost nobody tests: adversaries plant memory that persists across sessions, hijacks future tool calls, and spreads between users. 13 known attack families.",
  },
]

export function WhySection() {
  return (
    <section id="the-problem" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            What your current stack misses
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Your scanners do not know
            <br />
            <span className="text-blue-400">what an agent is.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          >
            Your pentest becomes a static PDF. It starts aging when you ship a new model, tool call, or MCP server. These attack classes stay untested.
          </motion.p>
        </motion.div>

        {/* Threat cards */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {threats.map((threat, i) => {
            const Icon = threat.icon
            return (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-rose-200"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-red-50 p-3">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-red-600">
                    {threat.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{threat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{threat.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Threat categories mapped to the{" "}
          <a
            href="https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            OWASP LLM Top 10
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
