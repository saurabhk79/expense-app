import React, { useContext } from "react";
import { Context } from "../context";
import ExpenseModal from "./ExpenseModal";

const ExpenseCard = () => {
  const { wallet, update_modal_status } = useContext(Context);

  return (
    <div className="expense-card card">
      <h1>Expenses - {wallet.expense_amount}</h1>
      <div className="centered">
        <button
          className="add-expense-button"
          onClick={() => update_modal_status("add_expense_modal", true)}
        >
          + Add Expenses
        </button>
      </div>

      <ExpenseModal />
    </div>
  );
};

export default ExpenseCard;
