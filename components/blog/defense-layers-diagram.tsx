"use client"

import { motion } from "framer-motion"
import { Regex, Brain, MessagesSquare, ShieldCheck, ChevronDown, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

const layers = [
  {
    step: 1,
    icon: Regex,
    title: "Pattern Matching",
    description: "Regex-based detection scans for known injection signatures, exfiltration patterns, and credential access attempts.",
    timing: "< 1ms",
    color: "indigo",
  },
  {
    step: 2,
    icon: Brain,
    title: "Semantic Analysis",
    description: "Risk scoring by category — evaluates intent, not just keywords. Catches obfuscated and novel attack patterns.",
    timing: "< 10ms",
    color: "violet",
  },
  {
    step: 3,
    icon: MessagesSquare,
    title: "Context Awareness",
    description: "Multi-turn conversation analysis detects gradual privilege escalation and split-payload attacks across messages.",
    timing: "< 15ms",
    color: "purple",
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: "Action Enforcement",
    description: "Final verdict with risk scores: BLOCK dangerous prompts, WARN on suspicious activity, ALLOW safe requests.",
    timing: "< 1ms",
    color: "indigo",
  },
]

const layerColorClasses = {
  indigo: {
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    stepBg: "bg-indigo-600",
  },
  violet: {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    stepBg: "bg-violet-600",
  },
  purple: {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    stepBg: "bg-purple-600",
  },
}

export function DefenseLayersDiagram() {
  return (
    <div className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">4-Layer Defense Pipeline</h3>
        <p className="text-sm text-gray-500">Every prompt passes through all layers before reaching the agent</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg"
      >
        {layers.map((layer, index) => {
          const Icon = layer.icon
          const colors = layerColorClasses[layer.color as keyof typeof layerColorClasses]
          const isLast = index === layers.length - 1

          return (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`p-6 ${index % 2 === 1 ? "bg-gray-50/50" : ""}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-7 w-7 rounded-full ${colors.stepBg} flex items-center justify-center text-white text-xs font-bold`}>
                      {layer.step}
                    </div>
                    <div className={`h-8 w-8 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-4 w-4 ${colors.iconColor}`} />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{layer.title}</span>
                  </div>
                  <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                    {layer.timing}
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-[4.75rem]">{layer.description}</p>
              </motion.div>

              {!isLast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="flex justify-center -my-1 relative z-10"
                >
                  <ChevronDown className="h-5 w-5 text-gray-300" />
                </motion.div>
              )}
            </div>
          )
        })}

        {/* Verdict output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="p-6 bg-gray-50/50 border-t border-gray-100"
        >
          <div className="flex justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center p-3 rounded-xl bg-rose-50 border border-rose-200 min-w-[90px]"
            >
              <XCircle className="h-6 w-6 text-rose-500 mb-1" />
              <span className="text-xs font-semibold text-rose-700">BLOCK</span>
              <span className="text-[10px] text-rose-400 mt-0.5">score &gt; 0.8</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.95 }}
              className="flex flex-col items-center p-3 rounded-xl bg-amber-50 border border-amber-200 min-w-[90px]"
            >
              <AlertTriangle className="h-6 w-6 text-amber-500 mb-1" />
              <span className="text-xs font-semibold text-amber-700">WARN</span>
              <span className="text-[10px] text-amber-400 mt-0.5">score 0.4–0.8</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="flex flex-col items-center p-3 rounded-xl bg-emerald-50 border-2 border-emerald-200 min-w-[90px]"
            >
              <CheckCircle className="h-6 w-6 text-emerald-500 mb-1" />
              <span className="text-xs font-semibold text-emerald-700">ALLOW</span>
              <span className="text-[10px] text-emerald-400 mt-0.5">score &lt; 0.4</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
