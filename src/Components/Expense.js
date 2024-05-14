import React, { useContext } from "react";
import { BsXCircle, BsPencil } from "react-icons/bs";
import { Context } from "../context";

const Expense = ({ expense }) => {
  const { categories } = useContext(Context);
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

        <button className="delete-button">
          <BsXCircle />
        </button>
        <button className="update-button">
          <BsPencil />
        </button>
      </div>
    </div>
  );
};

export default Expense;
