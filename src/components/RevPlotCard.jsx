import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const RevPlot = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [
      {
        label: "Revenue",
        data: [],
        fill: true,
        backgroundColor: "#1f1f1f",
        borderColor: "#84cc16",
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    async function fetchDealsData() {
      const { data: deals, error } = await supabase
        .from("Deals")
        .select("value, deal_date")
        .eq("column", "Closed");

      if (error) {
        console.error("Error fetching deals data:", error.message);
        return;
      }

      const aggregatedData = aggregateDataByYear(deals);
      const labels = Object.keys(aggregatedData).sort();
      const values = labels.map((year) => aggregatedData[year]);

      setRevenueData((prevData) => ({
        ...prevData,
        labels: labels,
        datasets: [
          {
            ...prevData.datasets[0],
            data: values,
          },
        ],
      }));
    }

    fetchDealsData();
  }, []);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue",
        },
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
    },
  };

  const aggregateDataByYear = (deals) => {
    const aggregatedData = {};

    deals.forEach((deal) => {
      const year = getYearFromDate(deal.deal_date);
      aggregatedData[year] = aggregatedData[year]
        ? aggregatedData[year] + deal.value
        : deal.value;
    });

    return aggregatedData;
  };

  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <div
      className="mt-5 bg-neutral-800 p-5 rounded-lg hover:shadow-2xl"
      style={{ width: "100%", height: "300px" }}
    >
      <h2 className="text-lg font-semibold text-white">Revenue</h2>
      <Line data={revenueData} options={options} />
    </div>
  );
};
