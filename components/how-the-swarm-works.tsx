"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

export function HowTheSwarmWorks() {
  return (
    <section id="platform" className="scroll-mt-24 bg-gray-50/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <span id="red-team" className="block scroll-mt-24" aria-hidden="true" />
      <span id="evidence" className="block scroll-mt-24" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span variants={fadeIn} className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            The ProofLayer loop
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Attack. Detect. Prove.
            <br />
            <span className="text-gradient">Then run it again.</span>
          </motion.h2>
          <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Continuous attacks create current evidence. New models, tools, and agent workflows enter the same loop as you ship them.
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
            src="/prooflayer-loop.svg"
            alt="ProofLayer continuous security loop: autonomous attacks become verified findings, then audit-ready evidence, and repeat after every release"
            width={1200}
            height={500}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
