"use client"

import { motion } from "framer-motion"
import { Syringe, Unlock, Database, Wrench, FileSearch, Brain } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const experts = [
  {
    icon: Syringe,
    name: "Prompt Injection",
    description: "Override system instructions through direct and indirect injection — including system-prompt extraction and instruction hijacking across multi-turn conversations.",
    frameworks: ["OWASP LLM01", "MITRE AML.T0051"],
  },
  {
    icon: Unlock,
    name: "Jailbreak",
    description: "Bypass safety guardrails with DAN-style prompts, role-play exploits, and unrestricted-mode triggers tuned to the target model family.",
    frameworks: ["OWASP LLM07"],
  },
  {
    icon: Database,
    name: "Exfiltration",
    description: "Extract protected data via SQL-injection-through-LLM, secret exfiltration, and PII leakage. 289 verified exploits on multi-agent targets.",
    frameworks: ["OWASP LLM06", "MITRE AML.T0024"],
    highlight: "289 verified exploits",
  },
  {
    icon: Wrench,
    name: "Tool Abuse",
    description: "Misuse agent tools: command injection, SSRF, path traversal, metadata extraction, and tool-call hijacking in MCP and LangChain agents.",
    frameworks: ["OWASP LLM08"],
  },
  {
    icon: FileSearch,
    name: "RAG Poisoning",
    description: "Exploit document retrieval through semantic query manipulation, knowledge-base poisoning, and embedding-space attacks on vector stores.",
    frameworks: ["OWASP LLM03"],
  },
  {
    icon: Brain,
    name: "Memory Injection",
    description: "13 attack families including false conversation history, temporal triggers, cross-session propagation, tool-description poisoning, and multi-agent function-call attacks.",
    frameworks: ["OWASP LLM04", "MITRE AML.T0054"],
    highlight: "687 verified exploits · 13 families",
  },
]

export function AttackCoverage() {
  return (
    <section id="attack-coverage" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
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
            Attack Coverage
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Six coordinated experts.
            <br />
            <span className="text-gradient">One autonomous swarm.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          >
            Each expert is a fine-tuned attack model with a specialty. A bandit orchestrator routes traffic to the expert most likely to breach — and keeps learning which attackers work best against your defenses.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, i) => {
            const Icon = expert.icon
            return (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-2.5">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{expert.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {expert.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-[11px] font-medium text-gray-600"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
                {expert.highlight && (
                  <p className="mt-4 font-mono text-xs font-semibold text-blue-600">
                    {expert.highlight}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center font-mono text-sm text-gray-500"
        >
          <span className="font-bold text-gray-900">976 verified exploits</span>{" "}
          across{" "}
          <span className="font-bold text-gray-900">6 coordinated experts</span>{" "}
          in one autonomous campaign.
        </motion.p>
      </div>
    </section>
  )
}
