import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useFetch from "../hooks/useFetch";
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const options = {
  indexAxis: "y",
  aspectRatio: 2,
  scales: {
    x: {
      ticks: {
        stepSize: 10, // Set the step size to 10 for the x-axis
      },
      grid: {
        color: "gray",
      },
      border: {
        dash: [2, 4],
      },
    },
    y: {
      // beginAtZero: true,
      grid: {
        display: false, // Hides the gridlines on the y-axis
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom", // Place the legend below the chart
    },
  },
  elements: {
    bar: {
      backgroundColor: "rgba(255, 99, 132, 0.6)", // Set background color for bars
    },
  },
};
const TopMachineEfficientChart = () => {
  const { data, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/efficientMachines`
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) return;

  return (
    <div>
      <h4>Top 5 Least Efficient Machines</h4>

      <Bar data={data} options={options} />
    </div>
  );
};

export default TopMachineEfficientChart;
