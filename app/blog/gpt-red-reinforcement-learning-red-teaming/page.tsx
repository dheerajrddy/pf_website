"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  Target,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"
import { CALENDLY_URL } from "@/lib/links"

const tocItems: TocItem[] = [
  { id: "executive-answer", title: "The Executive Answer", level: 2 },
  { id: "what-is-gpt-red", title: "What GPT-Red Actually Is", level: 2 },
  { id: "why-rl", title: "Why Reinforcement Learning", level: 2 },
  { id: "approaches", title: "Five Red-Teaming Approaches", level: 2 },
  { id: "models-vs-agents", title: "Models vs. Agentic Systems", level: 2 },
  { id: "what-gpt-red-proves", title: "What GPT-Red Proves", level: 2 },
  { id: "limits", title: "What RL Does Not Solve", level: 2 },
  { id: "enterprise-program", title: "The Enterprise Program", level: 2 },
  { id: "questions", title: "Questions for Security Leaders", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 },
  { id: "sources", title: "Primary Sources", level: 2 },
]

const sectionAnimation = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4 },
}

const sources = [
  {
    n: 1,
    title: "GPT-Red: Unlocking Self-Improvement for Robustness",
    author: "OpenAI",
    url: "https://openai.com/index/unlocking-self-improvement-gpt-red/",
  },
  {
    n: 2,
    title: "Advancing red teaming with people and AI",
    author: "OpenAI",
    url: "https://openai.com/index/advancing-red-teaming-with-people-and-ai/",
  },
  {
    n: 3,
    title: "Diverse and Effective Red Teaming with Auto-generated Rewards and Multi-step Reinforcement Learning",
    author: "Beutel et al.",
    url: "https://arxiv.org/abs/2412.18693",
  },
  {
    n: 4,
    title: "Red Teaming Language Models with Language Models",
    author: "Perez et al.",
    url: "https://arxiv.org/abs/2202.03286",
  },
  {
    n: 5,
    title: "Curiosity-driven Red-teaming for Large Language Models",
    author: "Hong et al.",
    url: "https://proceedings.iclr.cc/paper_files/paper/2024/hash/56ed2bd15b66f709cd81cb1aaa0496b9-Abstract-Conference.html",
  },
  {
    n: 6,
    title: "How Vulnerable Are AI Agents to Indirect Prompt Injections?",
    author: "Dziemian et al.",
    url: "https://arxiv.org/abs/2603.15714",
  },
  {
    n: 7,
    title: "AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents",
    author: "Debenedetti et al.",
    url: "https://arxiv.org/abs/2406.13352",
  },
  {
    n: 8,
    title: "AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents",
    author: "Andriushchenko et al.",
    url: "https://arxiv.org/abs/2410.09024",
  },
  {
    n: 9,
    title: "Assessing Automated Prompt Injection Attacks in Agentic Environments",
    author: "Hofer, Debenedetti, and Tramèr",
    url: "https://arxiv.org/abs/2606.10525",
  },
  {
    n: 10,
    title: "AgentDyn: Are Your Agent Security Defenses Deployable in Real-World Dynamic Environments?",
    author: "Li et al.",
    url: "https://arxiv.org/abs/2602.03117",
  },
  {
    n: 11,
    title: "OWASP Top 10 for Agentic Applications 2026",
    author: "OWASP GenAI Security Project",
    url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
  },
]

function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 text-indigo-600">
      <a href={`#source-${n}`} className="hover:underline">[{n}]</a>
    </sup>
  )
}

function SectionHeading({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-6 scroll-mt-24">
      <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {children}
      </h2>
    </div>
  )
}

function Callout({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "orange" }) {
  const colors = tone === "orange"
    ? "border-orange-200 bg-orange-50/70 text-orange-950"
    : "border-blue-200 bg-blue-50/70 text-blue-950"

  return (
    <div className={`my-8 rounded-2xl border p-5 sm:p-6 ${colors}`}>
      <p className="text-base font-medium leading-relaxed sm:text-[17px]">{children}</p>
    </div>
  )
}

