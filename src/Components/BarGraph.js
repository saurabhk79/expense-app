import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { Context } from "../context";

const PieGraph = () => {
  const { create_dataset, wallet } = useContext(Context);

  const chart = create_dataset();

  return (
    <div className="card">
      {wallet.transactions.length !== 0 ? (
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          width={190}
        />
      ) : (
        "Nothing to show. Create some expenses."
      )}
    </div>
  );
};

export default PieGraph;
