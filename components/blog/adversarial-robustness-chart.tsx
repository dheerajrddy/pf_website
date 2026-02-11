"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts"
import { Shield, Skull } from "lucide-react"

const data = [
    { name: "Clean Audio", accuracy: 98, fill: "#4F46E5" },
    { name: "Black-box Attack", accuracy: 84, fill: "#eab308" },
    { name: "White-box (FGSM)", accuracy: 26, fill: "#ef4444" },
]

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof data[0] }> }) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload
        return (
            <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl border border-gray-700">
                <p className="font-semibold text-base">{item.name}</p>
                <p className="text-2xl font-bold mt-1" style={{ color: item.fill }}>
                    {item.accuracy}% accuracy
                </p>
            </div>
        )
    }
    return null
}

export function AdversarialRobustnessChart() {
    return (
        <div className="my-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The Adversarial Robustness Gap
                </h3>
                <p className="text-sm text-gray-500">
                    How adversarial attacks degrade detection accuracy
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
            >
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: '#374151', fontSize: 12 }}
                            axisLine={{ stroke: '#e5e7eb' }}
                        />
                        <YAxis
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            axisLine={{ stroke: '#e5e7eb' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                        <ReferenceLine y={50} stroke="#9ca3af" strokeDasharray="5 5" label={{ value: "Random guess", fill: "#9ca3af", fontSize: 11, position: "insideTopRight" }} />
                        <Bar dataKey="accuracy" radius={[8, 8, 0, 0]} animationDuration={1200}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Attack descriptions */}
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl bg-indigo-50 border border-indigo-100 p-4"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Shield className="h-4 w-4 text-indigo-500" />
                            <span className="font-semibold text-indigo-900 text-sm">Clean Audio</span>
                        </div>
                        <p className="text-xs text-indigo-700">
                            Unperturbed deepfakes. Models perform excellently under lab conditions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="rounded-xl bg-yellow-50 border border-yellow-100 p-4"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Skull className="h-4 w-4 text-yellow-600" />
                            <span className="font-semibold text-yellow-900 text-sm">Black-box Attack</span>
                        </div>
                        <p className="text-xs text-yellow-700">
                            Transferable perturbations from surrogate models. Still degrades performance significantly.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="rounded-xl bg-rose-50 border border-rose-100 p-4"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Skull className="h-4 w-4 text-rose-500" />
                            <span className="font-semibold text-rose-900 text-sm">White-box (FGSM)</span>
                        </div>
                        <p className="text-xs text-rose-700">
                            Full knowledge of detector. Near-random performance — catastrophic failure.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Robustness insight */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4 rounded-xl bg-violet-50 border border-violet-100 px-5 py-4"
            >
                <p className="text-sm text-violet-800">
                    <strong>Defense strategy:</strong> Prosodic features (Jitter, Shimmer) are more robust to adversarial noise
                    than spectral features. Multi-modal fusion combining spectral detectors with prosodic analysis creates
                    defenses that no single adversarial attack can bypass.
                </p>
            </motion.div>
        </div>
    )
}
