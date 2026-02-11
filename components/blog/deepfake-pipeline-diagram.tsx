"use client"

import { motion } from "framer-motion"
import { FileText, Waves, Music, Radio, AlertTriangle } from "lucide-react"

const pipelineSteps = [
    {
        id: "input",
        icon: FileText,
        title: "Input",
        description: "Text or source audio",
        color: "indigo",
    },
    {
        id: "acoustic",
        icon: Music,
        title: "Acoustic Model",
        description: "Text→Mel-Spectrogram",
        color: "violet",
    },
    {
        id: "vocoder",
        icon: Radio,
        title: "Neural Vocoder",
        description: "Mel→Waveform",
        color: "rose",
        artifact: true,
    },
    {
        id: "output",
        icon: Waves,
        title: "Synthetic Audio",
        description: "Deepfake output",
        color: "gray",
    },
]

const artifacts = [
    { name: "Checkerboard Patterns", description: "From transposed convolution up-sampling" },
    { name: "Phase Discontinuities", description: "At frame boundaries (every 10-30ms)" },
    { name: "High-Frequency Aliasing", description: "Spectral content violations" },
    { name: "Mel Bottleneck Smear", description: "Lost detail in fricatives (s, f, sh)" },
]

const colorClasses = {
    indigo: {
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-500",
        border: "border-indigo-200",
    },
    violet: {
        bg: "bg-violet-50",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-500",
        border: "border-violet-200",
    },
    rose: {
        bg: "bg-rose-50",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-500",
        border: "border-rose-200",
    },
    gray: {
        bg: "bg-gray-50",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
        border: "border-gray-200",
    },
}

export function DeepfakePipelineDiagram() {
    return (
        <div className="my-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Deepfake Generation Pipeline
                </h3>
                <p className="text-sm text-gray-500">
                    Where artifacts are introduced in the synthesis process
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
            >
                {/* Pipeline Flow */}
                <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2 mb-8">
                    {pipelineSteps.map((step, index) => {
                        const Icon = step.icon
                        const colors = colorClasses[step.color as keyof typeof colorClasses]

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-1 flex flex-col md:flex-row items-center"
                            >
                                {/* Step Card */}
                                <div className={`relative w-full md:flex-1 rounded-xl ${colors.bg} border ${colors.border} p-4 text-center ${step.artifact ? 'ring-2 ring-rose-300' : ''}`}>
                                    <div className={`mx-auto h-10 w-10 rounded-lg ${colors.iconBg} flex items-center justify-center mb-2`}>
                                        <Icon className={`h-5 w-5 ${colors.iconColor}`} />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>

                                    {step.artifact && (
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -top-2 -right-2 h-5 w-5 bg-rose-500 rounded-full flex items-center justify-center"
                                        >
                                            <AlertTriangle className="h-3 w-3 text-white" />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Arrow */}
                                {index < pipelineSteps.length - 1 && (
                                    <div className="hidden md:flex items-center px-1">
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="text-gray-300"
                                        >
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}
                                {index < pipelineSteps.length - 1 && (
                                    <div className="md:hidden py-1">
                                        <motion.div
                                            animate={{ y: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="text-gray-300"
                                        >
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* Artifacts Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="rounded-xl bg-rose-50 border border-rose-200 p-5"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-5 w-5 text-rose-500" />
                        <h4 className="font-semibold text-rose-900">Artifacts Introduced by Neural Vocoders</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {artifacts.map((artifact, index) => (
                            <motion.div
                                key={artifact.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="bg-white rounded-lg p-3 border border-rose-100"
                            >
                                <p className="font-medium text-gray-900 text-sm">{artifact.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{artifact.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
