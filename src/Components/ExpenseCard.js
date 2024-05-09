import React from "react";

const ExpenseCard = () => {
  return (
    <div className="expense-card card">
      <h2>Expenses - 5000</h2>
      <div className="centered">
        <button className="add-expense-button">+ Add Expenses</button>
      </div>
    </div>
  );
};

export default ExpenseCard;
