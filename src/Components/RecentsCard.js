import React from "react";
import Expense from "./Expense";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const RecentsCard = () => {
  return (
    <div className="recents-card">
      <h2>Recent Transactions</h2>

      <div className="card" style={{ backgroundColor: "#fff" }}>
        <div className="recents-card">
          {Array(3)
            .fill(0)
            .map(() => {
              return <Expense />;
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
