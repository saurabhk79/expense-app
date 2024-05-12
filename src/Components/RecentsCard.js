import React, { useContext } from "react";
import Expense from "./Expense";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Context } from "../context";

const RecentsCard = () => {
  const {wallet} = useContext(Context)
  return (
    <div className="recents-card">
      <h2>Recent Transactions</h2>

      <div className="card" style={{ backgroundColor: "#fff" }}>
        <div className="recents-card">
          {wallet.transactions
            .map((expense) => {
              return <Expense key={expense.id} expense={expense} />;
            })}
        </div>

        <div className="centered">
          <button className="arrow-button">
            <BsArrowLeft />
          </button>
          <button className="page-button">1</button>
          <button className="arrow-button">
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentsCard;
