"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Search, ShieldCheck, Target, Workflow } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "results", title: "Headline Results", level: 2 },
  { id: "approach", title: "High-Level Approach", level: 2 },
  { id: "evaluation", title: "How We Evaluated", level: 2 },
  { id: "lessons", title: "What We Learned", level: 2 },
  { id: "implications", title: "What This Means for Security Teams", level: 2 },
  { id: "responsible-disclosure", title: "Responsible Disclosure", level: 2 },
  { id: "references", title: "References", level: 2 },
]

const sectionAnimation = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4 },
}

const results = [
  {
    value: "40%+",
    label: "Verified attack success",
    detail: "On a held-out multi-agent target with layered defenses enabled.",
  },
  {
    value: "70%+",
    label: "Cross-target success",
    detail: "When high-level attack strategies were evaluated on a separate agent framework.",
  },
  {
    value: "3.5×",
    label: "Lift over static templates",
    detail: "Adaptive testing found materially more verified breaches than a fixed prompt library.",
  },
]

const approach = [
  {
    icon: Target,
    title: "Specialize by attack surface",
    body: "Different capabilities focus on memory, retrieval, tool use, prompt boundaries, and multi-agent handoffs.",
  },
  {
    icon: Workflow,
    title: "Coordinate the campaign",
    body: "The platform allocates effort to promising attack paths as evidence accumulates during an authorized assessment.",
  },
  {
    icon: Search,
    title: "Verify observable outcomes",
    body: "A finding counts only when the system records a concrete security impact in the response, tool trace, memory state, or audit trail.",
  },
  {
    icon: ShieldCheck,
    title: "Improve from prior runs",
    body: "Successful attacks and informative failures strengthen future campaigns without relying on a static prompt catalog.",
  },
]

const references: Array<{ n: number; text: React.ReactNode }> = [
  { n: 1, text: <>Anthropic. <em>Challenges in Red Teaming AI Systems.</em> 2024.</> },
  { n: 2, text: <>L. Ahmad et al. <em>OpenAI&apos;s Approach to External Red Teaming for AI Models and Systems.</em> OpenAI, 2024.</> },
  { n: 3, text: <>M. Mazeika et al. <em>HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal.</em> 2024.</> },
  { n: 4, text: <>E. Debenedetti et al. <em>AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents.</em> 2024.</> },
  { n: 5, text: <>M. Andriushchenko et al. <em>AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents.</em> 2024.</> },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{children}</div>
}

function SectionHeading({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 scroll-mt-24" id={id}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{children}</h2>
    </div>
  )
}

function Cite({ n }: { n: number }) {
  return (
    <sup className="text-indigo-600">
      <a href={`#ref-${n}`} className="hover:underline">[{n}]</a>
    </sup>
  )
}

