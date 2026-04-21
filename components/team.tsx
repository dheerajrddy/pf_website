"use client"

import { motion } from "framer-motion"
import { Linkedin, HelpCircle } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const team = [
  {
    name: "Divya Chitimalla",
    role: "CTO",
    bio: "Nvidia Garak contributor. Former Google — built Safe Browsing protecting 1B+ users. Deep expertise in adversarial ML and AI security.",
    linkedin: "https://linkedin.com/in/divyachitimalla",
    initials: "DC",
  },
  {
    name: "Dheeraj Reddy",
    role: "Product Lead",
    bio: "Former Google Cloud. Building the product layer that makes autonomous red-teaming accessible to every AI team.",
    linkedin: "https://linkedin.com/in/dheerajreddy",
    initials: "DR",
  },
  {
    name: "Hiring: CEO",
    role: "Chief Executive Officer",
    bio: "We're looking for a mission-driven CEO to lead ProofLayer's go-to-market and scale the company. If AI security is your calling, let's talk.",
    linkedin: "https://calendly.com/divyachitimalla/intro",
    isHiring: true,
  },
]

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-dot-pattern-light">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-600"
          >
            08 — Team
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl"
          >
            Team
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              {/* Avatar */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                {member.isHiring ? (
                  <HelpCircle className="h-10 w-10 text-cyan-500" />
                ) : (
                  <span className="text-2xl font-bold text-slate-700">{member.initials}</span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-600">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600"
              >
                <Linkedin className="h-4 w-4" />
                {member.isHiring ? "Apply Now" : "LinkedIn"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
