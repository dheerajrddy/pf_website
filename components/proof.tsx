"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span variants={fadeIn} className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            Detect
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Every finding ships
            <br />
            <span className="text-gradient">with replayable proof.</span>
          </motion.h2>
          <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            ProofLayer counts observable breaches, not model guesses. Your team gets the prompt, response, tool trace, and detection signal.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <Image
            src="/prooflayer-findings.svg"
            alt="ProofLayer findings infographic showing attack performance, hardened-system break rates, and self-improvement"
            width={1200}
            height={550}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
