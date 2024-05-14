import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { Context } from "../context";

const BarGraph = () => {
  const { create_dataset, wallet } = useContext(Context);

  const dataset = create_dataset();

  const sortedDataset = Object.entries(dataset)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const categories = sortedDataset.map(([category, price]) => category);
  const prices = sortedDataset.map(([category, price]) => price);

  const chartData = {
    series: prices,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: categories,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="card">
      {wallet.transactions.length !== 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width={190}
        />
      ) : (
        "Nothing to show. Create some expenses."
      )}
    </div>
  );
};

export default BarGraph;
