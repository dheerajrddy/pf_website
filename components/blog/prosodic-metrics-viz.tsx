"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

// Simulated F0 (pitch) contour data over time
const pitchData = Array.from({ length: 50 }, (_, i) => ({
    time: i * 20,
    human: 150 + Math.sin(i * 0.3) * 20 + (Math.random() - 0.5) * 15, // Natural variation + micro-tremors
    ai: 150 + Math.sin(i * 0.3) * 20 + (Math.random() - 0.5) * 3, // Too smooth, minimal variation
}))

const prosodicMetrics = [
    {
        name: "Jitter",
        description: "Pitch variation (cycle-to-cycle)",
        human: { value: "1.2%", label: "Natural micro-tremors" },
        ai: { value: "0.3%", label: "Unnaturally stable" },
        humanPercent: 80,
        aiPercent: 20,
    },
    {
        name: "Shimmer",
        description: "Amplitude variation (cycle-to-cycle)",
        human: { value: "3.8%", label: "Breath dynamics" },
        ai: { value: "0.9%", label: "Too consistent" },
        humanPercent: 85,
        aiPercent: 22,
    },
    {
        name: "HNR",
        description: "Harmonics-to-Noise Ratio",
        human: { value: "18 dB", label: "Natural breathiness" },
        ai: { value: "25 dB", label: "Artificially clean" },
        humanPercent: 65,
        aiPercent: 95,
    },
]

export function ProsodicMetricsViz() {
    return (
        <div className="my-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Prosodic Forensics: Human vs. AI Voice
                </h3>
                <p className="text-sm text-gray-500">
                    Micro-deviations that reveal synthetic speech
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
            >
                {/* Pitch Contour Chart */}
                <div className="p-6 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-1">F₀ Pitch Contour Over Time</h4>
                    <p className="text-sm text-gray-500 mb-4">
                        Notice how the AI voice lacks natural micro-tremors
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={pitchData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis
                                dataKey="time"
                                tick={{ fill: '#6b7280', fontSize: 11 }}
                                tickFormatter={(v) => `${v}ms`}
                                interval={9}
                            />
                            <YAxis
                                domain={[100, 200]}
                                tick={{ fill: '#6b7280', fontSize: 11 }}
                                tickFormatter={(v) => `${v}Hz`}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="human"
                                name="Human Voice"
                                stroke="#6366F1"
                                strokeWidth={2}
                                dot={false}
                                animationDuration={1500}
                            />
                            <Line
                                type="monotone"
                                dataKey="ai"
                                name="AI Voice"
                                stroke="#f43f5e"
                                strokeWidth={2}
                                dot={false}
                                strokeDasharray="5 5"
                                animationDuration={1500}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Metrics Comparison */}
                <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Voice Quality Metrics</h4>
                    <div className="space-y-6">
                        {prosodicMetrics.map((metric, index) => (
                            <motion.div
                                key={metric.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <span className="font-medium text-gray-900">{metric.name}</span>
                                        <span className="text-sm text-gray-500 ml-2">{metric.description}</span>
                                    </div>
                                </div>

                                {/* Human bar */}
                                <div className="mb-2">
                                    <div className="flex items-center justify-between text-xs mb-1">
                                        <span className="text-indigo-600 font-medium">Human</span>
                                        <span className="text-gray-500">{metric.human.value} — {metric.human.label}</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${metric.humanPercent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.15 }}
                                            className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* AI bar */}
                                <div>
                                    <div className="flex items-center justify-between text-xs mb-1">
                                        <span className="text-rose-600 font-medium">AI Synthetic</span>
                                        <span className="text-gray-500">{metric.ai.value} — {metric.ai.label}</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${metric.aiPercent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                                            className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom insight */}
                <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
                    <p className="text-sm text-amber-800 text-center">
                        <strong>Key insight:</strong> AI voices are often &quot;too perfect&quot; — lacking the natural physiological
                        jitter and shimmer of human vocal cords. This mathematical cleanliness is itself a detection signal.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
