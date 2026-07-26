import { ArrowUpRight } from "lucide-react"

const benchmarkRows = [
  { suite: "Workspace", cases: 560, attackSuccess: 100, utility: 89.46 },
  { suite: "Travel", cases: 140, attackSuccess: 100, utility: 78.57 },
  { suite: "Banking", cases: 144, attackSuccess: 100, utility: 67.36 },
  { suite: "Slack", cases: 105, attackSuccess: 100, utility: 72.38 },
  { suite: "Overall", cases: 949, attackSuccess: 100, utility: 82.61 },
]

function VerticalMetricBar({
  value,
  color,
}: {
  value: number
  color: "orange" | "blue"
}) {
  const colorClass = color === "orange" ? "bg-orange-500" : "bg-blue-600"

  return (
    <div className="flex flex-col items-center">
      <span className="mb-1.5 font-mono text-[10px] font-semibold tabular-nums text-gray-700 sm:text-[11px]">
        {value.toFixed(2)}%
      </span>
      <div className="relative h-32 w-7 overflow-hidden rounded-t-md bg-gray-100 sm:h-36 sm:w-8" aria-hidden="true">
        <div
          style={{ height: `${value}%` }}
          className={`absolute inset-x-0 bottom-0 rounded-t-md ${colorClass}`}
        />
      </div>
    </div>
  )
}

export function AgentDojoBenchmark() {
  return (
    <section id="agentdojo-benchmark" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-blue-600/80">
            AgentDojo benchmark
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Red-team performance
            <br />
            <span className="text-gradient">across real agent workflows.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Attack success and legitimate task utility measured across Workspace, Travel, Banking, and Slack suites.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_16px_45px_-32px_rgba(37,99,235,0.35)]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-200 bg-gray-50/70 px-4 py-3 sm:px-5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-600">Benchmark results</span>
            <div className="ml-auto flex items-center gap-4 text-[11px] font-medium text-gray-600">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-orange-500" /> Attack success rate</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-600" /> Utility</span>
            </div>
          </div>

          <div className="overflow-x-auto px-4 py-5 sm:px-5">
            <div className="grid min-w-[620px] grid-cols-5 gap-3" role="img" aria-label="Vertical bar chart comparing attack success rate and utility across AgentDojo benchmark suites">
              {benchmarkRows.map((row) => (
                <div key={row.suite} className={`rounded-xl px-2 pb-3 pt-2 ${row.suite === "Overall" ? "bg-blue-50/70" : ""}`}>
                  <div className="flex items-end justify-center gap-2.5 border-b border-gray-200 px-1">
                    <VerticalMetricBar value={row.attackSuccess} color="orange" />
                    <VerticalMetricBar value={row.utility} color="blue" />
                  </div>
                  <div className="pt-2 text-center">
                    <h3 className="text-xs font-bold text-gray-950 sm:text-sm">{row.suite}</h3>
                    <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.08em] text-gray-500">{row.cases} cases</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-gray-200 bg-gray-50/60 px-4 py-3 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p><strong className="font-semibold text-gray-900">Utility</strong> measures legitimate task completion while the attack policy runs.</p>
            <a href="https://github.com/ethz-spylab/agentdojo" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-blue-700 hover:text-blue-800">
              About AgentDojo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
