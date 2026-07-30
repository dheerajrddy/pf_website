import { ArrowRight, Github, Package, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { CALENDLY_URL, SCANNER_GITHUB_URL, RULES_GITHUB_URL } from "@/lib/links"

const projects = [
  {
    id: "code-scanner",
    icon: Package,
    name: "Coding Agent Security",
    badge: "Open source · npm · about 8,000 users",
    body: "Run agent-security-scanner-mcp on a developer laptop. Scan code, prompts, packages, MCP servers, and tool configurations without a network call.",
    href: SCANNER_GITHUB_URL,
    pageHref: "/code-scanner",
    cta: "Download Open Source",
  },
  {
    id: "runtime-security",
    icon: ShieldCheck,
    name: "MCP Runtime Security",
    badge: "PyPI · LangChain and LangGraph",
    body: "Place the shared detection engine inline with MCP traffic. Detect prompt injection, tool abuse, and data exfiltration during inference.",
    href: RULES_GITHUB_URL,
    pageHref: "/mcp-security",
    cta: "Download Open Source",
  },
]

export function OpenSourceLadder() {
  return (
    <section id="open-source" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            One platform. Three product surfaces.
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Use the same detection engine
            <br />
            <span className="text-gradient">from development to production.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Scan locally, attack on a schedule, and protect live MCP traffic. Every surface produces findings for one vulnerability report.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr] lg:items-stretch">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                id={project.id}
                key={project.name}
                className={`group relative scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm ${project.pageHref ? "cursor-pointer transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md" : ""}`}
              >
                {project.pageHref && (
                  <Link
                    href={project.pageHref}
                    aria-label={`Explore ${project.name}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  />
                )}
                <div className="w-fit rounded-xl bg-blue-50 p-3"><Icon className="h-6 w-6 text-blue-600" /></div>
                <p className="mt-6 font-mono text-xs font-semibold text-blue-600">{project.badge}</p>
                <h3 className="mt-3 break-words font-mono text-lg font-bold text-gray-900">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.body}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="relative z-20 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600">
                  <Github className="h-4 w-4" /> {project.cta}
                </a>
              </article>
            )
          })}

          <article className="rounded-2xl border border-blue-200 bg-blue-50/60 p-7 shadow-sm">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Scheduled batch service</p>
            <h3 className="mt-3 break-words font-mono text-lg font-bold text-gray-900">Automated Red Teaming</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Run nightly NEXUS campaigns across every deployed multi-agent system. Send verified exploits into the same vulnerability report.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
