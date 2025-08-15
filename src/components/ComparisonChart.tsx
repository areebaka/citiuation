import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ComparisonChartProps {
  data: { category: string; city1: number; city2: number }[];
  city1: string;
  city2: string;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data, city1, city2 }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="city1" fill="#1976d2" name={city1} />
        <Bar dataKey="city2" fill="#d32f2f" name={city2} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ComparisonChart;