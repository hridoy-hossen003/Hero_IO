import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AppChart = ({ ratings }) => {
  return (
    <div>
      <ResponsiveContainer>
      <BarChart layout="vertical"  data={ratings} width="100%" height="100%">
        <YAxis type="category" dataKey='name'></YAxis>
        <XAxis type="number"></XAxis>
        <Bar fill="orange" barSize={30} dataKey="count"></Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default AppChart;

// "ratings": [
//       { "name": "1 star", "count": 20 },
//       { "name": "2 star", "count": 45 },
//       { "name": "3 star", "count": 130 },
//       { "name": "4 star", "count": 330 },
//       { "name": "5 star", "count": 465 }
//     ]
