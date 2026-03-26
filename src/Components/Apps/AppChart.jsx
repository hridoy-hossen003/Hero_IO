import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppChart = ({ ratings }) => {
  // console.log(ratings);
  const [rating, setRating] = useState([]);
  console.log(rating);
  useEffect(() => {
    const newRatings = [...ratings].sort(
      (a, b) => Number(b.name.charAt(0)) - Number(a.name.charAt(0)),
    );
    setRating(newRatings);
  }, [ratings]);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Ratings</h2>
      <ResponsiveContainer md:width={1000} height={500}>
        <BarChart layout="vertical" data={rating} width="100%" height="100%">
          <Tooltip></Tooltip>
          <Legend></Legend>
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          ></YAxis>
          <XAxis type="number" axisLine={false} tickLine={false}></XAxis>
          <Bar
            fill="orange"
            barSize={50}
            radius={[0, 20, 20, 0]}
            dataKey="count"
          ></Bar>
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
