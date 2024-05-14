import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { Context } from "../context";

const PieGraph = () => {
  const { create_dataset, wallet } = useContext(Context);

  const dataset = create_dataset();

  const categories = Object.keys(dataset);
  const prices = Object.values(dataset);

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
          type="pie"
          width={190}
        />
      ) : (
        "Nothing to show. Create some expenses."
      )}
    </div>
  );
};

export default PieGraph;
