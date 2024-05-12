import React from "react";
import {BsXCircle, BsPencil} from "react-icons/bs"

const Expense = ({expense}) => {
  return (
    <div className="expense">
      <div>
        {/* icon */}
        <span>
          <b>{expense.title}</b>
          <br />
          <small>{expense.date}</small>
        </span>
      </div>

      <div>
        <b className="expense-amount">{expense.price}</b>

        <button className="delete-button"><BsXCircle /></button>
        <button className="update-button"><BsPencil /></button>
      </div>
    </div>
  );
};

export default Expense;
