import React, { useContext, useEffect, useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { Context } from "../context";

const BarGraph = () => {
  const { wallet } = useContext(Context);
  const [dataset, setDataset] = useState([]);

  const memoizedDataset = useMemo(() => {
    const newDataset = {};
    wallet.transactions.forEach((item) => {
      const { category, price } = item;
      if (newDataset[category]) {
        newDataset[category] += price;
      } else {
        newDataset[category] = price;
      }
    });

    const sortedDataset = Object.entries(newDataset)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    return sortedDataset;
  }, [wallet.transactions]);

  useEffect(() => {
    setDataset(memoizedDataset);
  }, [memoizedDataset]);

  // const create_dataset = (transactions) => {
  //   const newDataset = {};

  //   transactions.forEach((item) => {
  //     const { category, price } = item;
  //     if (newDataset[category]) {
  //       newDataset[category] += price;
  //     } else {
  //       newDataset[category] = price;
  //     }
  //   });

  //   const sortedDataset = Object.entries(newDataset)
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, 3);

  //   setDataset(sortedDataset);
  // };

  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: dataset.map(([category, price]) => category),
      },
    },
    series: [
      {
        name: "series-1",
        data: dataset.map(([category, price]) => price),
      },
    ],
  };

  return (
    <div className="card" style={{ color: "black" }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width={300}
        height={180}
      />
    </div>
  );
};

export default BarGraph;
