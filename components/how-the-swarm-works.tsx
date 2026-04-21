"use client"

import { motion } from "framer-motion"
import { Compass, Sparkles, GitBranch, Shield } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const pillars = [
  {
    icon: Compass,
    eyebrow: "Multi-phase campaigns",
    title: "Every run plays out a full attack.",
    body: "Recon, initial breach, escalation, exploitation, persistence — the same shape as a real adversary. Each phase runs concurrent attack batches on a time budget you set.",
  },
  {
    icon: Sparkles,
    eyebrow: "Adaptive expert routing",
    title: "Six attackers compete in real time.",
    body: "Each expert has a specialty. The swarm learns which ones are landing against your target and routes more traffic to them as the campaign runs.",
  },
  {
    icon: GitBranch,
    eyebrow: "Self-improving",
    title: "Every campaign trains the next one.",
    body: "Between runs, the experts retrain on what worked and what didn't. The same swarm, three training generations later, breaches targets 3.5× more often.",
  },
  {
    icon: Shield,
    eyebrow: "Adapts to your defenses",
    title: "Tuned to how hard your target is.",
    body: "From undefended endpoints to agents running input filters and content guardrails, the swarm adjusts its approach. Reports include the path that got past — not just the finding.",
  },
]

export function HowTheSwarmWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            How the Swarm Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            A swarm that{" "}
            <span className="text-gradient">learns your defenses</span>
            <br />
            faster than you can ship them.
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            Built for engineers who want to see the internals. LoRA-fine-tuned experts, a bandit orchestrator, and a reinforcement-learning loop that makes every campaign smarter than the last.
          </motion.p>
        </motion.div>

        {/* Phase bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600/80">
              Campaign Phases
            </span>
          </div>

          {/* Rail with connected stations */}
          <div className="relative px-3">
            {/* Continuous track */}
            <div className="absolute left-3 right-3 top-3 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />

            <div className="relative grid grid-cols-5">
              {["Recon", "Initial Breach", "Escalation", "Exploitation", "Persistence"].map((phase, i) => (
                <div key={phase} className="flex flex-col items-center">
                  {/* Station dot */}
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white shadow-[0_0_0_2px_rgb(59_130_246/0.8)]">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  {/* Label */}
                  <div className="mt-4 text-center">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Phase {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{phase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-2.5">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600/80">
                    {pillar.eyebrow}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{pillar.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
