import React from "react";

const Expense = () => {
  return (
    <div>
      <div>
        icon
        <span>
          <b>expense</b>
          <small>May 9, 2024</small>
        </span>
      </div>

      <div>
        <b>$50</b>

        <button>del</button>
        <button>upd</button>
      </div>
    </div>
  );
};

export default Expense;
