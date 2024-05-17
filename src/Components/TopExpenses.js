import React, { useContext, useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import { Context } from "../context";

const TopExpenses = () => {
  const { wallet } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [wallet.transactions]);

  return (
    <div>
      <h2>Top Expenses</h2>

      <div className="top-expense-card card">
        {wallet.transactions.length >= 3 && !loading ? (
          <BarGraph />
        ) : (
          <>
            Nothing to show here! Wait till loading or fill up at least three
            expense.
          </>
        )}
      </div>
    </div>
  );
};

export default TopExpenses;
