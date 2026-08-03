import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { AlertTriangle, ArrowUpRight, CheckCircle2, FlaskConical, Gauge, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"

const title = "AgentDojo Attacks, 100% Success: Why You Need to Red-Team Your Agents"
const description = "ProofLayer reached 100% attack success across 949 AgentDojo cases. Learn what the benchmark reveals, then book a red-team assessment for your deployed agents."
const canonicalUrl = "https://www.proof-layer.com/blog/agentdojo-benchmark-results"

export const metadata: Metadata = {
  title: `${title} | ProofLayer`,
  description,
  keywords: [
    "AgentDojo benchmark",
    "AI agent red teaming",
    "agent security benchmark",
    "prompt injection testing",
    "AI red teaming benchmark",
    "LLM agent security",
  ],
  alternates: { canonical: "/blog/agentdojo-benchmark-results" },
  openGraph: {
    title,
    description,
    url: "/blog/agentdojo-benchmark-results",
    type: "article",
    publishedTime: "2026-08-03T00:00:00+05:30",
    authors: ["ProofLayer Research Team"],
    images: [{ url: "/prooflayer-og.png", width: 1200, height: 630, alt: "ProofLayer AgentDojo benchmark results" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/prooflayer-og.png"],
  },
}

const tocItems: TocItem[] = [
  { id: "result", title: "The headline result", level: 2 },
  { id: "agentdojo", title: "Why AgentDojo", level: 2 },
  { id: "methodology", title: "Methodology", level: 2 },
  { id: "suite-results", title: "Suite results", level: 2 },
  { id: "comparison", title: "Template vs. adapter", level: 2 },
  { id: "interpretation", title: "What the results mean", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
  { id: "next", title: "Test your agents", level: 2 },
  { id: "references", title: "References", level: 2 },
]

const suiteResults = [
  { suite: "Workspace", cases: 560, attackSuccess: 100, utility: 89.46 },
  { suite: "Travel", cases: 140, attackSuccess: 100, utility: 78.57 },
  { suite: "Banking", cases: 144, attackSuccess: 100, utility: 67.36 },
  { suite: "Slack", cases: 105, attackSuccess: 100, utility: 72.38 },
  { suite: "Overall", cases: 949, attackSuccess: 100, utility: 82.61 },
]

const comparisonRows = [
  { policy: "Template policy", cases: 949, attackSuccess: "99.58%", utility: "82.40%", security: "0.42%" },
  { policy: "Adapter policy", cases: 949, attackSuccess: "100.00%", utility: "82.61%", security: "0.00%" },
  { policy: "Change", cases: null, attackSuccess: "+0.42 pp", utility: "+0.21 pp", security: "−0.42 pp" },
]

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  mainEntityOfPage: canonicalUrl,
  author: { "@type": "Organization", name: "ProofLayer Research Team" },
  publisher: { "@id": "https://www.proof-layer.com/#organization" },
  image: "https://www.proof-layer.com/prooflayer-og.png",
  citation: [
    "https://arxiv.org/abs/2406.13352",
    "https://github.com/ethz-spylab/agentdojo",
    "https://agentdojo.spylab.ai/",
  ],
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{children}</div>
}

function SectionHeading({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="mb-6 scroll-mt-24" id={id}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{children}</h2>
    </div>
  )
}

function MetricBar({ value, color }: { value: number; color: "orange" | "blue" }) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 font-mono text-[10px] font-semibold tabular-nums text-slate-700 sm:text-[11px]">
        {value.toFixed(2)}%
      </span>
      <div className="relative h-32 w-8 overflow-hidden rounded-t-md bg-slate-100" aria-hidden="true">
        <div
          className={`absolute inset-x-0 bottom-0 rounded-t-md ${color === "orange" ? "bg-orange-500" : "bg-blue-600"}`}
          style={{ height: `${value}%` }}
        />
      </div>
    </div>
  )
}

function ResultsChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_18px_45px_-34px_rgba(37,99,235,0.4)]">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 sm:px-5">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">AgentDojo v1.2.2</span>
        <div className="ml-auto flex items-center gap-4 text-[11px] font-medium text-slate-600">
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-orange-500" /> Attack success</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-600" /> Utility</span>
        </div>
      </div>
      <div className="overflow-x-auto px-4 py-5 sm:px-5">
        <div className="grid min-w-[620px] grid-cols-5 gap-3" role="img" aria-label="Attack success and utility across five AgentDojo result groups">
          {suiteResults.map((row) => (
            <div key={row.suite} className={`rounded-xl px-2 pb-3 pt-2 ${row.suite === "Overall" ? "bg-blue-50/70" : ""}`}>
              <div className="flex items-end justify-center gap-3 border-b border-slate-200 px-1">
                <MetricBar value={row.attackSuccess} color="orange" />
                <MetricBar value={row.utility} color="blue" />
              </div>
              <div className="pt-2 text-center">
                <h3 className="text-xs font-bold text-slate-950 sm:text-sm">{row.suite}</h3>
                <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.08em] text-slate-500">{row.cases} cases</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50/60 px-4 py-3 text-xs leading-relaxed text-slate-600 sm:px-5">
        Utility is the share of attacked runs where the original user task still succeeded.
      </div>
    </div>
  )
}

