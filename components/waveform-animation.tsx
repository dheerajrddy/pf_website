"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function WaveformAnimation() {
  // Generate smooth wave points for SVG path
  const generateWavePath = (
    amplitude: number,
    frequency: number,
    offset: number
  ) => {
    const points: string[] = []
    const width = 200
    const height = 80
    const centerY = height / 2

    for (let x = 0; x <= width; x += 2) {
      const normalizedX = (x / width) * Math.PI * frequency
      const y = centerY + Math.sin(normalizedX + offset) * amplitude
      points.push(`${x},${y}`)
    }

    return `M ${points.join(" L ")}`
  }

  // Generate noisy/malicious wave with irregular spikes
  const generateNoisyWavePath = (
    amplitude: number,
    frequency: number,
    offset: number,
    noiseLevel: number
  ) => {
    const points: string[] = []
    const width = 200
    const height = 80
    const centerY = height / 2

    // Use deterministic pseudo-random noise based on offset
    const noise = (x: number, seed: number) => {
      const n = Math.sin(x * 12.9898 + seed * 78.233) * 43758.5453
      return (n - Math.floor(n)) * 2 - 1
    }

    for (let x = 0; x <= width; x += 2) {
      const normalizedX = (x / width) * Math.PI * frequency
      const baseWave = Math.sin(normalizedX + offset) * amplitude
      const noiseValue = noise(x, offset) * noiseLevel
      // Add sharp spikes at certain intervals to represent malicious content
      const spike = (x % 30 < 4) ? noise(x, offset * 2) * noiseLevel * 1.5 : 0
      const y = centerY + baseWave + noiseValue + spike
      points.push(`${x},${y}`)
    }

    return `M ${points.join(" L ")}`
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main container - light, friendly design */}
      <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-violet-100 blur-2xl" />

        <div className="relative flex items-center justify-between gap-6">
          {/* Input Wave (Left - noisy/malicious) */}
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                Unverified Input
              </span>
            </div>
            <svg viewBox="0 0 200 80" className="w-full h-20">
              <defs>
                <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="noiseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Base wave */}
              <motion.path
                d={generateNoisyWavePath(18, 6, 0, 8)}
                fill="none"
                stroke="url(#inputGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  d: [
                    generateNoisyWavePath(18, 6, 0, 8),
                    generateNoisyWavePath(20, 6, 1, 10),
                    generateNoisyWavePath(16, 6, 2, 9),
                    generateNoisyWavePath(18, 6, 3, 8),
                  ]
                }}
                transition={{
                  pathLength: { duration: 1, ease: "easeOut" },
                  opacity: { duration: 0.5 },
                  d: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
              />
              {/* Noise/malicious overlay spikes */}
              <motion.path
                d={generateNoisyWavePath(10, 12, 0, 15)}
                fill="none"
                stroke="url(#noiseGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  d: [
                    generateNoisyWavePath(10, 12, 0, 15),
                    generateNoisyWavePath(12, 12, 1.5, 18),
                    generateNoisyWavePath(8, 12, 3, 12),
                    generateNoisyWavePath(10, 12, 4.5, 15),
                  ]
                }}
                transition={{
                  opacity: { duration: 2, repeat: Infinity },
                  d: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
              />
            </svg>
          </div>

          {/* ProofLayer Badge (Center) */}
          <div className="flex flex-col items-center px-4">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Central badge */}
              <motion.div
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/25"
                animate={{
                  boxShadow: [
                    "0 10px 40px -10px rgba(99, 102, 241, 0.25)",
                    "0 10px 50px -10px rgba(99, 102, 241, 0.35)",
                    "0 10px 40px -10px rgba(99, 102, 241, 0.25)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ProofLayer Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />

                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-indigo-400"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-xs font-semibold text-indigo-600">
                  ProofLayer
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Output Wave (Right - soft indigo) */}
          <div className="flex-1">
            <div className="mb-3 flex items-center justify-end gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                Verified
                <CheckCircle className="h-3 w-3" />
              </span>
            </div>
            <svg viewBox="0 0 200 80" className="w-full h-20">
              <defs>
                <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Animated smooth wave */}
              <motion.path
                d={generateWavePath(18, 4, 0)}
                fill="none"
                stroke="url(#outputGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  d: [
                    generateWavePath(18, 4, 0),
                    generateWavePath(18, 4, 1),
                    generateWavePath(18, 4, 2),
                    generateWavePath(18, 4, 3),
                  ]
                }}
                transition={{
                  pathLength: { duration: 1, ease: "easeOut", delay: 0.5 },
                  opacity: { duration: 0.5, delay: 0.5 },
                  d: { duration: 5, repeat: Infinity, ease: "linear" }
                }}
              />
            </svg>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wider">Latency</div>
            <div className="mt-1 font-mono text-xl font-bold text-indigo-600">&lt;50ms</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wider">Detection</div>
            <div className="mt-1 font-mono text-xl font-bold text-violet-600">Real-time</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wider">Coverage</div>
            <div className="mt-1 font-mono text-xl font-bold text-indigo-600">100%</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
