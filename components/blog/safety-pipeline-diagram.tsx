"use client"

import { motion } from "framer-motion"
import { Activity, Cpu, Shield, CheckCircle, AlertTriangle, XCircle, FileText } from "lucide-react"

const features = [
  { name: "Spectral", description: "Frequency patterns" },
  { name: "Prosodic", description: "Pitch & rhythm" },
  { name: "Semantic", description: "Content meaning" },
  { name: "Temporal", description: "Time patterns" },
]

const detectors = [
  { name: "Injection", score: "0.02", status: "safe", icon: Shield },
  { name: "Deepfake", score: "0.05", status: "safe", icon: Activity },
  { name: "Policy", score: "0.98", status: "safe", icon: FileText },
]

export function SafetyPipelineDiagram() {
  return (
    <div className="my-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Safety Pipeline</h3>
        <p className="text-sm text-gray-500">From audio stream to decision in under 50ms</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg"
      >
        {/* Stage 1: Audio Stream */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 border-b border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Activity className="h-4 w-4 text-indigo-500" />
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-900">Audio Stream</span>
              <span className="text-xs text-gray-500 ml-2">Input</span>
            </div>
          </div>

          {/* Animated Waveform */}
          <div className="relative h-16 bg-gray-50 rounded-xl overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-indigo-400 to-violet-400 rounded-full"
                  animate={{
                    height: [
                      Math.random() * 20 + 10,
                      Math.random() * 40 + 20,
                      Math.random() * 20 + 10,
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stage 2: Feature Extraction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-6 border-b border-gray-100 bg-gray-50/50"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center">
                <Cpu className="h-4 w-4 text-violet-500" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Feature Extraction</span>
                <span className="text-xs text-gray-500 ml-2">Stage 1</span>
              </div>
            </div>
            <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              &lt;10ms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-lg bg-white border border-gray-200 p-3 text-center"
              >
                <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                <div className="text-xs text-gray-500">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stage 3: Parallel Detection Models */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-6 border-b border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Shield className="h-4 w-4 text-indigo-500" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Parallel Detection Models</span>
                <span className="text-xs text-gray-500 ml-2">Stage 2</span>
              </div>
            </div>
            <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              &lt;30ms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {detectors.map((detector, index) => {
              const Icon = detector.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="rounded-xl bg-white border border-gray-200 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-md bg-gray-100 flex items-center justify-center">
                      <Icon className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{detector.name} Detector</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Score:</div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-mono font-bold text-gray-900">{detector.score}</span>
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${parseFloat(detector.score) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stage 4: Decision & Enforcement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="p-6 border-b border-gray-100 bg-gray-50/50"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-indigo-500" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Decision & Enforcement</span>
                <span className="text-xs text-gray-500 ml-2">Stage 3</span>
              </div>
            </div>
            <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              &lt;5ms
            </span>
          </div>

          <div className="flex justify-center gap-4">
            {/* Allow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center p-4 rounded-xl bg-indigo-50 border-2 border-indigo-200 min-w-[100px]"
            >
              <CheckCircle className="h-8 w-8 text-indigo-500 mb-2" />
              <span className="text-sm font-semibold text-indigo-700">ALLOW</span>
            </motion.div>

            {/* Warn */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85 }}
              className="flex flex-col items-center p-4 rounded-xl bg-amber-50 border border-amber-200 min-w-[100px] opacity-50"
            >
              <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-sm font-semibold text-amber-700">WARN</span>
            </motion.div>

            {/* Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center p-4 rounded-xl bg-rose-50 border border-rose-200 min-w-[100px] opacity-50"
            >
              <XCircle className="h-8 w-8 text-rose-500 mb-2" />
              <span className="text-sm font-semibold text-rose-700">BLOCK</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stage 5: Audit Log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <FileText className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-900">Audit Log</span>
              <span className="text-xs text-gray-500 ml-2">Compliance Record</span>
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left pr-4 pb-2">timestamp</th>
                  <th className="text-left pr-4 pb-2">session_id</th>
                  <th className="text-left pr-4 pb-2">action</th>
                  <th className="text-left pr-4 pb-2">confidence</th>
                  <th className="text-left pb-2">reason</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="text-gray-300"
                >
                  <td className="pr-4 py-1 text-gray-500">10:23:45</td>
                  <td className="pr-4 py-1 text-indigo-400">abc123</td>
                  <td className="pr-4 py-1 text-indigo-400">ALLOW</td>
                  <td className="pr-4 py-1 text-amber-400">0.98</td>
                  <td className="py-1 text-gray-400">policy_pass</td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
