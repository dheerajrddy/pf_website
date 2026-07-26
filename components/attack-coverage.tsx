import { Syringe, Unlock, Database, Wrench, FileSearch, Brain } from "lucide-react"

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
    <section id="attack-coverage" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            Attack
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Test the attack classes
            <br />
            <span className="text-gradient">your scanners miss.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Autonomous campaigns test prompt injection, jailbreaks, data exfiltration, tool abuse, RAG poisoning, and memory injection.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => {
            const Icon = expert.icon
            return (
              <div
                key={expert.name}
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
              </div>
            )
          })}
        </div>

        <p className="mt-12 text-center font-mono text-sm text-gray-500">
          <span className="font-bold text-gray-900">976 verified exploits</span>{" "}
          across{" "}
          <span className="font-bold text-gray-900">6 coordinated experts</span>{" "}
          in one autonomous campaign.
        </p>
      </div>
    </section>
  )
}
