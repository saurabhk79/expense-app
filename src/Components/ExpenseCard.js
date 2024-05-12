import React, { useContext } from "react";
import { Context } from "../context";

const ExpenseCard = () => {
  const {wallet} = useContext(Context);
  return (
    <div className="expense-card card">
      <h2>Expenses - {wallet.expense_amount}</h2>
      <div className="centered">
        <button className="add-expense-button">+ Add Expenses</button>
      </div>
    </div>
  );
};

export default ExpenseCard;
