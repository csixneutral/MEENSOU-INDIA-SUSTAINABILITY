"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const stoveData = [
  { name: "Utkal Uday", stoves: 20818 },
  { name: "Koshal", stoves: 14000 },
];

export function StoveChart() {
  return (
    <div className="h-64 w-full" role="img" aria-label="Bar chart comparing 20,818 Utkal Uday stoves and 14,000 Koshal stoves">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stoveData} layout="vertical" margin={{ left: 16, right: 16, top: 8, bottom: 0 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={90} stroke="#202c2b" tick={{ fill: "#202c2b", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(18,61,47,0.06)" }}
            contentStyle={{ background: "#123d2f", border: "none", borderRadius: 12, color: "#f6f4ec" }}
          />
          <Bar dataKey="stoves" fill="#123d2f" radius={8} barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
