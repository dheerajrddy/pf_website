"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CreditCard, Building2, Heart, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
    {
        id: "debt",
        icon: CreditCard,
        title: "Debt Collection",
        color: "indigo",
        needs: [
            "Verify Right Party Contact before discussing the account",
            "Never promise debt forgiveness or payment reductions",
            "Maintain FDCPA-compliant call logs for audits",
        ],
        features: [
            "State-machine enforcement blocks tools until identity verified",
            "Output guardrails sanitize promise language in real-time",
            "Immutable audit logs with cryptographic signatures",
        ],
    },
    {
        id: "mortgage",
        icon: Building2,
        title: "Mortgage Servicing",
        color: "violet",
        needs: [
            "Read mandatory disclosures verbatim every call",
            "Never expose sensitive loan data or SSNs",
            "Real-time redaction for compliance recording",
        ],
        features: [
            "Deterministic disclosure playback—word for word",
            "Presidio-powered PII redaction at audio layer",
            "WORM-compliant transcript storage",
        ],
    },
    {
        id: "healthcare",
        icon: Heart,
        title: "Healthcare Billing",
        color: "blue",
        needs: [
            "HIPAA compliance for patient financial discussions",
            "Voice authentication to prevent billing fraud",
            "Prove PHI was never stored improperly",
        ],
        features: [
            "Audio-native PHI redaction before storage",
            "Deepfake detection blocks synthetic voices",
            "Hash-verified audit trail for HIPAA audits",
        ],
    },
]

export function UseCasesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeCase = useCases[activeIndex]
    const Icon = activeCase.icon

    const colorClasses = {
        indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-600", iconBg: "bg-indigo-100" },
        violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", iconBg: "bg-violet-100" },
        blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", iconBg: "bg-blue-100" },
    }

    const colors = colorClasses[activeCase.color as keyof typeof colorClasses]

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white" id="use-cases">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Built for{" "}
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            Regulated Voice AI
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Purpose-built compliance for industries where every word is a liability.
                    </p>
                </motion.div>

                {/* Tab navigation */}
                <div className="flex justify-center gap-2 mb-12">
                    {useCases.map((useCase, index) => {
                        const TabIcon = useCase.icon
                        return (
                            <button
                                key={useCase.id}
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndex === index
                                        ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <TabIcon className="h-4 w-4" />
                                {useCase.title}
                            </button>
                        )
                    })}
                </div>

                {/* Content */}
                <motion.div
                    key={activeCase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-3xl border ${colors.border} ${colors.bg} p-8 md:p-12`}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Customer Needs */}
                        <div>
                            <div className={`inline-flex items-center gap-2 ${colors.iconBg} rounded-full px-3 py-1 text-sm font-medium ${colors.text} mb-4`}>
                                <Icon className="h-4 w-4" />
                                What You Need
                            </div>
                            <ul className="space-y-4">
                                {activeCase.needs.map((need, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-gray-700">"</span>
                                        <span className="text-gray-700 italic">{need}</span>
                                        <span className="text-gray-700">"</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Proof Layer Features */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700 mb-4 border border-gray-200">
                                <CheckCircle className="h-4 w-4 text-indigo-500" />
                                Proof Layer Solution
                            </div>
                            <ul className="space-y-4">
                                {activeCase.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation arrows for mobile */}
                <div className="flex justify-center gap-4 mt-8 md:hidden">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1))}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setActiveIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1))}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
