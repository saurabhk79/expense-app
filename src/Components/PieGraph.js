import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Context } from "../context";

const PieGraph = () => {
  const { wallet } = useContext(Context);
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    create_dataset(wallet.transactions);
  }, [wallet.transactions]);

  const create_dataset = (transactions) => {
    const newDataset = {};

    transactions.forEach((item) => {
      const { category, price } = item;
      if (newDataset[category]) {
        newDataset[category] += price;
      } else {
        newDataset[category] = price;
      }
    });

    setDataset(newDataset);
  };

  // useEffect(() => {
  //   create_dataset(); // Call create_dataset function on mount
  // }, []);

  const chartData = {
    series: Object.values(dataset),
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: Object.keys(dataset),
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
    <div className="card pie-card">
      {wallet.transactions.length !== 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={300}
        />
      ) : (
        "Nothing to show. Create some expenses."
      )}
    </div>
  );
};

export default PieGraph;
