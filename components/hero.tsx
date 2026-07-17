"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Github } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import { CALENDLY_URL, SINEWAVE_GITHUB_URL } from "@/lib/links"
import { SwarmBackground } from "@/components/swarm-background"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-5 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <SwarmBackground />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex h-full flex-col">
            <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} className="text-[48px] font-extrabold leading-[1.02] tracking-tighter text-gray-900 sm:text-[68px] lg:text-[68px]">
              Prove your AI
              <br />
              is secure.
              <br />
              <span className="text-gradient">Continuously.</span>
            </motion.h1>

            <motion.p variants={fadeIn} transition={{ duration: 0.7 }} className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
              ProofLayer scans AI code before deployment, red-teams every agent continuously, and protects MCP traffic at runtime. Every finding becomes audit-ready evidence for SOC 2, NIST AI RMF, EU AI Act, and ISO 42001.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-auto flex flex-col items-start gap-3 pt-7 sm:flex-row sm:items-center sm:gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-gray-800">
                <Calendar className="h-4 w-4" />
                Talk to us
              </a>
              <a href={SINEWAVE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all hover:border-gray-400 hover:bg-gray-50">
                <Github className="h-4 w-4" />
                Start with open source
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="hidden lg:block">
            <Image src="/prooflayer-architecture.svg" alt="ProofLayer architecture: three products feed one security plane and one vulnerability report" width={720} height={610} priority className="mx-auto h-auto max-h-[546px] w-full object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
