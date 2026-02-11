"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
    { name: "NeXt-TDNN", eer: 0.42, type: "SSL + TDNN", color: "#4F46E5" },
    { name: "AASIST", eer: 0.83, type: "GNN", color: "#6366F1" },
    { name: "VGG16+CQT", eer: 1.8, type: "CNN", color: "#818CF8" },
    { name: "RawNet2", eer: 2.5, type: "End-to-End", color: "#eab308" },
    { name: "ResNet+Mel", eer: 3.5, type: "CNN Baseline", color: "#f97316" },
]

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof data[0] }> }) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload
        return (
            <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl border border-gray-700">
                <p className="font-semibold text-base">{item.name}</p>
                <p className="text-sm text-gray-300 mt-1">Architecture: {item.type}</p>
                <p className="text-lg font-bold mt-2" style={{ color: item.color }}>
                    EER: {item.eer}%
                </p>
            </div>
        )
    }
    return null
}

export function EerComparisonChart() {
    return (
        <div className="my-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Detection Model Performance (ASVspoof 2019 LA)
                </h3>
                <p className="text-sm text-gray-500">
                    Equal Error Rate (EER) — Lower is better
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
            >
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, 4]}
                            tickFormatter={(value) => `${value}%`}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                        />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
                            width={75}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                        <Bar dataKey="eer" radius={[0, 6, 6, 0]} animationDuration={1200}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-indigo-500" />
                        <span className="text-gray-600">SSL-based (State-of-the-Art)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="text-gray-600">End-to-End Models</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-orange-500" />
                        <span className="text-gray-600">CNN Baselines</span>
                    </div>
                </div>
            </motion.div>

            {/* Insight callout */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 rounded-xl bg-indigo-50 border border-indigo-100 px-5 py-4"
            >
                <p className="text-sm text-indigo-800">
                    <strong>Key insight:</strong> Self-Supervised Learning (SSL) models like NeXt-TDNN achieve
                    8× lower error rates than traditional CNN baselines by learning robust speech representations
                    from massive unlabeled audio datasets.
                </p>
            </motion.div>
        </div>
    )
}
