import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
export const RevPlot = () => {
  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 3000, 7000, 4000, 6000, 8000],
        fill: true,
        backgroundColor: "#1f1f1f", // Fill color
        borderColor: "#84cc16", // Line color
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Configuration for the area plot
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "",
        },
        ticks: {
          color: "white", // X-axis ticks color
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue",
        },
        ticks: {
          color: "white", // X-axis ticks color
        },
        grid: {
          display: false, // Remove grid lines on the y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white", // Legend label color
        },
      },
    },
  };
  return (
    <div
      className="mt-5 bg-neutral-900 p-5 rounded-lg hover:shadow-2xl"
      style={{ width: "100%", height: "300px" }}
    >
      <h2 className="text-lg font-semibold text-white">Revenue</h2>
      <Line data={revenueData} options={options} />
    </div>
  );
};
