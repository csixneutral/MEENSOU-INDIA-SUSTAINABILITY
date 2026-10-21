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
          <YAxis type="category" dataKey="name" width={90} stroke="#f6f4ec" tick={{ fill: "#f6f4ec", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{ background: "#0b2820", border: "1px solid rgba(246,244,236,0.2)", color: "#f6f4ec" }}
          />
          <Bar dataKey="stoves" fill="#d8a95d" barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
