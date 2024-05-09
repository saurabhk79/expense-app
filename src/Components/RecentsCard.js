import React from "react";
import Expense from "./Expense";

const RecentsCard = () => {
  return (
    <div>
      <h2>Recent Transactions</h2>

      <div className="recents-card">
        {Array(3)
          .fill(0)
          .map(() => {
            return <Expense />;
          })}
      </div>

      <div>
        <button>{"<-"}</button>
        <button>1</button>
        <button>{"->"}</button>
      </div>
    </div>
  );
};

export default RecentsCard;
