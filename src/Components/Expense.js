import React, { useContext } from "react";
import { BsXCircle, BsPencil } from "react-icons/bs";
import { Context } from "../context";

const Expense = ({ expense }) => {
  const { categories, delete_expense, update_modal_status } =
    useContext(Context);
  return (
    <div className="expense">
      <div>
        {categories[expense.category]}
        <span>
          <b>{expense.title}</b>
          <br />
          <small>{expense.date}</small>
        </span>
      </div>

      <div>
        <b className="expense-amount">{expense.price}</b>

        <button
          className="delete-button"
          onClick={() => delete_expense(expense.id)}
        >
          <BsXCircle />
        </button>
        <button
          className="update-button"
          //  onClick={() => update_modal_status()}
        >
          <BsPencil />
        </button>
      </div>
    </div>
  );
};

export default Expense;