const approachRows = [
  {
    name: "Human experts",
    mechanism: "Threat-led exploration and judgment",
    strength: "Novel context, intent, and business impact",
    limit: "Slow, expensive, and hard to repeat after every release",
    fit: "Threat modeling and unknown-unknown discovery",
  },
  {
    name: "Static probes",
    mechanism: "Fixed prompts, payloads, and benchmarks",
    strength: "Fast, deterministic regression testing",
    limit: "Measures known attacks; saturates as defenses learn the set",
    fit: "CI gates and control verification",
  },
  {
    name: "Prompted search",
    mechanism: "An LLM proposes and revises attacks",
    strength: "Black-box, flexible, and inexpensive to start",
    limit: "Quality depends on the base model and search policy",
    fit: "Broad discovery against APIs and agents",
  },
  {
    name: "Gradient attacks",
    mechanism: "Optimize tokens against model internals",
    strength: "Strong optimization signal in white-box settings",
    limit: "Often unrealistic; needs model access; weak transfer is common",
    fit: "Model research and worst-case analysis",
  },
  {
    name: "RL and self-play",
    mechanism: "Reward successful outcomes across repeated interaction",
    strength: "Learns adaptive, multi-step attack policies",
    limit: "Only as honest as the environment, reward, and coverage",
    fit: "Continuous adversarial training and system-level campaigns",
  },
]

const modelAgentRows = [
  ["Target", "A model endpoint", "A model, prompts, tools, memory, identity, and orchestration"],
  ["Typical attack", "Direct jailbreak or harmful-output request", "Indirect injection, tool misuse, memory poisoning, or cross-agent pivot"],
  ["Success signal", "The response violates a policy", "The system changes state, calls a forbidden tool, or exposes data"],
  ["Time horizon", "Usually one turn or a short dialogue", "Multi-step and sometimes cross-session"],
  ["Required evidence", "Prompt, response, and judge result", "Full trace: input, tool calls, state change, asset, and outcome"],
  ["False safety", "The model refuses more", "The agent appears safe because it stops completing legitimate work"],
  ["Blast radius", "Content generated to one interaction", "Production data, credentials, payments, code, and other agents"],
]

