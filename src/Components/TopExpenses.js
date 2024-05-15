import React, { useContext } from "react";
import BarGraph from "./BarGraph";
import { Context } from "../context";

const TopExpenses = () => {
  const { wallet } = useContext(Context);
  return (
    <div>
      <h2>Top Expenses</h2>

      <div className="top-expense-card card">
        {wallet.transactions.length >= 3 ? <BarGraph /> : <>Nothing to show here!</>}
      </div>
    </div>
  );
};

export default TopExpenses;