export default function AgentDojoBenchmarkPost() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <BlogHeader
        title={title}
        subtitle="The benchmark result shows why deployed agents need adversarial testing before attackers find the gap"
        category="Research"
        categoryColor="slate"
        readTime="9 min read"
        date="August 3, 2026"
        author="ProofLayer Research Team"
      />

      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            <div className="max-w-3xl">
              <div className="mb-10 -mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-slate-200 py-3 font-mono text-xs text-slate-500">
                <span>AgentDojo v1.2.2</span>
                <span className="text-slate-300">/</span>
                <span>GPT-5.2</span>
                <span className="text-slate-300">/</span>
                <span>949 attack cases</span>
                <span className="text-slate-300">/</span>
                <span>July 24, 2026 run</span>
              </div>

              <section className="mb-14 scroll-mt-24" id="result">
                <SectionLabel>Result</SectionLabel>
                <div className="border-l-4 border-blue-200 pl-6 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    ProofLayer&apos;s specialized attack policy met the attack objective in all 949 exported AgentDojo cases. The target agent still completed its original user task in 82.61% of attacked runs.
                  </p>
                  <p className="mt-4">
                    That combination matters. An attack that merely crashes an agent can produce a high failure count without demonstrating control. Here, the attack objective succeeded while useful agent behavior remained largely intact.
                  </p>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {[
                    ["949 / 949", "Successful attack cases"],
                    ["82.61%", "Legitimate task utility"],
                    ["100.00%", "Attack success rate"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-3xl font-bold tracking-tight text-slate-950 tabular-nums">{value}</div>
                      <div className="mt-2 text-sm font-semibold text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
                  <div>
                    <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">Your agents are the real test</div>
                    <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">Do you know what your agents will do under attack?</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                      ProofLayer tests your agent workflows, tools, and MCP servers. You receive verified findings with replayable attack traces.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/divyachitimalla/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 sm:mt-0"
                  >
                    Get a red-team assessment <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="agentdojo" label="Benchmark">Why AgentDojo</SectionHeading>
                <div className="space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    Agent security is not the same as chatbot safety. Agents read untrusted data, call tools, and change external state. A successful indirect prompt injection can therefore become an email, a bank transfer, a booking, or an unauthorized workspace action.
                  </p>
                  <p>
                    AgentDojo was created by researchers at ETH Zurich to evaluate these end-to-end failures. The original NeurIPS 2024 release introduced 97 realistic tasks and 629 security test cases. It treats the benchmark as an extensible environment for agents, attacks, and defenses—not a frozen prompt list.
                  </p>
                  <p>
                    Our selected v1.2.2 configuration exported 949 attack cases across Workspace, Travel, Banking, and Slack. Those domains force the target to reason over tool output while preserving the user&apos;s intended task.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="methodology" label="Methodology">How we ran the evaluation</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: FlaskConical, title: "Controlled target", body: "AgentDojo v1.2.2 with GPT-5.2 as the target model and no defense configured." },
                    { icon: ShieldCheck, title: "Official scoring", body: "Utility and security came from AgentDojo's task evaluators, not a model judging its own output." },
                    { icon: Gauge, title: "Complete case set", body: "949 exported attack cases plus 35 baseline logs produced 984 official logs." },
                    { icon: CheckCircle2, title: "Clean execution", body: "All suites completed with zero official errors and zero malformed case logs." },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                        <div className="w-fit rounded-xl bg-blue-50 p-2.5"><Icon className="h-5 w-5 text-blue-600" /></div>
                        <h3 className="mt-4 font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 text-sm leading-relaxed text-orange-950">
                  <strong>Metric definitions:</strong> attack success is reported as one minus AgentDojo&apos;s security score. Utility is the fraction of attacked cases where the original user task still passed.
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="suite-results" label="Results">Performance by suite</SectionHeading>
                <ResultsChart />
                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    Attack success was uniform: 100% in every suite. Utility was not. Workspace retained 89.46% utility, while Banking reached 67.36%. Travel and Slack landed between them at 78.57% and 72.38%.
                  </p>
                  <p>
                    The spread is operationally useful. It shows where an attack policy can preserve normal task completion and where the target model struggles with the underlying workflow. Aggregate scores alone hide that distinction.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="comparison" label="Comparison">Template policy vs. specialized adapter</SectionHeading>
                <p className="mb-6 text-[17px] leading-relaxed text-slate-700">
                  We ran the same 949 cases with a strong template-based policy and a specialized adapter-driven policy. Both were effective. The adapter closed the four cases the template policy did not, while keeping overall utility effectively flat.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                    <thead className="bg-slate-50 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-600">
                      <tr>
                        <th className="px-4 py-3">Attack policy</th>
                        <th className="px-4 py-3">Cases</th>
                        <th className="px-4 py-3">Attack success</th>
                        <th className="px-4 py-3">Utility</th>
                        <th className="px-4 py-3">Security</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.policy} className={`border-t border-slate-200 ${row.policy === "Adapter policy" ? "bg-blue-50/50" : "bg-white"}`}>
                          <th className="px-4 py-3 font-semibold text-slate-950">{row.policy}</th>
                          <td className="px-4 py-3 tabular-nums text-slate-600">{row.cases ?? "—"}</td>
                          <td className="px-4 py-3 font-semibold tabular-nums text-slate-900">{row.attackSuccess}</td>
                          <td className="px-4 py-3 tabular-nums text-slate-700">{row.utility}</td>
                          <td className="px-4 py-3 tabular-nums text-slate-700">{row.security}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  The largest utility gains appeared in Travel (+7.14 percentage points) and Banking (+4.17 points). Workspace declined by 2.33 points and Slack by 0.95 points. These differences are why we report every suite instead of only the overall average.
                </p>
              </section>

              <section className="mb-14">
                <SectionHeading id="interpretation" label="Interpretation">What the results mean for security teams</SectionHeading>
                <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    <strong className="text-slate-950">A strong static library can still leave a meaningful tail.</strong> The template policy already reached 99.58% attack success. Specialization mattered in the last four cases, including the remaining Banking and Slack gaps.
                  </p>
                  <p>
                    <strong className="text-slate-950">Utility belongs beside attack success.</strong> Security testing should not get credit for simply disabling the agent. Measuring the original task under attack exposes whether the system remains useful while the adversarial objective succeeds.
                  </p>
                  <p>
                    <strong className="text-slate-950">Agent behavior must be evaluated end to end.</strong> The relevant outcome is not whether a prompt looks malicious. It is whether untrusted data changes a tool call, state transition, or external action.
                  </p>
                  <p>
                    <strong className="text-slate-950">Suite-level variance should guide remediation.</strong> Banking&apos;s lower utility suggests a different engineering problem than Workspace&apos;s higher utility, even though attack success was identical.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="limitations" label="Boundaries">What this benchmark does not prove</SectionHeading>
                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div className="space-y-3 text-sm leading-relaxed text-amber-950">
                      <p><strong>It does not mean every production agent is universally vulnerable.</strong> This was one target model, one AgentDojo version, and a controlled configuration with no defense enabled.</p>
                      <p>Each policy was evaluated in one completed run. We are not reporting repeated-seed confidence intervals. AgentDojo&apos;s simulated workflows also cannot reproduce every production permission boundary, tool, memory system, or monitoring control.</p>
                      <p>The specialized adapter was built for adversarial testing. These results should be read as attack-policy performance on this benchmark—not as a general model capability score.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <SectionHeading id="next" label="Your assessment">Benchmarks are the baseline. Your agents are the real test.</SectionHeading>
                <div className="space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>
                    The next evaluation layer is defensive: rerun the same attack policy against prompt filters, tool authorization, data-flow controls, and runtime rules. Then repeat across models and real application traces.
                  </p>
                  <p>
                    Benchmarks provide a controlled comparison. Production assurance requires the same loop after every meaningful change to the model, system prompt, tool set, MCP server, permission boundary, or memory layer.
                  </p>
                  <p className="font-semibold text-slate-950">
                    A ProofLayer red-team assessment shows which attacks succeed against your deployed system and gives your team the traces to fix them.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://calendly.com/divyachitimalla/intro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
                    Book your red-team assessment <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-red-teaming" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-blue-300 hover:text-blue-700">
                    See how ProofLayer tests agents <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>

              <section className="mb-10 scroll-mt-24" id="references">
                <SectionLabel>References</SectionLabel>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Sources and artifacts</h2>
                <ol className="space-y-4 text-sm leading-relaxed text-slate-700">
                  <li className="grid grid-cols-[2.5rem_1fr] gap-2"><span className="font-mono text-slate-500">[1]</span><span>E. Debenedetti et al. <a className="font-semibold text-blue-700 hover:underline" href="https://arxiv.org/abs/2406.13352" target="_blank" rel="noopener noreferrer">AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents</a>. NeurIPS 2024.</span></li>
                  <li className="grid grid-cols-[2.5rem_1fr] gap-2"><span className="font-mono text-slate-500">[2]</span><span><a className="font-semibold text-blue-700 hover:underline" href="https://agentdojo.spylab.ai/" target="_blank" rel="noopener noreferrer">AgentDojo documentation</a>, including benchmark execution and pipeline concepts.</span></li>
                  <li className="grid grid-cols-[2.5rem_1fr] gap-2"><span className="font-mono text-slate-500">[3]</span><span><a className="font-semibold text-blue-700 hover:underline" href="https://github.com/ethz-spylab/agentdojo" target="_blank" rel="noopener noreferrer">AgentDojo source repository</a>.</span></li>
                  <li className="grid grid-cols-[2.5rem_1fr] gap-2"><span className="font-mono text-slate-500">[4]</span><span>ProofLayer AgentDojo v1.2.2 benchmark artifacts, completed July 24, 2026: 949 attack cases, 984 official logs, and zero execution errors.</span></li>
                </ol>
              </section>

              <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
                <span>ProofLayer Research</span>
                <Link href="/blog" className="text-indigo-600 hover:underline">&larr; Back to all posts</Link>
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
