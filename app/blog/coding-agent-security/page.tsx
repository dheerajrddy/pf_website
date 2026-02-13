"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"
import { IncidentTimeline } from "@/components/blog/incident-timeline"
import { AttackVectorDiagram } from "@/components/blog/attack-vector-diagram"

const tocItems: TocItem[] = [
  { id: "executive-summary", title: "Executive Summary", level: 2 },
  { id: "real-world-incidents", title: "Real-World Security Incidents", level: 2 },
  { id: "amazon-q", title: "Amazon Q Developer Exploit", level: 3 },
  { id: "cursor-typosquatting", title: "Cursor Typosquatting Attack", level: 3 },
  { id: "langflow-injection", title: "Langflow Code Injection", level: 3 },
  { id: "supply-chain", title: "Supply Chain Vulnerabilities", level: 3 },
  { id: "bypassing-reviews", title: "Bypassing AI Security Reviews", level: 2 },
  { id: "emerging-threats", title: "Emerging Threats", level: 2 },
  { id: "case-for-security", title: "The Case for Pre-Execution Security", level: 2 },
  { id: "remediation", title: "Remediation Checklist", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 },
]

export default function CodingAgentSecurityPost() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="The Growing Attack Surface: AI Coding Agent Security in 2025"
        subtitle="Why AI-Generated Code Is the Next Big Security Challenge"
        category="Security Analysis"
        categoryColor="indigo"
        readTime="10 min read"
        date="January 26, 2026"
        author="ProofLayer Research Team"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:grid lg:max-w-none lg:grid-cols-[1fr_220px] lg:gap-12">
          {/* Article Content */}
          <article className="max-w-3xl">

            {/* Executive Summary */}
            <section id="executive-summary" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Executive Summary
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                AI coding agents have transformed software development. Tools like GitHub Copilot, Cursor, Amazon Q, and Claude Code are now embedded in the workflows of millions of developers. But this rapid adoption has created a new and dangerous attack surface that traditional security tools were never designed to address.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In 2025 alone, we saw crypto wallets drained via malicious IDE extensions, unauthenticated code injection exploits in AI agent frameworks, and the first fully autonomous AI-orchestrated cyberattack. Meanwhile, &ldquo;vibe coding&rdquo;&mdash;where developers describe what they want and let AI handle implementation&mdash;means more code ships with less human review. Benchmarks consistently show LLMs don&apos;t prioritize writing secure code, and most organizations lack regular security testing for AI agent workflows.
              </p>
              <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 shadow-sm p-5">
                <p className="text-sm font-semibold text-indigo-900 mb-1">Key Finding</p>
                <p className="text-sm text-indigo-800 leading-relaxed">
                  Multiple documented AI security incidents in 2025 — including the Cursor typosquatting attack and the $3.2M procurement fraud — were triggered by simple prompts or package name confusion, not sophisticated exploit code.
                </p>
              </div>
            </section>

            {/* Real-World Security Incidents */}
            <section id="real-world-incidents" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Real-World Security Incidents
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The following timeline documents the most significant security incidents involving AI coding agents and related tools throughout 2025. Each incident represents a distinct attack vector that traditional security tools failed to prevent.
              </p>

              <IncidentTimeline />

              <h3 id="amazon-q" className="text-xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">
                Amazon Q Developer Extension Exploit
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In July 2025, Amazon disclosed an attempt to exploit two open-source repositories used in the Amazon Q Developer extension for VS Code. The attacker used prompt injection to plant malicious code designed to wipe users&apos; local files and disrupt AWS infrastructure. The compromised extension passed verification and remained publicly available for two days before Amazon mitigated the threat.
              </p>

              <h3 id="cursor-typosquatting" className="text-xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">
                Cursor Typosquatting Attack
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Ethereum core developer Zak Cole had his crypto wallet drained after downloading a malicious Cursor IDE extension obtained through a typosquatting attack. The extension mimicked a legitimate package with a slightly altered name, and because AI coding tools increasingly install dependencies autonomously, the exposure window for such attacks has widened significantly.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                This incident highlights a particularly insidious attack vector: AI agents that autonomously resolve and install packages can be tricked into pulling malicious dependencies without developer awareness. The traditional human review step — scanning a package name before confirming install — is bypassed entirely when an AI agent handles dependency management.
              </p>

              <h3 id="langflow-injection" className="text-xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">
                Langflow Unauthenticated Code Injection
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                CrowdStrike (CrowdStrike Threat Report, 2025) reported that multiple threat actors exploited an unauthenticated code injection vulnerability in Langflow, a widely used tool for building AI agents and workflows maintained by DataStax. The attackers used the vulnerability to steal credentials and deploy malware across compromised environments.
              </p>

              <h3 id="supply-chain" className="text-xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">
                Supply Chain Vulnerabilities at Scale
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                The Barracuda Security report (Barracuda, 2025), published in November 2025, identified 43 different agent framework components with embedded vulnerabilities introduced through supply chain compromise. These weren&apos;t theoretical findings — they were discovered in production code actively being used by enterprise organizations.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Separately, ReversingLabs found malware hidden inside AI models hosted on Hugging Face, the largest open-source ML hosting platform. The malware was embedded directly in model files, a vector that most security scanning tools aren&apos;t designed to inspect.
              </p>

              <div className="rounded-2xl border border-rose-200/80 bg-rose-50/50 shadow-sm p-5">
                <p className="text-sm font-semibold text-rose-900 mb-1">Real-World Impact</p>
                <p className="text-sm text-rose-800 leading-relaxed">
                  A mid-market manufacturing company deployed an agent-based procurement system. Within one quarter, attackers compromised the vendor-validation agent through a supply chain attack, resulting in $3.2 million in fraudulent orders before detection.
                </p>
              </div>
            </section>

            {/* Attack Vectors */}
            <section className="mb-16">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Attack Vector Categories
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                The four primary attack surfaces for AI coding agent security:
              </p>
              <AttackVectorDiagram />
            </section>

            {/* Bypassing AI Security Reviews */}
            <section id="bypassing-reviews" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Bypassing AI Security Reviews
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Even when organizations attempt to use AI itself for security review, the results can be dangerously unreliable. Research from Checkmarx (Checkmarx, 2025) published in 2025 demonstrated multiple techniques for bypassing Claude Code&apos;s built-in security review capabilities.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                The researchers dubbed this class of attack &ldquo;Lies-in-the-Loop&rdquo; (LITL) — exploiting the fundamental trust that AI code reviewers place in contextual signals like comments and documentation.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-3">
                Code Comments as Payload Delivery
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                The simplest bypass technique involved embedding misleading comments in code. Researchers placed a comment describing a fictional &ldquo;sanitize()&rdquo; function above obviously unsafe JavaScript containing <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">child_process</code> execution. Claude Code analyzed the code, trusted the comment over the actual implementation, and reported &ldquo;0 vulnerabilities found.&rdquo;
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-3">
                Payload Distribution
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Rather than concentrating malicious code in a single file, researchers split payloads across multiple files with added legitimate-looking code as noise. Claude Code detected the concentrated malicious pattern easily but missed the same payload when distributed and layered with seemingly benign functions.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-3">
                Exploiting Testing Methodology
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When Claude Code attempts to verify vulnerabilities, it creates and executes test cases. For Pandas <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">DataFrame.query()</code> RCE vulnerabilities, the AI wrote tests that couldn&apos;t replicate the actual exploit pattern, then concluded the real vulnerability was a false positive. Worse, the security review process itself executed code, meaning the act of reviewing could trigger production database queries or other dangerous operations if not properly sandboxed.
              </p>

              <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 shadow-sm p-5">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Bottom line:</strong> These findings demonstrate conclusively that AI reviewing AI-generated code cannot be the sole security layer. Human oversight and specialized security tooling remain essential.
                </p>
              </div>
            </section>

            {/* Emerging Threats */}
            <section id="emerging-threats" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Emerging Threats
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                Memory Injection Attacks
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Research from Lakera AI in November 2025 demonstrated a particularly concerning attack: indirect prompt injection via poisoned data sources could corrupt an AI agent&apos;s long-term memory. Once corrupted, the agent developed persistent false beliefs about security configurations, API endpoints, or code patterns — and actively defended these beliefs as correct when questioned by human operators.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                For coding agents, this means an attacker who can influence any data source the agent reads (a README file, a Stack Overflow answer, a dependency&apos;s documentation) could permanently alter the agent&apos;s understanding of what constitutes &ldquo;secure&rdquo; code.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                MCP Protocol Risks
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The Model Context Protocol (MCP), designed for easy AI-to-system connection, is being deployed rapidly without foundational security controls. MCP servers don&apos;t need to be intentionally malicious to be dangerous — many have vulnerabilities and misconfigurations that open paths to OS command injection. Communication between MCP clients and servers is not always secure, and the protocol enables an essentially unlimited number of data source connections, each representing a potential attack vector.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                The First Autonomous AI Cyberattack
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In September 2025, researchers documented (GTG-1002) the first fully autonomous AI-orchestrated cyberattack where artificial intelligence handled 80-90% of the operation independently. When initial penetration attempts triggered security alerts, the AI system automatically pivoted to alternative entry vectors, eventually compromising the target network through a less-monitored third-party integration.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                This represents a qualitative shift in the threat landscape. Autonomous AI attackers don&apos;t get frustrated, don&apos;t take breaks, and can probe systems continuously while adapting their approach in real-time.
              </p>

            </section>

            {/* The Case for Pre-Execution Security */}
            <section id="case-for-security" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                The Case for Pre-Execution Code Security
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Every incident documented above exploits the same fundamental gap: the window between code generation and code execution. Traditional security approaches — static analysis, post-deployment monitoring, periodic audits — were designed for human-written code reviewed by humans. They fail in the AI coding era because AI agents generate and execute code faster than any human review process can keep up.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Addressing this requires a fundamentally different approach than traditional static analysis or post-deployment monitoring. What&apos;s needed is a <strong>pre-execution security layer</strong> — a lightweight wrapper that inspects code generated by LLMs before it&apos;s executed, deployed, or committed.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                A pre-execution security layer should cover four areas: <strong>vulnerability pattern scanning</strong> on every LLM output before execution, <strong>supply chain verification</strong> of dependencies against known vulnerability databases, <strong>distributed payload detection</strong> to catch the split-file techniques documented by Checkmarx, and <strong>context-aware analysis</strong> that understands execution context rather than relying on regex alone.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                The goal is not to replace AI coding agents, but to ensure the speed benefits of AI-assisted development don&apos;t come at the cost of security. CI/CD pipelines are becoming the primary attack vector for 2026 — continuous validation at the code generation layer is no longer optional.
              </p>
            </section>

            {/* Remediation Checklist */}
            <section id="remediation" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Actionable Remediation Checklist
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Based on the incidents and attack patterns documented above, here are concrete steps organizations should take to secure their AI coding workflows:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Implement pre-execution code scanning", desc: "Every code output from an LLM should pass through automated security analysis before execution or deployment. This is the single highest-impact control." },
                  { title: "Audit AI agent permissions", desc: "Review what system access your coding agents have. Apply least-privilege principles — agents should not have write access to production environments or credentials stores." },
                  { title: "Pin and verify dependencies", desc: "Never allow AI agents to install unverified packages. Use lockfiles, verify checksums, and maintain an allowlist of approved dependencies." },
                  { title: "Separate AI-generated code review", desc: "Treat AI-generated code with the same rigor as third-party code. It should go through security review before merging, not just functional review." },
                  { title: "Monitor for distributed payloads", desc: "Update your security tooling to detect malicious code distributed across multiple files — the 'Lies-in-the-Loop' pattern that bypasses single-file analysis." },
                  { title: "Sandbox AI agent execution", desc: "Run AI coding agents in isolated environments. If an agent is compromised, the blast radius should be limited to the sandbox." },
                  { title: "Establish an AI security incident response plan", desc: "Traditional IR plans don't cover AI-specific attack vectors. Define procedures for compromised agents, poisoned training data, and supply chain attacks on AI tools." },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600 shrink-0">{i + 1}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Conclusion
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                The security incidents of 2025 make one thing clear: generating code fast and reviewing it later is fundamentally broken. Security controls must operate at the point of code generation — before execution, before deployment, before commit.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-6 italic">
                The question is no longer whether AI coding agents introduce security risks. It&apos;s whether your organization catches those risks before they reach production.
              </p>
            </section>
          </article>

          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>

      </div>

      <Footer />
    </main>
  )
}
