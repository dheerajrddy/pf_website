import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  FileCheck,
  FileText,
  Presentation,
  ShieldCheck,
  Target,
} from "lucide-react"

const tracks = [
  {
    icon: Cloud,
    name: "SOC 2 Readiness",
    pitch: "Cloud and policy evidence for the audit path.",
    detail:
      "Automated evidence collection across AWS, Azure, and GCP, Trust Services Criteria gap analysis, policy review, remediation roadmap, and a CPA-ready readiness packet.",
  },
  {
    icon: ClipboardCheck,
    name: "AI Compliance Evidence Package",
    pitch: "Governance artifacts for production AI systems.",
    detail:
      "Model inventory, AI risk register, governance documentation, and customer-facing transparency artifacts mapped to NIST AI RMF, EU AI Act, and ISO/IEC 42001.",
  },
  {
    icon: ShieldCheck,
    name: "AI Red-Team Assessment",
    pitch: "Adversarial findings that become audit evidence.",
    detail:
      "Production agent workflows tested with established open-source tooling and ProofLayer's detection engine, with exploit scenarios mapped to OWASP LLM Top 10 and MITRE ATLAS.",
  },
]

const artifacts = [
  { icon: ClipboardList, label: "Model inventory" },
  { icon: BarChart3, label: "AI risk register" },
  { icon: BookOpen, label: "Governance policies" },
  { icon: FileText, label: "Transparency docs" },
  { icon: Target, label: "Red-team findings" },
  { icon: Presentation, label: "Executive briefing" },
]

const frameworks = [
  {
    icon: ShieldCheck,
    name: "SOC 2",
  },
  {
    icon: FileCheck,
    name: "NIST AI RMF",
  },
  {
    icon: ClipboardCheck,
    name: "EU AI Act",
  },
  {
    icon: BookOpen,
    name: "ISO/IEC 42001",
  },
  {
    icon: Target,
    name: "OWASP LLM Top 10",
  },
  {
    icon: FileCheck,
    name: "MITRE ATLAS",
  },
]

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-24 bg-gray-50/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            Prove
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Every attack becomes
            <br />
            <span className="text-gradient">audit-ready evidence.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Combine red-team findings with cloud and policy evidence. Generate packets for SOC 2, NIST AI RMF, EU AI Act, and ISO/IEC 42001.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {tracks.map((track) => {
            const Icon = track.icon
            return (
              <div
                key={track.name}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="w-fit rounded-xl bg-blue-50 p-2.5">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{track.name}</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">{track.pitch}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{track.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/80">
              One evidence trail
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
              Audit artifacts mapped to the frameworks buyers already request.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Package verified red-team findings with the governance records needed by security teams, boards, and auditors.
            </p>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Evidence artifacts</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {artifacts.map((artifact) => {
                  const Icon = artifact.icon
                  return (
                    <div key={artifact.label} className="flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                      <Icon className="h-4 w-4 shrink-0 text-gray-500" />
                      <span className="text-sm font-medium leading-snug text-gray-700">{artifact.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Mapped frameworks</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {frameworks.map((framework) => {
                  const Icon = framework.icon
                  return (
                    <div key={framework.name} className="flex min-h-11 items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2">
                      <Icon className="h-4 w-4 shrink-0 text-blue-600" />
                      <span className="text-sm font-semibold leading-snug text-gray-800">{framework.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
