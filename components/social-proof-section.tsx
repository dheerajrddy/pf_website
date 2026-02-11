"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const integrations = [
    { name: "OpenAI" },
    { name: "Anthropic" },
    { name: "Google AI" },
    { name: "GitHub Actions" },
    { name: "GitLab CI" },
]

const testimonials = [
    {
        quote: "Proof Layer caught a prompt injection vulnerability we completely missed in testing. Saved us before launch.",
        author: "Security Lead",
        company: "Enterprise AI Platform",
    },
    {
        quote: "The automated red teaming found edge cases our manual testing never discovered. Essential for any production agent.",
        author: "CISO",
        company: "Healthcare Tech Company",
    },
]

export function SocialProofSection() {
    return (
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="mx-auto max-w-7xl">
                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                        Trusted by Security Teams
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left"
                            >
                                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                                <p className="text-sm text-gray-500">
                                    — <span className="font-medium text-gray-700">{t.author}</span>, {t.company}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Integration Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                        Integrates with
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        {integrations.map((integration, i) => (
                            <div
                                key={integration.name}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                <span className="text-sm font-medium">{integration.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
