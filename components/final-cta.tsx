"use client"

import { motion } from "framer-motion"
import { Calendar, Shield } from "lucide-react"
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations"

export function FinalCta() {
  return (
    <section className="bg-gray-50/50 bg-dot-pattern px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]"
          >
            Start red-teaming
            <br />
            <span className="text-gradient">your AI.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-8 text-xl text-gray-500 sm:text-2xl"
          >
            See what attackers see — before they do.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
          >
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
            </a>
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-indigo-200 bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-50 hover:scale-[1.02]"
            >
              <Shield className="h-4 w-4" />
              Free AI Security Assessment
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
