"use client"

import { motion } from "framer-motion"
import { Cloud, Network, Plug, Workflow, Library, Microscope } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const targets = [
  {
    icon: Cloud,
    title: "LLM APIs",
    detail: "OpenAI, Anthropic, Azure OpenAI, self-hosted Qwen / Llama / Mistral.",
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestrators",
    detail: "7-agent Opus-style systems, LangGraph, custom orchestration with tool-using agents.",
  },
  {
    icon: Plug,
    title: "MCP Servers",
    detail: "Native adapter for Model Context Protocol servers — tool discovery, schema fuzzing, poisoning.",
  },
  {
    icon: Workflow,
    title: "ReAct / LangChain Agents",
    detail: "LangChain agents with vector-store memory. Tool-call interception and prompt-context attacks.",
  },
  {
    icon: Library,
    title: "RAG Pipelines",
    detail: "ChromaDB and general vector stores — retrieval poisoning, query manipulation, context injection.",
  },
  {
    icon: Microscope,
    title: "Benchmark Targets",
    detail: "AgentDojo and custom red-team targets — for validating attack transferability across architectures.",
  },
]

export function TargetCoverage() {
  return (
    <section id="target-coverage" className="scroll-mt-24 bg-gray-50/40 bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            Target Coverage
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            If you deployed it,
            <br />
            <span className="text-gradient">we can red-team it.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            Point the swarm at an endpoint, a multi-agent system, or an MCP server. Same campaigns, same reports — regardless of what&apos;s behind the adapter.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {targets.map((target, i) => {
            const Icon = target.icon
            return (
              <motion.div
                key={target.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-xl bg-sky-50 p-2.5 w-fit">
                  <Icon className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{target.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{target.detail}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-gray-200 bg-white p-8"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/80">
            Portable attacks
          </p>
          <p className="mt-3 text-base text-gray-700">
            Exploits built against one architecture transfer to others — no rewriting, no re-tuning.
            <span className="text-gray-500"> Build an attack once, port it anywhere.</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700">
              Multi-agent orchestrators
            </span>
            <span className="text-gray-300">↔</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700">
              LangChain agents
            </span>
            <span className="text-gray-300">↔</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-xs font-medium text-gray-700">
              Benchmark targets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