export default function RedteamSwarmPost() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="Adaptive AI Red Teaming: High-Level Results from Agentic Systems"
        subtitle="What we learned building continuous adversarial testing for multi-agent applications"
        category="Research"
        categoryColor="slate"
        readTime="8 min read"
        date="April 14, 2026"
        author="ProofLayer Research Team"
      />

      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            <div className="max-w-3xl">
              <motion.div
                {...sectionAnimation}
                className="mb-10 -mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-slate-200 py-3 font-mono text-xs text-slate-500"
              >
                <span>Research summary</span>
                <span className="text-slate-300">/</span>
                <span>Authorized security testing</span>
                <span className="text-slate-300">/</span>
                <span>ProofLayer Research</span>
              </motion.div>

              <motion.section {...sectionAnimation} id="overview" className="mb-14 scroll-mt-24">
                <SectionLabel>Overview</SectionLabel>
                <div className="border-l-4 border-blue-200 pl-6 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    AI agents combine models with tools, retrieval, memory, and other agents. That creates security failures a model-only test cannot observe. A prompt may look harmless while the resulting workflow invokes the wrong tool, carries poisoned context into a later session, or exposes protected data.
                  </p>
                  <p className="mt-4">
                    We built an adaptive red-teaming system to test those end-to-end outcomes continuously. This article shares the evaluation design, headline results, and defensive lessons. It intentionally omits exploit strings, model and training details, campaign-selection logic, scoring formulas, and implementation parameters.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="results" label="Results">Headline results</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-3">
                  {results.map((result) => (
                    <div key={result.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-3xl font-bold tracking-tight text-slate-950 tabular-nums">{result.value}</div>
                      <h3 className="mt-2 text-sm font-semibold text-slate-900">{result.label}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{result.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  Results are rounded to emphasize the directional finding, not a single benchmark point. A breach was counted only when the target produced observable, replayable evidence of impact.
                </p>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="approach" label="Approach">How the system works</SectionHeading>
                <p className="mb-6 text-[17px] leading-relaxed text-slate-700">
                  Static scanners and fixed prompt libraries are useful regression tools. They are less effective when an agent changes plans, chains tools, stores memory, or retrieves attacker-controlled content. Our approach uses multiple specialized attack capabilities inside one coordinated campaign.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {approach.map((step) => {
                    const Icon = step.icon
                    return (
                      <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                        <div className="w-fit rounded-xl bg-blue-50 p-2.5"><Icon className="h-5 w-5 text-blue-600" /></div>
                        <h3 className="mt-4 font-semibold text-slate-950">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-sm leading-relaxed text-blue-950">
                  At a product level, the loop is simple: <strong>attack the complete workflow, detect a real security outcome, preserve the replay trace, and use the result to improve the next campaign.</strong>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="evaluation" label="Evaluation">How we evaluated the approach</SectionHeading>
                <div className="space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    The evaluation covered authorized multi-agent targets with tool use, retrieval, and persistent memory. We separated development scenarios from held-out tests and evaluated whether successful strategies transferred to a different agent implementation.
                  </p>
                  <p>
                    We measured three things: verified attack success, cross-target transfer, and legitimate task utility. This matters because an attacker that only works on its training target is brittle, while a defense that blocks every useful action is not operationally acceptable. AgentDojo and AgentHarm make the same broader point: agent security needs both security and capability measurements.<Cite n={4} /><Cite n={5} />
                  </p>
                  <p>
                    Findings required direct evidence such as an unauthorized tool action, protected-data exposure, poisoned state influencing a later action, or another policy-breaking outcome recorded in the system trace. Model-generated judgments alone did not count as proof.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="lessons" label="Findings">What we learned</SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    <strong className="text-slate-950">Adaptive testing materially outperformed fixed templates.</strong> Agent defenses change the shape of the attack surface. A system that learns from outcomes can redirect effort when an obvious path is blocked.
                  </p>
                  <p>
                    <strong className="text-slate-950">Specialization improved coverage.</strong> Memory, retrieval, tool use, and multi-agent control flow fail in different ways. Treating every surface as generic prompt injection left meaningful gaps.
                  </p>
                  <p>
                    <strong className="text-slate-950">Transferability is a critical test.</strong> High-level attack strategies carried across agent implementations even when tool names, prompts, and application code changed. This suggests teams should test behaviors and outcomes, not only known strings.
                  </p>
                  <p>
                    <strong className="text-slate-950">Input filtering was not enough.</strong> The most important signals often appeared after retrieval or tool execution. Output inspection, authorization boundaries, memory isolation, and complete audit traces were necessary to confirm and contain impact.
                  </p>
                  <p>
                    <strong className="text-slate-950">Replayable evidence changed remediation.</strong> Engineers could reproduce the exact sequence, identify the affected component, and verify a fix without debating whether a model response merely looked suspicious.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="implications" label="For defenders">What this means for security teams</SectionHeading>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <ul className="space-y-4 text-sm leading-relaxed text-slate-700">
                    {[
                      "Test the complete agent workflow, including memory, retrieval, tools, and inter-agent handoffs.",
                      "Run adaptive campaigns after changes to models, prompts, tools, permissions, or MCP servers.",
                      "Require observable proof and replay traces before a suspected issue enters the vulnerability queue.",
                      "Measure legitimate task utility beside attack success to catch over-blocking defenses.",
                      "Map verified findings to OWASP LLM Top 10, MITRE ATLAS, and the controls your auditors already request.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-14">
                <SectionHeading id="responsible-disclosure" label="Safety">Responsible disclosure</SectionHeading>
                <div className="space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    All testing described here was performed on systems we owned or were authorized to assess. Validated issues were disclosed to the responsible engineering teams with replay evidence and remediation context.
                  </p>
                  <p>
                    We are publishing the security conclusions and evaluation principles, not operational attack material. Exploit payloads, learned attack artifacts, target-specific traces, system prompts, datasets, model configurations, and internal scoring logic remain restricted.
                  </p>
                  <p>
                    Coordinated-disclosure contact: <a className="font-mono text-indigo-600 hover:underline" href="mailto:security@sinewave.ai">security@sinewave.ai</a>.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-10 scroll-mt-24" id="references">
                <SectionLabel>References</SectionLabel>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">References</h2>
                <ol className="space-y-3 text-sm text-slate-700">
                  {references.map((reference) => (
                    <li key={reference.n} id={`ref-${reference.n}`} className="grid scroll-mt-24 grid-cols-[2.5rem_1fr] gap-2">
                      <span className="font-mono text-slate-500">[{reference.n}]</span>
                      <span className="leading-relaxed">{reference.text}</span>
                    </li>
                  ))}
                </ol>
              </motion.section>

              <motion.div {...sectionAnimation} className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
                <span>ProofLayer Research</span>
                <a href="/blog" className="text-indigo-600 hover:underline">&larr; Back to all posts</a>
              </motion.div>
            </div>

            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
