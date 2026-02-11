"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Lock, FileCheck } from "lucide-react"

export function VerificationSection() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-[#FAFAFA]" id="verification">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200 px-4 py-1.5 text-sm text-indigo-600 mb-6">
                            <FileCheck className="h-4 w-4" />
                            <span>Verifiable Compliance</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            Every Call. Every Word.{" "}
                            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                                Verifiable.
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Proof Layer doesn't just block bad behavior—we <span className="font-semibold">prove</span> you followed the rules.
                            When regulators or lawyers ask "Did you follow FDCPA?", hand them the proof.
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: Shield, text: "Cryptographic verification of every interaction" },
                                { icon: Lock, text: "Immutable audit logs with hash signatures" },
                                { icon: CheckCircle, text: "Instant compliance reports for regulators" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                                        <item.icon className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Certificate Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-3xl blur-2xl" />
                        <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl font-mono text-sm overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                                    <Shield className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-semibold text-gray-900">VERIFICATION CERTIFICATE</span>
                                <div className="ml-auto flex items-center gap-1 text-indigo-600 text-xs font-medium bg-indigo-50 px-2 py-1 rounded-full">
                                    <CheckCircle className="h-3 w-3" />
                                    Verified
                                </div>
                            </div>

                            {/* Certificate Content */}
                            <div className="space-y-3 text-gray-600">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Call ID:</span>
                                    <span className="text-gray-900">pl_8f7d2c4a9e...</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Timestamp:</span>
                                    <span className="text-gray-900">2026-01-19T14:32:07Z</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Identity Verified:</span>
                                    <span className="text-indigo-600 flex items-center gap-1">
                                        <CheckCircle className="h-3 w-3" /> DOB match
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">PII Redacted:</span>
                                    <span className="text-indigo-600 flex items-center gap-1">
                                        <CheckCircle className="h-3 w-3" /> 3 entities
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Disclosure Given:</span>
                                    <span className="text-indigo-600 flex items-center gap-1">
                                        <CheckCircle className="h-3 w-3" /> Mini-Miranda
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Threats Blocked:</span>
                                    <span className="text-gray-900">0</span>
                                </div>
                            </div>

                            {/* Hash Signature */}
                            <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="text-gray-400">Hash:</span>
                                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">sha256:a1b2c3d4e5f6...</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <Lock className="h-3 w-3 text-indigo-500" />
                                    <span className="text-indigo-600 font-medium">Signature: Immutable</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
