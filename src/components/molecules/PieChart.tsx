import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

interface PieChartProps {
  pieData: {
    labels: string[];
    values: number[];
  };
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}

const PieChart: React.FC<PieChartProps> = ({ pieData }) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
      },
    ],
  });

  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pieData) {
      setChartData({
        labels: pieData.labels,
        datasets: [
          {
            data: pieData.values,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCD56"],
          },
        ],
      });
      setLoading(false);
    }
  }, [pieData]);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center p-4   rounded-lg">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
