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
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: "series-1",
        data: prices,
      },
    ],
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
