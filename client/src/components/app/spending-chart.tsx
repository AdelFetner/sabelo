"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function SpendingChart() {
    const data = [
        { name: "Housing", value: 1200, color: "#3b82f6" },
        { name: "Food", value: 500, color: "#f97316" },
        { name: "Transportation", value: 300, color: "#8b5cf6" },
        { name: "Entertainment", value: 200, color: "#ec4899" },
        { name: "Shopping", value: 150, color: "#10b981" },
        { name: "Utilities", value: 100, color: "#f59e0b" },
        { name: "Other", value: 90, color: "#6b7280" },
    ]

    return (
        <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value, name) => [`$${value}`, name]}
                        contentStyle={{
                            backgroundColor: "#1a1a1a",
                            border: "1px solid #333",
                            borderRadius: "0.5rem",
                        }}
                        labelStyle={{ color: "white" }}
                        itemStyle={{ color: "white" }}
                    />
                </PieChart>
            </ResponsiveContainer>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center">
                        <div className={`mr-1 h-2 w-2 rounded-full ${item.color}`} />
                        <span className="text-xs">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
