"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import { Syringe, Wrench, Bot } from "lucide-react"

const threats = [
  {
    icon: Syringe,
    title: "Prompt Injection",
    badge: "OWASP #1",
    stat: "OWASP #1 AI Risk",
    description: "Attackers manipulate LLM inputs to bypass instructions, exfiltrate data, and take control of your AI system's behavior.",
  },
  {
    icon: Wrench,
    title: "MCP / Tool Poisoning",
    badge: "43% Vulnerable",
    stat: "43% of MCP servers",
    description: "Malicious tool responses hijack agent behavior and execute unintended actions. Most MCP servers have zero protection.",
  },
  {
    icon: Bot,
    title: "AI Agent Exploits",
    badge: "73% At Risk",
    stat: "73% of deployments",
    description: "Autonomous agents are tricked into running harmful code, leaking secrets, or pivoting into your enterprise network.",
  },
]

export function WhySection() {
  return (
    <section id="the-problem" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80"
          >
            The Problem
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Your AI systems have an attack surface
            <br />
            <span className="text-indigo-400">your security team has never seen.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          >
            Every LLM integration, every MCP server, every AI agent is a new attack surface that didn&apos;t exist 12 months ago. Traditional pentests happen quarterly. Attackers move in seconds.
          </motion.p>
        </motion.div>

        {/* 3-column threat cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {threats.map((threat, i) => {
            const Icon = threat.icon
            return (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-rose-200"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-red-50 p-3">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                    {threat.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{threat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{threat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
