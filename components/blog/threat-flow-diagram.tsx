"use client"

import { motion } from "framer-motion"
import { Mic, UserX, Zap, FileWarning } from "lucide-react"

const threats = [
  {
    icon: Mic,
    title: "Voice Injection",
    description: "Malicious audio commands embedded in speech",
    color: "rose",
    example: "Hidden commands that bypass normal conversation flow",
  },
  {
    icon: UserX,
    title: "Deepfake Clone",
    description: "Synthetic voice impersonation attacks",
    color: "orange",
    example: "AI-generated voices mimicking authorized users",
  },
  {
    icon: Zap,
    title: "Prompt Hijacking",
    description: "Hidden commands in natural speech",
    color: "amber",
    example: "Phrases designed to manipulate agent behavior",
  },
  {
    icon: FileWarning,
    title: "Policy Bypass",
    description: "Unauthorized actions triggered",
    color: "violet",
    example: "Circumventing safety rules through social engineering",
  },
]

const colorClasses = {
  rose: {
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    border: "border-rose-200",
    ring: "ring-rose-100",
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-200",
    ring: "ring-orange-100",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    border: "border-amber-200",
    ring: "ring-amber-100",
  },
  violet: {
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    border: "border-violet-200",
    ring: "ring-violet-100",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ThreatFlowDiagram() {
  return (
    <div className="my-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice AI Threat Landscape</h3>
        <p className="text-sm text-gray-500">Common attack vectors targeting voice agents</p>
      </motion.div>

      {/* Threat Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {threats.map((threat, index) => {
          const Icon = threat.icon
          const colors = colorClasses[threat.color as keyof typeof colorClasses]

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-xl ${colors.bg} p-5 ring-1 ${colors.ring} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`shrink-0 h-10 w-10 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{threat.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{threat.description}</p>
                  <p className="text-xs text-gray-400 mt-2 italic">{threat.example}</p>
                </div>
              </div>

              {/* Animated indicator */}
              <motion.div
                className={`absolute top-3 right-3 h-2 w-2 rounded-full ${colors.iconBg}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Flow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
          These threats operate at the audio level, invisible to text-based detection
        </div>
      </motion.div>
    </div>
  )
}
