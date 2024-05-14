import React from "react";
import BarGraph from "./BarGraph";

const TopExpenses = () => {
  return (
    <div>
      <h2>Top Expenses</h2>

      <div className="top-expense-card card">
        <BarGraph />
      </div>
    </div>
  );
};

export default TopExpenses;
