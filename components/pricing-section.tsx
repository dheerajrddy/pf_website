"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
    {
        name: "Developer",
        price: "Free",
        description: "For individual developers and small teams",
        tests: "1,000 scans",
        support: "Community",
        cta: "Start Free",
        ctaHref: "https://dashboard.proof-layer.com/dashboard",
        features: {
            codeScanning: true,
            guardrails: true,
            searchGuardrails: false,
            cicd: true,
            sso: false,
            dedicatedSupport: false,
        },
    },
    {
        name: "Team",
        price: "Custom",
        description: "For growing teams testing multiple agents",
        tests: "10,000 scans",
        support: "Email",
        popular: true,
        cta: "Book a Demo",
        ctaHref: "https://calendly.com/divyachitimalla/intro",
        features: {
            codeScanning: true,
            guardrails: true,
            searchGuardrails: true,
            cicd: true,
            sso: true,
            dedicatedSupport: false,
        },
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For organizations with compliance requirements",
        tests: "Unlimited",
        support: "Priority",
        cta: "Contact Sales",
        ctaHref: "https://calendly.com/divyachitimalla/intro",
        features: {
            codeScanning: true,
            guardrails: true,
            searchGuardrails: true,
            cicd: true,
            sso: true,
            dedicatedSupport: true,
        },
    },
]

export function PricingSection() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-[#FAFAFA]" id="pricing">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-600 mb-4">
                        Pricing
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Plans that scale{" "}
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            with you.
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From individual developers to enterprise teams. Start testing in minutes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl border bg-white p-8 ${tier.popular
                                ? "border-indigo-500 shadow-xl shadow-indigo-500/10"
                                : "border-gray-200"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-medium rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
                                <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">
                                    {tier.price}
                                </p>
                            </div>

                            <a
                                href={tier.ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full rounded-full py-3 text-center text-sm font-medium transition-all mb-8 ${
                                    tier.popular
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                                        : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                                }`}
                            >
                                {tier.cta}
                            </a>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Security Scans</span>
                                    <span className="font-semibold text-gray-900">{tier.tests}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Support</span>
                                    <span className="font-semibold text-gray-900">{tier.support}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Code Scanning</span>
                                    {tier.features.codeScanning ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Guardrails</span>
                                    {tier.features.guardrails ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Search Guardrails</span>
                                    {tier.features.searchGuardrails ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">CI/CD Integration</span>
                                    {tier.features.cicd ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">SSO</span>
                                    {tier.features.sso ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-500">Dedicated Support</span>
                                    {tier.features.dedicatedSupport ? (
                                        <Check className="h-4 w-4 text-indigo-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
