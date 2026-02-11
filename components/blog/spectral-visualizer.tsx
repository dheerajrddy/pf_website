"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function SpectralVisualizer() {
    return (
        <div className="my-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Text vs. Audio Analysis</h3>
                <p className="text-sm text-gray-500">Why transcription-based security misses deepfakes</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg"
            >
                {/* Desktop Layout */}
                <div className="hidden md:flex">
                    {/* Left Side - Text/Transcription */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 p-8 border-r border-gray-100"
                    >
                        <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-6">
                                Transcription
                            </span>

                            {/* Static Text Display */}
                            <div className="relative h-32 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl font-mono text-gray-800">&quot;Hello&quot;</span>
                            </div>

                            {/* Pass Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200"
                            >
                                <CheckCircle className="h-5 w-5 text-indigo-500" />
                                <span className="font-semibold text-indigo-700">PASS</span>
                            </motion.div>

                            <p className="mt-4 text-sm text-gray-500">
                                Text looks clean. No threat detected.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Audio/Spectral */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 p-8 bg-gray-50/50"
                    >
                        <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-xs font-medium text-rose-600 mb-6">
                                Raw Audio
                            </span>

                            {/* Animated Waveform with Glitchy Artifacts */}
                            <div className="relative h-32 bg-gray-900 rounded-xl overflow-hidden mb-6">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center gap-0.5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {Array.from({ length: 50 }).map((_, i) => {
                                        const isGlitch = i % 7 === 0 || i % 11 === 0
                                        return (
                                            <motion.div
                                                key={i}
                                                className={`w-1 rounded-full ${isGlitch
                                                        ? "bg-gradient-to-t from-rose-500 to-rose-400"
                                                        : "bg-gradient-to-t from-indigo-400 to-violet-400"
                                                    }`}
                                                animate={{
                                                    height: [
                                                        Math.random() * 20 + 10,
                                                        Math.random() * 40 + 20,
                                                        Math.random() * 20 + 10,
                                                    ],
                                                    opacity: isGlitch ? [1, 0.5, 1] : [1, 1, 1],
                                                }}
                                                transition={{
                                                    duration: isGlitch ? 0.3 : 0.8,
                                                    repeat: Infinity,
                                                    delay: i * 0.03,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        )
                                    })}
                                </motion.div>

                                {/* Glitch overlay effect */}
                                <motion.div
                                    className="absolute inset-0 bg-rose-500/10"
                                    animate={{
                                        opacity: [0, 0.2, 0],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            </div>

                            {/* Detected Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border-2 border-rose-300"
                            >
                                <AlertTriangle className="h-5 w-5 text-rose-500" />
                                <span className="font-semibold text-rose-700">DEEPFAKE DETECTED</span>
                            </motion.div>

                            <p className="mt-4 text-sm text-gray-500">
                                Spectral artifacts reveal synthetic voice.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-0">
                    {/* Text/Transcription */}
                    <div className="p-6 border-b border-gray-100">
                        <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-4">
                                Transcription
                            </span>

                            <div className="relative h-24 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl font-mono text-gray-800">&quot;Hello&quot;</span>
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200">
                                <CheckCircle className="h-4 w-4 text-indigo-500" />
                                <span className="text-sm font-semibold text-indigo-700">PASS</span>
                            </div>

                            <p className="mt-3 text-xs text-gray-500">
                                Text looks clean. No threat detected.
                            </p>
                        </div>
                    </div>

                    {/* Audio/Spectral */}
                    <div className="p-6 bg-gray-50/50">
                        <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-xs font-medium text-rose-600 mb-4">
                                Raw Audio
                            </span>

                            <div className="relative h-24 bg-gray-900 rounded-xl overflow-hidden mb-4">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center gap-0.5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {Array.from({ length: 35 }).map((_, i) => {
                                        const isGlitch = i % 5 === 0 || i % 8 === 0
                                        return (
                                            <motion.div
                                                key={i}
                                                className={`w-1 rounded-full ${isGlitch
                                                        ? "bg-gradient-to-t from-rose-500 to-rose-400"
                                                        : "bg-gradient-to-t from-indigo-400 to-violet-400"
                                                    }`}
                                                animate={{
                                                    height: [
                                                        Math.random() * 15 + 8,
                                                        Math.random() * 30 + 15,
                                                        Math.random() * 15 + 8,
                                                    ],
                                                    opacity: isGlitch ? [1, 0.5, 1] : [1, 1, 1],
                                                }}
                                                transition={{
                                                    duration: isGlitch ? 0.3 : 0.8,
                                                    repeat: Infinity,
                                                    delay: i * 0.03,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        )
                                    })}
                                </motion.div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border-2 border-rose-300">
                                <AlertTriangle className="h-4 w-4 text-rose-500" />
                                <span className="text-sm font-semibold text-rose-700">DEEPFAKE DETECTED</span>
                            </div>

                            <p className="mt-3 text-xs text-gray-500">
                                Spectral artifacts reveal synthetic voice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-4 bg-amber-50 border-t border-amber-100"
                >
                    <p className="text-sm text-amber-800 text-center">
                        <strong>Key insight:</strong> The same word &quot;Hello&quot; passes text analysis but fails audio analysis.
                        The threat is in the <em>sound</em>, not the <em>word</em>.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}
