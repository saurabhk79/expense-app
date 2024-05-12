import React from "react";
import {BsXCircle, BsPencil} from "react-icons/bs"

const Expense = ({icon, expense_name, date, amount}) => {
  return (
    <div className="expense">
      <div>
        {/* icon */}
        <span>
          <b>expense</b>
          <br />
          <small>May 9, 2024</small>
        </span>
      </div>

      <div>
        <b className="expense-amount">$50</b>

        <button className="delete-button"><BsXCircle /></button>
        <button className="update-button"><BsPencil /></button>
      </div>
    </div>
  );
};

export default Expense;
