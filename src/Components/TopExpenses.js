import React from "react";
import BarGraph from "./BarGraph";

const TopExpenses = () => {
  return (
    <div>
      <h1>Top Expenses</h1>

      <div className="top-expense-card card">
        <BarGraph />
      </div>
    </div>
  );
};

export default TopExpenses;
