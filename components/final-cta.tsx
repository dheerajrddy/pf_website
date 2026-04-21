"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations"
import { CALENDLY_URL } from "@/lib/links"

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
            className="text-balance text-[40px] font-extrabold leading-[1.05] tracking-tighter text-gray-900 sm:text-5xl lg:whitespace-nowrap lg:text-[68px]"
          >
            Start <span className="whitespace-nowrap">red-teaming</span>{" "}
            <span className="text-gradient whitespace-nowrap">your AI.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-8 text-xl text-gray-500 sm:text-2xl"
          >
            See what attackers see — before they do.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Talk to us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
