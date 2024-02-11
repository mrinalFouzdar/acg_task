import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import useFetch from "../hooks/useFetch";

const options = {
  indexAxis: "y",
  // aspectRatio: 2,
  scales: {
    y: {
      grid: { display: false },
      beginAtZero: true,
      stacked: true,
    },
    x: {
      trick: {
        stepSize: 10,
      },
      grid: {
        color: "gray",
      },
      border: {
        dash: [2, 4],
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

const addBackgroundColors = (rawData) => {
  const colors = ["blue", "yellow", "red", "green"]; // Define colors array
  return {
    ...rawData,
    datasets: rawData.datasets.map((dataset, index) => ({
      ...dataset,
      backgroundColor: colors[index], // Assign color from colors array based on index
    })),
  };
};

const MachineAnalysisChart = () => {
  const { data, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/machineAnalysisData`
  );
  const [machineEfficientChartData, setMachineEfficientChartData] =
    useState(null);
  useEffect(() => {
    if (data) {
      const modifyData = addBackgroundColors(data);
      setMachineEfficientChartData(modifyData);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data || !machineEfficientChartData) return;
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h4>Machine Analysis</h4>
      <Bar data={machineEfficientChartData} options={options} />
    </div>
  );
};

export default MachineAnalysisChart;