export default function GptRedReinforcementLearningPost() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="GPT-Red and the Case for Reinforcement Learning Red Teaming"
        subtitle="Why adaptive attackers are becoming necessary—and why agents still need system-level proof"
        category="Research"
        categoryColor="slate"
        readTime="18 min read"
        date="July 20, 2026"
        author="ProofLayer Research Team"
      />

      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_230px] lg:gap-14">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mb-14"
              >
                <p className="border-l-4 border-blue-600 pl-6 text-xl font-medium leading-relaxed text-slate-700">
                  Static red teaming asks whether yesterday&apos;s attacks still work. Reinforcement learning asks what attack works now, observes the result, and tries again.
                </p>
                <p className="mt-7 text-[17px] leading-relaxed text-slate-700">
                  OpenAI&apos;s GPT-Red makes that distinction concrete. It is an internal attacker trained through self-play reinforcement learning. It iterates against defender models, learns from valid failures, and produces attacks that can be used to harden later models.<Cite n={1} />
                </p>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
                  The release is an important signal for security leaders. Adaptive red teaming is becoming necessary for capable AI. It is not sufficient by itself. A model can be robust in a chat test while an agent still misuses a tool, poisons memory, or changes production state.
                </p>
              </motion.div>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="executive-answer" eyebrow="The executive answer">
                  Reinforcement learning closes the adaptation gap
                </SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    AI systems change faster than a manual test plan. Models update. Prompts change. Tools gain permissions. MCP servers appear. Attackers see every response and adjust.
                  </p>
                  <p>
                    A fixed benchmark cannot do that. It can confirm that a known control still works. It cannot reliably discover the next tactic after the control succeeds.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Static", "Replay known attacks", "Regression"],
                    ["Adaptive", "Learn from each response", "Discovery"],
                    ["Continuous", "Repeat after every change", "Evidence"],
                  ].map(([label, text, result], index) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="font-mono text-xs font-semibold text-blue-600">0{index + 1} {label.toUpperCase()}</div>
                      <div className="mt-3 font-semibold text-slate-950">{text}</div>
                      <div className="mt-1 text-sm text-slate-500">Best for {result.toLowerCase()}</div>
                    </div>
                  ))}
                </div>

                <Callout>
                  The right claim is not “RL replaces red teams.” The right claim is “RL gives red teams an attacker that improves at machine speed.”
                </Callout>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="what-is-gpt-red" eyebrow="OpenAI, July 2026">
                  What GPT-Red actually is
                </SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    GPT-Red is not a ChatGPT feature and it is not a public product. OpenAI describes it as an internal automated safety red-teaming model. The company keeps it separate from deployed models because it is intentionally trained to produce effective attacks.<Cite n={1} />
                  </p>
                  <p>
                    Its training loop contains an attacker and a population of defender models. The attacker receives a reward for causing a valid failure. Defenders receive rewards for resisting while still completing the original task. Stronger defenders force the attacker to find stronger attacks.
                  </p>
                  <p>
                    The environment defines the threat model. It specifies what the attacker controls, such as a file, webpage, email, or tool output. It also defines what success means. That last part matters: red teaming becomes useful only when the reward represents a real security failure.
                  </p>
                </div>

                <div className="my-9 rounded-3xl border border-blue-200 bg-slate-50 p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Self-play security loop</div>
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
                    {[
                      ["Attack", "Try a tactic"],
                      ["Observe", "Score the outcome"],
                      ["Learn", "Update the policy"],
                    ].map(([label, text], index) => (
                      <div key={label} className="contents">
                        <div className={`rounded-2xl border p-5 ${index === 0 ? "border-red-200 bg-red-50" : index === 1 ? "border-orange-200 bg-orange-50" : "border-blue-200 bg-blue-50"}`}>
                          <div className="font-mono text-xs font-semibold text-slate-500">0{index + 1}</div>
                          <div className="mt-2 text-lg font-bold text-slate-950">{label}</div>
                          <div className="mt-1 text-sm text-slate-600">{text}</div>
                        </div>
                        {index < 2 && <ArrowRight className="hidden h-5 w-5 self-center text-slate-400 sm:block" />}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="why-rl" eyebrow="Why reinforcement learning">
                  Four properties that prompting alone does not guarantee
                </SectionHeading>
                <div className="space-y-4">
                  {[
                    {
                      title: "It optimizes for an observed outcome",
                      body: "A prompted attacker can generate plausible attacks. An RL attacker can be trained to prefer attacks that actually cause the defined failure.",
                    },
                    {
                      title: "It learns across attempts",
                      body: "The attacker can use response feedback to change strategy. This matches a real adversary more closely than replaying isolated payloads.",
                    },
                    {
                      title: "It supports long-horizon behavior",
                      body: "Rewards can cover a sequence: plant an instruction, trigger retrieval, induce a tool call, then verify the resulting state change.",
                    },
                    {
                      title: "It creates a defensive flywheel",
                      body: "Successful attacks become training data and regression tests. The defender improves, which raises the difficulty for the next attacker.",
                    },
                  ].map((item, index) => (
                    <div key={item.title} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[42px_1fr]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 font-mono text-xs font-bold text-blue-700">0{index + 1}</div>
                      <div>
                        <h3 className="font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-1 text-[16px] leading-relaxed text-slate-600">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[17px] leading-relaxed text-slate-700">
                  Earlier research established the central tradeoff. Prompted attacks can be diverse but weak. Optimized attacks can be effective but collapse into repeated tactics. Multi-step RL and novelty rewards improve both effectiveness and tactical diversity.<Cite n={3} /><Cite n={4} /><Cite n={5} />
                </p>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="approaches" eyebrow="Comparison">
                  Five approaches solve different parts of the problem
                </SectionHeading>
                <p className="mb-7 text-[17px] leading-relaxed text-slate-700">
                  There is no single best red-team method. The strongest program combines methods and assigns each one a clear job.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-[920px] w-full text-left text-sm">
                    <thead className="bg-slate-100 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-600">
                      <tr>
                        <th className="px-4 py-4">Approach</th>
                        <th className="px-4 py-4">How it works</th>
                        <th className="px-4 py-4">Best strength</th>
                        <th className="px-4 py-4">Main limit</th>
                        <th className="px-4 py-4">Best use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {approachRows.map((row, index) => (
                        <tr key={row.name} className={index === 4 ? "bg-blue-50/60" : "bg-white"}>
                          <td className="px-4 py-4 font-semibold text-slate-950">{row.name}</td>
                          <td className="px-4 py-4 text-slate-600">{row.mechanism}</td>
                          <td className="px-4 py-4 text-slate-600">{row.strength}</td>
                          <td className="px-4 py-4 text-slate-600">{row.limit}</td>
                          <td className="px-4 py-4 text-slate-600">{row.fit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Callout tone="orange">
                  Use static probes to prevent regressions. Use human experts to define threat models. Use adaptive search and RL to discover what fixed tests miss.
                </Callout>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="models-vs-agents" eyebrow="The architectural divide">
                  Red teaming a model is not red teaming an agent
                </SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    A model produces tokens. An agent can change the world. It reads untrusted content, calls tools, retains memory, delegates work, and acts under an identity.
                  </p>
                  <p>
                    That changes both the attack and the proof. A harmful response is not enough. The test must verify whether the agent exposed a secret, executed code, changed a price, sent a message, or poisoned future behavior.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-[0.8fr_1fr_1.25fr] bg-slate-100 px-4 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    <div>Dimension</div>
                    <div>Model</div>
                    <div>Agentic system</div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {modelAgentRows.map(([dimension, model, agent]) => (
                      <div key={dimension} className="grid grid-cols-1 gap-2 bg-white px-4 py-4 text-sm sm:grid-cols-[0.8fr_1fr_1.25fr]">
                        <div className="font-semibold text-slate-950">{dimension}</div>
                        <div className="text-slate-600">{model}</div>
                        <div className="text-slate-700">{agent}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-7 text-[17px] leading-relaxed text-slate-700">
                  AgentDojo evaluates utility and security across realistic tasks, tools, and untrusted data.<Cite n={7} /> AgentHarm requires an agent to retain enough capability after a jailbreak to complete a harmful multi-step task.<Cite n={8} /> Newer work shows that black-box attacks can outperform gradient methods in realistic agent environments, but transfer across models remains uneven.<Cite n={9} />
                </p>

                <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/60 p-6">
                  <div className="flex items-start gap-4">
                    <Target className="mt-0.5 h-6 w-6 shrink-0 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-950">The reward must represent the business failure</h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-orange-900/80">
                        Reward “the judge disliked the response” and the attacker learns model behavior. Reward “the unauthorized transfer completed” and it learns system security.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="what-gpt-red-proves" eyebrow="The GPT-Red evidence">
                  Adaptive attackers can improve both discovery and defense
                </SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["84% vs. 13%", "GPT-Red versus human red-teamers on a replicated held-out indirect prompt-injection arena against GPT-5.1."],
                    ["3 of 3 goals", "A production-like vending agent changed prices, offered an expensive item for $0.50, and canceled another order."],
                    ["10 held-out tasks", "GPT-Red outperformed a prompted GPT-5.5 baseline on Codex CLI data-exfiltration scenarios while using fewer tokens."],
                    ["6× fewer failures", "OpenAI reports GPT-5.6 Sol improved on its hardest direct prompt-injection benchmark versus its best production model four months earlier."],
                  ].map(([value, text], index) => (
                    <div key={value} className={`rounded-2xl border p-5 ${index === 1 ? "border-orange-200 bg-orange-50/60" : "border-blue-200 bg-blue-50/50"}`}>
                      <div className={`text-2xl font-bold tracking-tight ${index === 1 ? "text-orange-700" : "text-blue-700"}`}>{value}</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  All four figures are OpenAI-reported results. The arena was an internal replication. GPT-Red remains internal, and OpenAI has not released its weights or full training stack.<Cite n={1} />
                </p>

                <p className="mt-7 text-[17px] leading-relaxed text-slate-700">
                  The independent arena behind that evaluation also matters. It collected 272,000 attempts from 464 participants across tool-calling, coding, and computer-use settings. Every tested model was vulnerable, and some strategies transferred across models.<Cite n={6} /> This is strong evidence that fixed model benchmarks do not capture the full agentic attack surface.
                </p>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="limits" eyebrow="Necessary, not sufficient">
                  What reinforcement learning does not solve
                </SectionHeading>
                <div className="space-y-4">
                  {[
                    ["Reward validity", "A weak judge rewards convincing text instead of a real breach. Instrument the target and score observable state."],
                    ["Mode collapse", "An attacker can repeat one successful tactic. Add goal diversity, novelty rewards, and coverage constraints."],
                    ["Transfer failure", "An attack learned on one model or harness may not transfer. Re-run against each production configuration."],
                    ["Simulation gap", "A sandbox can omit permissions, latency, middleware, or human approvals. Validate high-confidence findings in a production-like environment."],
                    ["Utility loss", "A defender can look safe by refusing useful tasks. Measure task completion and over-refusal beside attack success."],
                    ["Information hazards", "A strong attacker is dual-use. Restrict access, retain audit logs, and disclose findings responsibly."],
                  ].map(([title, body]) => (
                    <div key={title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                      <p className="text-[16px] leading-relaxed text-slate-600">
                        <strong className="text-slate-950">{title}.</strong> {body}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-[17px] leading-relaxed text-slate-700">
                  Dynamic benchmarks reinforce the same lesson: a defense can appear secure on fixed tasks while failing on changing plans, third-party instructions, or unseen workflows.<Cite n={10} />
                </p>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="enterprise-program" eyebrow="Operating model">
                  Build a portfolio, not a single test
                </SectionHeading>
                <p className="mb-8 text-[17px] leading-relaxed text-slate-700">
                  GPT-Red is a training system inside OpenAI. Enterprises need a deployment system around their own AI. The practical architecture has six layers.
                </p>

                <div className="relative space-y-3 before:absolute before:bottom-6 before:left-[21px] before:top-6 before:w-px before:bg-blue-200">
                  {[
                    ["Threat model", "Name the assets, attacker control, permissions, and forbidden outcomes."],
                    ["Static regression", "Run known prompt injection, tool abuse, memory, and policy tests in CI."],
                    ["Adaptive discovery", "Use black-box search and RL attackers against each deployed system."],
                    ["Outcome verification", "Confirm tool effects, state changes, data exposure, and cross-session persistence."],
                    ["Replayable evidence", "Store the prompt, response, tool trace, affected asset, severity, and owner."],
                    ["Continuous loop", "Re-run after every model, prompt, tool, MCP server, permission, or policy change."],
                  ].map(([title, body], index) => (
                    <div key={title} className="relative grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 font-mono text-xs font-bold text-blue-700">0{index + 1}</div>
                      <div>
                        <h3 className="font-semibold text-slate-950">{title}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Callout>
                  A red-team finding becomes valuable when engineering can replay it, risk can prioritize it, and an auditor can see what control changed.
                </Callout>
                <p className="text-[17px] leading-relaxed text-slate-700">
                  The attack catalog must also cover system risks. OWASP&apos;s Agentic Top 10 includes goal hijacking, tool misuse, identity abuse, memory poisoning, insecure inter-agent communication, cascading failures, and rogue agents.<Cite n={11} />
                </p>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="questions" eyebrow="Buyer checklist">
                  Seven questions for a red-teaming vendor
                </SectionHeading>
                <ol className="space-y-3">
                  {[
                    "What exact outcome counts as a successful attack?",
                    "Does the test validate a real tool effect or only grade model text?",
                    "Can the attacker adapt across attempts and multi-step workflows?",
                    "How do you prevent repeated tactics from inflating coverage?",
                    "Do you measure legitimate task completion beside attack success?",
                    "Can every finding be replayed with its full tool and state trace?",
                    "Which system changes automatically trigger another campaign?",
                  ].map((question, index) => (
                    <li key={question} className="grid grid-cols-[36px_1fr] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="font-mono text-sm font-bold text-blue-700">0{index + 1}</span>
                      <span className="font-medium text-slate-800">{question}</span>
                    </li>
                  ))}
                </ol>
              </motion.section>

              <motion.section {...sectionAnimation} className="mb-16">
                <SectionHeading id="conclusion" eyebrow="Conclusion">
                  The future is an adversarial learning loop
                </SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    GPT-Red is important because it shows that red teaming can become a training primitive. The attacker improves the defender. The stronger defender creates a harder curriculum. Each cycle produces new attacks and stronger controls.
                  </p>
                  <p>
                    For model developers, that loop improves model robustness. For enterprises, the loop must extend through the full agentic system. Code, prompts, tools, identities, memory, MCP servers, and production state all belong inside the test boundary.
                  </p>
                  <p className="font-semibold text-slate-950">
                    Reinforcement learning is becoming necessary because the adversary adapts. System-level evidence remains necessary because the consequence happens outside the model.
                  </p>
                </div>

                <div className="mt-9 rounded-3xl bg-slate-950 p-7 text-white sm:p-8">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-bold">Attack. Verify. Prove. Repeat.</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                        Continuous adversarial evidence is how security leaders keep proof current after every AI release.
                      </p>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">
                        Talk to ProofLayer <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section {...sectionAnimation} id="sources" className="mb-10 scroll-mt-24">
                <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">Research notes</div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Primary sources</h2>
                <ol className="space-y-3 text-sm text-slate-700">
                  {sources.map((source) => (
                    <li key={source.n} id={`source-${source.n}`} className="grid scroll-mt-24 grid-cols-[2.5rem_1fr] gap-2">
                      <span className="font-mono text-slate-500">[{source.n}]</span>
                      <span className="leading-relaxed">
                        {source.author}.{" "}
                        <a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:underline">
                          {source.title}
                        </a>
                      </span>
                    </li>
                  ))}
                </ol>
              </motion.section>

              <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
                <span>Published July 20, 2026.</span>
                <a href="/blog" className="text-indigo-600 hover:underline">&larr; Back to all posts</a>
              </div>
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
