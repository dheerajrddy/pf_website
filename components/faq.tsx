"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const faqs = [
  {
    question: "What does ProofLayer do?",
    answer:
      "Autonomous AI agents that continuously red-team your AI systems — LLMs, RAG pipelines, MCP servers, AI agents. Finds vulnerabilities like prompt injection, tool poisoning, and agent hijacking without manual scripting.",
  },
  {
    question: "How is this different from a traditional pentest?",
    answer:
      "Traditional pentests are manual, periodic, and not designed for AI-specific threats. ProofLayer runs autonomous attack agents 24/7 that evolve their techniques.",
  },
  {
    question: "What AI systems does it cover?",
    answer:
      "Any system using LLMs, RAG pipelines, MCP tools, or autonomous AI agents. Model-agnostic — works with OpenAI, Anthropic, Google, and open-source models.",
  },
  {
    question: "Is this open source?",
    answer:
      "The core scanner is MIT licensed with 1,700+ detection rules. Open-source ensures transparency and community-driven security coverage.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Under 30 seconds. One command, no configuration required.",
  },
  {
    question: "Who built ProofLayer?",
    answer:
      "Former Google engineers (Safe Browsing, Google Cloud) who contributed to Garak and Promptfoo — the frameworks that defined the AI security category.",
  },
]

export function FAQ() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
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
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl"
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 divide-y divide-gray-200"
        >
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-gray-900 transition-colors hover:text-indigo-600">
                {faq.question}
                <span className="ml-4 shrink-0 text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
